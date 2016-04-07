import {Phone} from './constructors/constructor.phone';
import {Contract} from './constructors/constructor.contract';


console.log(Phone, Contract);

// Name, Storage (GB), Cost, Maker
const iphone6s = new Phone(`iPhone 6S`, [16, 64, 128], [539, 619, 699], `Apple`);
const galaxys7 = new Phone(`Galaxy`, [32], [569], 'Samsung'); 

const threeContractIphone = new Contract(`iPhone6s`, 24, 41, 4, 'all', 149);

console.log(iphone6s, threeContractIphone);

// console.log('Contract plan cost: £'+(threeContractIphone.totalCost - iphone6s.cost[0]) / threeContractIphone.months);