const arr=[1,2,3,4,5,6];
const obj={
    course:"python",
    duration:5,
    price:5000,
    location:"pune"
};

// arr.forEach(function add(item){
//       console.log(item);
// })

// arr.forEach(add=(item)=> console.log(item));

// const nums=arr.map((item)=> item+1);

// console.log(nums);

// const val=arr.filter((val)=>val%2==0)

// console.log(val)

const add=arr.reduce((accu,item)=> accu+item,0)
console.log(add);