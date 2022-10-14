//Calculator class which is inititated by passing in previous data and current data
//This also makes sure to clear the calculator when program is ran
class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
  }
//Clears calculator
  clear() {
    this.current = ""
    this.previous = ""
    this.operation = undefined
  }
//Deletes a number from calculator
  delete() {
    this.current = this.current.toString().slice(0, -1)
  }
//Adds a number to caclulator
  appendNumber(number) {
    if (number === "." && this.current.includes(".")) return
    this.current = this.current.toString() + number.toString()
  }

//Chooses an operation from calculator such as / * - +
  chooseOperation(operation) {
    if (this.current === "") return
    if (this.previous !== "") {
      this.compute()
    }
    this.operation = operation
    this.previous = this.current
    this.current = ""
  }
//Calculates Calculator based on input
  compute() {
    let computation
    const prev = parseFloat(this.previous)
    const current = parseFloat(this.current)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case "+":
        computation = prev + current
        break
      case "-":
        computation = prev - current
        break
      case "*":
        computation = prev * current
        break
      case "/":
        computation = prev / current
        break
      default:
        return
    }
    this.current = computation
    this.operation = undefined
    this.previous = ""
  }
//
  getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split(".")[0])
    const decimalDigits = stringNumber.split(".")[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ""
    } else {
      integerDisplay = integerDigits.toLocaleString("en", { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }
//
  updateDisplay() {
    this.currentOperandTextElement.innerText =
      this.getDisplayNumber(this.current)
    if (this.operation != null) {
      this.previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.previous)} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = ""
    }
  }
}

//Variables
const numberButtons = document.querySelectorAll("[data-number]")
const operationButtons = document.querySelectorAll("[data-operation]")
const equalsButton = document.querySelector("[data-equals]")
const deleteButton = document.querySelector("[data-delete]")
const clearButton = document.querySelector("[data-clear]")
const previousOperandTextElement = document.querySelector("[data-previous]")
const currentOperandTextElement = document.querySelector("[data-current]")
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)



//Adds functions for each button to execute on click

numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operationButtons.forEach(button => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equalsButton.addEventListener("click", button => {
  calculator.compute()
  calculator.updateDisplay()
})

clearButton.addEventListener("click", button => {
  calculator.clear()
  calculator.updateDisplay()
})

deleteButton.addEventListener("click", button => {
  calculator.delete()
  calculator.updateDisplay()
})
