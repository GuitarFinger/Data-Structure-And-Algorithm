const tinyUF = require('../Data/tinyUF');

class CompressWeightedQU {
    constructor(len) {
        this.count = len;
        this.parent = [];
        this.rank = [];

        this.init();
    }

    init() {
        for (let i = 0; i < this.count; i++) {
            this.parent[i] = i;
            this.rank[i] = 0;
        }
    }

    getCount() {
        return this.count;
    }

    validate(p) {
        if (p < 0 || p > this.parent.length - 1) {
            throw new Error(`index ${p} is not between 0 and ${this.parent.length-1}`);
        }
    }

    find(p) {
        this.validate(p);

        while (p != this.parent[p]) {
            this.parent[p] = this.parent[this.parent[p]]; // 压缩路径

            p = this.parent[p];
        }

        return p;
    }

    connected(p, q) {
        return this.find(p) === this.find(q);
    }

    union(p, q) {
        const rootP = this.find(p);
        const rootQ = this.find(q);

        if (rootP === rootQ) return;

        if (this.rank[rootP] < this.rank[rootQ]) {
            this.parent[rootP] = rootQ;
        }
        else if (this.rank[rootP] > this.rank[rootQ]) {
            this.parent[rootQ] = rootP;
        }
        else {
            this.parent[rootQ] = rootP;
            this.rank[rootP]++;
        }

        this.count--;
    }
}

const testFunc = (testData) => {
    const unionFind = new CompressWeightedQU(testData.length);

    for (let i = 0; i < testData.length; i++) {
        const p = testData[i][0];
        const q = testData[i][1];

        if (unionFind.connected(p, q)) continue;

        unionFind.union(p, q);
        console.log(`${p} ${q}`);
    }

    console.log(`${unionFind.getCount()} components`);
};

testFunc(tinyUF.tinyUFData);