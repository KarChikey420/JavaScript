// Its a exmaple of Map
const nums=[1,2,3,4,5];
const TreeMultiply=nums.map((num,i,nums)=>{ // num is value i is index and num is array
    return num*3+i;
})
console.log(TreeMultiply)

// Its a example of Filter
const nums=[1,2,3,4,5];
const filterData=nums.filter((num)=>{
    return num>2
})
console.log(filterData)

//Its a example of reduce 
const nums=[1,2,3,4,5];
const reduceData=nums.reduce((acc,curr,i,nums)=>{ // acc is the previous value after adding 
    return acc+curr;
},0)

console.log(reduceData)

//ForEach example -- its change the value in the same array not create other

const nums=[1,2,3,4,5];
nums.forEach((num,i) => {
    nums[i]=num+3
});
console.log(nums)

// some practice questions

let students=[
    {name:'A',rollNumber:1,marks:90},
    {name:'B',rollNumber:2,marks:80},
    {name:'C',rollNumber:3,marks:70},
    {name:'D',rollNumber:4,marks:60}
];

const names=students.map((student)=>student.name.toUpperCase());
console.log(names)

const More_than_60=students.filter((student)=>{return student.marks>60})
console.log(More_than_60)

const MarksSum=students.reduce((acc,curr)=>{return acc+curr.marks},0)
console.log(MarksSum)
