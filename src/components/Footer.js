import React from "react";

export default function Footer(props) {
  return (
    <footer className="flex--column">
      <h4 className="footer__text text--bogart text--rainbow">
        I'm currently doing a student training program !
      </h4>
      <p className="footer__quote text--bogart">
        Quote of the day : <span className="text--quote text--bogart">"{props.quote}"</span>
      </p>
    </footer>
  );
}
