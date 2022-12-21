
<template>
  <!--SignIn start -->
  <div class="container-fluid p-0">
    <div class="row">
      <div class="col-12">
        <div class="login-contain-main">
          <div class="left-page">
            <div class="login-content">
              <!-- <div class="login-content-header mt-3 mb-3">
                <img
                  class="image-fluid my-auto"
                  src="../../assets/images/logo/logo-circle.png"
                  alt="images"
                />
              </div>
              <h3>Hello Everyone , We are GooChat</h3>
              <h4>Welcome to GoChat please login to your account.</h4> -->
              <!-- <img :src="getImgUrl()" style="width:100px;height:100px"/> -->
              <button type="button" @click="checkuserlogin">checkloginuser</button>
              <form class="form1" v-on:submit.prevent="handleLogin">
                <div class="form-group">
                  <label
                    class="col-form-label"
                    for="inputEmail3"
                    style="font-weight: 400; font-size: 14px"
                    >Email Address</label
                  >
                  <input
                    class="form-control"
                    id="inputEmail3"
                    type="email"
                    v-model="email"
                    placeholder="Demo@123gmail.com"
                    autofocus
                  />
                  <!-- required
                    email -->
                </div>
                <div class="form-group">
                  <label
                    class="col-form-label"
                    for="inputPassword3"
                    style="font-weight: 400; font-size: 14px"
                    >Password</label
                  ><span> </span>

                  <input
                    class="form-control"
                    id="inputPassword3"
                    type="password"
                    v-model="password"
                    placeholder="Password"
                  />
                </div>
                <!-- <div class="form-group">
                  <div class="rememberchk">
                    <div class="form-check pl-0">
                      <input
                        class="form-check-input m-0"
                        id="gridCheck1"
                        type="checkbox"
                      />
                      <label class="form-check-label" for="gridCheck1"
                        >Remember Me</label
                      >
                      <h6>
                        <nuxt-link to="/authentication/login"
                          >Forgot Password?</nuxt-link
                        >
                      </h6>
                    </div>
                  </div>
                </div> -->
                <template v-if="this.loginfailed">
                  <p class="error-label-login">{{ this.errorlogin }}</p>
                </template>

                <div class="form-group">
                  <div class="buttons">
                    <button
                      class="btn btn-primary button-effect"
                      style="width: 100%; border-radius: 0"
                      :style="[
                        this.loginloading
                          ? { padding: '11px 65px' }
                          : { padding: '14px 65px' },
                      ]"
                      href="javascript:void(0)"
                      @click="handleLogin"
                      :disabled="this.password == '' || this.email == ''"
                    >
                      <template v-if="this.loginloading">
                        <div class="snippet" data-title=".dot-typing">
                          <div class="stage">
                            <div class="dot-typing"></div>
                          </div>
                        </div>
                        <!-- <b-spinner label="Loading..." style="border-color:white;border-right-color: transparent;"></b-spinner> -->
                        <!-- <div class="spinner-border" role="status">
                          <span class="sr-only">Loading...</span>
                        </div> -->
                      </template>
                      <template v-else> Login </template>
                    </button>

                    <!-- <nuxt-link
                      class="btn button-effect btn-signup"
                      to="/authentication/signup"
                    >
                      SignUp
                    </nuxt-link> -->
                  </div>
                </div>
              </form>

              <!--              <div>-->
              <!--              <div class="line">-->
              <!--                <h6>OR Connect with</h6>-->
              <!--              </div>-->
              <!--              <div class="medialogo">-->
              <!--                <ul>-->
              <!--                  <li>-->
              <!--                    <a-->
              <!--                      class="icon-btn btn-danger button-effect"-->
              <!--                      href="https://www.google.com/"-->
              <!--                      ><i class="fa fa-google"></i-->
              <!--                    ></a>-->
              <!--                  </li>-->
              <!--                  <li>-->
              <!--                    <a-->
              <!--                      class="icon-btn btn-primary button-effect"-->
              <!--                      href="https://twitter.com/"-->
              <!--                      ><i class="fa fa-twitter"></i-->
              <!--                    ></a>-->
              <!--                  </li>-->
              <!--                  <li>-->
              <!--                    <a-->
              <!--                      class="icon-btn btn-facebook button-effect"-->
              <!--                      href="https://www.facebook.com/"-->
              <!--                      ><i class="fa fa-facebook-f"></i-->
              <!--                    ></a>-->
              <!--                  </li>-->
              <!--                </ul>-->
              <!--              </div>-->
              <!--              <div class="termscondition">-->
              <!--                <h4 class="mb-0">-->
              <!--                  <span>*</span>Terms and condition<b>&amp;</b>Privacy policy-->
              <!--                </h4>-->
              <!--              </div>        -->
              <!--              </div>-->
            </div>
          </div>
          <div class="right-page">
            <div class="right-login animat-rate">
              <div class="animation-block">
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
                <!-- <div class="maincircle"></div> -->
                <!-- <div class="top-circle"></div>
                <div class="center-circle"></div>
                <div class="bottom-circle"></div>
                <div class="bottom-circle1"></div>
                <div class="right-circle"></div>
                <div class="right-circle1"></div> -->
                <!-- <img
                  class="heart-logo"
                  src="../../assets/images/login_signup/5.png"
                  alt="login logo"
                /><img
                  class="has-logo"
                  src="../../assets/images/login_signup/4.png"
                  alt="login logo"
                /> -->
                <!-- <img
                  class="login-img"
                  src="../../assets/images/login_signup/1.png"
                  alt="login logo"
                /> -->
                <img
                  class="boy-logo"
                  src="../../assets/images/login_signup/6.png"
                  alt="login boy logo"
                /><img
                  class="girl-logo"
                  src="../../assets/images/login_signup/7.png"
                  alt="girllogo"
                />
                <!-- <img
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
                /> -->
                <img
                  class="cloud-logo"
                  src="../../assets/images/logo/logo-circle.png"
                  alt="login logo"
                />
                <img
                  class="cloud-logo1"
                  src="../../assets/images/logo/logo-circle.png"
                  alt="login logo"
                />
                <img
                  class="cloud-logo2"
                  src="../../assets/images/logo/logo-circle.png"
                  alt="login logo"
                />
                <img
                  class="cloud-logo3"
                  src="../../assets/images/logo/logo-circle.png"
                  alt="login logo"
                />
                <img
                  class="cloud-logo4"
                  src="../../assets/images/logo/logo-circle.png"
                  alt="login logo"
                />
                <!-- <img
                  class="has-logo1"
                  src="../../assets/images/login_signup/4.png"
                  alt="login logo"
                /> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--SignIn end -->
