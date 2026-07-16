每次添加新内容后，在项目根目录执行：

powershell
npm run build
cd dist
git init
git checkout -B gh-pages
git add .
git commit -m "update"
git push -f origin gh-pages
cd ..