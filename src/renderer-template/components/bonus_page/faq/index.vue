<template>
<!--Bonus Page FAQ start -->
  <section class="section-py-space faq-section">
      <ul class="page-decore">
        <li class="top"><img class="img-fluid inner2" src="../../../assets/images/landing/footer/2.png" alt="footer-back-img"></li>
        <li class="bottom"><img class="img-fluid inner2" src="../../../assets/images/landing/footer/2.png" alt="footer-back-img"></li>
      </ul>
      <div class="container">
        <div class="row faq-block">
          <div class="col-sm-12">
            <div class="media">
              <div>
                <h2>Frequently Asked Questions</h2>
                <p>Discover you question from underneath or present your inquiry fromt tahe submit box.</p>
              </div>
              <div class="media-body"><a class="icon-btn btn-outline-primary btn-sm search contact-search float-right" href="javascript:void(0)"><i @click="toggelsearchbar()" class="fa fa-search"></i></a>
                <form class="form-inline search-form" :class="{ 'open': opensearchbar }">
                  <div class="form-group">
                    <input class="form-control-plaintext" type="search" placeholder="Search..">
                    <div @click="opensearchbar = false" class="icon-close close-search"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="accordion theme-accordion" role="tablist">
              <div class="card faq-block accordion theme-accordion">
                <b-card-header role="tab">
                  <h5 class="mb-0">
                    <b-button v-b-toggle.accordion-1 class="btn-link" type="button">How can I downgrade to an earlier ?</b-button>
                  </h5>
                </b-card-header>
                <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <p><img class="img-fluid faq-decor" src="../../../assets/images/landing/chitchat/2.png" alt="chit-chat-back-img"/>{{ text }}</p>
                  </b-card-body>
                </b-collapse>
              </div>
              <div class="card">
                <b-card-header role="tab">
                  <h5 class="mb-0">
                    <b-button v-b-toggle.accordion-2 class="btn-link collapsed" type="button">How can I upgrade from Shopify 2.5 to shopify 3?</b-button>
                  </h5>
                </b-card-header>
                <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <p><img class="img-fluid faq-decor" src="../../../assets/images/landing/chitchat/2.png" alt="chit-chat-back-img"/>{{ text }}</p>
                  </b-card-body>
                </b-collapse>
              </div>
              <div class="card">
                <b-card-header role="tab">
                  <h5 class="mb-0">
                    <b-button v-b-toggle.accordion-3 class="btn-link collapsed" type="button">Under what license are Regular Labs released?</b-button>
                  </h5>
                </b-card-header>
                <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <p><img class="img-fluid faq-decor" src="../../../assets/images/landing/chitchat/2.png" alt="chit-chat-back-img"/>{{ text }}</p>
                  </b-card-body>
                </b-collapse>
              </div>
              <div class="card">
                <b-card-header role="tab">
                  <h5 class="mb-0">
                    <b-button v-b-toggle.accordion-4 class="btn-link collapsed">What is the Regular Labs Library?</b-button>
                  </h5>
                </b-card-header>
                <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <p><img class="img-fluid faq-decor" src="../../../assets/images/landing/chitchat/2.png" alt="chit-chat-back-img"/>{{ text }}</p>
                  </b-card-body>
                </b-collapse>
              </div>
              <div class="card">
                <b-card-header role="tab">
                  <h5 class="mb-0">
                    <b-button v-b-toggle.accordion-5 class="btn-link collapsed" type="button">Can I turn on/off some blocks on the page?</b-button>
                  </h5>
                </b-card-header>
                <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <p><img class="img-fluid faq-decor" src="../../../assets/images/landing/chitchat/2.png" alt="chit-chat-back-img"/>{{ text }}</p>
                  </b-card-body>
                </b-collapse>
              </div>
              <div class="card">
                <b-card-header role="tab">
                  <h5 class="mb-0">
                    <b-button v-b-toggle.accordion-6 class="btn-link collapsed" type="button">What is included in the theme package?</b-button>
                  </h5>
                </b-card-header>
                <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <p><img class="img-fluid faq-decor" src="../../../assets/images/landing/chitchat/2.png" alt="chit-chat-back-img"/>{{ text }}</p>
                  </b-card-body>
                </b-collapse>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
<!--Bonus Page FAQ end -->
</template>

<script>
export default {
  data() {
      return {
        text: `
          it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy. Various versions have evolved over the years,All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures
        `,
        opensearchbar: false
      }
    },
    methods: {
    toggelsearchbar() {
      this.opensearchbar = !this.opensearchbar
    }
    }
};
</script>
