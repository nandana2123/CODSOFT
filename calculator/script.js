document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector('input[name="display"]');
    const buttons = document.querySelectorAll('input[type="button"]');
    let resultDisplayed = false; // Flag to track if result is displayed
    
    // Event listener for all calculator buttons
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const value = this.value;
            
            switch (value) {
                case 'AC':
                    clearDisplay();
                    break;
                case 'DE':
                    deleteLast();
                    break;
                case '=':
                    calculateResult();
                    break;
                case '+':
                case '-':
                case '*':
                case '/':
                    appendOperator(value);
                    break;
                default:
                    if (resultDisplayed) {
                        clearDisplay(); // Clear display if result is already displayed
                        resultDisplayed = false; // Reset flag
                    }
                    appendDigit(value);
            }
        });
    });

    // Function to clear the display
    function clearDisplay() {
        display.value = '';
    }

    // Function to delete the last character
    function deleteLast() {
        display.value = display.value.slice(0, -1);
    }

    // Function to append a digit or decimal point
    function appendDigit(digit) {
        display.value += digit;
    }

    // Function to append an operator
    function appendOperator(operator) {
        const lastChar = display.value.slice(-1);
        if (lastChar !== '+' && lastChar !== '-' && lastChar !== '*' && lastChar !== '/') {
            display.value += operator;
        }
    }

    // Function to calculate the result
    function calculateResult() {
        try {
            const result = eval(display.value);
            display.value = result;
            resultDisplayed = true; // Set flag to true after displaying result
        } catch (error) {
            display.value = 'Error';
        }
    }
});
