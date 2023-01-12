import{ab as n,C as s,D as a,ad as e}from"./framework-e618a78f.js";const p={},t=e(`<h2 id="反代整个网站" tabindex="-1"><a class="header-anchor" href="#反代整个网站" aria-hidden="true">#</a> 反代整个网站</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 替换成你想镜像的站点</span>
<span class="token keyword">const</span> upstream <span class="token operator">=</span> <span class="token string">&#39;www.google.com&#39;</span>

<span class="token comment">// 如果那个站点有专门的移动适配站点，否则保持和上面一致</span>

<span class="token keyword">const</span> upstream_mobile <span class="token operator">=</span> <span class="token string">&#39;www.google.com&#39;</span>

<span class="token comment">// 你希望禁止哪些国家访问</span>

<span class="token keyword">const</span> blocked_region <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;RU&#39;</span><span class="token punctuation">]</span>

<span class="token comment">// 禁止自访问</span>

<span class="token keyword">const</span> blocked_ip_address <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;0.0.0.0&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">]</span>

<span class="token comment">// 替换成你想镜像的站点</span>

<span class="token keyword">const</span> replace_dict <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token string">&#39;$upstream&#39;</span><span class="token operator">:</span> <span class="token string">&#39;$custom_domain&#39;</span><span class="token punctuation">,</span>

    <span class="token string">&#39;//www.google.com&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>

<span class="token punctuation">}</span>

<span class="token comment">//以下内容都不用动</span>

<span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;fetch&#39;</span><span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    event<span class="token punctuation">.</span><span class="token function">respondWith</span><span class="token punctuation">(</span><span class="token function">fetchAndApply</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchAndApply</span><span class="token punctuation">(</span><span class="token parameter">request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> region <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;cf-ipcountry&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> ip_address <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;cf-connecting-ip&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> user_agent <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;user-agent&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> url_host <span class="token operator">=</span> url<span class="token punctuation">.</span>host<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span>protocol <span class="token operator">==</span> <span class="token string">&#39;http:&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        url<span class="token punctuation">.</span>protocol <span class="token operator">=</span> <span class="token string">&#39;https:&#39;</span>

        response <span class="token operator">=</span> Response<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> response<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">device_status</span><span class="token punctuation">(</span>user_agent<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        upstream_domain <span class="token operator">=</span> upstream

    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

        upstream_domain <span class="token operator">=</span> upstream_mobile

    <span class="token punctuation">}</span>

    url<span class="token punctuation">.</span>host <span class="token operator">=</span> upstream_domain<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>blocked_region<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>region<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        response <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token string">&#39;Access denied: WorkersProxy is not available in your region yet.&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>

            status<span class="token operator">:</span> <span class="token number">403</span>

        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>blocked_ip_address<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>ip_address<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        response <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token string">&#39;Access denied: Your IP address is blocked by WorkersProxy.&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>

            status<span class="token operator">:</span> <span class="token number">403</span>

        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span> <span class="token keyword">else</span><span class="token punctuation">{</span>

        <span class="token keyword">let</span> method <span class="token operator">=</span> request<span class="token punctuation">.</span>method<span class="token punctuation">;</span>

        <span class="token keyword">let</span> request_headers <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">;</span>

        <span class="token keyword">let</span> new_request_headers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span>request_headers<span class="token punctuation">)</span><span class="token punctuation">;</span>

        new_request_headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Host&#39;</span><span class="token punctuation">,</span> upstream_domain<span class="token punctuation">)</span><span class="token punctuation">;</span>

        new_request_headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Referer&#39;</span><span class="token punctuation">,</span> url<span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> original_response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span>href<span class="token punctuation">,</span> <span class="token punctuation">{</span>

            method<span class="token operator">:</span> method<span class="token punctuation">,</span>

            headers<span class="token operator">:</span> new_request_headers

        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token keyword">let</span> original_response_clone <span class="token operator">=</span> original_response<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> original_text <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> response_headers <span class="token operator">=</span> original_response<span class="token punctuation">.</span>headers<span class="token punctuation">;</span>

        <span class="token keyword">let</span> new_response_headers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span>response_headers<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> status <span class="token operator">=</span> original_response<span class="token punctuation">.</span>status<span class="token punctuation">;</span>

        new_response_headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;access-control-allow-origin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        new_response_headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;access-control-allow-credentials&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        new_response_headers<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;content-security-policy&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        new_response_headers<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;content-security-policy-report-only&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        new_response_headers<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;clear-site-data&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">const</span> content_type <span class="token operator">=</span> new_response_headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;content-type&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>content_type<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;text/html&#39;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> content_type<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;UTF-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            original_text <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">replace_response_text</span><span class="token punctuation">(</span>original_response_clone<span class="token punctuation">,</span> upstream_domain<span class="token punctuation">,</span> url_host<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

            original_text <span class="token operator">=</span> original_response_clone<span class="token punctuation">.</span>body

        <span class="token punctuation">}</span>

        response <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span>original_text<span class="token punctuation">,</span> <span class="token punctuation">{</span>

            status<span class="token punctuation">,</span>

            headers<span class="token operator">:</span> new_response_headers

        <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> response<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">replace_response_text</span><span class="token punctuation">(</span><span class="token parameter">response<span class="token punctuation">,</span> upstream_domain<span class="token punctuation">,</span> host_name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">let</span> text <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">var</span> i<span class="token punctuation">,</span> j<span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">in</span> replace_dict<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        j <span class="token operator">=</span> replace_dict<span class="token punctuation">[</span>i<span class="token punctuation">]</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token string">&#39;$upstream&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            i <span class="token operator">=</span> upstream_domain

        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token string">&#39;$custom_domain&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            i <span class="token operator">=</span> host_name

        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token string">&#39;$upstream&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            j <span class="token operator">=</span> upstream_domain

        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token string">&#39;$custom_domain&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            j <span class="token operator">=</span> host_name

        <span class="token punctuation">}</span>

        <span class="token keyword">let</span> re <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token string">&#39;g&#39;</span><span class="token punctuation">)</span>

        text <span class="token operator">=</span> text<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>re<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> text<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">device_status</span> <span class="token punctuation">(</span><span class="token parameter">user_agent_info</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">var</span> agents <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Android&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;iPhone&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;SymbianOS&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Windows Phone&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;iPad&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;iPod&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">var</span> flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> v <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> v <span class="token operator">&lt;</span> agents<span class="token punctuation">.</span>length<span class="token punctuation">;</span> v<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>user_agent_info<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>agents<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

            <span class="token keyword">break</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> flag<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反代网站带密码" tabindex="-1"><a class="header-anchor" href="#反代网站带密码" aria-hidden="true">#</a> 反代网站带密码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 替换成你想镜像的站点</span>

<span class="token keyword">const</span> upstream <span class="token operator">=</span> <span class="token string">&#39;google.com&#39;</span>

<span class="token comment">// 如果那个站点有专门的移动适配站点，否则保持和上面一致</span>

<span class="token keyword">const</span> upstream_mobile <span class="token operator">=</span> <span class="token string">&#39;m.google.com&#39;</span>

<span class="token comment">// 密码访问</span>

<span class="token keyword">const</span> openAuth <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token keyword">const</span> username <span class="token operator">=</span> <span class="token string">&#39;username&#39;</span>

<span class="token keyword">const</span> password <span class="token operator">=</span> <span class="token string">&#39;password&#39;</span>

<span class="token comment">// 你希望禁止哪些国家访问</span>

<span class="token keyword">const</span> blocked_region <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;RU&#39;</span><span class="token punctuation">]</span>

<span class="token comment">// 禁止自访问</span>

<span class="token keyword">const</span> blocked_ip_address <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;0.0.0.0&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">]</span>

<span class="token comment">// 替换成你想镜像的站点</span>

<span class="token keyword">const</span> replace_dict <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token string">&#39;$upstream&#39;</span><span class="token operator">:</span> <span class="token string">&#39;$custom_domain&#39;</span><span class="token punctuation">,</span>

    <span class="token string">&#39;//google.com&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>

<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">unauthorized</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token string">&#39;Unauthorized&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>

    headers<span class="token operator">:</span> <span class="token punctuation">{</span>

      <span class="token string">&#39;WWW-Authenticate&#39;</span><span class="token operator">:</span> <span class="token string">&#39;Basic realm=&quot;goindex&quot;&#39;</span><span class="token punctuation">,</span>

      <span class="token string">&#39;Access-Control-Allow-Origin&#39;</span><span class="token operator">:</span> <span class="token string">&#39;*&#39;</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    status<span class="token operator">:</span> <span class="token number">401</span>

  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">parseBasicAuth</span><span class="token punctuation">(</span><span class="token parameter">auth</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">try</span> <span class="token punctuation">{</span>

      <span class="token keyword">return</span> <span class="token function">atob</span><span class="token punctuation">(</span>auth<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;:&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">doBasicAuth</span><span class="token punctuation">(</span><span class="token parameter">request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">const</span> auth <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;Authorization&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>auth <span class="token operator">||</span> <span class="token operator">!</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^Basic [A-Za-z0-9._~+/-]+=*$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>auth<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token punctuation">[</span>user<span class="token punctuation">,</span> pass<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">parseBasicAuth</span><span class="token punctuation">(</span>auth<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> user <span class="token operator">===</span> username <span class="token operator">&amp;&amp;</span> pass <span class="token operator">===</span> password<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchAndApply</span><span class="token punctuation">(</span><span class="token parameter">request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>method <span class="token operator">===</span> <span class="token string">&#39;OPTIONS&#39;</span><span class="token punctuation">)</span> <span class="token comment">// allow preflight request</span>

    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>

      status<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>

      headers<span class="token operator">:</span> <span class="token punctuation">{</span>

        <span class="token string">&#39;Access-Control-Allow-Origin&#39;</span><span class="token operator">:</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span>

        <span class="token string">&#39;Access-Control-Allow-Headers&#39;</span><span class="token operator">:</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span>

        <span class="token string">&#39;Access-Control-Allow-Methods&#39;</span><span class="token operator">:</span> <span class="token string">&#39;GET, POST, PUT, HEAD, OPTIONS&#39;</span>

      <span class="token punctuation">}</span>

    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>openAuth <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">doBasicAuth</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">return</span> <span class="token function">unauthorized</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>

    <span class="token keyword">const</span> region <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;cf-ipcountry&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> ip_address <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;cf-connecting-ip&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> user_agent <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;user-agent&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> url_host <span class="token operator">=</span> url<span class="token punctuation">.</span>host<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span>protocol <span class="token operator">==</span> <span class="token string">&#39;http:&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        url<span class="token punctuation">.</span>protocol <span class="token operator">=</span> <span class="token string">&#39;https:&#39;</span>

        response <span class="token operator">=</span> Response<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> response<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">device_status</span><span class="token punctuation">(</span>user_agent<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        upstream_domain <span class="token operator">=</span> upstream

    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

        upstream_domain <span class="token operator">=</span> upstream_mobile

    <span class="token punctuation">}</span>

    url<span class="token punctuation">.</span>host <span class="token operator">=</span> upstream_domain<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>blocked_region<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>region<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        response <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token string">&#39;Access denied: WorkersProxy is not available in your region yet.&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>

            status<span class="token operator">:</span> <span class="token number">403</span>

        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>blocked_ip_address<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>ip_address<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        response <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token string">&#39;Access denied: Your IP address is blocked by WorkersProxy.&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>

            status<span class="token operator">:</span> <span class="token number">403</span>

        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span> <span class="token keyword">else</span><span class="token punctuation">{</span>

        <span class="token keyword">let</span> method <span class="token operator">=</span> request<span class="token punctuation">.</span>method<span class="token punctuation">;</span>

        <span class="token keyword">let</span> request_headers <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">;</span>

        <span class="token keyword">let</span> new_request_headers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span>request_headers<span class="token punctuation">)</span><span class="token punctuation">;</span>

        new_request_headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Host&#39;</span><span class="token punctuation">,</span> upstream_domain<span class="token punctuation">)</span><span class="token punctuation">;</span>

        new_request_headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Referer&#39;</span><span class="token punctuation">,</span> url<span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> original_response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span>href<span class="token punctuation">,</span> <span class="token punctuation">{</span>

            method<span class="token operator">:</span> method<span class="token punctuation">,</span>

            headers<span class="token operator">:</span> new_request_headers

        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token keyword">let</span> original_response_clone <span class="token operator">=</span> original_response<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> original_text <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> response_headers <span class="token operator">=</span> original_response<span class="token punctuation">.</span>headers<span class="token punctuation">;</span>

        <span class="token keyword">let</span> new_response_headers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span>response_headers<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> status <span class="token operator">=</span> original_response<span class="token punctuation">.</span>status<span class="token punctuation">;</span>

        new_response_headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;access-control-allow-origin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        new_response_headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;access-control-allow-credentials&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        new_response_headers<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;content-security-policy&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        new_response_headers<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;content-security-policy-report-only&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        new_response_headers<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;clear-site-data&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">const</span> content_type <span class="token operator">=</span> new_response_headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;content-type&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>content_type<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;text/html&#39;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> content_type<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;UTF-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            original_text <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">replace_response_text</span><span class="token punctuation">(</span>original_response_clone<span class="token punctuation">,</span> upstream_domain<span class="token punctuation">,</span> url_host<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

            original_text <span class="token operator">=</span> original_response_clone<span class="token punctuation">.</span>body

        <span class="token punctuation">}</span>

        response <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span>original_text<span class="token punctuation">,</span> <span class="token punctuation">{</span>

            status<span class="token punctuation">,</span>

            headers<span class="token operator">:</span> new_response_headers

        <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> response<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;fetch&#39;</span><span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    event<span class="token punctuation">.</span><span class="token function">respondWith</span><span class="token punctuation">(</span><span class="token function">fetchAndApply</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>request<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>stack<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>

        status<span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>

        headers<span class="token operator">:</span> <span class="token punctuation">{</span>

          <span class="token string">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span>

        <span class="token punctuation">}</span>

      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">replace_response_text</span><span class="token punctuation">(</span><span class="token parameter">response<span class="token punctuation">,</span> upstream_domain<span class="token punctuation">,</span> host_name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">let</span> text <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">var</span> i<span class="token punctuation">,</span> j<span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">in</span> replace_dict<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        j <span class="token operator">=</span> replace_dict<span class="token punctuation">[</span>i<span class="token punctuation">]</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token string">&#39;$upstream&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            i <span class="token operator">=</span> upstream_domain

        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token string">&#39;$custom_domain&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            i <span class="token operator">=</span> host_name

        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token string">&#39;$upstream&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            j <span class="token operator">=</span> upstream_domain

        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token string">&#39;$custom_domain&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            j <span class="token operator">=</span> host_name

        <span class="token punctuation">}</span>

        <span class="token keyword">let</span> re <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token string">&#39;g&#39;</span><span class="token punctuation">)</span>

        text <span class="token operator">=</span> text<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>re<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> text<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">device_status</span> <span class="token punctuation">(</span><span class="token parameter">user_agent_info</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">var</span> agents <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Android&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;iPhone&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;SymbianOS&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Windows Phone&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;iPad&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;iPod&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">var</span> flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> v <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> v <span class="token operator">&lt;</span> agents<span class="token punctuation">.</span>length<span class="token punctuation">;</span> v<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>user_agent_info<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>agents<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

            <span class="token keyword">break</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> flag<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反代网站指定目录" tabindex="-1"><a class="header-anchor" href="#反代网站指定目录" aria-hidden="true">#</a> 反代网站指定目录</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 你要镜像的网站.</span>

<span class="token keyword">const</span> upstream <span class="token operator">=</span> <span class="token string">&#39;objectstorage.ap-seoul-1.oraclecloud.com&#39;</span>

<span class="token comment">// 镜像网站的目录，比如你想镜像某个网站的二级目录则填写二级目录的目录名，镜像 google 用不到，默认即可.</span>

<span class="token keyword">const</span> upstream_path <span class="token operator">=</span> <span class="token string">&#39;/test/&#39;</span>

<span class="token comment">// 镜像站是否有手机访问专用网址，没有则填一样的.</span>

<span class="token keyword">const</span> upstream_mobile <span class="token operator">=</span> <span class="token string">&#39;objectstorage.ap-seoul-1.oraclecloud.com&#39;</span>

<span class="token comment">// 屏蔽国家和地区.</span>

<span class="token keyword">const</span> blocked_region <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;&#39;</span><span class="token punctuation">]</span>

<span class="token comment">// 屏蔽 IP 地址.</span>

<span class="token keyword">const</span> blocked_ip_address <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;0.0.0.0&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">]</span>

<span class="token comment">// 镜像站是否开启 HTTPS.</span>

<span class="token keyword">const</span> https <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token comment">// 文本替换.填你要镜像的网站</span>

<span class="token keyword">const</span> replace_dict <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token string">&#39;$upstream&#39;</span><span class="token operator">:</span> <span class="token string">&#39;$custom_domain&#39;</span><span class="token punctuation">,</span>

    <span class="token string">&#39;//objectstorage.ap-seoul-1.oraclecloud.com&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>

<span class="token punctuation">}</span>

<span class="token comment">// 以下保持默认，不要动</span>

<span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;fetch&#39;</span><span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    event<span class="token punctuation">.</span><span class="token function">respondWith</span><span class="token punctuation">(</span><span class="token function">fetchAndApply</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchAndApply</span><span class="token punctuation">(</span><span class="token parameter">request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> region <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;cf-ipcountry&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> ip_address <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;cf-connecting-ip&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> user_agent <span class="token operator">=</span> <span class="token string">&quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36&quot;</span>

    <span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> url_hostname <span class="token operator">=</span> url<span class="token punctuation">.</span>hostname<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>https <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        url<span class="token punctuation">.</span>protocol <span class="token operator">=</span> <span class="token string">&#39;https:&#39;</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

        url<span class="token punctuation">.</span>protocol <span class="token operator">=</span> <span class="token string">&#39;http:&#39;</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">device_status</span><span class="token punctuation">(</span>user_agent<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">var</span> upstream_domain <span class="token operator">=</span> upstream<span class="token punctuation">;</span>

    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

        <span class="token keyword">var</span> upstream_domain <span class="token operator">=</span> upstream_mobile<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    url<span class="token punctuation">.</span>host <span class="token operator">=</span> upstream_domain<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span>pathname <span class="token operator">==</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        url<span class="token punctuation">.</span>pathname <span class="token operator">=</span> upstream_path<span class="token punctuation">;</span>

    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

        url<span class="token punctuation">.</span>pathname <span class="token operator">=</span> upstream_path <span class="token operator">+</span> url<span class="token punctuation">.</span>pathname<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>blocked_region<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>region<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        response <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token string">&#39;Access denied: WorkersProxy is not available in your region yet.&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>

            status<span class="token operator">:</span> <span class="token number">403</span>

        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>blocked_ip_address<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>ip_address<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        response <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token string">&#39;Access denied: Your IP address is blocked by WorkersProxy.&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>

            status<span class="token operator">:</span> <span class="token number">403</span>

        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

        <span class="token keyword">let</span> method <span class="token operator">=</span> request<span class="token punctuation">.</span>method<span class="token punctuation">;</span>

        <span class="token keyword">let</span> request_headers <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">;</span>

        <span class="token keyword">let</span> new_request_headers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span>request_headers<span class="token punctuation">)</span><span class="token punctuation">;</span>

        new_request_headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Host&#39;</span><span class="token punctuation">,</span> url<span class="token punctuation">.</span>hostname<span class="token punctuation">)</span><span class="token punctuation">;</span>

        new_request_headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Referer&#39;</span><span class="token punctuation">,</span> url<span class="token punctuation">.</span>hostname<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> original_response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span>href<span class="token punctuation">,</span> <span class="token punctuation">{</span>

            method<span class="token operator">:</span> method<span class="token punctuation">,</span>

            headers<span class="token operator">:</span> new_request_headers

        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token keyword">let</span> original_response_clone <span class="token operator">=</span> original_response<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> original_text <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> response_headers <span class="token operator">=</span> original_response<span class="token punctuation">.</span>headers<span class="token punctuation">;</span>

        <span class="token keyword">let</span> new_response_headers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span>response_headers<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> status <span class="token operator">=</span> original_response<span class="token punctuation">.</span>status<span class="token punctuation">;</span>

        new_response_headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;access-control-allow-origin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        new_response_headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;access-control-allow-credentials&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        new_response_headers<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;content-security-policy&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        new_response_headers<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;content-security-policy-report-only&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        new_response_headers<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;clear-site-data&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">const</span> content_type <span class="token operator">=</span> new_response_headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;content-type&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>content_type<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;text/html&#39;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> content_type<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;UTF-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            original_text <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">replace_response_text</span><span class="token punctuation">(</span>original_response_clone<span class="token punctuation">,</span> upstream_domain<span class="token punctuation">,</span> url_hostname<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

            original_text <span class="token operator">=</span> original_response_clone<span class="token punctuation">.</span>body

        <span class="token punctuation">}</span>

        response <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span>original_text<span class="token punctuation">,</span> <span class="token punctuation">{</span>

            status<span class="token punctuation">,</span>

            headers<span class="token operator">:</span> new_response_headers

        <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> response<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">replace_response_text</span><span class="token punctuation">(</span><span class="token parameter">response<span class="token punctuation">,</span> upstream_domain<span class="token punctuation">,</span> host_name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">let</span> text <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">var</span> i<span class="token punctuation">,</span> j<span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">in</span> replace_dict<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        j <span class="token operator">=</span> replace_dict<span class="token punctuation">[</span>i<span class="token punctuation">]</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token string">&#39;$upstream&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            i <span class="token operator">=</span> upstream_domain

        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token string">&#39;$custom_domain&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            i <span class="token operator">=</span> host_name

        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token string">&#39;$upstream&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            j <span class="token operator">=</span> upstream_domain

        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token string">&#39;$custom_domain&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            j <span class="token operator">=</span> host_name

        <span class="token punctuation">}</span>

        <span class="token keyword">let</span> re <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token string">&#39;g&#39;</span><span class="token punctuation">)</span>

        text <span class="token operator">=</span> text<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>re<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> text<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">device_status</span><span class="token punctuation">(</span><span class="token parameter">user_agent_info</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">var</span> agents <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Android&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;iPhone&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;SymbianOS&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Windows Phone&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;iPad&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;iPod&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">var</span> flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> v <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> v <span class="token operator">&lt;</span> agents<span class="token punctuation">.</span>length<span class="token punctuation">;</span> v<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>user_agent_info<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>agents<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

            <span class="token keyword">break</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> flag<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[t];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","proxy.html.vue"]]);export{r as default};