</template>

<script>
const CryptoJS = require("crypto-js");
import VueSocketIO from "vue-socket.io";

export default {
  data() {
    return {
      email: "",
      password: "",
      loginloading: false,
      loginfailed: false,
      errorlogin: "error login naja",
    };
  },
  methods: {
    getImgUrl() {
      return require("../../assets/images/goochatload.gif");
    },
    checkuserlogin(){
      this.getdataDB.then((data) => {
        let userlogin = data.objects('LOGIN')
        userlogin.map((item)=>{
          console.log(item);
        })

      });
    },
    async handleLogin() {
      // console.log("email", this.email);
      // console.log("password", this.password);
      // this.addDataToRealm("", "deleteData");
      if (this.email !== "" && this.password !== "") {
        this.loginloading = true;
        this.loginfailed = false;
        try {
          var keyHex = CryptoJS.enc.Utf8.parse(
            // "a62d9f02d9412f4c724919362a5ad4fe"
            "4a310288218c3394d829e49bd187c395"
          );
          // "4a310288218c3394d829e49bd187c395" ---> dev sit
          console.log(keyHex);
          var encrypted = CryptoJS.AES.encrypt(this.password, keyHex, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7,
          });
          // console.log("qwe", encrypted);

          const payload = new FormData();
          payload.append("email", this.email);
          payload.append("password", encrypted);

          const response = await this.$store.dispatch(
            "auth/requestSignInViaEmail",
            payload
          );
          // console.log("response", response);

          if (response.code === "0000") {
            // console.log('success');
            console.log(response.data.accessToken);
            const data = response.data;
            this.getdataDB.then((item) => {
              let userlogin = item
                .objects("LOGIN")
                .filtered(`userid == "${data.userProfile.id}"`);
              if (userlogin.length < 1) {
                this.addDataToRealm(data, "addDatalogin");
              }
            });
            await this.$store.dispatch("auth/setToken", data.accessToken);
            await this.$store.dispatch("auth/setProfile", data.userProfile);
            await this.$store.dispatch("auth/setUserLogin", data.userProfile);
            this.email = "";
            this.password = "";
            this.$router.push("/");
            // this.loginloading = false
          } else {
            this.loginloading = false;
            this.loginfailed = true;
            this.errorlogin = response.message;
          }
          // console.log(data);
          // console.log(response);
        } catch {
          // console.log("err");
        }
      }
    },
  },
};
</script>
