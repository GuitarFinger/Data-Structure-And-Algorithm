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
    }
}

/**
 * @class LinkedList
 * @classdesc 单向链表
 */
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    /**
     * 向链表尾部添加一个新的项
     * @param element
     */
    append(element) {
        if (this.head === null) {
            this.head = new Node(element);
        } else {
            let curNode = this.head;

            while (curNode.next) {
                curNode = curNode.next;
            }

            curNode.next = new Node(element);
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
            node.next = curNode;
            this.head = node;
        } else {
            while (index < position) {
                preNode = curNode;
                curNode = curNode.next;
                index++;
            }

            node.next = curNode;
            preNode.next = node;
        }

        this.increaseLength();

        return true;
    }

    /**
     * 从链表的特定位置移除一项
     * @param position
     */
    removeAt(position) {
        if (position < 0 || position > this.length) return null;

        let curNode = this.head;
        let index = 0;
        let preNode;

        if (position === 0) {
            this.head = curNode.next;
        } else {
            while (index < position) {
                preNode = curNode;
                curNode = curNode.next;
                index++;
            }

            preNode.next = curNode.next;
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

        while (curNode) {
            if (element === curNode.element) return index;

            curNode = curNode.next;
            index++;
        }

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
        while (curNode) {
            console.log(`node element:: `, curNode.element);

            curNode = curNode.next;
        }
        console.log("----------------------------");
    }
}

const list = new LinkedList();

list.append(15);
list.append(10);
list.append(13);
list.display();

console.log('10 index::', list.indexOf(10));
list.removeAt(1);
list.display();

list.insert(1, 17);
list.display();
list.remove(15);
list.display();

