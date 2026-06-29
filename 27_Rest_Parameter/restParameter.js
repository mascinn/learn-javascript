// REST PARAMETER

let nama = "Rizky";
let umur = 25;
let hobi = ["Membaca", "Bersepeda", "Memasak"];

function data(nama, umur, ...hobi){
    console.log("Nama: " + nama);
    console.log("Umur: " + umur);
    console.log("Hobi: " + hobi);
}

data(nama, umur, ...hobi);