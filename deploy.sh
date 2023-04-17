#!/bin/bash  
  
##$1需要部署的项目：All or 任意子项目
##$2需要部署的环境 test or pron
##项目部署步骤：
##1、执行test、执行打包命令
##2、将3个子项目中的文件上传到服务器的目标文件夹里

# 定义Vue项目路径和端口  
echo "-----开始部署项目------"

echo "本次部署的项目：$1"
#确认需要部署的项目
read -p $'\n\033[31m请确认将要部署的项目，是否继续操作？y or n: \033[0m' isContinue
if [ "$isContinue" != 'y' ];then
    exit
fi

npm run build:$1

echo "项目打包完成"

read -p "按下 enter 退出脚本"
