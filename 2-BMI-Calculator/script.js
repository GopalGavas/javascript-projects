const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector(".result");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = "Please give a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Please give a valid weight";
  } else {
    const BMI = (weight / (height / 100) ** 2).toFixed(2);

    if (BMI < 18.6) {
      result.innerHTML = `Your BMI is ${BMI}, You are Underweight`;
    }
    if (BMI >= 18.6 && BMI <= 24.9) {
      result.innerHTML = `Your BMI is ${BMI}, You are in Normal Range`;
    }
    if (BMI > 24.9) {
      result.innerHTML = `Your BMI is ${BMI}, You are Overweight`;
    }
  }
});
