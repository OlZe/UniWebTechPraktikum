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
}

let myRoom = new Raum(69, 'Ein Raum', 'Ein Gebäude', 30, ['1 Beamer', '2 Tafeln']);