FROM nginx:1.21.3-alpine

# 暴露端口
EXPOSE 8072

# 启动 Nginx 服务
CMD ["nginx", "-g", "daemon off;"]


# docker run  -v /root/ui/nginx/nginx.conf:/etc/nginx/nginx.conf -v /root/ui/nginx/html:/usr/share/nginx/html -p 8072:8072 --name ui -d  ui:ls