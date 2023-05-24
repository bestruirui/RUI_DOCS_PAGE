import{ab as d,C as r,D as l,H as n,A as s,O as e,J as o,ad as a,R as i}from"./framework-e618a78f.js";const c={},p=a(`<h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3><p>默认 <code>Dockerfile</code> 位于上下文的根目录中。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-f</span> /path/to/a/Dockerfile <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 <code>-f</code> 指向文件系统中任何位置的 <code>Dockerfile</code>。</p><h3 id="继承-1" tabindex="-1"><a class="header-anchor" href="#继承-1" aria-hidden="true">#</a> 继承</h3><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> [--platform=&lt;platform&gt;] &lt;image&gt; [AS &lt;name&gt;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),u=a(`<p>示例</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> ruby:3.2.2</span>
<span class="token instruction"><span class="token keyword">FROM</span> golang:1.20-alpine3.16 <span class="token keyword">AS</span> build-env</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量-env" tabindex="-1"><a class="header-anchor" href="#变量-env" aria-hidden="true">#</a> 变量 ENV</h3><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">ENV</span> &lt;key&gt;=&lt;value&gt; ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">ENV</span> APP_HOME /myapp</span>
<span class="token instruction"><span class="token keyword">RUN</span> mkdir <span class="token variable">$APP_HOME</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">ENV</span> MY_NAME=<span class="token string">&quot;John Doe&quot;</span> MY_DOG=Rex\\ The\\ Dog <span class="token operator">\\</span>
    MY_CAT=fluffy</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h3>`,7),k=a(`<div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">RUN</span> bundle install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>WORKDIR</code> 指令为任何 <code>RUN</code>、<code>CMD</code>、<code>ENTRYPOINT</code>、<code>COPY</code> 和 <code>ADD</code> 指令设置工作目录。</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">WORKDIR</span> /myapp</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>VOLUME</code> 指令创建一个具有指定名称的挂载点，并将其标记为保存来自本机主机或其他容器的外部挂载卷。</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">VOLUME</span> [<span class="token string">&quot;/data&quot;</span>]</span>
<span class="token comment"># 安装点规范</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">ADD</span> file.xyz /file.xyz</span>
<span class="token comment"># 复制</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--chown</span><span class="token punctuation">=</span><span class="token string">user:group</span></span> host_file.xyz /path/container_file.xyz</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),v=a(`<h3 id="onbuild" tabindex="-1"><a class="header-anchor" href="#onbuild" aria-hidden="true">#</a> Onbuild</h3><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">ONBUILD</span> <span class="token keyword">RUN</span> bundle install</span>
<span class="token comment"># 与另一个文件一起使用时</span>

<span class="token instruction"><span class="token keyword">ONBUILD</span> <span class="token keyword">ADD</span> . /app/src</span>
<span class="token instruction"><span class="token keyword">ONBUILD</span> <span class="token keyword">RUN</span> /usr/local/bin/python-build --dir /app/src</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),m=a(`<p>指令将触发指令添加到镜像中，以便稍后执行，此时镜像用作另一个构建的基础。</p><h3 id="在严格的-shell-中运行命令" tabindex="-1"><a class="header-anchor" href="#在严格的-shell-中运行命令" aria-hidden="true">#</a> 在严格的 shell 中运行命令</h3><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">ENV</span> my_var</span>
<span class="token instruction"><span class="token keyword">SHELL</span> [<span class="token string">&quot;/bin/bash&quot;</span>, <span class="token string">&quot;-euo&quot;</span>, <span class="token string">&quot;pipefail&quot;</span>, <span class="token string">&quot;-c&quot;</span>]</span>
<span class="token comment"># 使用严格模式：</span>
<span class="token instruction"><span class="token keyword">RUN</span> false         # ails 像使用 &amp;&amp; 一样构建</span>
<span class="token instruction"><span class="token keyword">RUN</span> echo <span class="token string">&quot;$myvar&quot;</span> # 由于拼写错误会抛出错误</span>
<span class="token instruction"><span class="token keyword">RUN</span> true | false  # 将脱离管道</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),g=s("p",null,[e("使用 "),s("code",null,"shell"),e(" 将为 shell 命令打开严格模式。")],-1),h=s("h3",{id:"命令-cmd",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#命令-cmd","aria-hidden":"true"},"#"),e(" 命令 CMD")],-1),b=a('<table><thead><tr><th style="text-align:left;">:-</th><th>-</th></tr></thead><tbody><tr><td style="text-align:left;"><code>CMD [&quot;executable&quot;,&quot;param1&quot;,&quot;param2&quot;]</code></td><td>(exec 形式，这是首选形式)</td></tr><tr><td style="text-align:left;"><code>CMD [&quot;param1&quot;,&quot;param2&quot;]</code></td><td>(作为 ENTRYPOINT 的默认参数)</td></tr><tr><td style="text-align:left;"><code>CMD command param1 param2</code></td><td>(shell形式)</td></tr></tbody></table>',1),y=a(`<div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">EXPOSE</span> 5900</span>
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;bundle&quot;</span>, <span class="token string">&quot;exec&quot;</span>, <span class="token string">&quot;rails&quot;</span>, <span class="token string">&quot;server&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="入口点-entrypoint" tabindex="-1"><a class="header-anchor" href="#入口点-entrypoint" aria-hidden="true">#</a> 入口点 ENTRYPOINT</h3><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">ENTRYPOINT</span> [<span class="token string">&quot;executable&quot;</span>, <span class="token string">&quot;param1&quot;</span>, <span class="token string">&quot;param2&quot;</span>]</span>
<span class="token instruction"><span class="token keyword">ENTRYPOINT</span> command param1 param2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),x=a(`<p>配置将作为可执行文件运行的容器。</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">ENTRYPOINT</span> exec top -b</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这将使用 shell 处理来替换 shell 变量，并将忽略任何 <code>CMD</code> 或 <code>docker run</code> 命令行参数。</p><h3 id="元数据-label" tabindex="-1"><a class="header-anchor" href="#元数据-label" aria-hidden="true">#</a> 元数据 LABEL</h3><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">LABEL</span> version=<span class="token string">&quot;1.0&quot;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">LABEL</span> <span class="token string">&quot;com.example.vendor&quot;</span>=<span class="token string">&quot;ACME Incorporated&quot;</span></span>
<span class="token instruction"><span class="token keyword">LABEL</span> com.example.label-with-value=<span class="token string">&quot;foo&quot;</span></span>
<span class="token instruction"><span class="token keyword">LABEL</span> version=<span class="token string">&quot;1.0&quot;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),w=a(`<div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">LABEL</span> description=<span class="token string">&quot;本文说明\\
标签值可以跨越多行。&quot;</span></span>
<span class="token instruction"><span class="token keyword">LABEL</span> multi.label1=<span class="token string">&quot;value1&quot;</span> <span class="token operator">\\</span>
      multi.label2=<span class="token string">&quot;value2&quot;</span> <span class="token operator">\\</span>
      other=<span class="token string">&quot;value3&quot;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="arg" tabindex="-1"><a class="header-anchor" href="#arg" aria-hidden="true">#</a> ARG</h3><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">ARG</span> &lt;name&gt;[=&lt;default value&gt;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>指令定义了一个变量，在构建时通过 <code>docker build</code> 命令使用 --build-arg <code>&lt;varname&gt;=&lt;value&gt;</code> 标志将其传递给构建器。</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> busybox</span>
<span class="token comment"># user1 默认值为 someuser</span>
<span class="token instruction"><span class="token keyword">ARG</span> user1=someuser</span>
<span class="token instruction"><span class="token keyword">ARG</span> buildno=1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dockerignore-文件" tabindex="-1"><a class="header-anchor" href="#dockerignore-文件" aria-hidden="true">#</a> .dockerignore 文件</h3><div class="language-ignore line-numbers-mode" data-ext="ignore"><pre class="language-ignore"><code><span class="token comment"># 注释说明</span>
<span class="token entry string"><span class="token operator">*</span><span class="token punctuation">/</span>temp<span class="token operator">*</span></span>
<span class="token entry string"><span class="token operator">*</span><span class="token punctuation">/</span><span class="token operator">*</span><span class="token punctuation">/</span>temp<span class="token operator">*</span></span>
<span class="token entry string">temp<span class="token operator">?</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><table><thead><tr><th style="text-align:left;">:-</th><th>-</th></tr></thead><tbody><tr><td style="text-align:left;"><code># comment</code></td><td>忽略</td></tr><tr><td style="text-align:left;"><code>*/temp*</code></td><td>在根的任何直接子目录中<br>排除名称以 <code>temp</code> 开头的文件和目录</td></tr><tr><td style="text-align:left;"><code>*/*/temp*</code></td><td>从根以下两级的任何子目录中<br>排除以 <code>temp</code> 开头的文件和目录</td></tr><tr><td style="text-align:left;"><code>temp?</code></td><td>排除根目录中名称为<br> <code>temp</code> 的单字符扩展名的文件和目录</td></tr></tbody></table>`,9),f=s("code",null,"ADD",-1),q=s("code",null,"COPY",-1),_={href:"https://golang.org/pkg/path/filepath#Match",target:"_blank",rel:"noopener noreferrer"},N=s("h3",{id:"主要命令",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#主要命令","aria-hidden":"true"},"#"),e(" 主要命令")],-1),R=a('<table><thead><tr><th style="text-align:left;">命令</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>FROM image</code></td><td>构建的基础镜像</td></tr><tr><td style="text-align:left;"><s><code>MAINTAINER email</code></s></td><td>(已弃用)维护者的名字</td></tr><tr><td style="text-align:left;"><code>COPY [--chown=&lt;user&gt;:&lt;group&gt;] &lt;src&gt;... &lt;dest&gt;</code></td><td>将上下文中的路径复制到位置 <code>dest</code> 的容器中</td></tr><tr><td style="text-align:left;"><code>ADD [--chown=&lt;user&gt;:&lt;group&gt;] &lt;src&gt;... &lt;dest&gt;</code></td><td>与 <code>COPY</code> 相同，但解压缩存档并接受 http url。</td></tr><tr><td style="text-align:left;"><code>RUN &lt;command&gt;</code></td><td>在容器内运行任意命令。</td></tr><tr><td style="text-align:left;"><code>USER &lt;user&gt;[:&lt;group&gt;]</code></td><td>设置默认用户名。</td></tr><tr><td style="text-align:left;"><code>WORKDIR /path/to/workdir</code></td><td>设置默认工作目录。</td></tr><tr><td style="text-align:left;"><code>CMD command param1 param2</code></td><td>设置默认命令</td></tr><tr><td style="text-align:left;"><code>ENV &lt;key&gt;=&lt;value&gt; ...</code></td><td>设置环境变量</td></tr><tr><td style="text-align:left;"><code>EXPOSE &lt;port&gt; [&lt;port&gt;/&lt;protocol&gt;...]</code></td><td>运行时侦听指定的网络端口</td></tr></tbody></table>',1),O=s("h2",{id:"dockerfile-示例",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#dockerfile-示例","aria-hidden":"true"},"#"),e(" Dockerfile 示例")],-1),D=a(`<h3 id="服务静态网站的最小-docker-镜像" tabindex="-1"><a class="header-anchor" href="#服务静态网站的最小-docker-镜像" aria-hidden="true">#</a> 服务静态网站的最小 Docker 镜像</h3><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> wcjiang/docker-static-website:latest</span>
<span class="token comment"># 使用 .dockerignore 文件来控制镜像中的内容！</span>
<span class="token comment"># 复制当前目录内容，到容器中</span>
<span class="token instruction"><span class="token keyword">COPY</span> ./ .</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这会产生一个 <strong><code>154KB +</code></strong> 的单层镜像。 如果您需要以不同的方式配置 <code>httpd</code>，您可以覆盖 CMD 行：</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> wcjiang/docker-static-website:latest</span>
<span class="token instruction"><span class="token keyword">COPY</span> . .</span>

<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;/busybox&quot;</span>,<span class="token string">&quot;httpd&quot;</span>,<span class="token string">&quot;-f&quot;</span>,<span class="token string">&quot;-v&quot;</span>,<span class="token string">&quot;-p&quot;</span>,<span class="token string">&quot;3000&quot;</span>,<span class="token string">&quot;-c&quot;</span>,<span class="token string">&quot;httpd.conf&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),E={href:"https://lipanski.com/posts/smallest-docker-image-static-website",target:"_blank",rel:"noopener noreferrer"},M={href:"https://github.com/forksss/docker-static-website",target:"_blank",rel:"noopener noreferrer"},A=a(`<h3 id="docker-镜像多阶段构建" tabindex="-1"><a class="header-anchor" href="#docker-镜像多阶段构建" aria-hidden="true">#</a> Docker 镜像多阶段构建</h3><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> golang:alpine <span class="token keyword">as</span> builder</span>
<span class="token instruction"><span class="token keyword">RUN</span> apk --no-cache add git</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /go/src/github.com/go/helloworld/</span>
<span class="token instruction"><span class="token keyword">RUN</span> go get -d -v github.com/go-sql-driver/mysql</span>
<span class="token instruction"><span class="token keyword">COPY</span> app.go .</span>
<span class="token instruction"><span class="token keyword">RUN</span> CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o app .</span>

<span class="token instruction"><span class="token keyword">FROM</span> alpine:latest <span class="token keyword">as</span> prod</span>
<span class="token instruction"><span class="token keyword">RUN</span> apk --no-cache add ca-certificates</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /root/</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">builder</span></span> /go/src/github.com/go/helloworld/app .</span>
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;./app&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),C=s("p",null,"使用多阶段构建能将构建依赖留在 builder 镜像中，只将编译完成后的二进制文件拷贝到运行环境中，大大减少镜像体积。",-1);function L(P,I){const t=i("ExternalLinkIcon");return r(),l("div",null,[p,n("rehype:className=wrap-text "),u,n("rehype:wrap-class=row-span-2 "),k,n("rehype:className=wrap-text "),v,n("rehype:className=wrap-text "),m,n("rehype:className=wrap-text "),g,h,n("rehype:wrap-class=col-span-2"),b,n("rehype:class=auto-wrap"),y,n("rehype:className=wrap-text "),x,n("rehype:className=wrap-text "),w,n("rehype:class=auto-wrap"),s("p",null,[e("如果此文件存在，排除与其中的模式匹配的文件和目录，有利于避免 "),f,e(" 或 "),q,e(" 将敏感文件添加到镜像中。匹配是使用 Go 的 "),s("a",_,[e("filepath.Match"),o(t)]),e(" 规则完成的。")]),N,n("rehype:wrap-class=col-span-2 "),R,n("rehype:class=auto-wrap"),O,n("rehype:body-class=cols-2"),D,s("p",null,[e("缩小镜像过程"),s("a",E,[e("查看原文"),o(t)]),e("，镜像 "),s("a",M,[e("Dockerfile 源码"),o(t)]),e("。")]),A,n("rehype:className=wrap-text "),C])}const Y=d(c,[["render",L],["__file","Dockerfile.html.vue"]]);export{Y as default};
