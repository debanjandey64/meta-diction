import ld from "lodash";

export const performTask = (action, input, outputTextArea) => {
  const output = action(input);
  outputTextArea.current.innerHTML = output;
};

const getReversedItem = (input, inp_delim = "\n", out_delim = "\n") => {
  return input.split(inp_delim).reverse().join(out_delim);
};

const wrapText = (text, maxLength) => {
  const words = text.split(/\s+/);
  const lines = [];
  let currentLine = "";

  for (const word of words) {
    // If adding the word exceeds the limit, push current line
    if ((currentLine + " " + word).trim().length > maxLength) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = currentLine ? currentLine + " " + word : word;
    }
  }

  // Push remaining text
  if (currentLine) {
    lines.push(currentLine);
  }

  return lines.join("\n");
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
  textManipulation: {
    trimText: {
      title: "Trim Text",
      action: (input) => input.trim(),
    },
    wrapText: {
      title: "Wrap Text",
      action: (input) => {
        const delim = document.querySelector(`#maxLength`).value;
        return wrapText(input, delim);
      },
      options: {
        maxLength: {
          title: "Enter maximum text length in a line",
          type: "text",
        },
      },
    },
    splitTextToList: {
      title: "Split Text to List",
      action: (input) => {
        const delim = document.querySelector(`#delim`).value;
        return getReversedItem(input, delim);
      },
      options: {
        delim: {
          title: "Enter delimiter",
          type: "text",
        },
      },
    },
    reverseText: {
      title: "Reverse Text",
      action: (input) => {
        const delim = document.querySelector(`#delim`).value;
        return getReversedItem(input, delim, delim);
      },
      options: {
        delim: {
          title: "Enter delimiter",
          type: "text",
        },
      },
    },
  },
  listManipulation: {
    reverseList: {
      title: "Reverse List",
      action: (input) => getReversedItem(input),
    },
    joinList: {
      title: "Join List",
      action: (input) => {
        const delim = document.querySelector(`#delim`).value;
        return getReversedItem(input, "\n", delim);
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
