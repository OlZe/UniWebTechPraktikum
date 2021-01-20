function getViewportWidth() 
{
    return window.innerWidth || document.documentElement.clientWidth;
}

console.log(`Die Viewport-Breite beträgt: ${getViewportWidth()} Pixel.`);



function Raum(nr, bez, gebäude, kapazität, austattung) 
{
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

function Buchung(bez, start, ende, gebuchtVon, anzahlTeilnehmer, beschreibung) 
{
    this.bezeichnung = bez;
    this.startZeit = start;
    this.endZeit = ende;
    this.gebuchtVon = gebuchtVon;
    this.anzahlTeilnehmer = anzahlTeilnehmer;
    this.beschreibung = beschreibung;
}


let ae01 = new Raum('A.E.01', 'Hörsaal', 'EF42', 250, ['Drei Beamer', 'Zwei Whiteboards', 'Eine Tafel', 'Mikrofonanlage']);
ae01.addBuchung(new Buchung('Kolloquium', new Date(2020, 10, 10, 10, 0), new Date(2020, 10, 10, 10, 45), 'ich', 5, 'kreative beschreibung'));
ae01.addBuchung(new Buchung('Übung', new Date(2020, 10, 10, 11, 0), new Date(2020, 10, 10, 12, 30), 'du', 20, 'kreative beschreibung'));

let roomInfoList = document.getElementById("room-info-list");
if (roomInfoList) 
{
    roomInfoList.append(createElementWithText('li', `Nummer: ${ae01.nummer}`));
    roomInfoList.append(createElementWithText('li', `Bezeichnung: ${ae01.bezeichnung}`));
    roomInfoList.append(createElementWithText('li', `Gebäude: ${ae01.gebäude}`));
    roomInfoList.append(createElementWithText('li', `Kapazität: ${ae01.kapazität} Sitzplätze`));
    let austattungList = document.createElement("ul");
    for (let austattung of ae01.austattung) 
    {
        austattungList.append(createElementWithText('li', austattung));
    }
    roomInfoList.append(austattungList);
}

let buchungsTabelle = document.querySelector("#buchungen-tabelle tbody");
if (buchungsTabelle) 
{
    for(let buchung of ae01.buchungen) 
    {
        buchungsTabelle.append(makeTr(buchung));
    }
}

function makeTr(buchung) 
{
    let tr = document.createElement("tr");
    tr.append(createElementWithText('td', buchung.bezeichnung));
    tr.append(createElementWithText('td', buchung.startZeit.toLocaleDateString()));
    tr.append(createElementWithText('td', buchung.startZeit.toLocaleTimeString()));
    tr.append(createElementWithText('td', buchung.endZeit.toLocaleTimeString()));
    return tr;
}

function createElementWithText(element, textContent) 
{
    let li = document.createElement(element);
    li.textContent = textContent;
    return li;
}
