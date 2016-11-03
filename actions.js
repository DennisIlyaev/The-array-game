
var modularAction = modularAction || {};

modularAction.Module = (function() {

var _obj = {
  x: function(arr) {
    var sum = 0;
    for (var i = 0, len = arr.length; i < len; i++) {
      sum += arr[i];
    }
    return sum;
  },
  
  index: function(arr, item) {
    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
  },
  
  remove: function(arr, item) {
    var newArr = [];
    
    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] !== item) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  },
  
  removeWithout: function(arr, item) {
    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },
  
  append: function(arr, item) {
    arr.push(item);
    return arr;
  },
  
  removeLastItem: function(arr) {
    arr.pop();
    return arr;
  },
  
  addItemIndex0: function(arr, item) {
    arr.unshift(item);
    return arr;
  },
  
  removeIndex0: function(arr) {
    arr.shift();
    return arr;
  },
  
  combineArrays: function(arr1, arr2) {
  var arr3 = [];
  
  arr3 = arr1.concat(arr2);
  return arr3;
    
  },
  
  insertItem: function(index, arr, item) {
    arr.splice(index, 0, item);
    return arr;
  },
  
  count: function(arr, item) { 
    var count = 0;
    for(var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        count++;
      }
    }
    return count;
  },
  
   duplicates: function(arr) {
     var seen = {},
         dups = [];
     
     for (var i = 0, len = arr.length; i < len; i++) {
       seen[arr[i]] = seen[arr[i]] ? seen[arr[i]] + 1 : 1;
     }
     
     for (var prop in seen) {
       if (seen.hasOwnProperty(prop) && seen[prop] > 1) {
         dups.push(prop);
       }
       
     }
     
     return dups;
     
   },
  
    square: function(arr) {
      var x = [];
      
      for (var i = 0, len = arr.length; i < len; i++) {
        x.push(arr[i] * arr[i]);
      }
      
      return x;
    },
  
    findAllOccurrences: function(arr, target) {
      var occ = [];
      
      for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i] === target) {
          occ.push(i);
        }
      }
      return occ;
    }

};

  return {
    obj: _obj
  }  

}());