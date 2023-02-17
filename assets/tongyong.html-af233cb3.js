import{ab as a,C as n,D as s,ad as e}from"./framework-e618a78f.js";const i={},t=e(`<h2 id="查看cpu频率" tabindex="-1"><a class="header-anchor" href="#查看cpu频率" aria-hidden="true">#</a> 查看CPU频率</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">watch</span> <span class="token function">grep</span> <span class="token punctuation">\\</span>&#39;cpu MHz<span class="token punctuation">\\</span>&#39; /proc/cpuinfo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="解压缩" tabindex="-1"><a class="header-anchor" href="#解压缩" aria-hidden="true">#</a> 解压缩</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token comment">#解压</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> test.tar.gz        
<span class="token comment">#压缩</span>
<span class="token function">tar</span> <span class="token parameter variable">-zcvf</span> test.tar.gz ./test/ 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="清理日志" tabindex="-1"><a class="header-anchor" href="#清理日志" aria-hidden="true">#</a> 清理日志</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#只保留两天的，其余全部删除</span>
journalctl --vacuum-time<span class="token operator">=</span>2d  

<span class="token comment">#删除bash历史</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> ~/.bash_history
<span class="token function">history</span> <span class="token parameter variable">-c</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[t];function r(l,d){return n(),s("div",null,c)}const p=a(i,[["render",r],["__file","tongyong.html.vue"]]);export{p as default};
