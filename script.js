var isDate = function (input) {
  //   write your code here
	 if (input instanceof Date && !isNaN(input)) {
    return true;
  }
  
  if (typeof input === 'string' || typeof input === 'number') {
    const parsedDate = new Date(input);
    if (!isNaN(parsedDate.getTime())) {
      return true;
    }
  }
  
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
