const Evaluate = (calcStr: string) => {
    const calcArr = calcStr.split('');
    const opsStack = [];
    const valsStack = [];

    for (let i = 0; i < calcArr.length; i++) {
        const s = calcArr.splice(0, 1)[0];

        if (s === "(") {

        } else if (s === "+") {
            opsStack.push(s);
        } else if (s === "-") {
            opsStack.push(s);
        } else if (s === "*") {
            opsStack.push(s);
        } else if (s === "/") {
            opsStack.push(s);
        } else if (s === ")") {
            let op = opsStack.pop();
            let v = valsStack.pop();

            if (op === "+") {
                v = valsStack.pop() + v;
            } else if (op === "-") {
                v = valsStack.pop() - v;
            } else if (op === "*") {
                v = valsStack.pop() * v;
            } else if (op === "/") {
                v = valsStack.pop() / v;
            }

            valsStack.push(v);
        } else {
            valsStack.push(Number(s));
        }
        i--;
    }

    return valsStack.pop();
};

console.log(Evaluate("(1+(2*3)+4)*(5*6))"));
// console.log(Evaluate("(1+((2+3)*(4*5)))"));