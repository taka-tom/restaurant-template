document.addEventListener("DOMContentLoaded", () => {


  // TEXT

  document
    .querySelectorAll("[data-site]")
    .forEach((element) => {


      const key = element.dataset.site;


      if (SITE_CONFIG[key]) {

        element.textContent =
          SITE_CONFIG[key];

      }


    });


  // COLOR

  document.documentElement.style.setProperty(
    "--main-color",
    SITE_CONFIG.mainColor
  );


  document.documentElement.style.setProperty(
    "--text-color",
    SITE_CONFIG.textColor
  );


  document.documentElement.style.setProperty(
    "--accent-color",
    SITE_CONFIG.accentColor
  );


  // TITLE

  document.title =
    SITE_CONFIG.restaurantName;
    
    
document
  .querySelectorAll("[data-image]")
  .forEach((image) => {

    const key = image.dataset.image;

    if (SITE_CONFIG[key]) {

      image.src = SITE_CONFIG[key];

    }

  });
  
  document.getElementById("map").src =
  `https://www.google.com/maps?q=${encodeURIComponent(SITE_CONFIG.mapLocation)}&output=embed`;
  
  document
  .querySelectorAll("[data-link]")
  .forEach((link) => {

    const key = link.dataset.link;

    if (SITE_CONFIG[key]) {

      link.href = SITE_CONFIG[key];

    }

  });
  
  const menuToggle =
  document.querySelector(".menu-toggle");

const nav =
  document.querySelector("nav");


menuToggle.addEventListener(
  "click",
  () => {

    nav.classList.toggle("active");

  }
  
);
nav.querySelectorAll("a").forEach((link) => {

  link.addEventListener("click", () => {

    nav.classList.remove("active");

  });

});

  
  });
