---
title: GodotWeb导出实践
createdAt: 2026-03-27
category: technology
tags: [Godot, Web ,Game]
summary:  GodotWeb导出并上线踩坑实录
---
# 前言
Godot在导出方面有一说一真的好用，我在4.6.1版本中web导出在项目根目录下，没想到Godot竟然也可以直接在编辑器中可以一键开本地服务器运行测试。

# 成果
就是在项目中点击Dome的效果
## 优点
- 点击即玩
- 每次git推送都能及时更新web版本
## 缺点
- 第一次加载时间过慢（与网站构建无关）
## 改进方法
- 减少web导出包体大小
> 这个需要自定义导出模板，比较麻烦，时间原因，暂时放弃

- 采用多线程加载
> 以后有时间会添加

# 过程

## 前置条件
域名（可选） + godot项目 + github账户 + vercel账户  + cloudflare账户

## 域名
这个是可选项，你可以使用 vercel 的项目构建后送你的域名，只是没有办法自定义域名
> 我建议大家手里都要捏几个域名，这是信息（AI）时代下的基础设施

## godot项目
0. 确保游戏内的全局字体是自己导入并设置的
> 如果不使用自己的导入字体，中文/日语等语言会乱码
1. 下载导出模板
2. 在导出中选择web导出
4. （重要）导出的项目名改为index.html
5. （重要）在项目根目录下创建web文件夹
> 项目根目录就是你游戏源码的目录
6. 导出在web文件夹中
> 现在应该就可以在运行场景处看见本地服务器测试运行了

现在web文件夹中应该有:
- index.html
- .js 文件（启动脚本）
- .wasm 文件（WebAssembly 引擎）
- .pck 文件（你的游戏资源）
- 可能还有 favicon、boot splash 等文件



## github账户
将整个源码仓库推送到 GitHub自己的新建的仓库里

## vercel账户
1. 登录 vercel.com，用 GitHub 账号登录。
2. 点击 Add New... → Project
3. 导入你的 GitHub 仓库。
4. 构建设置（Build Settings）：
- Framework Preset：选择 Other（或留空，Vercel 会自动识别静态站点）。
- Build Command：留空（静态文件不需要构建）。
- （重要）Output Directory：填 web（就是你放 Godot 导出文件的文件夹）。
- Install Command：留空。
5. 点击 Deploy

部署成功后，你会得到一个默认域名，如 your-game.vercel.app
> 此时进入默认域名应该就可以打开游戏了

6. 添加自己的三级域名（可选）：
在 Vercel 项目仪表盘 → Settings → Domains
点击 Add，输入你的三级域名，例如：game.example.com
点击 Add 后，Vercel 会提示你需要配置 DNS：
推荐方式：添加一条 CNAME 记录

| 主机名   |   类型 |     值 |
|---------|--------|--------|
| game（或你想用的三级前缀） | CNAME | （Vercel 会显示具体值） |


## cloudflare账户
1. 在Cloudflare后台添加这条 DNS 记录。
> 建议暂时设置为灰云，等ssl颁发完成后再切换为橙云
2. 返回 Vercel，等待验证（通常几分钟）
3. 验证通过后，Vercel 会自动颁发 免费 SSL 证书（HTTPS）

# 结束
此时应该完成web版本构建了，点击你的3级域名，任何人都应该可以成功进入了！！！