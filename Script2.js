function updateClock() {
    const clockElement = document.getElementById("saat");
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
  }
  setInterval(updateClock, 1000);
  updateClock();

    const projectDetails = {
      project1: {
        title: "Mimari Proje 3",
        description: "Bu projede bomontide bir ortaokul çalışması yaptım.",
        image: "İmage/Render_7 - Photo.jpg",
      },
      project2: {
        title: "İstanbul Üniversitesi Merkez Kütüphanesi Şantiyesi",
        description: "Bu proojede inşaatın ince işleri başlangıcından teslimine kadar saha mimarı olarak görev aldım.",
        image: "İmage/IMG_20240327_104014.jpg",  
      },
      project3: {
        title: "Roket Deneme Tesisi",
        description: "Bu projede İngiltereli bir müşterime jet motorlarının denendiği bir tesisi planlayıp modelledim.",
        image: "İmage/5_Photo - 1.jpg",
      }
    };
    
    function showModal(projectId) {
      const modal = document.getElementById("modal");
      const details = projectDetails[projectId];
    
      document.getElementById("modal-title").innerText = details.title;
      document.getElementById("modal-description").innerText = details.description;
      document.getElementById("modal-image").src = details.image;
      document.getElementById("modal-link").href = details.link;
    
      modal.classList.remove("hidden");
    }
    
    function closeModal() {
      document.getElementById("modal").classList.add("hidden");
    }