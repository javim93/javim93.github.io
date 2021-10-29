marked.setOptions({
  breaks: true,
  gfm : true
})

var placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder
    };
  };
  handleChange = (e) => {
    this.setState ({
      markdown: e.target.value
    });
  };
  render() {
    return (
      <div className="appWrapper">
        <div className="editorSection section">
          <Toolbar toolbarTitle="Editor" />
          <Editor
            markdown={this.state.markdown}
            onChange={this.handleChange}
          />
          <div className="signContainer">
            <p className="signText">
              Coded by&nbsp;
              <a className="sign" href="https://github.com/javim93">@javim93</a>
              &nbsp;for the front-end libraries course
            </p>
          </div>
        </div>
        <div className="previewSection section">
          <Toolbar toolbarTitle="Previewer" />
          <Previewer markdown={this.state.markdown} />
        </div>
      </div>
    );
  };
}

const Toolbar = (props) => {
  return (
    <div className="toolbar">
      {props.toolbarTitle}
    </div>
  );
};

const Editor = (props) => {
  return (
    <div className="editor">
      <textarea
        className="editorTextArea"
        value={props.markdown}
        onChange={props.onChange}
      />
    </div>
  );
};

const Previewer = (props) => {
  return (
    <div
      className="preview"
      dangerouslySetInnerHTML={{__html: marked(props.markdown, { sanitize: true })}}
    />
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));
