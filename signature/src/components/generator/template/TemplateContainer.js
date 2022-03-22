import { useRef } from "react";
import PersonalDetail from "./PersonalDetail";
import LincoCareLogo from "./LincoCareLogo";
import Banner from "./Banner";
import Sedex from "./Sedex";

export default function Template(props) {
  const sign = useRef(null);
  const codePlaceHolder = useRef(null);
  function handleClick() {
    console.log(sign.current);
    const code = sign.current.cloneNode(true);
    console.log(code);
    console.log(codePlaceHolder.current);
    codePlaceHolder.current.innerHTML = code.innerHTML;
  }

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
            <font style={style.textSize}>
              Committed to being a responsible and sustainable business.
            </font>
          </td>
        </table>
        <table
          cellpadding="0"
          cellspacing="0"
          border="0"
          style={style.VerticalAlignTop}
        >
          <tbody>
            <td>
              <font>
                <div style={style.border}></div>
              </font>
            </td>
          </tbody>
        </table>
        <table cellpadding="0" cellspacing="0" border="0">
          <tbody style={style.VerticalAlignTop}>
            <td style={style.floatLeft}>
              <font style={style.bottomTextSize}>
                <a href="https://lincocare.com">lincocare.com</a>
              </font>
            </td>
            <td align="right" valign="bottom" style={style.floatRight}>
              <img
                alt="social"
                src="https://lincocare.s3.eu-west-2.amazonaws.com/lincocare-signature/social.png"
              />
              <font style={style.bottomTextSize}>@lincocare</font>
            </td>
          </tbody>
        </table>
      </table>
      <button className="GenerateButton" onClick={handleClick}>
        Generate HTML code
      </button>
      <textarea ref={codePlaceHolder}></textarea>
    </div>
  );
}
