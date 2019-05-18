/**
 * @class Node
 * @classdesc 节点
 */
class Node {
    /**
     *
     * @param element 添加的元素
     */
    constructor(element) {
        this.element = element;
        this.next = null;
        this.previous = null;
    }
}

/**
 * @class LinkedList
 * @classdesc 单向链表
 */
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * 向链表尾部添加一个新的项
     * @param element
     */
    append(element) {
        if (this.head === null) {
            const node = new Node(element);

            this.head = node;
            this.tail = node;
        } else {
            const node = new Node(element);

            let curNode = this.tail;

            curNode.next = node;
            node.previous = curNode;

            this.tail = node;
        }

        this.increaseLength();
    }

    /**
     * 向链表的特定位置插入一个新的项
     * @param position
     * @param element
     */
    insert(position, element) {
        if (position < 0 || position > this.length) return false;

        let preNode; // 前一个节点
        let curNode = this.head; // 当前节点
        let index = 0; // 节点索引
        let node = new Node(element);


        if (position === 0) {
            if (!this.head) {
                this.head = node;
                this.tail = node;
            } else {
                node.next = curNode;
                curNode.previous = node;
                this.head = node;
            }
        }
        else if (position === this.length) {
            curNode = this.tail;
            curNode.next = node;
            node.previous = curNode;
            this.tail = node;
        }
        else {
            while (index < position) {
                preNode = curNode;
                curNode = curNode.next;
                index++;
            }

            node.next = curNode;
            preNode.next = node;

            curNode.previous = node;
            node.previous = preNode;
        }

        this.increaseLength();

        return true;
    }

    /**
     * 从链表的特定位置移除一项
     * @param position
     */
    removeAt(position) {
        if (position < 0 || position >= this.length) return null;

        let curNode = this.head;
        let index = 0;
        let preNode;

        if (position === 0) {
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
            } else {
                curNode.next.previous = null;
                this.head = curNode.next;
            }
        }
        else if (position === this.length - 1) {
            curNode = this.tail;
            curNode.previous.next = null;
            this.tail = curNode.previous;
        }
        else {
            while (index < position) {
                preNode = curNode;
                curNode = curNode.next;
                index++;
            }

            preNode.next = curNode.next;
            curNode.next.previous = preNode;
        }

        this.decreaseLength();

        return curNode.next;
    }

    /**
     * 移除一项
     * @param element
     */
    remove(element) {
        let nodeIdx = this.indexOf(element);

        return this.removeAt(nodeIdx);
    }

    /**
     * 返回元素在链表中的索引
     * @param element
     * @returns {number}
     */
    indexOf(element) {
        let curNode = this.head;
        let index = 0;

        if (element === curNode.element) return index;

        while (curNode.next) {
            if (element === curNode.element) return index;

            curNode = curNode.next;
            index++;
        }

        if (element === curNode.element) return index;

        return -1;
    }

    /**
     * 链表是否为空
     * @returns {boolean}
     */
    isEmpty() {
        return this.length === 0;
    }

    /**
     * length自增
     */
    increaseLength() {
        this.length++;
    }

    /**
     * length自减
     */
    decreaseLength() {
        this.length--;
    }

    /**
     * 显示链表元素
     */
    display() {
        let curNode = this.head;

        console.log("============================");
        console.log(`node element:: `, curNode.element || '');
        while (curNode && curNode.next) {
            curNode = curNode.next;
            console.log(`node element:: `, curNode.element);
        }
        console.log("----------------------------");
    }

    /**
     * 反向显示链表元素
     */
    inverseDisplay() {
        let curNode = this.tail;

        console.log("============================");
        console.log(`node element:: `, curNode.element || '');
        while (curNode && curNode.previous) {
            curNode = curNode.previous;
            console.log(`node element:: `, curNode.element);
        }
        console.log("----------------------------");
    }
}

const doublyLinkedList = new DoublyLinkedList();

for (let i = 0; i < 10; i ++) {
    doublyLinkedList.append(1);
}

console.log(doublyLinkedList);
