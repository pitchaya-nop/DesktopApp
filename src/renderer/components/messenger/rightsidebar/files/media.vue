<template>
  <!-- Right-Sidebar Files's Doc start -->
  <div class="media-gallery portfolio-section grid-portfolio">
    <div class="collapse-block open">
      <div v-for="(media, index) in media" :key="media.id">
        <h5 class="block-title" @click="toggle(index)">
          {{ media.date }}
          <label class="badge badge-primary sm ml-2">{{ media.badge }}</label>
        </h5>
        <div
          class="block-content"
          :style="[active(index) ? { display: 'none' } : { display: '' }]"
        >
          <div class="row share-media zoom-gallery">
            <div class="col-4 isotopeSelector filter">
              <div class="media-big">
                <div class="overlay">
                  <div class="border-portfolio">
                    <a  @click="openGallery(0)">
                      <div class="overlay-background">
                        <i class="ti-plus" aria-hidden="true"></i>
                      </div>
                      <img
                        class="img-fluid bg-img"
                        :src="getImgUrl(media.gallary1)"
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
                    <a  @click="openGallery(1)">
                      <div class="overlay-background">
                        <i class="ti-plus" aria-hidden="true"></i>
                      </div>
                      <img
                        class="img-fluid bg-img"
                        :src="getImgUrl(media.gallary2)"
                        alt="portfolio-image"
                    /></a>
                  </div>
                </div>
              </div>
              <div class="media-small isotopeSelector filter">
                <div class="overlay">
                  <div class="border-portfolio">
                    <a  @click="openGallery(2)">
                      <div class="overlay-background">
                        <i class="ti-plus" aria-hidden="true"></i>
                      </div>
                      <img
                        class="img-fluid bg-img"
                        :src="getImgUrl(media.gallary3)"
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
                    <a  @click="openGallery(3)">
                      <div class="overlay-background">
                        <i class="ti-plus" aria-hidden="true"></i>
                      </div>
                      <img
                        class="img-fluid bg-img"
                        :src="getImgUrl(media.gallary4)"
                        alt="portfolio-image"
                    /></a>
                  </div>
                </div>
              </div>
              <div class="media-small isotopeSelector filter fashion">
                <div class="overlay">
                  <div class="border-portfolio">
                    <a  @click="openGallery(4)">
                      <div class="overlay-background">
                        <i class="ti-plus" aria-hidden="true"></i>
                      </div>
                      <img
                        class="img-fluid bg-img"
                        :src="getImgUrl(media.gallary5)"
                        alt="portfolio-image"
                    /></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4" v-if="media.gallary6" @click="openGallery(1)">
              <div class="media-small isotopeSelector filter">
                <div class="overlay">
                  <div class="border-portfolio">
                    <a >
                      <div class="overlay-background">
                        <i class="ti-plus" aria-hidden="true"></i>
                      </div>
                      <img
                        class="img-fluid bg-img"
                        :src="getImgUrl(media.gallary2)"
                        alt="portfolio-image"
                    /></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4" v-if="media.gallary7">
              <div class="media-small isotopeSelector filter">
                <div class="overlay">
                  <div class="border-portfolio">
                    <a  @click="openGallery(2)">
                      <div class="overlay-background">
                        <i class="ti-plus" aria-hidden="true"></i>
                      </div>
                      <img
                        class="img-fluid bg-img"
                        :src="getImgUrl(media.gallary3)"
                        alt="portfolio-image"
                    /></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4" v-if="media.gallary8">
              <div class="media-small isotopeSelector filter">
                <div class="overlay">
                  <div class="border-portfolio">
                    <a  @click="openGallery(3)">
                      <div class="overlay-background">
                        <i class="ti-plus" aria-hidden="true"></i>
                      </div>
                      <img
                        class="img-fluid bg-img"
                        :src="getImgUrl(media.gallary4)"
                        alt="portfolio-image"
                    /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <client-only>
        <light-box
          :media="images"
          :showLightBox="false"
          :showThumbs="false"
          ref="lightbox"
        />
      </client-only>
    </div>
  </div>
  <!-- Right-Sidebar Files's Doc end -->
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      activeIndex: [],
      images: [
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
      ],
    };
  },
  computed: {
    ...mapState({
      media: (state) => state.sidebar.media,
    }),
  },
  methods: {
    openGallery(index) {
      this.$refs.lightbox.showImage(index);
    },
    getImgUrl(path) {
      return require("../../../../assets/images/" + path);
    },
    active(index) {
      if (this.activeIndex.indexOf(index) >= 0) {
        return true;
      } else {
        return false;
      }
    },
    toggle(id) {
      if (this.activeIndex.includes(id)) {
        this.activeIndex.splice(this.activeIndex.indexOf(id), 1);
        return;
      }
      this.activeIndex.push(id);
    },
  },
};
</script>
