const tinyUF = require('../Data/tinyUF');

class WeightedQuickUnion {
    constructor(len) {
        this.count = len;
        this.parent = [];
        this.size = [];

        this.init();
    }

    init() {
        for (let i = 0; i < this.count; i++) {
            this.parent[i] = i;
            this.size[i] = 1;
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
        this.validate(p);

        while (p != this.parent[p]) p = this.parent[p];

        return p;
    }

    connected(p, q) {
        this.validate(p);
        this.validate(q);

        return this.find(p) === this.find(q);
    }

    /**
     * 将小的树链接到大的树上面
     * @param p
     * @param q
     */
    union(p, q) {
        const rootP = this.find(p);
        const rootQ = this.find(q);

        if (rootP === rootQ) return;

        if (this.size[rootP] < this.size[rootQ]) {
            this.parent[rootP] = rootQ;
            this.size[rootQ] += this.size[rootP];
        } else {
            this.parent[rootQ] = rootP;
            this.size[rootP] += this.size[rootQ];
        }

        this.count--;
    }
}

const testFunc = (testData) => {
    const unionFind = new WeightedQuickUnion(testData.length);

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