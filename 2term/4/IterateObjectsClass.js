"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Iterator = void 0;
var Iterator = /** @class */ (function () {
    function Iterator() {
        this.currentIndex = 0;
    }
    Iterator.prototype.setCollection = function (collection) {
        this.collection = collection;
    };
    Iterator.prototype.current = function () {
        return this.collection[this.currentIndex];
    };
    Iterator.prototype.next = function () {
        if (this.currentIndex < this.collection.length - 1) {
            this.currentIndex++;
            return this.collection[this.currentIndex];
        }
        else {
            return null;
        }
    };
    Iterator.prototype.prev = function () {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            return this.collection[this.currentIndex];
        }
        else {
            return null;
        }
    };
    Iterator.prototype.key = function () {
        return this.currentIndex;
    };
    Iterator.prototype.reset = function () {
        this.currentIndex = 0;
    };
    return Iterator;
}());
exports.Iterator = Iterator;
