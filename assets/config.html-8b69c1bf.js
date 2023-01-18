import{ab as a,C as e,D as n,ad as s}from"./framework-e618a78f.js";const i={},l=s(`<h2 id="运行命令" tabindex="-1"><a class="header-anchor" href="#运行命令" aria-hidden="true">#</a> 运行命令</h2><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="options说明" tabindex="-1"><a class="header-anchor" href="#options说明" aria-hidden="true">#</a> OPTIONS说明</h5><ul><li><code>-d</code> : 后台运行</li><li><code>-it</code> : 交互模式运行</li><li><code>-p 3000:3000</code> : 指定端口映射，<code>主机(宿主)端口:容器端口</code></li><li><code>--name bestrui</code> : 容器名字</li><li><code>--dns 111.11.1.1</code> : 指定DNS服务器</li><li><code>--net=&quot;bridge&quot;</code> : 指定容器的网络类型</li><li><code>-v /docker:/app</code> : 绑定目录，<code>主机(宿主)目录:容器目录</code></li><li><code>-e TZ=Asia/Shanghai</code> : 环境变量：时区</li><li><code>--restart=always</code> : 重启策略</li></ul><div class="custom-container tip"><p class="custom-container-title">重启策略</p><ul><li>no 默认值，表示容器退出时，docker不自动重启容器</li><li>always 容器退出时总是重启</li><li>on-failure 若容器的退出状态非0，则docker自动重启容器</li><li>unless-stopped 容器退出时总是重启，但不考虑Docker守护进程启动时就已经停止的容器</li></ul></div><h2 id="启动命令" tabindex="-1"><a class="header-anchor" href="#启动命令" aria-hidden="true">#</a> 启动命令</h2><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker start     name //普通的启动命令
docker start -i  name //启动并进入交互
docker start -a  name //在前端显示日志
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="构建容器" tabindex="-1"><a class="header-anchor" href="#构建容器" aria-hidden="true">#</a> 构建容器</h2><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker build -t name:tag .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>命令最后的 <mark><strong>.</strong></mark> 不能省略</p></div><h2 id="创建网络" tabindex="-1"><a class="header-anchor" href="#创建网络" aria-hidden="true">#</a> 创建网络</h2><ul><li><h4 id="macvlan网络" tabindex="-1"><a class="header-anchor" href="#macvlan网络" aria-hidden="true">#</a> macvlan网络</h4></li></ul><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker network create -d \\
       macvlan -o parent=eth1 RUI \\
       --subnet=192.168.31.0/24  \\
       --gateway=192.168.31.1 \\
       --ipv6 --subnet=2409:8a04:6612:cf40::/64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="清理日志" tabindex="-1"><a class="header-anchor" href="#清理日志" aria-hidden="true">#</a> 清理日志</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>
<span class="token builtin class-name">echo</span>  <span class="token string">&quot;========开始清理容器日志 <span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d<span class="token punctuation">\\</span> %H:%M:%S<span class="token variable">)</span></span>========&quot;</span>  
  
<span class="token assign-left variable">logs</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">find</span> /var/lib/docker/containers/ <span class="token parameter variable">-name</span> *-json.log<span class="token variable">)</span></span>  
  
<span class="token keyword">for</span> <span class="token for-or-select variable">log</span> <span class="token keyword">in</span> <span class="token variable">$logs</span>  
        <span class="token keyword">do</span>  
                <span class="token builtin class-name">echo</span> <span class="token string">&quot;清理了: <span class="token variable">$log</span>&quot;</span>  
                <span class="token function">cat</span> /dev/null <span class="token operator">&gt;</span> <span class="token variable">$log</span>  
        <span class="token keyword">done</span>  

<span class="token builtin class-name">echo</span> <span class="token string">&quot;========清理完成 <span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d<span class="token punctuation">\\</span> %H:%M:%S<span class="token variable">)</span></span>========&quot;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),d=[l];function c(o,r){return e(),n("div",null,d)}const p=a(i,[["render",c],["__file","config.html.vue"]]);export{p as default};