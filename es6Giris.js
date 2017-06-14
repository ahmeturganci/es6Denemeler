document.write("-----------------------Giris-----------------------<br />");
    /*
    Ekran Çıktısı
    x = 5
    x = 5
    let ile kapsam içerisini değiştirsek.
    */
var x = 10;
if(true){
    var x = 5;//evrensel değişken gibi davrandı 
    document.write("x = "+ x +"<br />");
}
    document.write("x = "+ x +"<br />");
    /*
    Ekran Çıktısı
    x = 5
    x = 10
    let ile kapsam içerisini değer ile yukarıdaki evrensel değer farklı.
    */
var y = 10;
if(true){
    let y = 5;
    document.write("y = "+ y +"<br />");
}
    document.write("y = "+ y +"<br />");

let ad = "Ahmet";
let soyad ="Urgancı";
//Ekran Çıktısı : Ahmet Urgancı
document.write( `${ad} ${soyad} <br /> ` );

let sayi1 = 50;
let sayi2 = 100;
//Ekran Çıktısı : 50 * 100 = 5000 
document.write( `50 * 100 = ${sayi1 * sayi2} <br /> ` );

function hesapYap(islem,...degerler){
    if(islem[0]=="Topla"){
        document.write(`${degerler[0]} + ${degerler[1]} = ${degerler[0] + degerler[1]}<br />`);
    }
    else if(islem[0]=="Cikar"){
        document.write(`${degerler[0]} - ${degerler[1]} = ${degerler[0] - degerler[1]}<br />`);
    }
}
// Ekran Çıktısı : 50 + 60 = 110
hesapYap `Topla${50} ${60}`;
// Ekran Çıktısı : 50 - 60 = -10
hesapYap `Cikar${50} ${60}`;

/*Ekran Çıktısı :
A
h
m
e
t
*/
for(let c of ad){
    document.write(`${c}<br/>`);
}
    // Ekran Çıktısı : Selam Selam Selam Selam Selam -> tekrarlama
    document.write("Selam ".repeat(5)+"<br/>");
    //Ekran Çıktısı :true -> başlama karakterlerini kontrol
    document.write(ad.startsWith("Ah")+"<br/>");
    //Ekran Çıktısı : true -> son karakterleri kontrol
    document.write(ad.endsWith("et")+"<br/>");
    //Ekran Çıktısı :false -> içerisinde geçiyormu
    document.write(soyad.includes("ah")+"<br />");

    // let cokSatirStr = `Bu gün
    // basit şekilde
    // ES6 kodlarına bakıyoruz.`;
    // documet.write(`${cokSatirStr} <br />`);
