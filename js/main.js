//FECHA EN FOOTER
const fecha = new Date().getFullYear();
console.log(fecha)
document.getElementById('fecha').innerHTML = fecha;

//BARRA DE PROGRESO

const value = 98;
const minValue = 0;
const maxValue = 100;

const progress = Math.min(value / maxValue * 100, 100);

const barHeight = 16;
const pointerWidth = 16;
const indicatorWidth = value === 100 ? 50 :
  value >= 10 ? 40 :
    30;

const root = document.documentElement;

root.style.setProperty("--bar-height", barHeight + "px");
root.style.setProperty("--indicator-width", indicatorWidth + "px");
root.style.setProperty("--pointer-width", pointerWidth + "px");
root.style.setProperty("--progress", progress);
root.style.setProperty("--progress-percentage", progress + "%");

document.getElementById("indicator").textContent = progress + "%";
document.getElementById("min-value").textContent = minValue;
document.getElementById("max-value").textContent = maxValue;
