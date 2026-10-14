/* 自动生成：线性代数题库 */
window.KY_BANK_XIANDAI = [
 {
  "subject": "线性代数",
  "chapter": "行列式",
  "questions": [
   {
    "type": "fill",
    "diff": 1,
    "stem": "设 $A$ 为 3 阶矩阵，$|A|=3$，则 $|2A|=\\rule{2.6em}{0.5pt}$",
    "answer": "$24$",
    "solution": "$|kA|=k^{n}|A|$，故 $|2A|=2^{3}\\cdot3=24$。**注意**：不是 $2\\cdot3=6$，每行都要乘 $k$。"
   },
   {
    "type": "fill",
    "diff": 1,
    "stem": "$\\begin{vmatrix}1&2&3\\\\4&5&6\\\\7&8&9\\end{vmatrix}=\\rule{2.6em}{0.5pt}$",
    "answer": "$0$",
    "solution": "第三行 = 第二行的 2 倍 − 第一行，行向量线性相关，故行列式为 $0$。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "$\\begin{vmatrix}1&1&1\\\\a&b&c\\\\a^{2}&b^{2}&c^{2}\\end{vmatrix}=\\rule{2.6em}{0.5pt}$",
    "answer": "$(b-a)(c-a)(c-b)$",
    "solution": "范德蒙德行列式：$V=\\prod\\limits_{1\\le i<j\\le n}(x_j-x_i)=(b-a)(c-a)(c-b)$。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "设 $A$ 为 3 阶矩阵，$|A|=2$，则 $|A^{*}|=\\rule{2.6em}{0.5pt}$",
    "answer": "$4$",
    "solution": "$|A^{*}|=|A|^{n-1}=2^{2}=4$。一般地 $|A^{*}|=|A|^{n-1}$。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "设 $A$ 为 4 阶矩阵，$|A|=3$，则 $|A^{-1}|=\\rule{2.6em}{0.5pt}$，$|(A^{*})^{-1}|=\\rule{2.6em}{0.5pt}$",
    "answer": "$\\dfrac13$；$\\dfrac{1}{27}$",
    "solution": "$|A^{-1}|=\\dfrac{1}{|A|}=\\dfrac13$。\\n由 $A^{*}=|A|A^{-1}$ 得 $(A^{*})^{-1}=\\dfrac{A}{|A|}$，故 $|(A^{*})^{-1}|=\\dfrac{|A|}{|A|^{n}}=\\dfrac{1}{|A|^{n-1}}=\\dfrac{1}{3^{3}}=\\dfrac{1}{27}$。"
   },
   {
    "type": "solve",
    "diff": 2,
    "stem": "计算行列式 $D=\\begin{vmatrix}a&1&0&0\\\\-1&b&1&0\\\\0&-1&c&1\\\\0&0&-1&d\\end{vmatrix}$。",
    "answer": "$abcd+ab+ad+cd+1$",
    "solution": "按第一行展开：$D=a\\begin{vmatrix}b&1&0\\\\-1&c&1\\\\0&-1&d\\end{vmatrix}-1\\cdot\\begin{vmatrix}-1&1&0\\\\0&c&1\\\\0&-1&d\\end{vmatrix}$。\\n$=a(bcd+b+d)+1\\cdot(cd+1)=abcd+ab+ad+cd+1$。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "行列式 $\\begin{vmatrix}a&0&0&1\\\\0&a&1&0\\\\0&1&a&0\\\\1&0&0&a\\end{vmatrix}=\\rule{2.6em}{0.5pt}$",
    "answer": "$(a^{2}-1)^{2}$",
    "solution": "交换列化为分块对角：$\\begin{vmatrix}a&1\\\\1&a\\end{vmatrix}\\cdot\\begin{vmatrix}a&1\\\\1&a\\end{vmatrix}=(a^{2}-1)^{2}$。",
    "src": "2020 数学二 第 14 题（同型）"
   },
   {
    "type": "solve",
    "diff": 2,
    "stem": "用克拉默法则解线性方程组 $\\begin{cases}2x_1+x_2=3\\\\ x_1-x_2=0\\end{cases}$。",
    "answer": "$x_1=1,\\ x_2=1$",
    "solution": "$D=\\begin{vmatrix}2&1\\\\1&-1\\end{vmatrix}=-3$，$D_1=\\begin{vmatrix}3&1\\\\0&-1\\end{vmatrix}=-3$，$D_2=\\begin{vmatrix}2&3\\\\1&0\\end{vmatrix}=-3$。\\n故 $x_1=\\dfrac{D_1}{D}=1$，$x_2=\\dfrac{D_2}{D}=1$。"
   },
   {
    "type": "choice",
    "diff": 2,
    "stem": "设 $A,B$ 为 $n$ 阶矩阵，则下列结论正确的是（ ）",
    "opts": [
     "$|A+B|=|A|+|B|$",
     "$|AB|=|A||B|$",
     "$|kA|=k|A|$",
     "$|A-B|=|A|-|B|$"
    ],
    "answer": "B",
    "solution": "只有 $|AB|=|A|\\cdot|B|$ 成立。$|kA|=k^{n}|A|$，而 $|A\\pm B|$ 无简单公式。"
   },
   {
    "type": "fill",
    "diff": 3,
    "stem": "设 $A$ 为 3 阶矩阵，$A_{ij}$ 为元素 $a_{ij}$ 的代数余子式。已知 $|A|=2$，则 $a_{11}A_{21}+a_{12}A_{22}+a_{13}A_{23}=\\rule{2.6em}{0.5pt}$",
    "answer": "$0$",
    "solution": "这是「第一行元素与第二行代数余子式」的组合，由展开定理的异乘变零性质，结果必为 $0$。"
   }
  ]
 },
 {
  "subject": "线性代数",
  "chapter": "矩阵",
  "questions": [
   {
    "type": "choice",
    "diff": 2,
    "stem": "设 $A,B$ 为 $n$ 阶矩阵，记 $r(X)$ 为矩阵 $X$ 的秩，$(X,Y)$ 表示分块矩阵，则（ ）",
    "opts": [
     "$r(A,AB)=r(A)$",
     "$r(A,BA)=r(A)$",
     "$r(A,B)=\\max\\{r(A),r(B)\\}$",
     "$r(A,B)=r(A^{T},B^{T})$"
    ],
    "answer": "A",
    "solution": "$(A,AB)=A(E,B)$，故 $r(A,AB)\\le r(A)$；又 $(A,AB)$ 含 $A$ 为子块，$r(A,AB)\\ge r(A)$，故相等。B 一般不成立（$BA$ 的列不在 $A$ 的列空间中）；C 错（应为 $\\ge\\max$）；D 错。",
    "src": "2018 数学一 第 6 题"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "设 $A$ 为 4 阶矩阵，$A^{*}$ 为其伴随矩阵。若 $Ax=0$ 的基础解系中只有 2 个向量，则 $r(A^{*})=\\rule{2.6em}{0.5pt}$",
    "answer": "$0$",
    "solution": "基础解系含 $4-r(A)=2$ 个向量，故 $r(A)=2$。因 $r(A)=2<4-1=3$，故 $r(A^{*})=0$。\\n**记牢**：$r(A)=n\\Rightarrow r(A^{*})=n$；$r(A)=n-1\\Rightarrow r(A^{*})=1$；$r(A)<n-1\\Rightarrow r(A^{*})=0$。",
    "src": "2019 数学三 第 5 题"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "设 $A$ 为 3 阶矩阵，$A^{*}$ 为伴随矩阵，$|A|=2$，则 $(A^{*})^{-1}=\\rule{2.6em}{0.5pt}$（用 $A$ 表示）",
    "answer": "$\\dfrac{1}{2}A$",
    "solution": "$AA^{*}=|A|E$，故 $A^{*}=\\dfrac{|A|}{A}$ 意义上 $(A^{*})^{-1}=\\dfrac{A}{|A|}=\\dfrac12A$。"
   },
   {
    "type": "solve",
    "diff": 2,
    "stem": "设 $A=\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}$，求 $A^{-1}$。",
    "answer": "$\\begin{pmatrix}-2&1\\\\ \\frac32&-\\frac12\\end{pmatrix}$",
    "solution": "$|A|=4-6=-2$。$A^{-1}=\\dfrac{1}{|A|}\\begin{pmatrix}4&-2\\\\-3&1\\end{pmatrix}=\\begin{pmatrix}-2&1\\\\ \\frac32&-\\frac12\\end{pmatrix}$。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "设 $A$ 为 $n$ 阶矩阵且 $A^{2}=A$（幂等矩阵），则 $A$ 的特征值只能是 $\\rule{2.6em}{0.5pt}$",
    "answer": "$0$ 或 $1$",
    "solution": "设 $A\\alpha=\\lambda\\alpha\\ (\\alpha\\ne0)$，则 $A^{2}\\alpha=\\lambda^{2}\\alpha$。由 $A^{2}=A$ 得 $\\lambda^{2}\\alpha=\\lambda\\alpha$，即 $(\\lambda^{2}-\\lambda)\\alpha=0$，故 $\\lambda^{2}=\\lambda$，$\\lambda=0$ 或 $1$。\\n**注意**：由此可知 $A-E$ 必有特征值 $-1$ 或 $0$，一般**不可逆**（除非 $A=E$）。"
   },
   {
    "type": "solve",
    "diff": 2,
    "stem": "设 $A=\\begin{pmatrix}1&0&0\\\\0&2&0\\\\1&0&3\\end{pmatrix}$，求 $A^{-1}$。",
    "answer": "$\\begin{pmatrix}1&0&0\\\\0&\\frac12&0\\\\-\\frac13&0&\\frac13\\end{pmatrix}$",
    "solution": "$A$ 为下三角，$|A|=6\\ne0$，可逆。用初等行变换 $(A\\mid E)\\to(E\\mid A^{-1})$ 或直接按三角矩阵求逆：\\n对角线取倒数，左下角元素 $a_{31}$ 变为 $-\\dfrac{a_{31}}{a_{11}a_{33}}=-\\dfrac{1}{3}$。"
   },
   {
    "type": "choice",
    "diff": 3,
    "stem": "设 $A,B,C$ 为 $n$ 阶矩阵，$ABC=O$，则下列分块矩阵秩的关系正确的是（ ）",
    "opts": [
     "$r_1\\le r_2\\le r_3$",
     "$r_1\\le r_3\\le r_2$",
     "$r_3\\le r_2\\le r_1$",
     "$r_2\\le r_1\\le r_3$"
    ],
    "answer": "B",
    "solution": "利用 $\\begin{pmatrix}O&A\\\\BC&E\\end{pmatrix}$ 等分块矩阵的初等变换化简，可得 $r_1\\le r_3\\le r_2$。（记 $r_1,r_2,r_3$ 分别为三个分块矩阵的秩。）",
    "src": "2023 数学一 第 5 题"
   },
   {
    "type": "solve",
    "diff": 2,
    "stem": "设 $A=\\begin{pmatrix}1&2\\\\2&3\\end{pmatrix}$，$B=\\begin{pmatrix}1&0\\\\0&1\\end{pmatrix}$，解矩阵方程 $AX=B$。",
    "answer": "$X=A^{-1}=\\begin{pmatrix}-3&2\\\\2&-1\\end{pmatrix}$",
    "solution": "$|A|=3-4=-1\\ne0$，$A$ 可逆，$X=A^{-1}B=A^{-1}$。\\n$A^{-1}=\\dfrac{1}{-1}\\begin{pmatrix}3&-2\\\\-2&1\\end{pmatrix}=\\begin{pmatrix}-3&2\\\\2&-1\\end{pmatrix}$。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "设 $A$ 为 3 阶矩阵，$|A|=2$，$A^{*}$ 为伴随矩阵，则 $|A^{*}A|=\\rule{2.6em}{0.5pt}$",
    "answer": "$8$",
    "solution": "$A^{*}A=|A|E=2E$，故 $|A^{*}A|=|2E|=2^{3}=8$。\\n（若问 $|A^{*}|$ 则为 $|A|^{n-1}=4$，注意区分两者。）"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "设 $A$ 为 $m\\times n$ 矩阵，$B$ 为 $n\\times s$ 矩阵，若 $AB=O$，则 $r(A)+r(B)\\le\\rule{2.6em}{0.5pt}$",
    "answer": "$n$",
    "solution": "$AB=O$ 说明 $B$ 的每一列都是 $Ax=0$ 的解，故 $r(B)\\le n-r(A)$，即 $r(A)+r(B)\\le n$。\\n**这是选择题的常客**，务必记牢。"
   }
  ]
 },
 {
  "subject": "线性代数",
  "chapter": "向量组与线性方程组",
  "questions": [
   {
    "type": "fill",
    "diff": 3,
    "stem": "设 $\\alpha_1=(\\lambda,1,1)^{T},\\ \\alpha_2=(1,\\lambda,1)^{T},\\ \\alpha_3=(1,1,\\lambda)^{T}$，则 $\\alpha_1,\\alpha_2,\\alpha_3$ 线性相关时 $\\lambda=\\rule{2.6em}{0.5pt}$",
    "answer": "$\\lambda=1$ 或 $\\lambda=-2$",
    "solution": "行列式 $\\begin{vmatrix}\\lambda&1&1\\\\1&\\lambda&1\\\\1&1&\\lambda\\end{vmatrix}=\\lambda^{3}-3\\lambda+2=(\\lambda-1)^{2}(\\lambda+2)$。\\n令其为 $0$ 得 $\\lambda=1$ 或 $\\lambda=-2$。\\n**核验**：$\\lambda=1$ 时三向量均为 $(1,1,1)^{T}$，秩 $1$，线性相关 ✓；$\\lambda=-2$ 时 $\\alpha_1+\\alpha_2+\\alpha_3=(0,0,0)^{T}$，线性相关 ✓。",
    "src": "2022 数学一 第 7 题（同型）"
   },
   {
    "type": "fill",
    "diff": 3,
    "stem": "设 $A=\\begin{pmatrix}1&1&1\\\\1&2&3\\\\1&4&a\\end{pmatrix}$，$b=(1,2,4)^{T}$。若 $Ax=b$ 有无穷多解，则 $a=\\rule{2.6em}{0.5pt}$",
    "answer": "$7$",
    "solution": "$|A|=1(2a-12)-1(a-3)+1(4-2)=a-7$。要无穷多解需 $|A|=0$，即 $a=7$。\\n**核验**：$a=7$ 时 $(A\\mid b)$ 经行变换得 $r(A)=r(A\\mid b)=2<3$，确有无穷多解。",
    "src": "2019 数学三 第 13 题（同型）"
   },
   {
    "type": "choice",
    "diff": 2,
    "stem": "设 $A$ 为 $n$ 阶矩阵，$E$ 为单位矩阵。若方程组 $Ax=0$ 与 $Bx=0$ 同解，则（ ）",
    "opts": [
     "$\\begin{pmatrix}E&A\\\\O&B\\end{pmatrix}y=0$ 只有零解",
     "$\\begin{pmatrix}E&AB\\\\O&A^{T}\\end{pmatrix}y=0$ 只有零解",
     "$\\begin{pmatrix}AB&B\\\\B&A\\end{pmatrix}y=0$ 与 $\\begin{pmatrix}BA&A\\\\A&B\\end{pmatrix}y=0$ 同解",
     "$\\begin{pmatrix}AB&O\\\\O&BA\\end{pmatrix}y=0$ 与 $\\begin{pmatrix}BA&O\\\\O&AB\\end{pmatrix}y=0$ 同解"
    ],
    "answer": "C",
    "solution": "由 $Ax=0$ 与 $Bx=0$ 同解可知 $A$ 与 $B$ 的行空间相同，从而 $r(A)=r(B)$ 且两者行等价。利用分块矩阵的初等变换可证 C 中两个方程组同解。",
    "src": "2022 数学一 第 6 题"
   },
   {
    "type": "solve",
    "diff": 2,
    "stem": "求齐次线性方程组 $\\begin{cases}x_1+x_2-x_3=0\\\\ 2x_1-x_2+x_3=0\\end{cases}$ 的基础解系与通解。",
    "answer": "基础解系 $\\xi=(0,1,1)^{T}$；通解 $x=k\\xi,\\ k\\in R$",
    "solution": "系数矩阵行变换：$\\begin{pmatrix}1&1&-1\\\\2&-1&1\\end{pmatrix}\\to\\begin{pmatrix}1&1&-1\\\\0&-3&3\\end{pmatrix}\\to\\begin{pmatrix}1&0&0\\\\0&1&-1\\end{pmatrix}$。\\n得 $\\begin{cases}x_1=0\\\\ x_2=x_3\\end{cases}$，取 $x_3=1$ 得基础解系 $(0,1,1)^{T}$。\\n通解 $x=k(0,1,1)^{T}$。"
   },
   {
    "type": "solve",
    "diff": 2,
    "stem": "求非齐次线性方程组 $\\begin{cases}x_1+x_2+x_3=3\\\\ 2x_1-x_2+x_3=2\\\\ x_1+3x_2=4\\end{cases}$ 的通解。",
    "answer": "$x=\\Bigl(\\dfrac53,\\dfrac79,\\dfrac{13}{9}\\Bigr)^{T}+k(-1,1,1)^{T}$",
    "solution": "增广矩阵行变换后 $r(A)=r(A\\mid b)=2<3$，有无穷多解。\\n同解方程：$\\begin{cases}x_1=\\dfrac53-x_3\\\\ x_2=\\dfrac79+x_3\\end{cases}$，取特解 $x_3=0$ 得 $\\bigl(\\frac53,\\frac79,0\\bigr)$……\\n通解 $x=\\Bigl(\\dfrac53-x_3,\\ \\dfrac79+x_3,\\ x_3\\Bigr)^{T}=\\Bigl(\\dfrac53,\\dfrac79,0\\Bigr)^{T}+k(-1,1,1)^{T}$。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "设 $A$ 为 $4\\times 5$ 矩阵，$r(A)=3$，则 $Ax=b$ 若有解，其通解中含 $\\rule{2.6em}{0.5pt}$ 个自由参数。",
    "answer": "$2$",
    "solution": "自由参数个数 $=n-r(A)=5-3=2$。"
   },
   {
    "type": "choice",
    "diff": 2,
    "stem": "设 $\\alpha_1,\\alpha_2,\\alpha_3$ 线性无关，则下列向量组中线性无关的是（ ）",
    "opts": [
     "$\\alpha_1-\\alpha_2,\\ \\alpha_2-\\alpha_3,\\ \\alpha_3-\\alpha_1$",
     "$\\alpha_1+\\alpha_2,\\ \\alpha_2+\\alpha_3,\\ \\alpha_3+\\alpha_1$",
     "$\\alpha_1,\\ \\alpha_1+\\alpha_2,\\ \\alpha_1+\\alpha_2+\\alpha_3$",
     "$\\alpha_1-\\alpha_2,\\ \\alpha_2-\\alpha_3,\\ \\alpha_1-\\alpha_3$"
    ],
    "answer": "C",
    "solution": "A、D 中三向量之和为 $0$，线性相关；B 中 $(\\alpha_1+\\alpha_2)-(\\alpha_2+\\alpha_3)+(\\alpha_3+\\alpha_1)=2\\alpha_1$，不直接相关，但 $\\alpha_1+\\alpha_2-\\alpha_2-\\alpha_3+\\alpha_3+\\alpha_1$……需具体算行列式。\\nC 显然线性无关（逐步消元）。**结论**：$(\\alpha_1,\\alpha_1+\\alpha_2,\\alpha_1+\\alpha_2+\\alpha_3)$ 为三角变换，秩不变。"
   },
   {
    "type": "solve",
    "diff": 3,
    "stem": "设向量组 Ⅰ：$\\alpha_1=(1,1,4)^{T},\\alpha_2=(1,0,a)^{T},\\alpha_3=(1,2,3)^{T},\\alpha_4=(a+1,1,4)^{T}$；Ⅱ：$\\beta_1=(1,1,a+3)^{T},\\beta_2=(0,2,1-a)^{T},\\beta_3=(1,3,a^{2}+3)^{T}$。若向量组 Ⅰ 与 Ⅱ 等价，求 $a$，并将 $\\beta_3$ 用 $\\alpha_1,\\alpha_2,\\alpha_3$ 线性表示。",
    "answer": "$a\\ne\\pm1$；$\\beta_3=\\alpha_1+\\alpha_2-\\alpha_3$",
    "solution": "两组等价 $\\Leftrightarrow$ 它们张成同一空间。分别求秩并比较，可得 $a\\ne\\pm1$ 时成立。\\n在 $a\\ne\\pm1$ 时解线性方程组可表示 $\\beta_3=\\alpha_1+\\alpha_2-\\alpha_3$；$a=1$ 时表示不唯一。",
    "src": "2019 数学三 第 20 题"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "设 $\\alpha_1=(1,2,3)^{T},\\alpha_2=(3,-1,2)^{T},\\alpha_3=(2,3,c)^{T}$，若三向量线性相关，则 $c=\\rule{2.6em}{0.5pt}$",
    "answer": "$5$",
    "solution": "行列式 $\\begin{vmatrix}1&3&2\\\\2&-1&3\\\\3&2&c\\end{vmatrix}=1(-c-6)-3(2c-9)+2(4+3)=-c-6-6c+27+14=35-7c$。\\n令其为 $0$ 得 $c=5$。"
   },
   {
    "type": "choice",
    "diff": 2,
    "stem": "设 $A$ 为 $m\\times n$ 矩阵，$Ax=b$ 有解的充要条件是（ ）",
    "opts": [
     "$r(A)=m$",
     "$r(A)=n$",
     "$r(A)=r(A\\mid b)$",
     "$r(A)<n$"
    ],
    "answer": "C",
    "solution": "线性方程组有解 $\\Leftrightarrow r(A)=r(A\\mid b)$；唯一解还需 $r(A)=n$；无穷多解需 $r(A)<n$。"
   }
  ]
 },
 {
  "subject": "线性代数",
  "chapter": "特征值与特征向量",
  "questions": [
   {
    "type": "fill",
    "diff": 2,
    "stem": "设 2 阶矩阵 $A$ 有两个不同特征值，$\\alpha_1,\\alpha_2$ 是 $A$ 的线性无关的特征向量，且满足 $A^{2}(\\alpha_1+\\alpha_2)=\\alpha_1+\\alpha_2$，则 $|A|=\\rule{2.6em}{0.5pt}$",
    "answer": "$-1$",
    "solution": "设 $A\\alpha_i=\\lambda_i\\alpha_i$（$i=1,2$，$\\lambda_1\\ne\\lambda_2$）。\\n$A^{2}(\\alpha_1+\\alpha_2)=\\lambda_1^{2}\\alpha_1+\\lambda_2^{2}\\alpha_2=\\alpha_1+\\alpha_2$，由 $\\alpha_1,\\alpha_2$ 线性无关得 $\\lambda_1^{2}=\\lambda_2^{2}=1$。\\n又 $\\lambda_1\\ne\\lambda_2$，故 $\\{\\lambda_1,\\lambda_2\\}=\\{1,-1\\}$，$|A|=\\lambda_1\\lambda_2=-1$。",
    "src": "2018 数学一 第 13 题"
   },
   {
    "type": "choice",
    "diff": 3,
    "stem": "下列矩阵中不能相似于对角矩阵的是（ ）",
    "opts": [
     "$\\begin{pmatrix}1&0&2\\\\0&2&2\\\\0&0&3\\end{pmatrix}$",
     "$\\begin{pmatrix}1&2&0\\\\2&a&0\\\\3&0&3\\end{pmatrix}$",
     "$\\begin{pmatrix}1&1&a\\\\0&2&0\\\\0&0&2\\end{pmatrix}$",
     "$\\begin{pmatrix}2&1&1\\\\0&2&2\\\\0&0&2\\end{pmatrix}$"
    ],
    "answer": "D",
    "solution": "A 有三个互异特征值 $1,2,3$，必可对角化。D 中特征值全为 $2$（三重），$(A-2E)$ 的秩为 $2$，只有一个线性无关的特征向量，故不可对角化。",
    "src": "2023 数学一 第 6 题"
   },
   {
    "type": "choice",
    "diff": 2,
    "stem": "下列四个条件中，3 阶矩阵 $A$ 可对角化的一个充分但不必要条件是（ ）",
    "opts": [
     "$A$ 有 3 个互不相等的特征值",
     "$A$ 有 3 个线性无关的特征向量",
     "$A$ 有 3 个两两线性无关的特征向量",
     "$A$ 的属于不同特征值的特征向量正交"
    ],
    "answer": "A",
    "solution": "$A$ 可对角化 $\\Leftrightarrow$ 有 $n$ 个线性无关的特征向量（B 是充要条件，非充分不必要）。\\n有 $n$ 个互异特征值 $\\Rightarrow$ 可对角化，但可对角化不一定需要特征值互异，故 A 充分不必要。",
    "src": "2022 数学一 第 5 题"
   },
   {
    "type": "fill",
    "diff": 1,
    "stem": "设 $A$ 为 3 阶矩阵，特征值为 $1,2,3$，则 $|A|=\\rule{2.6em}{0.5pt}$，$\\operatorname{tr}(A)=\\rule{2.6em}{0.5pt}$",
    "answer": "$6$；$6$",
    "solution": "$|A|=\\prod\\lambda_i=1\\cdot2\\cdot3=6$；$\\operatorname{tr}(A)=\\sum\\lambda_i=1+2+3=6$。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "设 $A$ 为 3 阶矩阵，特征值为 $1,2,3$，则 $|A+E|=\\rule{2.6em}{0.5pt}$",
    "answer": "$24$",
    "solution": "$A+E$ 的特征值为 $1+1,2+1,3+1$，即 $2,3,4$，故 $|A+E|=2\\cdot3\\cdot4=24$。\\n**关键**：$f(A)$ 的特征值为 $f(\\lambda)$，行列式为特征值之积。"
   },
   {
    "type": "solve",
    "diff": 2,
    "stem": "设 $A=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$，求 $A$ 的特征值与特征向量，并判断 $A$ 可否对角化。",
    "answer": "$\\lambda_1=1,\\ \\lambda_2=3$；$A$ 可对角化",
    "solution": "$|\\lambda E-A|=(\\lambda-2)^{2}-1=(\\lambda-1)(\\lambda-3)=0$，得 $\\lambda_1=1,\\ \\lambda_2=3$。\\n$\\lambda_1=1$：解 $(E-A)x=0$ 得特征向量 $(1,-1)^{T}$；$\\lambda_2=3$：解得 $(1,1)^{T}$。\\n$A$ 为实对称矩阵（或有两个互异特征值），故可对角化。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "设 $A$ 为 3 阶矩阵，特征值为 $1,2,3$，则 $|A-2E|=\\rule{2.6em}{0.5pt}$",
    "answer": "$0$",
    "solution": "$A-2E$ 的特征值为 $1-2,\\ 2-2,\\ 3-2$，即 $-1,0,1$，故 $|A-2E|=(-1)\\cdot0\\cdot1=0$。"
   },
   {
    "type": "solve",
    "diff": 3,
    "stem": "已知 $A=\\begin{pmatrix}1&0&1\\\\0&a&0\\\\1&0&1\\end{pmatrix}$。(1) 求正交矩阵 $P$ 使 $P^{T}AP$ 为对角矩阵；(2) 求正定矩阵 $C$ 使 $C^{2}=(a+3)E-A$。",
    "answer": "特征值 $a+2,\\ a-1,\\ a-1$",
    "solution": "$A$ 为实对称矩阵。$|\\lambda E-A|=\\lambda(\\lambda-a)^{2}-(\\lambda-a)^{2}\\cdot$…按分块展开得\\n特征值 $\\lambda_1=a+2$，$\\lambda_2=\\lambda_3=a-1$。\\n分别求特征向量并施密特正交化、单位化，即得正交矩阵 $P$。\\n$(a+3)E-A$ 的特征值为 $(a+3)-\\lambda$，即 $1,\\ 4,\\ 4$。正定矩阵 $C$ 的特征值取其正平方根 $1,2,2$，在 $A$ 的特征向量基下构造即得。",
    "src": "2021 数学一 第 21 题"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "设 $A=\\alpha\\alpha^{T}$，其中 $\\alpha=(1,1,1)^{T}$，则 $A$ 的特征值为 $\\rule{2.6em}{0.5pt}$",
    "answer": "$3,\\ 0,\\ 0$",
    "solution": "$A$ 为秩 1 的实对称矩阵，$\\operatorname{tr}(A)=\\alpha^{T}\\alpha=3$。\\n**秩 1 矩阵的结论**：$\\alpha\\beta^{T}$ 的特征值为 $\\beta^{T}\\alpha$（一次）与 $0$（$n-1$ 次）。此处 $\\alpha^{T}\\alpha=3$，故特征值为 $3,0,0$。"
   },
   {
    "type": "choice",
    "diff": 2,
    "stem": "设 $A$ 为 $n$ 阶实对称矩阵，则下列结论不正确的是（ ）",
    "opts": [
     "$A$ 的特征值全为实数",
     "$A$ 必可正交对角化",
     "$A$ 的属于不同特征值的特征向量必正交",
     "$A$ 必可逆"
    ],
    "answer": "D",
    "solution": "实对称矩阵必有实特征值、必可正交对角化、不同特征值的特征向量正交；但可能有零特征值从而不可逆，故 D 错。"
   }
  ]
 },
 {
  "subject": "线性代数",
  "chapter": "二次型",
  "questions": [
   {
    "type": "choice",
    "diff": 2,
    "stem": "二次型 $f(x_1,x_2,x_3)=(x_1+x_2)^{2}+(x_2+x_3)^{2}-(x_3-x_1)^{2}$ 的正惯性指数与负惯性指数依次为（ ）",
    "opts": [
     "$2,0$",
     "$1,1$",
     "$2,1$",
     "$1,2$"
    ],
    "answer": "B",
    "solution": "展开：$f=x_1^{2}+2x_1x_2+x_2^{2}+x_2^{2}+2x_2x_3+x_3^{2}-x_3^{2}+2x_1x_3-x_1^{2}=2x_1x_2+2x_2x_3+2x_1x_3$……整理后矩阵\\n$A=\\begin{pmatrix}0&1&1\\\\1&1&1\\\\1&1&0\\end{pmatrix}$，求特征值（或配方）得正惯性指数 $1$、负惯性指数 $1$。",
    "src": "2021 数学一 第 5 题"
   },
   {
    "type": "choice",
    "diff": 2,
    "stem": "设 $A$ 是 3 阶实对称矩阵，$A^{2}+A=2E$ 且 $|A|=4$，则二次型 $x^{T}Ax$ 的规范形为（ ）",
    "opts": [
     "$y_1^{2}+y_2^{2}+y_3^{2}$",
     "$y_1^{2}+y_2^{2}-y_3^{2}$",
     "$y_1^{2}-y_2^{2}-y_3^{2}$",
     "$-y_1^{2}-y_2^{2}-y_3^{2}$"
    ],
    "answer": "C",
    "solution": "由 $A^{2}+A-2E=O$ 得 $(A+2E)(A-E)=O$，故 $A$ 的特征值只能是 $-2$ 或 $1$。\\n设 $1$ 出现 $k$ 次、$-2$ 出现 $3-k$ 次，$|A|=1^{k}(-2)^{3-k}=4\\Rightarrow k=1$。\\n故特征值为 $1,-2,-2$，规范形为 $y_1^{2}-y_2^{2}-y_3^{2}$。",
    "src": "2019 数学三 第 6 题"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "二次型 $f=x_1^{2}+2x_2^{2}+3x_3^{2}+2x_1x_2$ 的矩阵为 $\\rule{2.6em}{0.5pt}$",
    "answer": "$\\begin{pmatrix}1&1&0\\\\1&2&0\\\\0&0&3\\end{pmatrix}$",
    "solution": "对角元为平方项系数，非对角元 $a_{ij}=a_{ji}=\\dfrac{(\\text{交叉项系数})}{2}$。$2x_1x_2$ 给出 $a_{12}=a_{21}=1$。"
   },
   {
    "type": "fill",
    "diff": 1,
    "stem": "二次型 $f=x_1^{2}+x_2^{2}+x_3^{2}$ 的矩阵为 $\\rule{2.6em}{0.5pt}$，它是正定的吗？$\\rule{2.6em}{0.5pt}$",
    "answer": "$E$；是",
    "solution": "矩阵为 3 阶单位矩阵，特征值全为 $1>0$，故正定。"
   },
   {
    "type": "solve",
    "diff": 2,
    "stem": "用正交变换将二次型 $f=x_1^{2}+2x_2^{2}+2x_3^{2}+2x_1x_2-2x_1x_3$ 化为标准形。",
    "answer": "标准形 $2y_2^{2}+3y_3^{2}$（特征值 $0,2,3$）",
    "solution": "二次型矩阵 $A=\\begin{pmatrix}1&1&-1\\\\1&2&0\\\\-1&0&2\\end{pmatrix}$。\\n$|A-\\lambda E|=\\begin{vmatrix}1-\\lambda&1&-1\\\\1&2-\\lambda&0\\\\-1&0&2-\\lambda\\end{vmatrix}=(2-\\lambda)\\bigl[(1-\\lambda)(2-\\lambda)-2\\bigr]=(2-\\lambda)\\lambda(\\lambda-3)$。\\n特征值 $\\lambda_1=0,\\ \\lambda_2=2,\\ \\lambda_3=3$，均为实数，且 $A$ 实对称，故可正交对角化。\\n标准形为 $0\\cdot y_1^{2}+2y_2^{2}+3y_3^{2}=2y_2^{2}+3y_3^{2}$。"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "二次型 $f=x_1^{2}+x_2^{2}+x_3^{2}+2ax_1x_2+2ax_1x_3+2ax_2x_3$ 正定的充要条件是 $a$ 满足 $\\rule{2.6em}{0.5pt}$",
    "answer": "$-1<a<\\dfrac12$",
    "solution": "矩阵 $A=\\begin{pmatrix}1&a&a\\\\a&1&a\\\\a&a&1\\end{pmatrix}$。顺序主子式全大于 $0$：\\n$D_1=1>0$，$D_2=1-a^{2}>0$，$D_3=(1-a)^{2}(1+2a)>0$。\\n综合得 $-1<a<\\dfrac12$ 且 $a\\ne-1$，即 $-1<a<\\dfrac12$。"
   },
   {
    "type": "fill",
    "diff": 1,
    "stem": "二次型 $f=x_1^{2}-x_2^{2}$ 的正惯性指数为 $\\rule{2.6em}{0.5pt}$，负惯性指数为 $\\rule{2.6em}{0.5pt}$",
    "answer": "$1$；$1$",
    "solution": "已是标准形，正项 $1$ 个、负项 $1$ 个。"
   },
   {
    "type": "solve",
    "diff": 3,
    "stem": "已知二次型 $f(x_1,x_2,x_3)=x_1^{2}+2x_2^{2}+2x_3^{2}+2x_1x_2-2x_1x_3$，$g(y_1,y_2,y_3)=y_1^{2}+y_2^{2}+y_3^{2}+2y_2y_3$。(1) 求可逆变换 $x=Py$ 将 $f$ 化为 $g$；(2) 是否存在正交变换 $x=Qy$ 将 $f$ 化为 $g$？",
    "answer": "(2) 不存在",
    "solution": "(1) 分别对 $f$ 与 $g$ 作可逆线性变换化为同一规范形，再复合即得 $P$。\\n(2) 正交变换保持特征值不变。$f$ 的矩阵与 $g$ 的矩阵特征值不同，故不存在正交变换使其互化。",
    "src": "2023 数学一 第 21 题"
   },
   {
    "type": "fill",
    "diff": 2,
    "stem": "二次型 $f=x_1x_2+x_2x_3+x_1x_3$ 的矩阵为 $\\rule{2.6em}{0.5pt}$，其秩为 $\\rule{2.6em}{0.5pt}$",
    "answer": "$\\begin{pmatrix}0&\\frac12&\\frac12\\\\ \\frac12&0&\\frac12\\\\ \\frac12&\\frac12&0\\end{pmatrix}$；$3$",
    "solution": "矩阵 $A=\\dfrac12(J-E)$（$J$ 为全 $1$ 矩阵）。$|A|=\\begin{vmatrix}0&\\frac12&\\frac12\\\\ \\frac12&0&\\frac12\\\\ \\frac12&\\frac12&0\\end{vmatrix}=0-\\dfrac12\\Bigl(0-\\dfrac14\\Bigr)+\\dfrac12\\Bigl(\\dfrac14-0\\Bigr)=\\dfrac18+\\dfrac18=\\dfrac14\\ne0$，故 $r(A)=3$。\\n$J$ 的特征值为 $3,0,0$，故 $A$ 的特征值为 $1,-\\dfrac12,-\\dfrac12$，正惯性指数 $1$、负惯性指数 $2$。"
   },
   {
    "type": "choice",
    "diff": 2,
    "stem": "设 $A$ 为 $n$ 阶实对称矩阵，则 $A$ 正定的充要条件是（ ）",
    "opts": [
     "$A$ 的所有元素大于 $0$",
     "$A$ 的所有顺序主子式大于 $0$",
     "$A$ 的特征值有正有负",
     "$|A|>0$"
    ],
    "answer": "B",
    "solution": "实对称矩阵正定 $\\Leftrightarrow$ 各阶顺序主子式全 $>0$（霍尔维茨定理）$\\Leftrightarrow$ 特征值全 $>0$。\\n$|A|>0$ 只是必要条件；特征值有正有负是不定；元素全正与正定无关。"
   }
  ]
 }
];
