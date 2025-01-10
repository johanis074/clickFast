const { JSDOM } = require("jsdom");

const { window } = new JSDOM(
  `
  <div>
    <button id="button-clicker">Click !!!</button>
    <div id="counter">0</div>
  </div>
  `
);

global.document = window.document;

let count = 0;

document
  .getElementById("button-clicker")
  .addEventListener("click", () => {
    count++;
    document.getElementById("counter").innerHTML = count;
  });

describe("Button Clicker", () => {
  beforeEach(() => {
    count = 0;
    document.getElementById("counter").innerHTML = count;
  });

  test("devrait augmenter counter de 1 apres chaque clic", () => {
    const button = document.getElementById("button-clicker");

    button.click();
    expect(document.getElementById("counter").innerHTML).toBe("1");

    button.click();
    expect(document.getElementById("counter").innerHTML).toBe("2");

    button.click();
    button.click();
    button.click();
    button.click();
    expect(document.getElementById("counter").innerHTML).toBe("6");
  });

  test("devrait initialiser counter a 0", () => {
    expect(document.getElementById("counter").innerHTML).toBe("0");
  });
});


 test("Vérifiez que le score ne s'incrémente pas après la fin du timer", (done) => {
  const button = document.getElementById("button-clicker");


  button.click();
  expect(document.getElementById("counter").innerHTML).toBe("1");
  setTimeout(() => {
    button.click();
    expect(document.getElementById("counter").innerHTML).toBe("2");
    done();
  }, 1000); 
});

test("Vérifiez que le bouton de réinitialisation remet le score à zéro", () => {
  const button = document.getElementById("button-clicker");
  const resetButton = document.createElement("button");
  resetButton.id = "reset-button";
  resetButton.innerHTML = "Reset";
  document.body.appendChild(resetButton);

  button.click();
  button.click();
  expect(document.getElementById("counter").innerHTML).toBe("4");

  expect(Number(document.getElementById("counter").innerHTML)).toBeGreaterThan(2);

  resetButton.click();
  expect(document.getElementById("counter").innerHTML).toBe("4");
});