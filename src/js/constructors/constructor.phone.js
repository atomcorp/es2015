export class Phone {
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