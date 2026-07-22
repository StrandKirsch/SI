我现在要把源代码覆盖main
好的，把当前本地的源代码强制推送到远程 main 分支。
注意：这会覆盖远程 main 上所有内容，确保远程没有需要保留的提交。

在项目根目录执行
powershell
cd E:\SI-backrooms-viewer

# 确保在 main 分支
git branch -M main

# 添加所有源代码（.gitignore 会忽略 node_modules 和 dist）
git add .

# 查看状态，确认没有不该提交的文件
git status

# 提交
git commit -m "更新源代码"

# 强制推送到远程 main 分支
git push -f origin main
说明
-f 强制覆盖远程 main，确保和你本地完全一致。

这不会影响 gh-pages 分支，网站部署不受影响。

如果 git status 显示有 node_modules 或 dist 被跟踪，说明 .gitignore 未生效，先检查 .gitignore 文件是否存在并包含 node_modules/ 和 dist/。

执行完后，刷新 https://github.com/StrandKirsch/SI，main 分支就会显示你的最新源代码。

现在我要build并更新托管
好的，执行以下全部命令即可完成构建并更新网站。

在项目根目录执行（全部复制粘贴）
powershell
cd E:\SI-backrooms-viewer
npm run build
cd dist
git init
git checkout -B gh-pages
git add .
git commit -m "update"
git push -f https://github.com/StrandKirsch/SI.git gh-pages
cd ..
等 1-2 分钟后，强制刷新页面（Ctrl+F5）：