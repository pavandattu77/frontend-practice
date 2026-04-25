let a=20
let b=10;
console.log(a + b); 
console.log(a - b); 
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b); 
console.log(a++)
console.log(-a);

let c = "Hello";
let d = "Hello";
let q=(c == d);
console.log(q); // true
console.log(c + d);
console.log(c.length); 
console.log(c+a)
console.log(c - d); // NaN (Not a Number)
console.log(c * d); // NaN (Not a Number)
console.log(c / d); // NaN (Not a Number)
console.log(c % d); // NaN (Not a Number)
console.log(c ** d); // NaN (Not a Number)
console.log(c + 10); // "Hello10"
console.log(c - 10); // NaN (Not a Number)
console.log(c != d); // false
console.log(c == d); // true
console.log(c === d); // true

let e = 23;
let f = 24;
let p=(e==f)
console.log(p); // false
console.log(e != f); // true
console.log(e === f); // false

let g = 25;
let h = "25";
let l=2;
console.log(g == h); // true (loose equality)
console.log(g === h); // false (strict equality)  
console.log(g += l) //27
console.log(g)// 27
console.log(g -= l)// 25
console.log(g *= l) // 50
console.log(g) // 50
console.log(g **= l) // 2500
console.log(g /= l) // 1250
console.log(g %= l) // 0

console.log(g|= l) // 2
console.log(g^= l) // 0
console.log(g <<= l) // 0
console.log(g << l) // 0
console.log(g >>= l) // 0

let s=true;
let z=false;
console.log(s && z); // false (logical AND)
console.log(s||z) // true (logical OR)
console.log(!s); // false (logical NOT)
console.log(!z); // true (logical NOT)
console.log(c == !s); // false (string vs boolean comparison)
console.log(c == !z); // false(string vs boolean comparison)

(g>l) ? console.log("g is greater than L") : console.log("g is not greater than L"); // g is greater than L
console.log((g<l)?true:false); // true
console.log((g>l)?true:false); // false
console.log((g>l)?(g*l):(g-l)); // -2
console.log((g<l)?(g*l):(g-l)); // 0

let m = 5;
console.log(m++); // 5 (post-increment)
console.log(++m); // 7 (pre-increment)
console.log(m--); // 7 (post-decrement)
console.log(--m); // 5 (pre-decrement)