function seleksi(nilai_awal, nilai_akhir, data) {
    // Validasi bahwa nilaiAwal < nilaiAkhir
    if (nilai_awal >= nilai_akhir) {
        console.log("Nilai akhir harus lebih besar dari nilai awal");
        return;
    }

    // Validasi bahwa jumlah elemen dalam dataArray harus lebih dari 5
    if (data.length <= 5) {
        console.log("Jumlah angka dalam data array harus lebih dari 5");
        return;
    }

    // Filter data yang berada di antara nilaiAwal dan nilaiAkhir
    let hasil = data.filter(angka => angka > nilai_awal && angka < nilai_akhir);

    // Jika hasil seleksi kosong, tampilkan pesan "Nilai tidak ditemukan"
    if (hasil.length === 0) {
        console.log("Nilai tidak ditemukan");
    } else {
        // Urutkan hasil seleksi
        hasil.sort((a, b) => a - b);
        // Tampilkan hasil seleksi
        console.log(hasil);
    }
}

// Contoh penggunaan fungsi
seleksi(5, 20, [2, 25, 4, 14, 17, 30, 8]); // Output: [8, 14, 17]
seleksi(15, 3, [2, 25, 4, 14, 17, 30, 8]); // Output: "Nilai akhir harus lebih besar dari nilai awal"
seleksi(4, 17, [2, 25, 4]);               // Output: "Jumlah angka dalam dataArray harus lebih dari 5"
seleksi(5, 17, [2, 25, 4, 1, 30, 18]);    // Output: "Nilai tidak ditemukan"

