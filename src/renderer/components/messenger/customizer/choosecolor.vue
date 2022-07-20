<template>
  <!--Customizer ChooseColor start -->
  <div class="color-picker">
    <h5>Choose color</h5>
    <ul class="colors">
      <li
        class="color"
        :class="activecolor == 'style' ? 'active' : ''"
        @click="activeColor('style')"
        data-attr="style"
      ></li>
      <li
        class="color1"
        :class="activecolor == 'style1' ? 'active' : ''"
        @click="activeColor('style1')"
        data-attr="style1"
      ></li>
      <li
        class="color2"
        :class="activecolor == 'style2' ? 'active' : ''"
        @click="activeColor('style2')"
        data-attr="style2"
      ></li>
      <li
        class="color3"
        :class="activecolor == 'style3' ? 'active' : ''"
        @click="activeColor('style3')"
        data-attr="style3"
      ></li>
      <li
        class="color4"
        :class="activecolor == 'style4' ? 'active' : ''"
        @click="activeColor('style4')"
        data-attr="style4"
      ></li>
      <li
        class="color5"
        :class="activecolor == 'style5' ? 'active' : ''"
        @click="activeColor('style5')"
        data-attr="style5"
      ></li>
      <li
        class="color6"
        :class="activecolor == 'style6' ? 'active' : ''"
        @click="activeColor('style6')"
        data-attr="style6"
      ></li>
    </ul>
  </div>
  <!--Customizer ChooseColor end -->
</template>

<script>
import layout from "../../../data/layout.json";
import { mapState } from "vuex";
export default {
  data() {
    return {
      activecolor: layout.config.color,
    };
  },
  computed: {
    ...mapState({
      togglerightside: (state) => state.common.togglerightside,
    }),
  },
  methods: {
    activeColor(index) {
      this.activecolor = index;
      if (
        document.getElementsByTagName("html")[0].classList.contains("style") ||
        document.getElementsByTagName("html")[0].classList.contains("style1") ||
        document.getElementsByTagName("html")[0].classList.contains("style2") ||
        document.getElementsByTagName("html")[0].classList.contains("style3") ||
        document.getElementsByTagName("html")[0].classList.contains("style4") ||
        document.getElementsByTagName("html")[0].classList.contains("style5") ||
        document.getElementsByTagName("html")[0].classList.contains("style6")
      ) {
        document
          .getElementsByTagName("html")[0]
          .classList.remove(
            "style",
            "style1",
            "style2",
            "style3",
            "style4",
            "style5",
            "style6"
          );
      }

      if (index == "style") {
        document.getElementsByTagName("html")[0].classList.add("style");
      } else if (index == "style1") {
        document.getElementsByTagName("html")[0].classList.add("style1");
      } else if (index == "style2") {
        document.getElementsByTagName("html")[0].classList.add("style2");
      } else if (index == "style3") {
        document.getElementsByTagName("html")[0].classList.add("style3");
      } else if (index == "style4") {
        document.getElementsByTagName("html")[0].classList.add("style4");
      } else if (index == "style5") {
        document.getElementsByTagName("html")[0].classList.add("style5");
      } else if (index == "style6") {
        document.getElementsByTagName("html")[0].classList.add("style6");
      }
      this.$store.dispatch("layout/setcolor", index);
      document.querySelector(".app-sidebar").classList.add("active");
      document.body.classList.remove("menu-active");
      document.body.classList.add("sidebar-active");
      this.$store.state.common.togglerightside = true;
    },
  },
};
</script>
