'use strict'

class Storage {
    constructor (items){
        this.items = items;
    }

    getItems(){
        return this.items;
    }

    addItem(item){
        let flag = false;
        for (const selItem of this.items){
            if (item === selItem){
                flag = true;
                break;
            }
        }
        if (!flag){
            this.items.push(item);
        }
    }

    removeItem(item){
        for (const selItem of this.items){
            if (item === selItem){
                this.items.splice(this.items.indexOf(item), 1)
            }
        }
    }
}

const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]