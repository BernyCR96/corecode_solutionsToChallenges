function reverseWords(str){
    let strArr = str.split(' ').reverse()
    str = strArr.join(' ')
    console.log(str)
    return str; // reverse those words
  }