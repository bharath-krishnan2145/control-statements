/*const fruits=['apple','orange','banana']
const mix=['gdf',['dgf',3],5,7]
console.log(mix[1][1])
console.log(mix)*/
let m=prompt("enter first num")
let n=prompt("enter second")
let sum=0;
if(m>n){
    sum=0;
}
for(let i=m;i<=n;i++){
    
    sum=sum+(i*i*i)
}
console.log(sum)