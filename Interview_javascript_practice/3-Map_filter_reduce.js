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

//ForEach example -- its change the value in the same array not create other array

const nums=[1,2,3,4,5];
nums.forEach((num,i) => {
    nums[i]=num+3
});
console.log(nums)




