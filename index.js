const Kitchen = require('./Kitchen');

const virtuve = new Kitchen('Niammi');
//console.log(virtuve);

virtuve.intro();
// Sveiki atvyke i Niammi virtuve!

virtuve.nupirkta('mesa', 20);
virtuve.nupirkta('bulves', 50);
virtuve.nupirkta('grietine', 4);

virtuve.turimiProduktai();
// 1) Mesa: 20
// 2) Bulves: 50
// 3) Grietine: 4
/*
virtuve.sunaudota('mesa', 15);
virtuve.sunaudota('bulves', 15);
virtuve.sunaudota('grietine', 2);

virtuve.turimiProduktai();
// 1) Mesa: 5
// 2) Bulves: 35
// 3) Grietine: 2

virtuve.sugedesProduktas('bulves');
// KOMENTARAS: sugedusius produktus tiesiog ismetame

virtuve.turimiProduktai();
// 1) Mesa: 5
// 2) Grietine: 2
*/