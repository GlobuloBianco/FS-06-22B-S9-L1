function stringa (nome: string, cognome?: string): string {
    return `${nome} ${cognome}`;
}

console.log(stringa('Dario'))

//oggetto
const STATI: {
    nome: string,
    capitale: string,
    descrizione: any,
} = {
    nome: 'Italia',
    capitale: 'Roma',
    descrizione() {
        return `La capitale di ${this.nome} è ${this.capitale}`;
    }
}

console.log(STATI.descrizione());

//gestione errori
var eccezione: number;
try {
    eccezione = 4/0;
} catch {
    Error;
}
finally {
    console.log('Non è possibile una divisione per zero');
    eccezione = 4/1;
}

console.log(eccezione);