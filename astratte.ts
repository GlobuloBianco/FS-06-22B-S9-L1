abstract class Negozio {
    maglie: string;
    pantaloni: string;
    scarpe: string;
    constructor(_maglie: string, _pantaloni: string, _scarpe: string) {
        this.maglie = _maglie;
        this.pantaloni = _pantaloni;
        this.scarpe = _scarpe;
    }

    abstract abbigliamento(): any;
}

class Abbigliamento extends Negozio {
    cintura: string;
    constructor(_cintura: string, _maglie: string, _pantaloni: string, _scarpe: string) {
        super(_maglie, _pantaloni, _scarpe);
        this.cintura = _cintura;
    }

    abbigliamento() {
        return `Vestito composto da maglia ${this.maglie}, pantaloni ${this.pantaloni}, scarpe ${this.scarpe} con una cintura ${this.cintura}`;
    }
}

abstract class Accessori extends Negozio {
    abstract abbigliamento(): void;
    abstract getAccessori(): number;
}

class Completo extends Accessori {
    abbigliamento(): string {
        let maglie = this.maglie;
        let pantaloni = this.pantaloni;
        let scarpe = this.scarpe;
        return this.componi(maglie, pantaloni, scarpe);
    }

    private componi(val1: string, val2: string, val3: string,): string {
        return `Vestito composto da maglia ${val1}, pantaloni ${val2}, scarpe ${val3} con ${this.getAccessori()} accessori`
    }

    getAccessori(): number {
        return 4;
    }
}

let acquisto = new Abbigliamento('nera', 'rossa', 'neri', 'nere');
console.log(acquisto.abbigliamento());

let newCompleto = new Completo('verde', 'bianchi', 'nere');
console.log(newCompleto.abbigliamento());
