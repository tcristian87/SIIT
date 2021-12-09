function logPersonDetails(firstName, lastName, gender, bmi) {
  return firstName + "|" + lastName + "|" + gender + "|" + bmi;
      }
      var firstName = "Jhon";
      var lastName = "Doe";
      var gender = "M";
      var bmi = (70 / (1.80 * 1.80))
          if (bmi < 18.5) {
              bmi = "Underweight";
          } else if (bmi === 18.5 || bmi < 25.0) {
              bmi = "Normal Weight";
          } else if (bmi === 25.0 || bmi <= 30.0) {
              bmi = "Overweight";
          } else {
              bmi = "Obese";
          }

var client11 = logPersonDetails(firstName, lastName, gender, bmi);
console.log(client11);

      var firstName = "Mary";
      var lastName = "Anne";
      var gender = "F";
      var bmi = (90 / (1.60 * 1.60))
          if (bmi < 18.5) {
              bmi = "Underweight";
          } else if (bmi === 18.5 || bmi < 25.0) {
              bmi = "Normal Weight";
          } else if (bmi === 25.0 || bmi <= 30.0) {
              bmi = "Overweight";
          } else {
              bmi = "Obese";
          };

var client22 = logPersonDetails(firstName, lastName, gender, bmi)
console.log(client22);