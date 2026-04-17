const proizvodi = [
    { tip: "Plastična gajba", boja: "Plava", dimenzije: "60x40x30 cm" },
    { tip: "Kanta za otpatke", boja: "Crna", dimenzije: "50 litara" },
    { tip: "Saksija za cveće", boja: "Terakota", dimenzije: "Ø 30 cm" }
];

const kontejner = document.getElementById('lista-proizvoda');

function prikaziProizvode() {
    let htmlSadrzaj = "";
    proizvodi.forEach(proizvod => {
        htmlSadrzaj += `
            <div class="proizvod-kartica">
                <h3>${proizvod.tip}</h3>
                <p>Boja: ${proizvod.boja}</p>
                <p>Dimenzije: ${proizvod.dimenzije}</p>
            </div>
        `;
    });
    kontejner.innerHTML = htmlSadrzaj;
}

prikaziProizvode();
