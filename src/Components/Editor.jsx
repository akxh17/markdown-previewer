import React from 'react'

function Editor(props) {
  return (
    <div className="editor--container">
      <div className="editor--toolbar">
        <h4>Editor</h4>
    </div>
      <textarea className="editor--space" value={props.value} onChange={props.handleChange}/>
    </div>
  )
}

export default Editor