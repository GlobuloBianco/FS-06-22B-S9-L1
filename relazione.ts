class Phone {
    numero: number;
    constructor(_numero: number) {
        this.numero = _numero;
    }
}

class Utente {
    nome: string;
    cognome: string;
    numeri: Phone[];
    constructor(_nome: string, _cognome: string, _numeri: any) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.numeri = _numeri;
    }
}

let newUtente = new Utente('Luca', 'Lattanzi', [3219432845, 31294328, 32943285]);

console.log(newUtente);

class Contatti {
    tel: number;
    email: string;
    constructor(_tel: number, _email: string) {
        this.tel = _tel;
        this.email = _email;
    }
}

class RigheFat {
    codArt: string;
    descArt: string;
    qty: number;
    unitPrice: number;
    constructor(_codArt: string, _descArt: string, _qty: number, _unitPrice: number) {
        this.codArt = _codArt;
        this.descArt = _descArt;
        this.qty = _qty;
        this.unitPrice = _unitPrice;
    }
}

class TestFat {
    ragSoc: string;
    indirizzo: string;
    pIva: string;
    contacts: Contatti[];
    righeFat: RigheFat[];
    totPrice: number;
    constructor(_ragSoc: string, _indirizzo: string, _pIva: string, _contacts: any, _righeFat: any, _totPrice: number, readonly idFat: number) {
        this.ragSoc = _ragSoc;
        this.indirizzo = _indirizzo;
        this.pIva = _pIva;
        this.contacts = _contacts;
        this.righeFat = _righeFat;
        this.totPrice = _totPrice;
    }
}
let nuovaFattura = new TestFat('Naviganet','Via tal dei tali Torino','03469221216',[{tel: 3456789, email: 'pippo@pippo.com'},{tel: 3456789, email: 'prova@prova.com'}],[{codArt: '123', descrArt: 'prova', qty: 2, unitPrice: 10},{codArt: '456', descrArt: 'prova2', qty: 3, unitPrice: 20}],60,1);

console.log(nuovaFattura);