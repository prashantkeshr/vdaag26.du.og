import type { Topic } from '../models';

export const cbse9MathsTopicsData: Topic[] = [

  {
    id: 'veda-topic-cbse9-math-number-systems',
    slug: 'cbse9-number-systems',
    title: 'Number Systems',
    description: 'Natural numbers, integers, rational numbers, irrational numbers, real numbers, decimal expansions, surds. NCERT Class 9 Maths Chapter 1.',
    overview: 'The real number system includes rational and irrational numbers. This chapter builds from natural numbers to the complete real number line, introduces irrational numbers, and explores their decimal expansions.',
    guide: `## Number Systems — Complete Notes

### Number Hierarchy
- **Natural numbers (N)**: 1, 2, 3, ... (counting numbers)
- **Whole numbers (W)**: 0, 1, 2, 3, ...
- **Integers (Z)**: ..., −2, −1, 0, 1, 2, ...
- **Rational numbers (Q)**: p/q where p, q are integers and q ≠ 0
  - Decimal form: either **terminating** (3/4 = 0.75) or **recurring** (1/3 = 0.333...)
- **Irrational numbers**: Cannot be written as p/q; non-terminating, non-recurring decimals
  - Examples: √2, √3, √5, π, e, 0.101001000...
- **Real numbers (R)**: Q ∪ irrationals = all numbers on the number line

### Rational Numbers
- If denominator has only factors 2 and 5 → terminating decimal
- Otherwise → non-terminating recurring decimal
- **Between any two rationals, infinite rationals exist**

### Irrational Numbers
**Proof that √2 is irrational** (by contradiction):
Assume √2 = p/q in lowest terms (gcd(p,q) = 1)
→ 2 = p²/q² → p² = 2q² → p² is even → p is even → p = 2k
→ 4k² = 2q² → q² = 2k² → q is even
But p and q both even contradicts gcd(p,q) = 1 ∎

### Real Number Line
- Every real number corresponds to exactly one point on the number line
- **Locating √2 on number line**: Construct right triangle with legs 1 and 1; hypotenuse = √2; use compass to mark on number line
- **Locating √n**: Use successive right triangles (√2 → √3 → √4 → √5...)

### Decimal Expansions
- Rational → terminating or recurring
- Irrational → non-terminating, non-recurring
- **Converting recurring decimal to p/q**:
  - Let x = 0.333... → 10x = 3.333... → 9x = 3 → x = 1/3
  - Let x = 0.142857142857... → multiply by 10⁶

### Operations on Real Numbers
- Surds: expressions with irrational roots: √2, ∛5, etc.
- **Rationalising the denominator**: Multiply by conjugate to remove surd from denominator
  - 1/√2 = √2/2
  - 1/(√3+√2) = (√3−√2)/((√3)²−(√2)²) = (√3−√2)/1 = √3−√2
- Laws of radicals (a, b > 0):
  - √a × √b = √(ab)
  - √a / √b = √(a/b)
  - (√a)² = a

### Laws of Exponents for Real Numbers
- aᵐ × aⁿ = aᵐ⁺ⁿ
- aᵐ / aⁿ = aᵐ⁻ⁿ
- (aᵐ)ⁿ = aᵐⁿ
- a^(1/n) = ⁿ√a
- a^(m/n) = (ⁿ√a)ᵐ`,
    subjectIds: ['veda-subject-cbse9-maths', 'veda-subject-cbse-9-10-mathematics'],
    courseIds: [], examIds: ['veda-exam-cbse-board'],
    prerequisiteIds: [], relatedIds: ['veda-topic-cbse9-math-polynomials'],
    leadToIds: ['veda-topic-cbse9-math-polynomials'],
    keyConcepts: ['rational numbers', 'irrational numbers', 'real number line', 'surds', 'rationalisation', 'decimal expansion'],
    formulaHighlights: ['R = Q ∪ Irrationals', '√a × √b = √(ab)', 'a^(m/n) = (ⁿ√a)ᵐ'],
    estimatedMinutes: 90, difficulty: 'beginner', academicLevel: 'secondary',
    examRelevance: ['CBSE Class 9', 'NTSE'],
    tags: ['number systems', 'irrational', 'surds', 'real numbers', 'Class 9', 'CBSE', 'Maths'],
    classYear: 9,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Number-systems.svg/320px-Number-systems.svg.png',
    libreTextsUrl: 'https://math.libretexts.org/Courses/Borough_of_Manhattan_Community_College/MAT_206_Precalculus/1%3A_Prerequisites/1.1%3A_Real_Numbers_-_Algebra_Essentials',
    updatedAt: '2026-11-14',
  },

  {
    id: 'veda-topic-cbse9-math-polynomials',
    slug: 'cbse9-polynomials',
    title: 'Polynomials',
    description: 'Polynomials in one variable, zeros, Remainder theorem, Factor theorem, algebraic identities. NCERT Class 9 Maths Chapter 2.',
    overview: 'Polynomials are algebraic expressions with non-negative integer exponents. This chapter introduces key theorems (Remainder, Factor) and important algebraic identities used throughout higher mathematics.',
    guide: `## Polynomials — Complete Notes

### What is a Polynomial?
p(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀
- Coefficients aᵢ are real numbers; exponents are non-negative integers
- **Degree**: Highest power of x (e.g., 3x⁴ − 2x + 5 has degree 4)
- **Leading coefficient**: Coefficient of highest degree term

### Types by Degree
| Degree | Type | Example |
|---|---|---|
| 0 | Constant | 5 |
| 1 | Linear | 2x + 3 |
| 2 | Quadratic | x² − 4 |
| 3 | Cubic | x³ + 2x |
| 4 | Biquadratic | x⁴ − 1 |

### Types by Number of Terms
- **Monomial**: 1 term (5x²)
- **Binomial**: 2 terms (x + 1)
- **Trinomial**: 3 terms (x² + 2x + 1)

### Zeros of a Polynomial
- **Zero/root** of p(x): value a such that p(a) = 0
- A polynomial of degree n has at most n zeros
- Constant (non-zero) polynomial: NO zero
- Zero polynomial (p(x) = 0): every real number is a zero
- Linear polynomial ax + b has exactly ONE zero: x = −b/a
- Geometric meaning: x-coordinate where graph crosses x-axis

### Remainder Theorem
> If p(x) is divided by (x − a), the **remainder = p(a)**.

Example: p(x) = x³ − 3x + 1 divided by (x − 2)
Remainder = p(2) = 8 − 6 + 1 = **3**

### Factor Theorem
> (x − a) is a factor of p(x) **if and only if** p(a) = 0.

Corollary: (x + a) is a factor if p(−a) = 0

Application — factorising x³ − 3x² + 2:
- Try p(1) = 1 − 3 + 2 = 0 ✓ → (x−1) is a factor
- Divide: x³ − 3x² + 2 = (x−1)(x² − 2x − 2)

### Algebraic Identities ⭐ (Must Memorise)
1. **(a + b)² = a² + 2ab + b²**
2. **(a − b)² = a² − 2ab + b²**
3. **(a + b)(a − b) = a² − b²**
4. **(x + a)(x + b) = x² + (a+b)x + ab**
5. **(a + b + c)² = a² + b² + c² + 2ab + 2bc + 2ca**
6. **(a + b)³ = a³ + 3a²b + 3ab² + b³ = a³ + b³ + 3ab(a+b)**
7. **(a − b)³ = a³ − 3a²b + 3ab² − b³ = a³ − b³ − 3ab(a−b)**
8. **a³ + b³ = (a + b)(a² − ab + b²)**
9. **a³ − b³ = (a − b)(a² + ab + b²)**
10. **a³ + b³ + c³ − 3abc = (a + b + c)(a² + b² + c² − ab − bc − ca)**
    - Special case: If a + b + c = 0, then a³ + b³ + c³ = 3abc`,
    subjectIds: ['veda-subject-cbse9-maths', 'veda-subject-cbse-9-10-mathematics'],
    courseIds: [], examIds: ['veda-exam-cbse-board'],
    prerequisiteIds: ['veda-topic-cbse9-math-number-systems'],
    relatedIds: ['veda-topic-cbse9-math-linear-equations'],
    leadToIds: ['veda-topic-cbse9-math-linear-equations'],
    keyConcepts: ['degree', 'zeros', 'Remainder theorem', 'Factor theorem', 'algebraic identities', 'factorisation'],
    formulaHighlights: ['Remainder = p(a)', '(a+b)³ = a³+b³+3ab(a+b)', 'a³+b³+c³−3abc = (a+b+c)(...)'],
    estimatedMinutes: 100, difficulty: 'beginner', academicLevel: 'secondary',
    examRelevance: ['CBSE Class 9', 'NTSE', 'Foundation JEE'],
    tags: ['polynomials', 'Factor theorem', 'Remainder theorem', 'identities', 'Class 9', 'CBSE', 'Maths'],
    classYear: 9,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Polynomialdeg3.svg/320px-Polynomialdeg3.svg.png',
    libreTextsUrl: 'https://math.libretexts.org/Courses/Borough_of_Manhattan_Community_College/MAT_206_Precalculus/3%3A_Polynomial_and_Rational_Functions/3.4%3A_Graphs_of_Polynomial_Functions',
    updatedAt: '2026-11-14',
  },

  {
    id: 'veda-topic-cbse9-math-coordinate-geometry',
    slug: 'cbse9-coordinate-geometry',
    title: 'Coordinate Geometry',
    description: 'Cartesian plane, plotting points, quadrants, x-y axes, distance concept. NCERT Class 9 Maths Chapter 3.',
    overview: 'Coordinate geometry connects algebra and geometry through the Cartesian coordinate system. This introductory chapter establishes the Cartesian plane, axes, quadrants, and how points are located and plotted.',
    guide: `## Coordinate Geometry — Complete Notes

### Cartesian Plane
- **Origin (O)**: Intersection of x-axis and y-axis; coordinates (0, 0)
- **x-axis**: Horizontal number line (positive right, negative left)
- **y-axis**: Vertical number line (positive up, negative down)
- **Coordinate**: Pair (x, y) = (abscissa, ordinate)
  - **Abscissa (x)**: Horizontal distance from y-axis
  - **Ordinate (y)**: Vertical distance from x-axis

### Quadrants
| Quadrant | x sign | y sign | Example |
|---|---|---|---|
| I | + | + | (3, 4) |
| II | − | + | (−2, 5) |
| III | − | − | (−1, −3) |
| IV | + | − | (4, −2) |

- Points on x-axis: ordinate = 0 → (a, 0)
- Points on y-axis: abscissa = 0 → (0, b)

### Plotting Points
Steps: Start at origin → move |x| units right/left → move |y| units up/down → mark point
- (3, −2): Go 3 right, then 2 down → Quadrant IV
- (−4, 1): Go 4 left, then 1 up → Quadrant II

### Key Facts
- Mirror image of (a, b) across **x-axis** = (a, −b)
- Mirror image of (a, b) across **y-axis** = (−a, b)
- Mirror image across **origin** = (−a, −b)
- Distance from origin to (x, y) = √(x² + y²)

### Named after: René Descartes (1637) — connecting geometry and algebra is his most lasting contribution`,
    subjectIds: ['veda-subject-cbse9-maths', 'veda-subject-cbse-9-10-mathematics'],
    courseIds: [], examIds: ['veda-exam-cbse-board'],
    prerequisiteIds: ['veda-topic-cbse9-math-number-systems'],
    relatedIds: ['veda-topic-cbse9-math-linear-equations'],
    leadToIds: [],
    keyConcepts: ['Cartesian plane', 'x-axis', 'y-axis', 'quadrants', 'coordinates', 'abscissa', 'ordinate'],
    estimatedMinutes: 60, difficulty: 'beginner', academicLevel: 'secondary',
    examRelevance: ['CBSE Class 9'],
    tags: ['coordinate geometry', 'Cartesian plane', 'quadrants', 'Class 9', 'CBSE', 'Maths'],
    classYear: 9,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Cartesian-coordinate-system.svg/320px-Cartesian-coordinate-system.svg.png',
    libreTextsUrl: 'https://math.libretexts.org/Courses/Borough_of_Manhattan_Community_College/MAT_206_Precalculus/1%3A_Prerequisites/1.8%3A_Graphs_of_Functions',
    updatedAt: '2026-11-14',
  },

  {
    id: 'veda-topic-cbse9-math-linear-equations',
    slug: 'cbse9-linear-equations-two-variables',
    title: 'Linear Equations in Two Variables',
    description: 'ax + by + c = 0, solutions, graph as a straight line, equations of x-axis and y-axis. NCERT Class 9 Maths Chapter 4.',
    overview: 'A linear equation in two variables has infinitely many solutions forming a straight line in the coordinate plane. This chapter explores these equations, their solutions, and graphical representations.',
    guide: `## Linear Equations in Two Variables — Complete Notes

### Standard Form
**ax + by + c = 0** where a, b, c are real numbers, a ≠ 0 or b ≠ 0.
- Examples: 2x + 3y − 6 = 0; x − y = 4; y = 3x + 2

### Solutions
- A **solution** is any pair (x, y) satisfying the equation
- A linear equation in two variables has **infinitely many solutions**
- Example for x + 2y = 6: (0, 3), (6, 0), (2, 2), (−2, 4) are all solutions

### Graphical Representation
- Every solution forms a **point** on a straight line
- Every linear equation represents a **straight line** in the Cartesian plane
- Two points are sufficient to draw the line (find x-intercept and y-intercept)
  - x-intercept: set y = 0, solve for x → (x, 0)
  - y-intercept: set x = 0, solve for y → (0, y)

### Special Cases
- **y = 0** → x-axis (horizontal line through origin)
- **x = 0** → y-axis (vertical line through origin)
- **y = k** → line parallel to x-axis at height k
- **x = k** → line parallel to y-axis at distance k from origin
- **y = mx** → passes through origin with slope m

### Application
If a taxi charges ₹8 per km plus ₹50 flat fee, the cost equation is:
y = 8x + 50 or **8x − y + 50 = 0**
This is a linear equation in two variables (x = km, y = cost)`,
    subjectIds: ['veda-subject-cbse9-maths', 'veda-subject-cbse-9-10-mathematics'],
    courseIds: [], examIds: ['veda-exam-cbse-board'],
    prerequisiteIds: ['veda-topic-cbse9-math-coordinate-geometry'],
    relatedIds: ['veda-topic-cbse9-math-statistics'],
    leadToIds: [],
    keyConcepts: ['linear equation', 'ax+by+c=0', 'solutions', 'graph', 'straight line', 'x-intercept', 'y-intercept'],
    formulaHighlights: ['ax + by + c = 0', 'y = mx + c'],
    estimatedMinutes: 75, difficulty: 'beginner', academicLevel: 'secondary',
    examRelevance: ['CBSE Class 9', 'NTSE'],
    tags: ['linear equations', 'graph', 'straight line', 'Class 9', 'CBSE', 'Maths'],
    classYear: 9,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Cartesian-coordinate-system.svg/320px-Cartesian-coordinate-system.svg.png',
    libreTextsUrl: 'https://math.libretexts.org/Courses/Borough_of_Manhattan_Community_College/MAT_206_Precalculus/2%3A_Functions/2.2%3A_Graphs_of_Linear_Functions',
    updatedAt: '2026-11-14',
  },

  {
    id: 'veda-topic-cbse9-math-euclids-geometry',
    slug: 'cbse9-euclids-geometry',
    title: "Introduction to Euclid's Geometry",
    description: "Euclid's postulates and axioms, underfined terms, theorems. NCERT Class 9 Maths Chapter 5.",
    overview: "Euclid systematised geometry ~300 BCE with 5 postulates and common notions. This chapter introduces the axiomatic approach to mathematics and Euclid's foundational postulates.",
    guide: `## Euclid's Geometry — Complete Notes

### Historical Context
- **Euclid** (~300 BCE) wrote *Elements* — 13 books of geometry
- Axiomatic approach: build all geometry from a few basic assumptions
- Foundational to modern mathematics

### Basic Undefined Terms
- **Point**: Has no dimension (no length, width, height)
- **Line**: Has only length; extends infinitely in both directions
- **Plane**: Has only length and width; flat surface extending infinitely

### Euclid's Definitions (selected)
1. A point is that which has no part
2. A line is breadthless length
3. The ends of a line are points
4. A straight line lies equally between its points

### Euclid's Axioms (Common Notions)
1. Things equal to the same thing are equal to each other (a = c, b = c → a = b)
2. If equals are added to equals, the wholes are equal
3. If equals are subtracted from equals, the remainders are equal
4. Things that coincide with each other are equal
5. The whole is greater than the part

### Euclid's Five Postulates
1. A straight line can be drawn from any point to any other point
2. A finite straight line can be extended indefinitely in a straight line
3. A circle can be drawn with any centre and radius
4. All right angles are equal
5. **Parallel Postulate**: If a straight line meets two other lines such that the sum of co-interior angles < 180°, those two lines will meet on that side

### Equivalent to Postulate 5 (Playfair's Axiom):
> Through a point not on a given line, exactly ONE line can be drawn parallel to the given line.

### Key Theorems (from Postulates)
- Two distinct lines cannot have more than one point in common
- If a point C lies between A and B: AC + CB = AB (Segment Addition)
- An equilateral triangle can be constructed on any line segment

### Non-Euclidean Geometry
- Spherical geometry (on a sphere, Postulate 5 fails — no parallel lines through a point)
- Hyperbolic geometry (infinite parallel lines through a point)`,
    subjectIds: ['veda-subject-cbse9-maths', 'veda-subject-cbse-9-10-mathematics'],
    courseIds: [], examIds: ['veda-exam-cbse-board'],
    prerequisiteIds: [],
    relatedIds: ['veda-topic-cbse9-math-lines-angles'],
    leadToIds: ['veda-topic-cbse9-math-lines-angles'],
    keyConcepts: ["Euclid's postulates", 'axioms', 'undefined terms', 'parallel postulate', 'axiomatic approach'],
    estimatedMinutes: 60, difficulty: 'beginner', academicLevel: 'secondary',
    examRelevance: ['CBSE Class 9'],
    tags: ["Euclid", 'geometry', 'postulates', 'axioms', 'Class 9', 'CBSE', 'Maths'],
    classYear: 9,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Euclid-Elements.pdf/page1-320px-Euclid-Elements.pdf.jpg',
    libreTextsUrl: 'https://math.libretexts.org/Courses/College_of_the_Canyons/Math_100%3A_Liberal_Arts_Mathematics_(Saburo_Matsumoto)/02%3A_Geometry/2.01%3A_Undefined_Terms_and_Basic_Definitions',
    updatedAt: '2026-11-14',
  },

  {
    id: 'veda-topic-cbse9-math-lines-angles',
    slug: 'cbse9-lines-and-angles',
    title: 'Lines and Angles',
    description: 'Types of angles, transversal, parallel lines, angle sum of triangle. NCERT Class 9 Maths Chapter 6.',
    overview: 'Lines and angles are foundational geometry concepts. This chapter covers properties of parallel lines cut by a transversal and proves the triangle angle-sum property.',
    guide: `## Lines and Angles — Complete Notes

### Types of Angles
- **Acute**: 0° < angle < 90°
- **Right**: angle = 90°
- **Obtuse**: 90° < angle < 180°
- **Straight**: angle = 180° (straight line)
- **Reflex**: 180° < angle < 360°
- **Complete**: angle = 360°

### Pairs of Angles
- **Complementary**: Sum = 90°
- **Supplementary**: Sum = 180°
- **Adjacent**: Share vertex and one arm; non-overlapping
- **Linear pair**: Adjacent angles on a straight line; sum = 180°
- **Vertically opposite angles**: Formed at intersection of two lines; **equal**

### Transversal and Parallel Lines
When a **transversal** cuts two parallel lines:

| Angle pair | Relationship |
|---|---|
| Corresponding angles | Equal (same side, same position) |
| Alternate interior angles | Equal (Z-shape) |
| Alternate exterior angles | Equal |
| Co-interior (same-side interior) | Supplementary (sum = 180°) |

**Converse**: If corresponding angles are equal → lines are parallel

### Angle Sum Property of Triangle
> Sum of interior angles of a triangle = **180°**

**Proof** (using parallel lines): Through vertex A, draw line PQ ∥ BC
- ∠PAB = ∠ABC (alternate interior, PQ ∥ BC)
- ∠QAC = ∠ACB (alternate interior, PQ ∥ BC)
- ∠PAB + ∠BAC + ∠QAC = 180° (straight angle at A)
- ∴ ∠ABC + ∠BAC + ∠ACB = 180° ∎

**Exterior angle theorem**: Exterior angle of triangle = sum of two non-adjacent interior angles`,
    subjectIds: ['veda-subject-cbse9-maths', 'veda-subject-cbse-9-10-mathematics'],
    courseIds: [], examIds: ['veda-exam-cbse-board'],
    prerequisiteIds: ['veda-topic-cbse9-math-euclids-geometry'],
    relatedIds: ['veda-topic-cbse9-math-triangles'],
    leadToIds: ['veda-topic-cbse9-math-triangles'],
    keyConcepts: ['parallel lines', 'transversal', 'corresponding angles', 'alternate angles', 'co-interior angles', 'angle sum of triangle'],
    estimatedMinutes: 80, difficulty: 'beginner', academicLevel: 'secondary',
    examRelevance: ['CBSE Class 9', 'NTSE'],
    tags: ['lines', 'angles', 'parallel lines', 'transversal', 'triangle', 'Class 9', 'CBSE', 'Maths'],
    classYear: 9,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Parallel_lines_transversal.svg/320px-Parallel_lines_transversal.svg.png',
    libreTextsUrl: 'https://math.libretexts.org/Courses/College_of_the_Canyons/Math_100%3A_Liberal_Arts_Mathematics_(Saburo_Matsumoto)/02%3A_Geometry/2.02%3A_Angles',
    updatedAt: '2026-11-14',
  },

  {
    id: 'veda-topic-cbse9-math-triangles',
    slug: 'cbse9-triangles',
    title: 'Triangles',
    description: 'Congruence criteria (SSS, SAS, ASA, AAS, RHS), properties of isosceles and equilateral triangles, inequalities in triangles. NCERT Class 9 Maths Chapter 7.',
    overview: 'Two triangles are congruent if all corresponding sides and angles are equal. This chapter proves congruence criteria and uses them to establish important properties of special triangles.',
    guide: `## Triangles — Complete Notes

### Congruence of Triangles
Two figures are **congruent** if they have exactly the same shape and size.

For triangles ΔABC ≅ ΔPQR: six pairs match (3 sides + 3 angles)
When we establish congruence, all six pairs automatically match (CPCT rule).

### Congruence Criteria ⭐

**SAS (Side-Angle-Side)**
> If two sides and the included angle of one triangle are equal to two sides and the included angle of another → congruent.

**ASA (Angle-Side-Angle)**
> If two angles and the included side are equal → congruent.

**AAS (Angle-Angle-Side)**
> If two angles and a non-included side are equal → congruent.

**SSS (Side-Side-Side)**
> If all three sides are equal → congruent.

**RHS (Right angle-Hypotenuse-Side)**
> If in two right-angled triangles, hypotenuse and one side are equal → congruent.

**NOT valid**: AAA (similar but not necessarily congruent), SSA

### Properties of Isosceles Triangle
**Theorem**: Angles opposite equal sides are equal.
- If AB = AC → ∠ABC = ∠ACB
**Converse**: Sides opposite equal angles are equal.
- If ∠B = ∠C → AB = AC

**Equilateral triangle**: All sides equal → all angles = 60°

### Inequalities in Triangles
1. **Angle opposite longer side is greater** (and vice versa)
   - AB > AC → ∠ACB > ∠ABC
2. **Triangle inequality**: Sum of any two sides > third side
   - AB + BC > AC (for all three combinations)
3. **Exterior angle > either non-adjacent interior angle**

### CPCT (Corresponding Parts of Congruent Triangles)
Once triangles are proved congruent using a criterion, all other corresponding parts are automatically equal (by CPCT). This is the key proof strategy.`,
    subjectIds: ['veda-subject-cbse9-maths', 'veda-subject-cbse-9-10-mathematics'],
    courseIds: [], examIds: ['veda-exam-cbse-board'],
    prerequisiteIds: ['veda-topic-cbse9-math-lines-angles'],
    relatedIds: ['veda-topic-cbse9-math-quadrilaterals'],
    leadToIds: ['veda-topic-cbse9-math-quadrilaterals'],
    keyConcepts: ['congruence', 'SAS', 'ASA', 'SSS', 'RHS', 'AAS', 'CPCT', 'isosceles triangle', 'triangle inequality'],
    estimatedMinutes: 100, difficulty: 'beginner', academicLevel: 'secondary',
    examRelevance: ['CBSE Class 9', 'NTSE'],
    tags: ['triangles', 'congruence', 'SAS', 'SSS', 'RHS', 'CPCT', 'Class 9', 'CBSE', 'Maths'],
    classYear: 9,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Isoceles_triangle_theorem_1.svg/320px-Isoceles_triangle_theorem_1.svg.png',
    libreTextsUrl: 'https://math.libretexts.org/Courses/College_of_the_Canyons/Math_100%3A_Liberal_Arts_Mathematics_(Saburo_Matsumoto)/02%3A_Geometry/2.03%3A_Triangles',
    updatedAt: '2026-11-14',
  },

  {
    id: 'veda-topic-cbse9-math-quadrilaterals',
    slug: 'cbse9-quadrilaterals',
    title: 'Quadrilaterals',
    description: 'Properties of parallelogram, rhombus, rectangle, square, trapezium. Mid-point theorem. NCERT Class 9 Maths Chapter 8.',
    overview: 'Quadrilaterals are four-sided polygons. This chapter explores properties of special quadrilaterals — parallelograms, rectangles, squares, rhombuses — and proves the important mid-point theorem.',
    guide: `## Quadrilaterals — Complete Notes

### Angle Sum Property
> Sum of interior angles of a quadrilateral = **360°**

Proof: Diagonal divides into two triangles, each with angle sum 180°.

### Types of Quadrilaterals
| Type | Properties |
|---|---|
| Parallelogram | Opposite sides parallel and equal; opposite angles equal; diagonals bisect each other |
| Rectangle | Parallelogram with all right angles; diagonals equal |
| Rhombus | Parallelogram with all sides equal; diagonals bisect each other at right angles |
| Square | Rectangle + rhombus; all sides equal; all angles 90°; diagonals equal, bisect at right angles |
| Trapezium | One pair of parallel sides |
| Isosceles trapezium | Non-parallel sides equal; base angles equal |
| Kite | Two pairs of adjacent equal sides; one diagonal bisects the other at right angles |

### Properties of Parallelogram (key theorems)
1. Opposite sides are equal (AB = CD, BC = AD)
2. Opposite angles are equal (∠A = ∠C, ∠B = ∠D)
3. Consecutive angles are supplementary (∠A + ∠B = 180°)
4. Diagonals bisect each other (AO = OC, BO = OD)
5. Each diagonal divides parallelogram into two congruent triangles

**Conditions for a quadrilateral to be a parallelogram** (any one is sufficient):
- Both pairs of opposite sides are equal
- Both pairs of opposite angles are equal
- Diagonals bisect each other
- One pair of sides is both parallel and equal

### Mid-point Theorem
> The line segment joining the mid-points of two sides of a triangle is parallel to the third side and half its length.

If M, N are mid-points of AB, AC: then MN ∥ BC and MN = BC/2

**Converse**: A line through mid-point of one side, parallel to another side, bisects the third side.`,
    subjectIds: ['veda-subject-cbse9-maths', 'veda-subject-cbse-9-10-mathematics'],
    courseIds: [], examIds: ['veda-exam-cbse-board'],
    prerequisiteIds: ['veda-topic-cbse9-math-triangles'],
    relatedIds: ['veda-topic-cbse9-math-circles'],
    leadToIds: ['veda-topic-cbse9-math-circles'],
    keyConcepts: ['parallelogram', 'rectangle', 'rhombus', 'square', 'mid-point theorem', 'diagonal', 'angle sum'],
    estimatedMinutes: 90, difficulty: 'beginner', academicLevel: 'secondary',
    examRelevance: ['CBSE Class 9', 'NTSE'],
    tags: ['quadrilaterals', 'parallelogram', 'rhombus', 'mid-point theorem', 'Class 9', 'CBSE', 'Maths'],
    classYear: 9,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Quadrilateral_hierarchy.svg/320px-Quadrilateral_hierarchy.svg.png',
    libreTextsUrl: 'https://math.libretexts.org/Courses/College_of_the_Canyons/Math_100%3A_Liberal_Arts_Mathematics_(Saburo_Matsumoto)/02%3A_Geometry/2.04%3A_Polygons',
    updatedAt: '2026-11-14',
  },

  {
    id: 'veda-topic-cbse9-math-circles',
    slug: 'cbse9-circles',
    title: 'Circles',
    description: 'Chord properties, arc, angles subtended, cyclic quadrilateral. NCERT Class 9 Maths Chapter 9.',
    overview: 'A circle is the set of all points equidistant from a fixed centre. This chapter develops important theorems about chords, arcs, and angles in circles, including the inscribed angle theorem.',
    guide: `## Circles — Complete Notes

### Basic Terms
- **Radius**: Distance from centre to any point on circle
- **Diameter**: Longest chord; passes through centre; = 2r
- **Chord**: Line segment joining two points on circle
- **Arc**: Part of circle between two points (minor arc < semicircle < major arc)
- **Sector**: Region between two radii and an arc
- **Segment**: Region between a chord and its arc
- **Tangent**: Line touching circle at exactly one point (perpendicular to radius at point of contact)
- **Secant**: Line intersecting circle at two points

### Chord Properties

**Theorem 1**: Equal chords are equidistant from centre.
**Converse**: Chords equidistant from centre are equal.

**Theorem 2**: Perpendicular from centre to chord bisects the chord.
**Converse**: Line from centre bisecting a chord is perpendicular to it.

**Theorem 3**: There is exactly one circle through three non-collinear points.

### Angle Subtended by Chord / Arc

**Theorem 4**: Equal chords subtend equal angles at the centre.

**Inscribed Angle Theorem (Theorem 5)**:
> Angle subtended by an arc at the centre = **2 × angle subtended at any point on remaining arc**.

∠AOB = 2 × ∠ACB (O = centre, C on major arc)

**Corollaries**:
- Angles in the same segment are equal (∠ACB = ∠ADB for C, D on same arc)
- Angle in a semicircle = 90° (angle in semicircle is a right angle)
- Equal chords subtend equal angles at any point on the circle

### Cyclic Quadrilateral
A quadrilateral whose all four vertices lie on a circle.

**Theorem 6**: Opposite angles of a cyclic quadrilateral are **supplementary** (sum = 180°).
∠A + ∠C = 180°; ∠B + ∠D = 180°

**Converse**: If opposite angles of a quadrilateral sum to 180°, it is cyclic.`,
    subjectIds: ['veda-subject-cbse9-maths', 'veda-subject-cbse-9-10-mathematics'],
    courseIds: [], examIds: ['veda-exam-cbse-board'],
    prerequisiteIds: ['veda-topic-cbse9-math-quadrilaterals'],
    relatedIds: ['veda-topic-cbse9-math-herons-formula'],
    leadToIds: [],
    keyConcepts: ['chord', 'arc', 'inscribed angle theorem', 'cyclic quadrilateral', 'perpendicular from centre', 'angle in semicircle'],
    formulaHighlights: ['∠AOB = 2 × ∠ACB', '∠A + ∠C = 180° (cyclic quad)', 'Angle in semicircle = 90°'],
    estimatedMinutes: 90, difficulty: 'beginner', academicLevel: 'secondary',
    examRelevance: ['CBSE Class 9', 'NTSE'],
    tags: ['circles', 'chord', 'arc', 'cyclic quadrilateral', 'inscribed angle', 'Class 9', 'CBSE', 'Maths'],
    classYear: 9,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Inscribed_angle_theorem.svg/320px-Inscribed_angle_theorem.svg.png',
    libreTextsUrl: 'https://math.libretexts.org/Courses/College_of_the_Canyons/Math_100%3A_Liberal_Arts_Mathematics_(Saburo_Matsumoto)/02%3A_Geometry/2.07%3A_Circles',
    updatedAt: '2026-11-14',
  },

  {
    id: 'veda-topic-cbse9-math-herons-formula',
    slug: 'cbse9-herons-formula',
    title: "Heron's Formula",
    description: "Area of triangle using Heron's formula when all three sides are known. Area of quadrilateral by splitting. NCERT Class 9 Maths Chapter 10.",
    overview: "Heron's formula computes the area of any triangle given only its three side lengths, without needing the height. This chapter also applies it to find areas of quadrilaterals.",
    guide: `## Heron's Formula — Complete Notes

### Standard Area Formula
Area of triangle = ½ × base × height

**Problem**: Height is often unknown when only three sides are given.

### Heron's Formula ⭐
Given triangle with sides a, b, c:

**Semi-perimeter**: s = (a + b + c) / 2

**Area = √[s(s−a)(s−b)(s−c)]**

### Worked Examples

**Example 1**: Triangle with sides 3, 4, 5
- s = (3+4+5)/2 = 6
- Area = √[6×3×2×1] = √36 = **6 cm²**
- Check: This is a right triangle, Area = ½×3×4 = 6 ✓

**Example 2**: Equilateral triangle with side a
- s = 3a/2
- Area = √[(3a/2)(a/2)(a/2)(a/2)] = (√3/4)a²
- **Equilateral triangle area = (√3/4)a²** ← Important formula to memorise

**Example 3**: Scalene triangle with sides 12, 17, 25 m
- s = 54/2 = 27
- Area = √[27×15×10×2] = √8100 = **90 m²**

### Application to Quadrilaterals
Split quadrilateral along a diagonal → two triangles → apply Heron's formula to each.

Rhombus with diagonals d₁ and d₂:
- Split into 4 right triangles using diagonals
- Area = (1/2) × d₁ × d₂

**Land area problems**: ABCD is a quadrilateral plot with sides AB, BC, CD, DA and diagonal BD known → find total area by computing areas of ΔABD and ΔBCD separately.`,
    subjectIds: ['veda-subject-cbse9-maths', 'veda-subject-cbse-9-10-mathematics'],
    courseIds: [], examIds: ['veda-exam-cbse-board'],
    prerequisiteIds: ['veda-topic-cbse9-math-triangles'],
    relatedIds: ['veda-topic-cbse9-math-surface-volumes'],
    leadToIds: ['veda-topic-cbse9-math-surface-volumes'],
    keyConcepts: ["Heron's formula", 'semi-perimeter', 'area of triangle', 'area of quadrilateral'],
    formulaHighlights: ['s = (a+b+c)/2', 'Area = √[s(s−a)(s−b)(s−c)]', 'Equilateral area = (√3/4)a²'],
    estimatedMinutes: 70, difficulty: 'beginner', academicLevel: 'secondary',
    examRelevance: ['CBSE Class 9', 'NTSE'],
    tags: ["Heron's formula", 'area', 'triangle', 'semi-perimeter', 'Class 9', 'CBSE', 'Maths'],
    classYear: 9,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Triangle_illustration.svg/300px-Triangle_illustration.svg.png',
    libreTextsUrl: 'https://math.libretexts.org/Courses/Borough_of_Manhattan_Community_College/MAT_206_Precalculus/5%3A_Further_Applications_of_Trigonometry/5.5%3A_Further_Applications_of_Trigonometry',
    updatedAt: '2026-11-14',
  },

  {
    id: 'veda-topic-cbse9-math-surface-volumes',
    slug: 'cbse9-surface-areas-and-volumes',
    title: 'Surface Areas and Volumes',
    description: 'Surface area and volume of cuboid, cube, cylinder, cone, sphere, hemisphere. NCERT Class 9 Maths Chapter 11.',
    overview: 'Three-dimensional shapes have both surface area (total outer area) and volume (space occupied). This chapter gives formulae for all standard solids and applies them to real-world problems.',
    guide: `## Surface Areas and Volumes — Complete Notes

### Cuboid (Rectangular Box)
- Dimensions: l (length), b (breadth), h (height)
- **Lateral surface area** = 2h(l + b)
- **Total surface area** = 2(lb + bh + lh)
- **Volume** = lbh
- **Diagonal** = √(l² + b² + h²)

### Cube (all sides = a)
- **Lateral surface area** = 4a²
- **Total surface area** = 6a²
- **Volume** = a³
- **Diagonal** = a√3

### Right Circular Cylinder
- Radius r, height h
- **Curved (lateral) surface area** = 2πrh
- **Total surface area** = 2πr(r + h)
- **Volume** = πr²h

### Right Circular Cone
- Radius r, height h, slant height l = √(r² + h²)
- **Curved surface area** = πrl
- **Total surface area** = πr(r + l) = πr(r + √(r²+h²))
- **Volume** = (1/3)πr²h

### Sphere (radius r)
- **Surface area** = 4πr²
- **Volume** = (4/3)πr³

### Hemisphere (radius r)
- **Curved surface area** = 2πr²
- **Total surface area** = 3πr² (curved + flat circular base)
- **Volume** = (2/3)πr³

### Quick Reference Table
| Solid | CSA / LSA | TSA | Volume |
|---|---|---|---|
| Cuboid | 2h(l+b) | 2(lb+bh+lh) | lbh |
| Cube | 4a² | 6a² | a³ |
| Cylinder | 2πrh | 2πr(r+h) | πr²h |
| Cone | πrl | πr(r+l) | ⅓πr²h |
| Sphere | 4πr² | 4πr² | ⁴⁄₃πr³ |
| Hemisphere | 2πr² | 3πr² | ²⁄₃πr³ |

**Note**: π ≈ 22/7 ≈ 3.14159`,
    subjectIds: ['veda-subject-cbse9-maths', 'veda-subject-cbse-9-10-mathematics'],
    courseIds: [], examIds: ['veda-exam-cbse-board'],
    prerequisiteIds: ["veda-topic-cbse9-math-herons-formula"],
    relatedIds: ['veda-topic-cbse9-math-statistics'],
    leadToIds: [],
    keyConcepts: ['surface area', 'volume', 'cuboid', 'cylinder', 'cone', 'sphere', 'slant height'],
    formulaHighlights: ['Cone: V = ⅓πr²h, CSA = πrl', 'Sphere: SA = 4πr², V = ⁴⁄₃πr³', 'Cylinder: V = πr²h'],
    estimatedMinutes: 100, difficulty: 'beginner', academicLevel: 'secondary',
    examRelevance: ['CBSE Class 9', 'NTSE'],
    tags: ['surface area', 'volume', 'cylinder', 'cone', 'sphere', '3D shapes', 'Class 9', 'CBSE', 'Maths'],
    classYear: 9,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Sphere_wireframe_10deg_6r.svg/300px-Sphere_wireframe_10deg_6r.svg.png',
    libreTextsUrl: 'https://math.libretexts.org/Courses/College_of_the_Canyons/Math_100%3A_Liberal_Arts_Mathematics_(Saburo_Matsumoto)/02%3A_Geometry/2.06%3A_Volume_and_Surface_Area',
    updatedAt: '2026-11-14',
  },

  {
    id: 'veda-topic-cbse9-math-statistics',
    slug: 'cbse9-statistics',
    title: 'Statistics',
    description: 'Collection of data, frequency distributions, bar graphs, histograms, frequency polygons, mean, median, mode. NCERT Class 9 Maths Chapter 12.',
    overview: 'Statistics is the science of collecting, organising, and analysing data. This chapter introduces frequency distributions, graphical representation, and measures of central tendency (mean, median, mode).',
    guide: `## Statistics — Complete Notes

### Data Collection
- **Primary data**: Collected directly by researcher (survey, experiment)
- **Secondary data**: Already collected by someone else (census data, books)
- **Raw data**: Unorganised data as collected
- **Grouped data**: Organised into class intervals

### Frequency Distribution
- **Frequency**: How many times a value or range appears
- **Class interval**: Range of values in a group (e.g., 10–20)
- **Class width/size**: Upper limit − lower limit (e.g., 20−10 = 10)
- **Class mark (midpoint)**: (Upper + Lower limit) / 2
- **Tally marks**: //// for counting (5th mark crosses four)

### Graphical Representations

**Bar Graph**:
- For discrete/categorical data
- Bars of equal width, equal spacing
- Height = frequency

**Histogram**:
- For continuous grouped data
- No gap between bars (continuous data)
- Width of bar = class width
- Area of bar ∝ frequency

**Frequency Polygon**:
- Line graph connecting midpoints of class intervals at their frequencies
- Can be drawn with or without histogram
- For comparing two data sets

**Ogive (Cumulative Frequency Curve)**:
- Plots cumulative frequency vs upper class boundary
- Used to find median graphically

### Measures of Central Tendency

**Mean (Arithmetic Average)**
x̄ = (Σxᵢ) / n = (sum of all values) / (number of values)

For grouped data: x̄ = Σ(fᵢ × xᵢ) / Σfᵢ
where xᵢ = class mark, fᵢ = frequency

**Median**
- Middle value when data is arranged in ascending order
- If n is odd: Median = ((n+1)/2)th value
- If n is even: Median = average of (n/2)th and (n/2+1)th values
- Not affected by extreme values (outliers)

**Mode**
- Most frequently occurring value
- For grouped data: modal class = class with highest frequency
- A data set can have no mode, one mode, or multiple modes

**Relationship**: Mean − Mode ≈ 3(Mean − Median) [for moderately asymmetric data]`,
    subjectIds: ['veda-subject-cbse9-maths', 'veda-subject-cbse-9-10-mathematics'],
    courseIds: [], examIds: ['veda-exam-cbse-board'],
    prerequisiteIds: [],
    relatedIds: ['veda-topic-cbse9-math-probability'],
    leadToIds: ['veda-topic-cbse9-math-probability'],
    keyConcepts: ['frequency distribution', 'histogram', 'bar graph', 'mean', 'median', 'mode', 'class interval', 'frequency polygon'],
    formulaHighlights: ['x̄ = Σxᵢ/n', 'x̄ = Σfᵢxᵢ/Σfᵢ', 'Mean−Mode ≈ 3(Mean−Median)'],
    estimatedMinutes: 90, difficulty: 'beginner', academicLevel: 'secondary',
    examRelevance: ['CBSE Class 9', 'NTSE'],
    tags: ['statistics', 'mean', 'median', 'mode', 'histogram', 'frequency', 'Class 9', 'CBSE', 'Maths'],
    classYear: 9,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Example_histogram.png/320px-Example_histogram.png',
    libreTextsUrl: 'https://math.libretexts.org/Courses/Las_Positas_College/Math_27%3A_Statistics/02%3A_Describing_Data',
    updatedAt: '2026-11-14',
  },

  {
    id: 'veda-topic-cbse9-math-probability',
    slug: 'cbse9-probability',
    title: 'Probability',
    description: 'Classical probability, experiments, outcomes, events, empirical vs theoretical probability. NCERT Class 9 Maths Chapter 13.',
    overview: 'Probability measures the likelihood of an event. This chapter introduces the classical probability model — equally likely outcomes — and uses it to solve problems with coins, dice, and cards.',
    guide: `## Probability — Complete Notes

### Basic Concepts
- **Experiment**: An activity with well-defined outcomes
- **Random experiment**: Outcomes cannot be predicted with certainty (tossing a coin)
- **Trial**: A single performance of an experiment
- **Outcome**: Result of a single trial
- **Sample space (S)**: Set of all possible outcomes
- **Event**: One or more outcomes from an experiment (subset of S)
- **Favourable outcomes**: Outcomes that satisfy the event

### Classical (Theoretical) Probability
> P(E) = Number of favourable outcomes / Total number of equally likely outcomes

**Key properties**:
- 0 ≤ P(E) ≤ 1
- P(sure/certain event) = 1
- P(impossible event) = 0
- P(E) + P(not E) = 1 → P(Ē) = 1 − P(E)

### Standard Examples

**Coin** (1 coin): S = {H, T}, n(S) = 2
- P(Head) = 1/2

**Two coins**: S = {HH, HT, TH, TT}, n(S) = 4
- P(2 heads) = 1/4; P(at least 1 head) = 3/4

**Die** (1 die): S = {1,2,3,4,5,6}, n(S) = 6
- P(even) = 3/6 = 1/2
- P(prime) = 3/6 = 1/2 (primes: 2, 3, 5)
- P(> 4) = 2/6 = 1/3

**Standard deck of cards** (52 cards):
- 4 suits: Hearts ♥, Diamonds ♦, Clubs ♣, Spades ♠ (each 13 cards)
- 13 cards each: A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K
- Face cards = J, Q, K (12 total); Red = Hearts + Diamonds (26 total)
- P(red card) = 26/52 = 1/2
- P(face card) = 12/52 = 3/13
- P(ace) = 4/52 = 1/13
- P(king of spades) = 1/52

### Empirical (Experimental) Probability
> P(E) = (Number of trials where E occurred) / Total trials

Approaches theoretical probability as number of trials increases (Law of Large Numbers).

**Difference from theoretical**:
- Theoretical: Based on equally likely assumption; computed without experiment
- Empirical: Based on actual observations/frequency`,
    subjectIds: ['veda-subject-cbse9-maths', 'veda-subject-cbse-9-10-mathematics'],
    courseIds: [], examIds: ['veda-exam-cbse-board'],
    prerequisiteIds: ['veda-topic-cbse9-math-statistics'],
    relatedIds: [],
    leadToIds: [],
    keyConcepts: ['probability', 'sample space', 'event', 'favourable outcomes', 'classical probability', 'empirical probability'],
    formulaHighlights: ['P(E) = favourable/total', 'P(E) + P(Ē) = 1', '0 ≤ P(E) ≤ 1'],
    estimatedMinutes: 80, difficulty: 'beginner', academicLevel: 'secondary',
    examRelevance: ['CBSE Class 9', 'NTSE'],
    tags: ['probability', 'sample space', 'events', 'coins', 'dice', 'cards', 'Class 9', 'CBSE', 'Maths'],
    classYear: 9,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Dice_thrown_once.png/320px-Dice_thrown_once.png',
    libreTextsUrl: 'https://math.libretexts.org/Courses/Las_Positas_College/Math_27%3A_Statistics/03%3A_Probability',
    updatedAt: '2026-11-14',
  },
];
