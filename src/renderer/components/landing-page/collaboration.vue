<template>
  <!-- collaboration start -->
  <section class="collaboration-main section-py-space">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="landing-title">
            <div>
              <h1>finger tips</h1>
            </div>
            <div class="sub-title">
              <div>
                <h4>Exclusive Features</h4>
                <h2>Put collaboration at your fingertips</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="custom-container">
      <div class="row">
        <div class="col-12">
          <div class="collaboration-content">
            <ul class="collab-tab nav nav-pills">
              <li class="nav-item" @click="activemenu(1)">
                <a
                  class="nav-link"
                  data-toggle="pill"
                  :class="activeitem == 1 ? 'active show' : ''"
                >
                  <div class="tab-main">
                    <div class="tab-img"><i class="ti-thought"></i></div>
                    <div class="tab-content">
                      <h3>Organise</h3>
                      <p>conversation</p>
                    </div>
                  </div></a
                >
              </li>
              <li class="nav-item" @click="activemenu(2)">
                <a
                  class="nav-link"
                  data-toggle="pill"
                  :class="activeitem == 2 ? 'active show' : ''"
                >
                  <div class="tab-main">
                    <div class="tab-img"><i class="ti-zip"></i></div>
                    <div class="tab-content">
                      <h3>Shared</h3>
                      <p>file and etc</p>
                    </div>
                  </div></a
                >
              </li>
              <li class="nav-item" @click="activemenu(3)">
                <a
                  class="nav-link"
                  data-toggle="pill"
                  :class="activeitem == 3 ? 'active show' : ''"
                >
                  <div class="tab-main">
                    <div class="tab-img"><i class="ti-search"></i></div>
                    <div class="tab-content">
                      <h3>Search</h3>
                      <p>everything</p>
                    </div>
                  </div></a
                >
              </li>
              <li class="nav-item" @click="activemenu(4)">
                <a
                  class="nav-link"
                  data-toggle="pill"
                  :class="activeitem == 4 ? 'active show' : ''"
                >
                  <div class="tab-main">
                    <div class="tab-img"><i class="ti-video-camera"></i></div>
                    <div class="tab-content">
                      <h3>talk in</h3>
                      <p>video call</p>
                    </div>
                  </div></a
                >
              </li>
            </ul>
          </div>
          <div class="tab-detail">
            <div class="tab-content">
              <div
                class="tab-pane container"
                id="tab1"
                :class="activeitem == 1 ? 'active show' : ''"
              >
                <img
                  class="img-fluid"
                  src="../../assets/images/landing/finger-tips/main.jpg"
                  alt="tab-detail-img"
                />
              </div>
              <div
                class="tab-pane container fade"
                id="tab2"
                :class="activeitem == 2 ? 'active show' : ''"
              >
                <img
                  class="img-fluid"
                  src="../../assets/images/landing/finger-tips/main.jpg"
                  alt="tab-detail-img"
                />
              </div>
              <div
                class="tab-pane container fade"
                id="tab3"
                :class="activeitem == 3 ? 'active show' : ''"
              >
                <img
                  class="img-fluid"
                  src="../../assets/images/landing/finger-tips/main.jpg"
                  alt="tab-detail-img"
                />
              </div>
              <div
                class="tab-pane container fade"
                id="tab4"
                :class="activeitem == 4 ? 'active show' : ''"
              >
                <img
                  class="img-fluid"
                  src="../../assets/images/landing/finger-tips/main.jpg"
                  alt="tab-detail-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- collaboration end -->
</template>

<script>
export default {
  data() {
    return {
      activeitem: 1,
    };
  },
  methods: {
    activemenu(id) {
      this.activeitem = id;
    },
  },
};
</script>
