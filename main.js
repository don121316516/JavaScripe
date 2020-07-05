console.log("我是JS!!!");
// DOM 文件物件模式
// 文件.透過 ID 搜尋元素("ID 名稱").插入 HTML = "文字訊息";
document.getElementById("box1").innerHTML = "哈囉~! javaScripe";

// JavaScript variables are containers for storing data values.
// JavaScript變數是用於存儲數據值的容器。
var x = 10;         //整數
var y = 1.5;        //小數點
var z ="文字"       //字串
var a =true         //不寧值 ture 是, false 否,

console.log(x);

// 加 減 乘 除 餘數 + - * / %

x = x - 2 ;

console.log(x);

// 目前版本 HTML5，CSS3，JS ES6
// ++ 遞增1 -- 遞減1
var e = 7;
e++;
console.log(e);

// ES6 指數符號 **
var f = 5;
f = f**3;
console.log(f);

//指定運算子
//賦值運算符將值分配給JavaScript變量。
var num = 10;
num **= 5 ;
console.log(num);

// 自訂函式(方法) function、method
// 語法：
// 函式 函式名稱(參數1，參數2，...) { 程式內容 }
// 括號中()可以包含用逗號分隔的參數名稱
function functionA() {
    console.log("我是函數A")    
};

//自訂函數需呼喚 可一次以上
functionA();
functionA();

function addTen(number){
    number += 10;
    console.log("加十:" + number)
};
addTen(90);  //需呼喚
addTen(80);  //需呼喚


function mul( a , b){
    console.log("數字相乘的結果" + (a * b));
}
mul( 12 ,70 );  //需呼喚

var car = {
    brand : "bmw",
    cc : 2000,
    drive: function() {
        console.log("開車中...");
    }
} ;

console.log("汽車的品牌:" + car.brand);
console.log("汽車的CC:" + car.cc);
car.drive();

//練習事件
var box2 = document.getElementById("box2");

box2.onclick = () => {
    console.log("點擊!");
}

box2.onmousemove = () => {
    console.log("滑入~~~~~")
};

box2.onmouseout = () => {
    console.log("滑出~~~~~~")
};

//arrays 數組用於在單個變量中存儲多個值。
var numbers = [33,22,11];

console.log("第一筆數字" + numbers[0]);
console.log("第二筆數字" + numbers[1]);
console.log("陣列的數量：" + numbers.length);


// 比較運算子 > < >= <= == !=
var testA = 100;
var testB = 20 ;

console.log(testA > testB);
console.log(testA < testB);
console.log(testA == testB);
console.log(testA <= testB);

// == 與 === 之差異
var testC = 7 ;
var testD = "7" ;

console.log("==的結果 : " + (testC == testD));    //比較"值" equal to	
console.log("===的結果 : " + (testC === testD));  //比較"值"與"性質" equal value and equal type	

//邏輯運算子
var testE = true;
console.log("顛倒 : "  + !testE);

//&& 有要有一個F 結果便是F
console.log(true && true);   
console.log(true && false);
console.log(false && true);
console.log(true && false);

//|| 有要有一個T 結果便是T
console.log(true || true);          // t
console.log(true || false);         // t
console.log(false || true);         // t
console.log(false || false);        // f
