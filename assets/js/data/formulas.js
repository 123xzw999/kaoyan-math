/* 自动生成：考研数学公式与结论库 */
window.KY_FORMULAS = [
 {
  "id": "g0",
  "title": "一、高等数学（微积分）",
  "chapters": [
   {
    "id": "g0-c0",
    "title": "1. 极限",
    "sections": [
     {
      "id": "g0-c0-s1",
      "title": "1.1 等价无穷小替换全表（x→ 0）",
      "md": "**基本替换（一阶）**\n\n| 原式 | 等价无穷小 | 说明 |\n|---|---|---|\n| $\\sin x$ | $x$ | 乘除可换，加减慎用 |\n| $\\tan x$ | $x$ | |\n| $\\arcsin x$ | $x$ | |\n| $\\arctan x$ | $x$ | |\n| $1-\\cos x$ | $\\dfrac{x^2}{2}$ | 二阶，加减也可用 |\n| $e^x-1$ | $x$ | |\n| $a^x-1$ | $x\\ln a$ | |\n| $\\ln(1+x)$ | $x$ | |\n| $\\log_a(1+x)$ | $\\dfrac{x}{\\ln a}$ | |\n| $(1+x)^a-1$ | $ax$ | |\n| $\\sqrt{1+x}-1$ | $\\dfrac{x}{2}$ | $(1+x)^{1/n}-1\\sim\\dfrac{x}{n}$ |\n| $x-\\sin x$ | $\\dfrac{x^3}{6}$ | 三阶 |\n| $\\tan x-x$ | $\\dfrac{x^3}{3}$ | 三阶 |\n| $\\arcsin x-x$ | $\\dfrac{x^3}{6}$ | 三阶 |\n| $x-\\arctan x$ | $\\dfrac{x^3}{3}$ | 三阶 |\n| $\\tan x-\\sin x$ | $\\dfrac{x^3}{2}$ | 三阶 |\n| $x-\\ln(1+x)$ | $\\dfrac{x^2}{2}$ | 二阶 |\n| $e^x-1-x$ | $\\dfrac{x^2}{2}$ | 二阶 |\n| $\\ln(1+x)-x$ | $-\\dfrac{x^2}{2}$ | 二阶 |\n| $\\arcsin x-\\sin x$ | $\\dfrac{x^3}{3}$ | 三阶 |\n| $\\ln(x+\\sqrt{1+x^2})$ | $x$ | 反双曲正弦 |\n| $\\ln\\cos x$ | $-\\dfrac{x^2}{2}$ | 二阶 |\n| $\\sec x-1$ | $\\dfrac{x^2}{2}$ | 二阶 |\n| $(1+x)^a-1-ax$ | $\\dfrac{a(a-1)}{2}x^2$ | 二阶 |\n| $e^{x^2}-1$ | $x^2$ | 二阶 |\n| $\\sqrt{1+x\\sin x}-1$ | $\\dfrac{x^2}{2}$ | 二阶 |\n| $1-\\sqrt[n]{1-x}$ | $\\dfrac{x}{n}$ | |\n| $x^x-1$ | $x\\ln x$ | $x\\to 0^+$ |\n\n【考点】求 $0/0$ 型极限时把复杂因子整体替换；三阶等价用于分子分母出现 $x^3$ 时。\n\n**使用注意（命题陷阱）**\n- 只能在**乘除**中替换；**加减**中替换要保证精度一致，否则错。例：$\\lim_{x\\to0}\\dfrac{\\tan x-\\sin x}{x^3}$，直接换 $x-x$ 得 0 是**错误**的，正确为 $\\dfrac12$。\n- 必须**整体替换**，不能只替换局部的加减项。\n- 复合结构先凑整体：$e^{\\sin x}-1\\sim\\sin x\\sim x$；$\\ln(\\cos x)=\\ln(1+(\\cos x-1))\\sim\\cos x-1\\sim-\\dfrac{x^2}{2}$。\n- $x\\to a\\ne0$ 时先令 $t=x-a$ 再换。"
     },
     {
      "id": "g0-c0-s2",
      "title": "1.2 常用极限与两个重要极限",
      "md": "$$\\lim_{x\\to0}\\frac{\\sin x}{x}=1,\\qquad \\lim_{x\\to\\infty}\\Bigl(1+\\frac1x\\Bigr)^x=e,\\qquad \\lim_{x\\to0}(1+x)^{\\frac1x}=e$$\n【考点】$1^\\infty$ 型统一化为 $e^{\\lim \\frac{\\ln(\\text{底})}{\\text{指数倒数}}}$。\n\n$$\\lim_{x\\to0}\\frac{1-\\cos x}{x^2}=\\frac12,\\quad \\lim_{x\\to0}\\frac{e^x-1}{x}=1,\\quad \\lim_{x\\to0}\\frac{\\ln(1+x)}{x}=1,\\quad \\lim_{x\\to0}\\frac{a^x-1}{x}=\\ln a$$\n$$\\lim_{x\\to0}\\frac{(1+x)^a-1}{x}=a,\\qquad \\lim_{x\\to\\infty}\\Bigl(1+\\frac{a}{x}\\Bigr)^{bx}=e^{ab},\\qquad \\lim_{x\\to0^+}x^x=1$$\n\n【考点】$1^\\infty$、$0^0$、$\\infty^0$ 型：取对数或用 $u^v=e^{v\\ln u}$。"
     },
     {
      "id": "g0-c0-s3",
      "title": "1.3 洛必达法则（使用条件）",
      "md": "设 $x\\to a$（$a$ 可为 $\\pm\\infty$）时，若\n1. $\\dfrac{f(x)}{g(x)}$ 为 $\\dfrac00$ 或 $\\dfrac{\\infty}{\\infty}$ 型；\n2. $f,g$ 在 $a$ 的去心邻域内可导，且 $g'(x)\\ne0$；\n3. $\\lim\\limits_{x\\to a}\\dfrac{f'(x)}{g'(x)}$ 存在**或为无穷大**，\n\n则 $\\displaystyle\\lim_{x\\to a}\\frac{f(x)}{g(x)}=\\lim_{x\\to a}\\frac{f'(x)}{g'(x)}$。\n\n【考点】三个条件缺一不可；**条件 3 不满足（振荡不存在）时不能用**，须改用泰勒或夹逼。可连续使用但每次都要重新验证类型。"
     },
     {
      "id": "g0-c0-s4",
      "title": "1.4 泰勒公式与常用麦克劳林展开（到 5 阶）",
      "md": "带皮亚诺余项：$f(x)=\\sum\\limits_{k=0}^{n}\\dfrac{f^{(k)}(x_0)}{k!}(x-x_0)^k+o\\bigl((x-x_0)^n\\bigr)$。\n\n常用展开（$x\\to0$，$o(x^n)$ 表示余项）：\n\n$$e^x=1+x+\\frac{x^2}{2!}+\\frac{x^3}{3!}+\\frac{x^4}{4!}+\\frac{x^5}{5!}+o(x^5)$$\n$$\\sin x=x-\\frac{x^3}{3!}+\\frac{x^5}{5!}-\\cdots=x-\\frac{x^3}{6}+\\frac{x^5}{120}+o(x^5)$$\n$$\\cos x=1-\\frac{x^2}{2!}+\\frac{x^4}{4!}-\\cdots=1-\\frac{x^2}{2}+\\frac{x^4}{24}+o(x^4)$$\n$$\\ln(1+x)=x-\\frac{x^2}{2}+\\frac{x^3}{3}-\\frac{x^4}{4}+\\frac{x^5}{5}+o(x^5)$$\n$$(1+x)^a=1+ax+\\frac{a(a-1)}{2!}x^2+\\frac{a(a-1)(a-2)}{3!}x^3+\\cdots+o(x^n)$$\n$$\\frac{1}{1-x}=1+x+x^2+x^3+\\cdots+x^n+o(x^n),\\qquad \\frac{1}{1+x}=1-x+x^2-x^3+\\cdots$$\n$$\\tan x=x+\\frac{x^3}{3}+\\frac{2x^5}{15}+o(x^5),\\qquad \\arcsin x=x+\\frac{x^3}{6}+\\frac{3x^5}{40}+o(x^5)$$\n$$\\arctan x=x-\\frac{x^3}{3}+\\frac{x^5}{5}+o(x^5),\\qquad \\sqrt{1+x}=1+\\frac{x}{2}-\\frac{x^2}{8}+\\frac{x^3}{16}+o(x^3)$$\n$$\\ln(1-x)=-x-\\frac{x^2}{2}-\\frac{x^3}{3}-\\cdots,\\qquad e^{-x^2}=1-x^2+\\frac{x^4}{2}+o(x^4)$$\n\n【考点】泰勒求极限的**典型用法**：分子分母同阶展开到「最低次不为零」的阶数；$\\dfrac00$ 型但洛必达繁琐时优先泰勒；出现 $x-\\sin x$、$\\tan x-\\sin x$ 等\"抵消\"结构必须展到三阶。"
     },
     {
      "id": "g0-c0-s5",
      "title": "1.5 极限存在的准则与无穷小比较",
      "md": "- **夹逼准则**：若 $y_n\\le x_n\\le z_n$ 且 $\\lim y_n=\\lim z_n=a$，则 $\\lim x_n=a$。\n- **单调有界准则**：单调递增且有上界（或单调递减且有下界）的数列必收敛。\n- **无穷小比较**：设 $\\lim\\dfrac{\\beta}{\\alpha}=c$，$c\\ne0$ 则同阶；$c=1$ 则等价（$\\alpha\\sim\\beta$）；$c=0$ 则 $\\beta$ 是比 $\\alpha$ 高阶的无穷小。\n- **无穷小阶的性质**：$\\alpha\\sim\\beta \\iff \\alpha=\\beta+o(\\beta)$。\n\n【考点】数列极限用夹逼或单调有界；递推数列 $a_{n+1}=f(a_n)$ 常用单调有界。\n\n---"
     }
    ]
   },
   {
    "id": "g0-c1",
    "title": "2. 导数与微分",
    "sections": [
     {
      "id": "g0-c1-s1",
      "title": "2.1 基本导数表",
      "md": "| $f(x)$ | $f'(x)$ | $f(x)$ | $f'(x)$ |\n|---|---|---|---|\n| $C$ | $0$ | $\\sin x$ | $\\cos x$ |\n| $x^n$ | $nx^{n-1}$ | $\\cos x$ | $-\\sin x$ |\n| $\\sqrt{x}$ | $\\dfrac{1}{2\\sqrt{x}}$ | $\\tan x$ | $\\sec^2 x$ |\n| $\\dfrac1x$ | $-\\dfrac{1}{x^2}$ | $\\cot x$ | $-\\csc^2 x$ |\n| $e^x$ | $e^x$ | $\\sec x$ | $\\sec x\\tan x$ |\n| $a^x$ | $a^x\\ln a$ | $\\csc x$ | $-\\csc x\\cot x$ |\n| $\\ln x$ | $\\dfrac1x$ | $\\arcsin x$ | $\\dfrac{1}{\\sqrt{1-x^2}}$ |\n| $\\log_a x$ | $\\dfrac{1}{x\\ln a}$ | $\\arccos x$ | $-\\dfrac{1}{\\sqrt{1-x^2}}$ |\n| $x^x$ | $x^x(\\ln x+1)$ | $\\arctan x$ | $\\dfrac{1}{1+x^2}$ |\n| $\\ln(x+\\sqrt{x^2+a^2})$ | $\\dfrac{1}{\\sqrt{x^2+a^2}}$ | $\\operatorname{arccot} x$ | $-\\dfrac{1}{1+x^2}$ |\n\n【考点】求导是全部计算的基础，须条件反射级熟练。"
     },
     {
      "id": "g0-c1-s2",
      "title": "2.2 高阶导数公式",
      "md": "$$(x^n)^{(n)}=n!,\\qquad (x^n)^{(k)}=\\frac{n!}{(n-k)!}x^{n-k}\\ (k\\le n)$$\n$$(e^{ax})^{(n)}=a^n e^{ax},\\qquad (a^x)^{(n)}=a^x(\\ln a)^n$$\n$$(\\sin x)^{(n)}=\\sin\\!\\Bigl(x+\\frac{n\\pi}{2}\\Bigr),\\qquad (\\cos x)^{(n)}=\\cos\\!\\Bigl(x+\\frac{n\\pi}{2}\\Bigr)$$\n$$(\\sin ax)^{(n)}=a^n\\sin\\!\\Bigl(ax+\\frac{n\\pi}{2}\\Bigr)$$\n$$(\\ln x)^{(n)}=\\frac{(-1)^{n-1}(n-1)!}{x^n},\\qquad \\Bigl(\\frac1x\\Bigr)^{(n)}=\\frac{(-1)^n n!}{x^{n+1}}$$\n\n**莱布尼茨公式**\n$$(uv)^{(n)}=\\sum_{k=0}^{n}\\binom{n}{k}u^{(k)}v^{(n-k)}$$\n【考点】求乘积的高阶导数；当其中一个因子是低次多项式（如 $x^2$）时只需展开前几项。"
     },
     {
      "id": "g0-c1-s3",
      "title": "2.3 隐函数与参数方程求导",
      "md": "- **隐函数** $F(x,y)=0$：$\\dfrac{dy}{dx}=-\\dfrac{F_x}{F_y}$。\n- **参数方程** $x=\\varphi(t),\\,y=\\psi(t)$：\n$$\\frac{dy}{dx}=\\frac{\\psi'(t)}{\\varphi'(t)},\\qquad \\frac{d^2y}{dx^2}=\\frac{\\psi''(t)\\varphi'(t)-\\psi'(t)\\varphi''(t)}{[\\varphi'(t)]^3}$$\n- **对数求导法**：$y=u(x)^{v(x)}$ 时取对数 $\\ln y=v\\ln u$ 再求导。\n- **反函数求导**：$\\dfrac{dx}{dy}=\\dfrac{1}{y'}$。\n\n【考点】参数方程二阶导是易错点，务必除以 $\\varphi'$ 再求导。"
     },
     {
      "id": "g0-c1-s4",
      "title": "2.4 曲率与曲率半径",
      "md": "$$K=\\frac{|y''|}{(1+y'^2)^{3/2}},\\qquad R=\\frac1K=\\frac{(1+y'^2)^{3/2}}{|y''|}$$\n参数方程：$K=\\dfrac{|x'y''-y'x''|}{(x'^2+y'^2)^{3/2}}$。\n\n【考点】填空常考曲率半径；$y''=0$ 处曲率为 0（直线）。"
     },
     {
      "id": "g0-c1-s5",
      "title": "2.5 微分与线性近似",
      "md": "$$dy=f'(x)\\,dx,\\qquad f(x_0+\\Delta x)\\approx f(x_0)+f'(x_0)\\Delta x$$\n一阶微分形式不变性：$dy=f'(u)\\,du$，不论 $u$ 是自变量还是中间变量。\n\n【考点】近似计算 $f(x)\\approx f(0)+f'(0)x$（$|x|$ 很小）。\n\n---"
     }
    ]
   },
   {
    "id": "g0-c2",
    "title": "3. 微分中值定理",
    "sections": [
     {
      "id": "g0-c2-s1",
      "title": "3.1 三大中值定理",
      "md": "**费马引理**：$x_0$ 为极值点且可导 $\\Rightarrow f'(x_0)=0$。\n\n**罗尔定理**：$f$ 在 $[a,b]$ 连续、$(a,b)$ 可导、$f(a)=f(b)$，则 $\\exists\\xi\\in(a,b)$，$f'(\\xi)=0$。\n\n**拉格朗日中值定理**：$f$ 在 $[a,b]$ 连续、$(a,b)$ 可导，则\n$$f(b)-f(a)=f'(\\xi)(b-a),\\quad \\xi\\in(a,b)$$\n\n**柯西中值定理**：$f,g$ 在 $[a,b]$ 连续、$(a,b)$ 可导且 $g'(x)\\ne0$，则\n$$\\frac{f(b)-f(a)}{g(b)-g(a)}=\\frac{f'(\\xi)}{g'(\\xi)},\\quad \\xi\\in(a,b)$$\n\n**泰勒中值定理**（拉格朗日余项）：$f$ 在含 $x_0$ 的区间有 $n+1$ 阶导数，则\n$$f(x)=\\sum_{k=0}^{n}\\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k+\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1}$$\n\n**达布定理**：若 $f$ 在 $[a,b]$ 可导，则 $f'$ 具有介值性（导函数取到 $f'(a)$ 与 $f'(b)$ 之间的一切值）。\n\n【考点】达布定理说明「导函数无第一类间断点」。"
     },
     {
      "id": "g0-c2-s2",
      "title": "3.2 常考证明构造技巧",
      "md": "- **证 $f'(\\xi)=0$**：用罗尔，构造原函数 $F$ 使 $F(a)=F(b)$（如对结论变形找原函数）。\n- **证含 $\\xi$ 的等式**：把结论改写为 $\\dfrac{f'(\\xi)}{g'(\\xi)}=\\dfrac{\\cdots}{\\cdots}$ 的形式 → 柯西；或写成 $f'(\\xi)+\\lambda f(\\xi)=0$ → 构造 $F(x)=e^{\\lambda x}f(x)$ 用罗尔。\n- **证 $f^{(n)}(\\xi)=0$**：反复用罗尔或对 $f$ 用泰勒。\n- **\"至少存在一点\"与\"存在两点 $\\xi,\\eta$\"**：两点常需分别在两个子区间用拉格朗日再联立。\n- **构造辅助函数**：见到 $f'(\\xi)=k$ 令 $F(x)=f(x)-kx$；见到 $f'(\\xi)g(\\xi)-f(\\xi)g'(\\xi)=0$ 令 $F=f/g$；见到 $f'(\\xi)+\\xi f(\\xi)$ 令 $F=e^{x^2/2}f(x)$。\n\n【考点】中值定理证明题核心是\"由结论反推辅助函数\"。\n\n---"
     }
    ]
   },
   {
    "id": "g0-c3",
    "title": "4. 积分",
    "sections": [
     {
      "id": "g0-c3-s1",
      "title": "4.1 不定积分基本表",
      "md": "$$\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+C\\ (n\\ne-1),\\qquad \\int\\frac{dx}{x}=\\ln|x|+C$$\n$$\\int e^x dx=e^x+C,\\qquad \\int a^x dx=\\frac{a^x}{\\ln a}+C$$\n$$\\int\\sin x\\,dx=-\\cos x+C,\\qquad \\int\\cos x\\,dx=\\sin x+C$$\n$$\\int\\sec^2 x\\,dx=\\tan x+C,\\qquad \\int\\csc^2 x\\,dx=-\\cot x+C$$\n$$\\int\\sec x\\tan x\\,dx=\\sec x+C,\\qquad \\int\\csc x\\cot x\\,dx=-\\csc x+C$$\n$$\\int\\tan x\\,dx=-\\ln|\\cos x|+C,\\qquad \\int\\cot x\\,dx=\\ln|\\sin x|+C$$\n$$\\int\\sec x\\,dx=\\ln|\\sec x+\\tan x|+C,\\qquad \\int\\csc x\\,dx=\\ln|\\csc x-\\cot x|+C$$\n$$\\int\\frac{dx}{a^2+x^2}=\\frac1a\\arctan\\frac xa+C,\\qquad \\int\\frac{dx}{x^2-a^2}=\\frac{1}{2a}\\ln\\Bigl|\\frac{x-a}{x+a}\\Bigr|+C$$\n$$\\int\\frac{dx}{\\sqrt{a^2-x^2}}=\\arcsin\\frac xa+C,\\qquad \\int\\frac{dx}{\\sqrt{x^2+a^2}}=\\ln\\bigl(x+\\sqrt{x^2+a^2}\\bigr)+C$$\n$$\\int\\frac{dx}{\\sqrt{x^2-a^2}}=\\ln\\bigl|x+\\sqrt{x^2-a^2}\\bigr|+C$$\n$$\\int\\sqrt{a^2-x^2}\\,dx=\\frac x2\\sqrt{a^2-x^2}+\\frac{a^2}{2}\\arcsin\\frac xa+C$$\n$$\\int\\sqrt{x^2+a^2}\\,dx=\\frac x2\\sqrt{x^2+a^2}+\\frac{a^2}{2}\\ln\\bigl(x+\\sqrt{x^2+a^2}\\bigr)+C$$\n$$\\int\\ln x\\,dx=x\\ln x-x+C,\\qquad \\int\\arctan x\\,dx=x\\arctan x-\\frac12\\ln(1+x^2)+C$$\n$$\\int\\frac{dx}{x^2+a^2}\\ \\text{变体};\\qquad \\int\\frac{x\\,dx}{x^2\\pm a^2}=\\frac12\\ln|x^2\\pm a^2|+C$$\n\n【考点】积分表是全部积分计算的地基。"
     },
     {
      "id": "g0-c3-s2",
      "title": "4.2 常用积分技巧",
      "md": "- **第一换元（凑微分）**：$\\int f(\\varphi(x))\\varphi'(x)\\,dx=\\int f(u)\\,du$。\n- **第二换元**：\n  - $\\sqrt{a^2-x^2}$ 令 $x=a\\sin t$；\n  - $\\sqrt{a^2+x^2}$ 令 $x=a\\tan t$；\n  - $\\sqrt{x^2-a^2}$ 令 $x=a\\sec t$；\n  - 含 $\\sqrt[n]{ax+b}$ 令 $t=\\sqrt[n]{ax+b}$。\n- **分部积分**：$\\displaystyle\\int u\\,dv=uv-\\int v\\,du$。优先级口诀「反对幂指三」（反三角、对数、幂、指数、三角，前者作 $u$）。\n- **有理函数积分**：先假分式化真分式，再部分分式分解为 $\\dfrac{A}{x-a}$、$\\dfrac{A}{(x-a)^k}$、$\\dfrac{Bx+C}{x^2+px+q}$ 三类。\n- **三角有理式**：万能代换 $t=\\tan\\dfrac x2$，则 $\\sin x=\\dfrac{2t}{1+t^2}$，$\\cos x=\\dfrac{1-t^2}{1+t^2}$，$dx=\\dfrac{2}{1+t^2}dt$。若 $R(-\\sin,\\cos)=-R$ 令 $u=\\cos x$；$R(\\sin,-\\cos)=-R$ 令 $u=\\sin x$；$R(-\\sin,-\\cos)=R$ 令 $u=\\tan x$。\n\n【考点】换元与分部是积分题两大主干；三角有理式优先考虑奇偶性化简而非万能代换。"
     },
     {
      "id": "g0-c3-s3",
      "title": "4.3 定积分性质与变限积分",
      "md": "- 线性、区间可加：$\\int_a^b=\\int_a^c+\\int_c^b$。\n- 保号性：$f\\ge g\\Rightarrow\\int_a^b f\\ge\\int_a^b g$（$a<b$）。\n- 估值：$m(b-a)\\le\\int_a^b f\\le M(b-a)$。\n- 积分中值定理：$f$ 连续则 $\\int_a^b f\\,dx=f(\\xi)(b-a)$。\n- **变限积分求导**：\n$$\\Phi(x)=\\int_{a}^{x}f(t)\\,dt\\Rightarrow\\Phi'(x)=f(x)$$\n$$\\frac{d}{dx}\\int_{\\psi(x)}^{\\varphi(x)}f(t)\\,dt=f(\\varphi(x))\\varphi'(x)-f(\\psi(x))\\psi'(x)$$\n【考点】变限积分求导是必考；被积函数含 $x$ 时先换元把 $x$ 移出积分号。\n\n**定积分常用性质**\n$$\\int_a^b f(x)\\,dx=\\int_a^b f(a+b-x)\\,dx$$\n$$\\int_{-a}^{a}f(x)\\,dx=\\begin{cases}2\\int_0^a f(x)dx,& f\\text{ 偶}\\\\ 0,& f\\text{ 奇}\\end{cases}$$\n$$\\int_0^{\\pi}xf(\\sin x)\\,dx=\\frac{\\pi}{2}\\int_0^{\\pi}f(\\sin x)\\,dx$$\n$$\\int_0^{\\pi/2}\\sin^n x\\,dx=\\int_0^{\\pi/2}\\cos^n x\\,dx\\quad(\\text{点火公式，见第四节})$$\n\n【考点】对称区间利用奇偶性；$\\int_0^\\pi xf(\\sin x)$ 是经典结论。"
     },
     {
      "id": "g0-c3-s4",
      "title": "4.4 反常积分收敛判别（p 积分）",
      "md": "- **无穷限**：$\\displaystyle\\int_1^{+\\infty}\\frac{1}{x^p}\\,dx$ 当 $p>1$ **收敛**，$p\\le1$ 发散。\n- **瑕积分**（瑕点在 $a$）：$\\displaystyle\\int_0^{1}\\frac{1}{x^p}\\,dx$ 当 $p<1$ **收敛**，$p\\ge1$ 发散。\n- **比较判别法**：$0\\le f\\le g$，$\\int g$ 收敛 $\\Rightarrow\\int f$ 收敛；$\\int f$ 发散 $\\Rightarrow\\int g$ 发散。\n- **极限形式**：$\\lim\\limits_{x\\to+\\infty}x^p f(x)=A$（$0<A<\\infty$）时，$\\int_1^\\infty f$ 与 $\\int_1^\\infty\\dfrac{dx}{x^p}$ 同敛散。\n\n【考点】判断敛散性时用 p 积分作\"标尺\"；混合型（无穷限+瑕点）需拆开分别判断。"
     },
     {
      "id": "g0-c3-s5",
      "title": "4.5 定积分的几何应用（含物理）",
      "md": "设平面曲线 $y=f(x)\\ge0$，$x\\in[a,b]$。\n\n**面积**\n$$S=\\int_a^b|f(x)|\\,dx,\\qquad S=\\int_a^b|y_2(x)-y_1(x)|\\,dx$$\n极坐标：$S=\\dfrac12\\int_\\alpha^\\beta r^2(\\theta)\\,d\\theta$。\n\n**旋转体体积**\n- 绕 $x$ 轴：$V_x=\\pi\\displaystyle\\int_a^b y^2\\,dx$；\n- 绕 $y$ 轴（柱壳法）：$V_y=2\\pi\\displaystyle\\int_a^b x\\,y\\,dx$；\n- 两曲线间绕 $x$ 轴：$V_x=\\pi\\displaystyle\\int_a^b|y_1^2-y_2^2|\\,dx$。\n\n**绕任意直线 $Ax+By+C=0$ 旋转（万能公式）**\n$$V=2\\pi\\iint_D r(x,y)\\,dx\\,dy,\\qquad r=\\frac{|Ax+By+C|}{\\sqrt{A^2+B^2}}$$\n即体积 = $2\\pi\\times$(图形面积) $\\times$(形心到轴距离)（帕普斯定理）。\n\n**弧长**\n$$s=\\int_a^b\\sqrt{1+y'^2}\\,dx\\ \\ (\\text{直角}),\\qquad s=\\int_\\alpha^\\beta\\sqrt{r^2+r'^2}\\,d\\theta\\ \\ (\\text{极坐标})$$\n$$s=\\int_\\alpha^\\beta\\sqrt{x'(t)^2+y'(t)^2}\\,dt\\ \\ (\\text{参数})$$\n\n**旋转曲面侧面积**（绕 $x$ 轴）\n$$S=2\\pi\\int_a^b|y|\\sqrt{1+y'^2}\\,dx,\\qquad S=2\\pi\\int_\\alpha^\\beta|y(t)|\\sqrt{x'^2+y'^2}\\,dt$$\n极坐标绕极轴：$S=2\\pi\\displaystyle\\int_\\alpha^\\beta r\\sin\\theta\\sqrt{r^2+r'^2}\\,d\\theta$。\n\n**形心（质心）**\n$$\\bar x=\\frac{\\int_a^b x f(x)\\,dx}{\\int_a^b f(x)\\,dx},\\qquad \\bar y=\\frac{\\frac12\\int_a^b f^2(x)\\,dx}{\\int_a^b f(x)\\,dx}$$\n\n**转动惯量**（绕 $x$ 轴，线密度 $\\rho$）\n$$I_x=\\int_a^b y^2\\rho\\,ds;\\qquad \\text{平面薄片 }I_x=\\iint_D y^2\\rho\\,dx\\,dy,\\ I_y=\\iint_D x^2\\rho\\,dx\\,dy$$\n\n**曲率**：$K=\\dfrac{|y''|}{(1+y'^2)^{3/2}}$（详见 §2.4）。\n\n【考点】绕 $y$ 轴与绕任意直线用柱壳/帕普斯最快；旋转侧面积必乘 $2\\pi|y|$。\n\n---"
     }
    ]
   },
   {
    "id": "g0-c4",
    "title": "5. 多元函数微分学",
    "sections": [
     {
      "id": "g0-c4-s1",
      "title": "5.1 偏导数、全微分与可微性",
      "md": "- 偏导：$f_x=\\lim\\limits_{\\Delta x\\to0}\\dfrac{f(x+\\Delta x,y)-f(x,y)}{\\Delta x}$。\n- 全微分：$dz=f_x\\,dx+f_y\\,dy$。\n- **可微的必要条件**：偏导存在且 $f(x,y)=f(x_0,y_0)+f_x\\Delta x+f_y\\Delta y+o(\\rho)$，$\\rho=\\sqrt{\\Delta x^2+\\Delta y^2}$。\n- **充分条件**：偏导数在点附近连续 $\\Rightarrow$ 可微。\n\n【考点】\"偏导连续 ⇒ 可微 ⇒ 偏导存在\"，反之均不成立；判定可微用定义求极限 $\\dfrac{\\Delta z-f_x\\Delta x-f_y\\Delta y}{\\rho}\\to0$。"
     },
     {
      "id": "g0-c4-s2",
      "title": "5.2 复合函数与隐函数求导",
      "md": "- **全导数**：$z=f(u,v)$，$u=u(t),v=v(t)$：$\\dfrac{dz}{dt}=\\dfrac{\\partial f}{\\partial u}\\dfrac{du}{dt}+\\dfrac{\\partial f}{\\partial v}\\dfrac{dv}{dt}$。\n- **链式法则**：$z=f(u,v)$，$u=u(x,y),v=v(x,y)$：$\\dfrac{\\partial z}{\\partial x}=\\dfrac{\\partial f}{\\partial u}\\dfrac{\\partial u}{\\partial x}+\\dfrac{\\partial f}{\\partial v}\\dfrac{\\partial v}{\\partial x}$。\n- **隐函数** $F(x,y,z)=0$：$\\dfrac{\\partial z}{\\partial x}=-\\dfrac{F_x}{F_z}$，$\\dfrac{\\partial z}{\\partial y}=-\\dfrac{F_y}{F_z}$。\n- 方程组隐函数用雅可比行列式求导。\n\n【考点】抽象函数求二阶偏导注意项数与链式。"
     },
     {
      "id": "g0-c4-s3",
      "title": "5.3 方向导数与梯度",
      "md": "$$\\frac{\\partial f}{\\partial l}=f_x\\cos\\alpha+f_y\\cos\\beta+f_z\\cos\\gamma=\\nabla f\\cdot \\vec e_l$$\n$$\\nabla f=(f_x,f_y,f_z),\\qquad |\\nabla f|=\\sqrt{f_x^2+f_y^2+f_z^2}$$\n\n【考点】方向导数最大值为 $|\\nabla f|$，方向即梯度方向；梯度垂直于等值线（面）。"
     },
     {
      "id": "g0-c4-s4",
      "title": "5.4 空间曲线切线与法平面",
      "md": "曲线 $\\vec r(t)=(x(t),y(t),z(t))$ 在 $t_0$ 处切向量 $\\vec T=(x'(t_0),y'(t_0),z'(t_0))$。\n- 切线：$\\dfrac{x-x_0}{x'}=\\dfrac{y-y_0}{y'}=\\dfrac{z-z_0}{z'}$。\n- 法平面：$x'(x-x_0)+y'(y-y_0)+z'(z-z_0)=0$。\n\n若曲线由 $\\begin{cases}F(x,y,z)=0\\\\ G(x,y,z)=0\\end{cases}$ 给出，切向量为两法向量叉乘 $\\nabla F\\times\\nabla G$。"
     },
     {
      "id": "g0-c4-s5",
      "title": "5.5 曲面切平面与法线",
      "md": "- 曲面 $F(x,y,z)=0$：法向量 $\\vec n=(F_x,F_y,F_z)$（在 $P_0$ 取值）。\n  - 切平面：$F_x(x-x_0)+F_y(y-y_0)+F_z(z-z_0)=0$。\n  - 法线：$\\dfrac{x-x_0}{F_x}=\\dfrac{y-y_0}{F_y}=\\dfrac{z-z_0}{F_z}$。\n- 曲面 $z=f(x,y)$：法向量 $(f_x,f_y,-1)$，切平面 $z-z_0=f_x(x-x_0)+f_y(y-y_0)$。"
     },
     {
      "id": "g0-c4-s6",
      "title": "5.6 极值与条件极值",
      "md": "- **无条件极值必要条件**：可导且取极值 $\\Rightarrow f_x=f_y=0$（驻点）。\n- **充分条件**：设 $A=f_{xx},B=f_{xy},C=f_{yy}$ 于驻点，$\\Delta=AC-B^2$。\n  - $\\Delta>0$：$A>0$ 极小，$A<0$ 极大；\n  - $\\Delta<0$：非极值（鞍点）；\n  - $\\Delta=0$：不确定。\n- **条件极值（拉格朗日乘数法）**：求 $f$ 在约束 $\\varphi(x,y)=0$ 下的极值，令\n$$L(x,y,\\lambda)=f(x,y)+\\lambda\\varphi(x,y)$$\n解 $\\dfrac{\\partial L}{\\partial x}=\\dfrac{\\partial L}{\\partial y}=\\dfrac{\\partial L}{\\partial\\lambda}=0$。多约束用多个乘子。\n\n【考点】闭区域最值：内部驻点 + 边界（化为条件极值或代入）比较。\n\n---"
     }
    ]
   },
   {
    "id": "g0-c5",
    "title": "6. 重积分",
    "sections": [
     {
      "id": "g0-c5-s1",
      "title": "6.1 二重积分",
      "md": "- 直角坐标（X 型）：$\\displaystyle\\iint_D f\\,dx\\,dy=\\int_a^b dx\\int_{y_1(x)}^{y_2(x)}f\\,dy$。\n- **换序**：画出积分区域，改写积分限（$X$ 型 ↔ $Y$ 型）。\n- 极坐标：$dx\\,dy=r\\,dr\\,d\\theta$，\n$$\\iint_D f\\,dx\\,dy=\\int_{\\alpha}^{\\beta}d\\theta\\int_{r_1(\\theta)}^{r_2(\\theta)}f(r\\cos\\theta,r\\sin\\theta)\\,r\\,dr$$"
     },
     {
      "id": "g0-c5-s2",
      "title": "6.2 三重积分",
      "md": "- 直角坐标（投影法 / 截面法）：\n$$\\iiint_\\Omega f\\,dv=\\iint_{D_{xy}}dx\\,dy\\int_{z_1(x,y)}^{z_2(x,y)}f\\,dz$$\n- 柱面坐标：$x=r\\cos\\theta,\\ y=r\\sin\\theta,\\ z=z$，$dv=r\\,dr\\,d\\theta\\,dz$。\n- 球面坐标：$x=r\\sin\\varphi\\cos\\theta,\\ y=r\\sin\\varphi\\sin\\theta,\\ z=r\\cos\\varphi$，$dv=r^2\\sin\\varphi\\,dr\\,d\\varphi\\,d\\theta$。\n\n【考点】出现 $x^2+y^2$ 想柱面；出现 $x^2+y^2+z^2$ 想球面。"
     },
     {
      "id": "g0-c5-s3",
      "title": "6.3 对称性与轮换对称性",
      "md": "- **普通对称性**：区域关于 $x=0$ 对称，若 $f$ 对 $x$ 为奇函数则积分为 0；为偶函数则等于 2 倍半区域积分。\n- **轮换对称性**：区域对 $x,y,z$ 轮换不变时，\n$$\\iiint_\\Omega f(x,y,z)\\,dv=\\iiint_\\Omega f(y,z,x)\\,dv=\\iiint_\\Omega f(z,x,y)\\,dv$$\n由此 $\\displaystyle\\iiint_\\Omega x^2\\,dv=\\iiint_\\Omega y^2\\,dv=\\iiint_\\Omega z^2\\,dv$。\n\n【考点】轮换对称常把 $\\iint(x^2+y^2)$ 化为 $2\\iint x^2$，大幅简化。"
     },
     {
      "id": "g0-c5-s4",
      "title": "6.4 形心与转动惯量（平面薄片，密度 ρ）",
      "md": "$$\\bar x=\\frac{\\iint_D x\\rho\\,dx\\,dy}{\\iint_D \\rho\\,dx\\,dy},\\qquad \\bar y=\\frac{\\iint_D y\\rho\\,dx\\,dy}{\\iint_D \\rho\\,dx\\,dy}$$\n$$I_x=\\iint_D y^2\\rho\\,dx\\,dy,\\qquad I_y=\\iint_D x^2\\rho\\,dx\\,dy,\\qquad I_O=I_x+I_y$$\n\n【考点】形心公式即质心公式；均匀薄片 $\\rho$ 可约去。\n\n---"
     }
    ]
   },
   {
    "id": "g0-c6",
    "title": "7. 曲线积分与曲面积分",
    "sections": [
     {
      "id": "g0-c6-s1",
      "title": "7.1 第一类曲线积分（对弧长）",
      "md": "$$\\int_L f(x,y)\\,ds=\\int_\\alpha^\\beta f(x(t),y(t))\\sqrt{x'^2+y'^2}\\,dt$$\n【考点】$ds>0$，与方向无关（换向不变号）。"
     },
     {
      "id": "g0-c6-s2",
      "title": "7.2 第二类曲线积分（对坐标）",
      "md": "$$\\int_L P\\,dx+Q\\,dy=\\int_\\alpha^\\beta\\bigl[P x'(t)+Q y'(t)\\bigr]dt$$\n【考点】与方向有关，反向变号。"
     },
     {
      "id": "g0-c6-s3",
      "title": "7.3 格林公式",
      "md": "设 $L$ 是区域 $D$ 的正向（逆时针）边界，$P,Q$ 有连续偏导：\n$$\\oint_L P\\,dx+Q\\,dy=\\iint_D\\Bigl(\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}\\Bigr)dx\\,dy$$\n- **与路径无关的等价条件**（单连通区域）：$\\dfrac{\\partial P}{\\partial y}=\\dfrac{\\partial Q}{\\partial x}$ ⟺ $\\oint_L Pdx+Qdy=0$ ⟺ 存在 $u$ 使 $du=Pdx+Qdy$。\n- **补线技巧**：$L$ 非闭或 $D$ 内有奇点（如原点）时，补辅助线（常为小圆）成闭曲线再用格林，注意挖去奇点。\n\n【考点】格林公式是平面第二类曲线积分的主武器；路径无关时可用原函数 $u$ 求值。"
     },
     {
      "id": "g0-c6-s4",
      "title": "7.4 第一类曲面积分（对面积）",
      "md": "$$\\iint_\\Sigma f\\,dS=\\iint_{D_{xy}}f(x,y,z(x,y))\\sqrt{1+z_x^2+z_y^2}\\,dx\\,dy$$\n【考点】$dS>0$，与侧无关。"
     },
     {
      "id": "g0-c6-s5",
      "title": "7.5 第二类曲面积分（对坐标）",
      "md": "$$\\iint_\\Sigma R\\,dx\\,dy=\\pm\\iint_{D_{xy}}R(x,y,z(x,y))\\,dx\\,dy$$\n（上侧取 $+$，下侧取 $-$）。合一投影法：$\\iint P\\,dy\\,dz+Q\\,dz\\,dx+R\\,dx\\,dy=\\iint_\\Sigma(P\\cos\\alpha+Q\\cos\\beta+R\\cos\\gamma)\\,dS$。"
     },
     {
      "id": "g0-c6-s6",
      "title": "7.6 高斯公式（散度定理）",
      "md": "设 $\\Sigma$ 是空间闭区域 $\\Omega$ 的外侧边界：\n$$\\oiint_\\Sigma P\\,dy\\,dz+Q\\,dz\\,dx+R\\,dx\\,dy=\\iiint_\\Omega\\Bigl(\\frac{\\partial P}{\\partial x}+\\frac{\\partial Q}{\\partial y}+\\frac{\\partial R}{\\partial z}\\Bigr)dv$$\n- **补面技巧**：$\\Sigma$ 非闭或原点为奇点时，补面（如小半球、平面）成闭曲面再用高斯，再减去补面部分。\n\n【考点】高斯公式处理闭曲面第二类曲面积分；不闭就补面，有奇点就挖去。"
     },
     {
      "id": "g0-c6-s7",
      "title": "7.7 斯托克斯公式",
      "md": "设 $\\Gamma$ 是曲面 $\\Sigma$ 的正向边界：\n$$\\oint_\\Gamma P\\,dx+Q\\,dy+R\\,dz=\\iint_\\Sigma\\begin{vmatrix}dydz & dzdx & dxdy\\\\ \\dfrac{\\partial}{\\partial x} & \\dfrac{\\partial}{\\partial y} & \\dfrac{\\partial}{\\partial z}\\\\ P & Q & R\\end{vmatrix}=\\iint_\\Sigma(\\nabla\\times\\vec F)\\cdot\\vec n\\,dS$$\n\n【考点】空间闭曲线的第二类曲线积分化为曲面积分；旋度 $\\nabla\\times\\vec F$。\n\n**三类\"补\"技巧速记**：补线（格林）、补面（高斯）、化曲为直（斯托克斯）。\n\n---"
     }
    ]
   },
   {
    "id": "g0-c7",
    "title": "8. 无穷级数",
    "sections": [
     {
      "id": "g0-c7-s1",
      "title": "8.1 正项级数判别法",
      "md": "- **比较判别法**：$0\\le a_n\\le b_n$，$\\sum b_n$ 收敛 $\\Rightarrow\\sum a_n$ 收敛。\n- **比较的极限形式**：$\\lim\\dfrac{a_n}{b_n}=l$（$0<l<\\infty$）则同敛散。\n- **比值判别法（达朗贝尔）**：$\\lim\\dfrac{a_{n+1}}{a_n}=\\rho$，$\\rho<1$ 收敛，$\\rho>1$ 发散，$\\rho=1$ 失效。\n- **根值判别法（柯西）**：$\\lim\\sqrt[n]{a_n}=\\rho$，同上。\n- **积分判别法**：$f$ 非负连续递减，$\\sum f(n)$ 与 $\\int_1^\\infty f(x)dx$ 同敛散。\n\n**常用基准级数**\n- p 级数 $\\sum\\dfrac1{n^p}$：$p>1$ 收敛，$p\\le1$ 发散；\n- 几何级数 $\\sum aq^n$：$|q|<1$ 收敛；\n- $\\sum\\dfrac{1}{n(\\ln n)^p}$：$p>1$ 收敛。\n\n【考点】先看通项是否趋于 0（不趋于 0 必发散），再选比值/根值/比较。"
     },
     {
      "id": "g0-c7-s2",
      "title": "8.2 交错级数与绝对/条件收敛",
      "md": "- **莱布尼茨判别法**：交错级数 $\\sum(-1)^{n-1}u_n$（$u_n>0$），若 $u_n$ 单调递减且 $\\lim u_n=0$，则收敛，且余项 $|R_n|\\le u_{n+1}$。\n- **绝对收敛**：$\\sum|a_n|$ 收敛 $\\Rightarrow\\sum a_n$ 收敛。\n- **条件收敛**：$\\sum a_n$ 收敛但 $\\sum|a_n|$ 发散（如 $\\sum\\dfrac{(-1)^{n-1}}{n}$）。\n\n【考点】任意项级数先判绝对值（用正项判别法）；若 $\\sum|a_n|$ 发散再单独判 $\\sum a_n$。"
     },
     {
      "id": "g0-c7-s3",
      "title": "8.3 幂级数",
      "md": "- **收敛半径**：$R=\\lim\\limits_{n\\to\\infty}\\Bigl|\\dfrac{a_n}{a_{n+1}}\\Bigr|$（或 $R=\\dfrac{1}{\\lim\\sqrt[n]{|a_n|}}$）。\n- 在 $(x_0-R,x_0+R)$ 内绝对收敛，端点单独讨论。\n- **和函数**：逐项求导/积分（收敛半径不变，端点可能变化），求和后再还原。\n- **阿贝尔定理**：收敛点内绝对收敛，发散点外发散。\n\n**常用幂级数展开**\n$$\\frac{1}{1-x}=\\sum_{n=0}^\\infty x^n\\ (|x|<1),\\qquad \\frac{1}{1+x}=\\sum_{n=0}^\\infty(-1)^n x^n\\ (|x|<1)$$\n$$e^x=\\sum_{n=0}^\\infty\\frac{x^n}{n!}\\ (-\\infty<x<\\infty)$$\n$$\\ln(1+x)=\\sum_{n=1}^\\infty\\frac{(-1)^{n-1}}{n}x^n\\ (-1<x\\le1)$$\n$$\\sin x=\\sum_{n=0}^\\infty\\frac{(-1)^n x^{2n+1}}{(2n+1)!},\\qquad \\cos x=\\sum_{n=0}^\\infty\\frac{(-1)^n x^{2n}}{(2n)!}$$\n$$\\arctan x=\\sum_{n=0}^\\infty\\frac{(-1)^n}{2n+1}x^{2n+1}\\ (|x|\\le1)$$\n$$\\frac{1}{1+x^2}=\\sum_{n=0}^\\infty(-1)^n x^{2n},\\qquad (1+x)^a=1+\\sum_{n=1}^\\infty\\frac{a(a-1)\\cdots(a-n+1)}{n!}x^n$$\n\n【考点】幂级数求和常把通项凑成 $\\sum\\dfrac{x^n}{n}$、$\\sum nx^n$ 等已知形式，用逐项积分/求导。"
     },
     {
      "id": "g0-c7-s4",
      "title": "8.4 傅里叶级数",
      "md": "**狄利克雷收敛定理**：设 $f$ 以 $2l$ 为周期，在 $[-l,l]$ 上连续或只有有限个第一类间断点，且只有有限个极值点，则其傅里叶级数收敛，且\n$$\\frac{f(x^-)+f(x^+)}{2}=S(x)$$\n（连续点收敛到 $f(x)$，间断点收敛到左右极限平均）。\n\n**傅里叶系数（周期 $2l$）**\n$$a_n=\\frac1l\\int_{-l}^{l}f(x)\\cos\\frac{n\\pi x}{l}\\,dx\\ (n=0,1,2,\\dots),\\qquad b_n=\\frac1l\\int_{-l}^{l}f(x)\\sin\\frac{n\\pi x}{l}\\,dx$$\n$$f(x)=\\frac{a_0}{2}+\\sum_{n=1}^\\infty\\Bigl(a_n\\cos\\frac{n\\pi x}{l}+b_n\\sin\\frac{n\\pi x}{l}\\Bigr)$$\n\n周期 $2\\pi$：$a_n=\\dfrac1\\pi\\int_{-\\pi}^{\\pi}f\\cos nx\\,dx$，$b_n=\\dfrac1\\pi\\int_{-\\pi}^{\\pi}f\\sin nx\\,dx$。\n\n- **奇函数**：$a_n=0$，只含正弦项 → 正弦级数（$b_n=\\dfrac2l\\int_0^l f\\sin\\dfrac{n\\pi x}{l}dx$）。\n- **偶函数**：$b_n=0$，只含余弦项 → 余弦级数（$a_n=\\dfrac2l\\int_0^l f\\cos\\dfrac{n\\pi x}{l}dx$）。\n- **周期延拓**：定义在 $[0,l]$ 的函数可奇延拓（正弦级数）或偶延拓（余弦级数）。\n\n【考点】间断点处级数收敛到左右极限平均值；常用 $\\sum\\dfrac1{n^2}=\\dfrac{\\pi^2}{6}$ 等由傅里叶级数导出。\n\n---"
     }
    ]
   },
   {
    "id": "g0-c8",
    "title": "9. 微分方程",
    "sections": [
     {
      "id": "g0-c8-s1",
      "title": "9.1 一阶微分方程",
      "md": "| 类型 | 形式 | 解法 |\n|---|---|---|\n| 可分离变量 | $\\dfrac{dy}{dx}=f(x)g(y)$ | $\\displaystyle\\int\\dfrac{dy}{g(y)}=\\int f(x)dx$ |\n| 齐次 | $\\dfrac{dy}{dx}=\\varphi\\bigl(\\dfrac yx\\bigr)$ | 令 $u=y/x$，$y=ux$ |\n| 一阶线性 | $y'+P(x)y=Q(x)$ | $y=e^{-\\int P dx}\\Bigl(\\int Q e^{\\int P dx}dx+C\\Bigr)$ |\n| 伯努利 | $y'+P y=Q y^n$ | 令 $z=y^{1-n}$ 化为一阶线性 |\n| 全微分方程 | $P dx+Q dy=0$，$P_y=Q_x$ | 存在 $u$ 使 $du=0$，$u(x,y)=C$ |\n\n**一阶线性通解公式**（必须背）：\n$$y=e^{-\\int P(x)dx}\\left[\\int Q(x)e^{\\int P(x)dx}dx+C\\right]$$\n\n**全微分方程**：当 $\\dfrac{\\partial P}{\\partial y}=\\dfrac{\\partial Q}{\\partial x}$ 时，$u(x,y)=\\int_{x_0}^{x}P\\,dx+\\int_{y_0}^{y}Q\\,dy=C$。\n\n【考点】识别方程类型是第一步；伯努利换元后别忘回代。"
     },
     {
      "id": "g0-c8-s2",
      "title": "9.2 可降阶的二阶方程",
      "md": "| 形式 | 换元 |\n|---|---|\n| $y''=f(x)$ | 两次积分 |\n| $y''=f(x,y')$（不含 $y$） | 令 $p=y'$，$y''=p'$ |\n| $y''=f(y,y')$（不含 $x$） | 令 $p=y'$，$y''=p\\dfrac{dp}{dy}$ |"
     },
     {
      "id": "g0-c8-s3",
      "title": "9.3 二阶常系数线性方程",
      "md": "**齐次** $y''+py'+qy=0$，特征方程 $r^2+pr+q=0$：\n- 两不等实根 $r_1,r_2$：$y=C_1e^{r_1x}+C_2e^{r_2x}$；\n- 重根 $r$：$y=(C_1+C_2x)e^{rx}$；\n- 共轭复根 $\\alpha\\pm\\beta i$：$y=e^{\\alpha x}(C_1\\cos\\beta x+C_2\\sin\\beta x)$。\n\n**非齐次** $y''+py'+qy=f(x)$，通解 = 齐次通解 + 一个特解 $y^*$。\n\n**待定系数法特解形式表**\n\n| $f(x)$ 形式 | 特解设法（$k$ = $\\lambda$ 作为特征根的重数，$0/1/2$） |\n|---|---|\n| $P_m(x)$ | $y^*=x^k Q_m(x)$ |\n| $P_m(x)e^{\\lambda x}$ | $y^*=x^k Q_m(x)e^{\\lambda x}$ |\n| $e^{\\lambda x}\\bigl[A\\cos\\omega x+B\\sin\\omega x\\bigr]$ | $y^*=x^k e^{\\lambda x}\\bigl[a\\cos\\omega x+b\\sin\\omega x\\bigr]$，$\\lambda\\pm\\omega i$ 为特征根时 $k=1$ |\n| 一般 $P_m e^{\\lambda x}\\cos\\omega x + Q_n e^{\\lambda x}\\sin\\omega x$ | $y^*=x^k e^{\\lambda x}\\bigl[R_l\\cos\\omega x+S_l\\sin\\omega x\\bigr]$，$l=\\max(m,n)$ |\n\n其中 $Q_m(x)$ 为待定的 $m$ 次多项式。\n\n【考点】\"$k$ 取几\"由 $\\lambda$（或 $\\lambda\\pm\\omega i$）是否为特征根及重数决定；叠加原理可用于多个右端项。"
     },
     {
      "id": "g0-c8-s4",
      "title": "9.4 欧拉方程（数一）",
      "md": "$$x^2y''+pxy'+qy=f(x)$$\n令 $x=e^t$（$t=\\ln x$），则 $xy'=\\dfrac{dy}{dt}$，$x^2y''=\\dfrac{d^2y}{dt^2}-\\dfrac{dy}{dt}$，化为常系数线性方程。\n\n【考点】变量代换把变系数化为常系数。"
     },
     {
      "id": "g0-c8-s5",
      "title": "9.5 差分方程（数三）",
      "md": "- 一阶常系数：$y_{t+1}-ay_t=f(t)$。\n  - 齐次通解 $y_t=Ca^t$；\n  - $f(t)=P_m(t)$ 且 $a\\ne1$：特解 $y_t^*=Q_m(t)$；$a=1$：$y_t^*=tQ_m(t)$。\n- 二阶常系数：$y_{t+2}+py_{t+1}+qy_t=f(t)$，特征方程 $\\lambda^2+p\\lambda+q=0$，解法类似常微分。\n\n【考点】数三差分方程考基础型；$a=1$ 时特解乘 $t$。\n\n---"
     }
    ]
   },
   {
    "id": "g0-c9",
    "title": "10. 经济应用（数三）",
    "sections": [
     {
      "id": "g0-c9-s0",
      "title": "10. 经济应用（数三）",
      "md": "- **边际**：边际成本 $MC=C'(q)$，边际收益 $MR=R'(q)$，边际利润 $ML=L'(q)=R'(q)-C'(q)$。\n- **弹性**：需求价格弹性 $E=\\dfrac{dQ}{dP}\\cdot\\dfrac{P}{Q}$（取绝对值 $\\eta$）；供给弹性同理。\n  - $|E|>1$ 富有弹性，$|E|<1$ 缺乏弹性，$|E|=1$ 单位弹性。\n- **成本 / 收益 / 利润**：$L(q)=R(q)-C(q)$。\n- **最值**：利润最大 $\\iff MR=MC$ 且 $ML$ 由正变负。\n- **复利**：终值 $FV=PV(1+r)^n$，连续复利 $FV=PV\\,e^{rn}$。\n\n【考点】看到\"边际\"就求导，看到\"弹性\"就套 $\\dfrac{dQ}{dP}\\cdot\\dfrac PQ$，利润最大令 $MR=MC$。\n\n---"
     }
    ]
   }
  ]
 },
 {
  "id": "g1",
  "title": "二、线性代数",
  "chapters": [
   {
    "id": "g1-c0",
    "title": "1. 行列式",
    "sections": [
     {
      "id": "g1-c0-s1",
      "title": "1.1 基本性质",
      "md": "- $|A^T|=|A|$；$|kA|=k^n|A|$（$n$ 阶）；$|AB|=|A||B|$。\n- 交换两行（列）变号；某行乘 $k$ 则行列式乘 $k$；两行成比例则行列式为 0。\n- 某行加上另一行的 $k$ 倍，行列式不变。\n- $|A^{-1}|=\\dfrac{1}{|A|}$；$|A^*|=|A|^{n-1}$；$|A|=|A|$ 的转置、伴随等关系。\n- 分块三角：$\\begin{vmatrix}A & C\\\\ O & B\\end{vmatrix}=|A||B|$。\n\n【考点】行列式计算先做初等变换化成三角形。"
     },
     {
      "id": "g1-c0-s2",
      "title": "1.2 展开定理与特殊行列式",
      "md": "- 按行展开：$|A|=\\sum_{j=1}^n a_{ij}A_{ij}$（$A_{ij}=(-1)^{i+j}M_{ij}$ 代数余子式）。\n- 异行展开为 0：$\\sum_{j}a_{ij}A_{kj}=0$（$i\\ne k$）。\n- **范德蒙德行列式**：\n$$V_n=\\begin{vmatrix}1&1&\\cdots&1\\\\ x_1&x_2&\\cdots&x_n\\\\ \\vdots&&&\\vdots\\\\ x_1^{n-1}&x_2^{n-1}&\\cdots&x_n^{n-1}\\end{vmatrix}=\\prod_{1\\le i<j\\le n}(x_j-x_i)$$\n- 上（下）三角、对角行列式 = 主对角线元素之积。\n\n【考点】范德蒙德是填空题常客；含参数行列式用因式分解。"
     },
     {
      "id": "g1-c0-s3",
      "title": "1.3 克拉默法则",
      "md": "对 $n$ 元线性方程组 $A\\vec x=\\vec b$，若 $|A|\\ne0$，则唯一解\n$$x_j=\\frac{|A_j|}{|A|}\\quad(j=1,\\dots,n)$$\n其中 $A_j$ 是把 $A$ 第 $j$ 列换成 $\\vec b$ 所得矩阵。\n\n【考点】克拉默法则只适用于 $|A|\\ne0$；理论推导用得多，实际计算少用。"
     }
    ]
   },
   {
    "id": "g1-c1",
    "title": "2. 矩阵",
    "sections": [
     {
      "id": "g1-c1-s1",
      "title": "2.1 运算与转置",
      "md": "- $(AB)^T=B^TA^T$，$(A+B)^T=A^T+B^T$，$(kA)^T=kA^T$。\n- $(AB)^{-1}=B^{-1}A^{-1}$，$(A^T)^{-1}=(A^{-1})^T$。\n- 注意 $AB\\ne BA$ 一般不成立；$AB=O\\not\\Rightarrow A=O$ 或 $B=O$。"
     },
     {
      "id": "g1-c1-s2",
      "title": "2.2 逆矩阵与伴随矩阵",
      "md": "$$A^{-1}=\\frac{1}{|A|}A^*,\\qquad AA^*=A^*A=|A|E$$\n伴随矩阵性质（$A$ 为 $n$ 阶）：\n- $|A^*|=|A|^{n-1}$；\n- $(A^*)^{-1}=(A^{-1})^*=\\dfrac{A}{|A|}$；\n- $(AB)^*=B^*A^*$；$(A^*)^*=|A|^{n-2}A$；\n- $(A^T)^*=(A^*)^T$；\n- **秩关系**：\n$$r(A^*)=\\begin{cases}n,& r(A)=n\\\\ 1,& r(A)=n-1\\\\ 0,& r(A)<n-1\\end{cases}$$\n\n【考点】$r(A)=n-1$ 时 $r(A^*)=1$ 是高频结论。"
     },
     {
      "id": "g1-c1-s3",
      "title": "2.3 分块矩阵",
      "md": "$$\\begin{pmatrix}A&O\\\\O&B\\end{pmatrix}^{-1}=\\begin{pmatrix}A^{-1}&O\\\\O&B^{-1}\\end{pmatrix},\\qquad \\begin{pmatrix}A&C\\\\O&B\\end{pmatrix}^{-1}=\\begin{pmatrix}A^{-1}&-A^{-1}CB^{-1}\\\\O&B^{-1}\\end{pmatrix}$$\n$$\\begin{pmatrix}O&A\\\\B&O\\end{pmatrix}^{-1}=\\begin{pmatrix}O&B^{-1}\\\\A^{-1}&O\\end{pmatrix}$$\n行列式：$\\begin{vmatrix}A&O\\\\O&B\\end{vmatrix}=|A||B|$。"
     },
     {
      "id": "g1-c1-s4",
      "title": "2.4 初等变换与初等矩阵",
      "md": "- 对 $A$ 左乘初等矩阵 = 行变换；右乘 = 列变换。\n- 初等矩阵均可逆，逆仍为初等矩阵。\n- 求逆：$(A\\mid E)\\xrightarrow{\\text{行变换}}(E\\mid A^{-1})$。\n- 矩阵等价 $\\iff$ 同型且秩相等 $\\iff$ 存在可逆 $P,Q$ 使 $PAQ=B$。\n\n【考点】初等变换不改变秩；求逆、求秩、解方程组都靠它。"
     },
     {
      "id": "g1-c1-s5",
      "title": "2.5 矩阵的秩",
      "md": "**定义**：矩阵中非零子式的最高阶数；也等于行（列）向量组的秩。\n\n**重要不等式与等式**\n$$r(A)\\le\\min(m,n)$$\n$$r(A+B)\\le r(A)+r(B)$$\n$$r(AB)\\le\\min\\{r(A),r(B)\\}$$\n$$r(AB)\\ge r(A)+r(B)-n\\quad(\\text{西尔维斯特不等式，}A:m\\times n,\\ B:n\\times s)$$\n$$r(A)=r(A^T)=r(A^TA)=r(AA^T)$$\n$$AB=O\\Rightarrow r(A)+r(B)\\le n\\ (A:m\\times n)$$\n**Frobenius 不等式**：$r(ABC)\\ge r(AB)+r(BC)-r(B)$。\n\n【考点】$r(A)=r(A^TA)$ 常用于证齐次方程组；$AB=O$ 的秩不等式是常考点。"
     }
    ]
   },
   {
    "id": "g1-c2",
    "title": "3. 线性方程组与向量组",
    "sections": [
     {
      "id": "g1-c2-s1",
      "title": "3.1 线性相关与线性表示",
      "md": "- 向量组 $\\alpha_1,\\dots,\\alpha_s$ 线性相关 $\\iff$ 齐次方程组 $(\\alpha_1,\\dots,\\alpha_s)x=0$ 有非零解 $\\iff r<s$。\n- 线性无关 $\\iff r=s$。\n- $\\beta$ 可由 $\\alpha_1,\\dots,\\alpha_s$ 线性表示 $\\iff r(\\alpha_1,\\dots,\\alpha_s)=r(\\alpha_1,\\dots,\\alpha_s,\\beta)$。\n- **极大线性无关组**：向量组中线性无关且能表示其余向量的部分组；其向量个数 = 向量组的秩。\n\n【考点】\"表示\"问题用增广矩阵秩比较；相关/无关用秩判定。"
     },
     {
      "id": "g1-c2-s2",
      "title": "3.2 解的结构",
      "md": "**齐次方程组 $Ax=0$**（$A$ 为 $m\\times n$）：\n- 有非零解 $\\iff r(A)<n$；仅有零解 $\\iff r(A)=n$。\n- 基础解系含 $n-r(A)$ 个向量；通解 $x=k_1\\xi_1+\\cdots+k_{n-r}\\xi_{n-r}$。\n\n**非齐次 $Ax=b$**：\n- 有解 $\\iff r(A)=r(A,b)$；唯一解 $\\iff r(A)=r(A,b)=n$；无穷多解 $\\iff r(A)=r(A,b)<n$。\n- 通解 = 特解 + 齐次通解：$x=\\eta^*+k_1\\xi_1+\\cdots+k_{n-r}\\xi_{n-r}$。\n\n【考点】解方程组三步：判秩→求基础解系→写通解。"
     }
    ]
   },
   {
    "id": "g1-c3",
    "title": "4. 特征值与特征向量",
    "sections": [
     {
      "id": "g1-c3-s1",
      "title": "4.1 定义与性质",
      "md": "$A\\xi=\\lambda\\xi$（$\\xi\\ne0$）；特征方程 $|\\lambda E-A|=0$。\n\n- $n$ 阶矩阵有 $n$ 个特征值（含重数）；特征值之和 $\\sum\\lambda_i=\\operatorname{tr}(A)$，之积 $\\prod\\lambda_i=|A|$。\n- $A$ 可逆 $\\iff$ 所有 $\\lambda_i\\ne0$。\n- 若 $\\lambda$ 是 $A$ 的特征值，$\\xi$ 是对应特征向量：\n  - $A^k$ 的特征值为 $\\lambda^k$；\n  - $f(A)$（多项式）的特征值为 $f(\\lambda)$；\n  - $A^{-1}$ 特征值 $\\dfrac1\\lambda$；$A^*$ 特征值 $\\dfrac{|A|}{\\lambda}$；\n  - $A^T$ 与 $A$ 特征值相同。\n- 不同特征值对应的特征向量线性无关。"
     },
     {
      "id": "g1-c3-s2",
      "title": "4.2 相似与对角化",
      "md": "- $A\\sim B$：存在可逆 $P$ 使 $P^{-1}AP=B$；相似矩阵有相同特征值、相同迹、相同行列式、相同秩。\n- **可对角化条件**：$n$ 阶矩阵 $A$ 可对角化 $\\iff$ 有 $n$ 个线性无关的特征向量 $\\iff$ 每个特征值的几何重数 = 代数重数。\n- 充分条件：$A$ 有 $n$ 个**互异**特征值 $\\Rightarrow$ 可对角化。\n- **实对称矩阵必可对角化**：存在**正交矩阵** $Q$ 使 $Q^{-1}AQ=Q^TAQ=\\Lambda$（正交对角化）；特征值全为实数，不同特征值的特征向量相互正交。\n\n【考点】实对称矩阵\"一定\"可正交对角化；一般矩阵需检验几何重数。"
     },
     {
      "id": "g1-c3-s3",
      "title": "4.3 常见结论",
      "md": "- $A\\sim B\\Rightarrow A^k\\sim B^k$，$f(A)\\sim f(B)$。\n- $A$ 可对角化时 $A^k=P\\Lambda^k P^{-1}$，用于算高次幂。\n- 秩 1 矩阵 $A=\\alpha\\beta^T$：特征值为 $\\beta^T\\alpha$ 与 $0,\\dots,0$（$n-1$ 个）；$A^k=(\\beta^T\\alpha)^{k-1}A$。※\n- $r(A)=1\\Rightarrow \\operatorname{tr}(A)$ 为唯一非零特征值。"
     }
    ]
   },
   {
    "id": "g1-c4",
    "title": "5. 二次型",
    "sections": [
     {
      "id": "g1-c4-s1",
      "title": "5.1 标准形与规范形",
      "md": "二次型 $f(x)=x^TAx$（$A$ 对称）。经可逆线性变换 $x=Cy$ 化为标准形：\n$$f=\\lambda_1y_1^2+\\lambda_2y_2^2+\\cdots+\\lambda_ny_n^2$$\n- **配方法**、**正交变换法**（$C$ 取正交矩阵，$\\lambda_i$ 为 $A$ 的特征值）。\n- **规范形**：只含 $+1,-1,0$ 的系数，形式唯一。"
     },
     {
      "id": "g1-c4-s2",
      "title": "5.2 惯性定理",
      "md": "二次型的标准形中正系数个数（正惯性指数 $p$）、负系数个数（负惯性指数 $q$）由二次型唯一确定，与所作可逆变换无关。$p+q=r(A)$。\n\n**合同**：$A\\simeq B$ $\\iff$ 存在可逆 $C$ 使 $C^TAC=B$ $\\iff$ 有相同的正、负惯性指数。实对称矩阵合同的充要条件是正负惯性指数相同。"
     },
     {
      "id": "g1-c4-s3",
      "title": "5.3 正定判定",
      "md": "$n$ 元二次型 $f=x^TAx$ **正定**的等价条件（$A$ 实对称）：\n1. 对任意 $x\\ne0$，$f(x)>0$；\n2. 正惯性指数 $p=n$（即所有特征值 $>0$）；\n3. 各阶**顺序主子式**全 $>0$；\n4. 存在可逆 $C$ 使 $A=C^TC$；\n5. $A$ 与 $E$ 合同。\n\n**负定**：$-A$ 正定；特征值全 $<0$；奇数阶顺序主子式 $<0$、偶数阶 $>0$。\n\n【考点】正定判定优先用顺序主子式（计算量小）或特征值；实对称是前提。\n\n---"
     }
    ]
   }
  ]
 },
 {
  "id": "g2",
  "title": "三、概率论与数理统计",
  "chapters": [
   {
    "id": "g2-c0",
    "title": "1. 概率基本公式",
    "sections": [
     {
      "id": "g2-c0-s0",
      "title": "1. 概率基本公式",
      "md": "- **加法**：$P(A\\cup B)=P(A)+P(B)-P(AB)$；$P(A\\cup B\\cup C)=P(A)+P(B)+P(C)-P(AB)-P(AC)-P(BC)+P(ABC)$。\n- **条件概率**：$P(A\\mid B)=\\dfrac{P(AB)}{P(B)}$（$P(B)>0$）。\n- **乘法**：$P(AB)=P(A)P(B\\mid A)=P(B)P(A\\mid B)$。\n- **全概率公式**：$B_1,\\dots,B_n$ 为完备事件组，\n$$P(A)=\\sum_{i=1}^n P(B_i)P(A\\mid B_i)$$\n- **贝叶斯公式**：\n$$P(B_i\\mid A)=\\frac{P(B_i)P(A\\mid B_i)}{\\sum_{j=1}^n P(B_j)P(A\\mid B_j)}$$\n\n【考点】已知\"结果\"求\"原因\"用贝叶斯；已知各原因导致结果的概率求结果概率用全概率。"
     }
    ]
   },
   {
    "id": "g2-c1",
    "title": "2. 独立性与伯努利概型",
    "sections": [
     {
      "id": "g2-c1-s0",
      "title": "2. 独立性与伯努利概型",
      "md": "- **独立**：$P(AB)=P(A)P(B)$；$A,B$ 独立则 $A$ 与 $\\bar B$、$\\bar A$ 与 $\\bar B$ 也独立。\n- **伯努利概型**：$n$ 重独立试验，每次成功概率 $p$，则成功 $k$ 次的概率\n$$P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$$\n\n【考点】\"至少一次\"用对立事件 $1-(1-p)^n$。"
     }
    ]
   },
   {
    "id": "g2-c2",
    "title": "3. 一维随机变量分布",
    "sections": [
     {
      "id": "g2-c2-s1",
      "title": "3.1 分布函数与密度",
      "md": "- 分布函数 $F(x)=P(X\\le x)$：单调不减、右连续，$F(-\\infty)=0,F(+\\infty)=1$。\n- 离散型：$P(X=x_k)=p_k$，$F(x)=\\sum_{x_k\\le x}p_k$。\n- 连续型：$F(x)=\\int_{-\\infty}^{x}f(t)dt$，$f(x)=F'(x)$；$P(a<X\\le b)=F(b)-F(a)$。"
     },
     {
      "id": "g2-c2-s2",
      "title": "3.2 常见分布表",
      "md": "| 分布 | 记号 | 分布律 / 密度 | $E(X)$ | $D(X)$ |\n|---|---|---|---|---|\n| 0-1 分布 | $B(1,p)$ | $P(X=1)=p$ | $p$ | $p(1-p)$ |\n| 二项分布 | $B(n,p)$ | $\\binom nk p^k(1-p)^{n-k}$ | $np$ | $np(1-p)$ |\n| 泊松分布 | $P(\\lambda)$ | $\\dfrac{\\lambda^k}{k!}e^{-\\lambda}$ | $\\lambda$ | $\\lambda$ |\n| 几何分布 | $G(p)$ | $(1-p)^{k-1}p$ | $\\dfrac1p$ | $\\dfrac{1-p}{p^2}$ |\n| 超几何分布 | $H(N,M,n)$ | $\\dfrac{\\binom Mk\\binom{N-M}{n-k}}{\\binom Nn}$ | $\\dfrac{nM}{N}$ | — |\n| 均匀分布 | $U(a,b)$ | $\\dfrac{1}{b-a}$ | $\\dfrac{a+b}{2}$ | $\\dfrac{(b-a)^2}{12}$ |\n| 指数分布 | $E(\\lambda)$ | $\\lambda e^{-\\lambda x}\\,(x>0)$ | $\\dfrac1\\lambda$ | $\\dfrac1{\\lambda^2}$ |\n| 正态分布 | $N(\\mu,\\sigma^2)$ | $\\dfrac{1}{\\sqrt{2\\pi}\\sigma}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$ | $\\mu$ | $\\sigma^2$ |\n\n**正态性质**：\n- 标准化：$X\\sim N(\\mu,\\sigma^2)\\Rightarrow\\dfrac{X-\\mu}{\\sigma}\\sim N(0,1)$。\n- 线性组合仍正态：$aX+b\\sim N(a\\mu+b,a^2\\sigma^2)$；独立正态和 $X+Y\\sim N(\\mu_1+\\mu_2,\\sigma_1^2+\\sigma_2^2)$。\n- $P(a<X<b)=\\Phi\\!\\bigl(\\frac{b-\\mu}{\\sigma}\\bigr)-\\Phi\\!\\bigl(\\frac{a-\\mu}{\\sigma}\\bigr)$；$\\Phi(-x)=1-\\Phi(x)$。\n\n**指数分布无记忆性**：$P(X>s+t\\mid X>s)=P(X>t)$。※\n\n【考点】期望方差表必须背；正态标准化是万能钥匙。"
     },
     {
      "id": "g2-c2-s3",
      "title": "3.3 随机变量函数的分布",
      "md": "- 离散型：逐点求 $Y=g(X)$ 的取值与概率。\n- 连续型：\n  - **分布函数法**（万能）：先求 $F_Y(y)=P(g(X)\\le y)$ 再求导。\n  - **公式法**：$g$ 单调可导，$f_Y(y)=f_X(h(y))|h'(y)|$，$h=g^{-1}$。\n\n【考点】非单调 $g$ 必须用分布函数法；正态的线性函数仍正态。"
     }
    ]
   },
   {
    "id": "g2-c3",
    "title": "4. 二维随机变量",
    "sections": [
     {
      "id": "g2-c3-s1",
      "title": "4.1 联合、边缘与条件分布",
      "md": "- 联合分布函数 $F(x,y)=P(X\\le x,Y\\le y)$。\n- 边缘：$f_X(x)=\\displaystyle\\int_{-\\infty}^{\\infty}f(x,y)dy$，$f_Y(y)=\\displaystyle\\int_{-\\infty}^{\\infty}f(x,y)dx$。\n- 条件密度：$f_{X\\mid Y}(x\\mid y)=\\dfrac{f(x,y)}{f_Y(y)}$。\n- 条件分布函数/条件期望定义类似。"
     },
     {
      "id": "g2-c3-s2",
      "title": "4.2 独立性判定",
      "md": "$X,Y$ 独立 $\\iff F(x,y)=F_X(x)F_Y(y)\\iff f(x,y)=f_X(x)f_Y(y)$（几乎处处）。\n离散：$p_{ij}=p_{i\\cdot}p_{\\cdot j}$。\n\n【考点】找一处 $p_{ij}\\ne p_{i\\cdot}p_{\\cdot j}$ 即可判不独立。"
     },
     {
      "id": "g2-c3-s3",
      "title": "4.3 常见二维分布",
      "md": "- **二维均匀分布**：在区域 $D$ 上 $f(x,y)=\\dfrac{1}{S_D}$。\n- **二维正态分布** $N(\\mu_1,\\mu_2,\\sigma_1^2,\\sigma_2^2,\\rho)$：边缘仍正态；$\\rho=0\\iff$ 独立（正态特有）。"
     },
     {
      "id": "g2-c3-s4",
      "title": "4.4 协方差与相关系数",
      "md": "$$\\operatorname{Cov}(X,Y)=E(XY)-E(X)E(Y)$$\n$$\\rho_{XY}=\\frac{\\operatorname{Cov}(X,Y)}{\\sqrt{D(X)D(Y)}},\\qquad |\\rho_{XY}|\\le1$$\n- $D(X\\pm Y)=D(X)+D(Y)\\pm2\\operatorname{Cov}(X,Y)$。\n- $\\operatorname{Cov}(X,Y)=0\\iff$ 不相关；**独立 $\\Rightarrow$ 不相关，反之不一定**（正态例外）。\n- $\\rho=\\pm1\\iff$ $X,Y$ 以概率 1 线性相关。\n\n【考点】\"不相关\"与\"独立\"的区别是高频陷阱。"
     }
    ]
   },
   {
    "id": "g2-c4",
    "title": "5. 数字特征",
    "sections": [
     {
      "id": "g2-c4-s1",
      "title": "5.1 期望与方差性质",
      "md": "- $E(aX+bY+c)=aE(X)+bE(Y)+c$（线性，无需独立）。\n- 独立时 $E(XY)=E(X)E(Y)$。\n- $D(X)=E(X^2)-[E(X)]^2$。\n- $D(aX+b)=a^2D(X)$；$D(X\\pm Y)=D(X)+D(Y)\\pm2\\operatorname{Cov}(X,Y)$。\n- 独立时 $D(X\\pm Y)=D(X)+D(Y)$。\n- $E(X^2)=D(X)+[E(X)]^2$。※"
     },
     {
      "id": "g2-c4-s2",
      "title": "5.2 常用分布的 E/D",
      "md": "见 §3.2 表。"
     },
     {
      "id": "g2-c4-s3",
      "title": "5.3 切比雪夫不等式",
      "md": "$$P\\{|X-E(X)|\\ge\\varepsilon\\}\\le\\frac{D(X)}{\\varepsilon^2},\\qquad P\\{|X-E(X)|<\\varepsilon\\}\\ge1-\\frac{D(X)}{\\varepsilon^2}$$\n\n【考点】不要求具体分布即可估计概率界。"
     }
    ]
   },
   {
    "id": "g2-c5",
    "title": "6. 大数定律与中心极限定理",
    "sections": [
     {
      "id": "g2-c5-s0",
      "title": "6. 大数定律与中心极限定理",
      "md": "- **切比雪夫大数定律**：独立、方差一致有界，则 $\\dfrac1n\\sum X_i\\xrightarrow{P}E(\\bar X)$。\n- **辛钦大数定律**：独立同分布且 $E(X_i)=\\mu$ 存在，则 $\\dfrac1n\\sum X_i\\xrightarrow{P}\\mu$。\n- **伯努利大数定律**：频率依概率收敛于概率。\n- **中心极限定理（列维-林德伯格）**：独立同分布、$E(X_i)=\\mu,D(X_i)=\\sigma^2$，则\n$$\\frac{\\sum_{i=1}^n X_i-n\\mu}{\\sqrt{n}\\sigma}\\xrightarrow{d}N(0,1)$$\n- **棣莫弗-拉普拉斯**：二项分布 $B(n,p)$ 当 $n$ 大时近似正态 $N(np,np(1-p))$。\n\n【考点】\"大量独立随机变量之和近似正态\"；用标准化 + $\\Phi$ 查表。"
     }
    ]
   },
   {
    "id": "g2-c6",
    "title": "7. 数理统计基础",
    "sections": [
     {
      "id": "g2-c6-s1",
      "title": "7.1 样本与统计量",
      "md": "- 样本均值 $\\bar X=\\dfrac1n\\sum X_i$，$E(\\bar X)=\\mu$，$D(\\bar X)=\\dfrac{\\sigma^2}{n}$。\n- 样本方差 $S^2=\\dfrac{1}{n-1}\\sum(X_i-\\bar X)^2$，$E(S^2)=\\sigma^2$。\n- 样本 $k$ 阶原点矩 $A_k=\\dfrac1n\\sum X_i^k$。"
     },
     {
      "id": "g2-c6-s2",
      "title": "7.2 三大抽样分布",
      "md": "设 $X_i\\sim N(0,1)$ 独立：\n- **$\\chi^2$ 分布**：$\\chi^2=\\sum_{i=1}^n X_i^2\\sim\\chi^2(n)$，$E=n$，$D=2n$。\n- **$t$ 分布**：$t=\\dfrac{X}{\\sqrt{Y/n}}$，$X\\sim N(0,1)$，$Y\\sim\\chi^2(n)$，$Y$ 独立于 $X$，则 $t\\sim t(n)$。\n- **$F$ 分布**：$F=\\dfrac{Y_1/n_1}{Y_2/n_2}$，$Y_i\\sim\\chi^2(n_i)$ 独立，则 $F\\sim F(n_1,n_2)$；且 $\\dfrac{1}{F}\\sim F(n_2,n_1)$。\n\n**正态总体抽样定理**（$X_i\\sim N(\\mu,\\sigma^2)$）：\n$$\\frac{(n-1)S^2}{\\sigma^2}\\sim\\chi^2(n-1),\\qquad \\frac{\\bar X-\\mu}{S/\\sqrt n}\\sim t(n-1)$$\n$$\\frac{\\bar X-\\mu}{\\sigma/\\sqrt n}\\sim N(0,1)\\ (\\sigma\\text{ 已知})$$\n$\\bar X$ 与 $S^2$ 相互独立。\n\n【考点】分位数 $\\chi^2_\\alpha(n),t_\\alpha(n),F_\\alpha(n_1,n_2)$ 查表；构造统计量是区间估计与假设检验的基础。"
     }
    ]
   },
   {
    "id": "g2-c7",
    "title": "8. 参数估计",
    "sections": [
     {
      "id": "g2-c7-s1",
      "title": "8.1 矩估计与极大似然估计",
      "md": "- **矩估计**：令样本矩 = 总体矩，解出参数。$E(X)=\\bar X$，$E(X^2)=A_2$ 等。\n- **极大似然估计**：\n  1. 写似然函数 $L(\\theta)=\\prod f(x_i;\\theta)$（或 $\\prod p(x_i;\\theta)$）；\n  2. 取对数 $\\ln L$；\n  3. 令 $\\dfrac{d\\ln L}{d\\theta}=0$ 求驻点。\n  - 若 $L$ 关于 $\\theta$ 单调，则取边界值。\n\n【考点】似然函数连乘→取对数→求导；含指示函数的分布取边界。"
     },
     {
      "id": "g2-c7-s2",
      "title": "8.2 估计量评价",
      "md": "- **无偏性**：$E(\\hat\\theta)=\\theta$。\n- **有效性**：两个无偏估计中方差更小者更有效。\n- **一致性（相合性）**：$\\hat\\theta\\xrightarrow{P}\\theta$（$n\\to\\infty$）。"
     },
     {
      "id": "g2-c7-s3",
      "title": "8.3 区间估计（单正态总体）",
      "md": "| 待估参数 | 条件 | 置信区间（置信度 $1-\\alpha$） |\n|---|---|---|\n| $\\mu$ | $\\sigma^2$ 已知 | $\\Bigl(\\bar X\\pm z_{\\alpha/2}\\dfrac{\\sigma}{\\sqrt n}\\Bigr)$ |\n| $\\mu$ | $\\sigma^2$ 未知 | $\\Bigl(\\bar X\\pm t_{\\alpha/2}(n-1)\\dfrac{S}{\\sqrt n}\\Bigr)$ |\n| $\\sigma^2$ | $\\mu$ 未知 | $\\Bigl(\\dfrac{(n-1)S^2}{\\chi^2_{\\alpha/2}(n-1)},\\ \\dfrac{(n-1)S^2}{\\chi^2_{1-\\alpha/2}(n-1)}\\Bigr)$ |\n\n【考点】$\\sigma$ 已知用 $z$，未知用 $t$；方差的区间用 $\\chi^2$。"
     }
    ]
   },
   {
    "id": "g2-c8",
    "title": "9. 假设检验（单正态总体）",
    "sections": [
     {
      "id": "g2-c8-s1",
      "title": "9.1 两类错误",
      "md": "- **第一类错误（弃真）**：$H_0$ 真却拒绝，概率 $\\alpha$（显著性水平）。\n- **第二类错误（取伪）**：$H_0$ 假却接受，概率 $\\beta$。"
     },
     {
      "id": "g2-c8-s2",
      "title": "9.2 检验统计量与拒绝域",
      "md": "**均值 $\\mu$ 的检验**（$H_0:\\mu=\\mu_0$，双侧）：\n\n| 条件 | 检验统计量 | 拒绝域 |\n|---|---|---|\n| $\\sigma^2$ 已知（U 检验） | $U=\\dfrac{\\bar X-\\mu_0}{\\sigma/\\sqrt n}\\sim N(0,1)$ | $\\lvert U\\rvert>z_{\\alpha/2}$ |\n| $\\sigma^2$ 未知（t 检验） | $t=\\dfrac{\\bar X-\\mu_0}{S/\\sqrt n}\\sim t(n-1)$ | $\\lvert t\\rvert>t_{\\alpha/2}(n-1)$ |\n\n**方差 $\\sigma^2$ 的检验**（$H_0:\\sigma^2=\\sigma_0^2$，$\\mu$ 未知）：\n$$\\chi^2=\\frac{(n-1)S^2}{\\sigma_0^2}\\sim\\chi^2(n-1),\\qquad \\text{拒绝域 } \\chi^2<\\chi^2_{1-\\alpha/2}\\ \\text{或}\\ \\chi^2>\\chi^2_{\\alpha/2}$$\n单侧检验把 $\\alpha/2$ 换成 $\\alpha$。\n\n【考点】先写 $H_0,H_1$，选统计量，定拒绝域，代入判断；单侧与双侧拒绝域不同。\n\n---"
     }
    ]
   }
  ]
 },
 {
  "id": "g3",
  "title": "四、二级结论 / 多级结论（重点）",
  "chapters": [
   {
    "id": "g3-c0",
    "title": "1. 极限与泰勒类二级结论",
    "sections": [
     {
      "id": "g3-c0-s0",
      "title": "1. 极限与泰勒类二级结论",
      "md": "- ※ **等价无穷小\"三级表\"**（$x\\to0$）：\n$$x-\\sin x\\sim\\frac{x^3}{6},\\quad \\tan x-x\\sim\\frac{x^3}{3},\\quad \\arcsin x-x\\sim\\frac{x^3}{6},\\quad x-\\arctan x\\sim\\frac{x^3}{3},\\quad \\tan x-\\sin x\\sim\\frac{x^3}{2}$$\n【考点】分子含这些\"抵消\"结构时直接得阶数。\n\n- ※ **$1^\\infty$ 型速算**：若 $\\lim u=1,\\lim v=\\infty$，则 $\\lim u^v=e^{\\lim v(u-1)}$。\n- ※ **$\\infty-\\infty$ 型**先通分或有理化，再判阶。\n- **常用麦克劳林推论**：\n$$\\ln\\frac{\\sin x}{x}\\sim-\\frac{x^2}{6},\\qquad \\cos x-1\\sim-\\frac{x^2}{2},\\qquad e^x-1-x\\sim\\frac{x^2}{2}$$\n- ※ **斯特林公式**（数列极限）：$n!\\sim\\sqrt{2\\pi n}\\Bigl(\\dfrac ne\\Bigr)^n$。\n- ※ **数列极限速算**：$\\lim\\sqrt[n]{n}=1$，$\\lim\\sqrt[n]{a}=1\\ (a>0)$，$\\lim\\dfrac{\\ln n}{n}=0$。"
     }
    ]
   },
   {
    "id": "g3-c1",
    "title": "2. 积分类二级结论",
    "sections": [
     {
      "id": "g3-c1-s0",
      "title": "2. 积分类二级结论",
      "md": "- ※ **点火公式（华里士 / Wallis）**：\n$$I_n=\\int_0^{\\pi/2}\\sin^n x\\,dx=\\int_0^{\\pi/2}\\cos^n x\\,dx=\\begin{cases}\\dfrac{(n-1)!!}{n!!}\\cdot\\dfrac{\\pi}{2},& n\\text{ 为偶数}\\\\[2mm]\\dfrac{(n-1)!!}{n!!},& n\\text{ 为奇数}\\end{cases}$$\n其中 $n!!$ 为双阶乘。递推：$I_n=\\dfrac{n-1}{n}I_{n-2}$，$I_0=\\dfrac\\pi2,\\ I_1=1$。\n【考点】出现 $\\int_0^{\\pi/2}\\sin^n x$ 直接用，秒杀。\n\n- ※ **推广**：$\\displaystyle\\int_0^{\\pi}\\sin^n x\\,dx=2I_n$（$n$ 为偶数）；$\\displaystyle\\int_0^{2\\pi}\\sin^n x\\,dx=4I_n$（$n$ 偶）。\n- ※ **$\\int_0^\\pi xf(\\sin x)dx=\\dfrac\\pi2\\int_0^\\pi f(\\sin x)dx$**。\n- ※ **$\\int_0^{a}f(x)dx=\\int_0^a f(a-x)dx$**（区间翻转对称）。\n- **分部积分速记**（\"反对幂指三\"优先级）：反三角 > 对数 > 幂 > 指数 > 三角，前者取作 $u$。"
     }
    ]
   },
   {
    "id": "g3-c2",
    "title": "3. 旋转体 / 几何二级结论",
    "sections": [
     {
      "id": "g3-c2-s0",
      "title": "3. 旋转体 / 几何二级结论",
      "md": "- ※ **帕普斯-古尔丁定理**：\n  - 旋转体体积 $V=2\\pi\\bar d\\cdot S$（$\\bar d$ = 形心到轴距离，$S$ = 平面图形面积）；\n  - 旋转曲面面积 $A=2\\pi\\bar d\\cdot L$（$L$ = 曲线弧长）。\n【考点】已知形心时秒算旋转体体积/面积。\n\n- ※ **绕 $y$ 轴柱壳法** $V_y=2\\pi\\displaystyle\\int_a^b xy\\,dx$。\n- ※ **旋转体侧面积** $S=2\\pi\\displaystyle\\int_a^b|y|\\sqrt{1+y'^2}dx$（绕 $x$ 轴）。\n- **形心公式**：$\\bar x=\\dfrac{\\int x f}{\\int f}$，$\\bar y=\\dfrac{\\frac12\\int f^2}{\\int f}$。\n- **曲率半径** $R=\\dfrac{(1+y'^2)^{3/2}}{|y''|}$。"
     }
    ]
   },
   {
    "id": "g3-c3",
    "title": "4. 线性代数二级结论",
    "sections": [
     {
      "id": "g3-c3-s0",
      "title": "4. 线性代数二级结论",
      "md": "- ※ **特征值关系**：$\\operatorname{tr}(A)=\\sum\\lambda_i$，$|A|=\\prod\\lambda_i$，$\\sum\\lambda_i^2=\\operatorname{tr}(A^2)$。\n- ※ **$A^k$ 特征值为 $\\lambda^k$**，$f(A)$ 特征值为 $f(\\lambda)$，$A^{-1}$ 为 $1/\\lambda$，$A^*$ 为 $|A|/\\lambda$。\n- ※ **秩 1 矩阵** $A=\\alpha\\beta^T$：$\\lambda_{\\max}=\\beta^T\\alpha$，其余为 0；$A^k=(\\beta^T\\alpha)^{k-1}A$。\n- ※ **$A$ 可对角化 $\\iff$ 每个特征值几何重数 = 代数重数**；有 $n$ 个互异特征值必可对角化。\n- ※ **实对称矩阵**：必可正交对角化；特征值全实；不同特征值的特征向量正交。\n- ※ **$r(A)=r(A^TA)=r(AA^T)$**；$AB=O\\Rightarrow r(A)+r(B)\\le n$。\n- ※ **$r(A^*)$**：$r(A)=n\\Rightarrow n$，$r(A)=n-1\\Rightarrow1$，$r(A)<n-1\\Rightarrow0$。\n- ※ **$|A^*|=|A|^{n-1}$**；$(A^*)^{-1}=A/|A|$。\n- ※ **正定判定**：特征值全正 $\\iff$ 顺序主子式全正 $\\iff$ 正惯性指数 $=n$。\n- ※ **$A\\sim B\\Rightarrow$ 同迹、同行列式、同秩、同特征值**（反之不成立）。"
     }
    ]
   },
   {
    "id": "g3-c4",
    "title": "5. 概率论二级结论",
    "sections": [
     {
      "id": "g3-c4-s0",
      "title": "5. 概率论二级结论",
      "md": "- ※ **正态可加性**：独立正态之和仍正态，参数相加。\n- ※ **指数分布无记忆性**：$P(X>s+t\\mid X>s)=P(X>t)$。\n- ※ **$E(X^2)=D(X)+[E(X)]^2$**。\n- ※ **方差线性**：$D(aX+bY)=a^2D(X)+b^2D(Y)+2ab\\operatorname{Cov}(X,Y)$。\n- ※ **独立 $\\Rightarrow$ 不相关**；二维正态下\"不相关 $\\iff$ 独立\"。\n- ※ **$\\max/\\min$ 分布**：独立时 $F_{\\max}(x)=\\prod F_i(x)$，$F_{\\min}(x)=1-\\prod[1-F_i(x)]$。\n- ※ **泊松可加**：独立 $P(\\lambda_1)+P(\\lambda_2)=P(\\lambda_1+\\lambda_2)$。\n- ※ **二项可加**：独立 $B(n_1,p)+B(n_2,p)=B(n_1+n_2,p)$。\n- ※ **$\\chi^2$ 可加**：独立 $\\chi^2(n_1)+\\chi^2(n_2)=\\chi^2(n_1+n_2)$。"
     }
    ]
   },
   {
    "id": "g3-c5",
    "title": "6. 数列 / 级数收敛快速判别经验",
    "sections": [
     {
      "id": "g3-c5-s0",
      "title": "6. 数列 / 级数收敛快速判别经验",
      "md": "- 通项不趋于 0 ⇒ 级数发散（第一关）。\n- 含 $n!$、$a^n$ 优先**比值法**；含 $n$ 次幂优先**根值法**；与 $1/n^p$ 比较用**比较法**。\n- 交错级数用**莱布尼茨**；任意项先看**绝对收敛**。\n- 数列极限：**单调有界**证存在，**夹逼**求值。\n- ※ **常用放缩**：\n$$\\frac{1}{n+1}<\\ln\\Bigl(1+\\frac1n\\Bigr)<\\frac1n,\\qquad \\frac{1}{n^2}<\\frac{1}{n(n-1)}=\\frac{1}{n-1}-\\frac1n\\ (n\\ge2)$$\n【考点】裂项放缩、积分放缩用于估值与夹逼。\n\n- ※ **常见收敛级数**：$\\sum\\dfrac{1}{n^2}=\\dfrac{\\pi^2}{6}$，$\\sum\\dfrac{1}{n^4}=\\dfrac{\\pi^4}{90}$，$\\sum\\dfrac{(-1)^{n-1}}{n}=\\ln2$，$\\sum\\dfrac{1}{n!}=e-1$。"
     }
    ]
   },
   {
    "id": "g3-c6",
    "title": "7. 微分方程二级结论",
    "sections": [
     {
      "id": "g3-c6-s0",
      "title": "7. 微分方程二级结论",
      "md": "- 一阶线性通解公式（见 §9.1）是核心，任何\"可化为线性\"的方程都归到它。\n- 非齐次特解 $k$ 的取值只看 $\\lambda$（或 $\\lambda\\pm\\omega i$）与特征根的重数。\n- ※ **叠加原理**：$f=f_1+f_2$ 时，$y^*=y_1^*+y_2^*$。\n\n---"
     }
    ]
   }
  ]
 },
 {
  "id": "g4",
  "title": "五、常用不等式与放缩结论",
  "chapters": [
   {
    "id": "g4-c0",
    "title": "1. 均值不等式（AM-GM）",
    "sections": [
     {
      "id": "g4-c0-s0",
      "title": "1. 均值不等式（AM-GM）",
      "md": "对正数 $a_i$：\n$$\\frac{a_1+\\cdots+a_n}{n}\\ge\\sqrt[n]{a_1a_2\\cdots a_n}$$\n二元：$a+b\\ge2\\sqrt{ab}$，$a^2+b^2\\ge2ab$，$\\dfrac{a+b}{2}\\ge\\sqrt{ab}\\ge\\dfrac{2}{\\frac1a+\\frac1b}$。\n【考点】求最值、证明不等式。"
     }
    ]
   },
   {
    "id": "g4-c1",
    "title": "2. 柯西不等式",
    "sections": [
     {
      "id": "g4-c1-s0",
      "title": "2. 柯西不等式",
      "md": "$$\\Bigl(\\sum a_i^2\\Bigr)\\Bigl(\\sum b_i^2\\Bigr)\\ge\\Bigl(\\sum a_ib_i\\Bigr)^2$$\n积分形式：$\\Bigl(\\int f^2\\Bigr)\\Bigl(\\int g^2\\Bigr)\\ge\\Bigl(\\int fg\\Bigr)^2$。\n【考点】证明不等式、求最值。"
     }
    ]
   },
   {
    "id": "g4-c2",
    "title": "3. 琴生不等式（Jensen）",
    "sections": [
     {
      "id": "g4-c2-s0",
      "title": "3. 琴生不等式（Jensen）",
      "md": "若 $f$ 为凸函数（$f''\\ge0$）：\n$$f\\Bigl(\\frac{\\sum x_i}{n}\\Bigr)\\le\\frac{\\sum f(x_i)}{n}$$\n凹函数方向相反。等价于 $f\\bigl(\\lambda x+(1-\\lambda)y\\bigr)\\le\\lambda f(x)+(1-\\lambda)f(y)$。"
     }
    ]
   },
   {
    "id": "g4-c3",
    "title": "4. 伯努利不等式",
    "sections": [
     {
      "id": "g4-c3-s0",
      "title": "4. 伯努利不等式",
      "md": "$$(1+x)^\\alpha\\ge1+\\alpha x\\quad(x>-1,\\ \\alpha\\ge1\\ \\text{或}\\ \\alpha\\le0)$$\n$$(1+x)^\\alpha\\le1+\\alpha x\\quad(0<\\alpha<1)$$\n【考点】幂函数放缩。"
     }
    ]
   },
   {
    "id": "g4-c4",
    "title": "5. 对数与指数不等式",
    "sections": [
     {
      "id": "g4-c4-s0",
      "title": "5. 对数与指数不等式",
      "md": "$$\\ln x\\le x-1\\quad(x>0),\\qquad e^x\\ge x+1\\quad(x\\in\\mathbb R)$$\n$$\\frac{x}{1+x}\\le\\ln(1+x)\\le x\\quad(x>-1)$$\n【考点】证明不等式、放缩求极限。"
     }
    ]
   },
   {
    "id": "g4-c5",
    "title": "6. 三角不等式与其他",
    "sections": [
     {
      "id": "g4-c5-s0",
      "title": "6. 三角不等式与其他",
      "md": "$$|\\sin x|\\le|x|,\\qquad |\\sin x|\\le1,\\qquad \\sin x<x<\\tan x\\ (0<x<\\pi/2)$$\n$$\\bigl||a|-|b|\\bigr|\\le|a\\pm b|\\le|a|+|b|$$\n$$\\sqrt{ab}\\le\\frac{a+b}{2}\\le\\sqrt{\\frac{a^2+b^2}{2}}$$"
     }
    ]
   },
   {
    "id": "g4-c6",
    "title": "7. 常用数列放缩",
    "sections": [
     {
      "id": "g4-c6-s0",
      "title": "7. 常用数列放缩",
      "md": "$$\\frac{1}{n(n+1)}=\\frac1n-\\frac1{n+1},\\qquad \\frac{1}{n^2}<\\frac{1}{n(n-1)}$$\n$$\\ln\\Bigl(1+\\frac1n\\Bigr)<\\frac1n,\\qquad \\ln(n+1)-\\ln n<\\frac1n$$\n$$\\frac{1}{n!}<\\frac{1}{2^{n-1}}\\ (n\\ge2)$$\n\n【考点】裂项、积分放缩、几何放缩三大法宝。\n\n---"
     }
    ]
   }
  ]
 }
];
