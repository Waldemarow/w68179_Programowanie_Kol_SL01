const lights = document.querySelectorAll('.light');
let currentLight = 0;

function changeColor() {
  lights[currentLight].classList.remove(getColor(currentLight));
  currentLight = (currentLight + 1) % lights.length;
  lights[currentLight].classList.add(getColor(currentLight));
}

function getColor(lightIndex) {
  if (lightIndex === 0) {
    return 'red';
  } else if (lightIndex === 1) {
    return 'yellow';
  } else {
    return 'green';
  }
}


// Event listeners for manual color change on click
lights.forEach(light => {
  light.addEventListener('click', () => {
    lights[currentLight].classList.remove(getColor(currentLight));
    currentLight = Array.from(lights).indexOf(light);
    lights[currentLight].classList.add(getColor(currentLight));
  });
});