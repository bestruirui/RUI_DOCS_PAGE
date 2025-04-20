import{ab as e,C as d,D as n,ad as a}from"./framework-e618a78f.js";const s={},t=a(`<h1 id="使用-dhcp-钩子" tabindex="-1"><a class="header-anchor" href="#使用-dhcp-钩子" aria-hidden="true">#</a> 使用 DHCP 钩子</h1><p>修改 <code>/etc/dhcp/dhclient-enter-hooks.d/nodnsupdate</code> 文件。</p><p>作出以下的修改</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/sh
make_resolv_conf(){
    :
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>给文件 nodnsupdate 添加可执行权限</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>chmod +x /etc/dhcp/dhclient-enter-hooks.d/nodnsupdate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重启系统，现在你就可以任性地修改 /etc/resolv.conf 文件而且不会担心被回滚了。</p>`,7),c=[t];function i(l,r){return d(),n("div",null,c)}const u=e(s,[["render",i],["__file","LXC容器DNS.html.vue"]]);export{u as default};
