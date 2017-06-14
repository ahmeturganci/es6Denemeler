document.write("-----------------------Nesneler-----------------------<br />");
function createAnimal(name,owner){
return {
    name,
    owner,
    getInfo(){
        return `${this.name} ın sahibi ${this.owner}`
    },
    address:{
        streer:"12345 Çorumlular",
        city:"Çorum"       
    }
};
}
var aDog = createAnimal("Karabaş","Muzaffer");
document.write(`${aDog.getInfo()} <br/>`);
document.write(`${aDog.owner} ${aDog.address.city} <br/>`);
document.write(`${Object.getOwnPropertyNames(aDog).join(" ")}<br />`);

let {name,owner} = aDog;
document.write(`Köpek Adı : ${name}<br />`);

let favoriteNums = [3,23,.90,4.655];    


