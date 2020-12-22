function getViewportWidth() {
    return window.innerWidth || document.documentElement.clientWidth;
}

console.log(`Die Viewport-Breite beträgt: ${getViewportWidth()} Pixel.`);



function Raum(nr, bez, gebäude, kapazität, austattung) {
    this.nummer = nr;
    this.bezeichnung = bez;
    this.gebäude = gebäude;
    this.kapazität = kapazität;
    this.austattung = austattung;
    this.buchungen = [];
    this.addBuchung = (buchung) => {
        this.buchungen.push(buchung);
        this.buchungen.sort((a, b) => b.startZeit - a.startZeit);
    };
}



let buchung = {
    bezeichnung: 'Blinken',
    startZeit: new Date(2020, 11, 22, 11, 03, 34, 579),
    endZeit: new Date(2020, 11, 22, 11, 03, 34, 979),
    gebuchtVon: 'ich',
    anzahlTeilnehmer: 1,
    beschreibung: 'Augen anfeuchten'
};
let buchung2 = {
    bezeichnung: 'Blinken',
    startZeit: new Date(2020, 11, 23, 11, 03, 34, 579),
    endZeit: new Date(2020, 11, 23, 11, 03, 34, 979),
    gebuchtVon: 'ich',
    anzahlTeilnehmer: 1,
    beschreibung: 'Augen anfeuchten'
};
let buchung3 = {
    bezeichnung: 'Blinken',
    startZeit: new Date(2021, 11, 22, 11, 03, 34, 579),
    endZeit: new Date(2021, 11, 22, 11, 03, 34, 979),
    gebuchtVon: 'ich',
    anzahlTeilnehmer: 1,
    beschreibung: 'Augen anfeuchten'
};

let myRoom = new Raum(69, 'Ein Raum', 'Ein Gebäude', 30, ['1 Beamer', '2 Tafeln']);
myRoom.addBuchung(buchung);
myRoom.addBuchung(buchung2);
myRoom.addBuchung(buchung3);