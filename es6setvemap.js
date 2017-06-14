document.write("-----------------------Sets-----------------------<br />");
var randSet = new Set();
randSet.add(10);
randSet.add("Word");
document.write(`Set Size : ${randSet.size}<br />`);
for (let val of randSet) document.write(`Set Val : ${val}<br />`);

document.write("-----------------------MAPS -----------------------<br />");
// anahtar değer çiftleri 
var randMap = new Map();
randMap.set("key1", "rastgele kararkter");
randMap.set("key2", 10);
// Değerleri Getir
document.write(`key1 : ${randMap.get("key1")}<br />`);
document.write(`key2 : ${randMap.get("key2")}<br />`);
// değerlerim boyuru
document.write(`Map Boyutu : ${randMap.size}<br />`);
randMap.forEach(function(value, key){
  document.write(`${key} : ${value}<br />`);
});