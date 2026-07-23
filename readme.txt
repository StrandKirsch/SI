━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  提交源代码（项目根目录执行）
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

powershell

cd E:\SI-backrooms-viewer
git add .
git status
git commit -m "更新源代码"
git push origin main

如果推送报错，用强制推送：

powershell

git push -f origin main


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  部署到 GitHub Pages（项目根目录执行）
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

powershell

cd E:\SI-backrooms-viewer
npm run deploy

（等效于：rimraf dist → npm run build → gh-pages -d dist）


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  网页进不去
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. 浏览器硬刷新：Ctrl + Shift + R（清除旧 JS 缓存）

2. 刷新 DNS 缓存（CMD 执行）：
   ipconfig /flushdns

3. 检查 GitHub Pages 部署状态：
   https://github.com/StrandKirsch/SI/deployments
