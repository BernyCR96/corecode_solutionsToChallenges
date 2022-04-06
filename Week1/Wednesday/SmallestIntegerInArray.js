class SmallestIntegerFinder {
    findSmallestInt(args) {
      let valMin = args[0];
      args.forEach(element=>{
        valMin = element < valMin ? element : valMin;
      })
      return valMin;
      //return Math.min(...args);//using spread operator
      //spread operator (...) convert an array to a list of arguments
    }
  }