# vite-press-blog
## vite-press-blog页面
#### githubAction 配置
https://blog.csdn.net/m0_73884922/article/details/140224767?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-0-140224767-blog-126743919.235^v43^pc_blog_bottom_relevance_base2&spm=1001.2101.3001.4242.1&utm_relevant_index=1

https://helloahao096.github.io/helloahao/posts/GitHub%20Action%E4%B8%80%E9%94%AE%E9%83%A8%E7%BD%B2%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2.html

1. CICD 配置 .github/workflows/xxx.yml
2. github-pages 默认分支(main)触发CICD环境
3. DevModeCICD 开发分支(dev)触发CICD配置环境
4. CICD 触发需要根目录下有package.json 以及lock文件

##### 手动部署触发
手动触发 将打包后的dist内的文件放入一个新的分支（不能有其他打包之外的文件）
https://segmentfault.com/a/1190000044948735#item-4-18
