document.write("-----------------------Fonksiyonlar-----------------------<br />");
function getSum(num1 = 1, num2 = 1){
    document.write(`${num1} + ${num2} = ${num1 + num2}<br />`);

    document.write(`${arguments[0]} + ${arguments[1]} <br />`);
}
//Ekran Çıktısı : Toplam: 7 + 1 = 8 
getSum(7);//ikinci parametreyi göndermedik.

function getSumMore(...vals){
    let sum = 0;
    for(let i = 0, len = vals.length;i<len;i++){
        sum+=vals[i];
    }
    document.write(`Sayılar Toplamı ${sum}<br />`);
}
getSumMore(5,10,15,20);

let vals = [3,4,5,6,7,8];

getSumMore(...vals);

let difference = (num1,num2) =>num1-num2;//difference adında bir fonksiyon gerçekleştirdik
document.write(`5 - 3 = ${difference(5,3)}<br />`);  

let mult =(num1,num2) => {
    let p = num1*num2;
    document.write(`${num1} * ${num2} = ${p} <br />`);
}
mult(4,23);

var arrayValues =[1,2,3,4,5];
//reduce: array içerisindeki her bir eleman için belirlenen işlemi yapar
let sumValues = arrayValues.reduce((a,b)=>a + b);
document.write(`Toplam: ${sumValues}<br />`);

//filter: array içerisinde verilen koşulu sağlayan elemanları getirir.
let evens = arrayValues.filter(value => value % 2 != 0);
document.write(`Filitre Sonuc: ${evens}<br/>`);
//map: array içerisindeki elemanların map edilme işlemi.
let multThree = arrayValues.map(value => value * 3);
document.write(`3 ile çarpım: ${multThree}<br/>`);



