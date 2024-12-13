let poets = [];
let flatPoems = [];
let currentIndex = 0;

fetch("./assets/data/poets.json")
  .then((response) => response.json())
  .then((data) => {
    poets = data.poets;

    poets.forEach((poet) => {
      poet.poems.forEach((poem) => {
        flatPoems.push({
          name: poet.name,
          poem: poem,
        });
      });
    });

    displayPoem();
  });

function displayPoem() {
  if (currentIndex >= flatPoems.length) {
    document.getElementById("poet-name").innerText = "اتمام";
    document.getElementById("poem-text").innerText =
      "تمام اشعار نمایش داده شدند.";
    document.getElementById("next-btn").disabled = true;
    return;
  }

  const { name, poem } = flatPoems[currentIndex];
  document.getElementById("poet-name").innerText = name;
  document.getElementById("poem-text").innerText = poem;
}

document.getElementById("next-btn").addEventListener("click", () => {
  currentIndex++;
  displayPoem();
});
