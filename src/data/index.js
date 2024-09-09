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
  Front,
  Back,
  Alat,
  User
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
    id: "Skill",
    title: "Skill",
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
    title: "TEFA | MES4N",
    company_name: "SMKN 4 Bandung",
    date: "2024",
    details: [
      "Sebagai <span style='color: white;'>Quality Engineer</span> saya dan rekan-rekan berhasil menghilangkan celah bug di project kami yang berupa aplikasi mengenai Point Of Sale",
    ],
  },
];

const portfolio = [
  {
    name: "Website Resep",
    description: "Website ini saya buat dengan tujuan user dapat melihat resep dari makanan yang ada di seluruh dunia, di website ini juga user dapat melihat tutorial di youtube",
    image: resep,
  },
  {
    name: "Website Fanbook",
    description: "Website ini saya buat dengan tujuan user dapat memberikan komen di suatu fan community",
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
    description:"Website saya buat berdasarkan pembalajaran yang ada disekolah mengenai Narative, pada website ini saya bisa menambah, menghapus, dan mengedit list siswa sesuka hati saya",
    image: Siswa,
  },
  {
    name: "Website BookStore",
    description: "Website ini saya buat untuk menyelesaikan tugas akhir saya di kelas 10. Ini adalah website simpel seperti List siswa, website ini menggunakan HTML, CSS, dan Javascript dasar",
    image: ListBuku,
  },
  {
    name: "Website list belanja",
    description: "Website ini saya buat saat melakukan pembelajaran dengan industri, di mana website ini saya kerjakan sembari melihat channel youtube Sandhika Galih",
    image: Belanja,
  },
  {
    name: "Website Film",
    description:"Website ini saya buat ketika saya mengerjakan kursus dari Learning X",
    image: Movie,
  },
  {
    name: "Game Kisah Sekolah",
    description:"Game ini saya buat bersama tim di mana game ini merupakan game bertajuk visual novel yang menawarkan pengalaman seru karena didalamnya banyak unsur Indonesia yang sudah pasti relate dengan pemain",
    image: Game,
  },
];

const SKILLS = [
  {
    title: "Front End",
    icon: Front,
    skills: [
      { skill: "HTML 5", percentage: "80%", description: "Saya bisa dengan mudah mengotak-atik code HTML yang sudah dibuat" },
      { skill: "React", percentage: "87%", description: "Saya memahami konsep menyeluruh dari React sehingga saya bisa mengembangkannya lebih luas" },
      { skill: "Java Script", percentage: "86%", description: "Saya memahami hal-hal yang menjadi kunci utama dari Java Script" },
      { skill: "CSS 3", percentage: "76%", description: "Saya dapat mengcopy desain dengan cukup baik hanya saja masih banyak kekurangan dalam pengembangannya" }
    ]
  },
  {
    title: "Back End",
    icon: Back,
    skills: [
      { skill: "Node.js", percentage: "82%", description: "Saya memahami konsep dari Node, tapi terkadang saya masih memiliki pemahaman yang keliru mengenainya" },
      { skill: "Express.js", percentage: "76%", description: "Saya memahami konsep dasarnya" },
      { skill: "MySql", percentage: "90%", description: "Saya sudah terbiasa menggunakan MySql, meski saya tidak terlalu bisa menuliskan kodenya secara langsung tapi saya bisa mengerti secara keseluruhan databasenya" },
      { skill: "MongoDB", percentage: "90%", description: "Saya lebih biasa menggunakan MySql, tapi karena saya tahu bahwa penggunaannya tidak jauh berbeda maka saya PD untuk menggunakannya" }
    ]
  },
  {
    title: "Tools",
    icon: Alat,
    skills: [
      { skill: "Git & GitHub", percentage: "88%", description: "Saya memahami hal-hal penting atau fitur utama menggunakan Github dalam coding saya" },
      { skill: "Visual Studio Code", percentage: "89%", description: "Ini merupakan alat yang tentu saja paling saya kuasai, jadi saya sudah mahir dalam menggunakannya" },
      { skill: "Selenium IDE", percentage: "86%", description: "Saya sudah mencoba mengerjakan beberapa projek menggunakan Selenium, jadi saya PD bahwa saya mahir menggunakannya" }
    ]
  },
  {
    title: "Soft Skills",
    icon: User,
    skills: [
      { skill: "Problem Solving", percentage: "94%", description: "Saya terkenal karena problem solving saya yang sangat hebat dalam menyelesaikan masalah, memikirkan out of the box sudah menjadi makanan sehari-hari saya" },
      { skill: "Collaboration", percentage: "80%", description: "Saya selalu bisa diajak kerja sama, saya dapat mengerjakan apapun dengan cepat dan tepat jika perintah yang diberikan jelas" },
      { skill: "Analytics", percentage: "88%", description: "Tentu saja untuk menjadi Quality Engineer atau Programmer harus mempunyai skill analitis yang tinggi agar memudahkan pekerjaan kita" },
      { skill: "Adaptability", percentage: "95%", description: "Selain karena problem solving saya, kemampuan adaptasi saya yang diatas rata-rata membuat saya dapat bekerja disituasi apapun" }
    ]
  }
];



export { experiences, portfolio, SKILLS };

