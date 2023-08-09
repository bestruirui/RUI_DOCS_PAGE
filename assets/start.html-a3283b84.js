import{ab as e,C as n,D as a,ad as s}from"./framework-e618a78f.js";const i="/assets/202302021757-1dd685b2.png",t="/assets/20230202175802-fae6b057.png",d={},r=s(`<div class="custom-container warning"><p class="custom-container-title">注意</p><p>我的环境J4125，PVE7.2-3</p></div><p>在开始前对系统进行一些本地化修改</p><h2 id="换源" tabindex="-1"><a class="header-anchor" href="#换源" aria-hidden="true">#</a> 换源</h2><p>将系统默认的源换为清华源</p><h4 id="apt软件源-7" tabindex="-1"><a class="header-anchor" href="#apt软件源-7" aria-hidden="true">#</a> apt软件源 7.*</h4><p>将<code>/etc/apt/sources.list</code>内容替换为</p><div class="language-config line-numbers-mode" data-ext="config"><pre class="language-config"><code>deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free
deb https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free 
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="pve软件源" tabindex="-1"><a class="header-anchor" href="#pve软件源" aria-hidden="true">#</a> PVE软件源</h4><p>将<code>/etc/apt/sources.list.d/pve-enterprise.list</code>替换为</p><div class="language-config line-numbers-mode" data-ext="config"><pre class="language-config"><code>deb https://mirrors.tuna.tsinghua.edu.cn/proxmox/debian bullseye pve-no-subscription
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="apt软件源-8" tabindex="-1"><a class="header-anchor" href="#apt软件源-8" aria-hidden="true">#</a> apt软件源 8.*</h4><p><code>/etc/apt/sources.list</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>deb https://mirrors.tuna.tsinghua.edu.cn/debian bookworm main contrib
deb https://mirrors.tuna.tsinghua.edu.cn/debian bookworm-updates main contrib
deb https://mirrors.tuna.tsinghua.edu.cn/debian-security/ bookworm-security main contrib

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>/etc/apt/sources.list.d/ceph.list</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>deb https://mirrors.tuna.tsinghua.edu.cn/ceph/debian-quincy/ bookworm no-subscription
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>/etc/apt/sources.list.d/pve-enterprise.list</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>deb http://download.proxmox.wiki/debian/pve bookworm pve-no-subscription
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="lxc软件源" tabindex="-1"><a class="header-anchor" href="#lxc软件源" aria-hidden="true">#</a> lxc软件源</h4><p>执行下面这句指令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s|http://download.proxmox.com|https://mirrors.tuna.tsinghua.edu.cn/proxmox|g&#39;</span> /usr/share/perl5/PVE/APLInfo.pm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="删除-local-lvm-分区" tabindex="-1"><a class="header-anchor" href="#删除-local-lvm-分区" aria-hidden="true">#</a> 删除 local-lvm 分区</h2><p>避免空间浪费，而且 PVE 首页上显示的空间剩余指的是 local 分区，推荐新装 PVE 时进行设置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>lvremove pve/data  
lvextend <span class="token parameter variable">-l</span> +100%FREE <span class="token parameter variable">-r</span> pve/root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里将local-lvm删除<br><img src="`+i+'" alt="" loading="lazy"> 然后编辑local分区,内容全选<br><img src="'+t+`" alt="" loading="lazy"></p><h2 id="功耗节能" tabindex="-1"><a class="header-anchor" href="#功耗节能" aria-hidden="true">#</a> 功耗节能</h2><p>PVE默认的CPU电源策略是性能模式</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看支持的 CPU 电源模式</span>
<span class="token function">cat</span> /sys/devices/system/cpu/cpu0/cpufreq/scaling_available_governors

<span class="token comment"># 查看当前的 CPU 电源模式</span>
<span class="token function">cat</span> /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>几种电源模式的解释说明：</p><table><thead><tr><th style="text-align:left;">电源模式</th><th style="text-align:left;">解释说明</th></tr></thead><tbody><tr><td style="text-align:left;">performance</td><td style="text-align:left;">性能模式，将 CPU 频率固定工作在其支持的较高运行频率上，而不动态调节。</td></tr><tr><td style="text-align:left;">userspace</td><td style="text-align:left;">系统将变频策略的决策权交给了用户态应用程序，较为灵活。</td></tr><tr><td style="text-align:left;">powersave</td><td style="text-align:left;">省电模式，CPU 会固定工作在其支持的最低运行频率上。</td></tr><tr><td style="text-align:left;">ondemand</td><td style="text-align:left;">按需快速动态调整 CPU 频率，没有负载的时候就运行在低频，有负载就高频运行。</td></tr><tr><td style="text-align:left;">conservative</td><td style="text-align:left;">与 ondemand 不同，平滑地调整 CPU 频率，频率的升降是渐变式的，稍微缓和一点。</td></tr><tr><td style="text-align:left;">schedutil</td><td style="text-align:left;">负载变化回调机制，后面新引入的机制，通过触发 schedutil <code>sugov_update</code> 进行调频动作。</td></tr></tbody></table><h3 id="调整-cpu-模式" tabindex="-1"><a class="header-anchor" href="#调整-cpu-模式" aria-hidden="true">#</a> 调整 CPU 模式</h3><p>首先得安装 cpupower：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apt install linux-cpupower
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面是 cpupower 的一些常用命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># CPU实时频率查看</span>
<span class="token function">watch</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> cpupower monitor

<span class="token comment"># 查看当前所有CPU的信息</span>
cpupower <span class="token parameter variable">-c</span> all frequency-info

<span class="token comment"># 设置所有CPU为节能模式</span>
cpupower <span class="token parameter variable">-c</span> all frequency-set <span class="token parameter variable">-g</span> powersave

<span class="token comment"># 设置所有CPU为性能模式</span>
cpupower <span class="token parameter variable">-c</span> all frequency-set <span class="token parameter variable">-g</span> performance
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置为系统服务 <code>/usr/lib/systemd/system/cpupowersave.service</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[Unit]
Description=Configure CPU power related settings
After=syslog.target

[Service]
Type=oneshot
RemainAfterExit=yes
ExecStart=/usr/bin/cpupower -c all frequency-set -g powersave
ExecStop=/usr/bin/cpupower -c all frequency-set -g performance

[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>重新加载
systemctl daemon-reload
开机自动启动
systemctl enable cpupowersave
当前启动
systemctl start cpupowersave
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38),l=[r];function c(o,u){return n(),a("div",null,l)}const v=e(d,[["render",c],["__file","start.html.vue"]]);export{v as default};
