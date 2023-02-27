import{ab as n,C as s,D as a,ad as t}from"./framework-e618a78f.js";const p={},o=t(`<p>实时刷新直播时长</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">&#39;moment&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span>  <span class="token punctuation">{</span>useState<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token comment">//timestart值的格式 2023-09-23 12:03</span>
<span class="token keyword">function</span> <span class="token function">Time</span> <span class="token punctuation">(</span>timestart<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token keyword">const</span> <span class="token punctuation">[</span>now<span class="token punctuation">,</span> setNow<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>Number<span class="token punctuation">)</span>
  
  <span class="token keyword">const</span> <span class="token function-variable function">timelive</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">//转化为unix时间戳</span>
    <span class="token keyword">let</span> timestartunix <span class="token operator">=</span> <span class="token function">moment</span><span class="token punctuation">(</span>timestart<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> timenow <span class="token operator">=</span>  <span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;YYYY-MM-DD HH:mm:ss&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
    <span class="token comment">//把时间戳相差的值转为秒</span>
    <span class="token keyword">const</span> live <span class="token operator">=</span><span class="token punctuation">(</span><span class="token function">moment</span><span class="token punctuation">(</span>timenow<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">diff</span><span class="token punctuation">(</span><span class="token function">moment</span><span class="token punctuation">(</span>timestartunix<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;seconds&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">setNow</span><span class="token punctuation">(</span>live<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>
  <span class="token comment">//实时更新             1000ms</span>
  <span class="token function">setInterval</span><span class="token punctuation">(</span>timelive<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//当数字只有一位时补零   1=&gt;01</span>
<span class="token comment">//{now%60 &lt;= 9 ? &quot;0&quot; + now%60 : now%60}秒</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>

    <span class="token operator">&lt;</span>div <span class="token operator">&gt;</span>
      
      直播时长<span class="token operator">:</span><span class="token punctuation">{</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>now<span class="token operator">/</span><span class="token number">3600</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">9</span> <span class="token operator">?</span> <span class="token string">&quot;0&quot;</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>now<span class="token operator">/</span><span class="token number">3600</span><span class="token punctuation">)</span> <span class="token operator">:</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>now<span class="token operator">/</span><span class="token number">3600</span><span class="token punctuation">)</span><span class="token punctuation">}</span>小时<span class="token punctuation">{</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>now<span class="token operator">/</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token operator">%</span><span class="token number">60</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">9</span> <span class="token operator">?</span> <span class="token string">&quot;0&quot;</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>now<span class="token operator">/</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token operator">%</span><span class="token number">60</span><span class="token punctuation">)</span> <span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>now<span class="token operator">/</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token operator">%</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">}</span>分钟<span class="token punctuation">{</span>now<span class="token operator">%</span><span class="token number">60</span> <span class="token operator">&lt;=</span> <span class="token number">9</span> <span class="token operator">?</span> <span class="token string">&quot;0&quot;</span> <span class="token operator">+</span> now<span class="token operator">%</span><span class="token number">60</span> <span class="token operator">:</span> now<span class="token operator">%</span><span class="token number">60</span><span class="token punctuation">}</span>秒

    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

  <span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意变量的类型要统一</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
{Time(data.live_time)}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),e=[o];function c(l,i){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","2023-02-21.html.vue"]]);export{r as default};