// 解析 URL 参数获取文章 ID
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

// 文章数据（与 main.js 保持一致）
const posts = [
    {
        id: "wifi-protocol",
        title: "WiFi 协议分析",
        category: "writeups",
        date: "2026-04-20",
        file: "posts/writeups/wifi-protocol.md",
        tags: ["网络安全", "协议分析", "WiFi"]
    },
    {
        id: "wifi-packet-capture",
        title: "WiFi 抓包实战",
        category: "writeups",
        date: "2026-04-21",
        file: "posts/writeups/wifi-packet-capture.md",
        tags: ["抓包", "Wireshark", "实战"]
    },
    {
        id: "fake-wifi-login",
        title: "咖啡店虚假 WiFi 登录页面",
        category: "writeups",
        date: "2026-04-22",
        file: "posts/writeups/fake-wifi-login.md",
        tags: ["钓鱼", "前端", "安全测试"]
    },
    {
        id: "hello-world",
        title: "Hello World",
        category: "essays",
        date: "2026-04-24",
        file: "posts/essays/hello-world.md",
        tags: ["随笔", "生活"]
    }
];

// 加载并渲染文章
async function loadPost() {
    const post = posts.find(p => p.id === postId);
    if (!post) {
        document.getElementById('article-content').innerHTML = '<p>文章未找到</p>';
        return;
    }

    // 更新页面标题
    document.getElementById('page-title').textContent = post.title;
    document.getElementById('article-title').textContent = post.title;
    document.getElementById('article-category').textContent = 
        post.category === 'writeups' ? '题解' : '随感';
    document.getElementById('article-date').textContent = post.date;

    // 渲染标签
    document.getElementById('article-tags').innerHTML = post.tags.map(tag => 
        `<span class="article-tag">${tag}</span>`
    ).join('');

    // 加载 Markdown 文件
    try {
        const response = await fetch(post.file);
        if (!response.ok) throw new Error('Failed to load');
        const markdown = await response.text();

        // 使用 marked 解析 Markdown
        document.getElementById('article-content').innerHTML = marked.parse(markdown);
    } catch (error) {
        document.getElementById('article-content').innerHTML = 
            '<p style="color: #86868b;">无法加载文章内容，请检查文件路径。</p>';
        console.error('Error loading post:', error);
    }
}

loadPost();
