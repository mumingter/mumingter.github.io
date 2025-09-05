#!/bin/bash

# 脚本功能：停止 npm run dev 进程

echo "正在查找并停止 npm run dev 进程..."

# 方法1: 查找并终止占用默认端口3000的进程
if lsof -ti:3000 > /dev/null 2>&1; then
    echo "发现占用端口 3000 的进程，正在终止..."
    lsof -ti:3000 | xargs kill -9
    echo "端口 3000 的进程已终止"
else
    echo "未发现占用端口 3000 的进程"
fi

# 方法2: 查找并终止包含 next 字样的进程
echo "查找包含 next 字样的进程..."
NEXT_PIDS=$(pgrep -f "next")
if [ ! -z "$NEXT_PIDS" ]; then
    echo "发现 next 进程，PID: $NEXT_PIDS，正在终止..."
    echo $NEXT_PIDS | xargs kill -9
    echo "next 进程已终止"
else
    echo "未发现 next 进程"
fi

# 方法3: 查找并终止 node 进程
echo "查找 node 进程..."
NODE_PIDS=$(pgrep -f "node")
if [ ! -z "$NODE_PIDS" ]; then
    echo "发现 node 进程，PID: $NODE_PIDS"
    echo "注意：这将终止所有 node 进程，确认要继续吗？(y/N)"
    read -r answer
    if [ "$answer" = "y" ] || [ "$answer" = "Y" ]; then
        echo $NODE_PIDS | xargs kill -9
        echo "node 进程已终止"
    else
        echo "已取消终止 node 进程"
    fi
else
    echo "未发现 node 进程"
fi

echo "停止 npm run dev 进程操作完成"