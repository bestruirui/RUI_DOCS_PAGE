import{ab as t,C as o,D as l,A as a,O as n,J as e,ad as p,R as c}from"./framework-e618a78f.js";const i={},r=a("h2",{id:"autoproxypool",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#autoproxypool","aria-hidden":"true"},"#"),n(" AutoProxyPool")],-1),u=a("br",null,null,-1),d={href:"https://t.me/autoProxyPool",target:"_blank",rel:"noopener noreferrer"},k=a("div",{class:"custom-container tip"},[a("p",{class:"custom-container-title"},"提示"),a("blockquote",null,[a("p",null,[n("一个用于对接代理池的代理整合工具，可玩性较高"),a("br"),n(" 可通过该工具对接多个代理池，使用时只需连接一个代理地址即可实现自动切换代理池，规则配置丰富")])])],-1),m=a("h4",{id:"获取代理池",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#获取代理池","aria-hidden":"true"},"#"),n(" 获取代理池")],-1),v={href:"https://www.xiequ.cn",target:"_blank",rel:"noopener noreferrer"},b=a("br",null,null,-1),h=a("br",null,null,-1),x=p(`<li><h4 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-dit</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> auto-proxy-pool <span class="token variable"><span class="token variable">\`</span><span class="token comment"># 容器名</span><span class="token variable">\`</span></span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--hostname</span> auto-proxy-pool <span class="token variable"><span class="token variable">\`</span><span class="token comment"># 主机名</span><span class="token variable">\`</span></span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--network</span> bridge <span class="token variable"><span class="token variable">\`</span><span class="token comment"># 容器网络类型</span><span class="token variable">\`</span></span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--restart</span> always <span class="token variable"><span class="token variable">\`</span><span class="token comment"># 开机自启</span><span class="token variable">\`</span></span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080 <span class="token variable"><span class="token variable">\`</span><span class="token comment"># 端口映射，&quot;主机端口:容器端口&quot;</span><span class="token variable">\`</span></span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /opt/auto-proxy-pool:/run/data <span class="token variable"><span class="token variable">\`</span><span class="token comment"># 配置文件的主机挂载目录</span><span class="token variable">\`</span></span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
mzzsfy/auto-proxy-pool:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意不可以更改 <code>:</code> 右边的内容否则会报错，可更改默认映射端口号以此设置面板访问端口<br> 若容器启动后不能正常使用请通过 <code>docker logs -f auto-proxy-pool</code> 命令查看容器日志</p></blockquote></li><li><h4 id="配置方法" tabindex="-1"><a class="header-anchor" href="#配置方法" aria-hidden="true">#</a> 配置方法</h4><ul><li><h5 id="代理配置" tabindex="-1"><a class="header-anchor" href="#代理配置" aria-hidden="true">#</a> 代理配置</h5><p>第一次启动容器后需在映射目录新建一个 <strong>proxy.yml</strong> 配置文件，内容如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">defaultCheckUrl</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//baidu.com/ <span class="token comment"># 代理默认检测地址，用于检测通过代理池提取到的代理IP是否有效</span>
<span class="token key atrule">changeRequest</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">hostRegex</span><span class="token punctuation">:</span> .* <span class="token comment"># 用于指定通过代理的请求链接（根据正则表达式匹配，默认 .* 表示匹配全部，若请求链接不在此规则内则会通过本机自身网络快速放通）</span>
    <span class="token key atrule">proxy</span><span class="token punctuation">:</span> proxy <span class="token comment"># 指定配置 </span>
<span class="token key atrule">upstream</span><span class="token punctuation">:</span>
  <span class="token key atrule">proxy</span><span class="token punctuation">:</span> <span class="token comment"># 自定义配置名称</span>
    <span class="token key atrule">template</span><span class="token punctuation">:</span> <span class="token string">&#39;{{$x := regexFindAll &quot;\\\\d{1,3}(\\\\.\\\\d{1,3}){3}:\\\\d{2,5}&quot; . -1}}{{range $s := $x}}{{printf &quot;http://%s\\n&quot; $s}}{{end}}&#39;</span> <span class="token comment"># 默认提取代理池ip的正则（不懂勿动）</span>
    <span class="token key atrule">apiUrl</span><span class="token punctuation">:</span> &lt;你的代理池API<span class="token punctuation">&gt;</span> <span class="token comment"># 接口回传需为txt格式</span>
    <span class="token key atrule">lifecycle</span><span class="token punctuation">:</span> <span class="token number">-1</span> <span class="token comment"># 代理IP的生命周期，即从代理池提取到的IP的有效时长（填-1为自动检测即不指定，若需指定直接定义正整数，单位/秒）</span>
    <span class="token key atrule">maxSize</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token comment"># 最多保留上游IP数量即同时维护几个有效ip，代理池消耗速度的倍数等于该设定值</span>
    <span class="token key atrule">requestInterval</span><span class="token punctuation">:</span> 100ms <span class="token comment"># 从代理池获取代理IP的请求间隔，注意不要太快否则可能会被服务器拉黑</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面写的是一个最简单的配置文件，更多配置参数详见模板文件，可前往官方频道关联群组讨论<br> 若想仅适用于JD脚本，可将 <code>hostRegex</code> 的值指定为 <code>.*\\.(jd|isvjd|isvjcloud)\\.com.*</code></p><div class="custom-container tip"><p class="custom-container-title">提示</p><blockquote><p>每次修改完配置需重启容器才能生效</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> restart auto-proxy-pool  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote></div></li></ul></li>`,2);function y(_,g){const s=c("ExternalLinkIcon");return o(),l("div",null,[r,a("blockquote",null,[a("p",null,[n("作者：mzzsfy"),u,a("a",d,[n("auto-proxy-pool"),e(s)])])]),k,a("ul",null,[a("li",null,[m,a("blockquote",null,[a("p",null,[n("携趣网络官网："),a("a",v,[n("www.xiequ.cn"),e(s)]),b,n(" 自行注册并开通免费代理池业务以获取你的代理池接口地址"),h,n(" 免费代理池需要绑定公网IP才可以使用，如果没有那么可通过官方接口动态调整")])])]),x])])}const q=t(i,[["render",y],["__file","AutoProxyPool.html.vue"]]);export{q as default};
