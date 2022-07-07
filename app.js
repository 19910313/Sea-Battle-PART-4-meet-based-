let layers = [
  {
    ship: false,
    torpedo: false,
    explosion: false,
  },
  {
    ship: false,
    torpedo: false,
    explosion: false,
  },
  {
    ship: false,
    torpedo: false,
    explosion: false,
  },
  {
    ship: false,
    torpedo: false,
    explosion: false,
  },
  {
    ship: false,
    torpedo: false,
    explosion: false,
  },
  {
    ship: true,
    torpedo: false,
    explosion: false,
  },
  {
    ship: false,
    torpedo: true,
    explosion: false,
  },
  {
    ship: false,
    torpedo: false,
    explosion: false,
  },
  {
    ship: false,
    torpedo: false,
    explosion: false,
  },
  {
    ship: false,
    torpedo: false,
    explosion: false,
  },
];

const render = () => {
  let seaDiv = document.querySelector(".sea");
  for (let i = 0; i <= 9; i++) {
    let objects = ``;

    if (layers[i].ship) {
      objects += `
        <div class="ship">
          <div class="ship-top"></div>
          <div class="ship-radar">
            <div class="ship-radar-1">
              <div class="ship-radar-2"></div>
            </div>
          </div>
          <div class="ship-staf2"></div>
          <div class="ship-staf1">
            <div class="top-weapon"></div>
          </div>
          <div class="ship-equipment">
            <div class="front-weapon"></div>
            <div class="end-weapon"></div>
            <div class="ship-equipment-store"></div>

            <div></div>
          </div>
          <div class="ship-body"></div>
        </div>
        `;
    }
    if (layers[i].torpedo) {
      objects += `
        <div class="torpedo">
          <div class="head center"></div>
          <div class="body center"></div>
          <div class="tail center"></div>
          <div class="tail-h center"></div>
          <div class="tail-v center"></div>
        </div>
        `;
    }
    if ((layers[i].torpedo == true) & (layers[i].ship == true)) {
      objects += `
        <div class="explosion">
          <div class="fire-bottom-sm"></div>
          <div class="fire-bottom-md"></div>
        </div>
        `;
    }
    seaDiv.innerHTML += ` 
  <div class="layer">
        ${objects}
          <div class="wave"></div>
    </div>`;
  }
};

render();
