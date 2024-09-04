import {
  algorithms,
  devnotes,
  oscs,
  resep,
  Movie,
  FanBook,
  Cafe,
  Kelas, 
  Siswa,
  ListBuku,
  Game,
  Belanja,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Home",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "OSIS SMKN 4 Bandung",
    company_name: "SMKN 4 Bandung",
    date: "2022-2024",
    details: [
      "Saya<span style='color: white;'> Berhasil</span> Memimpin sekbid 3 dalam menyelesaikan segala kewajibannya",
    ],
  },
  {
    title: "Ketua Pelaksana Gelora",
    company_name: "OSIS SMKN 4 Bandung",
    date: "2023",
    details: [
      "Saya berhasil membuat acara gelora pada tahun itu menjadi acara yang membuat <span style='color: white;'>saya dan rekan-rekan saya dinilai layak sebagai OSIS. </span> ",
    ],
  },
  {
    title: "TEFA",
    company_name: "SMKN 4 Bandung",
    date: "2024",
    details: [
      "Sebagai <span style='color: white;'>Quality Engineer</span> saya dan rekan-rekan berhasil menghilangkan celah bug di project kami",
    ],
  },
];

const portfolio = [
  {
    name: "Website Resep",
    description: "Website ini saya buat dengan tujuan agar user dapat melihat resep dari makanan yang ada di seluruh dunia, di website ini juga user dapat melihat tutorial di youtube",
    image: resep,
  },
  {
    name: "Website Fanbook",
    description: "Website ini saya buat dengan tujuan agar user dapat memberikan komen di suatu fan community",
    image: FanBook,
  },
  {
    name: "Website Kafe",
    description:"Website ini saya buat untuk mempromosikan kafe teman saya. Dalam pengerjaannya saya menggunakan HTML, CSS, dan Javascript sederhana yang bisa ditemukan di Youtube",
    image: Cafe,
  },
  {
    name: "Website List Kelas",
    description:"Website saya buat berdasarkan pembalajaran yang ada disekolah mengenai Laravel, pada website ini saya bisa menambah, menghapus, dan mengedit list kelas sesuka hati saya",
    image: Kelas,
  },
  {
    name: "Website List Siswa Narative",
    description:"Website saya buat berdasarkan pembalajaran yang ada disekolah mengenai narative, pada website ini saya bisa menambah, menghapus, dan mengedit list siswa sesuka hati saya",
    image: Siswa,
  },
  {
    name: "Website BookStore",
    description: "Website ini saya buat untuk menyelesaikan pembelajaran saya di kelas 10. Ini adalah website simpel seperti List siswa, hanya saja website ini menggunakan HTML, CSS, dan Javascript dasar saja",
    image: ListBuku,
  },
  {
    name: "Website list belanja",
    description: "Website ini saya buat saat melakukan pembelajaran dengan industri, dimana website ini saya kerjakan sembari melihat channel youtube sandhika galih",
    image: Belanja,
  },
  {
    name: "Website Film",
    description:"Website ini saya buat ketika saya mengerjakan course dari learning X",
    image: Movie,
  },
  {
    name: "Game Kisah Sekolah",
    description:"Game ini saya buat bersama tim dimana game ini merupakan game bertajuk visual novel yang menawarkan pengalaman seru karena didalamnya banyak unsur Indonesia yang sudah pasti relate dengan pemain",
    image: Game,
  },
];

export { experiences, portfolio };

