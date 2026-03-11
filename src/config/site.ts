const site = {
  // --- Site Metadata ---
  meta: {
    title: "凝梦的温馨小屋",
    description: "这里是一个待填的座右铭（确信）",
    author: "凝梦",
    logo: "/logo.svg",
    ogImage: "/og-image.png",
    // HTML lang attribute, affects page language and date formatting
    // Options: "zh-CN", "en", "ja", etc.
    lang: "en",
  },

  // --- Navigation ---
  // subtitle: decorative label shown below the name (uppercase, small text)
  navigation: [
    { name: "主页", subtitle: "Index", href: "/" },
    { name: "博客", subtitle: "article", href: "/posts" },
    { name: "项目", subtitle: "Works", href: "/projects" },
    { name: "友情链接", subtitle: "Links", href: "/friends" },
    { name: "关于", subtitle: "Me", href: "/about" },
  ],

  // --- Social Links ---
  social: [
      { name: "GitHub", href: "https://github.com/Coagudream", icon: "mdi:github" },
      { name: "Email", href: "mailto:ningm968@gmail.com", icon: "mdi:email" },
  ],

  // --- Homepage Hero ---
  hero: {
    greeting: "你好呀，这里是凝梦",
    // Supports HTML. Use <span class="font-medium text-foreground underline decoration-primary/30"> to highlight keywords
    description:
      '一位梦想进入<span class="font-medium text-foreground underline decoration-primary/30">游戏行业</span>的普通大学生,在这里记录一些游戏开发,游戏策划和游戏项目',
    cards: [
      { icon: "mdi:explore", label: "状态", value: "求实习ing" },
      { icon: "mdi:location", label: "地点", value: "山东" },
    ],
  },

  // --- Footer ---
  footer: {
    copyright: "© 2025 Breeze",
      builtWith: "Built The Theme Breeze With Astro",
  },

  // --- Comments ---
  comments: {
    enabled: false,
    provider: "artalk" as const,
    artalk: {
      server: "https://your-artalk-server.com",
    },
  },

  // --- Feature Toggles ---
  features: {
    search: true,
    rss: true,
    // Auto-mark posts as "new" if published within this many days (0 to disable)
    newPostDays: 7,
  },

  // --- Tools Page Data ---
  tools: [
    {
      name: "development",
      items: [
        { name: "VS Code", link: "https://code.visualstudio.com", icon: "mdi:microsoft-visual-studio-code" },
        { name: "WebStorm", link: "https://www.jetbrains.com/webstorm", icon: "mdi:code-braces" },
        { name: "Terminal", icon: "mdi:terminal" },
        { name: "Git", link: "https://git-scm.com", icon: "mdi:git" },
        { name: "Docker", link: "https://www.docker.com", icon: "mdi:docker" },
        { name: "Postman", link: "https://www.postman.com", icon: "mdi:api" },
      ]
    },
    {
      name: "design",
      items: [
        { name: "Figma", link: "https://www.figma.com", icon: "mdi:vector-polygon" },
        { name: "Sketch", link: "https://www.sketch.com", icon: "mdi:vector-square" },
        { name: "Adobe XD", link: "https://www.adobe.com/products/xd.html", icon: "mdi:pencil-ruler" },
        { name: "Photoshop", link: "https://www.adobe.com/products/photoshop.html", icon: "mdi:image-edit" },
      ]
    },
    {
      name: "productivity",
      items: [
        { name: "Notion", link: "https://www.notion.so", icon: "mdi:notebook" },
        { name: "Obsidian", link: "https://obsidian.md", icon: "mdi:diamond-stone" },
        { name: "Raycast", link: "https://www.raycast.com", icon: "mdi:lightning-bolt" },
        { name: "Arc Browser", link: "https://arc.net", icon: "mdi:web" },
      ]
    },
  ],

  // --- UI Labels ---
  // Customize these values to change the text displayed on pages
  labels: {
    postsTitle: "写作",
    postsDescription: "笔记、想法和技术思考",
    projectsTitle: "项目",
    projectsDescription: "自己使用godot开发的demo",
    friendsTitle: "友链",
    friendsDescription: "网络上志同道合的人",
    toolsTitle: "技术栈",
    aboutTitle: "关于",
    aboutDescription: "关于本站及其作者",
    backToPosts: "返回文章",
    goHome: "返回首页",
    notFoundTitle: "页面未找到",
    notFoundDescription: "您要查找的页面可能已被删除或链接已失效",
    endOfPost: "文章结束",
    tableOfContents: "目录",
    searchPlaceholder: "搜索文章、标签或命令...",
    searchNavigate: "导航",
    commentSuccess: "评论已提交",
  },

  ogImage: "/og-image.png",
} as const;

export default site;
