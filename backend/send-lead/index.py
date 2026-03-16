import json
import os
import smtplib
import urllib.request
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Принимает заявку с сайта и отправляет её в Telegram и на email."""
    cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors_headers, 'body': ''}

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    message = body.get('message', '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': cors_headers,
            'body': json.dumps({'error': 'Имя и телефон обязательны'}),
        }

    errors = []

    # Telegram
    try:
        token = os.environ['TELEGRAM_BOT_TOKEN']
        chat_id = os.environ['TELEGRAM_CHAT_ID']
        text = (
            f"🔔 *Новая заявка с сайта*\n\n"
            f"👤 *Имя:* {name}\n"
            f"📞 *Телефон:* {phone}\n"
        )
        if message:
            text += f"💬 *Сообщение:* {message}\n"

        tg_url = f"https://api.telegram.org/bot{token}/sendMessage"
        tg_data = json.dumps({
            'chat_id': chat_id,
            'text': text,
            'parse_mode': 'Markdown',
        }).encode('utf-8')
        req = urllib.request.Request(tg_url, data=tg_data, headers={'Content-Type': 'application/json'})
        urllib.request.urlopen(req, timeout=10)
    except Exception as e:
        errors.append(f'telegram: {e}')

    # Email
    try:
        smtp_host = os.environ['SMTP_HOST']
        smtp_user = os.environ['SMTP_USER']
        smtp_password = os.environ['SMTP_PASSWORD']
        smtp_to = os.environ['SMTP_TO']

        msg = MIMEMultipart('alternative')
        msg['Subject'] = f'Новая заявка: {name}'
        msg['From'] = smtp_user
        msg['To'] = smtp_to

        html_body = f"""
        <html><body style="font-family:sans-serif;color:#222;max-width:500px;margin:0 auto">
          <h2 style="color:#111">🔔 Новая заявка с сайта</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#666;width:120px">Имя</td><td style="padding:8px 0;font-weight:bold">{name}</td></tr>
            <tr><td style="padding:8px 0;color:#666">Телефон</td><td style="padding:8px 0;font-weight:bold">{phone}</td></tr>
            {'<tr><td style="padding:8px 0;color:#666">Сообщение</td><td style="padding:8px 0">' + message + '</td></tr>' if message else ''}
          </table>
        </body></html>
        """
        msg.attach(MIMEText(html_body, 'html', 'utf-8'))

        smtp_port = 465
        with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
            server.login(smtp_user, smtp_password)
            server.sendmail(smtp_user, smtp_to, msg.as_string())
    except Exception as e:
        errors.append(f'email: {e}')

    if errors:
        return {
            'statusCode': 500,
            'headers': cors_headers,
            'body': json.dumps({'error': '; '.join(errors)}),
        }

    return {
        'statusCode': 200,
        'headers': cors_headers,
        'body': json.dumps({'ok': True}),
    }
