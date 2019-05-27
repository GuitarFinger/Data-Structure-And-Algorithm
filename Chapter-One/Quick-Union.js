const tinyUF = require('../Data/tinyUF');

/**
 * @class 快速联合
 */
class QuickUnion {

    constructor(count) {
        this.count = count;
        this.id = [];

        this.init();
    }

    init() {
        for (let i = 0; i < this.count; i++) {
            this.id[i] = i;
        }
    }

    len() {
        return this.count;
    }

    validate(p) {
        if (p < 0 || p > this.parent.length) {
            throw new Error(`index ${p} is not between 0 and ${this.parent.length-1}`);
        }
    }

    find(p) {
        while (p != this.id[p]) p = this.id[p];

        return p;
    }

    connected(p, q) {
        return this.find(p) === this.find(q);
    }

    union(p, q) {
        const pRoot = this.find(p);
        const qRoot = this.find(q);

        if (pRoot === qRoot) return;

        this.id[pRoot] = qRoot;

        this.count--;
    }
}

const testFunc = (testData) => {
    const unionFind = new QuickUnion(testData.length);

    for (let i = 0; i < testData.length; i++) {
        const p = testData[i][0];
        const q = testData[i][1];

        if (unionFind.connected(p, q)) continue;

        unionFind.union(p, q);
        console.log(`${p} ${q}`);
    }

    console.log(`${unionFind.len()} components`);
};

testFunc(tinyUF.tinyUFData);