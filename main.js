const jsonData = `{"data":[10,45,81,90,82,6,29,31,22,5,99,27,55,68,17,88,14,47,50,67]}`;

function isPrime(num) {
    if (num == 2 || num == 3) return true;
    if (num <= 1 || num % 2 == 0 || num % 3 == 0) return false;
    for (let i = 5; i * i <= num; i += 6)
        if (num % i == 0 || num % (i + 2) == 0) return false;
    return true;
}

function isEven(num) {
    return num % 2 === 0;
}

function convert(data, actionCb) {
    return actionCb(data);
}

function actionCallback(arr){
    let { data } = JSON.parse(arr);
    return data;
}

const convertedData = convert(jsonData, actionCallback);

// console.log(convertedData);

class DataProcess{
    constructor(data){
        this._data = data
    }

    sortData(){
        this._data.sort((a,b) => a - b);
    }
    calculateTotal(){
        this.total = this._data.reduce((a,b) => a + b);
    }
    isEven(){
        return this.total % 2 === 0;
    }
    doDouble(){
        this.double = this._data.map(a => a * 2);
    }
    static getOdd(arr){
        return arr.filter(el => el % 2 === 1);
    }
    static getEven(arr){
        return arr.filter(el => el % 2 === 0);
    }
    printProp(){
        console.log(this._data);
        console.log(this.total);
        console.log(this.double);
    }
    toJSON(){
        return {
            data:this._data,
            total:this.total,
            double:this.double
        }
    }
    
}

let classData = new DataProcess(convertedData);
// console.log(classData);

 classData.sortData();
// console.log(classData);

 classData.calculateTotal();
// console.log(classData);

// console.log(classData.isEven());

 classData.doDouble();
// console.log(classData);

// console.log(DataProcess.getOdd(classData._data));
// console.log(DataProcess.getEven(classData._data));

// classData.printProp();

console.log(JSON.stringify(classData))