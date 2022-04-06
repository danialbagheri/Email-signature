import { useRef, useState, useEffect } from "react";
import PersonalDetail from "./PersonalDetail";
import LincoCareLogo from "./LincoCareLogo";
import Banner from "./Banner";
import Sedex from "./Sedex";
import SocialIcons from "./SocialIcons";

export default function Template(props) {
  const [copied, setCopied] = useState(false);
  const sign = useRef(null);
  const codePlaceHolder = useRef(null);
  function handleClick() {
    const code = sign.current.cloneNode(true);
    codePlaceHolder.current.innerHTML = code.innerHTML;
  }
  const copyToClipboard = () => {
    // let copyText = document.querySelector(".signature");
    const code = sign.current;
    const range = document.createRange();
    if (code) {
      range.selectNode(code);
    }
    const windowSelection = window.getSelection();
    if (windowSelection) {
      windowSelection.removeAllRanges();
      windowSelection.addRange(range);
    }
    try {
      let successful = document.execCommand("copy");
      console.log(successful ? "Success" : "Fail");
      setCopied(true);
    } catch (err) {
      setCopied(false);
      console.log("Fail");
    }
  };

  useEffect(() => {
    setCopied(false);
  }, [props.formData]);
  const style = {
    lincoCareLogo: {
      verticalAlign: "bottom",
      paddingRight: "15pt",
      borderRight: "2px solid #214390",
    },
    PersonalDetail: {
      paddingLeft: "8px",
    },
    Banner: {
      marginTop: "9px",
      marginBottom: "4px",
    },
    textSize: {
      color: "#333333",
      fontSize: "8pt",
      fontFamily: "Arial",
    },
    bottomTextSize: {
      color: "#333333",
      fontSize: "10pt",
      fontFamily: "Arial",
      paddingLeft: "7pt",
    },
    VerticalAlignTop: {
      verticalAlign: "top",
      marginTop: "3pt",
    },
    floatLeft: {
      minWidth: "150pt",
    },
    floatRight: {
      minWidth: "200pt",
      textAlign: "right !important",
    },
    border: {
      marginTop: "9px",
      width: "470px",
      margin: "5px",
      backgroundColor: "#214390",
      height: "2px",
    },
  };
  return (
    <div style={{ marginTop: "30px" }}>
      <table cellpadding="0" cellspacing="0" border="0" ref={sign}>
        <table cellpadding="0" cellspacing="0" border="0">
          <td style={style.lincoCareLogo}>
            <LincoCareLogo />
          </td>
          <td style={style.PersonalDetail}>
            <PersonalDetail formData={props.formData} />
          </td>
        </table>
        <table cellpadding="0" cellspacing="0" border="0" style={style.Banner}>
          <td>
            <Banner />
          </td>
        </table>
        <table cellpadding="0" cellspacing="0" border="0">
          <td style={style.floatLeft}>
            <Sedex />
          </td>
          <td align="right" style={style.floatRight}>
            <SocialIcons />
          </td>
        </table>
      </table>
      <button className="GenerateButton mt-4" onClick={handleClick}>
        Generate HTML code
      </button>
      <button className="GenerateButton" onClick={copyToClipboard}>
        {copied ? "Copied " : "Copy it to your clipboard"}
      </button>
      <textarea ref={codePlaceHolder}></textarea>
      <p>
        <a
          href="https://support.microsoft.com/en-us/office/create-and-add-an-email-signature-in-outlook-com-776d9006-abdf-444e-b5b7-a61821dff034"
          target="_blank"
          rel="noreferrer"
        >
          Learn how to add a signature in Outlook.com
        </a>
        <br />
        <a
          href="https://www.cnet.com/tech/services-and-software/how-to-add-a-signature-to-microsoft-outlook-emails/"
          target="_blank"
          rel="noreferrer"
        >
          Learn how to add a signature in Outlook emails
        </a>
        <br />
        <a
          href="https://support.apple.com/en-gb/guide/mail/mail11943/mac"
          target="_blank"
          rel="noreferrer"
        >
          Learn how to add a signature in Mail on Mac
        </a>
      </p>
    </div>
  );
}
