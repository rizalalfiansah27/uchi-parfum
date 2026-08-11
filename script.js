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

const sortedCards = Array.from(document.querySelectorAll(".card"));

sortedCards.sort((a, b) => {
    const namaA = a.querySelector(".card-info h3").textContent.trim();
    const namaB = b.querySelector(".card-info h3").textContent.trim();
    return namaA.localeCompare(namaB, "id");
});

sortedCards.forEach(card => {
    container.appendChild(card);
});

// Paksa footer tetap di paling bawah
const footer = document.querySelector(".footer");
container.appendChild(footer);

// ==========================
// SEARCH BAR
// ==========================
const input = document.querySelector(".search-bar input");
const cards = document.querySelectorAll(".card");

input.addEventListener("keyup", () => {
    const value = input.value.toLowerCase();

    cards.forEach(card => {
        card.style.display =
            card.innerText.toLowerCase().includes(value)
                ? "block"
                : "none";
    });
});