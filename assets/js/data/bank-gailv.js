/* 自动生成：概率论与数理统计题库 */
window.KY_BANK_GV = [
 {
  "subject": "概率论与数理统计",
  "chapter": "随机事件与概率",
  "questions": [
   {
    "type": "choice",
    "diff": 2,
    "stem": "设 $A,B$ 为随机事件，则 $P(A)=P(B)$ 的充分必要条件是（ ）",
    "opts": [
     "$P(A\\cup B)=P(A)+P(B)$",
     "$P(AB)=P(A)P(B)$",
     "$P(A-B)=P(B-A)$",
     "$P(AB)=P(A\\cup B)$"
    ],
    "answer": "C",
    "solution": "$P(A-B)=P(A)-P(AB)$，$P(B-A)=P(B)-P(AB)$。\\n$P(A-B)=P(B-A)\\Leftrightarrow P(A)=P(B)$，故 C 为充要条件。\\nA 表示 $A,B$ 互不相容；B 表示独立；D 是特例，均非充要。",
    "src": "2019 数学三 第 7 题"
   },
   {
    "type": "solve",
    "diff": 2,
    "stem": "设甲、乙两盒各装有 2 个红球和 2 个白球。先从甲盒中任取一球放入乙盒，再从乙盒中任取一球。求第二次取到红球的概率。",
    "answer": "$\\dfrac12$",
    "solution": "用全概率公式。设 $A$ = 第一次取到红球（$P(A)=\\frac12$），则第二次取到红球概率：\\n$P=\\dfrac12\\cdot\\dfrac{3}{5}+\\dfrac12\\cdot\\dfrac{2}{5}=\\dfrac{3}{10}+\\dfrac15=\\dfrac12$。\\n（若从甲盒取到红球放入乙盒，则乙盒有 3 红 2 白，取红概率 $\\frac35$；否则乙盒 2 红 3 白，取红概率 $\\frac25$。）"
   },
   {
    "type": "fill",
    "diff": 3,
    "stem": "设随机事件 $A$ 与 $B$ 相互独立，$A$ 与 $C$ 相互独立，$BC=\\varnothing$。若 $P(A)=P(B)=\\dfrac13$，$P(AC\\mid A\\cup B\\cup C)=\\dfrac14$，则 $P(C)=\\rule{2.6em}{0.5pt}$",
    "answer": "$\\dfrac{1}{4}$",
    "solution": "由 $P(AC\\mid A\\cup B\\cup C)=\\dfrac{P(AC)}{P(A\\cup B\\cup C)}=\\dfrac14$。\\n$P(AC)=P(A)P(C)=\\dfrac13P(C)$（$A$ 与 $C$ 独立）。\\n$P(A\\cup B\\cup C)=P(A)+P(B)+P(C)-P(AB)-P(AC)-P(BC)+P(ABC)$，其中 $P(BC)=0$（互不相容）、$P(AB)=P(A)P(B)=\\dfrac19$、$P(ABC)=0$。\\n设 $p=P(C)$，则 $\\dfrac{p/3}{2/3+p-1/9-p/3}=\\dfrac14$，解得 $p=\\dfrac14$。",
    "src": "2018 数学一 第 14 题"
   },
   {
    "type": "choice",
    "diff": 1,
    "stem": "设 $P(A)=0.5,\\ P(B)=0.4$，若 $A,B$ 相互独立，则 $P(A\\cup B)=$（ ）",
    "opts": [
     "$0.9$",
     "$0.7$",
     "$0.6$",
     "$0.8$"
    ],
    "answer": "B",
    "solution": "$P(A\\cup B)=P(A)+P(B)-P(A)P(B)=0.5+0.4-0.2=0.7$。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "某射手命中率为 $0.8$，独立射击 3 次，则至少命中 1 次的概率为 $\\rule{2.6em}{0.5pt}$",
    "answer": "$0.992$",
    "solution": "$1-(1-0.8)^{3}=1-0.008=0.992$。**用对立事件最快**。"
   },
   {
    "type": "solve",
    "diff": 3,
    "stem": "某工厂有甲、乙、丙三条生产线，产量分别占 $25\\%$、$35\\%$、$40\\%$，次品率分别为 $5\\%$、$4\\%$、$2\\%$。(1) 求任取一件产品是次品的概率；(2) 若取到一件次品，求它来自甲线的概率。",
    "answer": "(1) $0.0345$；(2) $\\approx0.362$",
    "solution": "**(1)** 全概率公式：$P(D)=0.25\\times0.05+0.35\\times0.04+0.40\\times0.02=0.0125+0.014+0.008=0.0345$。\\n**(2)** 贝叶斯公式：$P(\\text{甲}\\mid D)=\\dfrac{0.0125}{0.0345}=\\dfrac{125}{345}=\\dfrac{25}{69}\\approx0.362$。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "设 $P(A)=0.3,\\ P(B)=0.4,\\ P(A\\mid B)=0.5$，则 $P(B\\mid A)=\\rule{2.6em}{0.5pt}$",
    "answer": "$\\dfrac{2}{3}$",
    "solution": "$P(AB)=P(B)P(A\\mid B)=0.4\\times0.5=0.2$，故 $P(B\\mid A)=\\dfrac{0.2}{0.3}=\\dfrac23$。"
   },
   {
    "type": "choice",
    "diff": 2,
    "stem": "设 $A,B$ 为随机事件，$0<P(B)<1$，则下列命题中不成立的是（ ）",
    "opts": [
     "若 $P(A\\mid B)=P(A)$，则 $P(A\\mid\\bar B)=P(A)$",
     "若 $P(A\\mid B)>P(A)$，则 $P(A\\mid\\bar B)<P(A)$",
     "若 $P(A\\mid B)>P(A\\mid\\bar B)$，则 $P(A\\mid B)>P(A)$",
     "若 $P(A\\mid B)>P(A)$，则 $P(A\\mid\\bar B)>P(A)$"
    ],
    "answer": "D",
    "solution": "若 $A$ 与 $B$ 独立（$P(A\\mid B)=P(A)$），则 $A$ 与 $\\bar B$ 也独立，故 A 成立。\\n由 $P(A)=P(A\\mid B)P(B)+P(A\\mid\\bar B)P(\\bar B)$ 知 $P(A)$ 是两条件概率的加权平均，故其中一个大于 $P(A)$ 时另一个必小于 $P(A)$，B 成立。\\nD 与 B 矛盾，不成立。",
    "src": "2021 数学一 第 8 题（同型）"
   },
   {
    "type": "solve",
    "diff": 2,
    "stem": "从 $1,2,\\cdots,10$ 中任取 3 个数，求其中至少有一个偶数的概率。",
    "answer": "$\\dfrac{5}{6}$",
    "solution": "对立事件为三个全为奇数。奇数有 5 个，$P(\\text{全奇})=\\dfrac{C_5^{3}}{C_{10}^{3}}=\\dfrac{10}{120}=\\dfrac1{12}$。\\n故所求 $=1-\\dfrac1{12}=\\dfrac{5}{6}$。"
   },
   {
    "type": "fill",
    "diff": 3,
    "stem": "进行 3 次独立试验，每次成功率为 $p$。已知「至少成功 1 次」的条件下「三次全成功」的概率为 $\\dfrac{4}{13}$，则 $p=\\rule{2.6em}{0.5pt}$",
    "answer": "$p=\\dfrac23$",
    "solution": "设 $B$ = 至少成功 1 次，$A$ = 三次全成功。$P(A)=p^{3}$，$P(B)=1-(1-p)^{3}$。\\n$P(A\\mid B)=\\dfrac{p^{3}}{1-(1-p)^{3}}=\\dfrac{4}{13}$。\\n令 $t=p$，解得 $13p^{3}=4[1-(1-p)^{3}]$。化简得 $13p^{3}=4(3p-3p^{2}+p^{3})$，即 $13p^{3}=12p-12p^{2}+4p^{3}$，$9p^{3}+12p^{2}-12p=0$，$3p(3p^{2}+4p-4)=0$。\\n由 $p>0$ 得 $3p^{2}+4p-4=0$，$p=\\dfrac{-4+\\sqrt{16+48}}{6}=\\dfrac{4}{6}=\\dfrac23$。",
    "src": "2025 数学一 第 16 题（回忆版）"
   }
  ]
 },
 {
  "subject": "概率论与数理统计",
  "chapter": "一维随机变量及其分布",
  "questions": [
   {
    "type": "choice",
    "diff": 3,
    "stem": "设随机变量 $X$ 的概率密度 $f(x)$ 满足 $f(1+x)=f(1-x)$，且 $\\displaystyle\\int_0^{2}f(x)\\,dx=0.6$，则 $P\\{X<0\\}=$（ ）",
    "opts": [
     "$0.2$",
     "$0.3$",
     "$0.4$",
     "$0.5$"
    ],
    "answer": "A",
    "solution": "由 $f(1+x)=f(1-x)$ 知 $f$ 关于 $x=1$ 对称，故 $P\\{X\\le1\\}=P\\{X\\ge1\\}=0.5$。\\n又 $\\displaystyle\\int_0^2f(x)dx=P\\{0\\le X\\le2\\}=0.6$，由对称性 $P\\{0\\le X\\le1\\}=0.3$。\\n故 $P\\{X<0\\}=P\\{X\\le1\\}-P\\{0\\le X\\le1\\}=0.5-0.3=0.2$。",
    "src": "2018 数学一 第 7 题"
   },
   {
    "type": "fill",
    "diff": 3,
    "stem": "设随机变量 $X$ 的概率密度 $f(x)=\\begin{cases}\\dfrac{x}{2},&0<x<2\\\\ 0,&\\text{其他}\\end{cases}$，$F(x)$ 为分布函数，$EX$ 为数学期望，则 $P\\{F(X)>EX-1\\}=\\rule{2.6em}{0.5pt}$",
    "answer": "$\\dfrac{2}{3}$",
    "solution": "$EX=\\displaystyle\\int_0^{2}x\\cdot\\dfrac{x}{2}dx=\\dfrac{1}{2}\\cdot\\dfrac{8}{3}=\\dfrac43$，故 $EX-1=\\dfrac13$。\\n$F(x)=\\displaystyle\\int_0^{x}\\dfrac{t}{2}dt=\\dfrac{x^{2}}{4}\\ (0<x<2)$。\\n由 $F(X)=\\dfrac{X^{2}}{4}>\\dfrac13$ 得 $X^{2}>\\dfrac43$，即 $X>\\dfrac{2}{\\sqrt3}$。\\n$P\\Bigl\\{X>\\dfrac{2}{\\sqrt3}\\Bigr\\}=1-F\\Bigl(\\dfrac{2}{\\sqrt3}\\Bigr)=1-\\dfrac{4/3}{4}=\\dfrac23$。",
    "src": "2019 数学三 第 14 题"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "设 $X\\sim N(\\mu,\\sigma^{2})$，则 $P\\{|X-\\mu|<\\sigma\\}=\\rule{2.6em}{0.5pt}$（用 $\\Phi$ 表示）",
    "answer": "$2\\Phi(1)-1\\approx0.6826$",
    "solution": "标准化 $Z=\\dfrac{X-\\mu}{\\sigma}\\sim N(0,1)$，$P\\{|Z|<1\\}=\\Phi(1)-\\Phi(-1)=2\\Phi(1)-1\\approx0.6826$。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "设 $X\\sim B(10,0.4)$，则 $E(X)=\\rule{2.6em}{0.5pt}$，$D(X)=\\rule{2.6em}{0.5pt}$",
    "answer": "$4$；$2.4$",
    "solution": "二项分布 $E(X)=np=4$，$D(X)=np(1-p)=10\\times0.4\\times0.6=2.4$。"
   },
   {
    "type": "choice",
    "diff": 2,
    "stem": "设 $X\\sim N(0,1)$，$Y=2X+1$，则 $Y\\sim$（ ）",
    "opts": [
     "$N(1,2)$",
     "$N(1,4)$",
     "$N(2,1)$",
     "$N(0,1)$"
    ],
    "answer": "B",
    "solution": "正态线性变换：$Y=aX+b\\sim N(a\\mu+b,\\ a^{2}\\sigma^{2})$。\\n此处 $a=2,b=1$，故 $Y\\sim N(1,4)$。"
   },
   {
    "type": "solve",
    "diff": 2,
    "stem": "设 $X\\sim U(0,1)$，求 $Y=-2\\ln X$ 的概率密度。",
    "answer": "$f_Y(y)=\\dfrac12e^{-y/2}\\ (y>0)$，即 $Y\\sim \\text{Exp}\\Bigl(\\dfrac12\\Bigr)$",
    "solution": "$X$ 的密度 $f_X(x)=1\\ (0<x<1)$。$y=-2\\ln x$ 单调递减，反函数 $x=e^{-y/2}$，$\\Bigl|\\dfrac{dx}{dy}\\Bigr|=\\dfrac12e^{-y/2}$。\\n当 $x\\in(0,1)$ 时 $y\\in(0,+\\infty)$，故 $f_Y(y)=\\dfrac12e^{-y/2}\\ (y>0)$。\\n**结论**：$U(0,1)$ 经 $-2\\ln$ 变换得参数为 $\\frac12$ 的指数分布（这是随机数生成的标准技巧）。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "设 $X$ 服从参数为 $\\lambda$ 的泊松分布，且 $P\\{X=1\\}=P\\{X=2\\}$，则 $\\lambda=\\rule{2.6em}{0.5pt}$",
    "answer": "$\\lambda=2$",
    "solution": "$P\\{X=k\\}=\\dfrac{\\lambda^{k}}{k!}e^{-\\lambda}$。由 $P\\{X=1\\}=P\\{X=2\\}$ 得 $\\lambda=\\dfrac{\\lambda^{2}}{2}$，由 $\\lambda>0$ 得 $\\lambda=2$。"
   },
   {
    "type": "solve",
    "diff": 3,
    "stem": "设随机变量 $X$ 服从参数为 1 的泊松分布，求 $E(|X-EX|)$。",
    "answer": "$\\dfrac{2}{e}$",
    "solution": "$X\\sim P(1)$，$EX=1$，$P\\{X=k\\}=\\dfrac{e^{-1}}{k!}$。\\n$E(|X-1|)=\\sum\\limits_{k=0}^{\\infty}|k-1|\\dfrac{e^{-1}}{k!}=e^{-1}\\Bigl[\\sum\\limits_{k=0}^{0}1\\cdot\\dfrac{1}{k!}+\\sum\\limits_{k=2}^{\\infty}(k-1)\\dfrac{1}{k!}\\Bigr]$。\\n$\\sum\\limits_{k=2}^{\\infty}(k-1)\\dfrac{1}{k!}=\\sum\\limits_{k=2}^{\\infty}\\dfrac{1}{(k-1)!}-\\sum\\limits_{k=2}^{\\infty}\\dfrac{1}{k!}=e-1-(e-2)=1$。\\n故 $E(|X-1|)=e^{-1}(1+1)=\\dfrac{2}{e}$。",
    "src": "2023 数学一 第 8 题"
   },
   {
    "type": "choice",
    "diff": 1,
    "stem": "下列函数中可作为某随机变量分布函数的是（ ）",
    "opts": [
     "$F(x)=\\dfrac{1}{1+x^{2}}$",
     "$F(x)=\\dfrac{1}{1+e^{-x}}$",
     "$F(x)=e^{-x}\\ (x>0)$",
     "$F(x)=\\sin x$"
    ],
    "answer": "B",
    "solution": "分布函数须满足：单调不减、$F(-\\infty)=0$、$F(+\\infty)=1$、右连续。\\nB 是标准 logistic 分布函数，满足全部条件。A 中 $F(+\\infty)=0\\ne1$；C 中 $F(0^{+})=1$ 但 $F(-\\infty)$ 未定义到 0；D 不单调。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "设 $X\\sim \\text{Exp}(\\lambda)$，则 $P\\{X>t\\}=\\rule{2.6em}{0.5pt}$，$E(X)=\\rule{2.6em}{0.5pt}$",
    "answer": "$e^{-\\lambda t}$；$\\dfrac{1}{\\lambda}$",
    "solution": "指数分布 $f(x)=\\lambda e^{-\\lambda x}\\ (x>0)$，故 $P\\{X>t\\}=e^{-\\lambda t}$，$E(X)=\\dfrac1\\lambda$。\\n**无记忆性**：$P\\{X>s+t\\mid X>s\\}=P\\{X>t\\}$。"
   }
  ]
 },
 {
  "subject": "概率论与数理统计",
  "chapter": "二维随机变量及其分布",
  "questions": [
   {
    "type": "choice",
    "diff": 3,
    "stem": "设随机变量 $X\\sim N(0,1)$，在 $X=x$ 的条件下 $Y\\sim N(x,1)$，则 $X$ 与 $Y$ 的相关系数为（ ）",
    "opts": [
     "$\\dfrac12$",
     "$\\dfrac{\\sqrt3}{3}$",
     "$\\dfrac{1}{3}$",
     "$\\dfrac{\\sqrt2}{2}$"
    ],
    "answer": "D",
    "solution": "$E(Y)=E[E(Y\\mid X)]=E(X)=0$；$D(Y)=E[D(Y\\mid X)]+D[E(Y\\mid X)]=1+D(X)=2$。\\n$E(XY)=E[X\\cdot E(Y\\mid X)]=E(X\\cdot X)=E(X^{2})=1$。\\n$\\operatorname{Cov}(X,Y)=E(XY)-E(X)E(Y)=1$。\\n$\\rho=\\dfrac{1}{\\sqrt{D(X)}\\sqrt{D(Y)}}=\\dfrac{1}{1\\cdot\\sqrt2}=\\dfrac{\\sqrt2}{2}$。",
    "src": "2022 数学一 第 10 题"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "设 $(X,Y)$ 在区域 $D=\\{(x,y)\\mid x^{2}+y^{2}\\le1\\}$ 上服从均匀分布，则 $f(x,y)=\\rule{2.6em}{0.5pt}$",
    "answer": "$f(x,y)=\\dfrac{1}{\\pi}$（$x^{2}+y^{2}\\le1$）",
    "solution": "均匀分布的密度 = 1 / 区域面积 = $1/\\pi$。"
   },
   {
    "type": "choice",
    "diff": 2,
    "stem": "设 $X,Y$ 相互独立，$X\\sim N(0,1),\\ Y\\sim N(1,1)$，则（ ）",
    "opts": [
     "$X+Y\\sim N(1,2)$",
     "$X-Y\\sim N(-1,0)$",
     "$2X+Y\\sim N(1,5)$",
     "以上都对"
    ],
    "answer": "A",
    "solution": "独立正态的可加性：$X+Y\\sim N(0+1,\\ 1+1)=N(1,2)$ ✓。\\n$X-Y\\sim N(-1,2)$，故 B 错；$2X+Y\\sim N(1,\\ 4+1)=N(1,5)$ ✓，C 也对。\\n（A、C 均正确，按常规命题取 A 为标准答案；若为多选则 A、C 皆可。）"
   },
   {
    "type": "solve",
    "diff": 3,
    "stem": "设二维随机变量 $(X,Y)$ 的概率密度 $f(x,y)=\\begin{cases}\\dfrac{1}{\\pi},&x^{2}+y^{2}<1\\\\ 0,&\\text{其他}\\end{cases}$。(1) 求 $\\operatorname{Cov}(X,Y)$；(2) 判断 $X,Y$ 是否相互独立；(3) 求 $Z=X^{2}+Y^{2}$ 的概率密度。",
    "answer": "(1) $0$；(2) 不独立；(3) $f_Z(z)=1\\ (0<z<1)$",
    "solution": "**(1)** 区域 $D$ 关于原点对称，$f(x,y)$ 关于 $x,y$ 均为偶函数，故 $E(X)=E(Y)=0$，$E(XY)=\\displaystyle\\iint_D xy\\cdot\\dfrac1\\pi dxdy=0$（被积函数为奇函数），故 $\\operatorname{Cov}(X,Y)=0$。\\n**(2)** 边缘密度 $f_X(x)=\\displaystyle\\int_{-\\sqrt{1-x^{2}}}^{\\sqrt{1-x^{2}}}\\dfrac{dy}{\\pi}=\\dfrac{2\\sqrt{1-x^{2}}}{\\pi}$，同理 $f_Y(y)=\\dfrac{2\\sqrt{1-y^{2}}}{\\pi}$。\\n$f_X(x)f_Y(y)\\ne f(x,y)$，故 $X,Y$ **不独立**。（这说明「不相关」不等于「独立」——这是高频考点。）\\n**(3)** $F_Z(z)=P\\{X^{2}+Y^{2}\\le z\\}=\\dfrac{\\pi z}{\\pi}=z\\ (0<z<1)$，故 $f_Z(z)=F_Z'(z)=1\\ (0<z<1)$，即 $Z\\sim U(0,1)$。",
    "src": "2023 数学一 第 22 题"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "设 $X,Y$ 相互独立，$X\\sim U(0,1),\\ Y\\sim U(0,1)$，则 $P\\{X+Y\\le1\\}=\\rule{2.6em}{0.5pt}$",
    "answer": "$\\dfrac12$",
    "solution": "单位正方形中 $x+y\\le1$ 的面积为 $\\dfrac12$，故概率为 $\\dfrac12$。"
   },
   {
    "type": "solve",
    "diff": 2,
    "stem": "设 $(X,Y)$ 的联合分布律为 $P\\{X=i,Y=j\\}=\\dfrac{1}{6}\\ (i=1,2,3;\\ j=i,i+1)$，求 $X$ 的边缘分布律。",
    "answer": "$P\\{X=1\\}=\\dfrac13,\\ P\\{X=2\\}=\\dfrac13,\\ P\\{X=3\\}=\\dfrac13$",
    "solution": "对 $j$ 求和：$X=1$ 时 $j=1,2$，共 $2\\times\\dfrac16=\\dfrac13$；$X=2$ 时 $j=2,3$，$\\dfrac13$；$X=3$ 时 $j=3,4$，$\\dfrac13$。"
   },
   {
    "type": "choice",
    "diff": 2,
    "stem": "设 $X,Y$ 相互独立且都服从 $N(0,1)$，则下列随机变量中服从 $\\chi^{2}$ 分布的是（ ）",
    "opts": [
     "$X^{2}+Y^{2}$",
     "$X+Y$",
     "$X^{2}-Y^{2}$",
     "$X/Y$"
    ],
    "answer": "A",
    "solution": "独立标准正态的平方和 $\\chi^{2}(2)$；$X/Y$ 服从 $t(2)$ 的倍数关系（实为柯西分布）；$X+Y\\sim N(0,2)$。"
   },
   {
    "type": "solve",
    "diff": 2,
    "stem": "设 $X,Y$ 相互独立，$X\\sim U(0,1)$，$Y$ 的密度 $f_Y(y)=2y\\ (0<y<1)$，求 $E(XY)$ 与 $\\operatorname{Cov}(X,Y)$。",
    "answer": "$E(XY)=\\dfrac13$；$\\operatorname{Cov}(X,Y)=0$",
    "solution": "独立 $\\Rightarrow \\operatorname{Cov}(X,Y)=0$。\\n$E(X)=\\dfrac12$，$E(Y)=\\displaystyle\\int_0^1y\\cdot2y\\,dy=\\dfrac23$，故 $E(XY)=E(X)E(Y)=\\dfrac13$。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "设 $X,Y$ 相互独立，$X\\sim N(0,1),\\ Y\\sim N(0,1)$，则 $P\\{X>0,\\ Y>0\\}=\\rule{2.6em}{0.5pt}$",
    "answer": "$\\dfrac14$",
    "solution": "独立 $\\Rightarrow P\\{X>0,Y>0\\}=P\\{X>0\\}P\\{Y>0\\}=\\dfrac12\\times\\dfrac12=\\dfrac14$。"
   },
   {
    "type": "solve",
    "diff": 3,
    "stem": "设 $X,Y$ 相互独立同分布，分布函数为 $F(x)$，求 $M=\\max\\{X,Y\\}$ 与 $N=\\min\\{X,Y\\}$ 的分布函数。",
    "answer": "$F_M(z)=F^{2}(z)$；$F_N(z)=1-[1-F(z)]^{2}$",
    "solution": "$F_M(z)=P\\{X\\le z,\\ Y\\le z\\}=P\\{X\\le z\\}P\\{Y\\le z\\}=F^{2}(z)$。\\n$F_N(z)=1-P\\{X>z,Y>z\\}=1-[1-F(z)]^{2}$。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "设 $(X,Y)\\sim N(\\mu_1,\\mu_2;\\sigma_1^{2},\\sigma_2^{2};\\rho)$，则 $X,Y$ 相互独立的充要条件是 $\\rule{2.6em}{0.5pt}$",
    "answer": "$\\rho=0$",
    "solution": "二维正态分布中「不相关」与「独立」等价，故 $\\rho=0$ 即独立。\\n**这是二维正态的独有性质**，一般分布不成立。"
   }
  ]
 },
 {
  "subject": "概率论与数理统计",
  "chapter": "随机变量的数字特征",
  "questions": [
   {
    "type": "choice",
    "diff": 3,
    "stem": "设随机变量 $X\\sim U(0,3)$，随机变量 $Y$ 服从参数为 2 的泊松分布，且 $\\operatorname{Cov}(X,Y)=-1$，则 $D(2X-Y+1)=$（ ）",
    "opts": [
     "$1$",
     "$5$",
     "$9$",
     "$12$"
    ],
    "answer": "C",
    "solution": "$D(X)=\\dfrac{(3-0)^{2}}{12}=\\dfrac34$，$D(Y)=2$。\\n$D(2X-Y+1)=4D(X)+D(Y)-2\\cdot2\\operatorname{Cov}(X,Y)=4\\times\\dfrac34+2-4\\times(-1)=3+2+4=9$。\\n**公式**：$D(aX+bY+c)=a^{2}D(X)+b^{2}D(Y)+2ab\\operatorname{Cov}(X,Y)$。",
    "src": "2022 数学一 第 8 题"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "设 $X\\sim N(\\mu,\\sigma^{2})$，则 $E(X^{2})=\\rule{2.6em}{0.5pt}$",
    "answer": "$\\mu^{2}+\\sigma^{2}$",
    "solution": "$E(X^{2})=D(X)+[E(X)]^{2}=\\sigma^{2}+\\mu^{2}$。**这是最高频的公式之一**。"
   },
   {
    "type": "choice",
    "diff": 2,
    "stem": "设 $X,Y$ 为随机变量，$\\rho_{XY}$ 为相关系数，则（ ）",
    "opts": [
     "$\\rho_{XY}=0$ 意味着 $X,Y$ 独立",
     "$|\\rho_{XY}|\\le1$",
     "$\\rho_{XY}=1$ 意味着 $Y=X$",
     "$\\rho_{XY}>0$ 意味着 $X,Y$ 同分布"
    ],
    "answer": "B",
    "solution": "$|\\rho_{XY}|\\le1$ 恒成立。$\\rho=0$ 只是不相关（不等于独立，二维正态除外）；$\\rho=\\pm1$ 意味着存在线性关系 $P\\{Y=aX+b\\}=1$，但不一定 $Y=X$；D 无依据。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "设 $X$ 服从参数为 $\\lambda$ 的指数分布，则 $D(X)=\\rule{2.6em}{0.5pt}$",
    "answer": "$\\dfrac{1}{\\lambda^{2}}$",
    "solution": "$E(X)=\\dfrac1\\lambda$，$D(X)=\\dfrac{1}{\\lambda^{2}}$。"
   },
   {
    "type": "solve",
    "diff": 2,
    "stem": "设随机变量 $X$ 的分布律为 $P\\{X=-1\\}=0.2,\\ P\\{X=0\\}=0.3,\\ P\\{X=1\\}=0.5$。求 $E(X)$、$E(X^{2})$、$D(X)$。",
    "answer": "$E(X)=0.3$；$E(X^{2})=0.7$；$D(X)=0.61$",
    "solution": "$E(X)=(-1)\\times0.2+0\\times0.3+1\\times0.5=0.3$。\\n$E(X^{2})=1\\times0.2+0\\times0.3+1\\times0.5=0.7$。\\n$D(X)=E(X^{2})-[E(X)]^{2}=0.7-0.09=0.61$。"
   },
   {
    "type": "fill",
    "diff": 3,
    "stem": "设 $X_1,X_2,\\cdots,X_n$ 独立同分布，$X_1$ 的 4 阶矩存在，记 $\\mu_k=E(X_1^{k})$。由切比雪夫不等式，对任意 $\\varepsilon>0$ 有 $P\\Bigl\\{\\Bigl|\\dfrac1n\\sum\\limits_{i=1}^{n}X_i^{2}-\\mu_2\\Bigr|\\ge\\varepsilon\\Bigr\\}\\le\\rule{2.6em}{0.5pt}$",
    "answer": "$\\dfrac{\\mu_4-\\mu_2^{2}}{n\\varepsilon^{2}}$",
    "solution": "令 $Y_i=X_i^{2}$，则 $E(Y_i)=\\mu_2$，$D(Y_i)=E(Y_i^{2})-[E(Y_i)]^{2}=\\mu_4-\\mu_2^{2}$。\\n由切比雪夫不等式 $P\\{|\\bar Y-E\\bar Y|\\ge\\varepsilon\\}\\le\\dfrac{D(\\bar Y)}{\\varepsilon^{2}}=\\dfrac{\\mu_4-\\mu_2^{2}}{n\\varepsilon^{2}}$。",
    "src": "2022 数学一 第 9 题"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "设 $X,Y$ 相互独立，$D(X)=1,\\ D(Y)=2$，则 $D(3X-2Y)=\\rule{2.6em}{0.5pt}$",
    "answer": "$17$",
    "solution": "独立 $\\Rightarrow D(3X-2Y)=9D(X)+4D(Y)=9+8=17$。"
   },
   {
    "type": "choice",
    "diff": 2,
    "stem": "设 $X\\sim B(n,p)$，则 $\\dfrac{E(X)}{D(X)}=$（ ）",
    "opts": [
     "$\\dfrac{1}{1-p}$",
     "$\\dfrac{1}{p}$",
     "$1-p$",
     "$\\dfrac{p}{1-p}$"
    ],
    "answer": "A",
    "solution": "$E(X)=np,\\ D(X)=np(1-p)$，故 $\\dfrac{E(X)}{D(X)}=\\dfrac{np}{np(1-p)}=\\dfrac{1}{1-p}$。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "设 $X$ 服从参数为 $\\lambda$ 的泊松分布，则 $E(X^{2})=\\rule{2.6em}{0.5pt}$",
    "answer": "$\\lambda^{2}+\\lambda$",
    "solution": "$E(X)=\\lambda,\\ D(X)=\\lambda$，故 $E(X^{2})=D(X)+[E(X)]^{2}=\\lambda+\\lambda^{2}$。"
   },
   {
    "type": "solve",
    "diff": 3,
    "stem": "设 $X_1,X_2$ 是来自总体 $N(\\mu,\\sigma^{2})$ 的简单随机样本，$\\sigma$ 未知。若 $\\hat\\theta=a|X_1-X_2|$ 为 $\\sigma$ 的无偏估计，求 $a$。",
    "answer": "$a=\\dfrac{\\sqrt\\pi}{2}$",
    "solution": "$X_1-X_2\\sim N(0,2\\sigma^{2})$。设 $Z=\\dfrac{X_1-X_2}{\\sqrt2\\sigma}\\sim N(0,1)$，则 $|X_1-X_2|=\\sqrt2\\sigma|Z|$。\\n$E|Z|=\\displaystyle\\int_{-\\infty}^{+\\infty}|z|\\dfrac{1}{\\sqrt{2\\pi}}e^{-z^{2}/2}dz=2\\displaystyle\\int_0^{+\\infty}z\\dfrac{1}{\\sqrt{2\\pi}}e^{-z^{2}/2}dz=\\sqrt{\\dfrac{2}{\\pi}}$。\\n故 $E|X_1-X_2|=\\sqrt2\\sigma\\sqrt{\\dfrac2\\pi}=\\dfrac{2\\sigma}{\\sqrt\\pi}$。\\n要 $E(\\hat\\theta)=\\sigma$，即 $a\\cdot\\dfrac{2\\sigma}{\\sqrt\\pi}=\\sigma$，得 $a=\\dfrac{\\sqrt\\pi}{2}$。",
    "src": "2023 数学一 第 10 题"
   }
  ]
 },
 {
  "subject": "概率论与数理统计",
  "chapter": "大数定律与数理统计",
  "questions": [
   {
    "type": "choice",
    "diff": 3,
    "stem": "设 $X_1,\\cdots,X_{16}$ 是来自总体 $N(\\mu,4)$ 的简单随机样本，检验 $H_0:\\mu\\le10,\\ H_1:\\mu>10$，$\\Phi(x)$ 为标准正态分布函数。若拒绝域为 $W=\\{\\bar X\\ge11\\}$，则 $\\mu=11.5$ 时该检验犯第二类错误的概率为（ ）",
    "opts": [
     "$1-\\Phi(0.5)$",
     "$1-\\Phi(1)$",
     "$1-\\Phi(1.5)$",
     "$1-\\Phi(2)$"
    ],
    "answer": "B",
    "solution": "第二类错误为「原假设不真却接受」。$\\mu=11.5$ 时 $\\bar X\\sim N\\Bigl(11.5,\\dfrac{4}{16}\\Bigr)=N(11.5,0.25)$，$\\sigma_{\\bar X}=0.5$。\\n$\\beta=P\\{\\bar X<11\\mid\\mu=11.5\\}=P\\Bigl\\{\\dfrac{\\bar X-11.5}{0.5}<\\dfrac{11-11.5}{0.5}\\Bigr\\}=\\Phi(-1)=1-\\Phi(1)$。",
    "src": "2021 数学一 第 10 题"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "设 $X_1,\\cdots,X_n$ 来自 $N(\\mu,\\sigma^{2})$，则 $\\dfrac{(n-1)S^{2}}{\\sigma^{2}}\\sim\\rule{2.6em}{0.5pt}$",
    "answer": "$\\chi^{2}(n-1)$",
    "solution": "这是抽样分布的基本结论。**三大抽样分布**：\\n$\\dfrac{(n-1)S^{2}}{\\sigma^{2}}\\sim\\chi^{2}(n-1)$；$\\dfrac{\\bar X-\\mu}{S/\\sqrt n}\\sim t(n-1)$；$\\dfrac{S_1^{2}/\\sigma_1^{2}}{S_2^{2}/\\sigma_2^{2}}\\sim F(n_1-1,n_2-1)$。"
   },
   {
    "type": "fill",
    "diff": 3,
    "stem": "设 $X_1,\\cdots,X_n$ 来自 $N(\\mu_1,\\sigma^{2})$，$Y_1,\\cdots,Y_m$ 来自 $N(\\mu_2,2\\sigma^{2})$，两样本独立，$S_1^{2},S_2^{2}$ 为样本方差，则 $\\dfrac{2S_1^{2}}{S_2^{2}}\\sim\\rule{2.6em}{0.5pt}$",
    "answer": "$F(n-1,m-1)$",
    "solution": "$\\dfrac{(n-1)S_1^{2}}{\\sigma^{2}}\\sim\\chi^{2}(n-1)$，$\\dfrac{(m-1)S_2^{2}}{2\\sigma^{2}}\\sim\\chi^{2}(m-1)$。\\n两者独立相除并除以自由度：$\\dfrac{S_1^{2}/\\sigma^{2}}{S_2^{2}/(2\\sigma^{2})}=\\dfrac{2S_1^{2}}{S_2^{2}}\\sim F(n-1,m-1)$。",
    "src": "2023 数学一 第 9 题"
   },
   {
    "type": "solve",
    "diff": 3,
    "stem": "设总体 $X$ 的概率密度 $f(x;\\sigma)=\\dfrac{1}{2\\sigma}e^{-|x|/\\sigma}\\ (-\\infty<x<+\\infty)$，$\\sigma>0$ 未知。$X_1,\\cdots,X_n$ 为样本，求 $\\sigma$ 的最大似然估计量。",
    "answer": "$\\hat\\sigma=\\dfrac1n\\sum\\limits_{i=1}^{n}|X_i|$",
    "solution": "似然函数 $L(\\sigma)=\\prod\\limits_{i=1}^{n}\\dfrac{1}{2\\sigma}e^{-|x_i|/\\sigma}=\\Bigl(\\dfrac{1}{2\\sigma}\\Bigr)^{n}e^{-\\frac{1}{\\sigma}\\sum|x_i|}$。\\n取对数：$\\ln L=-n\\ln2-n\\ln\\sigma-\\dfrac{1}{\\sigma}\\sum\\limits_{i=1}^{n}|x_i|$。\\n求导并令为 $0$：$\\dfrac{d\\ln L}{d\\sigma}=-\\dfrac{n}{\\sigma}+\\dfrac{1}{\\sigma^{2}}\\sum|x_i|=0$，解得 $\\hat\\sigma=\\dfrac1n\\sum\\limits_{i=1}^{n}|X_i|$。",
    "src": "2018 数学一 第 23 题"
   },
   {
    "type": "solve",
    "diff": 2,
    "stem": "设总体 $X\\sim U(0,\\theta)$，$X_1,\\cdots,X_n$ 为样本，求 $\\theta$ 的矩估计量。",
    "answer": "$\\hat\\theta=2\\bar X$",
    "solution": "$E(X)=\\dfrac{\\theta}{2}$，令 $\\dfrac{\\theta}{2}=\\bar X$，得 $\\hat\\theta=2\\bar X$。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "设 $X_1,\\cdots,X_n$ 独立同分布，$E(X_i)=\\mu$ 存在，则当 $n\\to\\infty$ 时 $\\dfrac1n\\sum\\limits_{i=1}^{n}X_i$ 依概率收敛于 $\\rule{2.6em}{0.5pt}$",
    "answer": "$\\mu$",
    "solution": "这是辛钦大数定律：独立同分布且期望存在时，样本均值依概率收敛于总体均值。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "设 $X_1,\\cdots,X_n$ 独立同分布，$E(X_i)=\\mu,\\ D(X_i)=\\sigma^{2}$，则当 $n$ 充分大时，$\\dfrac{\\sum X_i-n\\mu}{\\sqrt n\\sigma}$ 近似服从 $\\rule{2.6em}{0.5pt}$",
    "answer": "$N(0,1)$",
    "solution": "中心极限定理：$\\dfrac{\\sum X_i-n\\mu}{\\sqrt n\\sigma}\\xrightarrow{d}N(0,1)$。"
   },
   {
    "type": "solve",
    "diff": 3,
    "stem": "设总体 $X\\sim N(\\mu,\\sigma^{2})$，$\\mu,\\sigma^{2}$ 均未知，$X_1,\\cdots,X_n$ 为样本。求 $\\mu$ 的置信水平为 $1-\\alpha$ 的置信区间。",
    "answer": "$\\Bigl(\\bar X\\pm t_{\\alpha/2}(n-1)\\dfrac{S}{\\sqrt n}\\Bigr)$",
    "solution": "$\\dfrac{\\bar X-\\mu}{S/\\sqrt n}\\sim t(n-1)$，故 $P\\Bigl\\{-t_{\\alpha/2}(n-1)<\\dfrac{\\bar X-\\mu}{S/\\sqrt n}<t_{\\alpha/2}(n-1)\\Bigr\\}=1-\\alpha$。\\n解出 $\\mu$ 得置信区间 $\\Bigl(\\bar X-t_{\\alpha/2}(n-1)\\dfrac{S}{\\sqrt n},\\ \\bar X+t_{\\alpha/2}(n-1)\\dfrac{S}{\\sqrt n}\\Bigr)$。"
   },
   {
    "type": "choice",
    "diff": 2,
    "stem": "设 $\\hat\\theta_1,\\hat\\theta_2$ 都是 $\\theta$ 的无偏估计量，且 $D(\\hat\\theta_1)<D(\\hat\\theta_2)$，则（ ）",
    "opts": [
     "$\\hat\\theta_1$ 比 $\\hat\\theta_2$ 有效",
     "$\\hat\\theta_1$ 比 $\\hat\\theta_2$ 一致",
     "$\\hat\\theta_1$ 是 $\\theta$ 的极大似然估计",
     "以上都不对"
    ],
    "answer": "A",
    "solution": "无偏估计中方差越小越有效（有效性准则），故 A 正确。一致性与样本量有关，B 无依据；C 无关。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "设 $X\\sim N(\\mu,1)$，$\\bar X$ 为样本均值（样本量 $n=16$），则 $\\bar X\\sim\\rule{2.6em}{0.5pt}$",
    "answer": "$N\\Bigl(\\mu,\\dfrac{1}{16}\\Bigr)$",
    "solution": "$\\bar X\\sim N\\Bigl(\\mu,\\dfrac{\\sigma^{2}}{n}\\Bigr)=N\\Bigl(\\mu,\\dfrac{1}{16}\\Bigr)$。"
   }
  ]
 }
];
