#!/bin/bash
# 简单的清理和复制脚本

# 检查_site目录是否存在
if [ -d "_site" ]; then
  # 复制_site内容到临时目录
  echo "找到_site目录，准备处理..."
  mkdir -p /tmp/site_backup
  cp -R _site/* /tmp/site_backup/
  
  # 清空当前目录(保留.git目录和脚本)
  echo "清空当前目录内容（保留.git目录和脚本）..."
  find . -maxdepth 1 -not -name '.git' -not -name '.' -not -name 'clean_and_copy.sh' -exec rm -rf {} \;
  
  # 复制临时目录内容到当前目录
  echo "复制网站文件到当前目录..."
  cp -R /tmp/site_backup/* .
  
  # 删除临时目录
  rm -rf /tmp/site_backup
  echo "复制完成！"
else
  echo "错误：找不到_site目录。确保您先在master分支运行了 'bundle exec jekyll build'"
fi