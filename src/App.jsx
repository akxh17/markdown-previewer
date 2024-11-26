import { useState } from "react";
import Editor from "./Components/Editor";
import Preview from "./Components/Preview";

function App() {
  const [code, setCode] = useState(`# Welcome to Markdown Editor

## Features

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least

### Some Formatting

You can also make text **bold**... whoa!

Or _italic_.

Or... wait for it... **_both!_**

And feel free to go crazy ~~crossing stuff out~~.

> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.
`);

  function handleChange(event){
    setCode(event.target.value)
  }
  return (
    <div>
      <div>
        <Editor value={code} handleChange={handleChange}/>
      </div>
      <div>
        <Preview value={code}/>
      </div>
    </div>
  );
}

export default App;
