"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Thing = void 0;
var Thing = /** @class */ (function () {
    function Thing(type, id, size, color, prise, seasone, material, thingsex, discount) {
        this.type = type;
        this.id = id;
        this.size = size;
        this.color = color;
        this.prise = prise;
        this.seasone = seasone;
        this.material = material;
        this.thingsex = thingsex;
        this.discount = discount;
        this.finalPrise = prise * discount;
    }
    Object.defineProperty(Thing.prototype, "FinalPrise", {
        get: function () {
            return this.finalPrise;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Thing.prototype, "Discount", {
        get: function () {
            return this.discount;
        },
        set: function (value) {
            this.discount = value;
            this.finalPrise = this.prise * this.discount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Thing.prototype, "Type", {
        get: function () {
            return this.type;
        },
        set: function (value) {
            this.type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Thing.prototype, "Id", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Thing.prototype, "Size", {
        get: function () {
            return this.size;
        },
        set: function (value) {
            this.size = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Thing.prototype, "Color", {
        get: function () {
            return this.color;
        },
        set: function (value) {
            this.color = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Thing.prototype, "Prise", {
        get: function () {
            return this.prise;
        },
        set: function (value) {
            this.prise = value;
            this.finalPrise = this.prise * this.discount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Thing.prototype, "Seasone", {
        get: function () {
            return this.seasone;
        },
        set: function (value) {
            this.seasone = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Thing.prototype, "Material", {
        get: function () {
            return this.material;
        },
        set: function (value) {
            this.material = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Thing.prototype, "Thingsex", {
        get: function () {
            return this.thingsex;
        },
        set: function (value) {
            this.thingsex = value;
        },
        enumerable: false,
        configurable: true
    });
    Thing.prototype.toString = function () {
        var outputShoe = "";
        outputShoe += "\u0422\u0438\u043F \u0432\u0435\u0449\u0438: ".concat(this.Type, "\n\n                       \u0421\u0435\u0437\u043E\u043D: ").concat(this.Seasone[0], ", ").concat(this.Seasone[1], "\n\n                       \u041F\u043E\u043B: ").concat(this.Thingsex, "\n\n                       \u0423\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440: ").concat(this.Id, "\n\n                       \u0420\u0430\u0437\u043C\u0435\u0440 \u0432\u0435\u0449\u0438: ").concat(this.Size, "\n\n                       \u0422\u0438\u043F \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430: ").concat(this.Material, "\n\n                       \u0426\u0432\u0435\u0442: ").concat(this.Color, "\n\n                       \u0426\u0435\u043D\u0430: ").concat(this.Prise, "\n");
        return outputShoe;
    };
    Thing.filterByPrice = function (things, minPrice, maxPrice) {
        return things.filter(function (thing) { return thing.prise >= minPrice && thing.prise <= maxPrice; });
    };
    Thing.filterBySize = function (things, size) {
        return things.filter(function (thing) { return thing.size === size; });
    };
    Thing.filterByColor = function (things, color) {
        return things.filter(function (thing) { return thing.color === color; });
    };
    return Thing;
}());
exports.Thing = Thing;
