import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import './style.css';

const placeholder = `# Welcome to my React Markdown Previewer!

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

There's also [links](https://www.freecodecamp.com), and
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


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

marked.setOptions({
    breaks: true
  });
const renderer=new marked.Renderer();

function App(){
    const [text,setText]=React.useState(placeholder);
    return(
        <div className="text-center">
            <h1 className="p-4">My Markdown Previewer</h1>
            <textarea
                name="text"
                id="text"
                rows="10"
                value={text}
                className="textarea"
                onChange={(e)=>setText(e.target.value)}
            ></textarea>
            <h3 className="mt-3">Output</h3>
            <Preview markdown={text}/>
        </div>
    )
};
function Preview({markdown}){
    return(
        <div
        dangerouslySetInnerHTML={{
            __html: marked(markdown, { renderer: renderer })
          }}
          id="preview"
        >
        </div>
    );
}

ReactDOM.render(<App/>,document.getElementById("root"));

