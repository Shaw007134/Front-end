
function add(n){
  console.log(n)
  if(n==1){
    return 1 
  }
  return n + add(n-1)
}

add(10)