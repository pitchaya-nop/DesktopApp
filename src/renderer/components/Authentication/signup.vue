<template>
  <!-- SignUp start -->
  <div class="login-page1">
    <div class="container-fluid p-0"></div>
    <div class="row">
      <div class="col-12">
        <div class="login-contain-main">
          <div class="left-page">
            <div class="login-content">
              <div class="login-content-header">
                <img
                  src="../../assets/images/logo/landing-logo.png"
                  alt="images"
                />
              </div>
              <h3>Hello Everyone , We are Chitchat</h3>
              <h4>Welcome to chitchat please Register to your account.</h4>
              <form class="form1">
                <div class="form-group">
                  <label class="col-form-label" for="uname">Username</label>
                  <input
                    class="form-control"
                    id="uname"
                    type="text"
                    placeholder="Demo@123"
                  />
                </div>
                <div class="form-group">
                  <label class="col-form-label" for="inputEmail3"
                    >Email Address</label
                  >
                  <input
                    class="form-control"
                    id="inputEmail3"
                    type="email"
                    placeholder="Demo@123gmail.com"
                  />
                </div>
                <div class="form-group">
                  <label class="col-form-label" for="inputPassword3"
                    >Password</label
                  ><span> </span>
                  <input
                    class="form-control"
                    id="inputPassword3"
                    type="password"
                    placeholder="********"
                  />
                </div>
                <div class="form-group">
                  <div class="rememberchk">
                    <div class="input-text form-check pl-0">
                      <input type="checkbox" id="gridCheck1" />
                      <label
                        class="form-check-label ml-2 mr-auto p-0"
                        for="gridCheck1">Remember Me</label>
                      <h6><nuxt-link to="/authentication/signup">Forgot Password?</nuxt-link></h6>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="buttons">
                    <a
                      class="btn btn-primary button-effect signpbtn"
                      href="javascript:void(0)"
                      >Signup</a
                    >
                    <nuxt-link class="btn button-effect btn-signup" to="/authentication/login">
                      Login
                    </nuxt-link>
                  </div>
                </div>
                <div class="line">
                  <h6>OR Connect with</h6>
                </div>
                <div class="medialogo">
                  <ul>
                    <li>
                      <a
                        class="icon-btn btn-danger button-effect"
                        href="https://www.google.com/"
                        ><i class="fa fa-google"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        class="icon-btn btn-primary button-effect"
                        href="https://twitter.com/"
                        ><i class="fa fa-twitter"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        class="icon-btn btn-facebook button-effect"
                        href="https://www.facebook.com/"
                        ><i class="fa fa-facebook-f"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </form>
              <div class="termscondition">
                <h4>
                  <span>*</span>Terms and condition<b>&amp;</b>Privacy policy
                </h4>
              </div>
            </div>
          </div>
          <div class="right-page">
            <div class="right-login animat-rate">
              <div class="bg_circle">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div class="cross"></div>
              <div class="cross1"></div>
              <div class="cross2"></div>
              <div class="dot"></div>
              <div class="dot1"></div>
              <div class="maincircle"></div>
              <div class="top-circle"></div>
              <div class="center-circle"></div>
              <div class="bottom-circle"></div>
              <div class="bottom-circle1"></div>
              <div class="right-circle"></div>
              <div class="right-circle1"></div>
              <img
                class="heart-logo"
                src="../../assets/images/login_signup/5.png"
                alt="login logo"
              /><img
                class="has-logo"
                src="../../assets/images/login_signup/4.png"
                alt="login logo"
              /><img
                class="login-img"
                src="../../assets/images/login_signup/1.png"
                alt="login logo"
              /><img
                class="boy-logo"
                src="../../assets/images/login_signup/6.png"
                alt="login boy logo"
              /><img
                class="girl-logo"
                src="../../assets/images/login_signup/7.png"
                alt="girllogo"
              /><img
                class="cloud-logo"
                src="../../assets/images/login_signup/2.png"
                alt="login logo"
              /><img
                class="cloud-logo1"
                src="../../assets/images/login_signup/2.png"
                alt="login logo"
              /><img
                class="cloud-logo2"
                src="../../assets/images/login_signup/2.png"
                alt="login logo"
              /><img
                class="cloud-logo3"
                src="../../assets/images/login_signup/2.png"
                alt="login logo"
              /><img
                class="cloud-logo4"
                src="../../assets/images/login_signup/2.png"
                alt="login logo"
              /><img
                class="has-logo1"
                src="../../assets/images/login_signup/4.png"
                alt="login logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--SignUp end -->
</template>
