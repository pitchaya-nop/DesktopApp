<template>
  <!-- Right-Sidebar Profile's Shared Media start -->
  <div class="media-gallery portfolio-section grid-portfolio">
    <div class="collapse-block">
      <h5 class="block-title" @click="toggledoc()">
        Shared Media
        <label class="badge badge-primary sm ml-2">2</label>
      </h5>
      <div
        class="block-content"
        :style="opendoc ? 'display:block' : 'display:none'"
      >
        <div class="row share-media zoom-gallery">
          <div class="col-12">
            <h6 class="mb-2">22/03/2019</h6>
          </div>
          <div class="col-4 isotopeSelector filter">
            <div class="media-big">
              <div class="overlay">
                <div class="border-portfolio">
                  <a @click="openGallery(0)">
                    <div class="overlay-background">
                      <i class="ti-plus" aria-hidden="true"></i>
                    </div>
                    <img
                      class="img-fluid bg-img"
                      src="../../../../assets/images/gallery/1.jpg"
                      alt="portfolio-image"
                  /></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="media-small isotopeSelector filter">
              <div class="overlay">
                <div class="border-portfolio">
                  <a @click="openGallery(1)">
                    <div class="overlay-background">
                      <i class="ti-plus" aria-hidden="true"></i>
                    </div>
                    <img
                      class="img-fluid bg-img"
                      src="../../../../assets/images/gallery/2.jpg"
                      alt="portfolio-image"
                  /></a>
                </div>
              </div>
            </div>
            <div class="media-small isotopeSelector filter">
              <div class="overlay">
                <div class="border-portfolio">
                  <a @click="openGallery(2)">
                    <div class="overlay-background">
                      <i class="ti-plus" aria-hidden="true"></i>
                    </div>
                    <img
                      class="img-fluid bg-img"
                      src="../../../../assets/images/gallery/3.jpg"
                      alt="portfolio-image"
                  /></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="media-small isotopeSelector filter">
              <div class="overlay">
                <div class="border-portfolio">
                  <a @click="openGallery(3)">
                    <div class="overlay-background">
                      <i class="ti-plus" aria-hidden="true"></i>
                    </div>
                    <img
                      class="img-fluid bg-img"
                      src="../../../../assets/images/gallery/4.jpg"
                      alt="portfolio-image"
                  /></a>
                </div>
              </div>
            </div>
            <div class="media-small isotopeSelector filter fashion">
              <div class="overlay">
                <div class="border-portfolio">
                  <a @click="openGallery(4)">
                    <div class="overlay-background">
                      <i class="ti-plus" aria-hidden="true"></i>
                    </div>
                    <img
                      class="img-fluid bg-img"
                      src="../../../../assets/images/gallery/5.jpg"
                      alt="portfolio-image"
                  /></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <h6 class="mb-2 mt-2">20/04/2019</h6>
          </div>
          <div class="col-4">
            <div class="media-small isotopeSelector filter">
              <div class="overlay">
                <div class="border-portfolio">
                  <a @click="openGallery(5)">
                    <div class="overlay-background">
                      <i class="ti-plus" aria-hidden="true"></i>
                    </div>
                    <img
                      class="img-fluid bg-img"
                      src="../../../../assets/images/gallery/2.jpg"
                      alt="portfolio-image"
                  /></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="media-small isotopeSelector filter">
              <div class="overlay">
                <div class="border-portfolio">
                  <a @click="openGallery(6)">
                    <div class="overlay-background">
                      <i class="ti-plus" aria-hidden="true"></i>
                    </div>
                    <img
                      class="img-fluid bg-img"
                      src="../../../../assets/images/gallery/3.jpg"
                      alt="portfolio-image"
                  /></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="media-small isotopeSelector filter">
              <div class="overlay">
                <div class="border-portfolio">
                  <a @click="openGallery(7)">
                    <div class="overlay-background">
                      <i class="ti-plus" aria-hidden="true"></i>
                    </div>
                    <img
                      class="img-fluid bg-img"
                      src="../../../../assets/images/gallery/4.jpg"
                      alt="portfolio-image"
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <client-only>
        <light-box
          :media="media"
          :showLightBox="false"
          :showThumbs="false"
          ref="lightbox"
        />
      </client-only>
    </div>
  </div>
  <!-- Right-Sidebar Profile's Shared Media end -->
</template>

<script>
export default {
  data() {
    return {
      opendoc: true,
      media: [
        {
          src: require("@/assets/images/gallery/1.jpg"),
        },
        {
          src: require("@/assets/images/gallery/2.jpg"),
        },
        {
          src: require("@/assets/images/gallery/3.jpg"),
        },
        {
          src: require("@/assets/images/gallery/4.jpg"),
        },
        {
          src: require("@/assets/images/gallery/5.jpg"),
        },
        {
          src: require("@/assets/images/gallery/2.jpg"),
        },
        {
          src: require("@/assets/images/gallery/3.jpg"),
        },
        {
          src: require("@/assets/images/gallery/4.jpg"),
        },
      ],
    };
  },
  methods: {
    openGallery(index) {
      this.$refs.lightbox.showImage(index);
    },
    toggledoc() {
      this.opendoc = !this.opendoc;
    },
  },
};
</script>
