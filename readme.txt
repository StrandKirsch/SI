源代码提交在项目根目录执行（全部复制粘贴）
powershell
cd E:\SI-backrooms-viewer
git add .
git status
git commit -m "更新源代码"
git push origin main
如果推送时报错，用强制推送：

powershell
git push -f origin main
提交build
cd E:\SI-backrooms-viewer
npm run build
cd dist
git init
git checkout -B gh-pages
git add .
git commit -m "update"
git push -f https://github.com/StrandKirsch/SI.git gh-pages
cd ..
网页进不去就
刷新 DNS 缓存（最常用）
Windows：打开命令提示符（CMD），执行：

ipconfig /flushdns
或者github重新挂载
