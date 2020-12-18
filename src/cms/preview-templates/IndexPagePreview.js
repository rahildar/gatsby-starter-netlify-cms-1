import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        title={data.title}
        topHeaderLinks={data.topHeaderLinks}
        headerLogo={getAsset(entry.getIn(["data", "headerLogo"]))}
        intro={data.intro}
        plan={data.plan}
        events={data.events}
        hero={data.hero}
        footer={data.footer}
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
