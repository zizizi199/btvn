let arr =[];
let n= parseInt(prompt('Nhập số các số trong mảng: '));
let k= parseInt(prompt('Nhập k: '));
for(let i =0; i<n;i++){
    let m = parseInt(prompt(i+1));
    arr.push(m);
}

console.log(arr);
console.log(k);
for(let i=0; i< arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if((arr[i] + arr[j]) % k == 0){
            console.log('('+i+', '+j+')' )
        }
    }
}