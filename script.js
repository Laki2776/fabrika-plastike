document.addEventListener('DOMContentLoaded', function() {
    const proizvodi = [
        { id: 1, tip: "Saksija", dimenzija: "Ø 20 cm", boja: "Terakota", cena: 150 },
        { id: 2, tip: "Saksija", dimenzija: "Ø 30 cm", boja: "Terakota", cena: 250 },
        { id: 3, tip: "Kanta", dimenzija: "20 L", boja: "Crna", cena: 550 },
        { id: 4, tip: "Kanta", dimenzija: "50 L", boja: "Crna", cena: 1200 }
    ];

    const kontejner = document.getElementById('tabela-kontejner');
    let korpa = [];

    if (kontejner) {
        let html = `
            <table border="1" style="width:100%; border-collapse: collapse; margin-top: 20px;">
                <tr style="background: #f2f2f2;">
                    <th>Proizvod</th> <th>Dimenzija</th> <th>Cena</th> <th>Količina</th> <th>Akcija</th>
                </tr>
        `;

        proizvodi.forEach(p => {
            html += `
                <tr>
                    <td>${p.tip}</td>
                    <td>${p.dimenzija}</td>
                    <td>${p.cena} RSD</td>
                    <td><input type="number" id="qty-${p.id}" value="0" min="0" style="width: 50px;"></td>
                    <td><button onclick="dodajUKorpu(${p.id}, '${p.tip}', ${p.cena})">Dodaj</button></td>
                </tr>
            `;
        });

        html += `</table><br>
                 <button onclick="idiNaRacun()" style="padding: 10px 20px; background: green; color: white; border: none; cursor: pointer;">
                    Završi kupovinu i vidi račun
                 </button>`;
        kontejner.innerHTML = html;
    }

    // Funkcija za dodavanje u privremenu memoriju
    window.dodajUKorpu = function(id, tip, cena) {
        const kolicina = parseInt(document.getElementById(`qty-${id}`).value);
        if (kolicina > 0) {
            const stavka = { tip, cena, kolicina, ukupno: kolicina * cena };
            korpa.push(stavka);
            alert(`Dodato: ${tip} x${kolicina}`);
        }
    };

    // Funkcija za prelazak na drugu stranicu
    window.idiNaRacun = function() {
        localStorage.setItem('mojaKorpa', JSON.stringify(korpa));
        window.location.href = 'racun.html'; // Prebacuje nas na novu stranicu
    };
});
