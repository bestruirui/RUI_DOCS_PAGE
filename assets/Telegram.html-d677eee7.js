import{ab as n,C as s,D as a,ad as e}from"./framework-e618a78f.js";const t={},p=e(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Custom pathname for the upstream website.</span>

<span class="token keyword">const</span> channel_name <span class="token operator">=</span> <span class="token string">&#39;channel_name&#39;</span>

<span class="token keyword">const</span> host_name <span class="token operator">=</span> <span class="token string">&#39;telegram.bestrui.workers.dev&#39;</span>

<span class="token keyword">const</span> icon_url <span class="token operator">=</span> <span class="token string">&#39;https://image.idealclover.cn/blog/assets/icon.png&#39;</span>

  

<span class="token keyword">const</span> upstream_me <span class="token operator">=</span> <span class="token string">&#39;t.me&#39;</span>

<span class="token keyword">const</span> upstream_org <span class="token operator">=</span> <span class="token string">&#39;telegram.org&#39;</span>

<span class="token keyword">const</span> upstream_path <span class="token operator">=</span> <span class="token string">&#39;/s/&#39;</span> <span class="token operator">+</span> channel_name

<span class="token comment">// const cdn_name = &#39;cdn5.telesco.pe&#39;</span>

<span class="token keyword">const</span> https <span class="token operator">=</span> <span class="token boolean">true</span>

  

<span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;fetch&#39;</span><span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

  event<span class="token punctuation">.</span><span class="token function">respondWith</span><span class="token punctuation">(</span><span class="token function">fetchAndApply</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>

  

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">replace_response_text</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">let</span> text <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// replace View Img</span>

  <span class="token keyword">let</span> re2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">&#39;/img/tgme/eye(_2x)?.png&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;g&#39;</span><span class="token punctuation">)</span>

  text <span class="token operator">=</span> text<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>re2<span class="token punctuation">,</span> <span class="token string">&#39;/static/img/tgme/eye_2x.png&#39;</span><span class="token punctuation">)</span>

  <span class="token comment">// replace channel link</span>

  <span class="token keyword">let</span> re1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">&#39;telegram.org/dl&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;g&#39;</span><span class="token punctuation">)</span>

  text <span class="token operator">=</span> text<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>re1<span class="token punctuation">,</span> <span class="token string">&#39;t.me/&#39;</span> <span class="token operator">+</span> channel_name<span class="token punctuation">)</span>

  <span class="token comment">// replace static file</span>

  <span class="token keyword">let</span> i <span class="token operator">=</span> upstream_org<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span>

  <span class="token keyword">let</span> j <span class="token operator">=</span> host_name <span class="token operator">+</span> <span class="token string">&#39;/static&#39;</span>

  <span class="token keyword">let</span> re <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token string">&#39;g&#39;</span><span class="token punctuation">)</span>

  text <span class="token operator">=</span> text<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>re<span class="token punctuation">,</span> j<span class="token punctuation">)</span>

  <span class="token comment">// replace CDN</span>

  <span class="token comment">// let k = cdn_name.replace(&#39;.&#39;, &#39;\\.&#39;);</span>

  <span class="token comment">// let l = host_name + &#39;/cdn&#39;;</span>

  <span class="token comment">// let re4 = new RegExp(k, &#39;g&#39;)</span>

  <span class="token comment">// text = text.replace(re4, l);</span>

  <span class="token comment">// replace icon</span>

  <span class="token keyword">let</span> re3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>

    <span class="token string">&#39;data-content=\\\\\\\\&quot;.\\\\\\\\&quot;&gt;&lt;img src=\\\\\\\\&quot;.*?&quot;&gt;&lt;\\\\\\\\?/i&gt;&#39;</span><span class="token punctuation">,</span>

    <span class="token string">&#39;g&#39;</span><span class="token punctuation">,</span>

  <span class="token punctuation">)</span>

  text <span class="token operator">=</span> text<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>

    re3<span class="token punctuation">,</span>

    <span class="token string">&#39;&lt;i class=\\\\&quot;tgme_widget_message_user_photo bgcolor1\\\\&quot; data-content=\\\\&quot;i\\\\&quot;&gt;&lt;img src=\\\\&quot;&#39;</span> <span class="token operator">+</span>

      icon_url <span class="token operator">+</span>

      <span class="token string">&#39;\\\\&quot;&gt;&lt;/i&gt;&#39;</span><span class="token punctuation">,</span>

  <span class="token punctuation">)</span>

  <span class="token keyword">let</span> re4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">&#39;data-content=&quot;.&quot;&gt;&lt;img src=&quot;.*?&quot;&gt;&lt;\\\\/i&gt;&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;g&#39;</span><span class="token punctuation">)</span>

  text <span class="token operator">=</span> text<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>

    re4<span class="token punctuation">,</span>

    <span class="token string">&#39;&lt;i class=&quot;tgme_widget_message_user_photo bgcolor1&quot; data-content=&quot;i&quot;&gt;&lt;img src=&quot;&#39;</span> <span class="token operator">+</span>

      icon_url <span class="token operator">+</span>

      <span class="token string">&#39;&quot;&gt;&lt;/i&gt;&#39;</span><span class="token punctuation">,</span>

  <span class="token punctuation">)</span>

  <span class="token keyword">return</span> text

