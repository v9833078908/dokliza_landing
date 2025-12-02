# Инструкция по деплою dokliza на VPS Beget

## Обзор

Миграция с Vercel на VPS Beget с использованием:
- **VPS**: 155.212.218.42 (Beget)
- **Веб-сервер**: Caddy
- **CI/CD**: GitHub Actions
- **Домен**: dokliza.com

## Шаг 1: Настройка VPS

### Подключение к VPS
```bash
ssh root@155.212.218.42
```

### Автоматическая настройка
Скачайте и запустите скрипт настройки:
```bash
wget https://raw.githubusercontent.com/your-repo/dokliza/main/setup-vps.sh
chmod +x setup-vps.sh
./setup-vps.sh
```

### Ручная настройка (если нужно)

1. **Обновление системы**
```bash
apt update && apt upgrade -y
```

2. **Установка Node.js**
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
apt install -y nodejs
```

3. **Установка Caddy**
```bash
apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | tee /etc/apt/sources.list.d/caddy-stable.list
apt update && apt install -y caddy
```

## Шаг 2: Настройка проекта на VPS

### Клонирование репозитория
```bash
mkdir -p /var/www/dokliza-source
cd /var/www/dokliza-source

# Клонируйте ваш репозиторий
git clone <URL-вашего-репозитория> .

# Установка зависимостей
npm install

# Сборка проекта
npm run build
```

### Настройка Caddy
```bash
# Копирование конфигурации
cp Caddyfile /etc/caddy/

# Редактирование email для Let's Encrypt
nano /etc/caddy/Caddyfile
# Раскомментируйте и обновите email в секции tls

# Проверка конфигурации
caddy validate --config /etc/caddy/Caddyfile

# Создание веб-директории
mkdir -p /var/www/dokliza
rsync -av --delete dist/ /var/www/dokliza/
chown -R www-data:www-data /var/www/dokliza
```

### Запуск Caddy
```bash
systemctl enable caddy
systemctl start caddy
systemctl status caddy
```

## Шаг 3: Настройка GitHub Actions

### SSH ключи для деплоя
```bash
# Генерация SSH ключа для GitHub Actions
ssh-keygen -t ed25519 -f ~/.ssh/github-actions -N ''

# Добавление публичного ключа в authorized_keys
cat ~/.ssh/github-actions.pub >> ~/.ssh/authorized_keys

# Показать приватный ключ для добавления в GitHub Secrets
echo "Скопируйте этот приватный ключ в GitHub Secrets как VPS_SSH_KEY:"
cat ~/.ssh/github-actions
```

### GitHub Secrets

В настройках вашего репозитория GitHub добавьте следующие секреты:

- **VPS_HOST**: `155.212.218.42`
- **VPS_USERNAME**: `root`  
- **VPS_SSH_KEY**: содержимое файла `~/.ssh/github-actions`

### Тестирование деплоя
После настройки секретов, сделайте commit и push в ветку `main`:

```bash
git add .
git commit -m "Setup VPS deployment"
git push origin main
```

## Шаг 4: Настройка DNS

Обновите DNS записи для домена dokliza.com:

### A-запись
```
Type: A
Name: @
Value: 155.212.218.42
TTL: 3600
```

### CNAME-запись (для www)
```
Type: CNAME  
Name: www
Value: dokliza.com
TTL: 3600
```

### Проверка DNS
```bash
# Проверка A-записи
dig dokliza.com A

# Проверка CNAME
dig www.dokliza.com CNAME
```

## Шаг 5: Проверка работы

### Проверка доступности
```bash
# HTTP/HTTPS статус
curl -I https://dokliza.com/

# Проверка SSL сертификата  
curl -vI https://dokliza.com/ 2>&1 | grep -A 10 "SSL certificate verify"

# Проверка содержимого
curl -s https://dokliza.com/ | grep "Доктор Лиза"
```

### Логи для диагностики
```bash
# Логи Caddy
journalctl -u caddy -f

# Логи доступа
tail -f /var/log/caddy/dokliza-access.log

# Системные логи
dmesg | tail -20
```

## Troubleshooting

### Проблемы с SSL
```bash
# Проверка статуса Caddy
systemctl status caddy

# Перезапуск Caddy
systemctl restart caddy

# Проверка конфигурации
caddy validate --config /etc/caddy/Caddyfile
```

### Проблемы с деплоем
```bash
# Проверка последнего деплоя GitHub Actions
cd /var/www/dokliza-source
git log --oneline -5

# Ручная сборка
npm run build
rsync -av --delete dist/ /var/www/dokliza/
```

### Проблемы с доступом
```bash
# Проверка firewall
ufw status

# Проверка портов
netstat -tulpn | grep -E ':(80|443|22)'

# Проверка DNS
nslookup dokliza.com
```

## Мониторинг

### Простой мониторинг доступности
Создайте cron job для проверки:
```bash
crontab -e

# Добавьте строку (проверка каждые 5 минут):
*/5 * * * * curl -f https://dokliza.com/ > /dev/null 2>&1 || echo "Site down at $(date)" >> /var/log/site-monitor.log
```

### Проверка ресурсов
```bash
# Использование диска
df -h

# Использование памяти  
free -h

# Нагрузка системы
htop
```

## Файловая структура на VPS

```
/var/www/
├── dokliza/              # Веб-директория (файлы сайта)
│   ├── index.html
│   ├── assets/
│   └── documents/
├── dokliza-source/       # Исходный код (для сборки)
│   ├── App.tsx
│   ├── package.json
│   └── dist/
└── /etc/caddy/
    └── Caddyfile         # Конфигурация Caddy
```

## Контакты для поддержки

- **VPS**: Beget (beget.com)
- **Домен**: dokliza.com  
- **IP**: 155.212.218.42
- **GitHub**: Автоматический деплой через Actions