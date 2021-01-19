const http = require('http');
const fs = require('fs');

const räume = [
    new Raum('A.E.01', 'Hörsaal', 'EF42', 250, ['Drei Beamer', 'Zwei Whiteboards', 'Eine Tafel', 'Mikrofonanlage']),
    new Raum('A.E.02', 'Raum', 'EF42', 30, [])];

const server = http.createServer((request, response) => {
    if (request.method === 'GET') {
        if (request.url === '/') {
            response.writeHead(301, { Location: '/dashboard.html' });
            response.end();
        }
        else if (request.url === '/room-list.html') {
            response.writeHead(200);
            response.write(renderRoomlist(räume));
            response.end();
        }
        else {
            const filepath = './public' + request.url;
            fs.readFile(filepath, (err, data) => {
                if (err) {
                    response.writeHead(404);
                    fs.readFile('./public/404.html', (err, data) => {
                        if (!err) {
                            response.write(data);
                        }
                        response.end();
                    });
                }
                else {
                    response.writeHead(200);
                    response.write(data);
                    response.end();
                }
            });
        }
    }
});

server.listen(8020, () => {
    console.log('Listening on http://localhost:8020');
})


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


function renderRoomlist(rooms) {
    let roomList = '';
    for (let room of rooms) {
        roomList += `<li><a href="./ae01.html">${room.nummer}</a> ${room.bezeichnung} ${room.gebäude}</li>`;
    }

    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Liste verfügbarer Räume</title>
    <link rel="stylesheet" href="./css/main.css">
    <link rel="stylesheet" href="./css/header.css">
    <link rel="stylesheet" href="./css/grid.css">
    <script src="./js/main.js"></script>
</head>

<body>
        <header title="Raumbuchungs-Organitron 7000">
        <a href="./dashboard.html"><img src="./img/logo.png" height="75" alt="heftiges logo" /></a>
        <h1>Raumbuchungs-Organitron 7000</h1>
    </header>

    <nav>
        <ul>
            <li><a href="./room-list.html">Raumliste</a></li>
            <li><a href="./ae01.html">Raumdetails</a></li>
            <li><a href="./ae01-20201110-1000.html">Buchungsdetails</a></li>
            <li><a href="./buchung-anlegen.html">Buchung anlegen</a></li>
        </ul>
    </nav>

    <main>
        <section title="Raumsuche">
            <h2>Raumsuche</h2>
            <form method="GET" action="https://labs.inf.fh-dortmund.de/roomReservationService/testRoomSearch.php">
                <label>Raum
                    <input name="roomno" placeholder="z.B. A.E.01" pattern="[A-Z]\.[E1-3]\.\d\d" required>
                </label>

                <input type="submit" value="Finden">
            </form>
        </section>
        
        <section title="Raumliste">
            <h2>Raumliste</h2>
            <ul>
                ${roomList}
            </ul>
        </section>

    </main>

    <aside title="Aktuelle Meldungen" class="aktuelle-meldungen">
        <h2>Aktuelle Meldungen</h2>
        <ul>
            <li>
                <article title="Lorem1">
                    <h3>Lorem1</h3>
                    10.11.2020: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ipsam cum totam
                    facere. Voluptatem facere voluptatum laudantium unde, aperiam non, accusantium magnam blanditiis
                    repellendus, animi sequi consequatur. Delectus, inventore voluptate.
                </article>
            </li>
            <li>
                <article title="Lorem2">
                    <h3>Lorem2</h3>
                    07.11.2020: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, veniam libero?
                    Cum,
                    quae hic eos debitis commodi dolorem maiores libero consequuntur in voluptas culpa nulla
                    dignissimos
                    natus eligendi expedita recusandae.
                </article>
            </li>
        </ul>
    </aside>

    <footer title="legal">
        <h3>Legal stuff</h3>
        <p>&copy; Mr. Organitron 7000</p>
    </footer>
</body>

</html>`;
}
