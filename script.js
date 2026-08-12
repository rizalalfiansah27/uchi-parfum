// ========================================
// UCHI PARFUM - SCRIPT UTAMA
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("UCHI PARFUM - Script aktif");


    // ========================================
    // CONTAINER
    // ========================================

    const container = document.querySelector(".app-content");

    if (!container) {
        console.log("ERROR: .app-content tidak ditemukan");
        return;
    }


    // ========================================
    // AMBIL FOOTER
    // ========================================

    const footer = container.querySelector(".footer");


    // ========================================
    // LEPASKAN FOOTER DULU
    // Supaya tidak ikut mengganggu urutan card
    // ========================================

    if (footer) {
        footer.remove();
    }


    // ========================================
    // AMBIL SEMUA CARD PARFUM
    // ========================================

    let cards = Array.from(
        container.querySelectorAll(".card")
    );


    console.log(
        "Jumlah card ditemukan:",
        cards.length
    );


    // ========================================
    // URUTKAN PRODUK A-Z
    // ========================================

    cards.sort(function (a, b) {

        const namaA =
            a.querySelector(".card-info h3")
                ?.textContent
                .trim() || "";

        const namaB =
            b.querySelector(".card-info h3")
                ?.textContent
                .trim() || "";

        return namaA.localeCompare(
            namaB,
            "id"
        );

    });


    // ========================================
    // MASUKKAN CARD KEMBALI
    // ========================================

    cards.forEach(function (card) {

        container.appendChild(card);

    });


    // ========================================
    // FOOTER SELALU PALING BAWAH
    // ========================================

    if (footer) {

        container.appendChild(footer);

        console.log(
            "Footer berhasil dipindahkan ke paling bawah"
        );

    } else {

        console.log(
            "INFO: Footer tidak ditemukan"
        );

    }


    // ========================================
    // BUKA / TUTUP CARD
    // ========================================

    document.addEventListener(
        "click",
        function (event) {

            const header =
                event.target.closest(".card-header");

            // Bukan header card
            if (!header) return;


            const body =
                header.nextElementSibling;


            // Pastikan card-body ditemukan
            if (
                !body ||
                !body.classList.contains("card-body")
            ) {

                console.log(
                    "Card body tidak ditemukan"
                );

                return;
            }


            const icon =
                header.querySelector(".arrow");


            // Buka / tutup drawer
            body.classList.toggle("open");


            // Ubah tanda panah
            if (icon) {

                if (
                    body.classList.contains("open")
                ) {

                    icon.textContent = "⌃";

                } else {

                    icon.textContent = "⌄";

                }

            }

        }
    );


    // ========================================
    // TOTAL JUMLAH PRODUK
    // ========================================

    const totalProdukElement =
        document.getElementById("total-produk");


    if (totalProdukElement) {

        totalProdukElement.textContent =
            cards.length;

        console.log(
            "Total produk:",
            cards.length
        );

    } else {

        console.log(
            "ERROR: #total-produk tidak ditemukan"
        );

    }


    // ========================================
    // SEARCH BAR
    // Bisa mencari:
    // - Nama parfum
    // - Kategori
    // - Deskripsi
    // - Dominant notes
    // - Element notes
    // ========================================

    const input =
        document.querySelector(
            ".search-bar input"
        );


    if (input) {

        input.addEventListener(
            "input",
            function () {

                const value =
                    this.value
                        .toLowerCase()
                        .trim();


                cards.forEach(
                    function (card) {

                        const text =
                            card.innerText
                                .toLowerCase();


                        // Jika kosong
                        // atau teks ditemukan
                        if (
                            value === "" ||
                            text.includes(value)
                        ) {

                            card.style.display = "";

                        } else {

                            card.style.display =
                                "none";

                        }

                    }
                );

            }
        );

    }


});
// ==========================
// SPLASH SCREEN
// ==========================

window.addEventListener("load", function () {

    const splash = document.getElementById("splash-screen");

    if (!splash) return;

    setTimeout(function () {

        splash.classList.add("hide");

    }, 1800);

});