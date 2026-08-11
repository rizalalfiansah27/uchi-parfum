// ==========================
// BUKA / TUTUP CARD
// ==========================

document.querySelectorAll(".card-header").forEach(header => {

    header.addEventListener("click", () => {

        const body = header.nextElementSibling;
        const icon = header.querySelector(".arrow");

        body.classList.toggle("open");

        if (body.classList.contains("open")) {
            icon.textContent = "⌃";
        } else {
            icon.textContent = "⌄";
        }

    });

});


// ==========================
// AUTO URUTKAN NAMA PARFUM A-Z
// ==========================

const container = document.querySelector(".app-content");

const sortedCards = Array.from(
    document.querySelectorAll(".card")
);

sortedCards.sort((a, b) => {

    const namaA = a
        .querySelector(".card-info h3")
        .textContent
        .trim();

    const namaB = b
        .querySelector(".card-info h3")
        .textContent
        .trim();

    return namaA.localeCompare(namaB, "id");

});


// Masukkan kembali card yang sudah diurutkan

sortedCards.forEach(card => {
    container.appendChild(card);
});


// ==========================
// FOOTER
// ==========================

const footer = document.querySelector(".footer");

if (footer) {
    container.appendChild(footer);
}


// ==========================
// TOTAL JUMLAH PRODUK
// ==========================

const totalProduk = document.querySelectorAll(".card").length;

const totalProdukElement =
    document.getElementById("total-produk");

if (totalProdukElement) {

    totalProdukElement.textContent = totalProduk;

}


// ==========================
// SEARCH BAR
// ==========================

const input = document.querySelector(".search-bar input");

const cards = document.querySelectorAll(".card");

if (input) {

    input.addEventListener("keyup", () => {

        const value = input.value.toLowerCase();

        cards.forEach(card => {

            if (
                card.innerText
                    .toLowerCase()
                    .includes(value)
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}