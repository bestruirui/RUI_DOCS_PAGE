import{ab as s,C as n,D as a,ad as e}from"./framework-e618a78f.js";const t={},l=e(`<p>利用go-cqhttp提供的API向指定群聊发送直播状态</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker run \\
  -v /docker/cqhttp:/data \\
  -p 2333:8080 \\
  -it \\
  --name cqhttp \\
  ghcr.bestrui.top/mrs4s/go-cqhttp:master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">ROOM_ID</span><span class="token operator">=</span><span class="token number">27178028</span>

<span class="token assign-left variable">LIVE_STATUS</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token parameter variable">-s</span> <span class="token string">&quot;https://api.live.bilibili.com/room/v1/Room/get_info?room_id=<span class="token variable">$ROOM_ID</span>&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/,/\\n/g&#39;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;live_status&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/:/\\n/g&#39;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;1d&#39;</span>      <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/}//g&#39;</span><span class="token variable">\`</span></span>

  
<span class="token assign-left variable">LIVE_IMAGE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">curl</span>    <span class="token parameter variable">-s</span> <span class="token string">&quot;https://api.live.bilibili.com/room/v1/Room/get_info?room_id=<span class="token variable">$ROOM_ID</span>&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/,/\\n/g&#39;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;keyframe&quot;</span>    <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/&quot;/\\n/g&#39;</span> <span class="token operator">|</span>  <span class="token function">sed</span> <span class="token string">&#39;s/}//g&#39;</span> <span class="token operator">|</span> <span class="token function">grep</span> https<span class="token variable">\`</span></span>

  

<span class="token assign-left variable">RUI_TIME</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token assign-left variable">TZ</span><span class="token operator">=</span>UTC-8 <span class="token function">date</span> <span class="token string">&quot;+%m-%d %H:%M:%S&quot;</span><span class="token variable">\`</span></span>

  

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$LIVE_STATUS</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>

     <span class="token assign-left variable">POST_OUTPUT</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">curl</span>  <span class="token parameter variable">-s</span> POST http://192.168.31.7:2333/send_group_msg <span class="token punctuation">\\</span>

                 <span class="token parameter variable">-H</span> <span class="token string">&#39;Content-Type: application/json&#39;</span> <span class="token punctuation">\\</span>

                 <span class="token parameter variable">-d</span> <span class="token string">&#39;{

                    &quot;group_id&quot;:769835,

                    &quot;message&quot;:[

                                  {

                                    &quot;type&quot;: &quot;image&quot;,

                                    &quot;data&quot;: {

                                        &quot;file&quot;: &quot;&#39;</span>$LIVE_IMAGE<span class="token string">&#39;&quot;

                                    }

                                }  

                            ],

                    &quot;auto_escape&quot;:true

                    }&#39;</span> <span class="token variable">\`</span></span>

  

      <span class="token assign-left variable">POST_STATUS</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> $POST_OUTPUT <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/,/\\n/g&#39;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;status&quot;</span> <span class="token operator">|</span>  <span class="token function">sed</span> <span class="token string">&#39;s/:/\\n/g&#39;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;1d&#39;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/}//g&#39;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/&quot;//g&#39;</span> <span class="token variable">\`</span></span>

      <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$POST_STATUS</span> <span class="token operator">=</span> <span class="token string">&quot;ok&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>          

       <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span>  <span class="token string">&quot;<span class="token variable">$RUI_TIME</span>  <span class="token entity" title="\\e">\\e</span>[32m SUCCESS <span class="token entity" title="\\e">\\e</span>[0m 正在直播 发送成功&quot;</span>

      <span class="token keyword">else</span>

       <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token variable">$RUI_TIME</span>  <span class="token entity" title="\\e">\\e</span>[33m WARN <span class="token entity" title="\\e">\\e</span>[0m 正在直播 发送失败&quot;</span>

      <span class="token keyword">fi</span>

<span class="token keyword">else</span>

     <span class="token assign-left variable">POST_OUTPUT</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">curl</span>  <span class="token parameter variable">-s</span> <span class="token string">&#39;http://192.168.31.7:2333/send_private_msg?user_id=1009&amp;message=直播暂停&amp;auto_escape=true&#39;</span> <span class="token variable">\`</span></span>

     <span class="token assign-left variable">POST_STATUS</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> $POST_OUTPUT <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/,/\\n/g&#39;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;status&quot;</span> <span class="token operator">|</span>  <span class="token function">sed</span> <span class="token string">&#39;s/:/\\n/g&#39;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;1d&#39;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/}//g&#39;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/&quot;//g&#39;</span> <span class="token variable">\`</span></span>

     <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$POST_STATUS</span> <span class="token operator">=</span> <span class="token string">&quot;ok&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>          

     <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span>  <span class="token string">&quot;<span class="token variable">$RUI_TIME</span> <span class="token entity" title="\\e">\\e</span>[31m ERROR <span class="token entity" title="\\e">\\e</span>[0m 直播<span class="token entity" title="\\e">\\e</span>[31m结束<span class="token entity" title="\\e">\\e</span>[0m 发送<span class="token entity" title="\\e">\\e</span>[32m成功<span class="token entity" title="\\e">\\e</span>[0m&quot;</span>

     <span class="token keyword">else</span>

     <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token variable">$RUI_TIME</span> <span class="token entity" title="\\e">\\e</span>[31m ERROR <span class="token entity" title="\\e">\\e</span>[0m 直播<span class="token entity" title="\\e">\\e</span>[31m结束<span class="token entity" title="\\e">\\e</span>[0m  发送<span class="token entity" title="\\e">\\e</span>[31m失败<span class="token entity" title="\\e">\\e</span>[0m&quot;</span>

     <span class="token keyword">fi</span>

<span class="token keyword">fi</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),p=[l];function i(o,c){return n(),a("div",null,p)}const d=s(t,[["render",i],["__file","2023-02-23.html.vue"]]);export{d as default};
