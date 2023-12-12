import{ab as n,C as s,D as a,ad as t}from"./framework-e618a78f.js";const e={},p=t(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">parsers</span><span class="token punctuation">:</span> <span class="token comment"># array</span>
  <span class="token punctuation">-</span> <span class="token key atrule">reg</span><span class="token punctuation">:</span> .
    yaml<span class="token punctuation">:</span>
      mix<span class="token punctuation">-</span><span class="token key atrule">rule-providers</span><span class="token punctuation">:</span>
        direct<span class="token punctuation">:</span>
          behavior<span class="token punctuation">:</span> domain
          type<span class="token punctuation">:</span> file
          path<span class="token punctuation">:</span> C<span class="token punctuation">:</span>\\<span class="token punctuation">...</span>.\\direct.yaml
          interval<span class="token punctuation">:</span> <span class="token number">86400</span>
      prepend<span class="token punctuation">-</span><span class="token key atrule">rules</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>direct<span class="token punctuation">,</span>DIRECT
        <span class="token punctuation">-</span> DOMAIN<span class="token punctuation">-</span>SUFFIX<span class="token punctuation">,</span>bestrui.top<span class="token punctuation">,</span>DIRECT
        <span class="token punctuation">-</span> DOMAIN<span class="token punctuation">-</span>SUFFIX<span class="token punctuation">,</span>bing.com<span class="token punctuation">,</span>DIRECT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[p];function i(l,u){return s(),a("div",null,c)}const r=n(e,[["render",i],["__file","预处理.html.vue"]]);export{r as default};
