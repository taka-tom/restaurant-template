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


  // IMAGE

  document
    .querySelectorAll("[data-image]")
    .forEach((image) => {

      const key = image.dataset.image;

      if (SITE_CONFIG[key]) {

        image.src =
          SITE_CONFIG[key];

      }

    });


  // MAP

  const map =
    document.getElementById("map");

  if (map) {

    map.src =
      `https://www.google.com/maps?q=${encodeURIComponent(
        SITE_CONFIG.mapLocation
      )}&output=embed`;

  }


  // LINK

  document
    .querySelectorAll("[data-link]")
    .forEach((link) => {

      const key = link.dataset.link;

      if (SITE_CONFIG[key]) {

        link.href =
          SITE_CONFIG[key];

      }

    });

  // PHONE

  document
    .querySelectorAll("[data-phone]")
    .forEach((phone) => {

      phone.href =
        `tel:${SITE_CONFIG.phone}`;

    });

// EMAIL

document
  .querySelectorAll("[data-email]")
  .forEach((email) => {

    email.href =
      `mailto:${SITE_CONFIG.email}`;

  });

// ADDRESS

document
  .querySelectorAll("[data-address]")
  .forEach((address) => {

    address.href =
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        SITE_CONFIG.mapLocation
      )}`;

  });


  // HAMBURGER MENU

  const menuToggle =
    document.querySelector(".menu-toggle");

  const nav =
    document.querySelector("nav");


  if (menuToggle && nav) {

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

  }


});