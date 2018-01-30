import Http from './RequestModule';
import PolishCalc from './PolishModule';

let HttpModule = new Http();

const { id, expressions } = HttpModule.get('https://www.eliftech.com/school-task');

let polishTransform = new PolishCalc();
let result = [];
let digitFromStack = 0;
console.log('EXP->', expressions);

for(let i = 0; i < expressions.length; i++) {
    digitFromStack += polishTransform.calculations(expressions[i]);
    result.push(digitFromStack);
}

console.log('ID->', id)
const postData = {
    id,
    "results": result
};

HttpModule.post('https://www.eliftech.com/school-task', postData);

//ToDo false passed after post


