#!/bin/bash
# 简单的清理和复制脚本
# gh-pages分支使用







# 清空当前目录(保留.git目录)
echo "清空当前目录内容（保留.git目录）..."
find . -maxdepth 1 -not -name '.git' -not -name '.' -not -name 'clean_and_copy.sh' -exec rm -rf {} \;

# 检查_site目录是否存在
if [ -d "../_site" ]; then
  # 复制_site内容到当前目录
  echo "复制_site目录内容到当前目录..."
  cp -R ../_site/* .
  echo "复制完成！"
else
  echo "错误：找不到_site目录。确保您先在master分支运行了 'bundle exec jekyll build'"
fi