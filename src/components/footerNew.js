import React from "react";

export default function Footer({ footer }) {
  const { address, phone, contactEmail, footerLinks, footerLogo } = footer;
  console.log("$$FooterLogo$$", footerLogo);
  return (
    <footer>
      <div className="wrapper">
        <div className="row">
          <div className="col-4">
            <div className="footer_logo">
              <a href="/" className="logo" title="logo">
                <img
                  src={
                    footerLogo.childImageSharp
                      ? footerLogo.childImageSharp.fluid.src
                      : footerLogo.url
                  }
                  alt="Shoptalk Meetup"
                />
              </a>
            </div>
          </div>
          <div className="col-4">
            <div className="poweredBy">
              <a
                href="https://www.personatech.com"
                title="Personatech"
                target="_blank"></a>
            </div>
          </div>
          <div className="col-4">
            <div className="footer-links">
              {footerLinks.map((l) => (
                <div>
                  <a href={l.link} rel="noopener noreferrer">
                    {l.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="contact-details text-center">
          <ul className="list-inline">
            <li>© Retail Meetup, LLC</li>
            <li className="contact">{address}</li>
            <li className="contact">
              <a
                href="mailto:hey@retailmeetup.com "
                className="mailLink"
                title="Email Us">
                {contactEmail}
              </a>
            </li>
            <li className="contact">
              <a href={`tel:${phone}`}>{phone}</a>
            </li>
          </ul>
          <ul className="footer-socialLinks">
            <li>
              <a
                href="https://www.instagram.com/retailmeetup/"
                target="_blank"
                title="Shoptalk Meetup Instagram">
                <i className="st-ico-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/retailmeetup"
                target="_blank"
                title="Shoptalk Meetup Twitter">
                <i className="st-ico-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/retailmeetup"
                target="_blank"
                title="Shoptalk Meetup Facebook">
                <i className="st-ico-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/groups/8946244/"
                target="_blank"
                title="Shoptalk Meetup Linkedin">
                <i className="st-ico-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
