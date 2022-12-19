const hash = (key, size) => {
    let hashedKey = 0;

    for (let i = 0; i < key.length; i++) {
        hashedKey = key.charCodeAt(i)
    }

    return hashedKey % size;
}

class HashTable {
    constructor() {
        this.size = 20;
        this.buckets = Array(this.size);

        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = new Map()
        }
    }

    insert(key, value) {
        let idx = hash(key, this.size);
        this.buckets[idx].set(key, value);
    }

    remove(key) {
        let idx = hash(key, this.size);
        let deleted = this.buckets[idx].get(key);
        this.buckets[idx].delete(key);
        return deleted;
    }

    search(key) {
        let idx = hash(key, this.size)
        return this.buckets[idx].get(key)
    }
}

const hashTable = new HashTable();

hashTable.insert('zenitsu', 'lightning')
hashTable.insert('yoriichi', 'sun')
hashTable.insert('gyoumei', 'earth')
hashTable.insert('inosuke', 'pig')
hashTable.insert('rengoku', 'fire')
// console.log(hashTable);

// console.log('search1: ', hashTable.search('zenitsu'))
// console.log('search2: ', hashTable.search('inosuke'))


hashTable.remove('rengoku')
hashTable.remove('zenitsu')
console.log(hashTable)









// const hash = (key, size) => {
//     let hashedKey = 0;

//     for (let i = 0; i < key.length; i++) {
//         hashedKey = key.charCodeAt(i);
//     }

//     return hashedKey % size;
// }

// class HashTable {
//     constructor() {
//         this.size = 20;
//         this.buckets = Array(this.size);

//         for (let i = 0; i <this.buckets.length; i++) {
//             this.buckets[i] = new Map();
//         }
//     }

//     insert(key, value) {
//         let idx = hash(key, this.size);
//         this.buckets[idx].set(key, value)
//     }

//     remove(key) {
//         let idx = hash(key, this.size);
//         let deleted = this.buckets[idx].get(key)
//         this.buckets[idx].delete(key)
//         return deleted;
//     }

//     search(key) {
//         let idx = hash(key, this.size)
//         return this.buckets[idx].get(key)
//     }
// }

// const hashTable = new HashTable();

// hashTable.insert('serena', 'moon')
// hashTable.insert('amy', 'mercury')
// hashTable.insert('rei', 'mars')
// hashTable.insert('lita', 'jupiter')
// hashTable.insert('mina', 'venus')
// hashTable.insert('darien', 'tuxedo mask')

// console.log(hashTable)
// console.log('search: ', hashTable.search('rei'))
// console.log('search: ', hashTable.search('lita'))
// console.log('search: ', hashTable.search('serena'))

// console.log('search: ', hashTable.remove('serena'))
// console.log('search: ', hashTable.remove('mina'))

// console.log(hashTable)
// console.log(hashTable.search('mina'))