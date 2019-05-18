class A {
    /**
     * @method helloWorld
     * @param printStr
     */
    static helloWorld (printStr) {
        console.log(`print ${printStr}`);
    }
}

module.exports.Hello = A;