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

   // RESERVATION

  const dateInput =
    document.querySelector('input[name="date"]');

  const timeSelect =
    document.getElementById("reservation-time");


  if (dateInput && timeSelect) {


    // 今日から2日後以降だけ選択可能
    const today =
      new Date();

    today.setHours(0, 0, 0, 0);


    const minDate =
      new Date(today);

    minDate.setDate(
      today.getDate() + 2
    );


    const year =
      minDate.getFullYear();

    const month =
      String(
        minDate.getMonth() + 1
      ).padStart(2, "0");

    const day =
      String(
        minDate.getDate()
      ).padStart(2, "0");


    dateInput.min =
      `${year}-${month}-${day}`;


    function setReservationTimes() {

      timeSelect.innerHTML =
        '<option value="">時間を選択してください</option>';


      const selectedDate =
        new Date(
          dateInput.value + "T00:00:00"
        );


      const weekDay =
        selectedDate.getDay();


      // 火曜日は定休日
      if (weekDay === 2) {

        timeSelect.innerHTML =
          '<option value="">定休日です</option>';

        return;

      }


      let startTimes = [];
      let endTimes = [];


      // 土曜日・日曜日
      if (
        weekDay === 0 ||
        weekDay === 6
      ) {

        startTimes = ["11:00"];
        endTimes = ["21:00"];

      }

      // 月・水・木・金
      else {

        startTimes = [
          "11:30",
          "17:00"
        ];

        endTimes = [
          "15:00",
          "21:00"
        ];

      }


      for (
        let i = 0;
        i < startTimes.length;
        i++
      ) {

        let [startHour, startMinute] =
          startTimes[i]
            .split(":")
            .map(Number);


        let [endHour, endMinute] =
          endTimes[i]
            .split(":")
            .map(Number);


        while (
          startHour < endHour ||
          (
            startHour === endHour &&
            startMinute < endMinute
          )
        ) {

          const option =
            document.createElement("option");


          const hour =
            String(startHour)
              .padStart(2, "0");


          const minute =
            String(startMinute)
              .padStart(2, "0");


          option.value =
            `${hour}:${minute}`;


          option.textContent =
            `${hour}:${minute}`;


          timeSelect.appendChild(
            option
          );


          startMinute += 30;


          if (startMinute >= 60) {

            startHour++;
            startMinute -= 60;

          }

        }

      }

    }


    dateInput.addEventListener(
      "change",
      setReservationTimes
    );

  }
        
});