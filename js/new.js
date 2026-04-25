//... is Spread operator
const arr1=[45,5463,345,53]
const arr2=[45,5463,345,53];

const mergearr=[...arr1,...arr2];
console.log(mergearr)

const copiedArray=[...arr1]
console.log(copiedArray);

const obj1={a:1,b:2}
const obj2={c:3,d:4}

const objmerge={...obj1,...obj2};
console.log(objmerge)

const copyobj={...obj2}
console.log(copyobj)

const updateobj={...obj1,b:99}
console.log(updateobj)

