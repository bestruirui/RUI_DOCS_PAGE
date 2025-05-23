import{ab as a,C as e,D as s,ad as n}from"./framework-e618a78f.js";const i={},d=n(`<h2 id="查看cpu频率" tabindex="-1"><a class="header-anchor" href="#查看cpu频率" aria-hidden="true">#</a> 查看CPU频率</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">watch</span> <span class="token function">grep</span> <span class="token punctuation">\\</span>&#39;cpu MHz<span class="token punctuation">\\</span>&#39; /proc/cpuinfo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看cpu温度" tabindex="-1"><a class="header-anchor" href="#查看cpu温度" aria-hidden="true">#</a> 查看CPU温度</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /sys/class/hwmon/hwmon*/temp*input
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="解压缩" tabindex="-1"><a class="header-anchor" href="#解压缩" aria-hidden="true">#</a> 解压缩</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token comment">#解压</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> test.tar.gz        
<span class="token comment">#压缩</span>
<span class="token function">tar</span> <span class="token parameter variable">-zcvf</span> test.tar.gz ./test/ 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="清理日志" tabindex="-1"><a class="header-anchor" href="#清理日志" aria-hidden="true">#</a> 清理日志</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#只保留两天的，其余全部删除</span>
journalctl --vacuum-time<span class="token operator">=</span>2d  

<span class="token comment">#删除bash历史</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> ~/.bash_history
<span class="token function">history</span> <span class="token parameter variable">-c</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="debian换源" tabindex="-1"><a class="header-anchor" href="#debian换源" aria-hidden="true">#</a> Debian换源</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo sed -i &#39;s/deb.debian.org/mirrors.ustc.edu.cn/g&#39; /etc/apt/sources.list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="bashrc备份" tabindex="-1"><a class="header-anchor" href="#bashrc备份" aria-hidden="true">#</a> bashrc备份</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># ~/.bashrc: executed by bash(1) for non-login shells.
umask 022
PS1=&#39;\\[\\e[01;32m\\]\\u@\\h\\[\\e[0m\\]:\\[\\e[01;34m\\]\\w\\[\\e[0m\\]\\$ &#39;
export LS_OPTIONS=&#39;--color=auto&#39;
eval &quot;$(dircolors)&quot;
alias ls=&#39;ls $LS_OPTIONS&#39;
alias ll=&#39;ls $LS_OPTIONS -l&#39;
alias l=&#39;ls $LS_OPTIONS -lA&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置ssh密钥" tabindex="-1"><a class="header-anchor" href="#设置ssh密钥" aria-hidden="true">#</a> 设置ssh密钥</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> https://github.com/bestruirui.keys <span class="token operator">&gt;&gt;</span> ~/.ssh/authorized_keys <span class="token operator">&amp;&amp;</span> <span class="token function">chmod</span> <span class="token number">600</span> ~/.ssh/authorized_keys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,14),r=[d];function l(c,t){return e(),s("div",null,r)}const u=a(i,[["render",l],["__file","通用命令.html.vue"]]);export{u as default};
