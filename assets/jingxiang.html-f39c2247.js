import{ab as n,C as s,D as a,ad as e}from"./framework-e618a78f.js";const t={},p=e(`<h2 id="docker仓库镜像" tabindex="-1"><a class="header-anchor" href="#docker仓库镜像" aria-hidden="true">#</a> docker仓库镜像</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span>

<span class="token keyword">const</span> hub_host <span class="token operator">=</span> <span class="token string">&#39;registry-1.docker.io&#39;</span>

<span class="token keyword">const</span> auth_url <span class="token operator">=</span> <span class="token string">&#39;https://auth.docker.io&#39;</span>

<span class="token keyword">const</span> workers_url <span class="token operator">=</span> <span class="token string">&#39;https://docker.bestrui.top&#39;</span>

<span class="token doc-comment comment">/**

 * static files (404.html, sw.js, conf.js)

 */</span>

  

<span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>RequestInit<span class="token punctuation">}</span></span> */</span>

<span class="token keyword">const</span> <span class="token constant">PREFLIGHT_INIT</span> <span class="token operator">=</span> <span class="token punctuation">{</span>

    status<span class="token operator">:</span> <span class="token number">204</span><span class="token punctuation">,</span>

    headers<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span><span class="token punctuation">{</span>

        <span class="token string">&#39;access-control-allow-origin&#39;</span><span class="token operator">:</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span>

        <span class="token string">&#39;access-control-allow-methods&#39;</span><span class="token operator">:</span> <span class="token string">&#39;GET,POST,PUT,PATCH,TRACE,DELETE,HEAD,OPTIONS&#39;</span><span class="token punctuation">,</span>

        <span class="token string">&#39;access-control-max-age&#39;</span><span class="token operator">:</span> <span class="token string">&#39;1728000&#39;</span><span class="token punctuation">,</span>

    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

<span class="token punctuation">}</span>

  

<span class="token doc-comment comment">/**

 * @param <span class="token class-name"><span class="token punctuation">{</span>any<span class="token punctuation">}</span></span> <span class="token parameter">body</span>

 * @param <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">status</span>

 * @param <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">&lt;</span>string<span class="token punctuation">,</span> string<span class="token punctuation">&gt;</span><span class="token punctuation">}</span></span> <span class="token parameter">headers</span>

 */</span>

<span class="token keyword">function</span> <span class="token function">makeRes</span><span class="token punctuation">(</span><span class="token parameter">body<span class="token punctuation">,</span> status <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">,</span> headers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    headers<span class="token punctuation">[</span><span class="token string">&#39;access-control-allow-origin&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;*&#39;</span>

    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span>body<span class="token punctuation">,</span> <span class="token punctuation">{</span>status<span class="token punctuation">,</span> headers<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**

 * @param <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">urlStr</span>

 */</span>

<span class="token keyword">function</span> <span class="token function">newUrl</span><span class="token punctuation">(</span><span class="token parameter">urlStr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">try</span> <span class="token punctuation">{</span>

        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>urlStr<span class="token punctuation">)</span>

    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">return</span> <span class="token keyword">null</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>


<span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;fetch&#39;</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> ret <span class="token operator">=</span> <span class="token function">fetchHandler</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>

        <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token function">makeRes</span><span class="token punctuation">(</span><span class="token string">&#39;cfworker error:\\n&#39;</span> <span class="token operator">+</span> err<span class="token punctuation">.</span>stack<span class="token punctuation">,</span> <span class="token number">502</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    e<span class="token punctuation">.</span><span class="token function">respondWith</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>

  
<span class="token doc-comment comment">/**

 * @param <span class="token class-name"><span class="token punctuation">{</span>FetchEvent<span class="token punctuation">}</span></span> <span class="token parameter">e</span>

 */</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchHandler</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">const</span> <span class="token function-variable function">getReqHeader</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> e<span class="token punctuation">.</span>request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span>pathname <span class="token operator">===</span> <span class="token string">&#39;/token&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token keyword">let</span> token_parameter <span class="token operator">=</span> <span class="token punctuation">{</span>

        headers<span class="token operator">:</span> <span class="token punctuation">{</span>

        <span class="token string">&#39;Host&#39;</span><span class="token operator">:</span> <span class="token string">&#39;auth.docker.io&#39;</span><span class="token punctuation">,</span>

        <span class="token string">&#39;User-Agent&#39;</span><span class="token operator">:</span> <span class="token function">getReqHeader</span><span class="token punctuation">(</span><span class="token string">&quot;User-Agent&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

        <span class="token string">&#39;Accept&#39;</span><span class="token operator">:</span> <span class="token function">getReqHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Accept&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

        <span class="token string">&#39;Accept-Language&#39;</span><span class="token operator">:</span> <span class="token function">getReqHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Accept-Language&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

        <span class="token string">&#39;Accept-Encoding&#39;</span><span class="token operator">:</span> <span class="token function">getReqHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Accept-Encoding&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

        <span class="token string">&#39;Connection&#39;</span><span class="token operator">:</span> <span class="token string">&#39;keep-alive&#39;</span><span class="token punctuation">,</span>

        <span class="token string">&#39;Cache-Control&#39;</span><span class="token operator">:</span> <span class="token string">&#39;max-age=0&#39;</span>

        <span class="token punctuation">}</span>

      <span class="token punctuation">}</span><span class="token punctuation">;</span>

      <span class="token keyword">let</span> token_url <span class="token operator">=</span> auth_url <span class="token operator">+</span> url<span class="token punctuation">.</span>pathname <span class="token operator">+</span> url<span class="token punctuation">.</span>search

      <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Request</span><span class="token punctuation">(</span>token_url<span class="token punctuation">,</span> e<span class="token punctuation">.</span>request<span class="token punctuation">)</span><span class="token punctuation">,</span> token_parameter<span class="token punctuation">)</span>

  <span class="token punctuation">}</span>


  url<span class="token punctuation">.</span>hostname <span class="token operator">=</span> hub_host<span class="token punctuation">;</span>

  <span class="token keyword">let</span> parameter <span class="token operator">=</span> <span class="token punctuation">{</span>

    headers<span class="token operator">:</span> <span class="token punctuation">{</span>

      <span class="token string">&#39;Host&#39;</span><span class="token operator">:</span> hub_host<span class="token punctuation">,</span>

      <span class="token string">&#39;User-Agent&#39;</span><span class="token operator">:</span> <span class="token function">getReqHeader</span><span class="token punctuation">(</span><span class="token string">&quot;User-Agent&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

      <span class="token string">&#39;Accept&#39;</span><span class="token operator">:</span> <span class="token function">getReqHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Accept&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

      <span class="token string">&#39;Accept-Language&#39;</span><span class="token operator">:</span> <span class="token function">getReqHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Accept-Language&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

      <span class="token string">&#39;Accept-Encoding&#39;</span><span class="token operator">:</span> <span class="token function">getReqHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Accept-Encoding&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

      <span class="token string">&#39;Connection&#39;</span><span class="token operator">:</span> <span class="token string">&#39;keep-alive&#39;</span><span class="token punctuation">,</span>

      <span class="token string">&#39;Cache-Control&#39;</span><span class="token operator">:</span> <span class="token string">&#39;max-age=0&#39;</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    cacheTtl<span class="token operator">:</span> <span class="token number">3600</span>

  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  

  <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string">&quot;Authorization&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    parameter<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>Authorization <span class="token operator">=</span> <span class="token function">getReqHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Authorization&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>

  

  <span class="token keyword">let</span> original_response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Request</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> e<span class="token punctuation">.</span>request<span class="token punctuation">)</span><span class="token punctuation">,</span> parameter<span class="token punctuation">)</span>

  <span class="token keyword">let</span> original_response_clone <span class="token operator">=</span> original_response<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> original_text <span class="token operator">=</span> original_response_clone<span class="token punctuation">.</span>body<span class="token punctuation">;</span>

  <span class="token keyword">let</span> response_headers <span class="token operator">=</span> original_response<span class="token punctuation">.</span>headers<span class="token punctuation">;</span>

  <span class="token keyword">let</span> new_response_headers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span>response_headers<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> status <span class="token operator">=</span> original_response<span class="token punctuation">.</span>status<span class="token punctuation">;</span>

  

  <span class="token keyword">if</span> <span class="token punctuation">(</span>new_response_headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;Www-Authenticate&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">let</span> auth <span class="token operator">=</span> new_response_headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;Www-Authenticate&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> re <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>auth_url<span class="token punctuation">,</span> <span class="token string">&#39;g&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    new_response_headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;Www-Authenticate&quot;</span><span class="token punctuation">,</span> response_headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;Www-Authenticate&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>re<span class="token punctuation">,</span> workers_url<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>

  

  <span class="token keyword">if</span> <span class="token punctuation">(</span>new_response_headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;Location&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">return</span> <span class="token function">httpHandler</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>request<span class="token punctuation">,</span> new_response_headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;Location&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token punctuation">}</span>

  

  <span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span>original_text<span class="token punctuation">,</span> <span class="token punctuation">{</span>

            status<span class="token punctuation">,</span>

            headers<span class="token operator">:</span> new_response_headers

        <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> response<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

  
  

<span class="token doc-comment comment">/**

 * @param <span class="token class-name"><span class="token punctuation">{</span>Request<span class="token punctuation">}</span></span> <span class="token parameter">req</span>

 * @param <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">pathname</span>

 */</span>

<span class="token keyword">function</span> <span class="token function">httpHandler</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> pathname</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> reqHdrRaw <span class="token operator">=</span> req<span class="token punctuation">.</span>headers

  

    <span class="token comment">// preflight</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>method <span class="token operator">===</span> <span class="token string">&#39;OPTIONS&#39;</span> <span class="token operator">&amp;&amp;</span>

        reqHdrRaw<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string">&#39;access-control-request-headers&#39;</span><span class="token punctuation">)</span>

    <span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token constant">PREFLIGHT_INIT</span><span class="token punctuation">)</span>

    <span class="token punctuation">}</span>

  

    <span class="token keyword">let</span> rawLen <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>

  

    <span class="token keyword">const</span> reqHdrNew <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span>reqHdrRaw<span class="token punctuation">)</span>

  

    <span class="token keyword">const</span> refer <span class="token operator">=</span> reqHdrNew<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;referer&#39;</span><span class="token punctuation">)</span>

  

    <span class="token keyword">let</span> urlStr <span class="token operator">=</span> pathname

    <span class="token keyword">const</span> urlObj <span class="token operator">=</span> <span class="token function">newUrl</span><span class="token punctuation">(</span>urlStr<span class="token punctuation">)</span>

  

    <span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>RequestInit<span class="token punctuation">}</span></span> */</span>

    <span class="token keyword">const</span> reqInit <span class="token operator">=</span> <span class="token punctuation">{</span>

        method<span class="token operator">:</span> req<span class="token punctuation">.</span>method<span class="token punctuation">,</span>

        headers<span class="token operator">:</span> reqHdrNew<span class="token punctuation">,</span>

        redirect<span class="token operator">:</span> <span class="token string">&#39;follow&#39;</span><span class="token punctuation">,</span>

        body<span class="token operator">:</span> req<span class="token punctuation">.</span>body

    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token function">proxy</span><span class="token punctuation">(</span>urlObj<span class="token punctuation">,</span> reqInit<span class="token punctuation">,</span> rawLen<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>

  
  

<span class="token doc-comment comment">/**

 *

 * @param <span class="token class-name"><span class="token punctuation">{</span>URL<span class="token punctuation">}</span></span> <span class="token parameter">urlObj</span>

 * @param <span class="token class-name"><span class="token punctuation">{</span>RequestInit<span class="token punctuation">}</span></span> <span class="token parameter">reqInit</span>

 */</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">proxy</span><span class="token punctuation">(</span><span class="token parameter">urlObj<span class="token punctuation">,</span> reqInit<span class="token punctuation">,</span> rawLen</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>urlObj<span class="token punctuation">.</span>href<span class="token punctuation">,</span> reqInit<span class="token punctuation">)</span>

    <span class="token keyword">const</span> resHdrOld <span class="token operator">=</span> res<span class="token punctuation">.</span>headers

    <span class="token keyword">const</span> resHdrNew <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span>resHdrOld<span class="token punctuation">)</span>

  

    <span class="token comment">// verify</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>rawLen<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">const</span> newLen <span class="token operator">=</span> resHdrOld<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;content-length&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;&#39;</span>

        <span class="token keyword">const</span> badLen <span class="token operator">=</span> <span class="token punctuation">(</span>rawLen <span class="token operator">!==</span> newLen<span class="token punctuation">)</span>

  

        <span class="token keyword">if</span> <span class="token punctuation">(</span>badLen<span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token keyword">return</span> <span class="token function">makeRes</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>body<span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>

                <span class="token string">&#39;--error&#39;</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">bad len: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>newLen<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, except: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>rawLen<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>

                <span class="token string">&#39;access-control-expose-headers&#39;</span><span class="token operator">:</span> <span class="token string">&#39;--error&#39;</span><span class="token punctuation">,</span>

            <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> status <span class="token operator">=</span> res<span class="token punctuation">.</span>status

    resHdrNew<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;access-control-expose-headers&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span>

    resHdrNew<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;access-control-allow-origin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span>

    resHdrNew<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Cache-Control&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;max-age=1500&#39;</span><span class="token punctuation">)</span>

    resHdrNew<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;content-security-policy&#39;</span><span class="token punctuation">)</span>

    resHdrNew<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;content-security-policy-report-only&#39;</span><span class="token punctuation">)</span>

    resHdrNew<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;clear-site-data&#39;</span><span class="token punctuation">)</span>

  

    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>body<span class="token punctuation">,</span> <span class="token punctuation">{</span>

        status<span class="token punctuation">,</span>

        headers<span class="token operator">:</span> resHdrNew

    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),i=[p];function c(o,l){return s(),a("div",null,i)}const r=n(t,[["render",c],["__file","jingxiang.html.vue"]]);export{r as default};
