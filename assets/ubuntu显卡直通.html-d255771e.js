import{ab as e,C as i,D as n,ad as a}from"./framework-e618a78f.js";const s="/assets/202302021755-012bbd0d.png",d="/assets/202302021756-53f33e5e.png",c="/assets/202302021756-1-c55c3513.png",l={},r=a(`<div class="custom-container warning"><p class="custom-container-title">注意</p><p>我的环境J4125，PVE7.2-3</p></div><h2 id="修改bios" tabindex="-1"><a class="header-anchor" href="#修改bios" aria-hidden="true">#</a> 修改BIOS</h2><p>打开VT-D<br> 开启CSM<br> CSM选项中的项目都选为legacy</p><h2 id="pve设置" tabindex="-1"><a class="header-anchor" href="#pve设置" aria-hidden="true">#</a> PVE设置</h2><h4 id="启动内核iommu支持" tabindex="-1"><a class="header-anchor" href="#启动内核iommu支持" aria-hidden="true">#</a> 启动内核IOMMU支持</h4><p>修改<code> /etc/default/grub</code>中的<code>GRUB_CMDLINE_LINUX_DEFAULT</code>为：</p><div class="language-config line-numbers-mode" data-ext="config"><pre class="language-config"><code>GRUB_CMDLINE_LINUX_DEFAULT=&quot;quiet intel_iommu=on i915.enable_gvt=1 iommu=pt video=efifb:off video=vesafb:off&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="加载硬件直通相关模块" tabindex="-1"><a class="header-anchor" href="#加载硬件直通相关模块" aria-hidden="true">#</a> 加载硬件直通相关模块</h4><p>修改<code>/etc/modules</code>，添加以下内容</p><div class="language-config line-numbers-mode" data-ext="config"><pre class="language-config"><code>vfio
vfio_iommu_type1
vfio_pci
vfio_virqfd
kvmgt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改<code>/etc/modprobe.d/pve-blacklist.conf</code>，添加以下内容</p><div class="language-config line-numbers-mode" data-ext="config"><pre class="language-config"><code>blacklist snd_hda_intel
blacklist snd_hda_codec_hdmi
blacklist snd_hda_codec
blacklist snd_hda_core
blacklist i915
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="更新配置信息" tabindex="-1"><a class="header-anchor" href="#更新配置信息" aria-hidden="true">#</a> 更新配置信息</h4><p>执行以下命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">update-grub</span>
update-initramfs <span class="token parameter variable">-u</span> <span class="token parameter variable">-k</span> all
<span class="token function">reboot</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="绑定核显到vfio模块" tabindex="-1"><a class="header-anchor" href="#绑定核显到vfio模块" aria-hidden="true">#</a> 绑定核显到vfio模块</h4><p>查看核显以及声卡的ID：<br><img src="`+s+'" alt="" loading="lazy"><img src="'+d+`" alt="" loading="lazy"> 根据ID修改下面的命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;options vfio-pci ids=8086:3185,8086:3198&quot;</span> <span class="token operator">&gt;</span> /etc/modprobe.d/vfio.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="创建虚拟机" tabindex="-1"><a class="header-anchor" href="#创建虚拟机" aria-hidden="true">#</a> 创建虚拟机</h4><figure><img src="`+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="修改配置文件" tabindex="-1"><a class="header-anchor" href="#修改配置文件" aria-hidden="true">#</a> 修改配置文件</h4><p>修改<code>/etc/pve/nodes/bestrui/qemu-server/100.conf</code>将100改为VM ID 我的配置文件，主要是第一行和第二行</p><div class="language-config line-numbers-mode" data-ext="config"><pre class="language-config"><code>args: -device vfio-pci,host=00:02.0,addr=0x02,x-igd-gms=1
vga: none
boot: order=scsi0
cores: 4
cpu: host
hostpci0: 0000:00:0e.0
ide2: local:iso/ubuntu-20.04.4-desktop-amd64.iso,media=cdrom,size=3299872K
machine: q35
memory: 4096
meta: creation-qemu=6.2.0,ctime=1675316539
name: Ubuntu
net0: virtio=AE:32:D1:CA:0C:7F,bridge=vmbr0,firewall=1
numa: 1
ostype: l26
scsi0: local:100/vm-100-disk-0.qcow2,size=32G
scsihw: virtio-scsi-pci
smbios1: uuid=46ee4016-cf84-4b0a-a256-9704c69fdf73
sockets: 1
usb0: host=1-1.3,usb3=1
usb1: host=1-1.2,usb3=1
vmgenid: 3dbb9f0f-4c44-4509-a436-b41c92e15b16
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),o=[r];function t(v,u){return i(),n("div",null,o)}const m=e(l,[["render",t],["__file","ubuntu显卡直通.html.vue"]]);export{m as default};
