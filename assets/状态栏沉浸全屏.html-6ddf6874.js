import{ab as n,C as s,D as a,ad as t}from"./framework-e618a78f.js";const o={},p=t(`<p>效果就是去除状态栏，异形刘海屏占满屏幕</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">-- ****导入****  </span>
require <span class="token string">&quot;import&quot;</span>  
import <span class="token string">&quot;android.os.*&quot;</span>  
import <span class="token string">&quot;android.widget.*&quot;</span>  
import <span class="token string">&quot;android.view.*&quot;</span>  
  
<span class="token comment">--杂项样式  </span>
<span class="token function">pcall</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
  <span class="token keyword">local</span> window<span class="token operator">=</span>activity<span class="token punctuation">.</span><span class="token function">getWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
  window<span class="token punctuation">.</span><span class="token function">addFlags</span><span class="token punctuation">(</span>WindowManager<span class="token punctuation">.</span>LayoutParams<span class="token punctuation">.</span>FLAG_TRANSLUCENT_STATUS<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addFlags</span><span class="token punctuation">(</span>WindowManager<span class="token punctuation">.</span>LayoutParams<span class="token punctuation">.</span>FLAG_TRANSLUCENT_NAVIGATION<span class="token punctuation">)</span>  
  <span class="token comment">--设置导航栏状态栏沉浸  </span>
  window<span class="token punctuation">.</span><span class="token function">getAttributes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>layoutInDisplayCutoutMode<span class="token operator">=</span><span class="token number">1</span>  
  <span class="token comment">--去横屏黑条  </span>
  window<span class="token punctuation">.</span><span class="token function">setSoftInputMode</span><span class="token punctuation">(</span>WindowManager<span class="token punctuation">.</span>LayoutParams<span class="token punctuation">.</span>SOFT_INPUT_ADJUST_PAN<span class="token punctuation">)</span><span class="token punctuation">;</span>  
  <span class="token comment">--输入法  </span>
  <span class="token comment">--调整状态栏导航栏沉浸后的顶栏  </span>
  uiManager<span class="token punctuation">.</span>toolbar<span class="token punctuation">.</span><span class="token function">setPadding</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">95</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>  
<span class="token keyword">end</span><span class="token punctuation">)</span>  
<span class="token comment">--适配横屏  </span>
<span class="token keyword">function</span> <span class="token function">isHorizontal</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
  
<span class="token keyword">end</span>  
<span class="token function">isHorizontal</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
currentOrientation<span class="token operator">=</span>activity<span class="token punctuation">.</span>resources<span class="token punctuation">.</span>configuration<span class="token punctuation">.</span>orientation  
oldOrientation<span class="token operator">=</span>currentOrientation  
luajava<span class="token punctuation">.</span><span class="token function">override</span><span class="token punctuation">(</span>OrientationListener<span class="token punctuation">,</span><span class="token punctuation">{</span>  
  onOrientationChanged<span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span>_<span class="token punctuation">,</span>orientation<span class="token punctuation">)</span>  
    currentOrientation<span class="token operator">=</span>activity<span class="token punctuation">.</span>resources<span class="token punctuation">.</span>configuration<span class="token punctuation">.</span>orientation  
    <span class="token keyword">if</span> currentOrientation<span class="token operator">~=</span>oldOrientation  
      <span class="token function">isHorizontal</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
    <span class="token keyword">end</span>  
    oldOrientation<span class="token operator">=</span>currentOrientation  
  <span class="token keyword">end</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">enable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
  
<span class="token comment">--状态栏  </span>
activity<span class="token punctuation">.</span><span class="token function">getWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setFlags</span><span class="token punctuation">(</span>WindowManager<span class="token punctuation">.</span>LayoutParams<span class="token punctuation">.</span>FLAG_FULLSCREEN<span class="token punctuation">,</span>  
WindowManager<span class="token punctuation">.</span>LayoutParams<span class="token punctuation">.</span>FLAG_FULLSCREEN<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">--隐藏状态栏</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),e=[p];function i(c,u){return s(),a("div",null,e)}const r=n(o,[["render",i],["__file","状态栏沉浸全屏.html.vue"]]);export{r as default};
