<template>
<section class="massage_box">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div class="element-card">
              <div class="element-card-header heading">
                <h2>Shared Document</h2>
              </div>
              <div class="element-card-body typography">
                <div class="document">
                  <div class="filter-block">
                    <div class="collapse-block" v-bind:class="{ open: opendoc }">
                      <h5 class="block-title" @click="toggledoc()">Shared Document</h5>
                      <div class="block-content" v-bind:style=" opendoc ? 'display: ;' : 'display: none;' ">
                        <ul class="document-list">
                          <li><i class="ti-folder font-danger"></i>
                            <h5>Simple_practice_project-zip</h5>
                          </li>
                          <li><i class="ti-write font-success"></i>
                            <h5>Word_Map-jpg</h5>
                          </li>
                          <li><i class="ti-zip font-primary"></i>
                            <h5>Latest_Design_portfolio.pdf</h5>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="element-card">
              <div class="element-card-header heading">
                <h2>Shared Document</h2>
              </div>
              <div class="element-card-body typography">
                <div class="collapse-block" v-bind:class="{ open: openmedia }">
                  <h5 class="block-title" @click="togglemedia()">Shared Media</h5>
                  <div class="block-content" v-bind:style=" openmedia ? 'display: ;' : 'display: none;' ">
                    <div class="share-media">
                      <div class="row">
                        <div class="col-4">
                          <div class="media-big bg-size" :style="[{'background-image': 'url(' + getImgUrl('avtar/big/6.jpg') + ')'},styleObject]"></div>
                        </div>
                        <div class="col-4">
                          <div class="media-small" :style="[{'background-image': 'url(' + getImgUrl('avtar/big/7.jpg') + ')'},styleObject]"></div>
                          <div class="media-small" :style="[{'background-image': 'url(' + getImgUrl('avtar/big/8.jpg') + ')'},styleObject]"></div>
                        </div>
                        <div class="col-4">
                          <div class="media-small" :style="[{'background-image': 'url(' + getImgUrl('avtar/big/audiocall.jpg') + ')'},styleObject]"></div>
                          <div class="media-small" :style="[{'background-image': 'url(' + getImgUrl('avtar/big/9.jpg') + ')'},styleObject]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>

<script>
export default {
    data() {
        return {
            opendoc : true,
            openmedia : true,
            styleObject: {
              "background-size": "cover",
              "background-position": "center",
              display: "block",
            },   
        }
    },
    methods: {
        toggledoc() {
            this.opendoc = ! this.opendoc
        },
        togglemedia() {
            this.openmedia = ! this.openmedia
        },
        getImgUrl(path) {
          return require("../../../assets/images/" + path);
      },
    }
}
</script>