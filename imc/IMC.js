function bodyMassIndex(weight, height) {
   let imc = weight / (height * height);

    if (imc < 18.5) {
        return "Underweight";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Normal weight";
    }else if (imc >= 25 && imc <= 29.9) {
        return "Overweight";
    } else if (imc >= 30) {
        return "Obesity";
    }
}

bodyMassIndex(75,1.70)