import mainFooterLink from "../data/mainFooterLinks";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="container-block">
          <div className="block">
            <img src="./img/buy-comics-digital-comics.png" alt="" />
            <a href="#">DIGITAL COMICS</a>
          </div>
          <div className="block">
            <img src="./img/buy-comics-merchandise.png" alt="" />
            <a href="#">DC MERCHANDISE</a>
          </div>
          <div className="block">
            <img src="./img/buy-comics-subscriptions.png" alt="" />
            <a href="#">SUBSCRIPTION</a>
          </div>
          <div className="block">
            <img src="./img/buy-comics-shop-locator.png" alt="" />
            <a href="#">COMIC SHOP LOCATOR</a>
          </div>
          <div className="block">
            <img src="./img/buy-dc-power-visa.svg" alt="" />
            <a href="#">DC POWER VISA</a>
          </div>
        </div>
      </div>

      <div className="container-main-footer">
        <div className="container-footer">
          {mainFooterLink.map((firstUl) => {
            return (
              <div key={firstUl.id} className="link-section">
                <h3>{firstUl.title}</h3>
                <ul>
                  {firstUl.link.map((link) => {
                    return (
                      <li key={link.id}>
                        <a href={link.url}>{link.text}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
          <img src="./img/dc-logo-bg.png" alt=""/>
        </div>
      </div>
      
      <div className="last-footer">
        <div className="container-last-footer">
          <div className="left-footer">
            <button className="sign-up">SIGN-UP NOW!</button>
          </div>
          <div className="right-footer">
            <h3>FOLLOW US</h3>
            <div className="img-last-footer">
              <img src="./img/footer-facebook.png" alt="" />
              <img src="./img/footer-twitter.png" alt="" />
              <img src="./img/footer-youtube.png" alt="" />
              <img src="./img/footer-pinterest.png" alt="" />
              <img src="./img/footer-periscope.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
