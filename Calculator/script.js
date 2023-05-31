    let result = document.getElementById('result');
    let calculation = '';

    function appendNumber(number) {
      calculation += number;
      result.textContent = calculation;
    }

    function appendOperator(operator) {
      calculation += operator;
      result.textContent = calculation;
    }

    function appendDecimal(decimal) {
      if (!calculation.includes(decimal)) {
        calculation += decimal;
        result.textContent = calculation;
      }
    }

    function calculate() {
      try {
        const answer = eval(calculation);
        result.textContent = answer;
        calculation = answer.toString();
      } catch (error) {
        result.textContent = 'Error';
        calculation = '';
      }
    }

    function clearResult() {
      result.textContent = '0';
      calculation = '';
    }
