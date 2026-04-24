// 文章数据配置 - 每新增一篇文章，在这里添加一条记录
const posts = [
    {
        id: "wifi-protocol",
        title: "WiFi 协议分析",
        category: "writeups",
        date: "2026-04-20",
        excerpt: "深入分析 WiFi 协议的工作原理与安全机制，包括帧结构、认证过程和加密方式。",
        file: "posts/writeups/wifi-protocol.md",
        tags: ["网络安全", "协议分析", "WiFi"]
    },
    {
        id: "wifi-packet-capture",
        title: "WiFi 抓包实战",
        category: "writeups", 
        date: "2026-04-21",
        excerpt: "使用 Wireshark 和 Aircrack-ng 进行 WiFi 数据包捕获与分析的完整流程。",
        file: "posts/writeups/wifi-packet-capture.md",
        tags: ["抓包", "Wireshark", "实战"]
    },
    {
        id: "fake-wifi-login",
        title: "咖啡店虚假 WiFi 登录页面",
        category: "writeups",
        date: "2026-04-22", 
        excerpt: "构建一个虚假的 WiFi 登录页面用于安全测试，分析钓鱼攻击的原理与防御。",
        file: "posts/writeups/fake-wifi-login.md",
        tags: ["钓鱼", "前端", "安全测试"]
    },
    {
        id: "hello-world",
        title: "Hello World",
        category: "essays",
        date: "2026-04-24",
        excerpt: "这是我的第一篇随感，记录搭建这个博客的初衷与未来的写作计划。",
        file: "posts/essays/hello-world.md",
        tags: ["随笔", "生活"]
    }
];

// 渲染文章列表
function renderPosts(filter = 'all') {
    const container = document.getElementById('posts-container');
    const filtered = filter === 'all' 
        ? posts 
        : posts.filter(p => p.category === filter);

    // 按日期倒序
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    container.innerHTML = filtered.map(post => `
        <a href="post.html?id=${post.id}" class="post-card">
            <span class="post-category ${post.category}">
                ${post.category === 'writeups' ? '题解' : '随感'}
            </span>
            <h2 class="post-title">${post.title}</h2>
            <p class="post-excerpt">${post.excerpt}</p>
            <div class="post-meta">
                <span class="post-date">${post.date}</span>
            </div>
        </a>
    `).join('');
}

// 筛选按钮事件
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderPosts(btn.dataset.filter);
    });
});

// URL 参数处理（从导航栏点击分类时）
const urlParams = new URLSearchParams(window.location.search);
const typeParam = urlParams.get('type');
if (typeParam) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`[data-filter="${typeParam}"]`)?.classList.add('active');
    renderPosts(typeParam);
} else {
    renderPosts('all');
}
