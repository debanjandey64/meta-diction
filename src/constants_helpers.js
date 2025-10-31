import ld from "lodash";

export const performTask = (action, input, outputTextArea) => {
  const output = action(input);
  outputTextArea.current.innerHTML = output;
};

export const changeToUpperCase = (input, outputTextArea) => {
  const output = input.toUpperCase();
  outputTextArea.current.innerHTML = output;
};

export const changeToLowerCase = (input, outputTextArea) => {
  const output = input.toLowerCase();
  outputTextArea.current.innerHTML = output;
};

export const changeToTitleCase = (input, outputTextArea) => {
  const output = input.replace(
    /\w\S*/g,
    (str) => str.charAt(0).toUpperCase() + str.substring(1).toLowerCase()
  );
  outputTextArea.current.innerHTML = output;
};

export const changeToCamelCase = (input, outputTextArea) => {
  const output = ld.camelCase(input);
  outputTextArea.current.innerHTML = output;
};

export const changeToPascalCase = (input, outputTextArea) => {
  const output =
    input.charAt(0).toUpperCase() + ld.camelCase(input.substring(1));
  outputTextArea.current.innerHTML = output;
};

export const changeToKebabCase = (input, outputTextArea) => {
  const output = ld.kebabCase(input);
  outputTextArea.current.innerHTML = output;
};

export const changeToSnakeCase = (input, outputTextArea) => {
  const output = ld.snakeCase(input);
  outputTextArea.current.innerHTML = output;
};

export const trimText = (input, outputTextArea) => {
  const output = input.trim();
  outputTextArea.current.innerHTML = output;
};

export const reverseText = (input, outputTextArea, delim = "") => {
  const output = input.split(delim).reverse().join(delim);
  outputTextArea.current.innerHTML = output;
};

export const ACTION_CLASS_METHODS = {
  caseConversions: {
    changeToUpperCase: {
      title: "Upper Case",
      action: (input) => input.toUpperCase(),
    },
    changeToLowerCase: {
      title: "Lower Case",
      action: (input) => input.toLowerCase(),
    },
    changeToTitleCase: {
      title: "Title Case",
      action: (input) =>
        input.replace(
          /\w\S*/g,
          (str) => str.charAt(0).toUpperCase() + str.substring(1).toLowerCase()
        ),
    },
    changeToCamelCase: {
      title: "Camel Case",
      action: (input) => ld.camelCase(input),
    },
    changeToPascalCase: {
      title: "Pascal Case",
      action: (input) =>
        input.charAt(0).toUpperCase() + ld.camelCase(input.substring(1)),
    },
    changeToKebabCase: {
      title: "Kebab Case",
      action: (input) => ld.kebabCase(input),
    },
    changeToSnakeCase: {
      title: "Snake Case",
      action: (input) => ld.snakeCase(input),
    },
  },
  others: {
    trimText: {
      title: "Trim Text",
      action: (input) => input.trim(),
    },
    reverseText: {
      title: "Reverse Text",
      action: (input) => {
        const delim = document.querySelector(`#delim`).value;
        return input.split(delim).reverse().join(delim);
      },
      options: {
        delim: {
          title: "Enter delimiter",
          type: "text",
        },
      },
    },
  },
};
