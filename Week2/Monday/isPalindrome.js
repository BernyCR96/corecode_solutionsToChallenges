function isPalindrome(line) {
    let word = line.toString()
    let isPal = word.split('').reverse().join('');
    return word === isPal;
  }