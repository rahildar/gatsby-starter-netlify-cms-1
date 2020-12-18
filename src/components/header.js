import React from "react";
import Image from "gatsby-image";

export default function Header({ topHeaderLinks, headerLogo }) {
  console.log(headerLogo);
  return (
    <header className="header smooth">
      <div className="navLinks">
        <div className="wrapper">
          <ul className="list-inline text-right">
            {topHeaderLinks.map((item) => (
              <li>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  title={item.name}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="wrapper">
        <div className="row align-top">
          <div className="col-4 col-logo">
            <div className="logo">
              <a href="/" title="Home">
                <img
                  src={headerLogo?.childImageSharp?.fluid?.src}
                  alt="Header Logo"
                  className="lgVisible"
                />
                {/* <img
                  src="./images/common/logo_footer.png"
                  alt="Footer Logo"
                  className="xsVisible"
                /> */}
              </a>
            </div>
          </div>
          <div className="col-8 text-right">
            <div className="social-links">
              <ul className="list-inline">
                <li>
                  <a
                    href="https://www.instagram.com/retailmeetup/"
                    target="_blank"
                    rel="noreferrer"
                    title="Shoptalk Meetup Instagram">
                    <i className="st-ico-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/retailmeetup"
                    target="_blank"
                    rel="noreferrer"
                    title="Shoptalk Meetup Twitter">
                    <i className="st-ico-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/retailmeetup"
                    target="_blank"
                    rel="noreferrer"
                    title="Shoptalk Meetup Facebook">
                    <i className="st-ico-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/groups/8946244/"
                    target="_blank"
                    rel="noreferrer"
                    title="Shoptalk Meetup Linkedin">
                    <i className="st-ico-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            <nav className="nav-menu">
              <ul className="list-inline">
                <li>
                  <a
                    href="http://groceryshopspring.retailmeetup.com/"
                    title="GROCERYSHOP SPRING MEETUP"
                    id="GSMeetup">
                    GROCERYSHOP SPRING MEETUP
                  </a>
                </li>
                <li>
                  <a
                    href="http://shoptalkwomen.retailmeetup.com/"
                    title="SHOPTALK MEETUP FOR WOMEN"
                    id="SMWomen">
                    SHOPTALK MEETUP FOR WOMEN
                  </a>
                </li>
                <li>
                  <a
                    href="http://shoptalkfall.retailmeetup.com"
                    title="SHOPTALK FALL MEETUP"
                    id="SMFall">
                    SHOPTALK FALL MEETUP
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mobile-nav">
            <button className="hamburger">
              <i className="st-ico-menu"></i>
            </button>
            <button className="closeMenu">
              <i className="st-ico-close"></i>
            </button>
            <div className="mobile-menu">
              <div className="social-links">
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="https://www.instagram.com/retailmeetup/"
                      target="_blank"
                      rel="noreferrer"
                      title="Shoptalk Meetup Instagram">
                      <i className="st-ico-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/retailmeetup"
                      target="_blank"
                      rel="noreferrer"
                      title="Shoptalk Meetup Twitter">
                      <i className="st-ico-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/retailmeetup"
                      target="_blank"
                      rel="noreferrer"
                      title="Shoptalk Meetup Facebook">
                      <i className="st-ico-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/groups/8946244/"
                      target="_blank"
                      rel="noreferrer"
                      title="Shoptalk Meetup Linkedin">
                      <i className="st-ico-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <nav className="nav-menu for-mobile smooth">
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="http://groceryshopspring.retailmeetup.com/"
                      title="GROCERYSHOP SPRING MEETUP"
                      id="GSMLinkNav">
                      GROCERYSHOP SPRING MEETUP
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://shoptalkwomen.retailmeetup.com/"
                      title="SHOPTALK MEETUP FOR WOMEN"
                      id="SMWomenLinkNav">
                      SHOPTALK MEETUP FOR WOMEN
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://shoptalkfall.retailmeetup.com"
                      title="SHOPTALK FALL MEETUP"
                      id="SMFallLinkNav">
                      SHOPTALK FALL MEETUP
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
