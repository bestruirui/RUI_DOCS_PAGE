import{ab as e,C as i,D as n,ad as s}from"./framework-e618a78f.js";const d="/assets/20240220165352-02aef9ac.png",l={},t=s(`<p>Debian12.5安装Gnome43.0-3</p><ul><li>安装</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apt install task-gnome-desktop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>跳过初始化</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apt autoremove gnome-initial-setup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>允许root登录</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sed -i &#39;/^\\[security\\]$/a AllowRoot=true&#39; /etc/gdm3/daemon.conf

echo  &quot;AllowRoot=true&quot;&gt;&gt; /etc/gdm3/daemon.conf 
sudo sed -i &#39;/auth required pam_succeed_if.so user != root quiet_success/s/^/#/&#39; /etc/pam.d/gdm-password

sed -i &#39;/auth required pam_succeed_if.so user != root quiet_success/s/^/#/&#39; /etc/pam.d/gdm-autologin

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>允许root用户使用远程桌面</li></ul><div class="custom-container warning"><p class="custom-container-title">注意</p><p>就是这两行，通宵查了一晚</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sed -i &#39;/ConditionUser=!root/s/^/#/&#39; /usr/lib/systemd/user/pipewire.socket
sed -i &#39;/ConditionUser=!root/s/^/#/&#39; /usr/lib/systemd/user/pipewire.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>重启桌面</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl restart gdm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>root免密自动登录桌面后，显示密钥链<br><img src="`+d+`" alt="" loading="lazy"></li><li>不接显示器，使用远程桌面</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 安装虚拟显示器
apt install xserver-xorg-video-dummy
# 配置文件
bash -c &#39;cat &lt;&lt;EOF &gt; /usr/share/X11/xorg.conf.d/xorg.conf
Section &quot;Device&quot;
    Identifier &quot;DummyDevice&quot;
    Driver &quot;dummy&quot;
    VideoRam 256000
EndSection
Section &quot;Monitor&quot;
    Identifier &quot;DummyMonitor&quot;
    HorizSync 30.0-1000.0
    VertRefresh 30.0-1000.0
    Modeline &quot;2560x1440_50.00&quot;  256.09  2560 2728 3008 3456  1440 1441 1444 1482 -HSync +Vsync
    Modeline &quot;2560x1600_50.00&quot;  285.75  2560 2736 3016 3472  1600 1601 1604 1646 -HSync +Vsync
    Modeline &quot;3200x2000_60.00&quot;  703.25  3200 3456 3800 4400  2000 2003 2013 2089 -hsync +vsync
EndSection

Section &quot;Screen&quot;
    Identifier &quot;DummyScreen&quot;
    Device &quot;DummyDevice&quot;
    Monitor &quot;DummyMonitor&quot;
    DefaultDepth 24
    SubSection &quot;Display&quot;
        Depth 24
        Modes &quot;3200x2000_60.00&quot; &quot;2560x1600_50.00&quot; &quot;2560x1440_50.00&quot;
    EndSubSection
EndSection
EOF&#39;

# 网上的教程都是reboot，根本不需要重启，只需重启这个服务就好
systemctl restart display-manager
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),a=[t];function u(r,o){return i(),n("div",null,a)}const v=e(l,[["render",u],["__file","Gnome.html.vue"]]);export{v as default};
