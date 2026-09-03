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
  
