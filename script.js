console.log("nomor 1");
const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 =
  "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";
const changeWord = (selectedText, changedText, text) => {
  const changedWord = text.replace(selectedText, changedText);

  return changedWord;
};

console.log(changeWord("mencintai", "membenci", kalimat1));
console.log(changeWord("bromo", "semeru", kalimat2));
console.log("");

console.log("nomor 2");

const checkTypeNumber = (givenNumber) => {
  if (typeof givenNumber === "number") {
    if (givenNumber % 2 === 1) {
      return "ganjil";
    } else {
      return "genap";
    }
  } else if (givenNumber == null) {
    return "ERROR: Bro where is the parameter?";
  } else {
    return "ERROR: Invalid data type";
  }
};
console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());
console.log("");

console.log("nomor 3");
function checkEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  } else if (/^(?=.*\s)/.test(email) || email == "") {
    return "tidak boleh kosong";
  } else {
    return false;
  }
}

console.log(checkEmail("apranata@binar.co.id"));
console.log(checkEmail("apranata@binar.com"));
console.log(checkEmail("apranata@binar"));
console.log(checkEmail("apranata"));
console.log(checkTypeNumber(checkEmail(3322)));
console.log(checkEmail(""));
console.log("");

console.log("nomor 4");

const passwordRegex = new RegExp(
  "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})"
);

function isValidPassword(password) {
  if (passwordRegex.test(password)) {
    return true;
  } else if (
    /^(?=.*\s)/.test(password) ||
    password == "" ||
    password == 0 ||
    password == null
  ) {
    return "tidak boleh kosong";
  } else {
    return false;
  }
}

console.log(isValidPassword("Meong2021"));
console.log(isValidPassword("meong2021"));
console.log(isValidPassword("@eong"));
console.log(isValidPassword("Meong2"));
console.log(isValidPassword(0));
console.log(isValidPassword());
console.log("");

console.log("nomor 5");

const getSplitName = (personName) => {
  const nameArr = personName.split(" ");
  if (nameArr.length > 2) {
    const obj = {
      firstName: nameArr[0],
      middleName: nameArr[1],
      lastName: nameArr[nameArr.length - 1],
    };
    return obj;
  } else if (nameArr.length > 3) {
    return "Error: This function is only for 3 characters name";
  } else if (nameArr.length > 1) {
    const obj = {
      firstName: nameArr[0],
      middleName: null,
      lastName: nameArr[nameArr.length - 1],
    };
    return obj;
  } else if (nameArr.length == 1) {
    const obj = {
      firstName: nameArr[0],
      middleName: null,
      lastName: null,
    };
    return obj;
  } else {
    return "nama belum diisi";
  }
};

console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aureliya Sukma Darma"));
// console.log(getSplitName(0));
console.log("");
console.log("nomor 6");
const getAngkaTerbesarKedua = (submitValue) => {
  if (Array.isArray(submitValue)) {
    const ArrValue = submitValue.sort(function (a, b) {
      return b - a;
    });
    return console.log(`Nilai terbesar kedua adalah ${ArrValue[1]}`);
  } else {
    return "Error : Your value isn't an Array";
  }
};

const dataAngka = [9, 7, 7, 4, 3, 2, 2, 8];
console.log(getAngkaTerbesarKedua(dataAngka));

console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
console.log("");
console.log("nomor 7");
const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High ",
    kategori: "Sepatu Sneaker",
    hargaSatuan: 360000,
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];

const hitungTotalPenjualan = () => {
  const total = dataPenjualanPakAldi
    .map((a) => (newArr = a.totalTerjual)) //newArr =[90,37,90,90]
    .reduce((acc, curr) => acc + curr);
  return total;
};

console.log(
  "total penjualan pak adi",
  hitungTotalPenjualan(dataPenjualanPakAldi)
);

console.log("");
console.log("nomor 8");
const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

const totalHargaBeli = dataPenjualanNovel
  .map((data) => data.hargaBeli * data.totalTerjual)
  .reduce((acc, curr) => acc + curr);
console.log("total harga beli:", totalHargaBeli);

const totalHargaJual = dataPenjualanNovel
  .map((data) => data.hargaJual * data.totalTerjual)
  .reduce((acc, curr) => acc + curr);
console.log("total harga jual:", totalHargaJual);

const untung = totalHargaJual - totalHargaBeli;
console.log("untungnya: ", untung);

const persenUntung = (totalHargaBeli / totalHargaJual) * 100;
console.log("persen untungnya:", persenUntung);

const produkBukuTerlaris = dataPenjualanNovel.map((data) => {
  let newTotalTerjual = data.totalTerjual;
  return newTotalTerjual;
});
const penjualanTerbanyak = Math.max(...produkBukuTerlaris);
console.log("penjualan terbanyak:", penjualanTerbanyak);

const siapaPenjualnya = () => {
  const penjualnyaNih = dataPenjualanNovel.find(
    (x) => x.totalTerjual == penjualanTerbanyak
  );
  return penjualnyaNih;
};
const objNovel = {
  totalKeuntungan: `rp ${untung}`,
  totalModal: `rp ${totalHargaBeli}`,
  persentaseKeuntungan: persenUntung,
  produkBukuTerlaris: siapaPenjualnya().namaProduk,
  penulisTerlarisL: siapaPenjualnya().penulis,
};
console.log(objNovel);
