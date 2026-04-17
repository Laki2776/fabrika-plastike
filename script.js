// Podaci o proizvodima sa cenama
const proizvodi = [
    { tip: "Saksija za cveće", dimenzija: "Ø 20 cm", boja: "Terakota", cena: "150 RSD" },
    { tip: "Saksija za cveće", dimenzija: "Ø 30 cm", boja: "Terakota", cena: "250 RSD" },
    { tip: "Saksija za cveće", dimenzija: "Ø 40 cm", boja: "Terakota", cena: "400 RSD" },
    { tip: "Kanta za otpatke", dimenzija: "10 L", boja: "Crna", cena: "300 RSD" },
    { tip: "Kanta za otpatke", dimenzija: "20 L", boja: "Crna", cena: "550 RSD" },
    { tip: "Kanta za otpatke", dimenzija: "50 L", boja: "Crna", cena: "1200 RSD" },
    { tip: "Gajba za voće", dimenzija: "Standard", boja: "Zelena", cena: "350 RSD" }
];

const kontejner = document.getElementById('tabela-kontejner');

function napraviTabelu() {
    let html = `
        <table border="1" style="width:100%; border-collapse: collapse; text-align: left;">
            <thead>
                <tr style="background-color: #f2f2f2;">
                    <th style="padding: 10px;">Proizvod</th>
                    <th style="padding: 10px;">Dimenzija</th>
                    <th style="padding: 10px;">Boja</th>
                    <th style="padding: 10px;">Cena</th>
                </tr>
            </thead>
            <tbody>
    `;

    proizvodi.forEach(proizvod => {
        html += `
            <tr>
                <td style="padding: 10px;">${proizvod.tip}</td>
                <td style="padding: 10px;">${proizvod.dimenzija}</td>
                <td style="padding: 10px;">${proizvod.boja}</td>
                <td style="padding: 10px;"><strong>${proizvod.cena}</strong></td>
            </tr>
        `;
    });

    html += `
            </tbody>
        </table>
    `;

    kontejner.innerHTML = html;
}

// Pokreni funkciju
napraviTabelu();
