<template>
  <!--Footer start -->
  <footer>
    <div class="container footer-main">
      <div class="row footer-block">
        <div class="col-lg-3 col-md-6">
          <div class="footer-title footer-mobile-title">
            <h3>About</h3>
          </div>
          <div class="about-payment footer-contant">
            <div class="logo">
              <nuxt-link to="/messenger/messenger">
                  <img
                    src="../../../assets/images/logo/landing-logo.png"
                    alt="logo"
                />
              </nuxt-link>
            </div>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece Lorem fugit on looked ipsum.
            </p>
            <ul class="social-group">
              <li>
                <a class="icon-btn btn-google button-effect btn-sm" href="https://www.facebook.com/">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  class="icon-btn btn-twiter button-effect btn-sm"
                  href="https://twitter.com/"
                  ><i class="fa fa-twitter"></i
                ></a>
              </li>
              <li>
                <a
                  class="icon-btn btn-linkedin button-effect btn-sm"
                  href="https://www.linkedin.com/"
                  ><i class="fa fa-linkedin"></i
                ></a>
              </li>
              <li>
                <a
                  class="icon-btn btn-instagram button-effect btn-sm"
                  href="https://www.instagram.com/"
                  ><i class="fa fa-instagram"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 col-md-3">
          <div class="links">
            <div class="footer-title">
              <h3>Useful Links</h3>
            </div>
            <div class="footer-contant">
              <ul>
                <li>
                  <nuxt-link to="/messenger/messenger"
                    >Home</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/bonus/about"
                    >About us</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/bonus/faq"
                    >FAQ</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/bonus/elements"
                    >Elements</nuxt-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3">
          <div class="links">
            <div class="footer-title">
              <h3>Blog Links</h3>
            </div>
            <div class="footer-contant">
              <ul>
                <li>
                  <nuxt-link to="/blogs/blog_no-sidebar"
                    >No sidebar</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/blogs/blog_left-sidebar"
                    >Left sidebar</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/blogs/blog_right-sidebar"
                    >Right sidebar</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/blogs/blog_details"
                    >Details page</nuxt-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-4">
          <div class="links">
            <div class="footer-title">
              <h3>Authentication</h3>
            </div>
            <div class="footer-contant">
              <ul>
                <li>
                  <nuxt-link to="/authentication/login"
                    >Signin</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/authentication/login-2"
                    >Signin classic</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/authentication/signup"
                    >Signup</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/authentication/signup-2"
                    >Signup classic</nuxt-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4">
          <div class="downlaod">
            <div>
              <div class="footer-title">
                <h3>Download Apps</h3>
              </div>
              <div class="footer-contant">
                <div class="footer-btn">
                  <a class="btn active" href="https://www.apple.com/in/itunes/"
                    ><i class="fa fa-apple"></i>
                    <div>
                      <h6>Available on the</h6>
                      <h4>App store</h4>
                    </div></a
                  ><a class="btn" href="https://play.google.com/store"
                    ><i class="fa fa-play"></i>
                    <div>
                      <h6>Available on the</h6>
                      <h4>Google play</h4>
                    </div></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-back-block">
      <img
        class="img-fluid inner1"
        src="../../../assets/images/landing/footer/2.png"
        alt="footer-back-img"
      /><img
        class="img-fluid inner2"
        src="../../../assets/images/landing/footer/2.png"
        alt="footer-back-img"
      />
    </div>
    <div class="container copyright-footer">
      <div class="row copyright">
        <div class="col-md-6 col-sm-12">
          <p class="footer-left">© 2021 Chitchat. All Rights Reserved</p>
        </div>
        <div class="col-md-6 col-sm-12 links_horizontal">
          <p class="text-right">
            Made with <span>&hearts; </span>By Theme Pixelstrap
          </p>
        </div>
      </div>
    </div>
  </footer>
  <!--Footer end -->
</template>
