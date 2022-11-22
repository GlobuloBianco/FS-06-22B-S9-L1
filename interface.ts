interface Studenti {
    studente: string;
    eta: number;

    getStudente(): string;
}

interface Corsi {
    tecnologia: string;
    durata: number;

    getCorso(): string;
}

class Utenti implements Studenti, Corsi {
    studente: string;
    eta: number;
    tecnologia: string;
    durata: number;
    constructor(_studente: string, _eta: number, _tecnologia: string, _durata: number) {
        this.studente = _studente;
        this.eta = _eta;
        this.tecnologia = _tecnologia;
        this.durata = _durata;
    }

    getStudente(): string {
        return `Lo studente ${this.studente}, di anni ${this.eta}. `;
    }

    getCorso(): string {
        return `Sta frequentando il corso di ${this.tecnologia} della durata di ${this.durata} mesi`;
    }

    completo(): string {
        return this.getStudente() + this.getCorso();
    }
}

let nuovoUtente = new Utenti('Dario Del Giudice', 55,'Front-end', 3);
console.log(nuovoUtente.completo());