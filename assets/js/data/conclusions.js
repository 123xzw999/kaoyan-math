/* 自动生成：二级结论 / 多级结论 */
window.KY_CONCLUSIONS = [
 {
  "id": "g3-c0-s0",
  "cat": "二级结论",
  "title": "极限与泰勒类二级结论",
  "md": "- ※ **等价无穷小\"三级表\"**（$x\\to0$）：\n$$x-\\sin x\\sim\\frac{x^3}{6},\\quad \\tan x-x\\sim\\frac{x^3}{3},\\quad \\arcsin x-x\\sim\\frac{x^3}{6},\\quad x-\\arctan x\\sim\\frac{x^3}{3},\\quad \\tan x-\\sin x\\sim\\frac{x^3}{2}$$\n【考点】分子含这些\"抵消\"结构时直接得阶数。\n\n- ※ **$1^\\infty$ 型速算**：若 $\\lim u=1,\\lim v=\\infty$，则 $\\lim u^v=e^{\\lim v(u-1)}$。\n- ※ **$\\infty-\\infty$ 型**先通分或有理化，再判阶。\n- **常用麦克劳林推论**：\n$$\\ln\\frac{\\sin x}{x}\\sim-\\frac{x^2}{6},\\qquad \\cos x-1\\sim-\\frac{x^2}{2},\\qquad e^x-1-x\\sim\\frac{x^2}{2}$$\n- ※ **斯特林公式**（数列极限）：$n!\\sim\\sqrt{2\\pi n}\\Bigl(\\dfrac ne\\Bigr)^n$。\n- ※ **数列极限速算**：$\\lim\\sqrt[n]{n}=1$，$\\lim\\sqrt[n]{a}=1\\ (a>0)$，$\\lim\\dfrac{\\ln n}{n}=0$。"
 },
 {
  "id": "g3-c1-s0",
  "cat": "二级结论",
  "title": "积分类二级结论",
  "md": "- ※ **点火公式（华里士 / Wallis）**：\n$$I_n=\\int_0^{\\pi/2}\\sin^n x\\,dx=\\int_0^{\\pi/2}\\cos^n x\\,dx=\\begin{cases}\\dfrac{(n-1)!!}{n!!}\\cdot\\dfrac{\\pi}{2},& n\\text{ 为偶数}\\\\[2mm]\\dfrac{(n-1)!!}{n!!},& n\\text{ 为奇数}\\end{cases}$$\n其中 $n!!$ 为双阶乘。递推：$I_n=\\dfrac{n-1}{n}I_{n-2}$，$I_0=\\dfrac\\pi2,\\ I_1=1$。\n【考点】出现 $\\int_0^{\\pi/2}\\sin^n x$ 直接用，秒杀。\n\n- ※ **推广**：$\\displaystyle\\int_0^{\\pi}\\sin^n x\\,dx=2I_n$（$n$ 为偶数）；$\\displaystyle\\int_0^{2\\pi}\\sin^n x\\,dx=4I_n$（$n$ 偶）。\n- ※ **$\\int_0^\\pi xf(\\sin x)dx=\\dfrac\\pi2\\int_0^\\pi f(\\sin x)dx$**。\n- ※ **$\\int_0^{a}f(x)dx=\\int_0^a f(a-x)dx$**（区间翻转对称）。\n- **分部积分速记**（\"反对幂指三\"优先级）：反三角 > 对数 > 幂 > 指数 > 三角，前者取作 $u$。"
 },
 {
  "id": "g3-c2-s0",
  "cat": "二级结论",
  "title": "旋转体 / 几何二级结论",
  "md": "- ※ **帕普斯-古尔丁定理**：\n  - 旋转体体积 $V=2\\pi\\bar d\\cdot S$（$\\bar d$ = 形心到轴距离，$S$ = 平面图形面积）；\n  - 旋转曲面面积 $A=2\\pi\\bar d\\cdot L$（$L$ = 曲线弧长）。\n【考点】已知形心时秒算旋转体体积/面积。\n\n- ※ **绕 $y$ 轴柱壳法** $V_y=2\\pi\\displaystyle\\int_a^b xy\\,dx$。\n- ※ **旋转体侧面积** $S=2\\pi\\displaystyle\\int_a^b|y|\\sqrt{1+y'^2}dx$（绕 $x$ 轴）。\n- **形心公式**：$\\bar x=\\dfrac{\\int x f}{\\int f}$，$\\bar y=\\dfrac{\\frac12\\int f^2}{\\int f}$。\n- **曲率半径** $R=\\dfrac{(1+y'^2)^{3/2}}{|y''|}$。"
 },
 {
  "id": "g3-c3-s0",
  "cat": "二级结论",
  "title": "线性代数二级结论",
  "md": "- ※ **特征值关系**：$\\operatorname{tr}(A)=\\sum\\lambda_i$，$|A|=\\prod\\lambda_i$，$\\sum\\lambda_i^2=\\operatorname{tr}(A^2)$。\n- ※ **$A^k$ 特征值为 $\\lambda^k$**，$f(A)$ 特征值为 $f(\\lambda)$，$A^{-1}$ 为 $1/\\lambda$，$A^*$ 为 $|A|/\\lambda$。\n- ※ **秩 1 矩阵** $A=\\alpha\\beta^T$：$\\lambda_{\\max}=\\beta^T\\alpha$，其余为 0；$A^k=(\\beta^T\\alpha)^{k-1}A$。\n- ※ **$A$ 可对角化 $\\iff$ 每个特征值几何重数 = 代数重数**；有 $n$ 个互异特征值必可对角化。\n- ※ **实对称矩阵**：必可正交对角化；特征值全实；不同特征值的特征向量正交。\n- ※ **$r(A)=r(A^TA)=r(AA^T)$**；$AB=O\\Rightarrow r(A)+r(B)\\le n$。\n- ※ **$r(A^*)$**：$r(A)=n\\Rightarrow n$，$r(A)=n-1\\Rightarrow1$，$r(A)<n-1\\Rightarrow0$。\n- ※ **$|A^*|=|A|^{n-1}$**；$(A^*)^{-1}=A/|A|$。\n- ※ **正定判定**：特征值全正 $\\iff$ 顺序主子式全正 $\\iff$ 正惯性指数 $=n$。\n- ※ **$A\\sim B\\Rightarrow$ 同迹、同行列式、同秩、同特征值**（反之不成立）。"
 },
 {
  "id": "g3-c4-s0",
  "cat": "二级结论",
  "title": "概率论二级结论",
  "md": "- ※ **正态可加性**：独立正态之和仍正态，参数相加。\n- ※ **指数分布无记忆性**：$P(X>s+t\\mid X>s)=P(X>t)$。\n- ※ **$E(X^2)=D(X)+[E(X)]^2$**。\n- ※ **方差线性**：$D(aX+bY)=a^2D(X)+b^2D(Y)+2ab\\operatorname{Cov}(X,Y)$。\n- ※ **独立 $\\Rightarrow$ 不相关**；二维正态下\"不相关 $\\iff$ 独立\"。\n- ※ **$\\max/\\min$ 分布**：独立时 $F_{\\max}(x)=\\prod F_i(x)$，$F_{\\min}(x)=1-\\prod[1-F_i(x)]$。\n- ※ **泊松可加**：独立 $P(\\lambda_1)+P(\\lambda_2)=P(\\lambda_1+\\lambda_2)$。\n- ※ **二项可加**：独立 $B(n_1,p)+B(n_2,p)=B(n_1+n_2,p)$。\n- ※ **$\\chi^2$ 可加**：独立 $\\chi^2(n_1)+\\chi^2(n_2)=\\chi^2(n_1+n_2)$。"
 },
 {
  "id": "g3-c5-s0",
  "cat": "二级结论",
  "title": "数列 / 级数收敛快速判别经验",
  "md": "- 通项不趋于 0 ⇒ 级数发散（第一关）。\n- 含 $n!$、$a^n$ 优先**比值法**；含 $n$ 次幂优先**根值法**；与 $1/n^p$ 比较用**比较法**。\n- 交错级数用**莱布尼茨**；任意项先看**绝对收敛**。\n- 数列极限：**单调有界**证存在，**夹逼**求值。\n- ※ **常用放缩**：\n$$\\frac{1}{n+1}<\\ln\\Bigl(1+\\frac1n\\Bigr)<\\frac1n,\\qquad \\frac{1}{n^2}<\\frac{1}{n(n-1)}=\\frac{1}{n-1}-\\frac1n\\ (n\\ge2)$$\n【考点】裂项放缩、积分放缩用于估值与夹逼。\n\n- ※ **常见收敛级数**：$\\sum\\dfrac{1}{n^2}=\\dfrac{\\pi^2}{6}$，$\\sum\\dfrac{1}{n^4}=\\dfrac{\\pi^4}{90}$，$\\sum\\dfrac{(-1)^{n-1}}{n}=\\ln2$，$\\sum\\dfrac{1}{n!}=e-1$。"
 },
 {
  "id": "g3-c6-s0",
  "cat": "二级结论",
  "title": "微分方程二级结论",
  "md": "- 一阶线性通解公式（见 §9.1）是核心，任何\"可化为线性\"的方程都归到它。\n- 非齐次特解 $k$ 的取值只看 $\\lambda$（或 $\\lambda\\pm\\omega i$）与特征根的重数。\n- ※ **叠加原理**：$f=f_1+f_2$ 时，$y^*=y_1^*+y_2^*$。\n\n---"
 },
 {
  "id": "g4-c0-s0",
  "cat": "不等式",
  "title": "均值不等式（AM-GM）",
  "md": "对正数 $a_i$：\n$$\\frac{a_1+\\cdots+a_n}{n}\\ge\\sqrt[n]{a_1a_2\\cdots a_n}$$\n二元：$a+b\\ge2\\sqrt{ab}$，$a^2+b^2\\ge2ab$，$\\dfrac{a+b}{2}\\ge\\sqrt{ab}\\ge\\dfrac{2}{\\frac1a+\\frac1b}$。\n【考点】求最值、证明不等式。"
 },
 {
  "id": "g4-c1-s0",
  "cat": "不等式",
  "title": "柯西不等式",
  "md": "$$\\Bigl(\\sum a_i^2\\Bigr)\\Bigl(\\sum b_i^2\\Bigr)\\ge\\Bigl(\\sum a_ib_i\\Bigr)^2$$\n积分形式：$\\Bigl(\\int f^2\\Bigr)\\Bigl(\\int g^2\\Bigr)\\ge\\Bigl(\\int fg\\Bigr)^2$。\n【考点】证明不等式、求最值。"
 },
 {
  "id": "g4-c2-s0",
  "cat": "不等式",
  "title": "琴生不等式（Jensen）",
  "md": "若 $f$ 为凸函数（$f''\\ge0$）：\n$$f\\Bigl(\\frac{\\sum x_i}{n}\\Bigr)\\le\\frac{\\sum f(x_i)}{n}$$\n凹函数方向相反。等价于 $f\\bigl(\\lambda x+(1-\\lambda)y\\bigr)\\le\\lambda f(x)+(1-\\lambda)f(y)$。"
 },
 {
  "id": "g4-c3-s0",
  "cat": "不等式",
  "title": "伯努利不等式",
  "md": "$$(1+x)^\\alpha\\ge1+\\alpha x\\quad(x>-1,\\ \\alpha\\ge1\\ \\text{或}\\ \\alpha\\le0)$$\n$$(1+x)^\\alpha\\le1+\\alpha x\\quad(0<\\alpha<1)$$\n【考点】幂函数放缩。"
 },
 {
  "id": "g4-c4-s0",
  "cat": "不等式",
  "title": "对数与指数不等式",
  "md": "$$\\ln x\\le x-1\\quad(x>0),\\qquad e^x\\ge x+1\\quad(x\\in\\mathbb R)$$\n$$\\frac{x}{1+x}\\le\\ln(1+x)\\le x\\quad(x>-1)$$\n【考点】证明不等式、放缩求极限。"
 },
 {
  "id": "g4-c5-s0",
  "cat": "不等式",
  "title": "三角不等式与其他",
  "md": "$$|\\sin x|\\le|x|,\\qquad |\\sin x|\\le1,\\qquad \\sin x<x<\\tan x\\ (0<x<\\pi/2)$$\n$$\\bigl||a|-|b|\\bigr|\\le|a\\pm b|\\le|a|+|b|$$\n$$\\sqrt{ab}\\le\\frac{a+b}{2}\\le\\sqrt{\\frac{a^2+b^2}{2}}$$"
 },
 {
  "id": "g4-c6-s0",
  "cat": "不等式",
  "title": "常用数列放缩",
  "md": "$$\\frac{1}{n(n+1)}=\\frac1n-\\frac1{n+1},\\qquad \\frac{1}{n^2}<\\frac{1}{n(n-1)}$$\n$$\\ln\\Bigl(1+\\frac1n\\Bigr)<\\frac1n,\\qquad \\ln(n+1)-\\ln n<\\frac1n$$\n$$\\frac{1}{n!}<\\frac{1}{2^{n-1}}\\ (n\\ge2)$$\n\n【考点】裂项、积分放缩、几何放缩三大法宝。\n\n---"
 },
 {
  "id": "x-level-1",
  "cat": "多级结论",
  "title": "二级 → 三级：泰勒展开的连锁推论",
  "md": "由 $\\sin x=x-\\dfrac{x^3}{6}+\\dfrac{x^5}{120}+o(x^5)$ 出发：\n\n1. **一级**：$\\sin x\\sim x$；\n2. **二级**：$x-\\sin x\\sim\\dfrac{x^3}{6}$（相减消掉一次项）；\n3. **三级**：$\\sin x-x+\\dfrac{x^3}{6}\\sim\\dfrac{x^5}{120}$（再消掉三次项）。\n\n【用法】凡遇 $\\dfrac{f-g}{x^n}$ 型极限，先判断「抵消到第几阶」，再把分子降到**最低非零阶**，一般一眼就能写出答案。同类：$\\tan x-x\\sim\\dfrac{x^3}{3}$、$\\arcsin x-x\\sim\\dfrac{x^3}{6}$、$x-\\arctan x\\sim\\dfrac{x^3}{3}$。"
 },
 {
  "id": "x-level-2",
  "cat": "多级结论",
  "title": "二级 → 三级：旋转体体积的三个层级",
  "md": "1. **一级（定义）**：$V=\\pi\\displaystyle\\int_a^b f^2(x)\\,dx$（绕 $x$ 轴）；\n2. **二级（柱壳法）**：绕 $y$ 轴 $V=2\\pi\\displaystyle\\int_a^b x\\,f(x)\\,dx$（$x\\ge0$）；\n3. **三级（帕普斯-古尔丁）**：平面图形绕**同平面内任意不穿过它的直线**旋转，$V=2\\pi\\bar d\\cdot S$，其中 $S$ 为面积、$\\bar d$ 为形心到轴的距离。\n\n【用法】绕 $x=a$、$y=b$ 这类**非坐标轴**的题目，用三级结论一步出结果，不用再平移换元。"
 },
 {
  "id": "x-level-3",
  "cat": "多级结论",
  "title": "二级 → 三级：秩的连锁不等式",
  "md": "1. **一级**：$r(AB)\\le\\min\\{r(A),r(B)\\}$；\n2. **二级**：$r(A+B)\\le r(A)+r(B)$，且 $AB=O\\Rightarrow r(A)+r(B)\\le n$；\n3. **三级**：$r\\begin{pmatrix}A&O\\\\O&B\\end{pmatrix}=r(A)+r(B)$，而 $r\\begin{pmatrix}A&C\\\\O&B\\end{pmatrix}\\ge r(A)+r(B)$（分块三角）；\n\n推论：$A$ 为 $n$ 阶方阵时 $r(A^n)=r(A^{n+1})=\\cdots$（幂等化）；$r(A)=n-1\\Rightarrow r(A^*)=1$，$r(A)<n-1\\Rightarrow r(A^*)=0$。\n\n【用法】选择题里「分块矩阵秩的比较」，先化成三角分块，再套三级结论。"
 },
 {
  "id": "x-level-4",
  "cat": "多级结论",
  "title": "二级 → 三级：正态分布的可加性链",
  "md": "1. **一级**：$X\\sim N(\\mu,\\sigma^2)\\Rightarrow E(X)=\\mu,\\ D(X)=\\sigma^2$；\n2. **二级**：$aX+b\\sim N(a\\mu+b,\\,a^2\\sigma^2)$；独立时 $X\\pm Y\\sim N(\\mu_1\\pm\\mu_2,\\ \\sigma_1^2+\\sigma_2^2)$；\n3. **三级**：$\\sum_i a_iX_i\\sim N\\Big(\\sum a_i\\mu_i,\\ \\sum a_i^2\\sigma_i^2\\Big)$（$X_i$ 独立正态）；样本均值 $\\bar X\\sim N(\\mu,\\sigma^2/n)$，故 $\\dfrac{\\bar X-\\mu}{\\sigma/\\sqrt n}\\sim N(0,1)$。\n\n【用法】一切「线性组合的正态」题，直接套三级，不用再算卷积。"
 }
];
