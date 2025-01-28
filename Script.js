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
        title: "İçecek Ürünlerinin Fotoğraf Çekimi",
        description: "Bu projede İsveçli bir işverenime 120 adet içeceğin fotoğraf çekimini yaptım...",
        image: "İmage/Akmina Mineral Water Watermelon & Strawberry 6X200 ML.JPG",
        link: "detay.html"
      },
      project2: {
        title: "Alkol Ürünlerinin Fotoğraf Çekimi",
        description: "Bu projede İsveçli bir işverenime 100 adet Alkol ürünlerinin fotoğraf çekimini yaptım...",
        image: "İmage/IMG_3178.JPG",  
        link: "detay.html",
      },
      project3: {
        title: "Alkol Ürünlerinin Fotoğraf Çekimi",
        description: "Bu projede Portekizli bir işverenim için 1000 adet google güvenlik sorularında kullanılan fotoğrafların çekimini yaptım...",
        image: "İmage/IMG_2660.JPG",
        link: "detay.html"
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