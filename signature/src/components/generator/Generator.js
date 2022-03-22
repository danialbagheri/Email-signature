import React from "react";
import RendererColumn from "./RendererColumn";

export default function Generator() {
  const [formData, setFormData] = React.useState({
    list: {
      name: "John Smith",
      position: "Manager",
      extension: "123",
      mobile: "+44 (0) 799 999 998",
      showMobile: false,
      emailAddress: "john.smith@lincocare.com",
      email: true,
      showWeb: true,
      skype: "@lincocare",
      showSkype: false,
    },
  });

  function handleChange(e) {
    let { name, value } = e.target;
    console.log("value", value);
    console.log("checked", e.target.checked);
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }
    setFormData((prevState) => ({
      list: {
        ...prevState.list,
        [name]: value,
      },
    }));
  }
  return (
    <div className="GeneratorContainer">
      <div className="Form">
        <h5>Your detail</h5>
        <div className="FormInput">
          <label>Full Name</label>
          <input
            name="name"
            placeholder="Full Name"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="FormInput">
          <label>Job Position</label>
          <input
            name="position"
            placeholder="Job Position"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="FormInput">
          <label>Mobile Number</label>
          <input
            name="mobile"
            placeholder="+44 (0) 799 999 998"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="FormInput">
          <label>Show mobile</label>
          <input
            name="showMobile"
            type="checkbox"
            onChange={(e) => handleChange(e)}
            checked={formData.list.showMobile}
          />
        </div>
        <div className="FormInput">
          <label>Extension number</label>
          <input
            name="extension"
            placeholder="182"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="FormInput">
          <label>Skype</label>
          <input
            name="skype"
            placeholder="@lincocare"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="FormInput">
          <label>Show Skype</label>
          <input
            name="showSkype"
            type="checkbox"
            onChange={(e) => handleChange(e)}
            checked={formData.list.showSkype}
          />
        </div>
        <div className="FormInput">
          <label>Email Address</label>
          <input
            name="emailAddress"
            placeholder="182"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="FormInput">
          <label>Show Email</label>
          <input
            name="email"
            type="checkbox"
            onChange={(e) => handleChange(e)}
            checked={formData.list.email}
          />
        </div>
        <div className="FormInput">
          <label>Show website</label>
          <input
            name="showWeb"
            type="checkbox"
            onChange={(e) => handleChange(e)}
            checked={formData.list.showWeb}
          />
        </div>
      </div>
      <RendererColumn formData={formData.list} />
    </div>
  );
}
