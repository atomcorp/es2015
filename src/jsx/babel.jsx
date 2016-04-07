
let name = `tom`;

let sentence = `My name is ${name}`;

console.log(sentence);

const add = (a, b) => {
  return a + b;
};

// var add = function add(a, b) {
//   return a + b;
// };

console.log(add(10,10));

// Is phone worth it?

class Phone {
	constructor(name, storage, cost, maker) {
		this.name = name;
		this.storage = storage;
		this.cost = cost;
		this.maker - maker;
	} 

	get costPerGB() {
		return this.calcCostPerGB();
	}

	calcCostPerGB() {
		let total = [];
		for (let i = 0; i < this.storage.length; i++) {
			total.push(this.cost[i] / this.storage[i]);
		}
		return total;
	}
}

class Contract {
	constructor(phone, months, monthlyCost, data, minutes, upfrontCost) {
		this.phone = phone;
		this.months = months;
		this.monthlyCost = monthlyCost;
		this.data = data;
		this.minutes = minutes;
		this.upfrontCost = upfrontCost;
	}

	get totalCost() {
		return this.calcTotalCost();
	}

	calcTotalCost() {
		let total = this.monthlyCost * this.months + this.upfrontCost;
		return total;
	}
}

// Name, Storage (GB), Cost, Maker
const iphone6s = new Phone(`iPhone6S`, [16, 64, 128], [539, 619, 699], `Apple`);
const galaxys7 = new Phone(`Galaxy`, [32], [569], 'Samsung'); 

const threeContractIphone = new Contract(`iPhone6s`, 24, 41, 4, 'all', 149);

console.log('Contract plan cost: £'+(threeContractIphone.totalCost - iphone6s.cost[0]) / threeContractIphone.months);