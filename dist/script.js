function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const initialMarkdown = `
### Headers

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

### List

- list item one
- list item two
- list item three

### Links

[FreeCodeCamp](https://learn.freecodecamp.org)

### Text Decorations

*italic*

**bold**

***bold and italic***

### Images

![alt text](https://www.motorwerks.com/inventoryphotos/4857/wp0ac2a91js175710/ip/7.jpg?height=400 'Porsche GT3')

### Blockquote

> To be, or not to be.

### Code
\`npm install create-react-app -g\`

\`\`\`
function addTwoNumbers(a, b) {
  return a + b
}
const name = 'John'
const age = 21

\`\`\`
`;
var renderer = new marked.Renderer();

renderer.link = function (href, title, text) {
  return `<a href=${href} target="_blank">${text}</a>`;
};

marked.setOptions({
  renderer,
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  },
  breaks: true });


class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleChange",






    e => this.setState({ markdown: e.target.value }));this.state = { markdown: initialMarkdown };}

  render() {
    return (
      React.createElement("div", null,
      React.createElement("div", null,
      React.createElement("h1", null, "Markdown Previewer")),

      React.createElement("div", { className: "container" },
      React.createElement("div", { className: "left" },
      React.createElement("textarea", { id: "editor", value: this.state.markdown, onChange: this.handleChange })),

      React.createElement("div", { className: "right" },
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked(this.state.markdown) } })))));




  }}


ReactDOM.render(React.createElement(App, null), document.getElementById('root'));