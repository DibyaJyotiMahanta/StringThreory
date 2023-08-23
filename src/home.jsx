import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./home.css";

function Home() {
  return (
    <section id="home">
      <div className="mainOverallContent">
        <div class="pointer">TheStringTheory.co.in</div>
        <div className="mainContent">
          <div id="tagLine">
            “String theory SLogna will be hwre just for style and <br />i dnt
            knw anything more so lets continue more
            <br />
            and focus on design.”
          </div>
          <div className="mainWord">
            <div className="mainText" id="mainTextOne">
              STREET
            </div>
            <div className="mainText" id="mainTextTwo">
              CLOTHING
            </div>
          </div>
          <div className="mainBox">
            <div className="middleBox mainBoxComponent"></div>
            <div className="upperLeftBox sideBox mainBoxComponent"></div>
            <div className="lowerLeftBox sideBox mainBoxComponent"></div>
            <div className="upperRightBox sideBox mainBoxComponent"></div>
            <div className="lowerRightBox sideBox mainBoxComponent"></div>
          </div>
          <div class="card homeCard">
            <div class="card-body homeCard2">
              <div className="statusBoxHashtag">#About Us</div>
              <div className="statusBoxLine">
                “We String Theory gonna change
                <br />
                the upcoming clothing mentality <br />
                and gonna hit the market.”
              </div>
              {/* <div className="buttonAccompany">
                <p className="buttonPrompt">SHOP COLLECTION</p>
                <a href="#" class="btn btn-light button" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="strip">
        <div className="stripWords one">THE STRING THEORY</div>
        <div className="stripWords two">*</div>
        <div className="stripWords three">THE STRING THEORY</div>
        <div className="stripWords four">*</div>
        <div className="stripWords five">THE STRING THEORY</div>
        <div className="stripWords six">*</div>
        <div className="stripWords seven">THE STRING THEORY</div>
        <div className="stripWords eight">*</div>
        <div className="stripWords nine">THE STRING THEORY</div>
        <div className="stripWords ten">*</div>
        <div className="stripWords eleven">THE STRING THEORY</div>
        <div className="stripWords twelve">*</div>
        <div className="stripWords thirteen">THE STRING THEORY</div>
        <div className="stripWords fourteen">*</div>
        <div className="stripWords fifteen">THE STRING THEORY</div>
        <div className="stripWords sixteen">*</div>
        <div className="stripWords seventeen">THE STRING THEORY</div>
      </div>
    </section>
  );
}
export default Home;
