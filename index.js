const readline = require('readline').createInterface({
    input: process.stdin, output: process.stdout
});

let daftarMenu = [
    { nama: "KopiSusu", harga: 10000, stock: 10 },
    { nama: "TehManis", harga: 5000,  stock: 15 },
    { nama: "RotiBakar", harga: 12000, stock: 5 }
];

function hitungTotal(nomor, jumlah) {
  try {
    let index = parseInt(nomor) - 1; 
    let jumlahBeli = parseInt(jumlah); 
    
    if (isNaN(index) || isNaN(jumlahBeli)) {
        throw "Input Harus angka bos!";
    }

    if (index < 0 || index >= daftarMenu.length) {
        throw "Nomor menu tidak ada jir";
    }

    let barangPilihan = daftarMenu[index];


    if (jumlahBeli > barangPilihan.stock) {
        return `Stock tidak cukup, sisa stock ${barangPilihan.stock}.`;
    } else if (jumlahBeli <= 0 ){
        return "Jumlah beli harus lebih dari 0";
    }
    
    let total = jumlahBeli * barangPilihan.harga;
    return `Total bayar ${jumlahBeli} ${barangPilihan.nama}: Rp ${total}`;

  } catch(eror) {
    return `eror: ${eror}`;
  }
}

console.log(`KASIR`);
console.log(`[1] ${daftarMenu[0].nama} | Harga Rp: ${daftarMenu[0].harga} | Stock: ${daftarMenu[0].stock}`);
console.log(`[2] ${daftarMenu[1].nama} | Harga Rp: ${daftarMenu[1].harga} | Stock: ${daftarMenu[1].stock}`);
console.log(`[3] ${daftarMenu[2].nama} | Harga Rp: ${daftarMenu[2].harga} | Stock: ${daftarMenu[2].stock}`);

readline.question("pilih nomor menu (1-3): ", (inputMenu) => {
    readline.question("mau beli berapa? ", (inputJumlah) => {
        
        let hasil = hitungTotal(inputMenu, inputJumlah);
        console.log(hasil);
        readline.close();
    });
});