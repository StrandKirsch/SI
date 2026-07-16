你添加了新内容，只需要以下几步就能更新网站：

1. 保存并提交新代码到 GitHub
在项目根目录执行：

powershell
git add .
git commit -m "更新内容"
git push origin main
2. 重新构建并部署
如果使用 GitHub Pages（gh-pages 分支）：
powershell
npm run build
cd dist
git init
git checkout -B gh-pages
git add .
git commit -m "update"
git push -f origin gh-pages
cd ..
如果用了 Vercel / Netlify / Cloudflare Pages：
这些平台在检测到 main 分支有新提交后，会自动重新构建部署，你不需要做任何额外操作，等一两分钟刷新网站即可。

3. 验证更新
部署完成后，强制刷新网页（Ctrl+F5）就能看到新内容了。


