function convertToFahrenheit() {
    let celsius = document.getElementById("celsius").value; // Mengambil nilai Celsius dari input

    if (celsius === '') { // Memeriksa apakah input kosong
        alert("Silakan masukkan nilai Celsius."); // Menampilkan pesan peringatan
        return; // Menghentikan eksekusi fungsi
    }

    let fahrenheit = (celsius * 9 / 5) + 32; // Menghitung nilai Fahrenheit
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2); // Menampilkan hasil Fahrenheit dengan 2 desimal

    // Memperbarui hasil kalkulasi di text box
    document.getElementById("calculation").value = `${celsius} °C x (9/5) + 32 = ${fahrenheit.toFixed(2)} °F`; // Menampilkan langkah-langkah perhitungan
}

function reset() {
    // Menampilkan alert sebelum mengosongkan kolom input
    alert("Inputan kosong silahkan masukkan inputan."); // Menampilkan pesan peringatan
    document.getElementById("celsius").value = ''; // Mengosongkan kolom input Celsius
    document.getElementById("fahrenheit").value = ''; // Mengosongkan kolom input Fahrenheit
    document.getElementById("calculation").value = ''; // Mengosongkan hasil kalkulasi
}

function reverseConvert() {
    let fahrenheit = document.getElementById("fahrenheit").value; // Mengambil nilai Fahrenheit dari input

    if (fahrenheit === '') { // Memeriksa apakah input kosong
        alert("Silakan masukkan nilai Fahrenheit."); // Menampilkan pesan peringatan
        return; // Menghentikan eksekusi fungsi
    }

    let celsius = (fahrenheit - 32) * 5 / 9; // Menghitung nilai Celsius
    document.getElementById("celsius").value = celsius.toFixed(2); // Menampilkan hasil Celsius dengan 2 desimal

    // Memperbarui hasil kalkulasi di text box
    document.getElementById("calculation").value = `${fahrenheit} °F - 32) x (5/9) = ${celsius.toFixed(2)} °C`; // Menampilkan langkah-langkah perhitungan
}
