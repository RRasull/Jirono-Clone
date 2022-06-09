let statisticaCount = document.querySelectorAll(".count-statistica");


function ScrollCount() {
  document.addEventListener("scroll", () => {
    [...statisticaCount].forEach((count) => {
      let offset = count.getAttribute('data-offset');
      let countLimit = count.getAttribute('data-count');
      let position = count.getBoundingClientRect();
      let counStart = 1;
      if (position.top <= window.innerHeight) {
        let countHtml = setInterval(() => {
          count.innerHTML = counStart;
          counStart++;
          if (countLimit < counStart) {
            clearInterval(countHtml);
          }
        }, 1)
      }
    });
  });
}

ScrollCount();
