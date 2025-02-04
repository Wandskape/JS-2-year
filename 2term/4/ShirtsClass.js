"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shirts = void 0;
var ThingClass_1 = require("./ThingClass");
var Shirts = /** @class */ (function (_super) {
    __extends(Shirts, _super);
    function Shirts(type, id, size, color, prise, seasone, material, thingsex, discount, sleeveLength, neckline, pattern) {
        var _this = _super.call(this, type, id, size, color, prise, seasone, material, thingsex, discount) || this;
        _this.sleeveLength = sleeveLength;
        _this.neckline = neckline;
        _this.pattern = pattern;
        return _this;
    }
    Object.defineProperty(Shirts.prototype, "SleeveLength", {
        get: function () {
            return this.sleeveLength;
        },
        set: function (value) {
            this.sleeveLength = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shirts.prototype, "Neckline", {
        get: function () {
            return this.neckline;
        },
        set: function (value) {
            this.neckline = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shirts.prototype, "Pattern", {
        get: function () {
            return this.pattern;
        },
        set: function (value) {
            this.pattern = value;
        },
        enumerable: false,
        configurable: true
    });
    Shirts.prototype.toString = function () {
        var outputShoe = "";
        outputShoe += "\u0422\u0438\u043F \u043C\u0430\u0439\u043A\u0438: ".concat(this.Type, "\n\n                       \u0421\u0435\u0437\u043E\u043D: ").concat(this.Seasone[0], ", ").concat(this.Seasone[1], "\n\n                       \u041F\u043E\u043B: ").concat(this.Thingsex, "\n\n                       \u0423\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440: ").concat(this.Id, "\n\n                       \u0420\u0430\u0437\u043C\u0435\u0440 \u043C\u0430\u0439\u043A\u0438: ").concat(this.Size, "\n\n                       \u0414\u043B\u0438\u043D\u0430 \u0440\u0443\u043A\u0430\u0432\u0430: ").concat(this.SleeveLength, "\n\n                       \u0422\u0438\u043F \u0432\u044B\u0440\u0435\u0437\u0430: ").concat(this.Neckline, "\n\n                       \u041F\u0440\u0438\u043D\u0442: ").concat(this.Pattern, "\n\n                       \u0422\u0438\u043F \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430: ").concat(this.Material, "\n\n                       \u0426\u0432\u0435\u0442: ").concat(this.Color, "\n\n                       \u0426\u0435\u043D\u0430: ").concat(this.Prise, "\n\n                       \u0421\u043A\u0438\u0434\u043A\u0430: ").concat(this.Discount, "\n\n                       \u041A\u043E\u043D\u0435\u0447\u043D\u0430\u044F \u0446\u0435\u043D\u0430: ").concat(this.FinalPrise, "\n");
        return outputShoe;
    };
    Shirts.prototype.updatePrise = function (newPrise) {
        return this.Prise = newPrise;
    };
    return Shirts;
}(ThingClass_1.Thing));
exports.Shirts = Shirts;
