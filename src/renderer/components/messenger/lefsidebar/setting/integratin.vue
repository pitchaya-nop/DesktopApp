<template>
  <!-- Left-Sidebar Settings's Integratin start -->
  <div class="setting-block">
    <div class="block" :class="activesetting == 3 ? 'open' : ''">
      <div class="media">
        <div class="media-body">
          <h3>Integratin</h3>
        </div>
        <div class="media-right">
          <a
            class="icon-btn btn-outline-light btn-sm pull-right previous"
            href="javascript:void(0)"
            @click="activeSettingmenu(0)"
          >
            <feather type="chevron-left" size="15" height="15"> </feather
          ></a>
        </div>
      </div>
      <ul class="integratin">
        <li v-for="(item, index) in items" :key="index">
          <div class="media">
            <div class="media-left">
              <a
                :class="item.social_media_class"
                :href="item.link"
                target="_blank"
                ><i :class="item.social_media_icon"></i>
                <h5>{{ item.social_media }}</h5></a
              >
            </div>
            <div class="media-right">
              <div
                class="profile"
                :style="
                  item.img
                    ? [
                        { 'background-image': 'url(' + item.img + ')' },
                        styleObject,
                      ]
                    : ''
                "
              >
                <a v-if="item.slack" :href="item.link1" target="_blank"
                  ><feather
                    v-if="item.slack"
                    type="plus-circle"
                    size="15"
                    height="15"
                  ></feather
                ></a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="media">
      <div class="media-body">
        <h3>Integratin</h3>
        <h4>Sync Your Other Social Account</h4>
      </div>
      <div class="media-right">
        <a
          class="icon-btn btn-outline-light btn-sm pull-right next"
          href="javascript:void(0)"
          @click="activeSettingmenu(3)"
        >
          <feather type="chevron-right" size="15" height="15"></feather
        ></a>
      </div>
    </div>
  </div>
  <!-- Left-Sidebar Settings's Integratin end -->
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      items: [
        {
          social_media: "Facebook",
          social_media_icon: "fa fa-facebook",
          social_media_class: "fb",
          link: "https://www.facebook.com/login",
          img: require("@/assets/images/contact/1.jpg"),
        },
        {
          social_media: "instagram",
          social_media_icon: "fa fa-instagram",
          social_media_class: "insta",
          link: "https://www.instagram.com/accounts/login/?hl=en",
          img: require("@/assets/images/contact/2.jpg"),
        },
        {
          social_media: "twitter",
          social_media_icon: "fa fa-twitter",
          social_media_class: "twi",
          link: "https://twitter.com/login",
          img: require("@/assets/images/contact/3.jpg"),
        },
        {
          social_media: "google",
          social_media_icon: "fa fa-google",
          social_media_class: "ggl",
          link:
            "https://accounts.google.com/signin/v2/identifier?service=mail&amp;passive=true&amp;rm=false&amp;continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&amp;ss=1&amp;scc=1&amp;ltmpl=default&amp;ltmplcache=2&amp;emr=1&amp;osid=1&amp;flowName=GlifWebSignIn&amp;flowEntry=ServiceLogin",
          img: require("@/assets/images/contact/2.jpg"),
        },
        {
          social_media: "Slack",
          social_media_icon: "fa fa-slack",
          social_media_class: "slc",
          link: "#",
          link1: "https://slack.com/get-started#/",
          slack: true,
        },
      ],
      styleObject: {
        "background-size": "cover",
        "background-position": "center center",
        display: "block",
      },
    };
  },
  computed: {
    ...mapState({
      activesetting: (state) => state.common.activesetting,
    }),
  },
  methods: {
    activeSettingmenu(id) {
      this.$store.state.common.activesetting = id;
    },
  },
};
</script>
