const tinyUF = require('../Data/tinyUF');

class UnionFind {
    constructor(count) {
        this.count = count;
        this.IDList = [];

        this.init();
    }

    init() {
        for (let i = 0; i < this.count; i++) {
            this.IDList[i] = i;
        }
    }

    union(p, q) {
        const pID = this.find(p);
        const qID = this.find(q);

        if (pID === qID) return;

        for (let i = 0; i < this.IDList.length; i++) {
            if (this.IDList[i] == pID) this.IDList[i] = qID;
        }

        this.count--;
    }

    find(p) {
        return this.IDList[p];
    }

    connected(p, q) {
        return this.find(p) === this.find(q);
    }

    count() {
        return count;
    }
}

const testFunc = (testData) => {
    const unionFind = new UnionFind(testData.length);

    for (let i = 0; i < testData.length; i++) {
        const p = testData[i][0];
        const q = testData[i][1];

        if (unionFind.connected(p, q)) continue;

        unionFind.union(p, q);
        console.log(`${p} ${q}`);
    }


};

testFunc(tinyUF.tinyUFData);