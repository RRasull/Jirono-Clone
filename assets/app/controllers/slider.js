const slider = document.querySelector('.slider-image');
const next = document.querySelector('.next-btn');
const prev = document.querySelector('.previus-btn ');
let valueNumber = -1;
let flex = "flex-start";
let direction = -1;


function ClickButton(click) {
  click?.addEventListener('click', function () {
    if (click == prev) {
      valueNumber = 1;
      flex = "flex-end";
      if (direction == -1) {
        direction = 1;
        slider?.prepend(slider?.firstElementChild);
      }
    }
    slider?.style.justifyContent = flex;
    slider?.style.transform = `translate(${valueNumber * slider?.firstElementChild.clientWidth}px)`;
  });
}

slider?.addEventListener('transitionend', function () {

  if (direction === 1) {
    slider?.prepend(slider?.lastElementChild);
  } else {
    slider?.appendChild(slider?.firstElementChild);
  }

  slider?.style.transition = 'none';
  slider?.style.transform = 'translate(0)';
  setTimeout(() => {
    slider?.style.transition = 'all 0.5s';
  })
});

setInterval(() => {
  direction = -1;
  slider?.style.justifyContent = "flex-start";
  slider?.style.transform = `translate(${-slider?.firstElementChild.clientWidth}px)`;
}, 3000);

ClickButton(next);
ClickButton(prev);