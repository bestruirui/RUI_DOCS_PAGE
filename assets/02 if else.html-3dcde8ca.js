import{ab as e,C as t,D as p,A as s,O as n,J as c,ac as i,ad as o,R as l}from"./framework-e618a78f.js";const u={},d=s("h2",{id:"条件和-if-语句",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#条件和-if-语句","aria-hidden":"true"},"#"),n(" 条件和 If 语句")],-1),r=o(`<ul><li>小于：a &lt; b</li><li>小于或等于：a &lt;= b</li><li>大于：a &gt; b</li><li>大于等于：a &gt;= b</li><li>等于 a == b</li><li>不等于：a != b</li></ul><p>可以使用这些条件为不同的决策执行不同的操作。</p><p>C 有以下条件语句：</p><ul><li>使用 <code>if</code> 指定要执行的代码块，如果指定条件为真</li><li>使用<code>else</code>指定要执行的代码块，如果相同的条件为假</li><li>如果第一个条件为假，则使用 <code>else if</code> 指定要测试的新条件</li><li>使用 <code>switch</code> 指定要执行的许多替代代码块</li></ul><h2 id="if-语句" tabindex="-1"><a class="header-anchor" href="#if-语句" aria-hidden="true">#</a> if 语句</h2><p>使用 <code>if</code> 语句指定在条件为 <code>true</code> 时要执行的 C 代码块。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>条件<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 条件为真(true)时执行的代码块</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其执行过程可表示为下图：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>      ┆
╭┈┈┈┈┈▼┈┈┈┈┈╮ 
┆ condition ├┈┈┈╮
╰┈┈┈┈┈┈┈┈┈┈┈╯   ┆
      ┆ <span class="token boolean">true</span>    ┆ <span class="token boolean">false</span>
      ▼         ┆
 ╭┈┈┈┈┴┈┈┈┈╮    ┆
 ┆  语句块  ┆    ┆
 ╰┈┈┈┈┬┈┈┈┈╯    ┆
      ├┈◀┈┈┈┈┈┈┈╯
      ▼
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意，<code>if</code> 是小写字母。 大写字母（If 或 IF）会产生错误。</p><p>在下面的示例中，我们测试两个值来确定 20 是否大于 18。如果条件为 <code>true</code>，则打印一些文本：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">20</span> <span class="token operator">&gt;</span> <span class="token number">18</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;20 大于 18&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们还可以测试变量：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;x 大于 y&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例说明</strong></p><p>在上面的示例中，我们使用两个变量 <strong>x</strong> 和 <strong>y</strong> 来测试 x 是否大于 y（使用 <code>&gt;</code> 运算符）。 由于 x 为 20，y 为 18，并且我们知道 20 大于 18，我们在屏幕上打印 “x 大于 y”。</p><h2 id="else-语句" tabindex="-1"><a class="header-anchor" href="#else-语句" aria-hidden="true">#</a> else 语句</h2><p>使用 <code>else</code> 语句指定在条件(condition) 为 <code>false</code> 时要执行的代码块。</p><h3 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1" aria-hidden="true">#</a> 语法</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>条件<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 条件为真(true)时执行的代码块</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// 条件为假(false)时执行的代码块</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其执行过程可表示为下图：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>                   ┆
                   ▼
       <span class="token boolean">true</span>  ╭┈┈┈┈┈┴┈┈┈┈┈╮ <span class="token boolean">false</span>
     ╭┈┈┈┈┈┈┈┤ condition ├┈┈┈┈┈┈┈╮
     ▼       ╰┈┈┈┈┈┈┈┈┈┈┈╯       ▼
╭┈┈┈┈┴┈┈┈┈┈╮                ╭┈┈┈┈┴┈┈┈┈┈╮
┆  语句块1  ┆                ┆  语句块2  ┆
╰┈┈┈┈┬┈┈┈┈┈╯                ╰┈┈┈┈┬┈┈┈┈┈╯
     ╰┈┈┈┈┈┈┈┈┈┈┈┈┈┬┈┈┈┈┈┈┈┈┈┈┈┈┈╯
                   ▼
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> time <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>time <span class="token operator">&lt;</span> <span class="token number">18</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;再会！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;晚上好！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 输出 -&gt; &quot;晚上好！&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例说明</strong></p><p>在上面的示例中，时间 (20) 大于 18，因此条件为 <code>false</code>。 因此，我们转到 <code>else</code> 条件并打印到屏幕“晚安”。 如果时间小于 18，程序将打印 “晚上好！”。</p><h2 id="else-if-语句" tabindex="-1"><a class="header-anchor" href="#else-if-语句" aria-hidden="true">#</a> else if 语句</h2><p>如果第一个条件为 <code>false</code>，则使用 <code>else if</code> 语句指定新条件。</p><h3 id="语法-2" tabindex="-1"><a class="header-anchor" href="#语法-2" aria-hidden="true">#</a> 语法</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>条件<span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 如果 条件 1 为真(true)，则要执行的代码块</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>条件<span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 如果 条件 1 为假(false)且 条件 2 为真(true)，则要执行的代码块</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// 如果 条件 1 为假(false)且 条件 2 为假(false)，则要执行的代码块</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> time <span class="token operator">=</span> <span class="token number">22</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>time <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;早上好！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>time <span class="token operator">&lt;</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;再会！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;晚上好！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 输出 -&gt; &quot;晚上好！&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例说明</strong></p><p>在上面的示例中，时间 (22) 大于 10，因此<strong>第一个条件</strong>为 <code>false</code>。 <code>else if</code> 语句中的下一个条件也是 <code>false</code>，所以我们继续讨论 <code>else</code> 条件，因为 <strong>条件1</strong> 和 <strong>条件2</strong> 都是 <code>false</code> - 并打印到 屏幕“晚上好”。</p><p>但是，如果时间是 14，我们的程序将打印“再会！”。</p><h2 id="另一个例子" tabindex="-1"><a class="header-anchor" href="#另一个例子" aria-hidden="true">#</a> 另一个例子</h2><p>这个例子展示了如何使用 <code>if..else if</code> 来判断一个数字是正数还是负数：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> myNum <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// Is this a positive or negative number?</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>myNum <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;该值为正数。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>myNum <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;该值为负数。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">else</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;值为 0。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三元运算符" tabindex="-1"><a class="header-anchor" href="#三元运算符" aria-hidden="true">#</a> 三元运算符</h2><p>还有一个简写 <code>if else</code>，它被称为三元运算符，因为它由三个操作数组成。它可用于用单行替换多行代码。它通常用于替换简单的 <code>if else</code> 语句：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>变量 <span class="token operator">=</span> <span class="token punctuation">(</span>条件<span class="token punctuation">)</span> <span class="token operator">?</span> 表达式真<span class="token punctuation">(</span>true<span class="token punctuation">)</span> <span class="token operator">:</span> 表达式假<span class="token punctuation">(</span>false<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>原始示例：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> time <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>time <span class="token operator">&lt;</span> <span class="token number">18</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;再会！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;晚上好！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简化示例：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> time <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token punctuation">(</span>time <span class="token operator">&lt;</span> <span class="token number">18</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;再会！&quot;</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;晚上好！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,44);function k(v,m){const a=l("RouterLink");return t(),p("div",null,[d,s("p",null,[n("从 "),c(a,{to:"/Learn/RM/%E5%9F%B9%E8%AE%AD/01%20%E8%BF%90%E7%AE%97%E7%AC%A6.html"},{default:i(()=>[n("运算符")]),_:1}),n("中了解到，C 支持数学中的常见逻辑条件：")]),r])}const f=e(u,[["render",k],["__file","02 if else.html.vue"]]);export{f as default};
