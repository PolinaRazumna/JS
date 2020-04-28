var product;
var m = 1;
var s = 1;
var l = 1;
var i = 0;
var totlWeight = 0;
var toBuy = [];
var boxes = [{
		size: 'small',
		w: 3
	},
	{
		size: 'medium',
		w: 7
	},
	{
		size: 'large',
		w: 20
	}
]
var goods = [{
		name: 'sweets',
		weight: 13
	},
	{
		name: 'cookies',
		weight: 5
	},
	{
		name: 'cake',
		weight: 2
	}
];

while (true){
	product = prompt('Product?');
	if (product === null){
		break;
	} 
	else if (!isNaN(product)){
		alert("Not a product");
		continue;
	}
	for (var j = 0; j < goods.length; j++) {
		if(goods[j].name === product){
			toBuy[i++] = product;
			totlWeight += goods[j].weight;
		}
		// else {
		// 	alert("Not a product");
		// 	continue;
		// }
	}
}
if (totlWeight < boxes[0].w){
	document.write(boxes[0].size + " x" + s);
} else if (totlWeight > boxes[0].w && totlWeight <= boxes[1].w){
	document.write(boxes[1].size + " x" + m);
} else if (totlWeight > boxes[1].w && totlWeight <= boxes[2].w){
	document.write(boxes[2].size + " x" + l);
} else {
	l = Math.floor(totlWeight / boxes[2].w);
	if (totlWeight % boxes[2].w !== 0){
		if (totlWeight % boxes[2].w > boxes[1].w){
			l++
		} else if (totlWeight % boxes[2].w > boxes[0].w){
			document.write(boxes[1].size + " x" + m + "<br>");
		} else {
			document.write(boxes[0].size + " x" + s + "<br>");
		}
	}
	document.write(boxes[2].size + " x" + l);
}