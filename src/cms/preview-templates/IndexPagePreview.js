import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  const footerLogo = getAsset(entry.getIn(["data", "footer", "footerLogo"]));
  const background = getAsset(entry.getIn(["data", "hero", "background"]));
  const taglineImage = getAsset(entry.getIn(["data", "hero", "taglineImage"]));

  console.log("$$Data$$", data, background, taglineImage);

  if (data) {
    return (
      <IndexPageTemplate
        title={data.title}
        topHeaderLinks={data.topHeaderLinks}
        headerLogo={getAsset(entry.getIn(["data", "headerLogo"]))}
        intro={data.intro}
        plan={data.plan}
        events={data.events}
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
