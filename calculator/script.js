const Inputs = {
  clear: "Delete",
  divide: "/",
  multiply: "*",
  delete: "Backspace",
  seven: "7",
  eight: "8",
  nine: "9",
  subtract: "-",
  four: "4",
  five: "5",
  six: "6",
  add: "+",
  one: "1",
  two: "2",
  three: "3",
  equals: "=",
  percent: "%",
  zero: "0",
  decimal: ".",
};

const operations = [
  Inputs.add,
  Inputs.subtract,
  Inputs.multiply,
  Inputs.divide,
  Inputs.percent,
  Inputs.equals,
  Inputs.delete,
  Inputs.clear,
];

const operationMap = {
  [Inputs.add]: "+",
  [Inputs.subtract]: "-",
  [Inputs.multiply]: "*",
  [Inputs.divide]: "/",
  [Inputs.equals]: "=",
};

const terminalOperations = [Inputs.equals, Inputs.clear, Inputs.percent];

let currentInput = "0";
let operationStack = [];
let lastInput = null;
let historyQueue = [];
let historyCounter = 0;

function constructOperatorSpan(operator, isSmall = false) {
  const span = document.createElement("span");
  span.classList.add("operator");
  if (isSmall) {
    span.classList.add("small");
  }
  span.textContent = operator;
  return span;
}

function constructOperandSpan(operand, isSmall = false) {
  const span = document.createElement("span");
  span.classList.add("operand");
  if (isSmall) {
    span.classList.add("small");
  }
  span.textContent = operand;
  return span;
}

function restoreHistoryEntity(historyId) {
  const historyEntity = historyQueue.find(
    (history) => Number(history.id) === Number(historyId)
  );

  if (!historyEntity) return;

  currentInput = historyEntity.result;
  operationStack = [
    ...historyEntity.stack,
    { type: "operator", value: Inputs.equals },
  ];
  lastInput = Inputs.equals;

  updateDisplay();
}

function onHistoryClick(event) {
  const historyId = event.target.dataset.id;
  restoreHistoryEntity(historyId);
}

function appendToDomHistory(historyEntity) {
  const { id: historyId, stack, result } = historyEntity;

  const noHistory = document.querySelector("#history-content > p");
  noHistory.classList.add("hidden");

  const clearHistoryButton = document.querySelector("#clear-history");
  clearHistoryButton.classList.remove("hidden");

  const historyList = document.querySelector("#history-list");

  const historyItem = document.createElement("li");
  historyItem.dataset.id = historyId;
  historyItem.style.cursor = "pointer";
  historyItem.addEventListener("click", onHistoryClick);

  const expression = document.createElement("div");
  expression.classList.add("expression");

  stack.forEach((operation) => {
    if (operation.type === "input") {
      expression.appendChild(constructOperandSpan(operation.value, true));
    } else {
      expression.appendChild(constructOperatorSpan(operation.value, true));
    }
  });

  historyItem.appendChild(expression);

  const resultDiv = document.createElement("div");
  resultDiv.classList.add("result", "small-result");
  resultDiv.textContent = result;
  historyItem.appendChild(resultDiv);

  historyList.appendChild(historyItem);
}

function pushToHistoryQueue(stack, result) {
  if (historyQueue.length === 20) {
    historyQueue.pop();
  }

  const historyEntity = {
    id: ++historyCounter,
    timestamp: new Date().toISOString(),
    stack: [...stack],
    result,
  };

  historyQueue = [historyEntity, ...historyQueue];
  appendToDomHistory(historyEntity);
}

function clearHistoryQueue() {
  historyQueue = [];
  historyCounter = 0;

  const noHistory = document.querySelector("#history-content > p");
  noHistory.classList.remove("hidden");

  const clearHistoryButton = document.querySelector("#clear-history");
  clearHistoryButton.classList.add("hidden");

  const historyList = document.querySelector("#history-list");
  while (historyList.firstChild) {
    historyList.removeChild(historyList.firstChild);
  }
}

function updateCurrentValue() {
  const result = document.querySelector("#result");
  result.textContent = currentInput;
}

function clearExpression(expression = document.querySelector("#expression")) {
  while (expression.firstChild) {
    expression.removeChild(expression.firstChild);
  }
}

function updateExpression() {
  const expression = document.querySelector("#expression");
  clearExpression(expression);
  operationStack.forEach((operation) => {
    if (operation.type === "input") {
      expression.appendChild(constructOperandSpan(operation.value));
    } else {
      expression.appendChild(constructOperatorSpan(operation.value));
    }
  });
}

