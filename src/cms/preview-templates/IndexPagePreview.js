import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  const footerLogo = getAsset(entry.getIn(["data", "footer", "footerLogo"]));
  const background = getAsset(entry.getIn(["data", "hero", "background"]));
  const taglineImage = getAsset(entry.getIn(["data", "hero", "taglineImage"]));
  const image = getAsset(entry.getIn(["data", "plan", "image"]));
  const mobileImage = getAsset(entry.getIn(["data", "plan", "mobileImage"]));
  const introImage = getAsset(entry.getIn(["data", "intro", "introImage"]));
  const eventList = data.events.eventList.map((e) => ({
    ...e,
    logo: getAsset(e.logo),
  }));

  console.log(
    "$$Data$$",
    data,
    background,
    taglineImage,
    image,
    mobileImage,
    eventList
  );

  if (data) {
    return (
      <IndexPageTemplate
        title={data.title}
        topHeaderLinks={data.topHeaderLinks}
        headerLogo={getAsset(entry.getIn(["data", "headerLogo"]))}
        intro={{ ...data.intro, introImage }}
        plan={{ ...data.plan, image, mobileImage }}
        events={{ ...data.events, eventList }}
        hero={{ ...data.hero, background, taglineImage }}
        footer={{ ...data.footer, footerLogo }}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default IndexPagePreview;
