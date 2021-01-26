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

const räume = [
    new Raum('A.E.01', 'Hörsaal', 'EF42', 250, ['Drei Beamer', 'Zwei Whiteboards', 'Eine Tafel', 'Mikrofonanlage']),
    new Raum('A.E.02', 'Molo-Raum', 'EF42', 30, [])];


module.exports = räume;