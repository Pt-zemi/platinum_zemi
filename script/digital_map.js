    function showMap(num) {
      const maps = document.querySelectorAll("iframe");
      const buttons = document.querySelectorAll(".nav-button");

      maps.forEach((map, i) => {
        map.classList.toggle("active", i === num - 1);
      });

      buttons.forEach((btn, i) => {
        btn.classList.toggle("active", i === num - 1);
      });
    }