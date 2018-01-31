import Http from './RequestModule';
import PolishCalc from './PolishModule';

let HttpModule = new Http();

const { id, expressions } = HttpModule.get('https://www.eliftech.com/school-task');

let polishTransform = new PolishCalc();
let result = [];

for(let i = 0; i < expressions.length; i++) {
    let digitFromStack = 0;
    digitFromStack += polishTransform.calculations(expressions[i]);
    result.push(digitFromStack);
}

const postData = {
    id,
    "results": result
};

HttpModule.post('https://www.eliftech.com/school-task', postData);

//ToDo false passed after post


