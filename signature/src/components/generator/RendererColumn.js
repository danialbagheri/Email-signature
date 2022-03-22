import React from "react";
import Template from "./template/TemplateContainer";

export default function RendererColumn(props) {
  return (
    <div className="Preview">
      <h5>Preview</h5>
      <Template formData={props.formData} />
    </div>
  );
}
