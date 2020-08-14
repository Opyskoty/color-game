$(() => {
  $(".make-color").on("click", function (evt) {
    let target = evt.target;
    $(".randomColor").text(randomRgb());
  });
});


const randomRgb = () => {
  const r = randNum();
  const g = randNum();
  const b = randNum();
  return `rgb(${r},${g},${b})`
}

const randNum = () => {
  let num = Math.floor(Math.random() * (255 - 0 + 1));
  return num;
}