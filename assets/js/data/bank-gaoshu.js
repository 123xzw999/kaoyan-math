/* 自动生成：高等数学习题库 */
window.KY_BANK_GAOSHU = [
 {
  "subject": "高等数学",
  "chapter": "函数、极限与连续",
  "questions": [
   {
    "type": "choice",
    "diff": 2,
    "stem": "$\\lim\\limits_{x\\to 0}\\dfrac{\\tan x-\\sin x}{x^{3}}=$",
    "opts": [
     "$0$",
     "$\\dfrac{1}{6}$",
     "$\\dfrac{1}{2}$",
     "$1$"
    ],
    "answer": "C",
    "solution": "$\\tan x-\\sin x=\\tan x(1-\\cos x)\\sim x\\cdot\\dfrac{x^{2}}{2}=\\dfrac{x^{3}}{2}$，故极限为 $\\dfrac12$。**易错**：直接替换 $\\tan x\\sim x,\\ \\sin x\\sim x$ 得 $0$ 是错的——加减法中不能整体替换。"
   },
   {
    "type": "choice",
    "diff": 1,
    "stem": "当 $x\\to 0$ 时，$\\sqrt{1+x\\sin x}-1$ 是 $x^{2}$ 的（ ）",
    "opts": [
     "高阶无穷小",
     "低阶无穷小",
     "同阶但非等价无穷小",
     "等价无穷小"
    ],
    "answer": "C",
    "solution": "$\\sqrt{1+x\\sin x}-1\\sim\\dfrac{1}{2}x\\sin x\\sim\\dfrac{x^{2}}{2}$，与 $x^{2}$ 同阶，但系数为 $\\dfrac12\\ne1$，故同阶非等价。"
   },
   {
    "type": "choice",
    "diff": 2,
    "stem": "设 $f(x)=\\dfrac{e^{x}-1}{x}\\ (x\\ne 0),\\ f(0)=1$，则 $f(x)$ 在 $x=0$ 处（ ）",
    "opts": [
     "连续且取极大值",
     "连续且取极小值",
     "可导且导数为 $0$",
     "可导且导数不为 $0$"
    ],
    "answer": "D",
    "solution": "$\\lim\\limits_{x\\to0}\\dfrac{e^{x}-1}{x}=1=f(0)$，故连续。$f'(0)=\\lim\\limits_{x\\to0}\\dfrac{f(x)-f(0)}{x}=\\lim\\limits_{x\\to0}\\dfrac{e^{x}-1-x}{x^{2}}=\\dfrac12\\ne0$。所以可导且导数不为 $0$。",
    "src": "2021 数学一 第 1 题"
   },
   {
    "type": "fill",
    "diff": 1,
    "stem": "$\\lim\\limits_{x\\to\\infty}\\Bigl(1+\\dfrac{3}{x}\\Bigr)^{2x}=\\rule{2.6em}{0.5pt}$",
    "answer": "$e^{6}$",
    "solution": "$1^{\\infty}$ 型，$\\lim u^{v}=e^{\\lim v(u-1)}=e^{\\lim 2x\\cdot\\frac3x}=e^{6}$。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "$\\lim\\limits_{n\\to\\infty}\\Bigl(\\dfrac{1}{1\\cdot 2}+\\dfrac{1}{2\\cdot 3}+\\cdots+\\dfrac{1}{n(n+1)}\\Bigr)^{n}=\\rule{2.6em}{0.5pt}$",
    "answer": "$\\dfrac{1}{e}$",
    "solution": "括号内 $=1-\\dfrac{1}{n+1}=\\dfrac{n}{n+1}$，故原式 $=\\lim\\Bigl(\\dfrac{n}{n+1}\\Bigr)^{n}=e^{-1}$。",
    "src": "2019 数学三 第 9 题"
   },
   {
    "type": "choice",
    "diff": 3,
    "stem": "当 $x\\to 0^{+}$ 时，下列无穷小量中阶数最高的是（ ）",
    "opts": [
     "$\\displaystyle\\int_0^{x}(e^{t^{2}}-1)\\,dt$",
     "$\\displaystyle\\int_0^{x}\\ln(1+t^{3})\\,dt$",
     "$\\displaystyle\\int_0^{\\sin x}\\sin t^{2}\\,dt$",
     "$\\displaystyle\\int_0^{1-\\cos x}\\sin t^{2}\\,dt$"
    ],
    "answer": "D",
    "solution": "逐个定阶：$\\int_0^x(e^{t^2}-1)dt\\sim\\int_0^x t^2dt=\\frac{x^3}{3}$（3 阶）；$\\int_0^x\\ln(1+t^3)dt\\sim\\frac{x^4}{4}$（4 阶）；$\\int_0^{\\sin x}\\sin t^2dt\\sim\\frac{\\sin^3x}{3}\\sim\\frac{x^3}{3}$（3 阶）；$\\int_0^{1-\\cos x}\\sin t^2dt\\sim\\frac{(1-\\cos x)^3}{3}\\sim\\frac{1}{3}\\cdot\\frac{x^6}{8}=\\frac{x^6}{24}$（6 阶）。故 D 阶数最高。",
    "src": "2020 数学一/二 第 1 题"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "$\\lim\\limits_{x\\to 0}\\dfrac{\\ln(1+x)-x}{\\cos x-1}=\\rule{2.6em}{0.5pt}$",
    "answer": "$1$",
    "solution": "分子 $\\sim-\\dfrac{x^{2}}{2}$，分母 $\\sim-\\dfrac{x^{2}}{2}$，故极限为 $1$。"
   },
   {
    "type": "choice",
    "diff": 2,
    "stem": "函数 $f(x)=\\dfrac{x^{2}-x}{x(x^{2}-1)}$ 的可去间断点个数为（ ）",
    "opts": [
     "$0$",
     "$1$",
     "$2$",
     "$3$"
    ],
    "answer": "C",
    "solution": "$f(x)=\\dfrac{x(x-1)}{x(x-1)(x+1)}=\\dfrac{1}{x+1}\\ (x\\ne0,1)$。$x=0,\\ x=1$ 处极限存在（为 $1$ 与 $\\frac12$），是可去间断点；$x=-1$ 是无穷间断点。故 $2$ 个。"
   },
   {
    "type": "solve",
    "diff": 3,
    "stem": "设 $x_{1}=1,\\ x_{n+1}=\\dfrac{1}{2}\\Bigl(x_{n}+\\dfrac{3}{x_{n}}\\Bigr)\\ (n=1,2,\\cdots)$。证明 $\\{x_{n}\\}$ 收敛，并求 $\\lim\\limits_{n\\to\\infty}x_{n}$。",
    "answer": "$\\sqrt{3}$",
    "solution": "**① 有下界**：由 $x_{n+1}=\\dfrac12\\Bigl(x_n+\\dfrac{3}{x_n}\\Bigr)\\ge\\sqrt{x_n\\cdot\\dfrac{3}{x_n}}=\\sqrt3$，且 $x_1=1>0$，故对一切 $n$ 有 $x_n\\ge\\sqrt3>0$。\\n**② 单调递减**：$x_{n+1}-x_n=\\dfrac{3-x_n^{2}}{2x_n}\\le0$（因 $x_n^{2}\\ge3$），故单调递减。\\n**③ 由单调有界准则**，极限存在，设为 $a$。对递推式取极限：$a=\\dfrac12\\Bigl(a+\\dfrac3a\\Bigr)$，解得 $a^{2}=3$，又 $a>0$，故 $\\lim x_n=\\sqrt3$。"
   },
   {
    "type": "fill",
    "diff": 1,
    "stem": "$\\lim\\limits_{x\\to 0}\\dfrac{e^{x}-1-x}{x^{2}}=\\rule{2.6em}{0.5pt}$",
    "answer": "$\\dfrac{1}{2}$",
    "solution": "泰勒：$e^{x}=1+x+\\dfrac{x^{2}}{2}+o(x^{2})$，故分子 $=\\dfrac{x^{2}}{2}+o(x^{2})$，极限为 $\\dfrac12$。"
   },
   {
    "type": "choice",
    "diff": 2,
    "stem": "设 $\\lim\\limits_{x\\to 1}\\dfrac{f(x)}{\\ln x}=1$，则（ ）",
    "opts": [
     "$f(1)=0$",
     "$\\lim\\limits_{x\\to 1}f(x)=0$",
     "$f'(1)=1$",
     "$\\lim\\limits_{x\\to 1}f'(x)=1$"
    ],
    "answer": "B",
    "solution": "$f(x)=\\dfrac{f(x)}{\\ln x}\\cdot\\ln x\\to 1\\cdot 0=0$，故 $\\lim\\limits_{x\\to1}f(x)=0$（B 正确）。题目未说 $f$ 在 $x=1$ 连续，故不能推出 $f(1)=0$（A 错）；也未说可导，C、D 均不能推出。",
    "src": "2022 数学一 第 1 题"
   },
   {
    "type": "solve",
    "diff": 3,
    "stem": "求 $\\lim\\limits_{x\\to 0}\\left[\\dfrac{1+\\displaystyle\\int_0^{x}e^{t^{2}}dt}{e^{x}-1}-\\dfrac{1}{\\sin x}\\right]$。",
    "answer": "$\\dfrac{1}{2}$",
    "solution": "通分：原式 $=\\lim\\limits_{x\\to0}\\dfrac{(1+\\int_0^xe^{t^2}dt)\\sin x-(e^x-1)}{(e^x-1)\\sin x}$。\\n分母 $\\sim x^{2}$。分子展开：$\\int_0^xe^{t^2}dt=x+\\dfrac{x^3}{3}+o(x^3)$，$\\sin x=x-\\dfrac{x^3}{6}+o(x^3)$，$e^x-1=x+\\dfrac{x^2}{2}+\\dfrac{x^3}{6}+o(x^3)$。\\n分子 $=\\Bigl(1+x+\\dfrac{x^3}{3}\\Bigr)\\Bigl(x-\\dfrac{x^3}{6}\\Bigr)-\\Bigl(x+\\dfrac{x^2}{2}+\\dfrac{x^3}{6}\\Bigr)+o(x^3)=x+x^{2}+\\dfrac{x^3}{3}-\\dfrac{x^3}{6}-\\dfrac{x^2}{2}-\\dfrac{x^3}{6}+o(x^3)=\\dfrac{x^{2}}{2}+o(x^{2})$。\\n故原式 $=\\lim\\dfrac{x^{2}/2}{x^{2}}=\\dfrac12$。",
    "src": "2021 数学一 第 17 题"
   }
  ]
 },
 {
  "subject": "高等数学",
  "chapter": "导数与微分",
  "questions": [
   {
    "type": "choice",
    "diff": 2,
    "stem": "下列函数中在 $x=0$ 处不可导的是（ ）",
    "opts": [
     "$f(x)=|x|\\sin|x|$",
     "$f(x)=|x|\\sin\\sqrt{|x|}$",
     "$f(x)=\\cos|x|$",
     "$f(x)=\\cos\\sqrt{|x|}$"
    ],
    "answer": "D",
    "solution": "对 D：$f(x)=\\cos\\sqrt{|x|}$，$\\dfrac{f(x)-f(0)}{x}=\\dfrac{\\cos\\sqrt{|x|}-1}{x}\\sim\\dfrac{-|x|/2}{x}=\\mp\\dfrac12$，左右导数不等，故不可导。A、B、C 在该点导数均为 $0$。",
    "src": "2018 数学一 第 1 题"
   },
   {
    "type": "fill",
    "diff": 1,
    "stem": "设 $y=x^{x}\\ (x>0)$，则 $y'=\\rule{2.6em}{0.5pt}$",
    "answer": "$x^{x}(\\ln x+1)$",
    "solution": "取对数 $\\ln y=x\\ln x$，两边求导 $\\dfrac{y'}{y}=\\ln x+1$，故 $y'=x^{x}(\\ln x+1)$。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "设函数 $f(x)=x^{2}\\ln(1-x)$，则当 $n\\ge 3$ 时 $f^{(n)}(0)=\\rule{2.6em}{0.5pt}$",
    "answer": "$-\\dfrac{(n-2)!}{n}$",
    "solution": "$f(x)=x^{2}\\ln(1-x)=-x^{2}\\sum\\limits_{k\\ge1}\\dfrac{x^{k}}{k}=-\\sum\\limits_{k\\ge1}\\dfrac{x^{k+2}}{k}$，故 $x^{n}$ 的系数为 $-\\dfrac{1}{n-2}$，而 $\\dfrac{f^{(n)}(0)}{n!}=-\\dfrac{1}{n-2}$，得 $f^{(n)}(0)=-\\dfrac{(n-2)!}{n}$。"
   },
   {
    "type": "fill",
    "diff": 3,
    "stem": "设 $y=y(x)$ 由参数方程 $\\begin{cases}x=t-\\sin t\\\\ y=1-\\cos t\\end{cases}$ 确定，则 $\\dfrac{d^{2}y}{dx^{2}}\\Big|_{t=\\pi}=\\rule{2.6em}{0.5pt}$",
    "answer": "$-\\dfrac{1}{4}$",
    "solution": "$\\dfrac{dy}{dx}=\\dfrac{\\sin t}{1-\\cos t}$。\\n$\\dfrac{d^{2}y}{dx^{2}}=\\dfrac{1}{1-\\cos t}\\cdot\\dfrac{d}{dt}\\Bigl(\\dfrac{\\sin t}{1-\\cos t}\\Bigr)=\\dfrac{1}{1-\\cos t}\\cdot\\dfrac{\\cos t(1-\\cos t)-\\sin^{2}t}{(1-\\cos t)^{2}}=\\dfrac{\\cos t-1}{(1-\\cos t)^{3}}=-\\dfrac{1}{(1-\\cos t)^{2}}$。\\n代入 $t=\\pi$：$-\\dfrac{1}{\\bigl(1-(-1)\\bigr)^{2}}=-\\dfrac14$。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "设 $y=y(x)$ 由 $e^{xy}+x^{2}=1$ 确定，则 $y'(0)=\\rule{2.6em}{0.5pt}$",
    "answer": "$0$",
    "solution": "$x=0$ 时 $e^{0}+0=1$ 成立，$y(0)=0$。两边对 $x$ 求导：$e^{xy}(y+xy')+2x=0$。代入 $x=0,y=0$：$1\\cdot(0+0)+0=0$，得 $y'(0)=0$。"
   },
   {
    "type": "choice",
    "diff": 2,
    "stem": "设 $f(x)$ 在 $[0,1]$ 上连续，则 $\\displaystyle\\int_0^{1}f(x)dx=$（ ）",
    "opts": [
     "$\\lim\\limits_{n\\to\\infty}\\sum\\limits_{k=1}^{n}f\\Bigl(\\dfrac{k-1}{n}\\Bigr)\\dfrac1n$",
     "$\\lim\\limits_{n\\to\\infty}\\sum\\limits_{k=1}^{n}f\\Bigl(\\dfrac{2k-1}{2n}\\Bigr)\\dfrac1n$",
     "$\\lim\\limits_{n\\to\\infty}\\sum\\limits_{k=1}^{n}f\\Bigl(\\dfrac{k}{n}\\Bigr)\\dfrac1n$",
     "$\\lim\\limits_{n\\to\\infty}\\sum\\limits_{k=1}^{n}f\\Bigl(\\dfrac{2k}{2n}\\Bigr)\\dfrac{2}{n}$"
    ],
    "answer": "B",
    "solution": "定积分定义 $\\int_0^1f(x)dx=\\lim\\limits_{n\\to\\infty}\\sum\\limits_{k=1}^{n}f(\\xi_k)\\dfrac1n$，$\\xi_k$ 取区间$\\bigl[\\frac{k-1}{n},\\frac kn\\bigr]$ 内任意点。$\\dfrac{2k-1}{2n}$ 正是该区间的**中点**，故 B 正确。",
    "src": "2021 数学一 第 4 题"
   },
   {
    "type": "solve",
    "diff": 2,
    "stem": "设 $y=\\ln\\bigl(x+\\sqrt{x^{2}+a^{2}}\\bigr)$，求 $y'$ 与 $y''$。",
    "answer": "$y'=\\dfrac{1}{\\sqrt{x^{2}+a^{2}}}$",
    "solution": "$y'=\\dfrac{1}{x+\\sqrt{x^2+a^2}}\\cdot\\Bigl(1+\\dfrac{x}{\\sqrt{x^2+a^2}}\\Bigr)=\\dfrac{1}{x+\\sqrt{x^2+a^2}}\\cdot\\dfrac{\\sqrt{x^2+a^2}+x}{\\sqrt{x^2+a^2}}=\\dfrac{1}{\\sqrt{x^{2}+a^{2}}}$。\\n再求导：$y''=-\\dfrac{x}{(x^{2}+a^{2})^{3/2}}$。"
   },
   {
    "type": "fill",
    "diff": 3,
    "stem": "曲线 $y=\\dfrac{x^{2}}{2x+1}$ 的斜渐近线方程为 $\\rule{2.6em}{0.5pt}$",
    "answer": "$y=\\dfrac{1}{2}x-\\dfrac{1}{4}$",
    "solution": "$a=\\lim\\limits_{x\\to\\infty}\\dfrac{y}{x}=\\lim\\dfrac{x}{2x+1}=\\dfrac12$；$b=\\lim\\limits_{x\\to\\infty}(y-ax)=\\lim\\Bigl(\\dfrac{x^{2}}{2x+1}-\\dfrac x2\\Bigr)=\\lim\\dfrac{-x/2}{2x+1}=-\\dfrac14$。"
   },
   {
    "type": "choice",
    "diff": 2,
    "stem": "设 $f(x)=ax^{3}+bx^{2}$ 在 $x=1$ 处取极值 $1$，则 $ab=$（ ）",
    "opts": [
     "$3$",
     "$-3$",
     "$6$",
     "$-6$"
    ],
    "answer": "D",
    "solution": "由 $f(1)=1$ 得 $a+b=1$；由 $f'(1)=0$ 得 $3a+2b=0$。解得 $b=3,\\ a=-2$，故 $ab=-6$。\\n核验：$f(x)=-2x^{3}+3x^{2}$，$f'(x)=-6x^{2}+6x=-6x(x-1)$，在 $x=1$ 处由正变负，确为极大值点，$f(1)=1$ ✓。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "曲线 $y^{2}=x$ 在点 $(0,0)$ 处的曲率圆方程为 $\\rule{2.6em}{0.5pt}$",
    "answer": "$\\Bigl(x-\\dfrac12\\Bigr)^{2}+y^{2}=\\dfrac14$",
    "solution": "把曲线写成 $x=y^{2}$，则 $\\dfrac{dx}{dy}=2y$，$\\dfrac{d^{2}x}{dy^{2}}=2$。在 $y=0$ 处 $\\dfrac{dx}{dy}=0$（切线竖直）。\\n曲率 $K=\\dfrac{|x''|}{\\bigl(1+x'^{2}\\bigr)^{3/2}}=2$，曲率半径 $R=\\dfrac1K=\\dfrac12$。曲率中心在法线方向（水平）距 $(0,0)$ 为 $R$ 处，即 $\\bigl(\\frac12,0\\bigr)$。\\n故曲率圆为 $\\bigl(x-\\frac12\\bigr)^{2}+y^{2}=\\frac14$。",
    "src": "2024 数学二 第 11 题"
   }
  ]
 },
 {
  "subject": "高等数学",
  "chapter": "微分中值定理与导数应用",
  "questions": [
   {
    "type": "solve",
    "diff": 2,
    "stem": "设函数 $f(x)$ 在 $[0,+\\infty)$ 上可导，$f(0)=0$，且 $f'(x)$ 单调递增。证明 $g(x)=\\dfrac{f(x)}{x}$ 在 $(0,+\\infty)$ 上单调递增。",
    "solution": "$g'(x)=\\dfrac{xf'(x)-f(x)}{x^{2}}$，只需证 $xf'(x)-f(x)\\ge0$。\\n对 $f(x)$ 在 $[0,x]$ 上用拉格朗日中值定理：存在 $\\xi\\in(0,x)$ 使 $f(x)-f(0)=f'(\\xi)(x-0)$，即 $f(x)=xf'(\\xi)$。\\n故 $xf'(x)-f(x)=x\\bigl[f'(x)-f'(\\xi)\\bigr]$。由 $\\xi<x$ 及 $f'$ 单调递增，得 $f'(x)\\ge f'(\\xi)$，从而 $xf'(x)-f(x)\\ge0$，即 $g'(x)\\ge0$。所以 $g(x)$ 在 $(0,+\\infty)$ 上单调递增。"
   },
   {
    "type": "solve",
    "diff": 3,
    "stem": "设函数 $f(x)$ 在 $(-\\infty,+\\infty)$ 上有二阶连续导数。证明：$f''(x)\\ge 0$ 的充要条件是：对不同实数 $a,b$，有 $f\\Bigl(\\dfrac{a+b}{2}\\Bigr)\\le\\dfrac{1}{b-a}\\displaystyle\\int_a^{b}f(x)\\,dx$。",
    "solution": "**必要性（$f''\\ge0\\Rightarrow$ 不等式）**：$f$ 为凸函数，由凸性定义 $f\\bigl(\\frac{a+b}2\\bigr)\\le\\frac{f(a)+f(b)}2$。另一方面对 $\\int_a^bf(x)dx$ 作中点泰勒展开：$f(x)\\ge f\\bigl(\\frac{a+b}2\\bigr)+f'\\bigl(\\frac{a+b}2\\bigr)\\bigl(x-\\frac{a+b}2\\bigr)$，两边积分（一次项积分为 $0$）得 $\\int_a^bf(x)dx\\ge(b-a)f\\bigl(\\frac{a+b}2\\bigr)$，即证。\\n**充分性（不等式 $\\Rightarrow f''\\ge0$）**：反证。若存在 $x_0$ 使 $f''(x_0)<0$，由二阶导连续，存在邻域使 $f''<0$，在邻域内取 $a,b$ 使 $x_0$ 为中点，同上面的泰勒积分可得 $\\int_a^bf(x)dx<(b-a)f\\bigl(\\frac{a+b}2\\bigr)$，矛盾。故 $f''\\ge0$。",
    "src": "2022 数学一 第 20 题"
   },
   {
    "type": "solve",
    "diff": 3,
    "stem": "设函数 $f(x)$ 在 $[-a,a]$ 上具有 2 阶连续导数。证明：\\n(1) 若 $f(0)=0$，则存在 $\\xi\\in(-a,a)$，使得 $f''(\\xi)=\\dfrac{f(a)+f(-a)}{a^{2}}$；\\n(2) 若 $f(x)$ 在 $(-a,a)$ 内取得极值，则存在 $\\eta\\in(-a,a)$，使得 $|f''(\\eta)|\\ge\\dfrac{1}{a^{2}}|f(a)-f(-a)|$。",
    "solution": "**(1)** 对 $f(a)$ 在 $0$ 处泰勒展开（拉格朗日余项）：$f(a)=f(0)+f'(0)a+\\dfrac{f''(\\xi_1)}{2}a^{2}$；同理 $f(-a)=f(0)-f'(0)a+\\dfrac{f''(\\xi_2)}{2}a^{2}$。两式相加（用 $f(0)=0$）：\\n$f(a)+f(-a)=\\dfrac{a^{2}}{2}\\bigl[f''(\\xi_1)+f''(\\xi_2)\\bigr]$。由 $f''$ 连续及介值定理，存在 $\\xi\\in(-a,a)$ 使 $f''(\\xi)=\\dfrac{f''(\\xi_1)+f''(\\xi_2)}{2}=\\dfrac{f(a)+f(-a)}{a^{2}}$。\\n**(2)** 设极值点为 $x_0$，则 $f'(x_0)=0$。同样展开：$f(a)=f(x_0)+\\dfrac{f''(\\xi_1)}2(a-x_0)^2$，$f(-a)=f(x_0)+\\dfrac{f''(\\xi_2)}2(a+x_0)^2$。相减：$|f(a)-f(-a)|=\\Bigl|\\dfrac{f''(\\xi_1)}2(a-x_0)^2-\\dfrac{f''(\\xi_2)}2(a+x_0)^2\\Bigr|$，取 $\\eta$ 为 $\\xi_1,\\xi_2$ 中 $|f''|$ 较大者，可证 $|f''(\\eta)|\\ge\\dfrac{|f(a)-f(-a)|}{a^{2}}$。",
    "src": "2023 数学一 第 20 题"
   },
   {
    "type": "choice",
    "diff": 1,
    "stem": "设 $f(x)=x^{3}-3x$，则 $f(x)$ 在 $[-2,2]$ 上的最大值为（ ）",
    "opts": [
     "$2$",
     "$-2$",
     "$0$",
     "$4$"
    ],
    "answer": "A",
    "solution": "$f'(x)=3x^{2}-3=0\\Rightarrow x=\\pm1$。$f(-2)=-2,\\ f(-1)=2,\\ f(1)=-2,\\ f(2)=2$。最大值为 $2$。"
   },
   {
    "type": "solve",
    "diff": 2,
    "stem": "求函数 $f(x,y)=x^{3}+8y^{3}-xy$ 的极值。",
    "answer": "极小值 $f\\Bigl(\\dfrac16,\\dfrac1{12}\\Bigr)=-\\dfrac{1}{216}$",
    "solution": "$f_x=3x^{2}-y=0,\\ f_y=24y^{2}-x=0$。解得驻点 $(0,0)$ 与 $\\bigl(\\frac16,\\frac1{12}\\bigr)$。\\n$A=f_{xx}=6x,\\ B=f_{xy}=-1,\\ C=f_{yy}=48y$，$AC-B^{2}=288xy-1$。\\n在 $\\bigl(\\frac16,\\frac1{12}\\bigr)$：$AC-B^2=288\\cdot\\frac1{72}-1=4-1=3>0$，且 $A=1>0$，取极小值 $f\\bigl(\\frac16,\\frac1{12}\\bigr)=\\frac1{216}+\\frac1{216}-\\frac1{72}=-\\frac1{216}$。\\n在 $(0,0)$：$AC-B^{2}=-1<0$，非极值点。",
    "src": "2020 数学二 第 17 题"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "曲线 $y=x\\ln\\Bigl(e+\\dfrac{1}{x-1}\\Bigr)$ 的斜渐近线方程为 $\\rule{2.6em}{0.5pt}$",
    "answer": "$y=x+\\dfrac1e$",
    "solution": "$a=\\lim\\limits_{x\\to\\infty}\\dfrac yx=\\lim\\ln\\Bigl(e+\\dfrac1{x-1}\\Bigr)=1$；$b=\\lim\\limits_{x\\to\\infty}(y-x)=\\lim x\\Bigl[\\ln\\Bigl(e+\\frac1{x-1}\\Bigr)-1\\Bigr]=\\lim x\\cdot\\dfrac{1/e}{x-1}=\\dfrac1e$。故斜渐近线 $y=x+\\dfrac1e$。",
    "src": "2023 数学一 第 1 题"
   },
   {
    "type": "choice",
    "diff": 2,
    "stem": "已知方程 $x^{5}-5x+k=0$ 有 3 个不同的实根，则 $k$ 的取值范围是（ ）",
    "opts": [
     "$(-\\infty,-4)$",
     "$(4,+\\infty)$",
     "$[-4,4]$",
     "$(-4,4)$"
    ],
    "answer": "D",
    "solution": "令 $f(x)=x^{5}-5x+k$，$f'(x)=5x^{4}-5=0\\Rightarrow x=\\pm1$。$f(-1)=4+k$ 为极大值，$f(1)=-4+k$ 为极小值。要有 3 个实根需 $f(1)<0<f(-1)$，即 $-4<k<4$。",
    "src": "2019 数学三 第 2 题"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "曲线 $y=x\\sin x+2\\cos x\\ \\Bigl(-\\dfrac{\\pi}{2}<x<\\dfrac{3\\pi}{2}\\Bigr)$ 的拐点坐标为 $\\rule{2.6em}{0.5pt}$",
    "answer": "$(\\pi,-2)$",
    "solution": "$y'=\\sin x+x\\cos x-2\\sin x=x\\cos x-\\sin x$；$y''=\\cos x-x\\sin x-\\cos x=-x\\sin x$。在 $(-\\frac\\pi2,\\frac{3\\pi}2)$ 内 $y''=0$ 得 $x=0$ 或 $x=\\pi$。$x=\\pi$ 两侧 $y''$ 变号（$x<\\pi$ 时 $y''<0$，$x>\\pi$ 时 $y''>0$），故 $(\\pi,-2)$ 为拐点。",
    "src": "2019 数学三 第 10 题"
   },
   {
    "type": "solve",
    "diff": 3,
    "stem": "设函数 $f(x)$ 在 $[0,1]$ 上二阶可导，$f(0)=f(1)=0$，且 $\\min\\limits_{0\\le x\\le1}f(x)=-1$。证明：存在 $\\xi\\in(0,1)$，使得 $f''(\\xi)\\ge 8$。",
    "solution": "设最小值在 $x_0\\in(0,1)$ 处取得，则 $f(x_0)=-1$，$f'(x_0)=0$。\\n对 $f(0)$ 在 $x_0$ 处展开：$0=f(0)=f(x_0)+f'(x_0)(0-x_0)+\\dfrac{f''(\\xi_1)}{2}x_0^{2}=-1+\\dfrac{f''(\\xi_1)}{2}x_0^{2}$，得 $f''(\\xi_1)=\\dfrac{2}{x_0^{2}}$。\\n同理 $f''(\\xi_2)=\\dfrac{2}{(1-x_0)^{2}}$。取 $\\xi$ 为 $\\xi_1,\\xi_2$ 中 $f''$ 较大者。\\n若 $x_0\\le\\dfrac12$，则 $f''(\\xi_2)=\\dfrac{2}{(1-x_0)^{2}}\\ge\\dfrac{2}{(1/2)^{2}}=8$；若 $x_0>\\dfrac12$，则 $f''(\\xi_1)=\\dfrac{2}{x_0^{2}}>8$。故存在 $\\xi$ 使 $f''(\\xi)\\ge8$。"
   },
   {
    "type": "choice",
    "diff": 1,
    "stem": "设 $f(x)$ 在 $x=0$ 的某邻域内连续，且 $\\lim\\limits_{x\\to0}\\dfrac{f(x)}{1-\\cos x}=2$，则 $f(x)$ 在 $x=0$ 处（ ）",
    "opts": [
     "不可导",
     "可导且 $f'(0)=0$",
     "取极大值",
     "取极小值"
    ],
    "answer": "D",
    "solution": "$f(x)\\sim2(1-\\cos x)\\sim x^{2}\\ge0$，且 $f(0)=0$，故 $x=0$ 为极小值点。"
   }
  ]
 },
 {
  "subject": "高等数学",
  "chapter": "不定积分",
  "questions": [
   {
    "type": "solve",
    "diff": 2,
    "stem": "求不定积分 $\\displaystyle\\int e^{2x}\\arctan\\sqrt{e^{x}-1}\\,dx$。",
    "solution": "令 $t=\\sqrt{e^{x}-1}$，则 $x=\\ln(1+t^{2})$，$dx=\\dfrac{2t}{1+t^{2}}dt$，$e^{x}=1+t^{2}$。\\n原式 $=\\int(1+t^{2})^{2}\\arctan t\\cdot\\dfrac{2t}{1+t^{2}}dt=\\int 2t(1+t^{2})\\arctan t\\,dt$。\\n分部积分（$u=\\arctan t$）：$=\\int(1+t^{2})\\arctan t\\,d(t^{2})$…\\n更简洁的做法：令 $u=\\arctan\\sqrt{e^x-1}$，则 $e^x=\\sec^2u$，$x=\\ln\\sec^2u$，$dx=2\\tan u\\,du$。\\n原式 $=\\int\\sec^{4}u\\cdot u\\cdot2\\tan u\\,du$，继续分部即可。最终结果为\\n$\\dfrac{e^{2x}}{2}\\arctan\\sqrt{e^{x}-1}-\\dfrac{1}{3}(e^{x}-1)^{3/2}-\\dfrac12\\sqrt{e^{x}-1}+C$。",
    "src": "2018 数学一 第 15 题"
   },
   {
    "type": "fill",
    "diff": 1,
    "stem": "$\\displaystyle\\int\\dfrac{dx}{x^{2}+2x+2}=\\rule{2.6em}{0.5pt}$",
    "answer": "$\\arctan(x+1)+C$",
    "solution": "$x^{2}+2x+2=(x+1)^{2}+1$，故原式 $=\\arctan(x+1)+C$。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "$\\displaystyle\\int_1^{e^{2}}\\dfrac{\\ln x}{\\sqrt{x}}\\,dx=\\rule{2.6em}{0.5pt}$",
    "answer": "$4$",
    "solution": "令 $t=\\sqrt x$，$x=t^{2}$，$dx=2t\\,dt$，$\\ln x=2\\ln t$。原式 $=\\int_1^{e}\\dfrac{2\\ln t}{t}\\cdot2t\\,dt=4\\int_1^{e}\\ln t\\,dt=4\\bigl[t\\ln t-t\\bigr]_1^{e}=4$。",
    "src": "2022 数学一 第 12 题"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "$\\displaystyle\\int\\dfrac{dx}{\\sqrt{x^{2}+a^{2}}}=\\rule{2.6em}{0.5pt}$",
    "answer": "$\\ln\\bigl(x+\\sqrt{x^{2}+a^{2}}\\bigr)+C$",
    "solution": "标准公式，令 $x=a\\tan t$ 可得；也可记作 $\\operatorname{arcsinh}\\dfrac xa+C$。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "$\\displaystyle\\int x\\arctan x\\,dx=\\rule{2.6em}{0.5pt}$",
    "answer": "$\\dfrac{x^{2}+1}{2}\\arctan x-\\dfrac{x}{2}+C$",
    "solution": "分部积分：$=\\dfrac{x^{2}}{2}\\arctan x-\\int\\dfrac{x^{2}}{2(1+x^{2})}dx=\\dfrac{x^{2}}{2}\\arctan x-\\dfrac12\\Bigl(x-\\arctan x\\Bigr)+C=\\dfrac{x^{2}+1}{2}\\arctan x-\\dfrac x2+C$。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "$\\displaystyle\\int_0^{1}\\dfrac{x^{2}}{1+x^{2}}\\,dx=\\rule{2.6em}{0.5pt}$",
    "answer": "$1-\\dfrac{\\pi}{4}$",
    "solution": "$\\dfrac{x^{2}}{1+x^{2}}=1-\\dfrac{1}{1+x^{2}}$，故原式 $=\\bigl[x-\\arctan x\\bigr]_0^1=1-\\dfrac\\pi4$。"
   },
   {
    "type": "fill",
    "diff": 3,
    "stem": "$\\displaystyle\\int\\dfrac{dx}{x^{4}+1}=\\rule{2.6em}{0.5pt}$",
    "answer": "$\\dfrac{1}{4\\sqrt2}\\ln\\dfrac{x^{2}+\\sqrt2x+1}{x^{2}-\\sqrt2x+1}+\\dfrac{1}{2\\sqrt2}\\arctan\\dfrac{x^{2}-1}{\\sqrt2x}+C$",
    "solution": "配方：$x^{4}+1=(x^{2}+\\sqrt2x+1)(x^{2}-\\sqrt2x+1)$，再作部分分式分解。这是经典结果，建议直接记忆。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "$\\displaystyle\\int_0^{\\pi}\\sqrt{1-\\sin x}\\,dx=\\rule{2.6em}{0.5pt}$",
    "answer": "$2\\sqrt2$",
    "solution": "$1-\\sin x=(\\sin\\frac x2-\\cos\\frac x2)^{2}$，故 $\\sqrt{1-\\sin x}=\\bigl|\\sin\\frac x2-\\cos\\frac x2\\bigr|$。在 $[0,\\frac\\pi2]$ 上为 $\\cos\\frac x2-\\sin\\frac x2$，在 $[\\frac\\pi2,\\pi]$ 上相反。\\n分段积分：$\\int_0^{\\pi/2}(\\cos\\frac x2-\\sin\\frac x2)dx+\\int_{\\pi/2}^{\\pi}(\\sin\\frac x2-\\cos\\frac x2)dx=2\\sqrt2$。"
   }
  ]
 },
 {
  "subject": "高等数学",
  "chapter": "定积分及其应用",
  "questions": [
   {
    "type": "fill",
    "diff": 2,
    "stem": "设函数 $f(x)$ 具有 2 阶连续导数，若曲线 $y=f(x)$ 过点 $(0,0)$ 且与曲线 $y=2^{x}$ 在点 $(1,2)$ 处相切，则 $\\displaystyle\\int_0^{1}xf''(x)\\,dx=\\rule{2.6em}{0.5pt}$",
    "answer": "$2(\\ln 2-1)$",
    "solution": "由题意 $f(0)=0$，$f(1)=2$，$f'(1)=2\\ln2$。\\n分部积分：$\\int_0^1xf''(x)dx=\\bigl[xf'(x)\\bigr]_0^1-\\int_0^1f'(x)dx=f'(1)-\\bigl[f(1)-f(0)\\bigr]=2\\ln2-2=2(\\ln2-1)$。",
    "src": "2018 数学一 第 10 题"
   },
   {
    "type": "solve",
    "diff": 2,
    "stem": "求曲线 $y=e^{-x}\\sin x\\ (x\\ge0)$ 与 $x$ 轴之间图形的面积。",
    "answer": "$\\dfrac{1+e^{-\\pi}}{2(1-e^{-\\pi})}$",
    "solution": "曲线与 $x$ 轴交点 $x=k\\pi\\ (k=0,1,2,\\cdots)$。面积\\n$S=\\sum\\limits_{k=0}^{\\infty}\\Bigl|\\int_{k\\pi}^{(k+1)\\pi}e^{-x}\\sin x\\,dx\\Bigr|$。\\n$\\int e^{-x}\\sin x\\,dx=-\\dfrac{e^{-x}}{2}(\\sin x+\\cos x)$，故 $\\Bigl|\\int_{k\\pi}^{(k+1)\\pi}e^{-x}\\sin x\\,dx\\Bigr|=\\dfrac{e^{-k\\pi}(1+e^{-\\pi})}{2}$。\\n求和（等比，公比 $e^{-\\pi}$）：$S=\\dfrac{1+e^{-\\pi}}{2}\\cdot\\dfrac{1}{1-e^{-\\pi}}=\\dfrac{1+e^{-\\pi}}{2(1-e^{-\\pi})}$。",
    "src": "2019 数学三 第 18 题"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "设 $f(x)=\\displaystyle\\int_1^{x}\\sqrt{1+t^{4}}\\,dt$，则 $\\displaystyle\\int_0^{1}x^{2}f(x)\\,dx=\\rule{2.6em}{0.5pt}$",
    "answer": "$\\dfrac{1}{18}(\\sqrt{2}-1)$",
    "solution": "分部积分：$\\int_0^1x^{2}f(x)dx=\\Bigl[\\dfrac{x^{3}}{3}f(x)\\Bigr]_0^1-\\dfrac13\\int_0^1x^{3}\\sqrt{1+x^{4}}dx=0-\\dfrac13\\cdot\\dfrac{1}{6}\\cdot\\dfrac23(1+x^{4})^{3/2}\\Big|_0^1$（因 $f(1)=0$）\\n$=-\\dfrac{1}{18}\\bigl(2^{3/2}-1\\bigr)=\\dfrac{1}{18}(\\sqrt2-1)$。",
    "src": "2019 数学三 第 11 题"
   },
   {
    "type": "solve",
    "diff": 3,
    "stem": "设 $a_n=\\displaystyle\\int_0^{1}x^{n-1}\\sqrt{1-x^{2}}\\,dx\\ (n=1,2,\\cdots)$。\\n(1) 证明 $\\{a_n\\}$ 单调递减，且 $a_n=\\dfrac{n-2}{n+1}a_{n-2}\\ (n\\ge3)$；\\n(2) 求 $\\lim\\limits_{n\\to\\infty}\\dfrac{a_n}{a_{n-1}}$。",
    "answer": "(2) $1$",
    "solution": "**(1) 单调性**：$x\\in(0,1)$ 时 $x^{n}\\sqrt{1-x^{2}}<x^{n-1}\\sqrt{1-x^{2}}$，故 $a_{n+1}<a_n$。\\n**递推**：对 $a_n$ 分部积分（取 $u=\\sqrt{1-x^{2}},\\ dv=x^{n-1}dx$）：\\n$a_n=\\Bigl[\\dfrac{x^{n}}{n}\\sqrt{1-x^{2}}\\Bigr]_0^1+\\dfrac1n\\displaystyle\\int_0^1\\dfrac{x^{n+1}}{\\sqrt{1-x^{2}}}dx=\\dfrac1n\\Bigl[b_n-a_n\\Bigr]$，其中 $b_n=\\displaystyle\\int_0^1\\dfrac{x^{n-1}}{\\sqrt{1-x^{2}}}dx$。\\n整理得 $(n+1)a_n=b_n$。又 $b_n=\\displaystyle\\int_0^1\\dfrac{x^{n-3}\\cdot x^{2}}{\\sqrt{1-x^{2}}}dx=b_{n-2}-a_{n-2}=b_{n-2}-\\dfrac{b_{n-2}}{n-1}=\\dfrac{n-2}{n-1}b_{n-2}$。\\n于是 $a_n=\\dfrac{b_n}{n+1}=\\dfrac{n-2}{(n-1)(n+1)}b_{n-2}=\\dfrac{n-2}{n+1}\\cdot\\dfrac{b_{n-2}}{n-1}=\\dfrac{n-2}{n+1}a_{n-2}$。\\n**核验**：$n=3$ 时 $a_1=\\dfrac{\\pi}{4}$，$a_3=\\displaystyle\\int_0^1x^{2}\\sqrt{1-x^{2}}dx=\\dfrac{\\pi}{16}$，而 $\\dfrac{3-2}{3+1}\\cdot\\dfrac{\\pi}{4}=\\dfrac{\\pi}{16}$ ✓。\\n**(2)** 由递推 $\\dfrac{a_n}{a_{n-2}}=\\dfrac{n-2}{n+1}\\to1$，结合单调性用夹逼可得 $\\lim\\limits_{n\\to\\infty}\\dfrac{a_n}{a_{n-1}}=1$。",
    "src": "2019 数学三 第 19 题（递推式经数学核验）"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "$\\displaystyle\\int_0^{\\pi}|\\cos x|\\,dx=\\rule{2.6em}{0.5pt}$",
    "answer": "$2$",
    "solution": "$=\\int_0^{\\pi/2}\\cos x\\,dx-\\int_{\\pi/2}^{\\pi}\\cos x\\,dx=1-(-1)=2$。",
    "src": "2024 数学二 第 4 题（同型）"
   },
   {
    "type": "solve",
    "diff": 2,
    "stem": "求由曲线 $y=x^{2}$ 与直线 $y=x$ 所围成的平面图形绕 $x$ 轴旋转一周所得旋转体的体积。",
    "answer": "$\\dfrac{2\\pi}{15}$",
    "solution": "交点由 $x^{2}=x$ 得 $x=0,\\ x=1$。在 $[0,1]$ 上 $x\\ge x^{2}$，故\\n$V=\\pi\\displaystyle\\int_0^1\\bigl[x^{2}-(x^{2})^{2}\\bigr]dx=\\pi\\displaystyle\\int_0^1(x^{2}-x^{4})dx=\\pi\\Bigl(\\dfrac13-\\dfrac15\\Bigr)=\\dfrac{2\\pi}{15}$。\\n**要点**：外半径 $R=x$、内半径 $r=x^{2}$，取 $V=\\pi\\int(R^{2}-r^{2})dx$。"
   },
   {
    "type": "fill",
    "diff": 3,
    "stem": "斜边长为 $2a$ 的等腰直角三角形平板铅直沉入水中，斜边与水面齐平，则平板一侧所受的水压力为 $\\rule{2.6em}{0.5pt}$（水的密度 $\\rho$，重力加速度 $g$）。",
    "answer": "$\\dfrac{1}{3}\\rho ga^{3}$",
    "solution": "以斜边中点为原点、竖直向下为 $x$ 轴，直角顶点在 $x=a$ 处。深度 $x$ 处的水平宽度 $w(x)=2(a-x)$（$x=0$ 时为 $2a$，$x=a$ 时为 $0$）。\\n$P=\\displaystyle\\int_0^{a}\\rho gx\\cdot w(x)\\,dx=2\\rho g\\displaystyle\\int_0^{a}x(a-x)\\,dx=2\\rho g\\Bigl(\\dfrac{a^{3}}{2}-\\dfrac{a^{3}}{3}\\Bigr)=\\dfrac{1}{3}\\rho ga^{3}$。",
    "src": "2020 数学二 第 12 题"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "设函数 $f(x)$ 为周期为 2 的周期函数，且 $f(x)=1-x,\\ x\\in[0,1]$，若 $f(x)=\\dfrac{a_0}{2}+\\sum\\limits_{n=1}^{\\infty}a_n\\cos n\\pi x$，则 $\\sum\\limits_{n=1}^{\\infty}a_{2n}=\\rule{2.6em}{0.5pt}$",
    "answer": "$0$",
    "solution": "$f$ 为偶延拓的余弦级数。$\\sum_{n\\ge1}a_{2n}$ 对应 $f(x)$ 在 $x=1$ 处的取值：由 $f(1^{+})=f(1^{-})$ 及级数收敛定理，$f(1)=\\dfrac{a_0}{2}+\\sum_{n\\ge1}a_n\\cos n\\pi=\\dfrac{a_0}2+\\sum_{n\\ge1}(-1)^{n}a_n$。\\n又 $f(0)=\\dfrac{a_0}2+\\sum a_n$。两式相加：$f(1)+f(0)=a_0+2\\sum a_{2n}$，由 $f(0)=1,\\ f(1)=0$，$a_0=2\\int_0^1(1-x)dx=1$，得 $\\sum a_{2n}=0$。",
    "src": "2023 数学一 第 13 题"
   },
   {
    "type": "fill",
    "diff": 3,
    "stem": "设连续函数 $f(x)$ 满足 $f(x+2)-f(x)=x$，$\\displaystyle\\int_0^{2}f(x)dx=0$，则 $\\displaystyle\\int_1^{3}f(x)\\,dx=\\rule{2.6em}{0.5pt}$",
    "answer": "$\\dfrac{1}{2}$",
    "solution": "由 $f(x+2)=f(x)+x$：$\\int_1^3f(x)dx=\\int_1^2f(x)dx+\\int_2^3f(x)dx=\\int_1^2f(x)dx+\\int_0^1[f(x)+x]dx$。\\n故 $=\\int_0^2f(x)dx+\\int_0^1x\\,dx=0+\\dfrac12=\\dfrac12$。",
    "src": "2023 数学一 第 14 题"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "$\\displaystyle\\int_0^{+\\infty}\\dfrac{dx}{x^{2}+2x+2}=\\rule{2.6em}{0.5pt}$",
    "answer": "$\\dfrac{\\pi}{4}$",
    "solution": "$=\\arctan(x+1)\\Big|_0^{+\\infty}=\\dfrac{\\pi}{2}-\\dfrac{\\pi}{4}=\\dfrac{\\pi}{4}$。",
    "src": "2021 数学一 第 11 题"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "设 $y=y(x)$ 满足 $y''+2y'+y=0$，$y(0)=0,\\ y'(0)=1$，则 $\\displaystyle\\int_0^{+\\infty}y(x)\\,dx=\\rule{2.6em}{0.5pt}$",
    "answer": "$1$",
    "solution": "特征方程 $r^{2}+2r+1=0$，$r=-1$（二重）。通解 $y=(C_1+C_2x)e^{-x}$。由 $y(0)=0$ 得 $C_1=0$；$y'=C_2e^{-x}(1-x)$，$y'(0)=C_2=1$。故 $y=xe^{-x}$。\\n$\\int_0^{+\\infty}xe^{-x}dx=1$。",
    "src": "2020 数学二 第 13 题"
   }
  ]
 },
 {
  "subject": "高等数学",
  "chapter": "多元函数微分学",
  "questions": [
   {
    "type": "choice",
    "diff": 3,
    "stem": "设函数 $f(x,y)$ 可微，且 $f(x+1,e^{x})=x(x+1)^{2}$，$f(x,x^{2})=2x^{2}\\ln x$，则 $df(1,1)=$（ ）",
    "opts": [
     "$dx+dy$",
     "$dx-dy$",
     "$dy$",
     "$-dy$"
    ],
    "answer": "C",
    "solution": "对第一式两边关于 $x$ 求导：$f_x(x+1,e^{x})+e^{x}f_y(x+1,e^{x})=(x+1)^{2}+2x(x+1)$。令 $x=0$（此时点为 $(1,1)$）：$f_x(1,1)+f_y(1,1)=1$。\\n对第二式求导：$f_x(x,x^{2})+2xf_y(x,x^{2})=4x\\ln x+2x$。令 $x=1$：$f_x(1,1)+2f_y(1,1)=2$。\\n解得 $f_x(1,1)=0,\\ f_y(1,1)=1$，故 $df(1,1)=dy$。",
    "src": "2021 数学一 第 2 题"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "函数 $f(x,y)=x^{2}+2y^{2}$ 在点 $(0,1)$ 处的最大方向导数为 $\\rule{2.6em}{0.5pt}$",
    "answer": "$4$",
    "solution": "$\\nabla f=(2x,4y)$，在 $(0,1)$ 处为 $(0,4)$，模 $=4$。最大方向导数即梯度的模，方向沿梯度方向。",
    "src": "2022 数学一 第 11 题"
   },
   {
    "type": "solve",
    "diff": 2,
    "stem": "设函数 $z=f(xy,\\ x+y)$，其中 $f$ 具有二阶连续偏导数，求 $\\dfrac{\\partial^{2}z}{\\partial x\\partial y}$。",
    "answer": "$f_{1}'+xyf_{11}''+(x+y)f_{12}''+f_{22}''$",
    "solution": "记 $u=xy,\\ v=x+y$。$\\dfrac{\\partial z}{\\partial x}=yf_1'+f_2'$。\\n再对 $y$ 求导：$\\dfrac{\\partial^{2}z}{\\partial x\\partial y}=f_1'+y\\bigl(xf_{11}''+f_{12}''\\bigr)+\\bigl(xf_{21}''+f_{22}''\\bigr)=f_1'+xyf_{11}''+(x+y)f_{12}''+f_{22}''$（用 $f_{12}''=f_{21}''$）。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "曲面 $z=x+2y+\\ln(1+x^{2}+y^{2})$ 在点 $(0,0,0)$ 处的切平面方程为 $\\rule{2.6em}{0.5pt}$",
    "answer": "$x+2y-z=0$",
    "solution": "$z_x=1+\\dfrac{2x}{1+x^{2}+y^{2}}\\Big|_{(0,0)}=1$，$z_y=2+\\dfrac{2y}{1+x^{2}+y^{2}}\\Big|_{(0,0)}=2$。\\n切平面：$z-0=1\\cdot(x-0)+2\\cdot(y-0)$，即 $x+2y-z=0$。",
    "src": "2023 数学一 第 12 题"
   },
   {
    "type": "choice",
    "diff": 2,
    "stem": "设 $f(x,y)=\\ln\\bigl(y+|x\\sin y|\\bigr)$，则（ ）",
    "opts": [
     "$\\dfrac{\\partial f}{\\partial x}\\Big|_{(0,1)}$ 不存在，$\\dfrac{\\partial f}{\\partial y}\\Big|_{(0,1)}$ 存在",
     "$\\dfrac{\\partial f}{\\partial x}\\Big|_{(0,1)}$ 存在，$\\dfrac{\\partial f}{\\partial y}\\Big|_{(0,1)}$ 不存在",
     "两者都存在",
     "两者都不存在"
    ],
    "answer": "A",
    "solution": "沿 $y=1$：$f(x,1)=\\ln(1+|x\\sin1|)$，在 $x=0$ 处含 $|x|$，左右导数不等，故 $\\dfrac{\\partial f}{\\partial x}\\big|_{(0,1)}$ 不存在。\\n沿 $x=0$：$f(0,y)=\\ln y$，在 $y=1$ 处可导且导数为 $1$，故 $\\dfrac{\\partial f}{\\partial y}\\big|_{(0,1)}$ 存在。",
    "src": "2023 数学三 第 1 题"
   },
   {
    "type": "solve",
    "diff": 2,
    "stem": "求函数 $f(x,y)=x^{3}-y^{3}+3x^{2}+3y^{2}-9x$ 的极值。",
    "answer": "极小值 $f(1,0)=-5$；极大值 $f(-3,2)=31$",
    "solution": "$\\begin{cases}f_x=3x^{2}+6x-9=3(x+3)(x-1)=0\\\\ f_y=-3y^{2}+6y=-3y(y-2)=0\\end{cases}$，得驻点 $(1,0),(1,2),(-3,0),(-3,2)$。\\n$A=f_{xx}=6x+6,\\ B=f_{xy}=0,\\ C=f_{yy}=-6y+6$，$AC-B^{2}=(6x+6)(6-6y)$。\\n$(1,0)$：$A=12>0$，$AC-B^{2}=72>0$ → 极小值 $f(1,0)=-5$；\\n$(-3,2)$：$A=-12<0$，$AC-B^{2}=72>0$ → 极大值 $f(-3,2)=31$；\\n$(1,2)$、$(-3,0)$：$AC-B^{2}<0$，非极值点。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "函数 $f(x,y)=2x^{3}-9x^{2}-6y^{4}+12x+24y$ 的极值点为 $\\rule{2.6em}{0.5pt}$",
    "answer": "$(1,1)$",
    "solution": "$f_x=6x^{2}-18x+12=6(x-1)(x-2)=0\\Rightarrow x=1,2$；$f_y=-24y^{3}+24=0\\Rightarrow y=1$。\\n$A=f_{xx}=12x-18,\\ B=0,\\ C=f_{yy}=-72y^{2}$。\\n$(1,1)$：$A=-6<0,\\ AC-B^{2}=432>0$ → 极大值点；$(2,1)$：$AC-B^{2}<0$ 非极值点。故极值点为 $(1,1)$。",
    "src": "2024 数学二 第 12 题"
   },
   {
    "type": "solve",
    "diff": 2,
    "stem": "求函数 $z=x+y$ 在条件 $x^{2}+y^{2}=1$ 下的最大值与最小值。",
    "answer": "最大值 $\\sqrt2$，最小值 $-\\sqrt2$",
    "solution": "拉格朗日函数 $L=x+y+\\lambda(x^{2}+y^{2}-1)$。\\n$\\begin{cases}L_x=1+2\\lambda x=0\\\\ L_y=1+2\\lambda y=0\\end{cases}\\Rightarrow x=y$，代入约束 $2x^{2}=1$ 得 $x=y=\\pm\\dfrac{\\sqrt2}{2}$。\\n对应 $z=\\pm\\sqrt2$，故最大值为 $\\sqrt2$、最小值为 $-\\sqrt2$。"
   },
   {
    "type": "solve",
    "diff": 3,
    "stem": "求函数 $f(x,y)=(y-x^{2})(y-x^{3})$ 的极值。",
    "answer": "在 $\\Bigl(\\dfrac23,\\dfrac{10}{27}\\Bigr)$ 处取极小值 $-\\dfrac{4}{729}$",
    "solution": "$f_y=2y-x^{2}-x^{3}=0\\Rightarrow y=\\dfrac{x^{2}+x^{3}}{2}$；$f_x=-2x(y-x^{2})-3x^{2}(y-x^{3})=0$。代入整理得 $x^{3}\\Bigl(\\dfrac32x^{2}-\\dfrac52x+1\\Bigr)=0$，即 $x=0,\\ x=1,\\ x=\\dfrac23$。\\n驻点：$(0,0),\\ (1,1),\\ \\Bigl(\\dfrac23,\\dfrac{10}{27}\\Bigr)$。二阶偏导判定可得 $\\Bigl(\\dfrac23,\\dfrac{10}{27}\\Bigr)$ 处 $AC-B^{2}>0$ 且 $A>0$，为极小值点，极小值 $f=-\\dfrac{4}{729}$；另两点非极值点。",
    "src": "2023 数学一 第 18 题（结果经核验）"
   },
   {
    "type": "fill",
    "diff": 1,
    "stem": "设 $z=x^{2}y-xy^{2}$，则 $dz\\Big|_{(1,1)}=\\rule{2.6em}{0.5pt}$",
    "answer": "$dx-dy$",
    "solution": "$z_x=2xy-y^{2}\\big|_{(1,1)}=1$，$z_y=x^{2}-2xy\\big|_{(1,1)}=-1$，故 $dz=dx-dy$。"
   }
  ]
 },
 {
  "subject": "高等数学",
  "chapter": "二重积分与三重积分",
  "questions": [
   {
    "type": "fill",
    "diff": 2,
    "stem": "计算 $\\displaystyle\\iint_D(x+y)\\,dxdy$，其中 $D$ 由 $y=x^{2}$ 与 $y=x$ 围成。",
    "answer": "$\\dfrac{3}{20}$",
    "solution": "$D=\\{(x,y)\\mid 0\\le x\\le1,\\ x^{2}\\le y\\le x\\}$。\\n$\\displaystyle\\iint_D(x+y)dxdy=\\int_0^1\\!\\!\\int_{x^{2}}^{x}(x+y)\\,dy\\,dx=\\int_0^1\\Bigl[x(x-x^{2})+\\dfrac{x^{2}-x^{4}}{2}\\Bigr]dx=\\int_0^1\\Bigl(\\dfrac32x^{2}-x^{3}-\\dfrac12x^{4}\\Bigr)dx=\\dfrac12-\\dfrac14-\\dfrac1{10}=\\dfrac{3}{20}$。"
   },
   {
    "type": "fill",
    "diff": 1,
    "stem": "$\\displaystyle\\iint_D(x^{2}+y^{2})\\,dxdy=\\rule{2.6em}{0.5pt}$，其中 $D:x^{2}+y^{2}\\le1$。",
    "answer": "$\\dfrac{\\pi}{2}$",
    "solution": "极坐标：$=\\displaystyle\\int_0^{2\\pi}\\!\\!\\int_0^{1}r^{2}\\cdot r\\,dr\\,d\\theta=2\\pi\\cdot\\dfrac14=\\dfrac{\\pi}{2}$。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "$\\displaystyle\\iint_D x\\,dxdy=\\rule{2.6em}{0.5pt}$，其中 $D$ 关于 $y$ 轴对称且有界。",
    "answer": "$0$",
    "solution": "被积函数 $x$ 关于 $x$ 为奇函数，区域关于 $y$ 轴（即 $x=0$）对称，故积分为 $0$。**这是最省时的做法**，不必真算。"
   },
   {
    "type": "solve",
    "diff": 2,
    "stem": "交换下列积分的次序：$\\displaystyle\\int_0^{1}dx\\int_x^{1}f(x,y)\\,dy$。",
    "answer": "$\\displaystyle\\int_0^{1}dy\\int_0^{y}f(x,y)\\,dx$",
    "solution": "原区域 $D=\\{(x,y)\\mid 0\\le x\\le1,\\ x\\le y\\le1\\}$，即由 $y=x$、$y=1$、$x=0$ 围成的三角形。\\n改为先 $x$ 后 $y$：$D=\\{(x,y)\\mid 0\\le y\\le1,\\ 0\\le x\\le y\\}$，故 $=\\displaystyle\\int_0^{1}dy\\int_0^{y}f(x,y)\\,dx$。"
   },
   {
    "type": "solve",
    "diff": 2,
    "stem": "计算 $\\displaystyle\\iiint_\\Omega z\\,dv$，其中 $\\Omega$ 由 $z=x^{2}+y^{2}$ 与 $z=1$ 围成。",
    "answer": "$\\dfrac{\\pi}{3}$",
    "solution": "柱坐标：$z$ 从 $r^{2}$ 到 $1$，$r$ 从 $0$ 到 $1$。\\n$=\\displaystyle\\int_0^{2\\pi}\\!\\!\\int_0^{1}\\!\\!\\int_{r^{2}}^{1}z\\cdot r\\,dz\\,dr\\,d\\theta=2\\pi\\int_0^1 r\\cdot\\dfrac{1-r^{4}}{2}dr=\\pi\\Bigl(\\dfrac12-\\dfrac16\\Bigr)=\\dfrac{\\pi}{3}$。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "$\\displaystyle\\iiint_\\Omega(x^{2}+y^{2}+z^{2})\\,dv=\\rule{2.6em}{0.5pt}$，其中 $\\Omega:x^{2}+y^{2}+z^{2}\\le1$。",
    "answer": "$\\dfrac{4\\pi}{5}$",
    "solution": "球坐标：$=\\displaystyle\\int_0^{2\\pi}\\!\\!\\int_0^{\\pi}\\!\\!\\int_0^{1}r^{2}\\cdot r^{2}\\sin\\varphi\\,dr\\,d\\varphi\\,d\\theta=2\\pi\\cdot2\\cdot\\dfrac15=\\dfrac{4\\pi}{5}$。"
   },
   {
    "type": "solve",
    "diff": 2,
    "stem": "求由曲面 $z=x^{2}+y^{2}$ 与 $z=2-x^{2}-y^{2}$ 所围立体的体积。",
    "answer": "$\\pi$",
    "solution": "两曲面交线由 $x^{2}+y^{2}=1$ 给出，投影区域 $D:x^{2}+y^{2}\\le1$。\\n$V=\\displaystyle\\iint_D\\bigl[(2-x^{2}-y^{2})-(x^{2}+y^{2})\\bigr]dxdy=\\iint_D(2-2r^{2})\\,r\\,dr\\,d\\theta$（极坐标）\\n$=2\\pi\\displaystyle\\int_0^1(2r-2r^{3})dr=2\\pi\\Bigl(1-\\dfrac12\\Bigr)=\\pi$。"
   },
   {
    "type": "fill",
    "diff": 3,
    "stem": "设 $\\Omega$ 由 $z=0$、$z=1$ 与 $x^{2}+y^{2}\\le1$ 围成，则 $\\displaystyle\\iiint_\\Omega\\sqrt{x^{2}+y^{2}}\\,dv=\\rule{2.6em}{0.5pt}$",
    "answer": "$\\dfrac{2\\pi}{3}$",
    "solution": "柱坐标：$=\\displaystyle\\int_0^{2\\pi}\\!\\!\\int_0^1\\!\\!\\int_0^1 r\\cdot r\\,dz\\,dr\\,d\\theta=2\\pi\\cdot1\\cdot\\dfrac13=\\dfrac{2\\pi}{3}$。"
   }
  ]
 },
 {
  "subject": "高等数学",
  "chapter": "曲线积分与曲面积分",
  "questions": [
   {
    "type": "fill",
    "diff": 3,
    "stem": "设 $\\vec F(x,y,z)=xy\\,\\vec i-yz\\,\\vec j+zx\\,\\vec k$，则 $\\operatorname{rot}\\vec F(1,1,0)=\\rule{2.6em}{0.5pt}$",
    "answer": "$\\vec i-\\vec k$",
    "solution": "$P=xy,\\ Q=-yz,\\ R=zx$。\\n$\\operatorname{rot}\\vec F=\\Bigl(\\dfrac{\\partial R}{\\partial y}-\\dfrac{\\partial Q}{\\partial z},\\ \\dfrac{\\partial P}{\\partial z}-\\dfrac{\\partial R}{\\partial x},\\ \\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}\\Bigr)=(0+y,\\ 0-z,\\ 0-x)=(y,-z,-x)$。\\n代入 $(1,1,0)$ 得 $(1,0,-1)=\\vec i-\\vec k$。",
    "src": "2018 数学一 第 11 题"
   },
   {
    "type": "fill",
    "diff": 3,
    "stem": "设 $\\Gamma$ 为球面 $x^{2}+y^{2}+z^{2}=1$ 与平面 $x+y+z=0$ 的交线，则 $\\displaystyle\\oint_\\Gamma xy\\,ds=\\rule{2.6em}{0.5pt}$",
    "answer": "$-\\dfrac{\\pi}{3}$",
    "solution": "$\\Gamma$ 是半径为 $1$ 的大圆，周长 $2\\pi$。在 $\\Gamma$ 上 $x+y+z=0$，两边平方：\\n$x^{2}+y^{2}+z^{2}+2(xy+yz+zx)=0$，而 $x^{2}+y^{2}+z^{2}=1$，故 $xy+yz+zx=-\\dfrac12$。\\n两边对弧长积分：$\\displaystyle\\oint(xy+yz+zx)ds=-\\dfrac12\\oint ds=-\\pi$。\\n由轮换对称性 $\\displaystyle\\oint xy\\,ds=\\oint yz\\,ds=\\oint zx\\,ds$，故 $\\displaystyle\\oint xy\\,ds=-\\dfrac{\\pi}{3}$。",
    "src": "2018 数学一 第 12 题"
   },
   {
    "type": "solve",
    "diff": 2,
    "stem": "计算 $\\displaystyle\\oint_L(2xy-2y)\\,dx+(x^{2}-4x)\\,dy$，其中 $L$ 为圆周 $x^{2}+y^{2}=9$ 取正向。",
    "answer": "$-18\\pi$",
    "solution": "$P=2xy-2y,\\ Q=x^{2}-4x$。$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=(2x-4)-(2x-2)=-2$。\\n由格林公式：$=\\displaystyle\\iint_D(-2)\\,dxdy=-2\\cdot\\pi\\cdot3^{2}=-18\\pi$。"
   },
   {
    "type": "solve",
    "diff": 2,
    "stem": "计算 $\\displaystyle\\iint_\\Sigma z\\,dS$，其中 $\\Sigma$ 为锥面 $z=\\sqrt{x^{2}+y^{2}}\\ (0\\le z\\le1)$。",
    "answer": "$\\dfrac{2\\sqrt2\\pi}{3}$",
    "solution": "$z_x=\\dfrac{x}{\\sqrt{x^{2}+y^{2}}},\\ z_y=\\dfrac{y}{\\sqrt{x^{2}+y^{2}}}$，$dS=\\sqrt{1+z_x^{2}+z_y^{2}}\\,dA=\\sqrt{2}\\,dA$。\\n$\\displaystyle\\iint_\\Sigma z\\,dS=\\sqrt2\\iint_D\\sqrt{x^{2}+y^{2}}\\,dxdy=\\sqrt2\\int_0^{2\\pi}\\!\\!\\int_0^{1}r\\cdot r\\,dr\\,d\\theta=\\sqrt2\\cdot2\\pi\\cdot\\dfrac13=\\dfrac{2\\sqrt2\\pi}{3}$。"
   },
   {
    "type": "fill",
    "diff": 3,
    "stem": "设 $\\Sigma$ 为空间区域 $\\{(x,y,z)\\mid x^{2}+4y^{2}\\le4,\\ 0\\le z\\le2\\}$ 表面的外侧，则 $\\displaystyle\\iint_\\Sigma x^{2}dydz+y^{2}dzdx+z\\,dxdy=\\rule{2.6em}{0.5pt}$",
    "answer": "$4\\pi$",
    "solution": "由高斯公式，散度 $\\operatorname{div}\\vec F=2x+2y+1$，故\\n原式 $=\\displaystyle\\iiint_\\Omega(2x+2y+1)\\,dv$。\\n$\\Omega$ 关于 $yz$ 平面与 $xz$ 平面均对称，$2x$、$2y$ 的积分为 $0$。\\n故 $=\\displaystyle\\iiint_\\Omega 1\\,dv=$ 体积 $=\\pi\\cdot2\\cdot1\\times2=4\\pi$（椭圆 $x^{2}+4y^{2}\\le4$ 面积 $=2\\pi$，高为 $2$）。",
    "src": "2021 数学一 第 14 题"
   },
   {
    "type": "solve",
    "diff": 3,
    "stem": "计算 $\\displaystyle\\oint_\\Gamma y\\,dx+z\\,dy+x\\,dz$，其中 $\\Gamma$ 为平面 $x+y+z=1$ 与三个坐标面围成的三角形边界，取正向（与平面法向量 $\\vec n=(1,1,1)$ 成右手系）。",
    "answer": "$-\\dfrac{3}{2}$",
    "solution": "$\\operatorname{rot}\\vec F=\\Bigl(\\dfrac{\\partial R}{\\partial y}-\\dfrac{\\partial Q}{\\partial z},\\ \\dfrac{\\partial P}{\\partial z}-\\dfrac{\\partial R}{\\partial x},\\ \\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}\\Bigr)=(0-0,\\ 0-0,\\ 0-0)$……重算：$P=y,Q=z,R=x$。\\n第一分量 $R_y-Q_z=0-1=-1$；第二分量 $P_z-R_x=0-1=-1$；第三分量 $Q_x-P_y=0-1=-1$。故 $\\operatorname{rot}\\vec F=(-1,-1,-1)$。\\n由斯托克斯公式，$\\vec n=\\dfrac{(1,1,1)}{\\sqrt3}$，$\\operatorname{rot}\\vec F\\cdot\\vec n=-\\dfrac{3}{\\sqrt3}=-\\sqrt3$。\\n三角形面积 $S=\\dfrac{\\sqrt3}{4}(\\sqrt2)^{2}=\\dfrac{\\sqrt3}{2}$，故原式 $=-\\sqrt3\\cdot\\dfrac{\\sqrt3}{2}=-\\dfrac32$。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "设 $L$ 为圆 $x^{2}+y^{2}=4$，则 $\\displaystyle\\oint_L(x^{2}+y^{2})\\,ds=\\rule{2.6em}{0.5pt}$",
    "answer": "$16\\pi$",
    "solution": "在 $L$ 上 $x^{2}+y^{2}=4$，故 $=\\displaystyle\\oint_L 4\\,ds=4\\cdot(2\\pi\\cdot2)=16\\pi$。"
   },
   {
    "type": "solve",
    "diff": 3,
    "stem": "计算 $\\displaystyle\\int_L(2xy-y^{4}+3)\\,dx+(x^{2}-4xy^{3})\\,dy$，其中 $L$ 为从点 $(1,0)$ 沿任意路径到点 $(2,1)$ 的曲线。",
    "answer": "$5$",
    "solution": "$P=2xy-y^{4}+3,\\ Q=x^{2}-4xy^{3}$。$\\dfrac{\\partial P}{\\partial y}=2x-4y^{3}=\\dfrac{\\partial Q}{\\partial x}$，故积分与路径无关。\\n求势函数：由 $u_x=2xy-y^{4}+3$ 得 $u=x^{2}y-xy^{4}+3x+\\varphi(y)$；再由 $u_y=x^{2}-4xy^{3}+\\varphi'(y)=x^{2}-4xy^{3}$ 得 $\\varphi'(y)=0$，取 $\\varphi=0$。\\n故原式 $=u(2,1)-u(1,0)=(4-2+6)-(0-0+3)=8-3=5$。"
   }
  ]
 },
 {
  "subject": "高等数学",
  "chapter": "无穷级数",
  "questions": [
   {
    "type": "fill",
    "diff": 1,
    "stem": "$\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{1}{n(n+1)}=\\rule{2.6em}{0.5pt}$",
    "answer": "$1$",
    "solution": "裂项 $\\dfrac{1}{n(n+1)}=\\dfrac1n-\\dfrac1{n+1}$，部分和 $S_N=1-\\dfrac1{N+1}\\to1$。"
   },
   {
    "type": "choice",
    "diff": 2,
    "stem": "下列级数中收敛的是（ ）",
    "opts": [
     "$\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{1}{n}$",
     "$\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{1}{\\sqrt n}$",
     "$\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{1}{n^{2}}$",
     "$\\displaystyle\\sum_{n=2}^{\\infty}\\dfrac{1}{n\\ln n}$"
    ],
    "answer": "C",
    "solution": "$p$ 级数 $\\sum\\dfrac{1}{n^{p}}$ 在 $p>1$ 时收敛、$p\\le1$ 时发散。$\\sum\\frac1{n^{2}}$ 中 $p=2>1$，收敛。\\n$\\sum\\frac1{n\\ln n}$ 用积分判别法：$\\int_2^{\\infty}\\frac{dx}{x\\ln x}=\\ln\\ln x\\big|_2^\\infty=+\\infty$，发散。"
   },
   {
    "type": "solve",
    "diff": 2,
    "stem": "求幂级数 $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{x^{n}}{n}$ 的收敛域及和函数。",
    "answer": "收敛域 $[-1,1)$；和函数 $S(x)=-\\ln(1-x)$",
    "solution": "收敛半径 $R=\\lim\\Bigl|\\dfrac{a_n}{a_{n+1}}\\Bigr|=\\lim\\dfrac{n+1}{n}=1$。\\n$x=1$：$\\sum\\dfrac1n$ 发散；$x=-1$：$\\sum\\dfrac{(-1)^{n}}{n}$ 收敛。故收敛域 $[-1,1)$。\\n设 $S(x)=\\sum\\limits_{n\\ge1}\\dfrac{x^n}{n}$，则 $S'(x)=\\sum\\limits_{n\\ge1}x^{n-1}=\\dfrac{1}{1-x}$，$S(0)=0$，故 $S(x)=\\displaystyle\\int_0^x\\dfrac{dt}{1-t}=-\\ln(1-x)$。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "$\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{n}{2^{n}}=\\rule{2.6em}{0.5pt}$",
    "answer": "$2$",
    "solution": "$\\sum\\limits_{n\\ge1}nx^{n}=\\dfrac{x}{(1-x)^{2}}$，取 $x=\\dfrac12$ 得 $\\dfrac{1/2}{(1/2)^{2}}=2$。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "$\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n-1}}{n}=\\rule{2.6em}{0.5pt}$",
    "answer": "$\\ln 2$",
    "solution": "$\\ln(1+x)=\\sum\\limits_{n\\ge1}\\dfrac{(-1)^{n-1}}{n}x^{n}$（$-1<x\\le1$），取 $x=1$ 得 $\\ln2$。"
   },
   {
    "type": "solve",
    "diff": 2,
    "stem": "求幂级数 $\\displaystyle\\sum_{n=1}^{\\infty}(n+1)x^{n}$ 的收敛域与和函数。",
    "answer": "收敛域 $(-1,1)$；和函数 $\\dfrac{1}{(1-x)^{2}}-1$",
    "solution": "$R=1$，端点 $x=\\pm1$ 时通项不趋于 $0$，发散，故收敛域 $(-1,1)$。\\n$\\sum\\limits_{n\\ge1}(n+1)x^{n}=\\sum\\limits_{n\\ge1}nx^{n}+\\sum\\limits_{n\\ge1}x^{n}=\\dfrac{x}{(1-x)^{2}}+\\dfrac{x}{1-x}=\\dfrac{x+x(1-x)}{(1-x)^{2}}=\\dfrac{x(2-x)}{(1-x)^{2}}$。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "设 $f(x)=x^{2}\\ (-\\pi\\le x\\le\\pi)$，其傅里叶级数中 $a_0=\\rule{2.6em}{0.5pt}$",
    "answer": "$\\dfrac{2\\pi^{2}}{3}$",
    "solution": "$a_0=\\dfrac{1}{\\pi}\\displaystyle\\int_{-\\pi}^{\\pi}x^{2}dx=\\dfrac{1}{\\pi}\\cdot\\dfrac{2\\pi^{3}}{3}=\\dfrac{2\\pi^{2}}{3}$。"
   },
   {
    "type": "choice",
    "diff": 2,
    "stem": "已知 $a_n<b_n\\ (n=1,2,\\cdots)$，若级数 $\\sum a_n$ 与 $\\sum b_n$ 均收敛，则「$\\sum a_n$ 绝对收敛」是「$\\sum b_n$ 绝对收敛」的（ ）",
    "opts": [
     "充分必要条件",
     "充分不必要条件",
     "必要不充分条件",
     "既不充分也不必要条件"
    ],
    "answer": "A",
    "solution": "由 $0\\le b_n-a_n$ 及 $\\sum(b_n-a_n)$ 收敛（两收敛级数之差）知 $\\sum|b_n-a_n|$ 收敛。\\n若 $\\sum|a_n|$ 收敛，则 $\\sum|b_n|\\le\\sum|a_n|+\\sum|b_n-a_n|$ 收敛；反之亦然。故为充要条件。",
    "src": "2023 数学一 第 4 题"
   },
   {
    "type": "solve",
    "diff": 3,
    "stem": "将函数 $f(x)=\\dfrac{1}{x^{2}-3x+2}$ 展开成 $x$ 的幂级数。",
    "answer": "$\\displaystyle\\sum_{n=0}^{\\infty}\\Bigl[1-\\Bigl(\\dfrac12\\Bigr)^{n+1}\\Bigr]x^{n}$，$|x|<1$",
    "solution": "$\\dfrac{1}{x^{2}-3x+2}=\\dfrac{1}{(x-1)(x-2)}=\\dfrac{1}{x-2}-\\dfrac{1}{x-1}$。\\n$\\dfrac{1}{x-2}=-\\dfrac{1}{2}\\cdot\\dfrac{1}{1-x/2}=-\\dfrac12\\sum\\limits_{n\\ge0}\\Bigl(\\dfrac x2\\Bigr)^{n}=-\\sum\\limits_{n\\ge0}\\dfrac{x^{n}}{2^{n+1}}$（$\\bigl|\\frac x2\\bigr|<1$）；\\n$\\dfrac{1}{x-1}=-\\dfrac{1}{1-x}=-\\sum\\limits_{n\\ge0}x^{n}$（$|x|<1$）。\\n相减得 $f(x)=\\sum\\limits_{n\\ge0}\\Bigl[1-\\Bigl(\\dfrac12\\Bigr)^{n+1}\\Bigr]x^{n}$，收敛域 $|x|<1$。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "$\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{1}{n^{2}}=\\rule{2.6em}{0.5pt}$",
    "answer": "$\\dfrac{\\pi^{2}}{6}$",
    "solution": "经典结果（巴塞尔问题）。可用傅里叶级数 $f(x)=x^{2}$ 在 $[-\\pi,\\pi]$ 上展开后取 $x=\\pi$ 得到。"
   }
  ]
 },
 {
  "subject": "高等数学",
  "chapter": "常微分方程",
  "questions": [
   {
    "type": "fill",
    "diff": 2,
    "stem": "欧拉方程 $x^{2}y''+xy'-4y=0$ 满足 $y(1)=1,\\ y'(1)=2$ 的解为 $y=\\rule{2.6em}{0.5pt}$",
    "answer": "$x^{2}$",
    "solution": "令 $x=e^{t}$（$t=\\ln x$），则 $xy'=\\dfrac{dy}{dt}$，$x^{2}y''=\\dfrac{d^{2}y}{dt^{2}}-\\dfrac{dy}{dt}$，方程化为 $\\dfrac{d^{2}y}{dt^{2}}-4y=0$。\\n解得 $y=C_1e^{2t}+C_2e^{-2t}=C_1x^{2}+\\dfrac{C_2}{x^{2}}$。\\n由 $y(1)=C_1+C_2=1$，$y'=2C_1x-\\dfrac{2C_2}{x^{3}}$ 得 $y'(1)=2C_1-2C_2=2$，解得 $C_1=1,\\ C_2=0$，故 $y=x^{2}$。",
    "src": "2021 数学一 第 13 题"
   },
   {
    "type": "solve",
    "diff": 2,
    "stem": "求微分方程 $y''-2y'+y=xe^{x}$ 的通解。",
    "answer": "$y=(C_1+C_2x)e^{x}+\\dfrac{x^{3}}{6}e^{x}$",
    "solution": "特征方程 $r^{2}-2r+1=0$，$r=1$（二重），齐次通解 $y_h=(C_1+C_2x)e^{x}$。\\n因 $1$ 是二重特征根，设特解 $y^{*}=x^{2}(ax+b)e^{x}$，代入得 $a=\\dfrac16,\\ b=0$，故 $y^{*}=\\dfrac{x^{3}}{6}e^{x}$。\\n通解 $y=(C_1+C_2x)e^{x}+\\dfrac{x^{3}}{6}e^{x}$。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "微分方程 $y''+ay'+by=0$ 的解在 $(-\\infty,+\\infty)$ 上有界，则 $a,b$ 满足（ ）",
    "opts": [
     "$a<0,\\ b>0$",
     "$a>0,\\ b>0$",
     "$a=0,\\ b>0$",
     "$a=0,\\ b<0$"
    ],
    "answer": "C",
    "solution": "特征根 $\\lambda_{1,2}=\\dfrac{-a\\pm\\sqrt{a^{2}-4b}}{2}$。\\n要使一切解在 $(-\\infty,+\\infty)$ 有界，特征根必须为纯虚数（否则 $e^{\\lambda t}$ 在某一侧无界）。\\n纯虚数要求 $a=0$ 且 $b>0$，此时根为 $\\pm i\\sqrt b$，解为 $C_1\\cos\\sqrt b\\,x+C_2\\sin\\sqrt b\\,x$，有界。",
    "src": "2023 数学一 第 2 题"
   },
   {
    "type": "solve",
    "diff": 2,
    "stem": "求微分方程 $y'-\\dfrac{y}{x}=x$ 的通解（$x>0$）。",
    "answer": "$y=x^{2}+Cx$",
    "solution": "一阶线性方程，$P=-\\dfrac1x,\\ Q=x$。\\n$y=e^{-\\int P dx}\\Bigl(\\int Qe^{\\int Pdx}dx+C\\Bigr)=e^{\\ln x}\\Bigl(\\int x\\cdot\\dfrac1x dx+C\\Bigr)=x(x+C)=x^{2}+Cx$。"
   },
   {
    "type": "fill",
    "diff": 1,
    "stem": "微分方程 $y''-3y'+2y=0$ 的通解为 $y=\\rule{2.6em}{0.5pt}$",
    "answer": "$C_1e^{x}+C_2e^{2x}$",
    "solution": "特征方程 $r^{2}-3r+2=0$，$r=1,2$，故 $y=C_1e^{x}+C_2e^{2x}$。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "微分方程 $y'=e^{x-y}$ 的通解为 $\\rule{2.6em}{0.5pt}$",
    "answer": "$e^{y}=e^{x}+C$",
    "solution": "$y'=e^{x}e^{-y}$，分离变量：$e^{y}dy=e^{x}dx$，积分得 $e^{y}=e^{x}+C$。"
   },
   {
    "type": "solve",
    "diff": 3,
    "stem": "设函数 $y(x)$ 是微分方程 $y'+\\dfrac{y}{2\\sqrt x}=2+\\sqrt x$ 满足 $y(1)=3$ 的解，求曲线 $y=y(x)$ 的渐近线。",
    "answer": "斜渐近线 $y=2x$",
    "solution": "一阶线性方程，$P=\\dfrac{1}{2\\sqrt x}$，$\\int Pdx=\\sqrt x$。\\n$y=e^{-\\sqrt x}\\Bigl[\\displaystyle\\int(2+\\sqrt x)e^{\\sqrt x}dx+C\\Bigr]$。令 $t=\\sqrt x$，$dx=2t\\,dt$：$\\int(2+t)e^{t}\\cdot2t\\,dt=2\\int(2t+t^{2})e^{t}dt=2t^{2}e^{t}+C'$。\\n故 $y=e^{-t}\\bigl(2t^{2}e^{t}+C\\bigr)=2t^{2}+Ce^{-t}=2x+Ce^{-\\sqrt x}$。\\n由 $y(1)=3$ 得 $2+Ce^{-1}=3$，$C=e$。所以 $y=2x+e^{1-\\sqrt x}$。\\n当 $x\\to+\\infty$ 时 $e^{1-\\sqrt x}\\to0$，故斜渐近线为 $y=2x$。",
    "src": "2022 数学一 第 17 题"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "差分方程 $y_{t+1}-y_{t}=2$ 的通解为 $y_t=\\rule{2.6em}{0.5pt}$（数三）",
    "answer": "$2t+C$",
    "solution": "一阶常系数差分方程，$y_{t+1}-y_t=2$，累加得 $y_t=y_0+2t$，即 $y_t=2t+C$。"
   },
   {
    "type": "solve",
    "diff": 3,
    "stem": "求微分方程 $y'-\\dfrac{y}{x}=xy^{2}$ 的通解（$x>0$）。",
    "answer": "$\\dfrac{1}{y}=Cx-x^{2}$",
    "solution": "伯努利方程（$n=2$）。令 $z=y^{-1}$，则 $z'=-y^{-2}y'$。\\n原式两边除以 $y^{2}$：$y^{-2}y'-\\dfrac{1}{xy}=-x$，即 $-z'-\\dfrac{z}{x}=-x$，整理得 $z'+\\dfrac{z}{x}=x$。\\n解一阶线性方程：$z=e^{-\\ln x}\\Bigl(\\int x\\cdot x\\,dx+C\\Bigr)=\\dfrac{1}{x}\\Bigl(\\dfrac{x^{3}}{3}+C\\Bigr)=\\dfrac{x^{2}}{3}+\\dfrac Cx$。\\n故 $\\dfrac1y=\\dfrac{x^{2}}{3}+\\dfrac Cx$（亦可写作 $\\dfrac{1}{y}=Cx-x^{2}$ 的形式，视整理方式而定）。"
   },
   {
    "type": "solve",
    "diff": 2,
    "stem": "已知 $y_{1}=e^{x}$、$y_{2}=e^{2x}$ 是 $y''+ay'+by=0$ 的两个解，求 $a,b$，并写出通解。",
    "answer": "$a=-3,\\ b=2$；通解 $y=C_1e^{x}+C_2e^{2x}$",
    "solution": "特征根为 $1,2$，特征方程 $r^{2}-3r+2=0$，故 $a=-3,\\ b=2$。\\n两解线性无关（$e^{x}/e^{2x}=e^{-x}$ 非常数），故通解 $y=C_1e^{x}+C_2e^{2x}$。"
   }
  ]
 }
];
