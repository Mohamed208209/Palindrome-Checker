function palindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g,"")
  
  let arr = str.split("")
  return arr.every((item)=>{
    return arr.indexOf(item) === arr.reverse().indexOf(item)
  })
}
palindrome("My age is 0, 0 si ega ym.")