function updateDisplay() {
  updateCurrentValue();
  updateExpression();
}

function clearInput() {
  currentInput = "0";
  operationStack = [];
  updateCurrentValue();
  clearExpression();
}

function calculateExpression(stack = operationStack) {
  if (stack.length === 0) return currentInput;
  const expression = stack.map((operation) => {
    if (operation.type === "input") {
      return operation.value;
    }
    return operation.value;
  });

  return `${eval(expression.join(""))}`;
}

function computeTillLastOperation(pushToHistory = false) {
  const currentStack = [...operationStack];
  const lastEntry = currentStack[currentStack.length - 1];
  if (lastEntry.type === "operator") {
    currentStack.pop();
  }
  const result = calculateExpression(currentStack);
  if (pushToHistory) {
    pushToHistoryQueue(currentStack, result);
  }
  return result;
}

function calculate() {
  if (operationStack.length === 0) return;
  const valueTillLastOperation = computeTillLastOperation();
  const lastOperator = operationStack.pop();
  if (lastInput === Inputs.equals) {
    const lastOperand = operationStack.pop();
    const lastOperator = operationStack.pop();
    operationStack = [
      { type: "input", value: valueTillLastOperation },
      lastOperator,
      lastOperand,
    ];
  } else {
    operationStack = [
      { type: "input", value: valueTillLastOperation },
      lastOperator,
      { type: "input", value: currentInput },
    ];
  }
  const result = calculateExpression();
  pushToHistoryQueue(operationStack, result);
  currentInput = result;
  operationStack.push({ type: "operator", value: Inputs.equals });
  updateDisplay();
}

function calculatePercentage() {
  const resultSoFar = computeTillLastOperation();
  currentInput = (resultSoFar * currentInput) / 100;
  updateCurrentValue();
}

function handleArithmeticOperation(operation) {
  const operationObject = {
    type: "operator",
    value: operation,
  };

  const currentInputObject = { type: "input", value: currentInput };

  if (operationStack.length === 0 || lastInput === Inputs.equals) {
    operationStack = [currentInputObject, operationObject];
  } else if (operations.includes(lastInput)) {
    operationStack.pop();
    operationStack.push(operationObject);
  } else {
    operationStack.push(currentInputObject, operationObject);
    const valueTillLastOperation = computeTillLastOperation(true);
    operationStack = [
      { type: "input", value: valueTillLastOperation },
      operationObject,
    ];
  }

  updateExpression();
}

function handleOperation(operation) {
  switch (operation) {
    case Inputs.delete:
      if (currentInput.length === 1) {
        currentInput = "0";
      } else {
        currentInput = currentInput.slice(0, -1);
      }
      updateCurrentValue();
      break;
    case Inputs.clear:
      clearInput();
      break;
    case Inputs.percent:
      calculatePercentage();
      break;
    case Inputs.equals:
      calculate();
      break;
    default:
      handleArithmeticOperation(operation);
      break;
  }
  lastInput = operation;
}

function appendOperationToStack(event) {
  const operation = event.target.dataset.input;
  handleOperation(operation);
}

function computeUpdatedValue(input) {
  if (operations.includes(lastInput)) {
    return input;
  }
  if (currentInput === "0" && input !== Inputs.decimal) {
    return input;
  }
  return currentInput + input;
}

function appendInput(value) {
  currentInput = computeUpdatedValue(value);
  updateCurrentValue();
  if (lastInput === Inputs.equals) {
    operationStack = [];
    updateExpression();
  }
  lastInput = value;
}

function appendInputOnClick(event) {
  const value = event.target.dataset.input;
  appendInput(value);
}

function onKeyPress(event) {
  const { key } = event;
  if (operations.includes(key)) {
    handleOperation(key);
  } else if (key === "Enter") {
    handleOperation(Inputs.equals);
  } else if (!isNaN(key)) {
    appendInput(key);
  } else if (key === Inputs.decimal) {
    appendInput(Inputs.decimal);
  } else {
    return;
  }
}

document.querySelectorAll(".value").forEach((button) => {
  button.addEventListener("click", appendInputOnClick);
});

document.querySelectorAll(".action").forEach((button) => {
  button.addEventListener("click", appendOperationToStack);
});

document.addEventListener("DOMContentLoaded", () => {
  updateDisplay();
});

document.addEventListener("keydown", onKeyPress);

document
  .querySelector("#clear-history")
  .addEventListener("click", clearHistoryQueue);
