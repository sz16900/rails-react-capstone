import React from "react"
import PropTypes from "prop-types"
class MyHomePage extends React.Component {
  render () {
    return (
      <React.Fragment>
        Tagline: {this.props.tagline}
      </React.Fragment>
    );
  }
}

MyHomePage.propTypes = {
  tagline: PropTypes.string
};
export default MyHomePage
