import{ab as e,C as i,D as a,ad as d}from"./framework-e618a78f.js";const n={},s=d(`<div class="custom-container warning"><p class="custom-container-title">注意</p><p>我的环境J4125，PVE7.2-3</p></div><h2 id="修改bios" tabindex="-1"><a class="header-anchor" href="#修改bios" aria-hidden="true">#</a> 修改BIOS</h2><p>打开VT-D 开启CSM CSM选项中的项目都选为legacy</p><h2 id="pve设置" tabindex="-1"><a class="header-anchor" href="#pve设置" aria-hidden="true">#</a> PVE设置</h2><h4 id="启动内核iommu支持" tabindex="-1"><a class="header-anchor" href="#启动内核iommu支持" aria-hidden="true">#</a> 启动内核IOMMU支持</h4><p>修改<code> /etc/default/grub</code>中的<code>GRUB_CMDLINE_LINUX_DEFAULT</code>为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GRUB_CMDLINE_LINUX_DEFAULT=&quot;quiet intel_iommu=on i915.enable_gvt=1 iommu=pt video=efifb:off video=vesafb:off&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="加载硬件直通相关模块" tabindex="-1"><a class="header-anchor" href="#加载硬件直通相关模块" aria-hidden="true">#</a> 加载硬件直通相关模块</h4><p>修改<code>/etc/modules</code>，添加以下内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vfio
vfio_iommu_type1
vfio_pci
vfio_virqfd
kvmgt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改<code>/etc/modprobe.d/pve-blacklist.conf</code>，添加以下内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>blacklist snd_hda_intel
blacklist snd_hda_codec_hdmi
blacklist snd_hda_codec
blacklist snd_hda_core
blacklist i915
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="更新配置信息" tabindex="-1"><a class="header-anchor" href="#更新配置信息" aria-hidden="true">#</a> 更新配置信息</h4><p>执行以下命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>update-grub
update-initramfs -u -k all
reboot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="绑定核显到vfio模块" tabindex="-1"><a class="header-anchor" href="#绑定核显到vfio模块" aria-hidden="true">#</a> 绑定核显到vfio模块</h4><p>查看核显以及声卡的ID： ![[./Pasted image 20230202171821.png]] ![[./Pasted image 20230202172010.png]] 根据ID修改下面的命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>echo &quot;options vfio-pci ids=8086:3185,8086:3198&quot; &gt; /etc/modprobe.d/vfio.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,18),t=[s];function c(l,r){return i(),a("div",null,t)}const v=e(n,[["render",c],["__file","zhitong.html.vue"]]);export{v as default};
