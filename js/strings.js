let s="Welcome to the world of JavaScript!"
console.log(s.length)

console.log(s[6])
console.log(s.at(-2))
console.log(s[s.length-1])
console.log(s.charAt(5))

let st='   Welcome to js   ' 
console.log(st)
console.log(st.trimStart())
console.log(st.trimEnd())
console.log(st.trim())

str="Welcome"
console.log(str.indexOf("l"))
console.log(str.indexOf("e"))
console.log(str.lastIndexOf("e"))

console.log(str.includes("d"))
console.log(str.includes("e"))

console.log(s.slice(3,7))

console.log(s.repeat(10))

console.log(s.replace("W","w"))
console.log(s.replaceAll("welcome","Hello"))

console.log(s.toUpperCase())
console.log(s.toLowerCase())
console.log(s.toLocaleLowerCase())

console.log(s.split())
