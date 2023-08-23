import React from "react";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.css";

function Footer() {
  return (
    <section id="footer">
      <hr id="fline" />;
      <div className={`ftr-links`}>
        <ul>
          <button id="ftrbtn">
            <a href="...">Instagram</a>
          </button>
          <button id="ftrbtn">
            <a href="...">Twitter</a>
          </button>
          <button id="ftrbtn">
            <a href="...">Youtube</a>
          </button>
          <button id="ftrbtn">
            <a href="...">Facebook</a>
          </button>
          <button id="ftrbtn">
            <a href="...">Mail</a>
          </button>
        </ul>
      </div>
      <div id="flefttxt">
        <p>© 2023 TheStringTheory. All rights reserved.</p>
      </div>
      <div id="frighttxt">
        <p className="paragraph-spacing">
          Contact: +91 83183 06583, +91 88920 00627
        </p>
        <p className="paragraph-spacing">
          Mail: thestringtheory.co.in@gmail.com
        </p>
      </div>
    </section>
  );
}

export default Footer;
