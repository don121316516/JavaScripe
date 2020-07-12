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

// 判斷式if 如果條件為true，則使用該語句指定要執行的JavaScript代碼 false則不動作。
// if (布林值ture/false) {需要執行的程式}
if (true) {
    console.log("我是判斷式~");
}


var booltest = false ;
//當布林值為false時 執行else裡的程式
if (booltest) {
    console.log("布林值為ture!!")
} else {
    console.log("布林值為false!!")
}

// 如果 分數 >= 60 ：及格
// 如果 分數 >= 40 ：補考
// 如果 分數 ：被當

var score = document.getElementById("score");
var result = document.getElementById("result");

score.onchange = () => {
    var s = parseInt(score.value);  // 文字轉整數

    if (s >= 60) {
        result.innerText = "分數：" + s + " - 及格";
    }
    else if (s >= 40) {
        result.innerText = "分數：" + s + " - 補考";
    }
    else {
        result.innerText = "分數：" + s + " - 被當";
    }
}

// 迴圈 for
// 語法
// for (初始值; 條件-布林值; 迭代器-迴圈結束會執行的區塊) {}

// 初始值：迴圈開始的值
// 條　件：迴圈會執行的條件 - 當條件為 true 執行，false 結束迴圈
// 迭代器：初始值處理 - 遞增 ++
for (let i = 1; i < 10; i++) {
    console.log ("迴圈" + i);  
}

// 陣列
var products = ["冰美式", "卡布奇諾", "摩卡"];

// products.length 陣列.長度(數量) 3

for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
}

// 透過類別取得複數元素 - 結果為陣列
var ps = document.getElementsByClassName("product");

console.log(ps);

for (let i = 0; i < ps.length; i++) {
    ps[i].innerText = products[i];
}

//常數
const pi = 3.14159269 ;  //不能被改變
pi = 5; //網頁錯誤 5不等於3.14159269


// let 與 var 差異
// let 在同樣的區塊內不能重複 - 安全
// 只在區塊內有效

var countA = 10;
var countA = 7;
// let countA = 5; // 重複瀏覽器顯示錯誤

{
    let countA = 5;
    console.log(countA);
}

console.log(countA);


var countB = 99;

{
    var countB = 77;
}

console.log(countB);

let countC = 99;

{
    let countC = 77;
}

console.log(countC);