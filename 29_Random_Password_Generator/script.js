const generateBtn = document.getElementById("generatePasswordBtn");
const result = document.getElementById("result");


generateBtn.addEventListener("click", () => {
    const length = Number(
        document.getElementById("lengthPassword").value
    );

    const options = {
        uppercase: document.getElementById("includeUppercase").checked,
        lowercase: document.getElementById("includeLowercase").checked,
        numbers: document.getElementById("includeNumbers").checked,
        symbols: document.getElementById("includeSymbols").checked
    };

    const password = generatePassword(length, options);
    result.textContent = password;
});

document.getElementById("copyPasswordBtn").addEventListener("click", () => {
    const password = document.getElementById("result").textContent;

    navigator.clipboard.writeText(password).then(() => {
        alert("Password copied!");
    });
});

function generatePassword(length, options) {
    const chars = {
        uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        lowercase: "abcdefghijklmnopqrstuvwxyz",
        numbers: "0123456789",
        symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-="
    };

    let availableChars = "";
    let password = "";

    // karakter wajib berdasarkan pilihan user
    for (const type in options) {
        if (options[type]) {
            const selectedChars = chars[type];
            // tambah karakter wajib 1x
            password += getRandomChar(selectedChars);
            // tambah ke pool random
            availableChars += selectedChars;
        }
    }

    // kalau tidak ada checkbox
    if (!availableChars) {
        return "Pilih minimal satu karakter";
    }

    // isi sisa password
    while (password.length < length) {
        password += getRandomChar(availableChars);
    }

    // acak password
    return shuffle(password);
}

function getRandomChar(chars) {
    return chars[
        Math.floor(Math.random() * chars.length)
    ];
}

function shuffle(str) {
    return str
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
}