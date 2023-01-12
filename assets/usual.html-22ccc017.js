import{ab as e,C as i,D as n,ad as a}from"./framework-e618a78f.js";const r={},d=a(`<h2 id="portainer" tabindex="-1"><a class="header-anchor" href="#portainer" aria-hidden="true">#</a> Portainer</h2><p>Docker可视化管理</p><div class="language-Dockcer line-numbers-mode" data-ext="Dockcer"><pre class="language-Dockcer"><code>docker run -d \\
--restart=always \\
--name=&quot;portainer&quot; \\
-p 9001:9000 \\
-v /var/run/docker.sock:/var/run/docker.sock \\
-v /docker/portainer:/data \\
 6053537/portainer-ce:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="aria2-pro" tabindex="-1"><a class="header-anchor" href="#aria2-pro" aria-hidden="true">#</a> Aria2-Pro</h2><p>更好用的 Aria2 Docker 容器镜像</p><div class="language-Docker line-numbers-mode" data-ext="Docker"><pre class="language-Docker"><code>docker run -d \\
    --name aria2ng \\
    --restart unless-stopped \\
    --log-opt max-size=1m \\
    --network RUI \\
    -e PUID=$UID \\
    -e PGID=$GID \\
    -e RPC_SECRET=100427 \\
    -e RPC_PORT=6800 \\
    -e LISTEN_PORT=6888 \\
    -e IPV6_MODE=true \\
    -v /docker/aria2/aria2-config:/config \\
    -v /docker/downloads:/downloads \\
    registry.hub.docker.com/p3terx/aria2-pro
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="青龙面板" tabindex="-1"><a class="header-anchor" href="#青龙面板" aria-hidden="true">#</a> 青龙面板</h2><p>定时任务面板</p><div class="language-Docker line-numbers-mode" data-ext="Docker"><pre class="language-Docker"><code>docker run -dit \\
    -v /docker/ql:/ql/data \\
    -p 5700:5700 \\
    --name=&quot;ql&quot; \\
    --dns 111.11.1.1 \\
    --restart unless-stopped \\
    whyour/qinglong:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="alist" tabindex="-1"><a class="header-anchor" href="#alist" aria-hidden="true">#</a> Alist</h2>`,10),s=[d];function l(c,o){return i(),n("div",null,s)}const t=e(r,[["render",l],["__file","usual.html.vue"]]);export{t as default};
