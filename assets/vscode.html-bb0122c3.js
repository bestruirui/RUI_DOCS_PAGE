import{ab as l,C as a,D as r,A as e,O as i,J as n,ac as c,ad as t,R as s}from"./framework-e618a78f.js";const u="/assets/20230217171306-bdedeeb4.png",v="/assets/20230217173136-e4b7ca39.png",h="/assets/20230217171556-cb68c300.png",m="/assets/20230217174537-d25b6658.png",_="/assets/20230217174656-98363812.png",b={},p=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"提示"),e("p",null,[i("在开始之前先检查一下"),e("code",null,"C:\\Users"),i("下的用户名不能含有特殊字符，汉语，否则无法正常编译")])],-1),g=e("h2",{id:"_1-安装插件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-安装插件","aria-hidden":"true"},"#"),i(" 1.安装插件")],-1),x={href:"https://marketplace.visualstudio.com/items?itemName=CL.eide",target:"_blank",rel:"noopener noreferrer"},f={href:"https://marketplace.visualstudio.com/items?itemName=marus25.cortex-debug",target:"_blank",rel:"noopener noreferrer"},C={href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools",target:"_blank",rel:"noopener noreferrer"},q={href:"https://marketplace.visualstudio.com/items?itemName=GitHub.copilot",target:"_blank",rel:"noopener noreferrer"},D=t('<h2 id="_2-插件配置" tabindex="-1"><a class="header-anchor" href="#_2-插件配置" aria-hidden="true">#</a> 2.插件配置</h2><h3 id="embedded-ide-导入工程-编译-下载" tabindex="-1"><a class="header-anchor" href="#embedded-ide-导入工程-编译-下载" aria-hidden="true">#</a> Embedded IDE -- 导入工程，编译，下载</h3><h4 id="插件的基础配置" tabindex="-1"><a class="header-anchor" href="#插件的基础配置" aria-hidden="true">#</a> 插件的基础配置</h4>',3),k=e("br",null,null,-1),E=e("img",{src:u,alt:"",loading:"lazy"},null,-1),I=e("code",null,"CMSIS-DAP",-1),A=e("code",null,"PATH",-1),F=e("br",null,null,-1),S={href:"https://download.bestrui.top/%E8%BD%AF%E4%BB%B6/windows/openocd-20230202.7z",target:"_blank",rel:"noopener noreferrer"},w=e("br",null,null,-1),L=e("img",{src:v,alt:"",loading:"lazy"},null,-1),M=t('<h4 id="导入工程后的配置" tabindex="-1"><a class="header-anchor" href="#导入工程后的配置" aria-hidden="true">#</a> 导入工程后的配置：</h4><ul><li>点击<code>芯片支持包</code>选项右边的<code>＋</code>选择<code>From Repo</code></li><li>直接搜索<code>stm32</code>选择开发板的型号</li><li>导入完成后接着选择开发板的具体型号</li><li><code>构建配置</code>根据自己的项目选择</li><li><code>烧录配置</code>如果你也和我一样使用的是<code>CMSIS-DAP</code>调试器，那这里选择<code>OpenOCD</code>，子选项根据自己工程配置<br> 这是我配置成功的截图<br><img src="'+h+'" alt="" loading="lazy"></li></ul><h3 id="cortex-debug-代码调试" tabindex="-1"><a class="header-anchor" href="#cortex-debug-代码调试" aria-hidden="true">#</a> Cortex-Debug -- 代码调试</h3><p>在家里没有可以用的设备，暂时先不写</p><h3 id="c-c-跳转定义" tabindex="-1"><a class="header-anchor" href="#c-c-跳转定义" aria-hidden="true">#</a> C/C++ -- 跳转定义</h3><p>命令面板搜索<code>C/C++</code>选择<code>编辑配置(UI)</code></p><p><img src="'+m+'" alt="" loading="lazy"> 配置<code>包含路径</code></p><figure><img src="'+_+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//引用instdint.h报错
D:\\APP\\keil\\core\\ARM\\ARMCLANG\\include\\

//引用头文件报错
\${workspaceFolder}/**
\${workspaceFolder}/Core/Inc/
\${workspaceFolder}/Drivers/STM32F4xx_HAL_Driver/Inc/
\${workspaceFolder}/Drivers/STM32F4xx_HAL_Driver/Inc/Legacy/
\${workspaceFolder}/Drivers/CMSIS/Device/ST/STM32F4xx/Include/
\${workspaceFolder}/Drivers/CMSIS/Include/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>c_cpp_properties.json</code>文件需要定义一些宏定义避免出现错误波形</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{

    &quot;configurations&quot;: [
        {
            &quot;name&quot;: &quot;Win32&quot;,
            &quot;includePath&quot;: [
                &quot;\${workspaceFolder}/**&quot;,
                &quot;\${workspaceFolder}/Core/Inc/&quot;
            ],
            &quot;defines&quot;: [
                &quot;_DEBUG&quot;,
                &quot;UNICODE&quot;,
                &quot;_UNICODE&quot;,
                &quot;USE_HAL_DRIVER&quot;,
                &quot;STM32F427xx&quot;,
                &quot;RUI_DF_DEVELOPMENT&quot;,
                &quot;__CC_ARM&quot;
            ]
        }
    ],
    &quot;version&quot;: 4
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="github-copilot-ai补全" tabindex="-1"><a class="header-anchor" href="#github-copilot-ai补全" aria-hidden="true">#</a> GitHub Copilot -- AI补全</h3>`,12),N=e("strong",null,"Copilot",-1),B=e("br",null,null,-1),O=e("br",null,null,-1);function R(G,H){const o=s("ExternalLinkIcon"),d=s("RouterLink");return a(),r("div",null,[p,g,e("ul",null,[e("li",null,[e("a",x,[i("Embedded IDE"),n(o)])]),e("li",null,[e("a",f,[i("Cortex-Debug"),n(o)])]),e("li",null,[e("a",C,[i("C/C++"),n(o)])]),e("li",null,[e("a",q,[i("GitHub Copilot"),n(o)])])]),D,e("p",null,[i("我截图的这几个是需要配置的"),k,E,i(" 我使用的是"),I,i("调试器，这里的"),A,i("也需要配置一下"),F,i(" OpenOCD可以在这里"),e("a",S,[i("下载"),n(o)]),w,L]),M,e("p",null,[N,i("是GitHub和OpenAI合作开发的一个人工智能工具，可以通过GitHub Copilot自动补全代码"),B,i(" 正式版定价10美元/月，但是学生免费✌️"),O,i(" 关于如何申请Github的学生包可以参考"),n(d,{to:"/Learn/Other/Github/%E7%94%B3%E8%AF%B7%E5%AD%A6%E7%94%9F%E5%8C%85.html"},{default:c(()=>[i("这里")]),_:1})])])}const $=l(b,[["render",R],["__file","vscode.html.vue"]]);export{$ as default};
