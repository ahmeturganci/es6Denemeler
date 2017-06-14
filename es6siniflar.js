document.write("-----------------------Sınıflar-----------------------<br />");
class   Mammal{
    constructor(name){
        this._name = name;
    }
    get name(){
        return this._name; 
    }
    set name(name){
        this._name= name;
    }

    static makeMammal(name){
        return new Mammal(name);
    }

    getInfo(){
        return`${this.name} bir memelidir.`;
    }
}

let monkey = new Mammal("Şakir");

monkey.name = "Mahmut";
document.write(`Memeli : ${monkey.name}<br />`);

let dolphin = new Mammal("Badem");
document.write(`Memeli2 : ${dolphin.name}<br />`);

class Marsupial extends Mammal{
    constructor(name,hasPouch){
        supper(name);
        this._hasPouch = hasPouch;
    }
    get hasPouch(){ 
        return this._hasPouch;
    }
    set hasPouch(hasPouch){
        this._hasPouch = hasPouch;
    }
    
    getInfo(){
          return`${this.name} bir keselidir.`; 
    }
    
}
let kangaroo = new Marsupial("Zeytin",true);
document.write(`Bu bir ${kangaroo.hasPouch} ${kangaroo.name} bir keseye sahip<br />`);


