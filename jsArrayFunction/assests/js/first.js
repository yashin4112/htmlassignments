const array = [
    'C++', 
    'java',
    'c',
    'python',
    
];

const array2 = [
    'html',
    'js',
    'css'
];

const flatArray=[
    'C',
    'C++',
    [
        'java',
        'python',
        [
            [
                'html',
                'css',
                'js'
            ]
        ]
    ]
];

const numArray=[
    1,2,3,4,5
];

const array3 = [
    [0,1],
    [2,3],
    [4,5],
];

const data = [
    1,
    2,
    'Yash',
    4
];

var firstElement;

console.log('Concate Function',array.concat(array2));

console.log('Copy With Function',array.copyWithin(1,2,4));

const itr1 =  array.entries();
console.log('entries function',itr1.next().value);

console.log('entries function',itr1.next().value);

console.log('fill function',array.fill(2,4,3));

console.log('filter function',array.filter(item => item.length >2));

console.log('find function:',array.find((item)=> item.length>3));

console.log('find function',array.findIndex((item) => item.length>2));

console.log('flat function',flatArray.flat());

console.log('flat map function', numArray.flatMap(item => [item *2]));

console.log('For each function');

array.forEach((item) => console.log(item));

console.log('array from function',Array.from('python'));

console.log('includes function',array.includes('java'));

console.log('index of', array.indexOf('C++'));

console.log('is array function',Array.isArray([1,2,3]));

console.log('join method');

const itr2 = array.keys();
for (const item of itr2) {
    console.log(item);
}

console.log('Last Index of ',array.lastIndexOf('python'));

console.log('map function',numArray.map(x => x*2));

console.log('array of',Array.of(1,2,3,4));

console.log(array.pop());

array.push('java')
console.log(array);

console.log('reduce function',numArray.reduce((previousValue,currentValue) => previousValue + currentValue));

console.log('reduce right ',array3.reduceRight((previousValue,currentValue) => previousValue.concat(currentValue)));

console.log('reverse',array.reverse());

console.log('Shift Function');
firstElement = array.shift(); 
console.log('array elements',array);
console.log(firstElement);

console.log('slice', array.slice(1,3));

console.log('some', numArray.some((element) => element %2 ==0));

console.log('sort', array.sort());

numArray.splice(3,0,6)
console.log('splice', numArray);

console.log('toLocaleString',array.toLocaleString('C++'));

console.log('toString',numArray.toString());

console.log('new array length',numArray.unshift(8,9));
console.log('num array elements',numArray);

console.log('values function');
const values = numArray.values();
for (const item of values) {
    console.log(item)
}
