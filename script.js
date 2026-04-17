document.addEventListener('DOMContentLoaded', () => {
    const proizvodi = [
        { id: 'saksija-20', tip: "Saksija", dimenzija: "Ø 20 cm", cena: 150 },
        { id: 'saksija-30', tip: "Saksija", dimenzija: "Ø 30 cm", cena: 250 },
        { id: 'kanta-20', tip: "Kanta", dimenzija: "20 L", cena: 550 },
        { id: 'kanta-50', tip: "Kanta", dimenzija: "50 L", cena: 1200 },
        { id: 'gajbica', tip: "gajbica", dimenzija: "40 cm x 20 cm", cena: 400 }
        
    ];

    const tabela = document.getElementById('tabela-kontejner');
    if (!tabela) return;

    // Generisanje tabele
    let tabelaHtml = `
        <table style="width:100%; border-collapse: collapse; border: 2px solid #444;">
            <thead>
                <tr style="background: #333; color: white;">
                    <th style="padding: 10px;">Proizvod</th>
                    <th style="padding: 10px;">Dimenzija</th>
                    <th style="padding: 10px;">Cena</th>
                    <th style="padding: 10px;">Količina</th>
                    <th style="padding: 10px;">Akcija</th>
                </tr>
            </thead>
            <tbody>
    `;

    proizvodi.forEach(p => {
        tabelaHtml += `
            <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 10px;">${p.tip}</td>
                <td style="padding: 10px;">${p.dimenzija}</td>
                <td style="padding: 10px;">${p.cena} RSD</td>
                <td style="padding: 10px;"><input type="number" id="input-${p.id}" value="0" min="0" style="width: 60px; padding: 5px;"></td>
                <td style="padding: 10px;"><button onclick="dodaj('${p.id}', '${p.tip}', ${p.cena})" style="cursor:pointer; padding: 5px 10px;">Dodaj</button></td>
            </tr>
        `;
    });

    tabelaHtml += `</tbody></table>
    <button onclick="zavrsi()" style="margin-top: 20px; padding: 15px; background: #0000FF; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">
        SASTAVI RAČUN I PLATI
    </button>`;

    tabela.innerHTML = tabelaHtml;
});

// Korpa kao globalni objekat
let korpa = {};

window.dodaj = function(id, tip, cena) {
    const kol = parseInt(document.getElementById(`input-${id}`).value);
    if (kol > 0) {
        korpa[id] = { tip, cena, kolicina: kol, ukupno: kol * cena };
        alert(`Dodato u korpu: ${tip} (${kol} kom)`);
    } else {
        alert("Unesite količinu veću od 0");
    }
};

window.zavrsi = function() {
    if (Object.keys(korpa).length === 0) {
        alert("Korpa je prazna!");
        return;
    }
    localStorage.setItem('finalni_racun', JSON.stringify(korpa));
    window.location.href = 'racun.html';
};
