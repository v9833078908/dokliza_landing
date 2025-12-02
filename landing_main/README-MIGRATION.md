# 🚀 Быстрый старт миграции на VPS Beget

## Краткий план действий

### 1. На VPS (155.212.218.42)
```bash
# Подключение
ssh root@155.212.218.42

# Запуск автоматической настройки
wget https://raw.githubusercontent.com/ваш-username/dokliza/main/setup-vps.sh
chmod +x setup-vps.sh
./setup-vps.sh
```

### 2. Настройка репозитория
```bash
cd /var/www/dokliza-source
git clone https://github.com/ваш-username/dokliza.git .
npm install
npm run build
rsync -av --delete dist/ /var/www/dokliza/
```

### 3. Настройка Caddy
```bash
cp Caddyfile /etc/caddy/
# Отредактируйте email в Caddyfile для Let's Encrypt
nano /etc/caddy/Caddyfile
caddy validate --config /etc/caddy/Caddyfile
systemctl enable caddy && systemctl start caddy
```

### 4. SSH ключи для GitHub Actions
```bash
ssh-keygen -t ed25519 -f ~/.ssh/github-actions -N ''
cat ~/.ssh/github-actions.pub >> ~/.ssh/authorized_keys
cat ~/.ssh/github-actions  # Копируем в GitHub Secrets
```

### 5. GitHub Secrets
В настройках репозитория добавить:
- `VPS_HOST`: 155.212.218.42
- `VPS_USERNAME`: root
- `VPS_SSH_KEY`: содержимое ~/.ssh/github-actions

### 6. DNS записи
```
Type: A, Name: @, Value: 155.212.218.42
Type: CNAME, Name: www, Value: dokliza.com
```

## Файлы созданные для миграции:

✅ **Caddyfile** - конфигурация веб-сервера
✅ **.github/workflows/deploy.yml** - автоматический деплой  
✅ **setup-vps.sh** - скрипт настройки VPS
✅ **DEPLOYMENT.md** - подробная инструкция

## Проверка работы:
```bash
curl -I https://dokliza.com/
```

## Что дальше?
1. Запушьте изменения в main ветку
2. GitHub Actions автоматически задеплоит сайт
3. Обновите DNS записи домена
4. Проверьте работу сайта

📝 Полная документация в файле **DEPLOYMENT.md**