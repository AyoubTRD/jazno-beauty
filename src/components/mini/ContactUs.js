import React from "react";

class ContactUs extends React.Component {
  componentDidMount() {
    document.querySelector("iframe").classList.add("d-block");
  }
  componentWillUnmount() {
    document.querySelector("iframe").classList.remove("d-block");
  }
  render() {
    return <div></div>;
  }
}

export default ContactUs;
