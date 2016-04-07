export class Contract {
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