(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#add').click(toAdd);
    $('#minus').click(toMinus);
    $('#divide').click(toDivide);
    $('#multiply').click(toMultiply);
    $('#expon').click(toExpon);
    $('#fact').click(toFactor);
    $('#root').click(toRoot);
  }

  function getNumbers(){
    var x = $('#num1').val() * 1;
    var y = $('#num2').val() * 1;
    var z = $('#num3').val() * 1;
    return [x, y, z];
  }

  function toAdd(){
    var numbers = getNumbers();
    var answer = numbers[0] + numbers[1];
    $('#answer').text(answer);
  }

  function toMinus(){
    var numbers = getNumbers();
    var answer = numbers[0] - numbers[1];
    $('#answer').text(answer);
  }

  function toDivide(){
    var numbers = getNumbers();
    var answer = numbers[0] / numbers[1];
    $('#answer').text(answer);
  }

  function toMultiply(){
    var numbers = getNumbers();
    var answer = numbers[0] * numbers[1];
    $('#answer').text(answer);
  }

  function toExpon(){
    var numbers = getNumbers();
    var answer = Math.pow(numbers[0], numbers[1]);
    $('#answer').text(answer);
  }

  function toFactor(){
    var numbers = getNumbers();
    var answer = numbers[2];
    for (var i = numbers[2]; i > 1 ; i--){
    answer = answer * (i-1);
    }
    $('#answer2').text(answer);
  }

  function toRoot(){
    var numbers = getNumbers();
    var answer = Math.sqrt(numbers[2]);
    $('#answer2').text(answer);
  }

})();
