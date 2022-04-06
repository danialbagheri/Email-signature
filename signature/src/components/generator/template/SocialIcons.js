import React from "react";

export default function SocialIcons() {
  const socialStyle = {
    ImageSocial: {
      marginRight: "20px",
    },
  };
  return (
    <div className="">
      <a href="https://www.facebook.com/lincocare">
        <img
          alt="social"
          src="https://lincocare.s3.eu-west-2.amazonaws.com/lincocare-signature/social/fb.png"
          style={{ marginRight: "5px" }}
        />
      </a>
      <a href="https://www.youtube.com/channel/UCl0-N0lOSjoPYlc26LN-6mA">
        <img
          alt="social"
          src="https://lincocare.s3.eu-west-2.amazonaws.com/lincocare-signature/social/utube.png"
          style={{ marginRight: "5px" }}
        />
      </a>
      <a href="https://twitter.com/lincocare">
        <img
          alt="social"
          src="https://lincocare.s3.eu-west-2.amazonaws.com/lincocare-signature/social/twitter.png"
          style={{ marginRight: "5px" }}
        />
      </a>
      <a href="https://www.instagram.com/lincocare_/">
        <img
          alt="social"
          src="https://lincocare.s3.eu-west-2.amazonaws.com/lincocare-signature/social/insta.png"
          style={{ marginRight: "5px" }}
        />
      </a>
      <a href="https://www.linkedin.com/company/4036008">
        <img
          alt="social"
          src="https://lincocare.s3.eu-west-2.amazonaws.com/lincocare-signature/social/linkedin.png"
          style={{ marginRight: "5px" }}
        />
      </a>
    </div>
  );
}
