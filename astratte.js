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
var Negozio = /** @class */ (function () {
    function Negozio(_maglie, _pantaloni, _scarpe) {
        this.maglie = _maglie;
        this.pantaloni = _pantaloni;
        this.scarpe = _scarpe;
    }
    return Negozio;
}());
var Abbigliamento = /** @class */ (function (_super) {
    __extends(Abbigliamento, _super);
    function Abbigliamento(_cintura, _maglie, _pantaloni, _scarpe) {
        var _this = _super.call(this, _maglie, _pantaloni, _scarpe) || this;
        _this.cintura = _cintura;
        return _this;
    }
    Abbigliamento.prototype.abbigliamento = function () {
        return "Vestito composto da maglia ".concat(this.maglie, ", pantaloni ").concat(this.pantaloni, ", scarpe ").concat(this.scarpe, " con una cintura ").concat(this.cintura);
    };
    return Abbigliamento;
}(Negozio));
var Accessori = /** @class */ (function (_super) {
    __extends(Accessori, _super);
    function Accessori() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Accessori;
}(Negozio));
var Completo = /** @class */ (function (_super) {
    __extends(Completo, _super);
    function Completo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Completo.prototype.abbigliamento = function () {
        var maglie = this.maglie;
        var pantaloni = this.pantaloni;
        var scarpe = this.scarpe;
        return this.componi(maglie, pantaloni, scarpe);
    };
    Completo.prototype.componi = function (val1, val2, val3) {
        return "Vestito composto da maglia ".concat(val1, ", pantaloni ").concat(val2, ", scarpe ").concat(val3, " con ").concat(this.getAccessori(), " accessori");
    };
    Completo.prototype.getAccessori = function () {
        return 4;
    };
    return Completo;
}(Accessori));
var acquisto = new Abbigliamento('nera', 'rossa', 'neri', 'nere');
console.log(acquisto.abbigliamento());
var newCompleto = new Completo('verde', 'bianchi', 'nere');
console.log(newCompleto.abbigliamento());
