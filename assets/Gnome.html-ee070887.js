import{ab as e,C as i,D as s,ad as d}from"./framework-e618a78f.js";const a="/assets/20240220165352-02aef9ac.png",n={},l=d(`<p>Debian12.5安装Gnome43.0-3</p><ul><li>安装</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apt install task-gnome-desktop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>跳过初始化</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apt autoremove gnome-initial-setup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>允许root登录</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sed -i &#39;/^\\[security\\]$/a AllowRoot=true&#39; /etc/gdm3/daemon.conf

echo  &quot;AllowRoot=true&quot;&gt;&gt; /etc/gdm3/daemon.conf 
sudo sed -i &#39;/auth required pam_succeed_if.so user != root quiet_success/s/^/#/&#39; /etc/pam.d/gdm-password

sed -i &#39;/auth required pam_succeed_if.so user != root quiet_success/s/^/#/&#39; /etc/pam.d/gdm-autologin

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>允许root用户使用远程桌面</li></ul><div class="language-error line-numbers-mode" data-ext="error"><pre class="language-error"><code>就是这两行，通宵查了一晚
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sed -i &#39;/ConditionUser=!root/s/^/#/&#39; /usr/lib/systemd/user/pipewire.socket
sed -i &#39;/ConditionUser=!root/s/^/#/&#39; /usr/lib/systemd/user/pipewire.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>root免密自动登录桌面后，显示密钥链 <img src="`+a+'" alt="" loading="lazy"></li></ul>',11),t=[l];function r(o,u){return i(),s("div",null,t)}const m=e(n,[["render",r],["__file","Gnome.html.vue"]]);export{m as default};
