import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./product.css";
function Product() {
  return (
    <div className="productWindow">
      <div className="pointer">PRODUCT</div>
      <div className="content">
        <div className="offerPart">
          <div className="offers">OFFERS</div>
          <div className="offerCards">
            <div className="offerPlace"></div>
            <div className="offerPlace"></div>
            <div className="offerPlace"></div>
          </div>
        </div>

        <div className="product">
          <div className="heading">
            YOU DESERVE
            <br />
            GOOD PRODUCTS
          </div>
          <div className="viewCartButton">
            <div className="buttonAccompany">
              <p className="buttonPrompt">VIEW CART</p>
              <a href="#" class="btn btn-light button" />
            </div>
          </div>
          <div className="cardCourosel">
            <div class="card productCard">
              <div className="img"></div>
              <div class="card-body">
                <p class="card-text">CONFUSED DUCK</p>
                <div className="priceBracket">
                  <p className="price">₹399</p>
                  <div className="fakePrice">
                    <p className="price cutPrice">₹999</p>
                    <div className="cut"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card productCard">
              <div className="img"></div>
              <div class="card-body">
                <p class="card-text" id="card-text">
                  CONFUSED DUCK
                </p>
                <div className="priceBracket">
                  <p className="price">₹399</p>
                  <div className="fakePrice">
                    <p className="price cutPrice">₹999</p>
                    <div className="cut"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card productCard">
              <div className="img"></div>
              <div class="card-body">
                <p class="card-text">CONFUSED DUCK</p>
                <div className="priceBracket">
                  <p className="price">₹399</p>
                  <div className="fakePrice">
                    <p className="price cutPrice">₹999</p>
                    <div className="cut"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card productCard">
              <div className="img"></div>
              <div class="card-body">
                <p class="card-text">CONFUSED DUCK</p>
                <div className="priceBracket">
                  <p className="price">₹399</p>
                  <div className="fakePrice">
                    <p className="price cutPrice">₹999</p>
                    <div className="cut"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card productCard">
              <div className="img"></div>
              <div class="card-body">
                <p class="card-text">CONFUSED DUCK</p>
                <div className="priceBracket">
                  <p className="price">₹399</p>
                  <div className="fakePrice">
                    <p className="price cutPrice">₹999</p>
                    <div className="cut"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
