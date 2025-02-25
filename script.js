const verbs = [
    "Membaca", "Menulis", "Melukis", "Menggambar", "Memotret", "Menjahit", "Merajut", "Memahat", "Membatik", "Memasak",
    "Membuat kue", "Meracik kopi", "Berburu", "Memancing", "Berkebun", "Bersepeda", "Berlari", "Mendaki", "Berenang", "Menyelam",
    "Bermain gitar", "Bermain piano", "Bermain drum", "Bernyanyi", "Menari", "Berakting", "Menyusun puzzle", "Bermain catur",
    "Bermain kartu", "Bermain game", "Mengedit video", "Membuat animasi", "Menulis puisi", "Menulis cerita pendek",
    "Membaca komik", "Mengoleksi perangko", "Mengoleksi koin", "Mengoleksi mainan", "Mengoleksi buku", "Memelihara ikan",
    "Memelihara burung", "Merawat tanaman hias", "Berkemah", "Berpetualang", "Mengeksplorasi gua", "Berlayar", "Mengemudi off-road",
    "Bermain skateboard", "Bermain sepatu roda", "Bermain tenis", "Bermain badminton", "Bermain basket", "Bermain sepak bola",
    "Bermain voli", "Memanah", "Menembak", "Bermain billiard", "Bermain golf", "Berlatih bela diri", "Menari salsa",
    "Bermain origami", "Membuat kerajinan tangan", "Membuat lilin aromaterapi", "Membuat sabun natural", "Mencoba resep baru",
    "Mencicipi makanan unik", "Mengulas makanan", "Membuat podcast", "Menulis blog", "Membaca jurnal ilmiah",
    "Membuat jurnal pribadi", "Melakukan eksperimen sains", "Membuat robot", "Memprogram aplikasi", "Merakit komputer",
    "Mempelajari bahasa baru", "Mempelajari sejarah", "Menonton film dokumenter", "Menyusun playlist musik",
    "Menyusun koleksi foto", "Membuat scrapbook", "Menyusun strategi permainan", "Menganalisis data", "Mengelola investasi",
    "Berlatih yoga", "Meditasi", "Bermain sulap", "Membantu komunitas", "Volunteering", "Mengajar anak-anak",
    "Menulis kaligrafi", "Belajar kaligrafi Jepang", "Belajar seni bela diri tradisional", "Membuat desain grafis",
    "Menghias ruangan", "Merancang pakaian", "Mengikuti cosplay", "Menjadi influencer media sosial", "Membantu konservasi alam",
    "Menjelajahi budaya baru", "Menyusun lego", "Menulis novel", "Menganalisis film", "Meneliti sains", "Menggambar manga",
    "Membuat meme", "Menjadi streamer", "Mengedit musik", "Merancang robot", "Merajut sweater", "Membuat komik",
    "Mengoleksi action figure", "Membuat parfum", "Menanam bonsai", "Menghias kue", "Membuat coklat", "Memainkan ukulele",
    "Menjelajahi dunia VR", "Menulis skenario", "Membuat boneka", "Merangkai bunga", "Membuat tato", "Menonton opera",
    "Menjelajahi laut", "Mengoleksi batu permata", "Membuat alat musik", "Membuat cosplay", "Membuat topeng", "Mencari fosil",
    "Menggubah lagu", "Membuat sulaman", "Bermain airsoft", "Membuat program AI", "Memahat kayu", "Mengajar tari",
    "Bermain frisbee", "Menjadi fotografer satwa liar", "Merancang kostum", "Menulis skenario film", "Menjadi podcaster",
    "Membuat efek visual", "Merancang interior", "Bermain paintball", "Menulis cerpen", "Merancang aplikasi", "Membuat kaligrafi",
    "Menulis diari", "Menjelajahi galaksi virtual", "Membaca tarot", "Menjadi tukang sulap", "Menggambar karakter",
    "Menulis esai", "Membuat kartun", "Mempelajari mitologi", "Merancang poster", "Menjadi voice actor", "Mempelajari filsafat",
    "Membuat lagu", "Mendaki tebing", "Menjelajahi gua bawah laut", "Mengikuti ekspedisi", "Merangkai puzzle 3D",
    "Membangun rumah miniatur", "Mempelajari biologi laut", "Menyelam di kapal karam", "Mempelajari sejarah seni",
    "Mempelajari psikologi", "Menulis blog perjalanan", "Menjadi jurnalis independen", "Membangun komunitas online",
    "Mengelola kanal YouTube", "Menjadi seniman digital", "Mengulas gadget", "Merancang taman", "Membuat jam tangan kayu",
    "Membuat perhiasan tangan", "Bermain harmonika", "Menjadi pengulas teknologi", "Membuat desain pakaian digital",
    "Menjadi pemandu wisata", "Menulis kritik seni", "Membangun rumah miniatur", "Menjadi penulis naskah podcast",
    "Merancang panggung teater", "Menjadi pembawa acara online", "Mempelajari linguistik", "Menjadi penyiar radio",
    "Mempelajari astronomi", "Mempelajari kaligrafi China", "Membuat ornamen kaca", "Membuat alat peraga film",
    "Menjadi kolektor barang antik", "Merancang kendaraan futuristik", "Membuat efek suara", "Mengajar seni bela diri",
    "Menjadi kreator komik digital", "Mengoleksi benda unik", "Menjadi editor film pendek", "Menggambar arsitektur",
    "Merancang iklan kreatif", "Mempelajari paleontologi", "Membuat seni lukis pasir", "Mengoleksi seni lukis miniatur",
    "Mempelajari fotografi analog", "Menjadi kreator NFT", "Membuat ukiran batu", "Mengikuti perlombaan robotik",
    "Mengajar meditasi", "Menulis puisi kontemporer", "Membuat model pesawat", "Menggubah musik klasik", "Menjadi pelukis mural",
    "Membuat patung dari logam", "Mempelajari seni kaligrafi Arab", "Mengikuti workshop seni", "Mengikuti eksperimen budaya",
    "Mempelajari sastra dunia", "Menulis lagu indie", "Mempelajari sejarah budaya pop", "Merancang karakter game",
    "Membuat musik elektronik", "Menjadi kolektor sneaker", "Membuat game indie", "Membuat ukiran lilin",
    "Menulis naskah sandiwara", "Menjadi kritikus sastra", "Mempelajari seni abstrak", "Menjadi analis e-sports",
    "Menulis blog kuliner", "Mempelajari seni grafis", "Menjadi host webinar", "Mengembangkan teknologi AR/VR",
    "Menjadi ilustrator karakter", "Menjadi kolektor film klasik", "Mengajar desain grafis"
];
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateHobby() {
    return getRandomElement(verbs); // Hanya memilih kata kerja (verb)
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        let nameInput = document.getElementById("nameInput");
        let resultTable = document.getElementById("resultTable");
        let name = nameInput.value.trim();

        if (name !== "") {
            let hobby = generateHobby();

            // Buat baris baru
            let row = document.createElement("tr");
            row.innerHTML = `<td>${name.toUpperCase()}</td><td>${hobby}</td>`;

            // Sisipkan sebelum baris input
            resultTable.insertBefore(row, resultTable.lastElementChild);

            // Kosongkan input untuk input berikutnya
            nameInput.value = "";
        }
    }
}