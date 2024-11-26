import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Preview(props) {
  console.log(props.value);
  return (
    <div className="preview--container">
      <div className="preview--toolbar">
        <h4>Preview</h4>
      </div>
      <ReactMarkdown className="preview--space" remarkPlugins={[remarkGfm]}>
        {props.value}
      </ReactMarkdown>
    </div>
  );
}

export default Preview;
