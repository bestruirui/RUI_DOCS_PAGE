import{ab as e,C as d,D as n,ad as i}from"./framework-e618a78f.js";const a={},r=i(`<h2 id="portainer" tabindex="-1"><a class="header-anchor" href="#portainer" aria-hidden="true">#</a> Portainer</h2><p>Docker可视化管理(汉化版)</p><div class="language-dockcer line-numbers-mode" data-ext="dockcer"><pre class="language-dockcer"><code>docker run -d \\
   --restart=always \\
   --name=&quot;portainer&quot; \\
   -p 9001:9000 \\
   -v /var/run/docker.sock:/var/run/docker.sock \\
   -v /docker/portainer:/data \\
   6053537/portainer-ce:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="aria2-pro" tabindex="-1"><a class="header-anchor" href="#aria2-pro" aria-hidden="true">#</a> Aria2-Pro</h2><p>更好用的 Aria2 Docker 容器镜像</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker run -d \\
    --name aria2ng \\
    --restart unless-stopped \\
    --log-opt max-size=1m \\
    --network host \\
    -e PUID=$UID \\
    -e PGID=$GID \\
    -e RPC_SECRET=100427 \\
    -e RPC_PORT=6800 \\
    -e LISTEN_PORT=6888 \\
    -e IPV6_MODE=true \\
    -v /docker/aria2/aria2-config:/config \\
    -v /docker/downloads:/downloads \\
    registry.hub.docker.com/p3terx/aria2-pro
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="青龙面板" tabindex="-1"><a class="header-anchor" href="#青龙面板" aria-hidden="true">#</a> 青龙面板</h2><p>定时任务面板</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker run -dit \\
    -v /docker/ql:/ql/data \\
    -p 5700:5700 \\
    --name=&quot;ql&quot; \\
    --dns 111.11.1.1 \\
    --restart unless-stopped \\
    whyour/qinglong:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="青龙tool" tabindex="-1"><a class="header-anchor" href="#青龙tool" aria-hidden="true">#</a> 青龙tool</h2><p>变量提交工具</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker run \\
   --restart=always \\
   -itd --name QLTools \\
   -v /docker/usb/qltool/config:/QLTools/config \\
   -v /docker/usb/qltool/plugin:/QLTools/plugin \\
   -p 15000:15000 \\
    nuanxinqing123/qltools:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="alist" tabindex="-1"><a class="header-anchor" href="#alist" aria-hidden="true">#</a> Alist</h2><p>网盘目录列表程序</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker run -d \\
     --restart=always \\
     -v /docker/alist:/opt/alist/data \\
     -p 5244:5244 \\
     --name=&quot;alist&quot; \\
     xhofe/alist:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="code-server" tabindex="-1"><a class="header-anchor" href="#code-server" aria-hidden="true">#</a> code-server</h2><p>web版vscode</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker run -it --name code-server -p 5566:8080 \\
  -v /docker/code/config:/home/coder/.config \\
  -v /docker/code/home:/home/coder/project \\
  codercom/code-server:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="甜糖心愿" tabindex="-1"><a class="header-anchor" href="#甜糖心愿" aria-hidden="true">#</a> 甜糖心愿</h2><p>搞钱的</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>  docker run -d \\
      -v /ttnode:/mnt/data/ttnode \\
      -v /var/run/docker.sock:/var/run/docker.sock \\
      -v /proc:/host/proc:ro \\
      --name ttnode \\
      --hostname ttnode \\
      --privileged \\
      --net=host \\
      --dns=111.11.1.1 \\
       --restart=always \\
      registry.cn-hangzhou.aliyuncs.com/tiptime/ttnode:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="网心云" tabindex="-1"><a class="header-anchor" href="#网心云" aria-hidden="true">#</a> 网心云</h2><p>搞钱的</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker run -d \\
    --name=wxedge \\
    --restart=always \\
    --privileged \\
    --net=host \\
    --tmpfs /run \\
    --tmpfs /tmp \\
    -v /sata/wxedge:/storage:rw    \\ 
    registry.hub.docker.com/onething1/wxedge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="v2raya" tabindex="-1"><a class="header-anchor" href="#v2raya" aria-hidden="true">#</a> V2raya</h2><p>带有webui的V2ray管理程序，可作为透明网关</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker run -d  \\
   --restart=always  \\
   --privileged  \\
   --network=RUI  \\
   --name v2raya \\
   --ip 192.168.31.10 \\
   -e V2RAYA_ADDRESS=0.0.0.0:4022 \\
   -v /docer/v2raya:/etc/v2raya \\
   mzz2017/v2raya
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rclone" tabindex="-1"><a class="header-anchor" href="#rclone" aria-hidden="true">#</a> rclone</h2><p>webui版</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker run -it \\
   --name rclone   \\
   -v /docker/rclone/config:/config/rclone \\
   -v /docker:/upload \\
   -v /docker/rclone/cache:/root/.cache \\
   -p 5572:5572 \\
   rclone/rclone:latest  rcd --rc-web-gui --rc-addr=0.0.0.0:5572  --rc-user=admin --rc-pass=1004
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ddns-go" tabindex="-1"><a class="header-anchor" href="#ddns-go" aria-hidden="true">#</a> ddns-go</h2><p>ddns</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker run -d \\
   --name ddns-go \\
   --restart=always \\
   --net=host \\
   -v /opt/ddns-go:/root \\
    jeessy/ddns-go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="adguard" tabindex="-1"><a class="header-anchor" href="#adguard" aria-hidden="true">#</a> AdGuard</h2><p>去广告</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run --name AdGuard\\
    --restart unless-stopped\\
    --net RUI \\
    --ip 192.168.31.11 \\
    -v /docker/adguard/workdir:/opt/adguardhome/work \\
    -v /docker/adguard/confdir:/opt/adguardhome/conf \\
    -d adguard/adguardhome
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dozzle" tabindex="-1"><a class="header-anchor" href="#dozzle" aria-hidden="true">#</a> Dozzle</h2><p>docker容器日志查看工具</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker run -d \\
	--name dozzle \\
	-p 8888:8080 \\
	--volume=/var/run/docker.sock:/var/run/docker.sock \\
	amir20/dozzle:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="go-cqhttp" tabindex="-1"><a class="header-anchor" href="#go-cqhttp" aria-hidden="true">#</a> go-cqhttp</h2><p>QQ机器人</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker run \\
  -v /docker/cqhttp:/data \\
  -p 2333:8080 \\
  -it \\
  --name cqhttp \\
  ghcr.bestrui.top/mrs4s/go-cqhttp:master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,42),s=[r];function l(c,v){return d(),n("div",null,s)}const u=e(a,[["render",l],["__file","usual.html.vue"]]);export{u as default};
