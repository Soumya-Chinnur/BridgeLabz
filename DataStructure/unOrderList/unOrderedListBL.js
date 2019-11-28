module.exports = {
    unOrderedList(stringArray, searchWord) {
        /*
        *create  a new object of linked list
        */
        var list = new linkedList;
        /*
        *add all the elements for linked list
        */
        for (let i = 0; i < stringArray.length; i++) {
            list.add(stringArray[i]);
        }
        /*
        *this condition checks for adding the item, if item not exist in file
         */
        if (list.search(searchWord) == -1) {
            list.add(searchWord);
            console.log("added succesfully..\n");
            writeToFile("./stringList.txt", dataWrite);
        }
        /*
        *this condition checks for removing item, if item already exists in file
        */
        else {
            list.remove(searchWord)
            writeToFile("./stringList.txt", dataWrite);
            console.log("removed successfully..\n");
        }
        /*
        * write operation save updated file into list
        */
        var dataWrite = list.show();
        console.log(dataWrite);
        writeToFile("./stringList.txt", dataWrite);
    }

}

/*
*create node class
*/
class Node {
    constructor(searchWord) {
        this.searchWord = searchWord;
        this.next = null;
    }
}
/*
 *create linkedlist class and perform operation 
*/
class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    /*
    *adding item
    */
    add(searchWord) {
        /**
         * creating new node
         */
        var node = new Node(searchWord);
        /**
         * 
         * to store current node
         */
        var current;
        /**
         * if list is empty add an searchword and make it head
         */
        if (this.head == null) {
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    /**
     * remove the string, if it already exists
     */
    remove(searchWord) {
        var current = this.head;
        var previous = null;
        while (current != null) {
            if (current.data = searchWord) {
                if (previous == null) {//if first element is searchWord
                    this.head = current.next;//the searchWord will be removed and head will be the next element

                }
                /**
                 * it works whrn the search element is not at the first
                 * so the previous node store the reference of next node
                 */
                else {
                    previous.next = current.next;

                }
                this.size--; //size decremented 
                return current.searchWord;
            }
            //if search word not found 
            previous = current;
            current = current.next;
        }
        return -1;
    }
    /**
     * check the search word already present or not
     */
    search(searchWord) {
        var count = 0;
        var current = this.head;
        while (current != null) {
            if (current.data = searchWord) {
                console.log(3);
                return count; //if item found it will return 1
            }
            count++;
            current = current.next;
        }
        return -1; //item not found it will return -1
    }
    show() {
        /**
        * print the given list after performing changes.
        */
        var current = this.head;
        var string = "";
        while (current) {
            string += current.searchWord;
            current = current.next;
        }
        console.log(string);
        return string;
    }
}

function writeToFile(fileName, data) {
    const fs = require('fs');
    /*
    * it is used to access the file system module
    *fs.writefile() write the data in specified file if does not found it will create the file
    */
    fs.writeFile(fileName, data, function (err) { //this function write the data in file
        if (err) {
            return console.log(err); //error
        }
    });
}