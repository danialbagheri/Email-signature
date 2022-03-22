import React from "react";

export default function PersonalDetail(props) {
  const formData = props.formData;
  const documentStyles = {
    fullNameFont: {
      color: "#333333",
      fontSize: "15pt",
      fontFamily: "Arial",
      letterSpacing: 0,
      fontWeight: 600,
    },
    personalDetailFont: {
      color: "#333333",
      fontSize: "10pt",
      fontFamily: "Arial",
    },
    rowShortGap: {
      fontFamily: "Arial",
      paddingBottom: "5px",
      fontSize: "12pt",
    },
  };
  return (
    <table cellpadding="0" cellspacing="0" border="0">
      <tbody>
        <tr style={documentStyles.rowShortGap}>
          <td>
            <font style={documentStyles.fullNameFont} id="name">
              {formData.name}
            </font>
          </td>
        </tr>
        <tr style={documentStyles.rowShortGap}>
          <td>
            <font style={documentStyles.personalDetailFont} id="role">
              {formData.position}
            </font>
          </td>
        </tr>

        <tr>
          <td>
            <font style={documentStyles.personalDetailFont}>
              <a href="tel:+44(0)1617779229">+44(0)1617779229</a>
            </font>
            <font style={documentStyles.personalDetailFont} id="extension">
              &nbsp;EXT:&nbsp;{formData.extension}
            </font>
          </td>
        </tr>
        {formData.showMobile && (
          <tr style={documentStyles.rowShortGap}>
            <td>
              <font style={documentStyles.personalDetailFont}>
                <a href="tel:+44(0)1617779229">{formData.mobile}</a>
              </font>
            </td>
          </tr>
        )}
        {formData.showSkype && (
          <tr style={documentStyles.rowShortGap}>
            <td>
              <font style={documentStyles.personalDetailFont}>
                Skype ID: {formData.skype}
              </font>
            </td>
          </tr>
        )}
        {formData.email && (
          <tr style={documentStyles.rowShortGap}>
            <td>
              <font style={documentStyles.personalDetailFont}>
                <a href={`mailto:${formData.emailAddress}`} id="email">
                  {formData.emailAddress}
                </a>
              </font>
            </td>
          </tr>
        )}
        {formData.showWeb && (
          <tr style={documentStyles.rowShortGap}>
            <td>
              <font style={documentStyles.personalDetailFont}>
                <a href="http://lincocare.com">lincocare.com</a>
              </font>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
