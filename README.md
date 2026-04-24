# 个人博客

基于 GitHub Pages 的静态个人博客，用于保存和展示题解与随感。

## 目录结构

```
my-blog/
├── index.html          # 首页
├── post.html           # 文章详情页
├── about.html          # 关于页面
├── css/
│   └── style.css       # 样式文件
├── js/
│   ├── main.js         # 首页逻辑
│   └── post.js         # 文章详情逻辑
├── posts/
│   ├── writeups/       # 题解文章
│   └── essays/         # 随感文章
└── images/             # 图片资源
```

## 如何新建文章

### 1. 创建 Markdown 文件

在 `posts/writeups/` 或 `posts/essays/` 目录下新建 `.md` 文件。

### 2. 添加文章数据

打开 `js/main.js` 和 `js/post.js`，在 `posts` 数组中添加文章信息：

```javascript
{
    id: "文章唯一标识",
    title: "文章标题",
    category: "writeups",  // 或 "essays"
    date: "2026-04-24",
    excerpt: "文章摘要（首页显示）",
    file: "posts/writeups/文件名.md",
    tags: ["标签1", "标签2"]
}
```

### 3. 本地预览

在 WebStorm 中右键 `index.html` → Open in Browser。

### 4. 部署到 GitHub Pages

```bash
git add .
git commit -m "新增文章"
git push origin main
```

## 技术栈

- 纯 HTML/CSS/JS
- GitHub Pages 托管
- Marked.js Markdown 渲染

## 访问地址

https://lqcoiritauzy.github.io
