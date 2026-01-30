const bmi = 170;

let result = 18.5>bmi ? 'you are underweight.' :
                      bmi>=18.5 && bmi<=24.9 ? 'you are normal' :
                      bmi>=25 && bmi<=29.9 ? 'you are a overweight.' : 'you are obese.'

                      console.log(result);