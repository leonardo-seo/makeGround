<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Today Calculator</title>
</head>

<body>
  <script>

    // A function that tells you how many days have passed since you were born
    function howDayAreYou() {

      let name = prompt('what your name?');
      let then = new Date(prompt('when did you born? (month/day/year)'));
      let now = new Date();
      let gap = now.getTime() - then.getTime();
      gap = Math.floor(gap / (1000 * 60 * 60 * 24));
      // console.log(`오늘은 ${name}이(가) 태어난지 ${gap}일째 되는 날이에요..!`);
      console.log(`Today is the ${gap}th day ${name} was born.`);

    }

    howDayAreYou();
  
  </script>
</body>

</html>
