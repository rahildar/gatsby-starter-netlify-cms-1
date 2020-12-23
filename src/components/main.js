import React from "react";
import Image from "gatsby-image";

export default function MainSection({ intro, plan, events, hero }) {
  const { heading, description, introImage, comments } = intro;
  console.log("##events", events);
  return (
    <main>
      <section className="globalSection banner" style={{ height: 374 }}>
        <div
          className="gradient"
          style={{
            backgroundImage: `url(${
              hero.background.childImageSharp
                ? hero.background.childImageSharp.fluid.src
                : hero.background.url
            })`,
          }}></div>
        <div
          className="tagline-image"
          style={{
            background: `url(${
              hero.taglineImage.childImageSharp
                ? hero.taglineImage.childImageSharp.fluid.src
                : hero.taglineImage.url
            }) no-repeat center`,
          }}></div>
      </section>
      <section className="globalSection intro">
        <div className="wrapper">
          <h1 className="section-title">{heading}</h1>
          <div className="row">
            <div className="col-6">
              <div className="content">{description}</div>
            </div>
            <div className="col-6">
              <div className="content-image">
                <img
                  src={
                    introImage.childImageSharp
                      ? introImage?.childImageSharp.fluid.src
                      : introImage.url
                  }
                  alt="Shoptalk Meetup"
                />
              </div>
            </div>
          </div>
          <div className="reviewsCarousel">
            <p>Here’s what else they had to say:</p>
            <div
              id="testimonialCarousel"
              className="owl-carousel owl-theme pti-owlCarousel owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transform: "translate3d(-3558px, 0px, 0px)",
                    transition: "all 0.25s ease 0s; width: 8895px",
                  }}>
                  <div
                    className="owl-item cloned"
                    style={{ width: 583, marginRight: 10 }}>
                    <div className="item">
                      <div className="testimonialBox">
                        <div className="testimonial">
                          <div className="testimonialContent">
                            <p>I have already had great follow up responses</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 583, marginRight: 10 }}>
                    <div className="item">
                      <div className="testimonialBox">
                        <div className="testimonial">
                          <div className="testimonialContent">
                            <p>
                              Much more efficient meeting people vs an in-person
                              conference
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 583, marginRight: 10 }}>
                    <div className="item">
                      <div className="testimonialBox">
                        <div className="testimonial">
                          <div className="testimonialContent">
                            <p>
                              It was the best event for lead gen that we've ever
                              participated in
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 583, marginRight: 10 }}>
                    <div className="item">
                      <div className="testimonialBox">
                        <div className="testimonial">
                          <div className="testimonialContent">
                            <p>
                              We believe it will be the best new business
                              investment we’ve ever made
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item"
                    style={{ width: 583, marginRight: 10 }}>
                    <div className="item">
                      <div className="testimonialBox">
                        <div className="testimonial">
                          <div className="testimonialContent">
                            <p>
                              Regardless of what happens with COVID this virtual
                              event should become an annual event
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item"
                    style={{ width: 583, marginRight: 10 }}>
                    <div className="item">
                      <div className="testimonialBox">
                        <div className="testimonial">
                          <div className="testimonialContent">
                            <p>
                              The fifteen-minute meetings were efficient and
                              productive
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item active"
                    style={{ width: 583, marginRight: 10 }}>
                    <div className="item">
                      <div className="testimonialBox">
                        <div className="testimonial">
                          <div className="testimonialContent">
                            <p>Loved how structured it was!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item active"
                    style={{ width: 583, marginRight: 10 }}>
                    <div className="item">
                      <div className="testimonialBox">
                        <div className="testimonial">
                          <div className="testimonialContent">
                            <p>I have already had great follow up responses</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item"
                    style={{ width: 583, marginRight: 10 }}>
                    <div className="item">
                      <div className="testimonialBox">
                        <div className="testimonial">
                          <div className="testimonialContent">
                            <p>
                              Much more efficient meeting people vs an in-person
                              conference
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item"
                    style={{ width: 583, marginRight: 10 }}>
                    <div className="item">
                      <div className="testimonialBox">
                        <div className="testimonial">
                          <div className="testimonialContent">
                            <p>
                              It was the best event for lead gen that we've ever
                              participated in
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item"
                    style={{ width: 583, marginRight: 10 }}>
                    <div className="item">
                      <div className="testimonialBox">
                        <div className="testimonial">
                          <div className="testimonialContent">
                            <p>
                              We believe it will be the best new business
                              investment we’ve ever made
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 583, marginRight: 10 }}>
                    <div className="item">
                      <div className="testimonialBox">
                        <div className="testimonial">
                          <div className="testimonialContent">
                            <p>
                              Regardless of what happens with COVID this virtual
                              event should become an annual event
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 583, marginRight: 10 }}>
                    <div className="item">
                      <div className="testimonialBox">
                        <div className="testimonial">
                          <div className="testimonialContent">
                            <p>
                              The fifteen-minute meetings were efficient and
                              productive
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 583, marginRight: 10 }}>
                    <div className="item">
                      <div className="testimonialBox">
                        <div className="testimonial">
                          <div className="testimonialContent">
                            <p>Loved how structured it was!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 583, marginRight: 10 }}>
                    <div className="item">
                      <div className="testimonialBox">
                        <div className="testimonial">
                          <div className="testimonialContent">
                            <p>I have already had great follow up responses</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-nav disabled">
                <button type="button" role="presentation" className="owl-prev">
                  <span aria-label="Previous">‹</span>
                </button>
                <button type="button" role="presentation" className="owl-next">
                  <span aria-label="Next">›</span>
                </button>
              </div>
              <div className="owl-dots">
                <button role="button" className="owl-dot">
                  <span></span>
                </button>
                <button role="button" className="owl-dot active">
                  <span></span>
                </button>
                <button role="button" className="owl-dot">
                  <span></span>
                </button>
                <button role="button" className="owl-dot">
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="timelineSection globalSection">
        <div className="wrapper">
          <h2 className="sectionTitle">{plan.heading}</h2>
          {plan.description}
          <img
            src={
              plan.image.childImageSharp
                ? plan.image.childImageSharp.fluid.src
                : plan.image.url
            }
            alt="Timeline"
            className="lgVisible"
          />
          <img
            src={
              plan.mobileImage.childImageSharp
                ? plan.mobileImage.childImageSharp.fluid.src
                : plan.mobileImage.url
            }
            alt="Timeline Mobile"
            className="xsVisible"
          />
        </div>
      </section>
      <section className="globalSection meetupsWrapper">
        <div className="wrapper">
          <h3 className="sectionTitle">2021 Retail Meetups</h3>
          <div className="meetupsList">
            <ul className="list-inline">
              {events.eventList.map((event) => {
                return (
                  <li>
                    <div className="meetupEventBox GSMeetup_Spring">
                      <div className="meetupEventBoxHeader">
                        <img
                          src={
                            event.logo.childImageSharp
                              ? event.logo.childImageSharp.fluid.src
                              : event.logo.url
                          }
                          alt=""
                        />
                      </div>
                      <div className="meetupEventBoxBody">
                        <div className="meetupEventDetails">
                          {event.shortDescription}
                        </div>
                      </div>
                      <div className="meetupEventBoxFooter">
                        <a
                          href={event.eventLink}
                          title="GROCERYSHOP SPRING MEETUP"
                          id="GSMLink">
                          {event.eventLinkText}
                        </a>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="meetupsEventContent text-center">{events.bottom}</div>
        </div>
      </section>
    </main>
  );
}
