# Blog Comment Server

基于 GithubApp 机制的博客评论系统后端服务，参考了 [jw-12138/cwgi-api](https://github.com/jw-12138/cwgi-api) 的代码实现

本仓库不提供任何部署教程，感兴趣的请直接阅读原作者博文。

⚠️ 注意点

部署该Server后，需要在 Cloudflare 上配置以下环境变量：

| 环境变量名称               | 环境变量值                            |
|----------------------|----------------------------------|
| GH_APP_CLIENT_ID     | 填写 GitHub App 对应 client_id       |
| GH_APP_CLIENT_SECRET | 填写 GitHub App 中生成的 client secret |