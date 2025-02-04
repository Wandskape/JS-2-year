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
exports.Shoes = void 0;
var ThingClass_1 = require("./ThingClass");
var Shoes = /** @class */ (function (_super) {
    __extends(Shoes, _super);
    function Shoes(type, id, size, color, prise, seasone, material, thingsex, discount, soleType) {
        var _this = _super.call(this, type, id, size, color, prise, seasone, material, thingsex, discount) || this;
        _this.soleType = soleType;
        return _this;
    }
    Object.defineProperty(Shoes.prototype, "SoleType", {
        get: function () {
            return this.soleType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shoes.prototype, "Soletype", {
        set: function (value) {
            this.soleType = value;
        },
        enumerable: false,
        configurable: true
    });
    Shoes.prototype.toString = function () {
        var outputShoe = "";
        outputShoe += "\u0422\u0438\u043F \u043E\u0431\u0443\u0432\u0438: ".concat(this.Type, "\n\n                       \u0421\u0435\u0437\u043E\u043D: ").concat(this.Seasone[0], ", ").concat(this.Seasone[1], "\n\n                       \u041F\u043E\u043B: ").concat(this.Thingsex, "\n\n                       \u0423\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440: ").concat(this.Id, "\n\n                       \u0420\u0430\u0437\u043C\u0435\u0440 \u043E\u0431\u0443\u0432\u0438: ").concat(this.Size, "\n\n                       \u0422\u0438\u043F \u043F\u043E\u0434\u043E\u0448\u0432\u044B: ").concat(this.SoleType, "\n\n                       \u0422\u0438\u043F \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430: ").concat(this.Material, "\n\n                       \u0426\u0432\u0435\u0442: ").concat(this.Color, "\n\n                       \u0426\u0435\u043D\u0430: ").concat(this.Prise, "\n\n                       \u0421\u043A\u0438\u0434\u043A\u0430: ").concat(this.Discount, "\n\n                       \u041A\u043E\u043D\u0435\u0447\u043D\u0430\u044F \u0446\u0435\u043D\u0430: ").concat(this.FinalPrise, "\n");
        return outputShoe;
    };
    Shoes.prototype.updatePrise = function (newPrise) {
        return this.Prise = newPrise;
    };
    Shoes.prototype.current = function () {
    };
    return Shoes;
}(ThingClass_1.Thing));
exports.Shoes = Shoes;
