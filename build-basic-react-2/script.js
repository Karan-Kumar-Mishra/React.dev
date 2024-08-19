let root = document.getElementById("root");

function createReactElement(elementObj) {
  let ReactElement = document.createElement(elementObj.type);
  for (let key in elementObj.props) {
    if (elementObj.props.hasOwnProperty(key)) {
      ReactElement.setAttribute(key, elementObj.props[key]);
    }
  }
  ReactElement.append(elementObj.child);
  root.append(ReactElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_black",
  },
  child: "Visit the google",
};

createReactElement(reactElement);
