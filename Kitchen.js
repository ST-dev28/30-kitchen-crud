class Kitchen {
    constructor(name) {
        this.list = [];
        this.name = name;
    }
    intro() {
        console.log(`Sveiki atvyke i ${this.name} virtuve!`);
    }
    nupirkta(prod, qty) {
        this.list.push({ prod, qty });
        console.log(this.list);
    }
    turimiProduktai(prod, qty) {
        /*if (!this.isValidProductName(prod) ||
            !this.isValidPrice(qty)) {
            return false;
        }*/
        let count = 0;
        //const prodName = this.capitalFirst(item.prod);
        for (let i = 0; i < this.list.length; i++) {
            const item = this.list[i];
            ++count;
            console.log(`${count}) ${item.prod}: ${item.qty}`);
        }
        console.log('--------------------');
    }
    /*
        isValidProductName(prodName) {
            if (typeof prodName !== 'string' || prodName === '' || prodName[0] !== prodName[0].toUpperCase()) {
                console.error('ERROR: Product needs to be indicated and start in upper case!');
                return false;
            }
            return true;
        }*/
}

module.exports = Kitchen;