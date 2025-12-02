#!/bin/bash

# VPS Setup Script for Dokliza Landing
# Run this script on your VPS as root user: bash setup-vps.sh

set -e

echo "🚀 Starting VPS setup for dokliza.com..."

# Update system packages
echo "📦 Updating system packages..."
apt update && apt upgrade -y

# Install required packages
echo "📦 Installing required packages..."
apt install -y curl wget git htop nginx-utils ufw fail2ban

# Install Node.js (LTS version)
echo "🟢 Installing Node.js..."
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
apt install -y nodejs

# Verify Node.js installation
node_version=$(node --version)
npm_version=$(npm --version)
echo "✅ Node.js installed: $node_version"
echo "✅ npm installed: $npm_version"

# Install Caddy
echo "🌐 Installing Caddy web server..."
apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | tee /etc/apt/sources.list.d/caddy-stable.list
apt update
apt install -y caddy

# Verify Caddy installation
caddy_version=$(caddy version)
echo "✅ Caddy installed: $caddy_version"

# Create directory structure
echo "📁 Creating directory structure..."
mkdir -p /var/www/dokliza
mkdir -p /var/www/dokliza-source
mkdir -p /var/log/caddy
chown -R www-data:www-data /var/www/
chmod -R 755 /var/www/

# Setup firewall
echo "🔥 Configuring firewall..."
ufw --force reset
ufw default deny incoming
ufw default allow outgoing
ufw allow ssh
ufw allow 80/tcp
ufw allow 443/tcp
ufw --force enable

echo "🔑 Firewall rules:"
ufw status

# Configure fail2ban
echo "🛡️  Configuring fail2ban..."
systemctl enable fail2ban
systemctl start fail2ban

# Clone the repository (you'll need to update this with your actual repo URL)
echo "📥 Cloning repository..."
cd /var/www/dokliza-source
# Note: You'll need to set up SSH keys or use HTTPS with token for private repos
# git clone https://github.com/your-username/dokliza.git .

echo "🎯 Next steps to complete manually:"
echo ""
echo "1. Clone your repository to /var/www/dokliza-source:"
echo "   cd /var/www/dokliza-source"
echo "   git clone <your-repo-url> ."
echo ""
echo "2. Copy your Caddyfile to /etc/caddy/:"
echo "   cp /var/www/dokliza-source/Caddyfile /etc/caddy/"
echo ""
echo "3. Update email in Caddyfile for Let's Encrypt:"
echo "   nano /etc/caddy/Caddyfile"
echo "   # Uncomment and update email in tls section"
echo ""
echo "4. Generate SSH key for GitHub Actions:"
echo "   ssh-keygen -t ed25519 -f ~/.ssh/github-actions -N ''"
echo "   cat ~/.ssh/github-actions.pub >> ~/.ssh/authorized_keys"
echo "   cat ~/.ssh/github-actions  # Copy this to GitHub Secrets as VPS_SSH_KEY"
echo ""
echo "5. Test Caddy configuration:"
echo "   caddy validate --config /etc/caddy/Caddyfile"
echo ""
echo "6. Start Caddy service:"
echo "   systemctl enable caddy"
echo "   systemctl start caddy"
echo ""
echo "7. Build and deploy the site:"
echo "   cd /var/www/dokliza-source"
echo "   npm install"
echo "   npm run build"
echo "   rsync -av --delete dist/ /var/www/dokliza/"
echo ""
echo "8. Add GitHub Secrets in your repository:"
echo "   VPS_HOST: 155.212.218.42"
echo "   VPS_USERNAME: root"
echo "   VPS_SSH_KEY: (content of ~/.ssh/github-actions)"
echo ""
echo "✅ VPS setup completed!"
echo "🌍 Don't forget to update DNS records for dokliza.com to point to 155.212.218.42"