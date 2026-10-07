const input = document.getElementById("ip");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.onclick = function () {
  const num = Number(input.value);

  new Promise((resolve) => {
    setTimeout(() => {
      output.innerText = `Result: ${num}`;
      resolve(num);
    }, 2000);
  })
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          result = result * 2;
          output.innerText = `Result: ${result}`;
          resolve(result);
        }, 2000);
      });
    })
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          result = result - 3;
          output.innerText = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          result = result / 2;
          output.innerText = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          result = result + 10;
          output.innerText = `Final Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    });
};