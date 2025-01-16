import React from "react";
import "codemirror/addon/edit/closebrackets";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import { Controlled as CodeMirror } from "react-codemirror2";

export default function Editor(props) {
  const { language, displayName, onChange, value } = props;

  function handleChange(editor, data, value) {
    onChange(value);
  }
  return (
    <div className="editor-container">
      <div className="editor-title">
        {displayName}
        <button>O/C</button>
      </div>
      <CodeMirror
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "material",
          lineNumbers: true,
        }}
      />
    </div>
  );
}
