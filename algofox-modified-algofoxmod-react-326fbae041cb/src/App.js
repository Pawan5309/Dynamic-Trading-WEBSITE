import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div>
  <header className="header-area header-sticky">
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <nav className="main-nav">
                      <a href="index.html" className="logo">
                          <img src="assets/images/logo.png" alt=""/>
                      </a>
                      <ul className="nav">
                          <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                          <li className="scroll-to-section"><a href="#services">Services</a></li>
                          <li className="scroll-to-section"><a href="#about">About</a></li>
                          <li className="has-sub">
                              <a href="javascript:void(0)">Pages</a>
                              <ul className="sub-menu">
                                  <li><a href="about-us.html">About Us</a></li>
                                  <li><a href="our-services.html">Our Services</a></li>
                                  <li><a href="contact-us.html">Contact Us</a></li>
                              </ul>
                          </li>
                          <li className="scroll-to-section"><a href="Chat-bot.html">ChatBot</a></li>
                          <li><a href="contact-us.html">Contact Support</a></li> 
                      </ul>        
                      <a className='menu-trigger'>
                          <span>Menu</span>
                      </a>
                      
                  </nav>
              </div>
          </div>
      </div>
  </header>
  <div className="swiper-container" id="top">
    <div className="swiper-wrapper">
      <div className="swiper-slide">
        <div className="slide-inner" style="background-image:url(assets/images/slide-01.jpg)">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="header-text">
                  <h2>Get <em>ready</em> for profit<br/>&amp; upgrade <em>all aspects</em></h2>
                  <div className="div-dec"></div>
                  <p>HappynessPro is India's most promising algo trading platform for retail traders and investors in India. Made with a simple vision of making algo trading accessible to every trader at economical price.</p>
                  <div className="buttons">
                    <div className="green-button">
                      <a href="#">Discover More</a>
                    </div>
                    <div className="orange-button">
                      <a href="#">Contact Us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-slide">
        <div className="slide-inner" style="background-image:url(assets/images/slide-02.jpg)">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="header-text">
                  <h2><em>Digital</em> Currency for you <br/>&amp; Best <em>Crypto</em> Tips</h2>
                  <div className="div-dec"></div>
                  <div className="buttons">
                    <div className="green-button">
                      <a href="#">Discover More</a>
                    </div>
                    <div className="orange-button">
                      <a href="#">Contact Us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-slide">
        <div className="slide-inner" style="background-image:url(assets/images/slide-03.jpg)">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="header-text">
                  <h2>Best One in Town<br/>&amp; Crypto <em>Services</em></h2>
                  <div className="div-dec"></div>
                  <div className="buttons">
                    <div className="green-button">
                      <a href="#">Discover More</a>
                    </div>
                    <div className="orange-button">
                      <a href="#">Contact Us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="swiper-button-next swiper-button-white"></div>
    <div className="swiper-button-prev swiper-button-white"></div>
  </div>

  <section className="services" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="service-item">
            <i className="fas fa-archive"></i>
            <h4>Dashboard</h4>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="service-item">
            <i className="fas fa-cloud"></i>
            <h4>Cloud Security</h4>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="service-item">
            <i className="fas fa-charging-station"></i>
            <h4>24/7 Working</h4>
          
          </div>
        </div>
        <div className="col-lg-6">
          <div className="service-item">
            <i className="fas fa-suitcase"></i>
            <h4>Mobile and Tablet ready!</h4>
           
          </div>
        </div>
        <div className="col-lg-6">
          <div className="service-item">
            <i className="fas fa-archway"></i>
            <h4>Fast Customer Support</h4>
           
          </div>
        </div>
        <div className="col-lg-6">
          <div className="service-item">
            <i className="fas fa-puzzle-piece"></i>
            <h4>Fully Customizable Plans</h4>
           
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="simple-cta">
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <h4>Business <em>Solutions</em> and <strong>Crypto</strong> Investments</h4>
        </div>
        <div className="col-lg-7">
          <div className="buttons">
            <div className="green-button">
              <a href="#">Discover More</a>
            </div>
            <div className="orange-button">
              <a href="#">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="about-us" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="section-heading">
            <h6>About Us</h6>
            <h4>Know Us Better</h4>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="naccs">
            <div className="tabs">
              <div className="row">
                <div className="col-lg-12">
                  <div className="menu">
                    <div className="active gradient-border"><span>INVESTING</span></div>
                    <div className="gradient-border"><span>GROWING</span></div>
                    <div className="gradient-border"><span>FINANCING</span></div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <ul className="nacc">
                    <li className="active">
                      <div>
                        <div className="main-list">
                          <span className="title">Project Title</span>
                          <span className="title">Budget</span>
                          <span className="title">Deadline</span>
                          <span className="title">Client</span>
                        </div>
                        <div className="list-item">
                          <span className="item item-title">Forex Trade</span>
                          <span className="item">$1,500 to $2,200</span>
                          <span className="item">2022 Dec 12</span>
                          <span className="item">Web Biz</span>
                        </div>
                        <div className="list-item">
                          <span className="item item-title">Algo Trade</span>
                          <span className="item">$2,500 to $3,600</span>
                          <span className="item">2022 Dec 10</span>
                          <span className="item">Online Ads</span>
                        </div>
                        <div className="list-item">
                          <span className="item item-title">Financial Plan</span>
                          <span className="item">$2,500 to $4,200</span>
                          <span className="item">2022 Dec 8</span>
                          <span className="item">Web Biz</span>
                        </div>
                        <div className="list-item last-item">
                          <span className="item item-title">Crypto Investment</span>
                          <span className="item">$3,000 to $6,600</span>
                          <span className="item">2022 Dec 2</span>
                          <span className="item">Web Presence</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div/>
                        <div className="main-list">
                          <span className="title">Project Title</span>
                          <span className="title">Budget</span>
                          <span className="title">Deadline</span>
                          <span className="title">Client</span>
                        </div>
                        <div className="list-item">
                          <span className="item item-title">Graphics Redesign</span>
                          <span className="item">$500 to $800</span>
                          <span className="item">2022 Nov 24</span>
                          <span className="item">Media One</span>
                        </div>
                        <div className="list-item">
                          <span className="item item-title">Digital Graphics</span>
                          <span className="item">$1,500 to $3,000</span>
                          <span className="item">2022 Nov 18</span>
                          <span className="item">Second Media</span>
                        </div>
                        <div className="list-item">
                          <span className="item item-title">New Artworks</span>
                          <span className="item">$2,200 to $4,400</span>
                          <span className="item">2022 Nov 10</span>
                          <span className="item">Artwork Push</span>
                        </div>
                        <div className="list-item last-item">
                          <span className="item item-title">Complex Arts</span>
                          <span className="item">$1,100 to $2,400</span>
                          <span className="item">2022 Nov 3</span>
                          <span className="item">Media One</span>
                        </div>
                    </li>
                    <li>
                      <div>
                        <div className="main-list">
                          <span className="title">Project Title</span>
                          <span className="title">Budget</span>
                          <span className="title">Estimated</span>
                          <span className="title">Technology</span>
                        </div>
                        <div className="list-item">
                          <span className="item item-title">Backend Coding</span>
                          <span className="item">$2,000 to $5,000</span>
                          <span className="item">2022 Nov 28</span>
                          <span className="item">PHP MySQL</span>
                        </div>
                        <div className="list-item">
                          <span className="item item-title">New Web App</span>
                          <span className="item">$1,500 to $3,000</span>
                          <span className="item">2022 Nov 18</span>
                          <span className="item">Python Programming</span>
                        </div>
                        <div className="list-item">
                          <span className="item item-title">Frontend Interactions</span>
                          <span className="item">$3,000 to $6,000</span>
                          <span className="item">2022 Nov 10</span>
                          <span className="item">JavaScripts</span>
                        </div>
                        <div className="list-item last-item">
                          <span className="item item-title">Video Creations</span>
                          <span className="item">$1,800 to $4,400</span>
                          <span className="item">2022 Nov 3</span>
                          <span className="item">Multimedia</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="right-content">
            <h4>The platform aims at providing retail traders with speed an precision in order placement across various platforms and brokers and making their trading journey more smoother. </h4>
            <div className="green-button">
              <a href="about-us.html">Discover More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="calculator">
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <div className="left-image">
            <img src="assets/images/calculator-image.png" alt=""/>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="section-heading">
            <h6>Your Freedom</h6>
            <h4>Get a Financial Plan</h4>
          </div>
          <form id="calculate" action="" method="get">
            <div className="row">
              <div className="col-lg-6">
                <fieldset>
                  <label for="name">Your Name</label>
                  <input type="name" name="name" id="name" placeholder="" autocomplete="on" required/>
                </fieldset>
              </div>
              <div className="col-lg-6">
                <fieldset>
                  <label for="email">Your Email</label>
                  <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="" required=""/>
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <label for="subject">Subject</label>
                  <input type="subject" name="subject" id="subject" placeholder="" autocomplete="on" />
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <label for="chooseOption" className="form-label">Your Reason</label>
                  <select name="Category" className="form-select" aria-label="Default select example" id="chooseOption" onchange="this.form.click()">
                      <option selected>Choose an Option</option>
                      <option type="checkbox" name="option1" value="Online Banking">Online Banking</option>
                      <option value="Financial Control">Financial Control</option>
                      <option value="Yearly Profit">Yearly Profit</option>
                      <option value="Crypto Investment">Crypto Investment</option>
                  </select>
              </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <button type="submit" id="form-submit" className="orange-button">Submit Now</button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <section className="testimonials" id="testimonials">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="section-heading">
            <h6>Testimonials</h6>
            <h4>What They Say</h4>
          </div>
        </div>
        <div className="col-lg-10 offset-lg-1">
          <div className="owl-testimonials owl-carousel" style="position: relative; z-index: 5;">
            <div className="item">
              <i className="fa fa-quote-left"></i>
              <p>"I will guarantee you that you will get the best financial results."</p>
              <h4>David</h4>
              <span>CEO of HappynessPro</span>
              <div className="right-image">
                <img src="assets/images/testimonials-01.jpg" alt=""/>
              </div>
            </div>
            <div className="item">
              <i className="fa fa-quote-left"></i>
              <p>“The profit is amazing and loved the result.”</p>
              <h4>Andrew Garfield</h4>
              <span>CTO of Mexant</span>
              <div className="right-image">
                <img src="assets/images/testimonials-01.jpg" alt=""/>
              </div>
            </div>
            <div className="item">
              <i className="fa fa-quote-left"></i>
              <p>“.”</p>
              <h4>George Lopez</h4>
              <span>Crypto Manager</span>
              <div className="right-image">
                <img src="assets/images/testimonials-01.jpg" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="partners">
    <div className="container">
      <div className="row">
        <div className="col-lg-2 col-sm-4 col-6">
          <div className="item">
            <img src="assets/images/client-01.png" alt=""/>
          </div>
        </div>
        <div className="col-lg-2 col-sm-4 col-6">
          <div className="item">
            <img src="assets/images/client-01.png" alt=""/>
          </div>
        </div>
        <div className="col-lg-2 col-sm-4 col-6">
          <div className="item">
            <img src="assets/images/client-01.png" alt=""/>
          </div>
        </div>
        <div className="col-lg-2 col-sm-4 col-6">
          <div className="item">
            <img src="assets/images/client-01.png" alt=""/>
          </div>
        </div>
        <div className="col-lg-2 col-sm-4 col-6">
          <div className="item">
            <img src="assets/images/client-01.png" alt=""/>
          </div>
        </div>
        <div className="col-lg-2 col-sm-4 col-6">
          <div className="item">
            <img src="assets/images/client-01.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <p>Copyright © 2024 HappynessPro.Co., Ltd. All Rights Reserved.</p>
          

        </div>
      </div>
    </div>
  </footer>
  </div>
  )
}

export default App;
