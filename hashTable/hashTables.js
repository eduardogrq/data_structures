class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    hashMethod(key){
        let hash = 0;
        for(let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
    set(key, value){
        const adress = this.hashMethod(key);
        if(!this.data[adress]){
            this.data[adress] = [];
        }
        this.data[adress].push([key, value]);
        return this.data;
    }
    get(key){
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if(currentBucket){
            for(let i = 0; i < currentBucket.length; i++){
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }
    remove(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    let arrDeletedItems = currentBucket.splice(i, 1);
                    return arrDeletedItems;
                }
            }
        }
        return undefined;
    }
}

const myHashTable = new HashTable(50);

