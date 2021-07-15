class Kitchen {
    constructor(name) {
        this.list = [];
        this.name = name;
    }
    intro() {
        console.log(`Sveiki atvyke i ${this.name} virtuve!`);
    }
    nupirkta(prodName, qty) {
        this.list.push({ prodName, qty, good: true });
        console.log(this.list);
    }
    turimiProduktai() {
        /*if (!this.isValidProductName(prodName) ||
            !this.isValidProductQty(qty)) {
            return false;
        }*/
        let count = 0;
        //const prodNameCorr = this.capitalFirst(item.prod);
        for (let i = 0; i < this.list.length; i++) {
            const item = this.list[i];
            ++count;
            console.log(`${count}) ${item.prodName[0].toUpperCase() + item.prodName.slice(1)}: ${item.qty}`);
        }
        console.log('--------------------');
    }

    sunaudota(prodName, usedQty) {
        for (let i = 0; i < this.list.length; i++) {
            const product = this.list[i];
            //console.log(prodName, product);

            if (product.prodName === prodName) {
                product.qty -= usedQty;
                break;
            }
        }
        console.log('------------------');
    }
    sugedesProduktas(prodName) {
        const updatedList = [];
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].prodName !== prodName) {
                updatedList.push(this.list[i]);
            }
        }
        this.list = updatedList;
    }

    isValidProductName(prodName) {
        if (typeof prodName !== 'string' || prodName === '' || prodName[0] !== prodName[0].toUpperCase()) {
            console.error('ERROR: Product needs to be indicated and start in upper case!');
            return false;
        }
        return true;
    }
    isValidProducQty(qty) {
        if (typeof qty !== 'number' ||
            qty <= 0) {
            console.error('ERROR: Quantiy must be more than zero');
            return false;
        }
        return true;
    }
}

module.exports = Kitchen;