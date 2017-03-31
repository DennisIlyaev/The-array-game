var Module1 = (function() {

var arr1 = document.getElementById('arr1'),
	arr2 = document.getElementById('arr2'),
	arr3 = document.getElementById('arr3'),
	arr1Res = document.getElementById('arr1Res'),
	arr2Res = document.getElementById('arr2Res'),
	arr3Res = document.getElementById('arr3Res'),
	a = document.getElementById('a'),
	b = document.getElementById('b'),
	c = document.getElementById('c'),
	d = document.getElementById('d'),
	e = document.getElementById('e'),
	f = document.getElementById('f'),
	g = document.getElementById('g'),
	h = document.getElementById('h'),
	i = document.getElementById('i'),
	j = document.getElementById('j'),
	k = document.getElementById('k'),
	l = document.getElementById('l'),
	m = document.getElementById('m'),
	n = document.getElementById('n'),
	headOne = document.getElementById("a1"),
	headTwo = document.getElementById("a2"),
	headThree = document.getElementById("a3"),
	x1 = document.getElementById('x1'),
	x2 = document.getElementById('x2'),
	x3 = document.getElementById('x3');

	var arr1Func = function() {
	arr1 = [];

	var num = prompt('Number of indexes (NUMBERS ONLY!)');
	for (var i = 0; i < num; i++) {
		arr1.push(Number(prompt('Value at index: ' + (i + 1))));
	}
	arr1Res.innerHTML = '[' + arr1 + ']';
	
	};

	var arr2Func = function() {
	arr2 = [];

	var num = prompt('Number of indexes (NUMBERS ONLY!)');
	for (var i = 0; i < num; i++) {
		arr2.push(Number(prompt('Value at index: ' + (i + 1))));
	}
	arr2Res.innerHTML = '[' + arr2 + ']';
	
	};

	var arr3Func = function() {
	arr3 = [];

	var num = prompt('Number of indexes (NUMBERS ONLY!)');
	for (var i = 0; i < num; i++) {
		arr3.push(Number(prompt('Value at index: ' + (i + 1))));
	}
	arr3Res.innerHTML = '[' + arr3 + ']';
	
	};

	arr1.addEventListener('click', arr1Func),
	arr2.addEventListener('click', arr2Func), 
	arr3.addEventListener('click', arr3Func),

	
	//______________Arrays____________________
	headOne.addEventListener('click', headOneFunc);
	headTwo.addEventListener('click', headTwoFunc);
	headThree.addEventListener('click', headThreeFunc);
	
	//______________ColorChange_______________
	function headOneFunc() {
	headOne.style.color = "blue";
		if (headOne.style.color === "blue") {
			headThree.style.color = "black";
			headTwo.style.color = "black";
		}
	}
	function headTwoFunc() {
	headTwo.style.color = "blue";
		if (headTwo.style.color === "blue") {
			headThree.style.color = "black";
			headOne.style.color = "black";
		}
	}
	function headThreeFunc() {
	headThree.style.color = "blue";
		if (headThree.style.color === "blue") {
			headOne.style.color = "black";
			headTwo.style.color = "black";
		}
	}
	
	//______________Actions Functions_______________

	 a.onmousedown = function() {
	 	a.style.color = "blue";
	 	a.style.backgroundColor = "red";

	 	if (headOne.style.color === "blue") {
	 		x1.innerHTML = obj.x(arr1);
	 	}

	 	if (headTwo.style.color === "blue") {
	 		x2.innerHTML = obj.x(arr2);
	 	}

	 	if (headThree.style.color === "blue") {
	 		x3.innerHTML = obj.x(arr3);
	 	}

	 	headOne.style.color = "black";
	 	headTwo.style.color = "black";
	 	headThree.style.color = "black";
	
	 }

	 a.onmouseup = function() {
	 	a.style.color = "black";
	 	a.style.backgroundColor = "";
	 
	 }

	 b.onmousedown = function() {
	 	b.style.color = "blue";
	 	var indx = parseInt(prompt("The number you want to find it's index in the array:"), 10);
	 	b.style.color = "black";

	 	if (headOne.style.color === "blue") {
	 		x1.innerHTML = 'The index of ' + indx + ' in the array is: ' + obj.index(arr1, indx);

	 	}

	 	if (headTwo.style.color === "blue") {
	 		x2.innerHTML = 'The index of ' + indx + ' in the array is: ' + obj.index(arr2, indx);
	 	}

	 	if (headThree.style.color === "blue") {
	 		x3.innerHTML = 'The index of ' + indx + ' in the array is: ' + obj.index(arr3, indx);
	 	}

	 	headOne.style.color = "black";
	 	headTwo.style.color = "black";
	 	headThree.style.color = "black";
	 }

	 b.onmouseup = function() {
	 	b.style.color = "black";
	 }

	 	c.onmousedown = function() {
	 	c.style.color = "blue";
	 	var indx = parseInt(prompt("What number would you like to remove from the array? (We'll provide a new array in the results)"), 10);
	 	c.style.color = "black";

	 	if (headOne.style.color === "blue") {
	 		x1.innerHTML = '[' + obj.remove(arr1, indx) + ']';

	 	}

	 	if (headTwo.style.color === "blue") {
	 		x2.innerHTML = '[' + obj.remove(arr2, indx) + ']';
	 	}

	 	if (headThree.style.color === "blue") {
	 		x3.innerHTML = '[' + obj.remove(arr3, indx) + ']';
	 	}

	 	headOne.style.color = "black";
	 	headTwo.style.color = "black";
	 	headThree.style.color = "black";
	 }

	 c.onmouseup = function() {
	 	c.style.color = "black";
	 }

	 d.onmousedown = function() {
	 d.style.color = "blue";
	 	var indx = parseInt(prompt("What number would you like to remove from the array?"), 10);
	 	d.style.color = "black";

	 	if (headOne.style.color === "blue") {
	 		arr1Res.innerHTML = '[' + obj.removeWithout(arr1, indx) + ']';

	 	}

	 	if (headTwo.style.color === "blue") {
	 		arr2Res.innerHTML = '[' + obj.removeWithout(arr2, indx) + ']';
	 	}

	 	if (headThree.style.color === "blue") {
	 		arr3Res.innerHTML = '[' + obj.removeWithout(arr3, indx) + ']';
	 	}

	 	headOne.style.color = "black";
	 	headTwo.style.color = "black";
	 	headThree.style.color = "black";
	 }

	 d.onmouseup = function() {
	 	d.style.color = "black";
	 }

	 e.onmousedown = function() {
	 e.style.color = "blue";
	 var indx = parseInt(prompt("What number would you like to insert into the last index of the array?"), 10);
	 	e.style.color = "black";

	 	if (headOne.style.color === "blue") {
	 		arr1Res.innerHTML = '[' + obj.append(arr1, indx) + ']';
	 	}

	 	if (headTwo.style.color === "blue") {
	 		arr2Res.innerHTML = '[' + obj.append(arr2, indx) + ']';
	 	}

	 	if (headThree.style.color === "blue") {
	 		arr3Res.innerHTML = '[' + obj.append(arr3, indx) + ']';
	 	}

	 	headOne.style.color = "black";
	 	headTwo.style.color = "black";
	 	headThree.style.color = "black";
	 }

	 e.onmouseup = function() {
	 	e.style.color = "black";
	 }

	 f.onmousedown = function() {
	 f.style.color = "blue";
	 f.style.backgroundColor = "red";
	 	f.style.color = "black";
	 
	 	if (headOne.style.color === "blue") {
	 		arr1Res.innerHTML = '[' + obj.removeLastItem(arr1) + ']';
	 	}

	 	if (headTwo.style.color === "blue") {
	 		arr2Res.innerHTML = '[' + obj.removeLastItem(arr2) + ']';
	 	}

	 	if (headThree.style.color === "blue") {
	 		arr3Res.innerHTML = '[' + obj.removeLastItem(arr3) + ']';
	 	}

	 	headOne.style.color = "black";
	 	headTwo.style.color = "black";
	 	headThree.style.color = "black";
	 }

	 f.onmouseup = function() {
	 	f.style.color = "black";
	 	f.style.backgroundColor = "";
	 
	 }

	 g.onmousedown = function() {
	 g.style.color = "blue";
	 var indx = parseInt(prompt("What number would you like to insert in the beginning of the array?"), 10);
	 	g.style.color = "black";

	 	if (headOne.style.color === "blue") {
	 		arr1Res.innerHTML = '[' + obj.addItemIndex0(arr1, indx) + ']';
	 	}

	 	if (headTwo.style.color === "blue") {
	 		arr2Res.innerHTML = '[' + obj.addItemIndex0(arr2, indx) + ']';
	 	}

	 	if (headThree.style.color === "blue") {
	 		arr3Res.innerHTML = '[' + obj.addItemIndex0(arr3, indx) + ']';
	 	}

	 	headOne.style.color = "black";
	 	headTwo.style.color = "black";
	 	headThree.style.color = "black";
	 }

	 g.onmouseup = function() {
	 	g.style.color = "black";
	 }

	 h.onmousedown = function() {
	 h.style.color = "blue";
	 h.style.backgroundColor = "red";
	 h.style.color = "black";

	 	if (headOne.style.color === "blue") {
	 		arr1Res.innerHTML = '[' + obj.removeIndex0(arr1) + ']';
	 	}

	 	if (headTwo.style.color === "blue") {
	 		arr2Res.innerHTML = '[' + obj.removeIndex0(arr2) + ']';
	 	}

	 	if (headThree.style.color === "blue") {
	 		arr3Res.innerHTML = '[' + obj.removeIndex0(arr3) + ']';
	 	}

	 	headOne.style.color = "black";
	 	headTwo.style.color = "black";
	 	headThree.style.color = "black";
	 }

	 h.onmouseup = function() {
	 	h.style.color = "black";
	 	h.style.backgroundColor = "";
	 
	 }

	 i.onmousedown = function() {
	 i.style.color = "blue";
	 i.style.color = "black";

	 	if (headOne.style.color === "blue") {
	 		var indx1 = parseInt(prompt("Combine array number 1 with array number? (Please insert 2 or 3)"), 10);
	 		if (indx1 === 2) {
	 			x1.innerHTML = '[' + obj.combineArrays(arr1, arr2) + ']';
	 		} else if (indx1 === 3) {
	 			x1.innerHTML = '[' + obj.combineArrays(arr1, arr3) + ']';
	 		}
	 	}

	 	if (headTwo.style.color === "blue") {
	 		var indx2 = parseInt(prompt("Combine array number 2 with array number? (Please insert 1 or 3)"), 10);
	 		if (indx2 === 1) {
	 			x2.innerHTML = '[' + obj.combineArrays(arr2, arr1) + ']';
	 		} else if (indx2 === 3) {
	 			x2.innerHTML = '[' + obj.combineArrays(arr2, arr3) + ']';
	 		}
	 	}

	 	if (headThree.style.color === "blue") {
	 		var indx3 = parseInt(prompt("Combine array number 3 with array number? (Please insert 1 or 2)"), 10);
	 		if (indx3 === 1) {
	 			x3.innerHTML = '[' + obj.combineArrays(arr3, arr1) + ']';
	 		} else if (indx3 === 2) {
	 			x3.innerHTML = '[' + obj.combineArrays(arr3, arr2) + ']';
	 		}
	 	}

	 	headOne.style.color = "black";
	 	headTwo.style.color = "black";
	 	headThree.style.color = "black";

	 }


	 i.onmouseup = function() {
	 	i.style.color = "black";
	 }


	 j.onmousedown = function() {
	 j.style.color = "blue";
	 	j.style.color = "black";

	 	if (headOne.style.color === "blue") {
	 		var indx1 = parseInt(prompt("In what index would you like to add your item?"), 10),
	 			item1 = parseInt(prompt("What's the item you want to add? (Numeric only)"), 10);
	 	
	 		arr1Res.innerHTML = '[' + obj.insertItem(indx1, arr1, item1) + ']';
	 	}

	 	if (headTwo.style.color === "blue") {
	 		var indx1 = parseInt(prompt("In what index would you like to add your item?"), 10),
	 			item1 = parseInt(prompt("What's the item you want to add? (Numeric only)"), 10);
	 	
	 		arr2Res.innerHTML = '[' + obj.insertItem(indx1, arr2, item1) + ']';
	 	}

	 	if (headThree.style.color === "blue") {
	 		var indx1 = parseInt(prompt("In what index would you like to add your item?"), 10),
	 			item1 = parseInt(prompt("What's the item you want to add? (Numeric only)"), 10);
	 	
	 		arr3Res.innerHTML = '[' + obj.insertItem(indx1, arr3, item1) + ']';
	 	}

	 	headOne.style.color = "black";
	 	headTwo.style.color = "black";
	 	headThree.style.color = "black";
	 }

	 j.onmouseup = function() {
	 	j.style.color = "black";
	 }

	 k.onmousedown = function() {
	 k.style.color = "blue";
	 	k.style.color = "black";

	 	if (headOne.style.color === "blue") {
	 		var indx1 = parseInt(prompt("What's the item you want to count in the array?"), 10);
	 		x1.innerHTML = 'The count of ' + indx1 +' in the array is: ' + obj.count(arr1, indx1);
	 	}

	 	if (headTwo.style.color === "blue") {
	 		var indx1 = parseInt(prompt("What's the item you want to count in the array?"), 10);
	 		x2.innerHTML = 'The count of ' + indx1 +' in the array is: ' + obj.count(arr2, indx1);
	 	}

	 	if (headThree.style.color === "blue") {
	 		var indx1 = parseInt(prompt("What's the item you want to count in the array?"), 10);
	 		x3.innerHTML = 'The count of ' + indx1 +' in the array is: ' + obj.count(arr3, indx1);
	 	}

	 	headOne.style.color = "black";
	 	headTwo.style.color = "black";
	 	headThree.style.color = "black";
	 }

	 k.onmouseup = function() {
	 	k.style.color = "black";
	 }

	 l.onmousedown = function() {
	 l.style.color = "blue";
	 	l.style.color = "black";

	 	if (headOne.style.color === "blue") {
	 		x1.innerHTML = 'The duplicated item/s in the array is/are: ' + obj.duplicates(arr1);
	 	}

	 	if (headTwo.style.color === "blue") {
			x2.innerHTML = 'The duplicated item/s in the array is/are: ' + obj.duplicates(arr2);
	 	}

	 	if (headThree.style.color === "blue") {
	 		x3.innerHTML = 'The duplicated item/s in the array is/are: ' + obj.duplicates(arr3);
	 	}

	 	headOne.style.color = "black";
	 	headTwo.style.color = "black";
	 	headThree.style.color = "black";
	 }

	 l.onmouseup = function() {
	 	l.style.color = "black";
	 }

	 m.onmousedown = function() {
	 m.style.color = "blue";
	 m.style.backgroundColor = "red";
	 	m.style.color = "black";
	 	if (headOne.style.color === "blue") {
	 		arr1 = obj.square(arr1);
	 		arr1Res.innerHTML = arr1;
	 	}

	 	if (headTwo.style.color === "blue") {
	 		arr2 = obj.square(arr2);
	 		arr2Res.innerHTML = arr2;
	 	}

	 	if (headThree.style.color === "blue") {
	 		arr3 = obj.square(arr3);
	 		arr3Res.innerHTML = arr3;
	 	}

	 	headOne.style.color = "black";
	 	headTwo.style.color = "black";
	 	headThree.style.color = "black";
	 }

	 m.onmouseup = function() {
	 	m.style.color = "black";
	 	m.style.backgroundColor = "";
	 
	 }

	 n.onmousedown = function() {
	 n.style.color = "blue";
	 	n.style.color = "black";

	 	if (headOne.style.color === "blue") {
	 		var indx1 = parseInt(prompt("What's the item you want to find it/their occurrences(indexes) in the array?"), 10);
	 		x1.innerHTML = 'The index/es of the occurrenced item is/are: ' + obj.findAllOccurrences(arr1, indx1);
	 	}

	 	if (headTwo.style.color === "blue") {
	 		var indx1 = parseInt(prompt("What's the item you want to find it/their occurrences(indexes) in the array?"), 10);
	 		x2.innerHTML = 'The index/es of the occurrenced item is/are: ' + obj.findAllOccurrences(arr2, indx1);
	 	}

	 	if (headThree.style.color === "blue") {
	 		var indx1 = parseInt(prompt("What's the duplicated item you want to find it/their occurrences(indexes) in the array?"), 10);
	 		x3.innerHTML = 'The index/es of the occurrenced item is/are: ' + obj.findAllOccurrences(arr3, indx1);
	 	}

	 	headOne.style.color = "black";
	 	headTwo.style.color = "black";
	 	headThree.style.color = "black";
	 }

	 n.onmouseup = function() {
	 	n.style.color = "black";
	 	
	 
	 }



})();



