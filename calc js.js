const display = document.getElementById('calcdisplay');
  function appendValue(value) {
    display.value += value;
  }
  function clearDisplay() {
    display.value = '';
  }
  function backspace() {
    display.value = display.value.slice(0, -1);
  }
  function square() {
    display.value = eval(display.value) ** 2;
  }
  function root() {
    display.value = eval(display.value) **0.5;
  }
  function calculate() {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    } 
  }