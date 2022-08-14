function toggler() {
    let arr = Object.values(arguments); 
    let ele = 0;
    return function () {
      console.log(arr[ele++ % arr.length]); 
    };
  }
  
  const toggle = toggler(1, 7, 3);
  
  toggle();
  toggle();
  toggle();
  
  