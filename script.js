// tampilan login
let input = prompt("sapa nama katu?");
alert("OHHH DIRIMUU, baiklahbaiklah");
alert("ya nentau le si kalo kenall, cuma yaudahlah yaaa. lanjutt bos");
// let password = prompt("etsss password duluu bosskuhh");

// while (password !== "pcim") {
//    alert("password ddapa dimana ksiang ini weii, salah coii");
//    password = prompt("password passwordd");
// }
alert("nahh betull");

let aksesDoc = document.getElementById("input");
aksesDoc.innerHTML = `HHEELLOOWWW ${input}!!!`;




// Fungsi utama untuk berpindah ke section tujuan dan menutup section lainnya
function openSection(targetId) {
  // Menyembunyikan semua section di dalam <main>
  const allSections = document.querySelectorAll("main > section");
  allSections.forEach((sec) => {
    sec.style.display = "none";
  });

  // Tampilan section yang dituju
  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    targetSection.style.display = "block";
  }

  
  window.scrollTo(0, 0);
}


document.addEventListener("DOMContentLoaded", () => {
  openSection("home");

  const backRoutes = {
    "about": "home",
    "education": "home",
    "experience": "home",
    "o-experience": "experience",       
    "a-exp": "experience",              
    "achievements": "home",
    "academic-section": "achievements",  
    "nonacademic-section": "achievements",
    "nonacad-pageant": "nonacademic-section",   
    "nonacad-tabletennis": "nonacademic-section"
  };



  // Pasang fungsi klik otomatis untuk semua tombol .btn-back
  const backButtons = document.querySelectorAll(".btn-back");
  backButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const currentSection = btn.closest("section");
      if (currentSection) {
        const currentId = currentSection.id;
        const destination = backRoutes[currentId] || "home";
        openSection(destination);
      }
    });
  });
});
