/* 自动生成：历年真题（结构化） */
window.KY_EXAMS = [
 {
  "id": "2023-1",
  "year": 2023,
  "subject": "数学一",
  "structure": "选择题 10×5=50 分　填空题 6×5=30 分　解答题 6 题共 70 分（第 1 题 10 分，其余各 12 分）",
  "conf": "原文",
  "sections": [
   {
    "name": "一、选择题",
    "note": "1~10 小题，每小题 5 分，共 50 分。下列每题给出的四个选项中，只有一个选项符合题目要求。",
    "items": [
     {
      "no": 1,
      "stem": "曲线 $y=x\\ln\\Bigl(e+\\dfrac{1}{x-1}\\Bigr)$ 的斜渐近线方程为（ ）",
      "opts": [
       "$y=x+e$",
       "$y=x+\\dfrac1e$",
       "$y=x$",
       "$y=x-\\dfrac1e$"
      ],
      "answer": "B",
      "sol": "$a=\\lim\\limits_{x\\to\\infty}\\dfrac{y}{x}=\\lim\\limits_{x\\to\\infty}\\ln\\Bigl(e+\\dfrac{1}{x-1}\\Bigr)=1$；\\n$b=\\lim\\limits_{x\\to\\infty}(y-x)=\\lim\\limits_{x\\to\\infty}x\\Bigl[\\ln\\Bigl(e+\\dfrac{1}{x-1}\\Bigr)-1\\Bigr]=\\lim\\limits_{x\\to\\infty}x\\cdot\\dfrac{1/e}{x-1}=\\dfrac1e$。故斜渐近线为 $y=x+\\dfrac1e$。"
     },
     {
      "no": 2,
      "stem": "若微分方程 $y''+ay'+by=0$ 的解在 $(-\\infty,+\\infty)$ 上有界，则（ ）",
      "opts": [
       "$a<0,\\ b>0$",
       "$a>0,\\ b>0$",
       "$a=0,\\ b>0$",
       "$a=0,\\ b<0$"
      ],
      "answer": "C",
      "sol": "特征根 $\\lambda=\\dfrac{-a\\pm\\sqrt{a^{2}-4b}}{2}$。要使一切解在整条实轴上有界，特征根必须是纯虚数。\\n这要求 $a=0$ 且 $b>0$（此时根为 $\\pm i\\sqrt b$，解为有界的三角函数）。"
     },
     {
      "no": 3,
      "stem": "设函数 $y=f(x)$ 由参数方程 $\\begin{cases}x=t^{2}+1\\\\ y=|t|e^{|t|}\\sin t\\end{cases}$ 确定，则（ ）",
      "opts": [
       "$f(x)$ 连续，$f'(0)$ 不存在",
       "$f'(0)$ 存在，$f(x)$ 在 $x=0$ 处不连续",
       "$f'(x)$ 连续，$f''(0)$ 不存在",
       "$f''(0)$ 存在，$f'(x)$ 在 $x=0$ 处不连续"
      ],
      "answer": "C",
      "sol": "（本题题干按检索稿还原，参数方程在原文中为图片，个别表达式可能有出入。）\\n关键在于考察 $t=0$ 对应点处一阶、二阶导数的存在性与连续性，逐项判断可得 C。",
      "conf": "OCR"
     },
     {
      "no": 4,
      "stem": "已知 $a_n<b_n\\ (n=1,2,\\cdots)$，若级数 $\\sum a_n$ 与 $\\sum b_n$ 均收敛，则「$\\sum a_n$ 绝对收敛」是「$\\sum b_n$ 绝对收敛」的（ ）",
      "opts": [
       "充分必要条件",
       "充分不必要条件",
       "必要不充分条件",
       "既不充分也不必要条件"
      ],
      "answer": "A",
      "sol": "由 $\\sum a_n$、$\\sum b_n$ 收敛知 $\\sum(b_n-a_n)$ 收敛且 $b_n-a_n>0$，故 $\\sum|b_n-a_n|$ 收敛。\\n若 $\\sum|a_n|$ 收敛，则 $\\sum|b_n|\\le\\sum|a_n|+\\sum|b_n-a_n|$ 收敛；反之由 $a_n=b_n-(b_n-a_n)$ 同理。故为充要条件。"
     },
     {
      "no": 5,
      "stem": "已知 $n$ 阶矩阵 $A,B,C$ 满足 $ABC=O$，$E$ 为 $n$ 阶单位矩阵。记矩阵 $\\begin{pmatrix}O&A\\\\BC&E\\end{pmatrix}$、$\\begin{pmatrix}O&A\\\\B&E\\end{pmatrix}$、$\\begin{pmatrix}O&A\\\\O&C\\end{pmatrix}$ 的秩分别为 $r_1,r_2,r_3$，则（ ）",
      "opts": [
       "$r_1\\le r_2\\le r_3$",
       "$r_1\\le r_3\\le r_2$",
       "$r_3\\le r_2\\le r_1$",
       "$r_2\\le r_1\\le r_3$"
      ],
      "answer": "B",
      "sol": "利用分块矩阵的初等变换化简（$ABC=O$ 是关键），可得 $r_1\\le r_3\\le r_2$。"
     },
     {
      "no": 6,
      "stem": "下列矩阵中不能相似于对角矩阵的是（ ）",
      "opts": [
       "$\\begin{pmatrix}1&0&2\\\\0&2&2\\\\0&0&3\\end{pmatrix}$",
       "$\\begin{pmatrix}1&2&0\\\\2&a&0\\\\3&0&3\\end{pmatrix}$",
       "$\\begin{pmatrix}1&1&a\\\\0&2&0\\\\0&0&2\\end{pmatrix}$",
       "$\\begin{pmatrix}2&1&1\\\\0&2&2\\\\0&0&2\\end{pmatrix}$"
      ],
      "answer": "D",
      "sol": "A 有三个互异特征值，必可对角化。\\nD 的特征值全为 $2$（三重根），$r(A-2E)=2$，只有一个线性无关特征向量，故不可对角化。"
     },
     {
      "no": 7,
      "stem": "已知向量 $\\alpha_1=(1,0,1)^{T},\\ \\alpha_2=(1,1,2)^{T},\\ \\beta_1=(1,1,1)^{T},\\ \\beta_2=(1,2,3)^{T}$。若 $\\gamma$ 既可由 $\\alpha_1,\\alpha_2$ 线性表示，也可由 $\\beta_1,\\beta_2$ 线性表示，则 $\\gamma=$（ ）",
      "opts": [
       "$k(3,1,4)^{T},\\ k\\in R$",
       "$k(3,-1,4)^{T},\\ k\\in R$",
       "$k(-1,1,2)^{T},\\ k\\in R$",
       "$k(1,5,8)^{T},\\ k\\in R$"
      ],
      "answer": "D",
      "sol": "$\\gamma\\in \\operatorname{span}\\{\\alpha_1,\\alpha_2\\}\\cap\\operatorname{span}\\{\\beta_1,\\beta_2\\}$。求两个二维子空间的交，得 $\\gamma=k(1,5,8)^{T}$。"
     },
     {
      "no": 8,
      "stem": "设随机变量 $X$ 服从参数为 1 的泊松分布，则 $E(|X-EX|)=$（ ）",
      "opts": [
       "$\\dfrac1e$",
       "$\\dfrac12$",
       "$\\dfrac2e$",
       "$1$"
      ],
      "answer": "C",
      "sol": "$X\\sim P(1)$，$EX=1$。\\n$E(|X-1|)=\\sum\\limits_{k\\ge0}|k-1|\\dfrac{e^{-1}}{k!}=e^{-1}\\Bigl[\\dfrac{1}{0!}+\\sum\\limits_{k\\ge2}\\dfrac{k-1}{k!}\\Bigr]$。\\n$\\sum\\limits_{k\\ge2}\\dfrac{k-1}{k!}=\\sum\\limits_{k\\ge2}\\Bigl(\\dfrac{1}{(k-1)!}-\\dfrac{1}{k!}\\Bigr)=(e-1)-(e-2)=1$，故结果为 $e^{-1}(1+1)=\\dfrac2e$。"
     },
     {
      "no": 9,
      "stem": "设 $X_1,\\cdots,X_n$ 来自总体 $N(\\mu_1,\\sigma^{2})$，$Y_1,\\cdots,Y_m$ 来自总体 $N(\\mu_2,2\\sigma^{2})$，两样本相互独立，记 $S_1^{2},S_2^{2}$ 为样本方差，则（ ）",
      "opts": [
       "$\\dfrac{S_1^{2}}{S_2^{2}}\\sim F(n,m)$",
       "$\\dfrac{S_1^{2}}{S_2^{2}}\\sim F(n-1,m-1)$",
       "$\\dfrac{2S_1^{2}}{S_2^{2}}\\sim F(n,m)$",
       "$\\dfrac{2S_1^{2}}{S_2^{2}}\\sim F(n-1,m-1)$"
      ],
      "answer": "D",
      "sol": "$\\dfrac{(n-1)S_1^{2}}{\\sigma^{2}}\\sim\\chi^{2}(n-1)$，$\\dfrac{(m-1)S_2^{2}}{2\\sigma^{2}}\\sim\\chi^{2}(m-1)$，两者独立。\\n相除并除以自由度：$\\dfrac{S_1^{2}/\\sigma^{2}}{S_2^{2}/(2\\sigma^{2})}=\\dfrac{2S_1^{2}}{S_2^{2}}\\sim F(n-1,m-1)$。"
     },
     {
      "no": 10,
      "stem": "设 $X_1,X_2$ 为来自总体 $N(\\mu,\\sigma^{2})$ 的简单随机样本，$\\sigma>0$ 未知。若 $\\hat\\theta=a|X_1-X_2|$ 为 $\\sigma$ 的无偏估计，则 $a=$（ ）",
      "opts": [
       "$\\dfrac{\\sqrt\\pi}{2}$",
       "$\\sqrt{\\dfrac\\pi2}$",
       "$\\dfrac{1}{\\sqrt{2\\pi}}$",
       "$\\sqrt{2\\pi}$"
      ],
      "answer": "A",
      "sol": "$X_1-X_2\\sim N(0,2\\sigma^{2})$，$\\dfrac{X_1-X_2}{\\sqrt2\\sigma}\\sim N(0,1)$。\\n$E|Z|=\\sqrt{\\dfrac2\\pi}$（$Z\\sim N(0,1)$），故 $E|X_1-X_2|=\\sqrt2\\sigma\\sqrt{\\dfrac2\\pi}=\\dfrac{2\\sigma}{\\sqrt\\pi}$。\\n由 $a\\cdot\\dfrac{2\\sigma}{\\sqrt\\pi}=\\sigma$ 得 $a=\\dfrac{\\sqrt\\pi}{2}$。"
     }
    ]
   },
   {
    "name": "二、填空题",
    "note": "11~16 小题，每小题 5 分，共 30 分。",
    "items": [
     {
      "no": 11,
      "stem": "当 $x\\to0$ 时，函数 $f(x)=ax+bx^{2}+\\ln(1+x)$ 与 $g(x)=e^{x^{2}}-\\cos x$ 是等价无穷小，则 $ab=\\rule{2.6em}{0.5pt}$",
      "answer": "$-2$",
      "sol": "$g(x)=e^{x^{2}}-\\cos x=\\Bigl(1+x^{2}\\Bigr)-\\Bigl(1-\\dfrac{x^{2}}{2}\\Bigr)+o(x^{2})=\\dfrac32x^{2}+o(x^{2})$。\\n$f(x)=ax+bx^{2}+x-\\dfrac{x^{2}}{2}+o(x^{2})=(a+1)x+\\Bigl(b-\\dfrac12\\Bigr)x^{2}+o(x^{2})$。\\n要与 $g$ 等价（同为 $x^{2}$ 阶且系数相等），需 $a+1=0$ 即 $a=-1$，且 $b-\\dfrac12=\\dfrac32$ 即 $b=2$。故 $ab=-2$。"
     },
     {
      "no": 12,
      "stem": "曲面 $z=x+2y+\\ln(1+x^{2}+y^{2})$ 在点 $(0,0,0)$ 处的切平面方程为 $\\rule{2.6em}{0.5pt}$",
      "answer": "$x+2y-z=0$",
      "sol": "$z_x=1+\\dfrac{2x}{1+x^{2}+y^{2}}\\Big|_{(0,0)}=1$，$z_y=2+\\dfrac{2y}{1+x^{2}+y^{2}}\\Big|_{(0,0)}=2$。\\n切平面 $z=1\\cdot x+2\\cdot y$，即 $x+2y-z=0$。"
     },
     {
      "no": 13,
      "stem": "设 $f(x)$ 为周期为 2 的周期函数，且 $f(x)=1-x,\\ x\\in[0,1]$。若 $f(x)=\\dfrac{a_0}{2}+\\sum\\limits_{n=1}^{\\infty}a_n\\cos n\\pi x$，则 $\\sum\\limits_{n=1}^{\\infty}a_{2n}=\\rule{2.6em}{0.5pt}$",
      "answer": "$0$",
      "sol": "$f$ 作偶延拓后为余弦级数。$f(0)=1,\\ f(1)=0$。\\n$f(0)=\\dfrac{a_0}{2}+\\sum\\limits_{n\\ge1}a_n$，$f(1)=\\dfrac{a_0}{2}+\\sum\\limits_{n\\ge1}(-1)^{n}a_n$。\\n两式相加：$f(0)+f(1)=a_0+2\\sum\\limits_{n\\ge1}a_{2n}$。\\n$a_0=2\\displaystyle\\int_0^1(1-x)dx=1$，故 $1+0=1+2\\sum a_{2n}$，得 $\\sum a_{2n}=0$。"
     },
     {
      "no": 14,
      "stem": "设连续函数 $f(x)$ 满足 $f(x+2)-f(x)=x$，$\\displaystyle\\int_0^{2}f(x)\\,dx=0$，则 $\\displaystyle\\int_1^{3}f(x)\\,dx=\\rule{2.6em}{0.5pt}$",
      "answer": "$\\dfrac12$",
      "sol": "由 $f(x+2)=f(x)+x$：\\n$\\displaystyle\\int_1^3f(x)dx=\\int_1^2f(x)dx+\\int_2^3f(x)dx=\\int_1^2f(x)dx+\\int_0^1[f(x)+x]dx$\\n$=\\displaystyle\\int_0^2f(x)dx+\\int_0^1x\\,dx=0+\\dfrac12=\\dfrac12$。"
     },
     {
      "no": 15,
      "stem": "已知向量组 $\\alpha_1,\\alpha_2,\\alpha_3$ 与 $\\beta_1,\\beta_2$ 满足 $\\beta_1=k_1\\alpha_1+\\cdots$，则 $k_1+k_2+k_3=\\rule{2.6em}{0.5pt}$",
      "answer": "（待核验）",
      "sol": "检索稿中该题表达式残缺（原文为图片），无法可靠还原。请以官方原卷核对后再使用。",
      "conf": "OCR"
     },
     {
      "no": 16,
      "stem": "设随机变量 $X$ 与 $Y$ 相互独立，且 $X\\sim B\\Bigl(1,\\dfrac13\\Bigr)$，$Y\\sim$ …，则 $P\\{X=Y\\}=\\rule{2.6em}{0.5pt}$",
      "answer": "（待核验）",
      "sol": "检索稿中 $Y$ 的分布残缺，题干不完整。请以官方原卷核对。",
      "conf": "OCR"
     }
    ]
   },
   {
    "name": "三、解答题",
    "note": "17~22 小题，共 70 分。解答应写出文字说明、证明过程或演算步骤。",
    "items": [
     {
      "no": 17,
      "stem": "（本题满分 10 分）设曲线 $y=y(x)\\ (x>0)$ 经过点 $(1,2)$，该曲线上任一点 $P(x,y)$ 到 $y$ 轴的距离等于该点处的切线在 $y$ 轴上的截距。\\n(1) 求 $y(x)$；\\n(2) 求函数 $f(x)=\\displaystyle\\int_1^{x}y(t)\\,dt$ 在 $(0,+\\infty)$ 上的最大值。",
      "answer": "(1) $y=x(2-\\ln x)$；(2) 最大值 $f(e^{2})=\\dfrac12(e^{2}-1)$",
      "sol": "**(1)** 点 $P$ 到 $y$ 轴距离为 $x$；切线在 $y$ 轴上的截距为 $y-xy'$。由题意 $x=y-xy'$，即 $y'-\\dfrac{y}{x}=-1$。\\n解一阶线性方程：$y=e^{\\ln x}\\Bigl(\\displaystyle\\int(-1)\\cdot\\dfrac1x dx+C\\Bigr)=x(-\\ln x+C)$。\\n由 $y(1)=2$ 得 $C=2$，故 $y=x(2-\\ln x)$。\\n**(2)** $f'(x)=y(x)=x(2-\\ln x)$，令 $f'=0$ 得 $x=e^{2}$。$x<e^2$ 时 $f'>0$，$x>e^2$ 时 $f'<0$，故 $x=e^{2}$ 为极大值点即最大值点。\\n$f(e^{2})=\\displaystyle\\int_1^{e^2}t(2-\\ln t)dt$。令 $u=\\ln t$，$=\\displaystyle\\int_0^2e^{2u}(2-u)e^{u}du=\\int_0^2(2-u)e^{3u}du=\\dfrac12(e^{2}-1)$。"
     },
     {
      "no": 18,
      "stem": "（本题满分 12 分）求函数 $f(x,y)=(y-x^{2})(y-x^{3})$ 的极值。",
      "answer": "在 $\\Bigl(\\dfrac23,\\dfrac{10}{27}\\Bigr)$ 处取极小值 $-\\dfrac{4}{729}$",
      "sol": "$f_y=2y-x^{2}-x^{3}=0\\Rightarrow y=\\dfrac{x^{2}+x^{3}}{2}$；$f_x=-2x(y-x^{2})-3x^{2}(y-x^{3})=0$。\\n代入整理得 $x^{3}\\Bigl(\\dfrac32x^{2}-\\dfrac52x+1\\Bigr)=0$，解得 $x=0,\\ 1,\\ \\dfrac23$。\\n三个驻点：$(0,0),\\ (1,1),\\ \\Bigl(\\dfrac23,\\dfrac{10}{27}\\Bigr)$。\\n二阶偏导判定：仅 $\\Bigl(\\dfrac23,\\dfrac{10}{27}\\Bigr)$ 处 $AC-B^{2}>0$ 且 $A>0$，为极小值点，极小值 $f=-\\dfrac{4}{729}$；另两点非极值点。"
     },
     {
      "no": 19,
      "stem": "（本题满分 12 分）设空间有界区域 $\\Omega$ 由柱面 $x^{2}+y^{2}=1$ 与平面 $z=0$ 和 $x+z=1$ 围成，$\\Sigma$ 为 $\\Omega$ 边界的外侧，计算曲面积分 $I=\\displaystyle\\iint_\\Sigma 2xz\\,dydz+xz\\cos y\\,dzdx+3yz\\sin x\\,dxdy$。",
      "answer": "（待核验）",
      "sol": "**思路**：用高斯公式，$I=\\displaystyle\\iiint_\\Omega\\Bigl(2z-z\\sin y+3y\\cos x\\Bigr)dv$，再化为柱坐标计算。检索稿给出的结果标为待核验，请以官方答案为准。",
      "conf": "OCR"
     },
     {
      "no": 20,
      "stem": "（本题满分 12 分）设函数 $f(x)$ 在 $[-a,a]$ 上具有 2 阶连续导数。证明：\\n(1) 若 $f(0)=0$，则存在 $\\xi\\in(-a,a)$，使得 $f''(\\xi)=\\dfrac{f(a)+f(-a)}{a^{2}}$；\\n(2) 若 $f(x)$ 在 $(-a,a)$ 内取得极值，则存在 $\\eta\\in(-a,a)$，使得 $|f''(\\eta)|\\ge\\dfrac{1}{a^{2}}|f(a)-f(-a)|$。",
      "sol": "**(1)** 在 $0$ 处对 $f(a)$、$f(-a)$ 作泰勒展开（拉格朗日余项）：\\n$f(a)=f(0)+f'(0)a+\\dfrac{f''(\\xi_1)}{2}a^{2}$，$f(-a)=f(0)-f'(0)a+\\dfrac{f''(\\xi_2)}{2}a^{2}$。\\n两式相加并用 $f(0)=0$：$f(a)+f(-a)=\\dfrac{a^{2}}{2}\\bigl[f''(\\xi_1)+f''(\\xi_2)\\bigr]$。\\n由 $f''$ 连续及介值定理，存在 $\\xi\\in(-a,a)$ 使 $f''(\\xi)=\\dfrac{f''(\\xi_1)+f''(\\xi_2)}{2}=\\dfrac{f(a)+f(-a)}{a^{2}}$。\\n**(2)** 设极值点为 $x_0$，则 $f'(x_0)=0$。同样展开：\\n$f(a)=f(x_0)+\\dfrac{f''(\\xi_1)}{2}(a-x_0)^{2}$，$f(-a)=f(x_0)+\\dfrac{f''(\\xi_2)}{2}(a+x_0)^{2}$。\\n相减并取绝对值，由三角不等式可证存在 $\\eta$ 使 $|f''(\\eta)|\\ge\\dfrac{|f(a)-f(-a)|}{a^{2}}$。"
     },
     {
      "no": 21,
      "stem": "（本题满分 12 分）已知二次型 $f(x_1,x_2,x_3)=x_1^{2}+2x_2^{2}+2x_3^{2}+2x_1x_2-2x_1x_3$，$g(y_1,y_2,y_3)=y_1^{2}+y_2^{2}+y_3^{2}+2y_2y_3$。\\n(1) 求可逆变换 $x=Py$ 将 $f$ 化为 $g$；\\n(2) 是否存在正交变换 $x=Qy$ 将 $f$ 化为 $g$？",
      "answer": "(2) 不存在",
      "sol": "**(1)** $f$ 的矩阵 $A=\\begin{pmatrix}1&1&-1\\\\1&2&0\\\\-1&0&2\\end{pmatrix}$，特征值为 $0,2,3$；$g$ 的矩阵 $B=\\begin{pmatrix}1&0&0\\\\0&1&1\\\\0&1&1\\end{pmatrix}$，特征值为 $0,1,2$。\\n分别作可逆线性变换把两者化为同一规范形，再复合即可得 $P$。\\n**(2)** 正交变换保持矩阵的特征值不变。$f$ 与 $g$ 的特征值不同（$0,2,3$ vs $0,1,2$），故不存在这样的正交变换。"
     },
     {
      "no": 22,
      "stem": "（本题满分 12 分）设二维随机变量 $(X,Y)$ 的概率密度 $f(x,y)=\\begin{cases}\\dfrac{1}{\\pi},&x^{2}+y^{2}<1\\\\ 0,&\\text{其他}\\end{cases}$。\\n(1) 求 $\\operatorname{Cov}(X,Y)$；(2) 判断 $X$ 与 $Y$ 是否相互独立；\\n(3) 求 $Z=X^{2}+Y^{2}$ 的概率密度。",
      "answer": "(1) $0$；(2) 不独立；(3) $f_Z(z)=1\\ (0<z<1)$",
      "sol": "**(1)** 区域关于原点对称，$E(X)=E(Y)=0$；$E(XY)=\\displaystyle\\iint xy\\cdot\\dfrac1\\pi dxdy=0$（奇函数）。故 $\\operatorname{Cov}(X,Y)=0$。\\n**(2)** 边缘密度 $f_X(x)=\\dfrac{2\\sqrt{1-x^{2}}}{\\pi}$，$f_Y(y)=\\dfrac{2\\sqrt{1-y^{2}}}{\\pi}$，乘积不等于联合密度，故不独立。**注意：不相关 ≠ 独立。**\\n**(3)** $F_Z(z)=P\\{X^{2}+Y^{2}\\le z\\}=\\dfrac{\\pi z}{\\pi}=z\\ (0<z<1)$，故 $f_Z(z)=1\\ (0<z<1)$。"
     }
    ]
   }
  ]
 },
 {
  "id": "2022-1",
  "year": 2022,
  "subject": "数学一",
  "structure": "选择题 10×5=50 分　填空题 6×5=30 分　解答题 6 题共 70 分",
  "conf": "原文",
  "sections": [
   {
    "name": "一、选择题",
    "note": "1~10 小题，每小题 5 分，共 50 分。",
    "items": [
     {
      "no": 1,
      "stem": "设函数 $f(x)$ 满足 $\\lim\\limits_{x\\to1}\\dfrac{f(x)}{\\ln x}=1$，则（ ）",
      "opts": [
       "$f(1)=0$",
       "$\\lim\\limits_{x\\to1}f(x)=0$",
       "$f'(1)=1$",
       "$\\lim\\limits_{x\\to1}f'(x)=1$"
      ],
      "answer": "B",
      "sol": "$f(x)=\\dfrac{f(x)}{\\ln x}\\cdot\\ln x\\to1\\cdot0=0$，故 $\\lim\\limits_{x\\to1}f(x)=0$。\\n未给 $f$ 在 $x=1$ 连续或可导的条件，故 A、C、D 均不能推出。"
     },
     {
      "no": 2,
      "stem": "设函数 $z=xyf\\Bigl(\\dfrac{y}{x}\\Bigr)$，其中 $f(u)$ 可导。若 $x\\dfrac{\\partial z}{\\partial x}+y\\dfrac{\\partial z}{\\partial y}=\\dfrac{y^{2}}{xy}(\\ln y-\\ln x)$，则（ ）",
      "opts": [
       "$f(1)=\\dfrac12,\\ f'(1)=0$",
       "$f(1)=0,\\ f'(1)=\\dfrac12$",
       "$f(1)=1,\\ f'(1)=1$",
       "$f(1)=0,\\ f'(1)=1$"
      ],
      "answer": "B",
      "sol": "记 $u=\\dfrac yx$。$z=xyf(u)$。\\n$\\dfrac{\\partial z}{\\partial x}=yf(u)-yuf'(u)$，$\\dfrac{\\partial z}{\\partial y}=xf(u)+xf'(u)$……按检索稿的答案选 B。",
      "conf": "OCR"
     },
     {
      "no": 3,
      "stem": "已知数列 $\\{x_n\\}$，其中 $-\\dfrac{\\pi}{2}\\le x_n\\le\\dfrac{\\pi}{2}$，则（ ）",
      "opts": [
       "当 $\\lim\\cos(\\sin x_n)$ 存在时 $\\lim x_n$ 存在",
       "当 $\\lim\\sin(\\cos x_n)$ 存在时 $\\lim x_n$ 存在",
       "当 $\\lim\\cos(\\sin x_n)$ 存在时 $\\lim\\sin x_n$ 存在，但 $\\lim x_n$ 不一定存在",
       "当 $\\lim\\sin(\\cos x_n)$ 存在时 $\\lim\\cos x_n$ 存在，但 $\\lim x_n$ 不一定存在"
      ],
      "answer": "D",
      "sol": "逐项构造反例判断。$\\sin(\\cos x_n)$ 在 $x_n\\in[-\\frac\\pi2,\\frac\\pi2]$ 上关于 $x_n$ 单调（$\\cos x_n$ 在 $[0,1]$ 上取值，$\\sin$ 在该区间单调），故其极限存在可推出 $\\cos x_n$ 极限存在，但 $x_n$ 本身可能正负交替，极限不存在。"
     },
     {
      "no": 4,
      "stem": "已知 $I_1=\\displaystyle\\int_0^{1}\\dfrac{x}{2(1+\\cos x)}dx$，$I_2=\\displaystyle\\int_0^{1}\\dfrac{\\ln(1+x)}{1+\\cos x}dx$，$I_3=\\displaystyle\\int_0^{1}\\dfrac{2x}{1+\\sin x}dx$，则（ ）",
      "opts": [
       "$I_1<I_3<I_2$",
       "$I_2<I_1<I_3$",
       "$I_1<I_2<I_3$",
       "$I_3<I_2<I_1$"
      ],
      "answer": "A",
      "sol": "在 $0<x<1$ 上比较被积函数大小即可。按检索稿答案选 A。",
      "conf": "OCR"
     },
     {
      "no": 5,
      "stem": "下列四个条件中，3 阶矩阵 $A$ 可对角化的一个充分但不必要条件是（ ）",
      "opts": [
       "$A$ 有 3 个互不相等的特征值",
       "$A$ 有 3 个线性无关的特征向量",
       "$A$ 有 3 个两两线性无关的特征向量",
       "$A$ 的属于不同特征值的特征向量正交"
      ],
      "answer": "A",
      "sol": "「有 $n$ 个线性无关的特征向量」是充要条件（B 排除）。\\n「有 $n$ 个互异特征值」可推出可对角化，但可对角化不要求特征值互异，故为充分不必要条件。"
     },
     {
      "no": 6,
      "stem": "设 $A,B$ 为 $n$ 阶矩阵，$E$ 为单位矩阵。若方程组 $Ax=0$ 与 $Bx=0$ 同解，则（ ）",
      "opts": [
       "方程组 $\\begin{pmatrix}E&A\\\\O&B\\end{pmatrix}y=0$ 只有零解",
       "方程组 $\\begin{pmatrix}E&AB\\\\O&A^{T}\\end{pmatrix}y=0$ 只有零解",
       "方程组 $\\begin{pmatrix}AB&B\\\\B&A\\end{pmatrix}y=0$ 与 $\\begin{pmatrix}BA&A\\\\A&B\\end{pmatrix}y=0$ 同解",
       "方程组 $\\begin{pmatrix}AB&O\\\\O&BA\\end{pmatrix}y=0$ 与 $\\begin{pmatrix}BA&O\\\\O&AB\\end{pmatrix}y=0$ 同解"
      ],
      "answer": "C",
      "sol": "$Ax=0$ 与 $Bx=0$ 同解 $\\Rightarrow$ $A,B$ 行空间相同。利用分块矩阵的初等变换可证 C 成立。"
     },
     {
      "no": 7,
      "stem": "设 $\\alpha_1=(\\lambda,1,1)^{T},\\ \\alpha_2=(1,\\lambda,1)^{T},\\ \\alpha_3=(1,1,\\lambda)^{T}$。若向量组 $\\alpha_1,\\alpha_2,\\alpha_3$ 与 $\\alpha_1,\\alpha_2$ 等价，则 $\\lambda$ 的取值范围是（ ）",
      "opts": [
       "$\\{0,1\\}$",
       "$(-\\infty,0)$",
       "$\\{\\lambda\\mid\\lambda\\in R,\\ \\lambda\\ne-2\\}$",
       "$\\{\\lambda\\mid\\lambda\\in R,\\ \\lambda\\ne-1\\}$"
      ],
      "answer": "C",
      "sol": "两组等价要求它们张成同一子空间。$|\\alpha_1,\\alpha_2,\\alpha_3|=(\\lambda-1)^{2}(\\lambda+2)$。\\n按检索稿的答案选 C（$\\lambda\\ne-2$）。建议对照官方原卷核验条件表述。",
      "conf": "OCR"
     },
     {
      "no": 8,
      "stem": "设随机变量 $X\\sim U(0,3)$，随机变量 $Y$ 服从参数为 2 的泊松分布，且 $X$ 与 $Y$ 的协方差为 $-1$，则 $D(2X-Y+1)=$（ ）",
      "opts": [
       "$1$",
       "$5$",
       "$9$",
       "$12$"
      ],
      "answer": "C",
      "sol": "$D(X)=\\dfrac{3^{2}}{12}=\\dfrac34$，$D(Y)=2$，$\\operatorname{Cov}(X,Y)=-1$。\\n$D(2X-Y+1)=4D(X)+D(Y)-4\\operatorname{Cov}(X,Y)=3+2+4=9$。"
     },
     {
      "no": 9,
      "stem": "设 $X_1,X_2,\\cdots,X_n$ 独立同分布，$X_1$ 的 4 阶矩存在，记 $\\mu_k=E(X_1^{k})\\ (k=1,2,3,4)$。由切比雪夫不等式，对任意 $\\varepsilon>0$，$P\\Bigl\\{\\Bigl|\\dfrac1n\\sum\\limits_{i=1}^{n}X_i^{2}-\\mu_2\\Bigr|\\ge\\varepsilon\\Bigr\\}\\le$（ ）",
      "opts": [
       "$\\dfrac{\\mu_4-\\mu_2^{2}}{n\\varepsilon^{2}}$",
       "$\\dfrac{\\mu_4-\\mu_2^{2}}{\\sqrt n\\varepsilon^{2}}$",
       "$\\dfrac{\\mu_4-\\mu_2^{2}}{n^{2}\\varepsilon^{2}}$",
       "$\\dfrac{\\mu_2-\\mu_1^{2}}{n\\varepsilon^{2}}$"
      ],
      "answer": "A",
      "sol": "令 $Y_i=X_i^{2}$，$E(Y_i)=\\mu_2$，$D(Y_i)=\\mu_4-\\mu_2^{2}$。切比雪夫不等式给出 $P\\{|\\bar Y-\\mu_2|\\ge\\varepsilon\\}\\le\\dfrac{D(\\bar Y)}{\\varepsilon^{2}}=\\dfrac{\\mu_4-\\mu_2^{2}}{n\\varepsilon^{2}}$。"
     },
     {
      "no": 10,
      "stem": "设随机变量 $X\\sim N(0,1)$，在 $X=x$ 条件下随机变量 $Y\\sim N(x,1)$，则 $X$ 与 $Y$ 的相关系数为（ ）",
      "opts": [
       "$\\dfrac12$",
       "$\\dfrac{\\sqrt3}{3}$",
       "$\\dfrac13$",
       "$\\dfrac{\\sqrt2}{2}$"
      ],
      "answer": "D",
      "sol": "$E(Y)=E[E(Y\\mid X)]=E(X)=0$，$D(Y)=E[D(Y\\mid X)]+D[E(Y\\mid X)]=1+1=2$。\\n$E(XY)=E[XE(Y\\mid X)]=E(X^{2})=1$，故 $\\operatorname{Cov}(X,Y)=1$。\\n$\\rho=\\dfrac{1}{\\sqrt{1}\\sqrt{2}}=\\dfrac{\\sqrt2}{2}$。"
     }
    ]
   },
   {
    "name": "二、填空题",
    "note": "11~16 小题，每小题 5 分，共 30 分。",
    "items": [
     {
      "no": 11,
      "stem": "函数 $f(x,y)=x^{2}+2y^{2}$ 在点 $(0,1)$ 处的最大方向导数为 $\\rule{2.6em}{0.5pt}$",
      "answer": "$4$",
      "sol": "$\\nabla f=(2x,4y)$，在 $(0,1)$ 处为 $(0,4)$，模为 $4$。最大方向导数即梯度模。"
     },
     {
      "no": 12,
      "stem": "$\\displaystyle\\int_1^{e^{2}}\\dfrac{\\ln x}{\\sqrt x}\\,dx=\\rule{2.6em}{0.5pt}$",
      "answer": "$4$",
      "sol": "令 $t=\\sqrt x$，$dx=2t\\,dt$：$=\\displaystyle\\int_1^{e}\\dfrac{2\\ln t}{t}\\cdot2t\\,dt=4\\int_1^{e}\\ln t\\,dt=4[t\\ln t-t]_1^{e}=4$。"
     },
     {
      "no": 13,
      "stem": "当 $x\\ge0,\\ y\\ge0$ 时，$x^{2}+y^{2}\\le ke^{x+y}$ 恒成立，则 $k$ 的取值范围是 $\\rule{2.6em}{0.5pt}$",
      "answer": "$k\\ge\\dfrac{2}{e^{2}}$",
      "sol": "即求 $\\dfrac{x^{2}+y^{2}}{e^{x+y}}$ 在 $x,y\\ge0$ 上的最大值。\\n由对称性最大值在 $x=y=t$ 处取得：$\\dfrac{2t^{2}}{e^{2t}}$，求导得 $t=1$ 时取最大值 $\\dfrac{2}{e^{2}}$。\\n故需 $k\\ge\\dfrac{2}{e^{2}}$。"
     },
     {
      "no": 14,
      "stem": "已知级数 $\\sum\\dfrac{a_n}{n(x-a)^{n}}$ 的收敛域为 $(4,+\\infty)$，则 $a=\\rule{2.6em}{0.5pt}$",
      "answer": "（待核验）",
      "sol": "检索稿中该题表达式残缺（原文为图片）。请以官方原卷核对。",
      "conf": "OCR"
     },
     {
      "no": 15,
      "stem": "已知矩阵 $A$ 和 $E-A$ 可逆，$E$ 为单位矩阵。若矩阵 $B$ 满足 $(E-(E-A)^{-1})B=A$，则 $B-A=\\rule{2.6em}{0.5pt}$",
      "answer": "$-E$",
      "sol": "$E-(E-A)^{-1}=(E-A)^{-1}\\bigl[(E-A)-E\\bigr]=-(E-A)^{-1}A$。\\n故 $-(E-A)^{-1}AB=A$，即 $(E-A)^{-1}AB=-A$，$AB=-(E-A)A$。\\n由 $A$ 可逆得 $B=-(E-A)=-E+A$，故 $B-A=-E$。"
     },
     {
      "no": 16,
      "stem": "设 $A,B,C$ 为随机事件，且 $A$ 与 $B$ 互不相容，$A$ 与 $C$ 互不相容，$B$ 与 $C$ 相互独立，$P(A)=P(B)=P(C)=\\dfrac13$，则 $P(B\\cup C\\mid A\\cup B\\cup C)=\\rule{2.6em}{0.5pt}$",
      "answer": "（待核验）",
      "sol": "按检索稿给出的形式，需用条件概率公式逐步展开。结果标为待核验，请以官方原卷核对。",
      "conf": "OCR"
     }
    ]
   },
   {
    "name": "三、解答题",
    "note": "17~22 小题，共 70 分。",
    "items": [
     {
      "no": 17,
      "stem": "（本题满分 10 分）设函数 $y(x)$ 是微分方程 $y'+\\dfrac{y}{2\\sqrt x}=2+\\sqrt x$ 满足条件 $y(1)=3$ 的解，求曲线 $y=y(x)$ 的渐近线。",
      "answer": "斜渐近线 $y=2x$",
      "sol": "一阶线性方程，$\\int Pdx=\\sqrt x$。\\n$y=e^{-\\sqrt x}\\Bigl[\\displaystyle\\int(2+\\sqrt x)e^{\\sqrt x}dx+C\\Bigr]$。令 $t=\\sqrt x$：\\n$\\displaystyle\\int(2+t)e^{t}\\cdot2t\\,dt=2\\int(2t+t^{2})e^{t}dt=2t^{2}e^{t}+C'$。\\n故 $y=2t^{2}+Ce^{-t}=2x+Ce^{-\\sqrt x}$。由 $y(1)=3$ 得 $2+Ce^{-1}=3$，$C=e$。\\n$x\\to+\\infty$ 时 $e^{1-\\sqrt x}\\to0$，故斜渐近线为 $y=2x$。"
     },
     {
      "no": 18,
      "stem": "（本题满分 12 分）已知平面区域 $D=\\{(x,y)\\mid y-2\\le x\\le\\sqrt{4-y},\\ 0\\le y\\le2\\}$，计算 $I=\\displaystyle\\iint_D\\dfrac{x-y}{x^{2}+y^{2}}dxdy$。",
      "answer": "（待核验）",
      "sol": "**思路**：区域边界为直线 $x=y-2$ 与抛物线 $x=\\sqrt{4-y}$（即 $y=4-x^{2}$），换用极坐标或先对 $y$ 后对 $x$ 积分。检索稿给出的数值标为待核验，请以官方答案为准。",
      "conf": "OCR"
     },
     {
      "no": 19,
      "stem": "（本题满分 12 分）已知 $\\Sigma$ 为曲面 $4x^{2}+y^{2}+z^{2}=1\\ (x\\ge0,y\\ge0,z\\ge0)$ 的上侧，$\\Gamma$ 是 $\\Sigma$ 的边界曲线，其正向与 $\\Sigma$ 的正法向满足右手法则，计算曲线积分 $I=\\displaystyle\\oint_\\Gamma(yz^{2}-\\cos z)dx+2xz^{2}dy+(2xyz+x\\sin z)dz$。",
      "answer": "（待核验）",
      "sol": "**思路**：用斯托克斯公式化为曲面积分。检索稿结果标为待核验，请以官方答案为准。",
      "conf": "OCR"
     },
     {
      "no": 20,
      "stem": "（本题满分 12 分）设函数 $f(x)$ 在 $(-\\infty,+\\infty)$ 上有二阶连续导数。证明：$f''(x)\\ge0$ 的充要条件是：对不同实数 $a,b$，$f\\Bigl(\\dfrac{a+b}{2}\\Bigr)\\le\\dfrac{1}{b-a}\\displaystyle\\int_a^{b}f(x)\\,dx$。",
      "sol": "**必要性**：$f''\\ge0$ 时 $f$ 为凸函数。对 $f(x)$ 在 $x_0=\\dfrac{a+b}{2}$ 处泰勒展开：\\n$f(x)\\ge f(x_0)+f'(x_0)(x-x_0)$，两边在 $[a,b]$ 上积分（一次项积分为 $0$），得 $\\displaystyle\\int_a^bf(x)dx\\ge(b-a)f\\Bigl(\\dfrac{a+b}{2}\\Bigr)$，即证。\\n**充分性**：反证。若某点 $x_0$ 处 $f''(x_0)<0$，由 $f''$ 连续，存在邻域使 $f''<0$，在其中取以 $x_0$ 为中点的 $a,b$，同样积分可得反向严格不等式，矛盾。故 $f''\\ge0$。"
     },
     {
      "no": 21,
      "stem": "（本题满分 12 分）已知二次型 $f(x_1,x_2,x_3)=\\sum_i\\sum_j a_{ij}x_ix_j$（矩阵 $A$ 给定）。\\n(1) 写出二次型矩阵；(2) 求正交变换 $x=Qy$ 化为标准形；(3) 求 $f(x_1,x_2,x_3)=0$ 的解。",
      "answer": "特征值 $14,0,0$；标准形 $14y_1^{2}$；解为 $x=k(1,2,3)^{T},\\ k\\in R$",
      "sol": "按检索稿：$A$ 的特征值为 $14,0,0$，故正交变换后标准形为 $14y_1^{2}$。\\n$f=0\\Leftrightarrow y_1=0$，对应一维解空间，解为 $x=k(1,2,3)^{T}$。",
      "conf": "OCR"
     },
     {
      "no": 22,
      "stem": "（本题满分 12 分）设 $X_1,\\cdots,X_n$ 来自均值为 $\\theta$ 的指数分布总体，$Y_1,\\cdots,Y_m$ 来自均值为 $2\\theta$ 的指数分布总体，两样本独立，$\\theta>0$ 未知。求 $\\theta$ 的极大似然估计 $\\hat\\theta$ 及 $E(\\hat\\theta)$。",
      "answer": "$\\hat\\theta=\\dfrac{1}{n+m}\\Bigl(\\sum X_i+\\dfrac12\\sum Y_j\\Bigr)$；$E(\\hat\\theta)=\\theta$",
      "sol": "$X$ 的密度 $\\dfrac1\\theta e^{-x/\\theta}$，$Y$ 的密度 $\\dfrac{1}{2\\theta}e^{-y/(2\\theta)}$。\\n似然函数 $L=\\dfrac{1}{\\theta^{n}}\\exp\\Bigl(-\\dfrac{\\sum x_i}{\\theta}\\Bigr)\\cdot\\dfrac{1}{(2\\theta)^{m}}\\exp\\Bigl(-\\dfrac{\\sum y_j}{2\\theta}\\Bigr)$。\\n取对数求导并令为 $0$：$-\\dfrac{n+m}{\\theta}+\\dfrac{\\sum x_i}{\\theta^{2}}+\\dfrac{\\sum y_j}{2\\theta^{2}}=0$，解得 $\\hat\\theta=\\dfrac{1}{n+m}\\Bigl(\\sum X_i+\\dfrac12\\sum Y_j\\Bigr)$。\\n$E(\\hat\\theta)=\\dfrac{1}{n+m}(n\\theta+m\\theta)=\\theta$，即无偏。",
      "conf": "OCR"
     }
    ]
   }
  ]
 },
 {
  "id": "2021-1",
  "year": 2021,
  "subject": "数学一",
  "structure": "选择题 10×5=50 分　填空题 6×5=30 分　解答题 6 题共 70 分（新大纲首年）",
  "conf": "原文",
  "sections": [
   {
    "name": "一、选择题",
    "note": "1~10 小题，每小题 5 分，共 50 分。",
    "items": [
     {
      "no": 1,
      "stem": "设函数 $f(x)=\\dfrac{e^{x}-1}{x}\\ (x\\ne0),\\ f(0)=1$，则 $f(x)$ 在 $x=0$ 处（ ）",
      "opts": [
       "连续且取极大值",
       "连续且取极小值",
       "可导且导数为 $0$",
       "可导且导数不为 $0$"
      ],
      "answer": "D",
      "sol": "$\\lim\\limits_{x\\to0}\\dfrac{e^{x}-1}{x}=1=f(0)$，连续。\\n$f'(0)=\\lim\\limits_{x\\to0}\\dfrac{e^{x}-1-x}{x^{2}}=\\dfrac12\\ne0$。"
     },
     {
      "no": 2,
      "stem": "设函数 $f(x,y)$ 可微，且 $f(x+1,e^{x})=x(x+1)^{2}$，$f(x,x^{2})=2x^{2}\\ln x$，则 $df(1,1)=$（ ）",
      "opts": [
       "$dx+dy$",
       "$dx-dy$",
       "$dy$",
       "$-dy$"
      ],
      "answer": "C",
      "sol": "对两式分别求导并令 $x=0$ 与 $x=1$：\\n$\\begin{cases}f_x(1,1)+f_y(1,1)=1\\\\ f_x(1,1)+2f_y(1,1)=2\\end{cases}$，解得 $f_x(1,1)=0,\\ f_y(1,1)=1$。\\n故 $df(1,1)=dy$。"
     },
     {
      "no": 3,
      "stem": "设函数 $f(x)=\\cdots$ 在 $x=0$ 处的 3 次泰勒多项式为 $a+bx+cx^{2}$，则（ ）",
      "opts": [
       "$a=1,\\ b=0,\\ c=-\\dfrac76$",
       "$a=1,\\ b=0,\\ c=\\dfrac76$",
       "$a=-1,\\ b=-1,\\ c=-\\dfrac76$",
       "$a=-1,\\ b=-1,\\ c=\\dfrac76$"
      ],
      "answer": "A",
      "sol": "（被展开函数在检索稿中残缺，按答案 A 录入。）由泰勒展开逐项比对系数即可。",
      "conf": "OCR"
     },
     {
      "no": 4,
      "stem": "设函数 $f(x)$ 在区间 $[0,1]$ 上连续，则 $\\displaystyle\\int_0^{1}f(x)dx=$（ ）",
      "opts": [
       "$\\lim\\limits_{n\\to\\infty}\\sum\\limits_{k=1}^{n}f\\Bigl(\\dfrac{k-1}{n}\\Bigr)\\dfrac1n$",
       "$\\lim\\limits_{n\\to\\infty}\\sum\\limits_{k=1}^{n}f\\Bigl(\\dfrac{2k-1}{2n}\\Bigr)\\dfrac1n$",
       "$\\lim\\limits_{n\\to\\infty}\\sum\\limits_{k=1}^{n}f\\Bigl(\\dfrac{k}{n}\\Bigr)\\dfrac1n$",
       "$\\lim\\limits_{n\\to\\infty}\\sum\\limits_{k=1}^{n}f\\Bigl(\\dfrac{k}{n}\\Bigr)\\dfrac{2}{n}$"
      ],
      "answer": "B",
      "sol": "$\\dfrac{2k-1}{2n}$ 是区间 $\\bigl[\\frac{k-1}{n},\\frac kn\\bigr]$ 的**中点**，符合定积分定义中对 $\\xi_k$ 的任意取法。\\nA、C 取端点，也正确；本题按检索稿以 B 为标准答案（若题干限定「中点」，则唯一选 B）。",
      "conf": "OCR"
     },
     {
      "no": 5,
      "stem": "二次型 $f(x_1,x_2,x_3)=(x_1+x_2)^{2}+(x_2+x_3)^{2}-(x_3-x_1)^{2}$ 的正惯性指数与负惯性指数依次为（ ）",
      "opts": [
       "$2,0$",
       "$1,1$",
       "$2,1$",
       "$1,2$"
      ],
      "answer": "B",
      "sol": "展开并配方（或求矩阵特征值）可得正惯性指数 $1$、负惯性指数 $1$。"
     },
     {
      "no": 6,
      "stem": "已知 $\\alpha_1=(1,0,0)^{T},\\ \\alpha_2=(2,2,1)^{T},\\ \\alpha_3=(1,3,1)^{T}$，记 $\\beta_1=\\alpha_1$，$\\beta_2=\\alpha_2-k\\beta_1$，$\\beta_3=\\alpha_3-l_1\\beta_2-l_2\\beta_1$，若 $\\beta_1,\\beta_2,\\beta_3$ 两两正交，则 $l_1,l_2$ 依次为（ ）",
      "opts": [
       "$\\dfrac52,\\dfrac12$",
       "$-\\dfrac52,\\dfrac12$",
       "$\\dfrac52,-\\dfrac12$",
       "$-\\dfrac52,-\\dfrac12$"
      ],
      "answer": "A",
      "sol": "这是 Gram-Schmidt 正交化过程。逐次用正交条件 $\\beta_1^{T}\\beta_2=0$、$\\beta_1^{T}\\beta_3=0$、$\\beta_2^{T}\\beta_3=0$ 求解。",
      "conf": "OCR"
     },
     {
      "no": 7,
      "stem": "设 $A,B$ 为 $n$ 阶实矩阵，下列**不成立**的是（ ）",
      "opts": [
       "$r\\begin{pmatrix}A&O\\\\O&A^{T}A\\end{pmatrix}=2r(A)$",
       "$r\\begin{pmatrix}A&AB\\\\O&A^{T}\\end{pmatrix}=2r(A)$",
       "$r\\begin{pmatrix}BA&A\\\\A^{T}&O\\end{pmatrix}=2r(A)$",
       "$r\\begin{pmatrix}A&O\\\\BA&A^{T}\\end{pmatrix}=2r(A)$"
      ],
      "answer": "C",
      "sol": "A、B、D 均可由分块矩阵的初等变换（利用 $r(A^{T}A)=r(A)$）验证成立，C 一般不成立。"
     },
     {
      "no": 8,
      "stem": "设 $A,B$ 为随机事件，且 $0<P(B)<1$，下列命题中**不成立**的是（ ）",
      "opts": [
       "若 $P(A\\mid B)=P(A)$，则 $P(A\\mid\\bar B)=P(A)$",
       "若 $P(A\\mid B)>P(A)$，则 $P(A\\mid\\bar B)<P(A)$",
       "若 $P(A\\mid B)>P(A\\mid\\bar B)$，则 $P(A\\mid B)>P(A)$",
       "若 $P(A\\mid B)>P(A)$，则 $P(A\\mid\\bar B)>P(A)$"
      ],
      "answer": "D",
      "sol": "$P(A)=P(A\\mid B)P(B)+P(A\\mid\\bar B)P(\\bar B)$，即 $P(A)$ 是两条件概率的加权平均。\\n故其中一个大于 $P(A)$ 时另一个必小于 $P(A)$，D 不成立。",
      "conf": "OCR"
     },
     {
      "no": 9,
      "stem": "设 $(X_1,Y_1),\\cdots,(X_n,Y_n)$ 为来自总体 $N(\\mu_1,\\mu_2;\\sigma_1^{2},\\sigma_2^{2};\\rho)$ 的简单随机样本，令 $\\theta=\\mu_1-\\mu_2$，$\\bar X=\\dfrac1n\\sum X_i$，$\\bar Y=\\dfrac1n\\sum Y_i$，$\\hat\\theta=\\bar X-\\bar Y$，则（ ）",
      "opts": [
       "$\\hat\\theta$ 是 $\\theta$ 的无偏估计，$D(\\hat\\theta)=\\dfrac{\\sigma_1^{2}+\\sigma_2^{2}}{n}$",
       "$\\hat\\theta$ 不是无偏估计，$D(\\hat\\theta)=\\dfrac{\\sigma_1^{2}+\\sigma_2^{2}}{n}$",
       "$\\hat\\theta$ 是 $\\theta$ 的无偏估计，$D(\\hat\\theta)=\\dfrac{\\sigma_1^{2}+\\sigma_2^{2}-2\\rho\\sigma_1\\sigma_2}{n}$",
       "$\\hat\\theta$ 不是无偏估计，$D(\\hat\\theta)=\\dfrac{\\sigma_1^{2}+\\sigma_2^{2}-2\\rho\\sigma_1\\sigma_2}{n}$"
      ],
      "answer": "C",
      "sol": "$E(\\hat\\theta)=E(\\bar X)-E(\\bar Y)=\\mu_1-\\mu_2=\\theta$，无偏。\\n$D(\\hat\\theta)=D(\\bar X)+D(\\bar Y)-2\\operatorname{Cov}(\\bar X,\\bar Y)=\\dfrac{\\sigma_1^{2}+\\sigma_2^{2}-2\\rho\\sigma_1\\sigma_2}{n}$。"
     },
     {
      "no": 10,
      "stem": "设 $X_1,\\cdots,X_{16}$ 是来自总体 $N(\\mu,4)$ 的简单随机样本，检验 $H_0:\\mu\\le10,\\ H_1:\\mu>10$，$\\Phi(x)$ 为标准正态分布函数。若拒绝域为 $W=\\{\\bar X\\ge11\\}$，则 $\\mu=11.5$ 时该检验犯第二类错误的概率为（ ）",
      "opts": [
       "$1-\\Phi(0.5)$",
       "$1-\\Phi(1)$",
       "$1-\\Phi(1.5)$",
       "$1-\\Phi(2)$"
      ],
      "answer": "B",
      "sol": "$\\mu=11.5$ 时 $\\bar X\\sim N(11.5,0.25)$，$\\sigma_{\\bar X}=0.5$。\\n$\\beta=P\\{\\bar X<11\\mid\\mu=11.5\\}=P\\Bigl\\{\\dfrac{\\bar X-11.5}{0.5}<\\dfrac{11-11.5}{0.5}\\Bigr\\}=\\Phi(-1)=1-\\Phi(1)$。"
     }
    ]
   },
   {
    "name": "二、填空题",
    "note": "11~16 小题，每小题 5 分，共 30 分。",
    "items": [
     {
      "no": 11,
      "stem": "$\\displaystyle\\int_0^{+\\infty}\\dfrac{dx}{x^{2}+2x+2}=\\rule{2.6em}{0.5pt}$",
      "answer": "$\\dfrac{\\pi}{4}$",
      "sol": "$=\\arctan(x+1)\\Big|_0^{+\\infty}=\\dfrac{\\pi}{2}-\\dfrac{\\pi}{4}=\\dfrac{\\pi}{4}$。"
     },
     {
      "no": 12,
      "stem": "设函数 $y=y(x)$ 由参数方程 $\\begin{cases}x=2e^{t}+1\\\\ y=4(t-1)e^{t}+t^{2}\\end{cases}\\ (t\\ge0)$ 确定，则 $\\dfrac{d^{2}y}{dx^{2}}\\Big|_{t=0}=\\rule{2.6em}{0.5pt}$",
      "answer": "$\\dfrac23$（另一版本作 $\\dfrac43$，待核验）",
      "sol": "$\\dfrac{dy}{dx}=\\dfrac{y'(t)}{x'(t)}=\\dfrac{4te^{t}+2t}{2e^{t}}=2t+te^{-t}\\cdot\\ldots$ 需按原式重算。\\n检索稿给出两个不同版本，请以官方原卷核对。",
      "conf": "OCR"
     },
     {
      "no": 13,
      "stem": "欧拉方程 $x^{2}y''+xy'-4y=0$ 满足 $y(1)=1,\\ y'(1)=2$ 的解为 $y=\\rule{2.6em}{0.5pt}$",
      "answer": "$x^{2}$",
      "sol": "令 $x=e^{t}$，方程化为 $\\dfrac{d^{2}y}{dt^{2}}-4y=0$，解得 $y=C_1x^{2}+\\dfrac{C_2}{x^{2}}$。\\n由 $y(1)=1,\\ y'(1)=2$ 得 $C_1=1,\\ C_2=0$，故 $y=x^{2}$。"
     },
     {
      "no": 14,
      "stem": "设 $\\Sigma$ 为空间区域 $\\{(x,y,z)\\mid x^{2}+4y^{2}\\le4,\\ 0\\le z\\le2\\}$ 表面的外侧，则 $\\displaystyle\\iint_\\Sigma x^{2}dydz+y^{2}dzdx+z\\,dxdy=\\rule{2.6em}{0.5pt}$",
      "answer": "$4\\pi$",
      "sol": "高斯公式：$\\operatorname{div}\\vec F=2x+2y+1$。区域关于 $yz$、$xz$ 平面对称，$2x,2y$ 积分为 $0$。\\n故 $=\\displaystyle\\iiint_\\Omega 1\\,dv=$ 体积 $=2\\pi\\times2=4\\pi$。"
     },
     {
      "no": 15,
      "stem": "设 $A=(a_{ij})$ 为 3 阶矩阵，$A_{ij}$ 为代数余子式。若 $A$ 的每行元素之和均为 2，且 $|A|=3$，则 $A_{11}+A_{21}+A_{31}=\\rule{2.6em}{0.5pt}$",
      "answer": "$\\dfrac32$",
      "sol": "$A_{11}+A_{21}+A_{31}$ 是第一列各元素的代数余子式之和，等于 $|A^{T}|$ 中把第一列换成全 $1$ 后的行列式。\\n由 $A^{T}$ 每列元素之和为 $2$，结合 $|A^{T}|=|A|=3$ 可推得结果为 $\\dfrac{|A|}{2}=\\dfrac32$。"
     },
     {
      "no": 16,
      "stem": "甲、乙两个盒子中各装有 2 个红球和 2 个白球。先从甲盒中任取一球，观察颜色后放入乙盒中，再从乙盒中任取一球。令 $X,Y$ 分别表示从甲盒和乙盒中取到的红球个数，则 $X$ 与 $Y$ 的相关系数 $=\\rule{2.6em}{0.5pt}$",
      "answer": "$\\dfrac15$",
      "sol": "$X\\sim B(1,\\frac12)$，$E(X)=\\frac12$，$D(X)=\\frac14$。\\n$P\\{Y=1\\}=\\dfrac12\\cdot\\dfrac35+\\dfrac12\\cdot\\dfrac25=\\dfrac12$，$E(Y)=\\dfrac12$。\\n$E(XY)=P\\{X=1,Y=1\\}=\\dfrac12\\cdot\\dfrac35=\\dfrac{3}{10}$。\\n$\\operatorname{Cov}(X,Y)=\\dfrac{3}{10}-\\dfrac14=\\dfrac{1}{20}$，$D(Y)=\\dfrac12\\cdot\\dfrac35\\cdot\\dfrac25+\\ldots=\\dfrac{1}{4}+\\dfrac{1}{20}=\\dfrac{3}{10}$……\\n按检索稿答案为 $\\dfrac15$，建议以官方原卷核验中间步骤。",
      "conf": "OCR"
     }
    ]
   },
   {
    "name": "三、解答题",
    "note": "17~22 小题，共 70 分。",
    "items": [
     {
      "no": 17,
      "stem": "（本题满分 10 分）求极限 $\\lim\\limits_{x\\to0}\\left[\\dfrac{1+\\displaystyle\\int_0^{x}e^{t^{2}}dt}{e^{x}-1}-\\dfrac{1}{\\sin x}\\right]$。",
      "answer": "$\\dfrac12$",
      "sol": "通分后分母 $\\sim x^{2}$。分子用泰勒展开：\\n$\\displaystyle\\int_0^xe^{t^2}dt=x+\\dfrac{x^{3}}{3}+o(x^{3})$，$\\sin x=x-\\dfrac{x^{3}}{6}+o(x^{3})$，$e^{x}-1=x+\\dfrac{x^{2}}{2}+\\dfrac{x^{3}}{6}+o(x^{3})$。\\n分子 $=\\Bigl(1+x+\\dfrac{x^{3}}{3}\\Bigr)\\Bigl(x-\\dfrac{x^{3}}{6}\\Bigr)-\\Bigl(x+\\dfrac{x^{2}}{2}+\\dfrac{x^{3}}{6}\\Bigr)+o(x^{3})=\\dfrac{x^{2}}{2}+o(x^{2})$。\\n故极限为 $\\dfrac12$。"
     },
     {
      "no": 18,
      "stem": "（本题满分 12 分）设 $u_n(x)$ 满足给定表达式 $(n=1,2,\\cdots)$，求级数 $\\sum u_n(x)$ 的收敛域及和函数。",
      "answer": "和函数 $S(x)=\\dfrac{e^{-x}}{e}+(1-x)\\ln(1-x)+x,\\ x\\in(0,1)$",
      "sol": "（题干中的 $u_n(x)$ 在检索稿中为图片，此处仅保留结论。）\\n和函数 $S(x)=\\dfrac{e^{-x}}{e}+(1-x)\\ln(1-x)+x$，收敛域 $x\\in(0,1)$。",
      "conf": "OCR"
     },
     {
      "no": 19,
      "stem": "（本题满分 12 分）已知曲线 $C:\\begin{cases}x^{2}+2y^{2}-z=6\\\\ 4x+2y+z=30\\end{cases}$，求 $C$ 上的点到 $xOy$ 坐标面距离的最大值。",
      "answer": "$66$",
      "sol": "即求 $|z|$ 的最大值。由第二式 $z=30-4x-2y$，代入第一式消去 $z$ 得关于 $x,y$ 的二次约束。\\n用拉格朗日乘数法求极值，得 $z$ 的最大值为 $66$。",
      "conf": "OCR"
     },
     {
      "no": 20,
      "stem": "（本题满分 12 分）设 $D\\subset R^{2}$ 是有界单连通闭区域，$I(D)=\\displaystyle\\iint_D(4-x^{2}-y^{2})dxdy$ 取得最大值的积分区域记为 $D_1$。\\n(1) 求 $I(D_1)$；(2) 计算 $\\displaystyle\\oint_{\\partial D_1}\\dfrac{(xe^{x^{2}+4y^{2}}+4y+y)dx+(4ye^{x^{2}+4y^{2}}-x)dy}{x^{2}+4y^{2}}$。",
      "answer": "(1) $8\\pi$；(2) $-\\pi$",
      "sol": "**(1)** 要使积分最大，$D_1$ 应取被积函数 $4-x^{2}-y^{2}\\ge0$ 的区域，即圆 $x^{2}+y^{2}\\le4$。\\n$I(D_1)=\\displaystyle\\iint_{x^{2}+y^{2}\\le4}(4-x^{2}-y^{2})dxdy=\\int_0^{2\\pi}\\!\\!\\int_0^{2}(4-r^{2})r\\,dr\\,d\\theta=2\\pi\\Bigl(8-4\\Bigr)=8\\pi$。\\n**(2)** 用格林公式，注意分母 $x^{2}+4y^{2}$ 的处理，最终结果为 $-\\pi$。",
      "conf": "OCR"
     },
     {
      "no": 21,
      "stem": "（本题满分 12 分）已知 $A=\\begin{pmatrix}1&0&1\\\\0&a&0\\\\1&0&1\\end{pmatrix}$。\\n(1) 求正交矩阵 $P$ 使 $P^{T}AP$ 为对角矩阵；\\n(2) 求正定矩阵 $C$ 使 $C^{2}=(a+3)E-A$。",
      "answer": "特征值 $a+2,\\ a-1$（二重）",
      "sol": "$A$ 为实对称矩阵。$|\\lambda E-A|=(\\lambda-a)(\\lambda-a)^{2}-(\\lambda-a)\\cdot\\ldots$，化简得特征值 $a+2$ 与 $a-1$（二重）。\\n求特征向量、施密特正交化并单位化即得正交矩阵 $P$。\\n$(a+3)E-A$ 的特征值为 $1,4,4$，其正平方根的特征值为 $1,2,2$，在同一特征向量基下构造即得正定矩阵 $C$。"
     },
     {
      "no": 22,
      "stem": "（本题满分 12 分）设 $(X_1,Y_1),\\cdots,(X_n,Y_n)$ 来自总体（分布给定）的样本，求参数的最大似然估计。",
      "answer": "（按官方答案）",
      "sol": "（题干中的总体分布在检索稿中残缺。）标准做法：写似然函数 $\\to$ 取对数 $\\to$ 求导令零 $\\to$ 解出估计量。",
      "conf": "OCR"
     }
    ]
   }
  ]
 },
 {
  "id": "2019-3",
  "year": 2019,
  "subject": "数学三",
  "structure": "选择题 8×4=32 分　填空题 6×4=24 分　解答题 9 题共 94 分（旧大纲）",
  "conf": "原文",
  "sections": [
   {
    "name": "一、选择题",
    "note": "1~8 小题，每小题 4 分，共 32 分。",
    "items": [
     {
      "no": 1,
      "stem": "当 $x\\to0$ 时，若 $x-\\tan x$ 与 $x^{k}$ 是同阶无穷小，则 $k=$（ ）",
      "opts": [
       "$1$",
       "$2$",
       "$3$",
       "$4$"
      ],
      "answer": "C",
      "sol": "$x-\\tan x\\sim-\\dfrac{x^{3}}{3}$，故 $k=3$。"
     },
     {
      "no": 2,
      "stem": "已知方程 $x^{5}-5x+k=0$ 有 3 个不同的实根，则 $k$ 的取值范围是（ ）",
      "opts": [
       "$(-\\infty,-4)$",
       "$(4,+\\infty)$",
       "$[-4,4]$",
       "$(-4,4)$"
      ],
      "answer": "D",
      "sol": "令 $f(x)=x^{5}-5x+k$，$f'(x)=5x^{4}-5=0\\Rightarrow x=\\pm1$。\\n$f(-1)=4+k$（极大），$f(1)=-4+k$（极小）。要有 3 个实根需 $f(1)<0<f(-1)$，即 $-4<k<4$。"
     },
     {
      "no": 3,
      "stem": "已知微分方程 $y''+ay'+by=ce^{x}$ 的通解为 $y=(C_1+C_2x)e^{-x}+e^{x}$，则 $a,b,c$ 依次为（ ）",
      "opts": [
       "$1,0,1$",
       "$1,0,2$",
       "$2,1,3$",
       "$2,1,4$"
      ],
      "answer": "D",
      "sol": "由通解形式知齐次部分特征根为 $-1$（二重），故 $r^{2}+ar+b=(r+1)^{2}=r^{2}+2r+1$，即 $a=2,\\ b=1$。\\n$e^{x}$ 为特解，代入 $y''+2y'+y=ce^{x}$ 得 $(1+2+1)e^{x}=4e^{x}$，故 $c=4$。"
     },
     {
      "no": 4,
      "stem": "若 $\\sum\\limits_{n\\ge1}u_n$ 绝对收敛，$\\sum\\limits_{n\\ge1}v_n$ 条件收敛，则（ ）",
      "opts": [
       "$\\sum u_nv_n$ 条件收敛",
       "$\\sum u_nv_n$ 绝对收敛",
       "$\\sum(u_n+v_n)$ 收敛",
       "$\\sum(u_n+v_n)$ 发散"
      ],
      "answer": "B",
      "sol": "$|u_nv_n|\\le M|v_n|$……更严谨：$\\sum|u_n|$ 收敛 $\\Rightarrow u_n\\to0$ 且有界，设 $|u_n|\\le M$，则 $|u_nv_n|\\le M|v_n|$——但 $|v_n|$ 不收敛，此路不通。\\n正确推理：$\\sum u_n$ 绝对收敛 $\\Rightarrow\\sum|u_n|$ 收敛；由 $\\sum v_n$ 条件收敛知 $\\sum|v_n|$ 发散。\\n（按检索稿答案选 B；本题推理细节请对照官方解析。）",
      "conf": "OCR"
     },
     {
      "no": 5,
      "stem": "设 $A$ 是 4 阶矩阵，$A^{*}$ 是 $A$ 的伴随矩阵。若 $Ax=0$ 的基础解系中只有 2 个向量，则 $r(A^{*})=$（ ）",
      "opts": [
       "$0$",
       "$1$",
       "$2$",
       "$3$"
      ],
      "answer": "A",
      "sol": "$4-r(A)=2\\Rightarrow r(A)=2$。因 $r(A)=2<4-1=3$，故 $r(A^{*})=0$。"
     },
     {
      "no": 6,
      "stem": "设 $A$ 是 3 阶实对称矩阵，$E$ 是 3 阶单位矩阵。若 $A^{2}+A=2E$ 且 $|A|=4$，则二次型 $x^{T}Ax$ 的规范形为（ ）",
      "opts": [
       "$y_1^{2}+y_2^{2}+y_3^{2}$",
       "$y_1^{2}+y_2^{2}-y_3^{2}$",
       "$y_1^{2}-y_2^{2}-y_3^{2}$",
       "$-y_1^{2}-y_2^{2}-y_3^{2}$"
      ],
      "answer": "C",
      "sol": "$(A+2E)(A-E)=O$，特征值只能是 $-2$ 或 $1$。\\n设 $1$ 出现 $k$ 次，$|A|=(-2)^{3-k}=4\\Rightarrow 3-k=2\\Rightarrow k=1$。\\n特征值 $1,-2,-2$，规范形 $y_1^{2}-y_2^{2}-y_3^{2}$。"
     },
     {
      "no": 7,
      "stem": "设 $A,B$ 为随机事件，则 $P(A)=P(B)$ 的充分必要条件是（ ）",
      "opts": [
       "$P(A\\cup B)=P(A)+P(B)$",
       "$P(AB)=P(A)P(B)$",
       "$P(A-B)=P(B-A)$",
       "$P(AB)=P(A\\cup B)$"
      ],
      "answer": "C",
      "sol": "$P(A-B)=P(A)-P(AB)$，$P(B-A)=P(B)-P(AB)$，两者相等 $\\Leftrightarrow P(A)=P(B)$。"
     },
     {
      "no": 8,
      "stem": "设随机变量 $X$ 与 $Y$ 相互独立，且都服从正态分布 $N(\\mu,\\sigma^{2})$，则 $P\\{|X-Y|<1\\}$（ ）",
      "opts": [
       "与 $\\mu$ 无关，而与 $\\sigma^{2}$ 有关",
       "与 $\\mu$ 有关，而与 $\\sigma^{2}$ 无关",
       "与 $\\mu,\\sigma^{2}$ 都有关",
       "与 $\\mu,\\sigma^{2}$ 都无关"
      ],
      "answer": "A",
      "sol": "$X-Y\\sim N(0,2\\sigma^{2})$，分布不含 $\\mu$，只与 $\\sigma^{2}$ 有关，故 A 正确。"
     }
    ]
   },
   {
    "name": "二、填空题",
    "note": "9~14 小题，每小题 4 分，共 24 分。",
    "items": [
     {
      "no": 9,
      "stem": "$\\lim\\limits_{n\\to\\infty}\\Bigl(\\dfrac{1}{1\\cdot2}+\\dfrac{1}{2\\cdot3}+\\cdots+\\dfrac{1}{n(n+1)}\\Bigr)^{n}=\\rule{2.6em}{0.5pt}$",
      "answer": "$\\dfrac1e$",
      "sol": "括号内 $=\\dfrac{n}{n+1}$，故原式 $=\\lim\\Bigl(\\dfrac{n}{n+1}\\Bigr)^{n}=e^{-1}$。"
     },
     {
      "no": 10,
      "stem": "曲线 $y=x\\sin x+2\\cos x\\ \\Bigl(-\\dfrac{\\pi}{2}<x<\\dfrac{3\\pi}{2}\\Bigr)$ 的拐点坐标为 $\\rule{2.6em}{0.5pt}$",
      "answer": "$(\\pi,-2)$",
      "sol": "$y''=-x\\sin x$。在给定区间内 $y''=0$ 得 $x=0$ 或 $x=\\pi$。\\n$x=\\pi$ 两侧 $y''$ 变号，$y(\\pi)=-2$，故拐点为 $(\\pi,-2)$。"
     },
     {
      "no": 11,
      "stem": "已知 $f(x)=\\displaystyle\\int_1^{x}\\sqrt{1+t^{4}}\\,dt$，则 $\\displaystyle\\int_0^{1}x^{2}f(x)\\,dx=\\rule{2.6em}{0.5pt}$",
      "answer": "$\\dfrac{1}{18}(\\sqrt2-1)$",
      "sol": "分部积分：$=\\Bigl[\\dfrac{x^{3}}{3}f(x)\\Bigr]_0^1-\\dfrac13\\displaystyle\\int_0^1x^{3}\\sqrt{1+x^{4}}dx$。\\n由 $f(1)=0$，第一项为 $0$；$\\displaystyle\\int_0^1x^{3}\\sqrt{1+x^{4}}dx=\\dfrac16\\cdot\\dfrac23(1+x^{4})^{3/2}\\Big|_0^1=\\dfrac19(2\\sqrt2-1)$。\\n故结果 $=-\\dfrac13\\cdot\\dfrac19(2\\sqrt2-1)=\\dfrac{1}{18}(\\sqrt2-1)$。"
     },
     {
      "no": 12,
      "stem": "$A,B$ 两种商品的价格分别为 $P_A,P_B$，$A$ 商品的需求函数 $Q_A=500-2P_A-P_A^{2}+P_B$，则当 $P_A=10,\\ P_B=20$ 时，$A$ 商品对自身价格的需求弹性 $\\eta_{AA}=\\rule{2.6em}{0.5pt}$",
      "answer": "$\\dfrac25$",
      "sol": "$\\eta_{AA}=-\\dfrac{P_A}{Q_A}\\cdot\\dfrac{\\partial Q_A}{\\partial P_A}$。\\n$\\dfrac{\\partial Q_A}{\\partial P_A}=-2-2P_A$，在 $P_A=10$ 处为 $-22$。\\n$Q_A=500-20-100+20=400$。故 $\\eta_{AA}=-\\dfrac{10}{400}\\times(-22)=\\dfrac{220}{400}=\\dfrac{11}{20}$……\\n按检索稿答案为 $\\dfrac25$，请以官方原卷核验。",
      "conf": "OCR"
     },
     {
      "no": 13,
      "stem": "设 $A=\\begin{pmatrix}2&a&1\\\\0&1&1\\\\1&0&-1\\end{pmatrix}$，$b=(0,1,a)^{T}$。若 $Ax=b$ 有无穷多解，则 $a=\\rule{2.6em}{0.5pt}$",
      "answer": "（待核验）",
      "sol": "检索稿标注该题答案为 $1$ 但未通过验算，题干表达式也可能有 OCR 误差。请以官方原卷核对。",
      "conf": "OCR"
     },
     {
      "no": 14,
      "stem": "设随机变量 $X$ 的概率密度 $f(x)=\\begin{cases}\\dfrac{x}{2},&0<x<2\\\\ 0,&\\text{其他}\\end{cases}$，$F(x)$ 为分布函数，$EX$ 为数学期望，则 $P\\{F(X)>EX-1\\}=\\rule{2.6em}{0.5pt}$",
      "answer": "$\\dfrac23$",
      "sol": "$EX=\\dfrac43$，$F(x)=\\dfrac{x^{2}}{4}$。\\n由 $F(X)=\\dfrac{X^{2}}{4}>\\dfrac13$ 得 $X>\\dfrac{2}{\\sqrt3}$，$P=1-F\\Bigl(\\dfrac{2}{\\sqrt3}\\Bigr)=1-\\dfrac13\\cdot\\dfrac14\\div\\ldots=1-\\dfrac{1/3}{1}=\\dfrac23$。"
     }
    ]
   },
   {
    "name": "三、解答题",
    "note": "15~23 小题，共 94 分。",
    "items": [
     {
      "no": 15,
      "stem": "（本题满分 10 分）已知函数 $f(x)=\\begin{cases}x^{2x},&x>0\\\\ xe^{x}+1,&x\\le0\\end{cases}$，求 $f'(x)$，并求 $f(x)$ 的极值。",
      "answer": "极大值 $f(0)=1$；极小值 $f(-1)=1-\\dfrac1e$、$f\\Bigl(\\dfrac1e\\Bigr)=e^{-2/e}$",
      "sol": "$x>0$ 时 $f=x^{2x}=e^{2x\\ln x}$，$f'=x^{2x}(2\\ln x+2)$，令 $f'=0$ 得 $x=\\dfrac1e$。\\n$x\\le0$ 时 $f'=(1+x)e^{x}$，令 $f'=0$ 得 $x=-1$。\\n分别判断左右两侧符号，得 $x=0$ 为极大值点（$f(0)=1$）、$x=-1$ 与 $x=\\dfrac1e$ 为极小值点。",
      "conf": "OCR"
     },
     {
      "no": 16,
      "stem": "（本题满分 10 分）设 $f(u,v)$ 具有二阶连续偏导数，且 $g(x,y)=f(xy,\\ x-y)$，求 $\\dfrac{\\partial^{2}g}{\\partial x^{2}}+2\\dfrac{\\partial^{2}g}{\\partial x\\partial y}+\\dfrac{\\partial^{2}g}{\\partial y^{2}}$。",
      "answer": "（按官方答案）",
      "sol": "记 $u=xy,\\ v=x-y$。\\n$g_x=yf_1'+f_2'$，$g_y=xf_1'-f_2'$，再求二阶偏导并按复合函数链式法则展开相加。",
      "conf": "OCR"
     },
     {
      "no": 17,
      "stem": "（本题满分 10 分）已知 $y(x)$ 满足微分方程（方程右端给定）且 $y(1)=e$。\\n(1) 求 $y(x)$；(2) $D=\\{(x,y)\\mid 1\\le x\\le2,\\ 0\\le y\\le y(x)\\}$，求 $D$ 绕 $x$ 轴旋转所得旋转体体积。",
      "answer": "（按官方答案）",
      "sol": "(1) 一阶线性方程，用通解公式求解；(2) $V=\\pi\\displaystyle\\int_1^{2}y^{2}(x)dx$。",
      "conf": "OCR"
     },
     {
      "no": 18,
      "stem": "（本题满分 10 分）求曲线 $y=e^{-x}\\sin x\\ (x\\ge0)$ 与 $x$ 轴之间图形的面积。",
      "answer": "$\\dfrac{1+e^{-\\pi}}{2(1-e^{-\\pi})}$",
      "sol": "曲线与 $x$ 轴交于 $x=k\\pi$。每段上的面积为 $\\dfrac{e^{-k\\pi}(1+e^{-\\pi})}{2}$，求和（等比级数）得 $S=\\dfrac{1+e^{-\\pi}}{2(1-e^{-\\pi})}$。"
     },
     {
      "no": 19,
      "stem": "（本题满分 10 分）设 $a_n=\\displaystyle\\int_0^{1}x^{n-1}\\sqrt{1-x^{2}}dx\\ (n=1,2,\\cdots)$。\\n(1) 证明数列 $\\{a_n\\}$ 单调递减，且 $a_n=\\dfrac{n-2}{n+1}a_{n-2}\\ (n\\ge3)$；\\n(2) 求 $\\lim\\limits_{n\\to\\infty}\\dfrac{a_n}{a_{n-1}}$。",
      "answer": "(2) $1$",
      "sol": "**(1)** 被积函数随 $n$ 增大而减小，故单调递减。\\n分部积分可得 $(n+1)a_n=b_n$（$b_n=\\int_0^1\\dfrac{x^{n-1}}{\\sqrt{1-x^{2}}}dx$），再由 $b_n=\\dfrac{n-2}{n-1}b_{n-2}$ 得 $a_n=\\dfrac{n-2}{n+1}a_{n-2}$。\\n**(2)** 由递推式与单调性夹逼得极限为 $1$。\\n（注：检索稿中递推式写作 $\\dfrac{n-1}{n}$，经数学核验应为 $\\dfrac{n-2}{n+1}$。）"
     },
     {
      "no": 20,
      "stem": "（本题满分 11 分）设向量组 Ⅰ 与 Ⅱ（给定）等价，求 $a$，并将 $\\beta_3$ 用 $\\alpha_1,\\alpha_2,\\alpha_3$ 表示。",
      "answer": "$a\\ne\\pm1$；$\\beta_3=\\alpha_1+\\alpha_2-\\alpha_3$",
      "sol": "两组等价 $\\Leftrightarrow$ 张成同一空间。分别求秩并比较得 $a\\ne\\pm1$。\\n再解线性方程组得 $\\beta_3=\\alpha_1+\\alpha_2-\\alpha_3$（$a=1$ 时表示不唯一）。",
      "conf": "OCR"
     },
     {
      "no": 21,
      "stem": "（本题满分 11 分）已知矩阵 $A$ 与 $B$ 相似（矩阵给定）。(1) 求 $x,y$；(2) 求可逆矩阵 $P$ 使 $P^{-1}AP=B$。",
      "answer": "$x=3,\\ y=-2$",
      "sol": "相似矩阵有相同的迹与行列式，由此列方程求出 $x,y$，再求特征向量构造 $P$。",
      "conf": "OCR"
     },
     {
      "no": 22,
      "stem": "（本题满分 11 分）已知随机变量 $X,Y$ 相互独立，$X$ 服从参数为 1 的指数分布，$Y$ 的分布律给定。令 $Z=XY$。(1) 求 $Z$ 的概率密度；(2) $p$ 为何值时 $X,Z$ 不相关；(3) $X,Z$ 是否独立。",
      "answer": "（按官方答案）",
      "sol": "(1) 用全概率公式按 $Y$ 的取值分解；(2) 令 $\\operatorname{Cov}(X,Z)=0$ 解出 $p$；(3) 检验 $f_{XZ}(x,z)=f_X(x)f_Z(z)$ 是否成立。",
      "conf": "OCR"
     },
     {
      "no": 23,
      "stem": "（本题满分 11 分）设随机变量 $X$ 的概率密度为给定形式（含参数 $\\mu$ 已知、$\\sigma^{2}$ 未知），求常数 $A$ 及 $\\sigma^{2}$ 的最大似然估计量。",
      "answer": "（按官方答案）",
      "sol": "先用 $\\displaystyle\\int f(x)dx=1$ 定出 $A$，再写似然函数、取对数求导、令零解出 $\\hat\\sigma^{2}$。",
      "conf": "OCR"
     }
    ]
   }
  ]
 },
 {
  "id": "2018-1",
  "year": 2018,
  "subject": "数学一",
  "structure": "选择题 8×4=32 分　填空题 6×4=24 分　解答题 9 题共 94 分（旧大纲）",
  "conf": "OCR",
  "sections": [
   {
    "name": "一、选择题",
    "note": "1~8 小题，每小题 4 分，共 32 分。",
    "items": [
     {
      "no": 1,
      "stem": "下列函数中在 $x=0$ 处不可导的是（ ）",
      "opts": [
       "$f(x)=|x|\\sin|x|$",
       "$f(x)=|x|\\sin\\sqrt{|x|}$",
       "$f(x)=\\cos|x|$",
       "$f(x)=\\cos\\sqrt{|x|}$"
      ],
      "answer": "D",
      "sol": "对 D：$\\dfrac{f(x)-f(0)}{x}=\\dfrac{\\cos\\sqrt{|x|}-1}{x}\\sim\\dfrac{-|x|/2}{x}$，左右导数不等（$\\pm\\dfrac12$），故不可导。\\nA、B、C 在该点导数均为 $0$。"
     },
     {
      "no": 2,
      "stem": "过点 $(1,0,0)$、$(0,1,0)$ 且与曲面 $z=x^{2}+y^{2}$ 相切的平面为（ ）",
      "opts": [
       "$z=0$ 与 $x+y-z=1$",
       "$z=0$ 与 $2x+2y-z=2$",
       "$x=y$ 与 $x+y-z=1$",
       "$x=y$ 与 $2x+2y-z=2$"
      ],
      "answer": "B",
      "sol": "平面过 $(1,0,0)$、$(0,1,0)$，故形如 $x+y+cz=1$。与抛物面相切需判别式为 $0$，解得 $c=-1$ 或 $c=0$（后者对应 $z=0$ 过原点相切）。"
     },
     {
      "no": 6,
      "stem": "设 $A,B$ 为 $n$ 阶矩阵，记 $r(X)$ 为矩阵 $X$ 的秩，$(X,Y)$ 表示分块矩阵，则（ ）",
      "opts": [
       "$r(A,AB)=r(A)$",
       "$r(A,BA)=r(A)$",
       "$r(A,B)=\\max\\{r(A),r(B)\\}$",
       "$r(A,B)=r(A^{T},B^{T})$"
      ],
      "answer": "A",
      "sol": "$(A,AB)=A(E,B)$，故 $r(A,AB)\\le r(A)$；又含 $A$ 为子块，$r(A,AB)\\ge r(A)$，故相等。"
     },
     {
      "no": 7,
      "stem": "设随机变量 $X$ 的概率密度 $f(x)$ 满足 $f(1+x)=f(1-x)$，且 $\\displaystyle\\int_0^{2}f(x)dx=0.6$，则 $P\\{X<0\\}=$（ ）",
      "opts": [
       "$0.2$",
       "$0.3$",
       "$0.4$",
       "$0.5$"
      ],
      "answer": "A",
      "sol": "$f$ 关于 $x=1$ 对称 $\\Rightarrow P\\{X\\le1\\}=0.5$，$P\\{0\\le X\\le1\\}=0.3$。\\n故 $P\\{X<0\\}=0.5-0.3=0.2$。"
     },
     {
      "no": 8,
      "stem": "设总体 $X$ 服从正态分布 $N(\\mu,\\sigma^{2})$，$X_1,\\cdots,X_n$ 是来自总体的简单随机样本，据此样本检验假设 $H_0:\\mu=0,\\ H_1:\\mu\\ne0$，则（ ）",
      "opts": [
       "若 $H_0$ 为真，则统计量服从正态分布",
       "若 $H_0$ 为假，则统计量服从正态分布",
       "若 $H_0$ 为真，则统计量服从 $t$ 分布",
       "若 $H_0$ 为真，则统计量服从 $F$ 分布"
      ],
      "answer": "A",
      "sol": "（选项按检索稿整理，答案为 D。）$H_0:\\mu=0$ 为真时检验统计量的分布需按 $\\sigma^{2}$ 是否已知分类讨论。",
      "conf": "OCR"
     }
    ]
   },
   {
    "name": "二、填空题",
    "note": "9~14 小题，每小题 4 分，共 24 分。",
    "items": [
     {
      "no": 10,
      "stem": "设函数 $f(x)$ 具有 2 阶连续导数。若曲线 $y=f(x)$ 过点 $(0,0)$ 且与曲线 $y=2^{x}$ 在点 $(1,2)$ 处相切，则 $\\displaystyle\\int_0^{1}xf''(x)dx=\\rule{2.6em}{0.5pt}$",
      "answer": "$2(\\ln2-1)$",
      "sol": "由条件 $f(0)=0,\\ f(1)=2,\\ f'(1)=2\\ln2$。\\n$\\displaystyle\\int_0^1xf''(x)dx=[xf'(x)]_0^1-\\int_0^1f'(x)dx=f'(1)-[f(1)-f(0)]=2\\ln2-2$。"
     },
     {
      "no": 11,
      "stem": "设 $\\vec F(x,y,z)=xy\\,\\vec i-yz\\,\\vec j+zx\\,\\vec k$，则 $\\operatorname{rot}\\vec F(1,1,0)=\\rule{2.6em}{0.5pt}$",
      "answer": "$\\vec i-\\vec k$",
      "sol": "$\\operatorname{rot}\\vec F=(R_y-Q_z,\\ P_z-R_x,\\ Q_x-P_y)=(y,\\ -z,\\ -x)$。\\n代入 $(1,1,0)$ 得 $(1,0,-1)=\\vec i-\\vec k$。"
     },
     {
      "no": 12,
      "stem": "设 $\\Gamma$ 为球面 $x^{2}+y^{2}+z^{2}=1$ 与平面 $x+y+z=0$ 的交线，则 $\\displaystyle\\oint_\\Gamma xy\\,ds=\\rule{2.6em}{0.5pt}$",
      "answer": "$-\\dfrac{\\pi}{3}$",
      "sol": "在 $\\Gamma$ 上 $(x+y+z)^{2}=0\\Rightarrow x^{2}+y^{2}+z^{2}+2(xy+yz+zx)=0$，结合 $x^{2}+y^{2}+z^{2}=1$ 得 $xy+yz+zx=-\\dfrac12$。\\n积分得 $\\oint(xy+yz+zx)ds=-\\dfrac12\\cdot2\\pi=-\\pi$。\\n由轮换对称性三者相等，故 $\\oint xy\\,ds=-\\dfrac{\\pi}{3}$。"
     },
     {
      "no": 13,
      "stem": "设 2 阶矩阵 $A$ 有两个不同特征值，$\\alpha_1,\\alpha_2$ 是 $A$ 的线性无关的特征向量，且满足 $A^{2}(\\alpha_1+\\alpha_2)=\\alpha_1+\\alpha_2$，则 $|A|=\\rule{2.6em}{0.5pt}$",
      "answer": "$-1$",
      "sol": "设 $A\\alpha_i=\\lambda_i\\alpha_i$，由条件得 $\\lambda_1^{2}=\\lambda_2^{2}=1$。\\n因 $\\lambda_1\\ne\\lambda_2$，故 $\\{\\lambda_1,\\lambda_2\\}=\\{1,-1\\}$，$|A|=-1$。"
     },
     {
      "no": 14,
      "stem": "设随机事件 $A$ 与 $B$ 相互独立，$A$ 与 $C$ 相互独立，$BC=\\varnothing$。若 $P(A)=P(B)=\\dfrac13$，$P(AC\\mid A\\cup B\\cup C)=\\dfrac14$，则 $P(C)=\\rule{2.6em}{0.5pt}$",
      "answer": "$\\dfrac14$",
      "sol": "$P(AC)=P(A)P(C)=\\dfrac13p$（$p=P(C)$）。\\n$P(A\\cup B\\cup C)=P(A)+P(B)+P(C)-P(AB)-P(AC)-P(BC)+P(ABC)=\\dfrac23+p-\\dfrac19-\\dfrac p3$。\\n由 $\\dfrac{p/3}{2/3+p-1/9-p/3}=\\dfrac14$ 解得 $p=\\dfrac14$。"
     }
    ]
   },
   {
    "name": "三、解答题",
    "note": "15~23 小题，共 94 分。",
    "items": [
     {
      "no": 15,
      "stem": "（本题满分 10 分）求不定积分 $\\displaystyle\\int e^{2x}\\arctan\\sqrt{e^{x}-1}\\,dx$。",
      "answer": "$\\dfrac{e^{2x}}{2}\\arctan\\sqrt{e^{x}-1}-\\dfrac13(e^{x}-1)^{3/2}-\\dfrac12\\sqrt{e^{x}-1}+C$",
      "sol": "令 $u=\\arctan\\sqrt{e^{x}-1}$，则 $e^{x}=\\sec^{2}u$，$x=\\ln\\sec^{2}u$，$dx=2\\tan u\\,du$。\\n原式 $=\\displaystyle\\int\\sec^{4}u\\cdot u\\cdot2\\tan u\\,du$，再用分部积分逐项处理。",
      "conf": "OCR"
     },
     {
      "no": 16,
      "stem": "（本题满分 10 分）将长为 $2\\,m$ 的铁丝分成三段，依次围成圆、正方形与正三角形，三个图形的面积之和是否存在最小值？若存在，求出最小值。",
      "answer": "存在最小值",
      "sol": "设三段长分别为 $x,y,z$（$x+y+z=2$），面积 $S=\\dfrac{x^{2}}{4\\pi}+\\dfrac{y^{2}}{16}+\\dfrac{z^{2}}{4\\sqrt3}$。\\n用拉格朗日乘数法（或柯西不等式）求条件极值，可得最小值存在且在三段按特定比例分配时取得。",
      "conf": "OCR"
     },
     {
      "no": 18,
      "stem": "（本题满分 10 分）已知微分方程 $y'+y=f(x)$，其中 $f(x)$ 是 $R$ 上的连续函数。\\n(1) 若 $f(x)=x$，求方程的通解；\\n(2) 若 $f(x)$ 是周期为 $T$ 的函数，证明方程存在唯一以 $T$ 为周期的解。",
      "answer": "(1) $y=Ce^{-x}+x-1$",
      "sol": "**(1)** 一阶线性方程：$y=e^{-x}\\Bigl(\\displaystyle\\int xe^{x}dx+C\\Bigr)=e^{-x}(xe^{x}-e^{x}+C)=Ce^{-x}+x-1$。\\n**(2)** 通解为 $y=e^{-x}\\Bigl(\\displaystyle\\int_0^{x}f(t)e^{t}dt+C\\Bigr)$。要求 $y(x+T)=y(x)$，可解出唯一确定的常数 $C$，从而得到唯一的周期解。",
      "conf": "OCR"
     },
     {
      "no": 19,
      "stem": "（本题满分 10 分）设数列 $\\{x_n\\}$ 满足 $x_n>0$，$x_ne^{x_{n+1}}=e^{x_n}-1\\ (n=1,2,\\cdots)$。证明 $\\{x_n\\}$ 收敛，并求 $\\lim\\limits_{n\\to\\infty}x_n$。",
      "answer": "极限为 $0$",
      "sol": "由 $x_ne^{x_{n+1}}=e^{x_n}-1>0$ 知 $x_{n+1}>0$，且 $e^{x_{n+1}}=\\dfrac{e^{x_n}-1}{x_n}$。\\n先证单调性（比较 $e^{x_{n+1}}$ 与 $e^{x_n}$），再用单调有界准则得收敛，最后对递推式取极限得极限为 $0$。",
      "conf": "OCR"
     },
     {
      "no": 20,
      "stem": "（本题满分 11 分）设实二次型 $f(x_1,x_2,x_3)=(x_1-x_2+x_3)^{2}+(x_2+x_3)^{2}+(x_1+ax_3)^{2}$，其中 $a$ 是参数。\\n(1) 求 $f(x_1,x_2,x_3)=0$ 的解；(2) 求 $f(x_1,x_2,x_3)$ 的规范形。",
      "answer": "（按官方答案，需按 $a$ 分类讨论）",
      "sol": "(1) $f=0$ 等价于三个平方项同时为 $0$，解线性方程组，需按 $a$ 分类讨论解的情形；\\n(2) 写出二次型矩阵，求特征值（含参数 $a$），据其符号定规范形。",
      "conf": "OCR"
     },
     {
      "no": 21,
      "stem": "（本题满分 11 分）已知 $a$ 是常数，矩阵 $A$ 可经初等变换化为矩阵 $B$，求 $a$ 及满足 $AP=B$ 的可逆矩阵 $P$。",
      "answer": "（按官方答案）",
      "sol": "由 $A$ 与 $B$ 等价（同秩）定出 $a$；再由 $AP=B$ 即 $P=A^{-1}B$ 求解。",
      "conf": "OCR"
     },
     {
      "no": 22,
      "stem": "（本题满分 11 分）设随机变量 $X$ 与 $Y$ 相互独立，$X$ 的分布给定，$Y$ 服从参数为 $\\lambda$ 的泊松分布，令 $Z=XY$。(1) 求 $\\operatorname{Cov}(X,Z)$；(2) 求 $Z$ 的概率分布。",
      "answer": "(1) $\\operatorname{Cov}(X,Z)=\\lambda E(X^{2})$",
      "sol": "**(1)** $\\operatorname{Cov}(X,Z)=\\operatorname{Cov}(X,XY)=E(X^{2}Y)-E(X)E(XY)$。\\n由独立：$=E(X^{2})E(Y)-E(X)^{2}E(Y)=\\lambda\\bigl[E(X^{2})-E(X)^{2}\\bigr]+\\lambda E(X)^{2}$……\\n更直接：$\\operatorname{Cov}(X,XY)=E(X^{2})E(Y)-E(X)^{2}E(Y)=\\lambda D(X)+\\lambda E(X)^{2}=\\lambda E(X^{2})$。\\n**(2)** 按 $X$ 的取值分解，用全概率公式求 $Z$ 的分布律。",
      "conf": "OCR"
     },
     {
      "no": 23,
      "stem": "（本题满分 11 分）设总体 $X$ 的概率密度 $f(x;\\sigma)=\\dfrac{1}{2\\sigma}e^{-|x|/\\sigma}\\ (-\\infty<x<+\\infty)$，$\\sigma\\in(0,+\\infty)$ 未知。求 $\\sigma$ 的最大似然估计量 $\\hat\\sigma$，并求 $E(\\hat\\sigma)$、$D(\\hat\\sigma)$。",
      "answer": "$\\hat\\sigma=\\dfrac1n\\sum|X_i|$；$E(\\hat\\sigma)=\\sigma$",
      "sol": "似然函数 $L=\\Bigl(\\dfrac{1}{2\\sigma}\\Bigr)^{n}e^{-\\frac1\\sigma\\sum|x_i|}$，取对数求导得 $\\hat\\sigma=\\dfrac1n\\sum\\limits_{i=1}^{n}|X_i|$。\\n$|X_i|$ 服从均值为 $\\sigma$ 的指数分布，故 $E(\\hat\\sigma)=\\sigma$（无偏）。"
     }
    ]
   }
  ]
 },
 {
  "id": "2020-2",
  "year": 2020,
  "subject": "数学二",
  "structure": "选择题 8×4=32 分　填空题 6×4=24 分　解答题 9 题共 94 分（旧大纲）",
  "conf": "OCR（部分收录）",
  "sections": [
   {
    "name": "一、选择题",
    "note": "1~8 小题，每小题 4 分，共 32 分。（本套检索稿公式缺失较多，仅收录题干完整者）",
    "items": [
     {
      "no": 1,
      "stem": "当 $x\\to0^{+}$ 时，下列无穷小量中阶数最高的是（ ）",
      "opts": [
       "$\\displaystyle\\int_0^{x}(e^{t^{2}}-1)dt$",
       "$\\displaystyle\\int_0^{x}\\ln(1+t^{3})dt$",
       "$\\displaystyle\\int_0^{\\sin x}\\sin t^{2}dt$",
       "$\\displaystyle\\int_0^{1-\\cos x}\\sin t^{2}dt$"
      ],
      "answer": "D",
      "sol": "逐个定阶：A 为 $3$ 阶、B 为 $4$ 阶、C 为 $3$ 阶、D 为 $6$ 阶。故 D 阶数最高。"
     },
     {
      "no": 6,
      "stem": "函数 $f(x)$ 在区间 $[-2,2]$ 上可导，且 $f'(x)>f(x)>0$，则（ ）",
      "opts": [
       "$\\dfrac{f(0)}{f(-1)}>1$",
       "$\\dfrac{f(1)}{f(-1)}>e$",
       "$\\dfrac{f(1)}{f(-1)}<e^{2}$",
       "$\\dfrac{f(2)}{f(-1)}<e^{3}$"
      ],
      "answer": "A",
      "sol": "令 $F(x)=\\dfrac{f(x)}{e^{x}}$，$F'(x)=\\dfrac{f'(x)-f(x)}{e^{x}}>0$，$F$ 单调递增。\\n由 $F(0)>F(-1)$ 得 $\\dfrac{f(0)}{1}>\\dfrac{f(-1)}{e^{-1}}$，即 $\\dfrac{f(0)}{f(-1)}>e>1$。故 A 正确。"
     }
    ]
   },
   {
    "name": "二、填空题",
    "note": "9~14 小题，每小题 4 分，共 24 分。",
    "items": [
     {
      "no": 11,
      "stem": "设 $z=\\arctan(xy)+\\sin(x+y)$，则 $dz\\Big|_{(0,\\pi)}=\\rule{2.6em}{0.5pt}$",
      "answer": "$(\\pi+1)dx+dy$",
      "sol": "$z_x=\\dfrac{y}{1+x^{2}y^{2}}+\\cos(x+y)$，在 $(0,\\pi)$ 处为 $\\pi+\\cos\\pi=\\pi-1$。\\n$z_y=\\dfrac{x}{1+x^{2}y^{2}}+\\cos(x+y)$，在 $(0,\\pi)$ 处为 $0+\\cos\\pi=-1$。\\n故 $dz=(\\pi-1)dx-dy$。（检索稿给 $(\\pi+1)dx+dy$，符号有出入，待核验。）",
      "conf": "OCR"
     },
     {
      "no": 12,
      "stem": "斜边长为 $2a$ 的等腰直角三角形平板铅直沉入水中，斜边与水面齐平，则平板一侧所受的水压力为 $\\rule{2.6em}{0.5pt}$",
      "answer": "$\\dfrac13\\rho ga^{3}$",
      "sol": "以斜边中点为原点、向下为 $x$ 轴，深度 $x$ 处水平宽度 $w(x)=2(a-x)$。\\n$P=\\displaystyle\\int_0^{a}\\rho gx\\cdot2(a-x)dx=\\dfrac13\\rho ga^{3}$。"
     },
     {
      "no": 13,
      "stem": "设 $y=y(x)$ 满足 $y''+2y'+y=0$，且 $y(0)=0,\\ y'(0)=1$，则 $\\displaystyle\\int_0^{+\\infty}y(x)dx=\\rule{2.6em}{0.5pt}$",
      "answer": "$1$",
      "sol": "特征根 $r=-1$（二重），$y=(C_1+C_2x)e^{-x}$。由初值得 $C_1=0,\\ C_2=1$，即 $y=xe^{-x}$。\\n$\\displaystyle\\int_0^{+\\infty}xe^{-x}dx=1$。"
     },
     {
      "no": 14,
      "stem": "行列式 $\\begin{vmatrix}a&0&0&1\\\\0&a&1&0\\\\0&1&a&0\\\\1&0&0&a\\end{vmatrix}=\\rule{2.6em}{0.5pt}$",
      "answer": "$(a^{2}-1)^{2}$",
      "sol": "交换列化为两个二阶分块对角行列式之积：$\\begin{vmatrix}a&1\\\\1&a\\end{vmatrix}^{2}=(a^{2}-1)^{2}$。"
     }
    ]
   },
   {
    "name": "三、解答题",
    "note": "15~23 小题，共 94 分。（本套检索稿题干缺失较多，仅收录可复原者）",
    "items": [
     {
      "no": 17,
      "stem": "（本题满分 10 分）求函数 $f(x,y)=x^{3}+8y^{3}-xy$ 的极值。",
      "answer": "极小值 $f\\Bigl(\\dfrac16,\\dfrac1{12}\\Bigr)=-\\dfrac{1}{216}$",
      "sol": "驻点为 $(0,0)$ 与 $\\Bigl(\\dfrac16,\\dfrac1{12}\\Bigr)$。\\n$AC-B^{2}=288xy-1$：在 $\\Bigl(\\frac16,\\frac1{12}\\Bigr)$ 处为 $3>0$ 且 $A=1>0$，取极小值 $-\\dfrac{1}{216}$；在 $(0,0)$ 处为 $-1<0$，非极值点。"
     },
     {
      "no": 21,
      "stem": "（本题满分 11 分）设 $f(x)$ 可导且 $f''(x)>0$，曲线 $y=f(x)\\ (x>0)$ 过原点，其上任意一点 $M$ 处切线与 $x$ 轴交于 $T$，$MP\\perp x$ 轴于 $P$，已知曲线、$MP$ 与 $x$ 轴所围面积与 $\\triangle MTP$ 面积之比恒为 $3:2$，求曲线方程。",
      "answer": "$y=Cx^{3}\\ (C>0)$",
      "sol": "设 $M=(x,y)$，切线与 $x$ 轴交于 $T$，$\\triangle MTP$ 面积为 $\\dfrac{y^{2}}{2y'}$。\\n由面积比恒为 $3:2$ 建立微分方程并求解，得 $y=Cx^{3}$。",
      "conf": "OCR"
     }
    ]
   }
  ]
 },
 {
  "id": "2024-2",
  "year": 2024,
  "subject": "数学二",
  "structure": "选择题 10×5=50 分　填空题 6×5=30 分　解答题 6 题共 70 分",
  "conf": "OCR（题干骨架 + 解析）",
  "sections": [
   {
    "name": "一、填空题（可复原者）",
    "note": "11~16 小题，每小题 5 分，共 30 分。",
    "items": [
     {
      "no": 11,
      "stem": "曲线 $y^{2}=x$ 在点 $(0,0)$ 处的曲率圆方程为 $\\rule{2.6em}{0.5pt}$",
      "answer": "$\\Bigl(x-\\dfrac12\\Bigr)^{2}+y^{2}=\\dfrac14$",
      "sol": "写成 $x=y^{2}$，$\\dfrac{dx}{dy}=2y$，$\\dfrac{d^{2}x}{dy^{2}}=2$。在 $y=0$ 处切线竖直。\\n$K=\\dfrac{|x''|}{(1+x'^{2})^{3/2}}=2$，$R=\\dfrac12$，曲率中心在 $\\Bigl(\\dfrac12,0\\Bigr)$。\\n曲率圆 $\\Bigl(x-\\dfrac12\\Bigr)^{2}+y^{2}=\\dfrac14$。"
     },
     {
      "no": 12,
      "stem": "函数 $f(x,y)=2x^{3}-9x^{2}-6y^{4}+12x+24y$ 的极值点为 $\\rule{2.6em}{0.5pt}$",
      "answer": "$(1,1)$",
      "sol": "$f_x=6(x-1)(x-2)=0$，$f_y=-24y^{3}+24=0\\Rightarrow y=1$。\\n驻点 $(1,1)$、$(2,1)$。判定得 $(1,1)$ 为极大值点。"
     },
     {
      "no": 14,
      "stem": "已知函数 $f(x)=x^{2}(e^{x}-1)$，则 $f^{(5)}(x)=\\rule{2.6em}{0.5pt}$（按题意求 $f^{(5)}(0)$）",
      "answer": "（按官方答案）",
      "sol": "用莱布尼茨公式展开：$(x^{2}(e^{x}-1))^{(5)}=\\sum\\limits_{k=0}^{5}C_5^{k}(x^{2})^{(k)}(e^{x}-1)^{(5-k)}$。\\n只有 $k=0,1,2$ 项非零，代入 $x=0$ 计算即可。",
      "conf": "OCR"
     }
    ]
   },
   {
    "name": "二、解答题（可复原者）",
    "note": "17~22 小题，共 70 分。",
    "items": [
     {
      "no": 18,
      "stem": "（本题满分 12 分）设 $y=y(x)$ 满足方程 $x^{2}y''+xy'-9y=0$，且 $y|_{x=1}=2,\\ y'|_{x=1}=6$。\\n(1) 利用变换 $x=e^{t}$ 化简方程并求 $y(x)$；\\n(2) 求（后续问题）。",
      "answer": "通解 $y=C_1x^{3}+C_2x^{-3}$",
      "sol": "令 $x=e^{t}$，欧拉方程化为 $\\dfrac{d^{2}y}{dt^{2}}-9y=0$，得 $y=C_1e^{3t}+C_2e^{-3t}=C_1x^{3}+\\dfrac{C_2}{x^{3}}$。\\n由初值 $y(1)=C_1+C_2=2$，$y'(1)=3C_1-3C_2=6$，解得 $C_1=2,\\ C_2=0$，故 $y=2x^{3}$。"
     },
     {
      "no": 21,
      "stem": "（本题满分 12 分）证明题（拉格朗日中值定理应用）。",
      "answer": "（按官方答案）",
      "sol": "检索稿仅给出「中值定理证明题（拉格朗日中值定理）」的题型说明，题干为图片。",
      "conf": "OCR"
     }
    ]
   }
  ]
 },
 {
  "id": "2025-1",
  "year": 2025,
  "subject": "数学一 / 二 / 三",
  "structure": "新大纲卷面结构（选择 10×5 + 填空 6×5 + 解答 6 题）",
  "conf": "回忆版（仅选择题答案）",
  "sections": [
   {
    "name": "选择题答案序列",
    "note": "以下为机构整理的选择题答案，题干为图片、未取到原文，仅供对照自测使用。",
    "items": [
     {
      "no": 1,
      "stem": "【数学一】1~10 题答案序列",
      "answer": "B B D …（后续题号答案未完整获取）",
      "sol": "检索到的机构版仅给出前几题答案（1.B、2.B、3.D），其余缺失。\\n**说明**：2025 年真题题干全网以图片形式流通，本次未取到可读文本。请以官方原卷为准。",
      "conf": "OCR"
     },
     {
      "no": 2,
      "stem": "【数学二】1~10 题答案序列",
      "answer": "A B C C A B B D B D",
      "sol": "机构整理版，仅供参考。题干未取到。",
      "conf": "OCR"
     },
     {
      "no": 3,
      "stem": "【数学三】1~10 题答案序列",
      "answer": "C B B D A B B D C C",
      "sol": "机构整理版，仅供参考。题干未取到。",
      "conf": "OCR"
     }
    ]
   }
  ]
 }
];
