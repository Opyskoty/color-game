let chosenColor;

//generate a color based on random rbg code
const randomRgb = () => {
  const r = randNum(0, 255);
  const g = randNum(0, 255);
  const b = randNum(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
};

//finds a random number between two numbers
const randNum = (min, max) => {
  let num = min + Math.floor(Math.random() * (max - min + 1));
  return num;
};

//create the grid
const fillColorTable = () => {
  for (let i = 0; i < 2; i++) {
    let $tr = $("<tr>");
    for (let j = 0; j < 3; j++) {
      $tr.append($("<td>").addClass(`box`));
    }
    $(".color-grid").append($tr);
  }
};

//color squares and pick the matched square
const fillSquaresAndPickMatch = () => {
  let colorMatchIdx = randNum(0, 5);
  let tdArr = $("td").get();
  tdArr.forEach((td) => $(td).css("background-color", randomRgb()));
  let colorMatch = tdArr[colorMatchIdx];
  $(colorMatch).css("background-color", chosenColor);
};

//check for winner;
$(".color-grid").on("click", ".box", function (evt) {
  if ($(evt.target).css("background-color") === chosenColor) {
    $("#myModal").modal("show");
  } else {
    $(".alert").removeClass("hidden");

    setTimeout(function () {
      $(".alert").addClass("hidden");
    }, 1000);
  }
});

//restart game from modal:
$(".restartModal").on("click", function () {
  $("#myModal").modal("hide");
  location.reload();
});

//restart game from container:
$(".game-buttons").on("click", ".restartGame", function () {
  location.reload();
});

$(() => {
  fillColorTable();
});

  $(".make-color").on("click", function () {
    $(".randomColor").text(randomRgb());
    chosenColor = $(".randomColor").text();
    fillSquaresAndPickMatch();
    $(".make-color").prop("disabled", true);
    let $restartBtn = $(
      `<button type="button" class="btn btn-warning restartGame">Restart</button>`
    );
    $(".game-buttons").append($restartBtn);
  });
