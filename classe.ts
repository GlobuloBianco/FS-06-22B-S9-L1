class Studente {
    nome: string;
    cognome: string;
    constructor(_nome: string, _cognome: string) {
        this.nome = _nome;
        this.cognome = _cognome;
    }

    getStudente(): string {
        return `${this.nome} ${this.cognome}`;
    }

    numbers(): number {
        return 2022;
    }    

    public static stato(): string {
        return 'Italia';
    }
}

class Docente extends Studente {
    nome!: string;
    cognome!: string;
    eta: number;
    constructor(_eta: number, _nome: string, _cognome: string) {
        super (_nome, _cognome);
        this.eta = _eta;
    }

    static stato(): string {
        return 'Francia';
    }

    residenza(): any {
        return 'Il docente vive in ' + Docente.stato();
    }
}


class State extends Studente {
    stato!: string;
    nazionalita!: string;
    constructor(_stato: string, _nazionalita: string, _nome: string , _cognome: string, readonly id:number) {
        super (_nome, _cognome);
        this.stato = _stato;
        this.nazionalita = _nazionalita;
    }

    getAnno(): number {
        return 1986;
    }
    
    setCognome(valore: string) {
        this.cognome = valore;
    }
    
}

let newState = new State('Italia', 'Tedesca', 'Giuseppe', 'Verdi', 3);
console.log(newState); 
newState.setCognome('Rossi');
console.log(newState); 

let newDocente = new Docente(35, 'Aldo', 'Bianchi');
console.log(newDocente.residenza());
console.log(Docente.stato());

let newStudente = new Studente('Mario', 'Rossi');
console.log(newStudente.getStudente());

let anno = newStudente.numbers();
let stato = Studente.stato();
console.log(anno);
console.log(stato);