<span class="token punctuation">}</span>

  

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchAndApply</span><span class="token punctuation">(</span><span class="token parameter">request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">null</span>

  <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">)</span>

  <span class="token keyword">let</span> url_hostname <span class="token operator">=</span> url<span class="token punctuation">.</span>hostname

  

  <span class="token keyword">if</span> <span class="token punctuation">(</span>https <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    url<span class="token punctuation">.</span>protocol <span class="token operator">=</span> <span class="token string">&#39;https:&#39;</span>

  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

    url<span class="token punctuation">.</span>protocol <span class="token operator">=</span> <span class="token string">&#39;http:&#39;</span>

  <span class="token punctuation">}</span>

  

  <span class="token keyword">var</span> upstream_domain <span class="token operator">=</span> upstream_me

  

  <span class="token keyword">let</span> pathname <span class="token operator">=</span> url<span class="token punctuation">.</span>pathname

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>pathname<span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>pathname<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;/static&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    upstream_domain <span class="token operator">=</span> upstream_org

    url<span class="token punctuation">.</span>pathname <span class="token operator">=</span> pathname<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;/static&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>

    <span class="token comment">// } else if(pathname.startsWith(&#39;/cdn&#39;)) {</span>

    <span class="token comment">//   upstream_domain = cdn_name;</span>

    <span class="token comment">//   url.pathname = pathname.replace(&#39;/cdn&#39;, &#39;&#39;);</span>

  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>pathname <span class="token operator">==</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    url<span class="token punctuation">.</span>pathname <span class="token operator">=</span> upstream_path

  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

    url<span class="token punctuation">.</span>pathname <span class="token operator">=</span> upstream_path <span class="token operator">+</span> url<span class="token punctuation">.</span>pathname

  <span class="token punctuation">}</span>

  

  url<span class="token punctuation">.</span>host <span class="token operator">=</span> upstream_domain

  

  <span class="token keyword">let</span> method <span class="token operator">=</span> request<span class="token punctuation">.</span>method

  <span class="token keyword">let</span> request_headers <span class="token operator">=</span> request<span class="token punctuation">.</span>headers

  <span class="token keyword">let</span> new_request_headers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span>request_headers<span class="token punctuation">)</span>

  

  new_request_headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Host&#39;</span><span class="token punctuation">,</span> url<span class="token punctuation">.</span>hostname<span class="token punctuation">)</span>

  new_request_headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Referer&#39;</span><span class="token punctuation">,</span> url<span class="token punctuation">.</span>hostname<span class="token punctuation">)</span>

  <span class="token keyword">let</span> original_response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span>href<span class="token punctuation">,</span> <span class="token punctuation">{</span>

    method<span class="token operator">:</span> method<span class="token punctuation">,</span>

    headers<span class="token operator">:</span> new_request_headers<span class="token punctuation">,</span>

  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  

  <span class="token keyword">let</span> original_response_clone <span class="token operator">=</span> original_response<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> content_type <span class="token operator">=</span> original_response<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;content-type&#39;</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>content_type<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;text/&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> content_type<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">let</span> modified <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">replace_response_text</span><span class="token punctuation">(</span>original_response_clone<span class="token punctuation">)</span>

    <span class="token comment">// console.log(modified);</span>

    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span>modified<span class="token punctuation">,</span> <span class="token punctuation">{</span>

      status<span class="token operator">:</span> original_response<span class="token punctuation">.</span>status<span class="token punctuation">,</span>

      headers<span class="token operator">:</span> original_response<span class="token punctuation">.</span>headers<span class="token punctuation">,</span>

    <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

    <span class="token keyword">return</span> original_response

  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),i=[p];function l(c,o){return s(),a("div",null,i)}const r=n(t,[["render",l],["__file","Telegram.html.vue"]]);export{r as default};
