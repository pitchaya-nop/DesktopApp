<template>
  <!-- Main Chat start -->
  <div
    class="chitchat-main"
    :class="togglerightside ? 'small-sidebar' : ''"
    id="content"
  >
    <div v-if="showModal">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog" role="document" style="max-width: 300px">
              <div class="modal-content">
                <!-- <div class="modal-header">
                  <h5 class="modal-title">Error</h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true" @click="showModal = false"
                      >&times;</span
                    >
                  </button>
                </div> -->
                <div
                  class="modal-body"
                  style="padding-top: 32px; display: flex; align-items: center"
                >
                  <!-- <p>Modal body text goes here.</p> -->
                  <img
                    :src="getErrorIcon()"
                    style="width: 22px; height: 22px; margin-right: 16px"
                  />
                  <span
                    style="text-align: left; font-weight: 600; font-size: 16px"
                    >{{ this.errorMessage }}</span
                  >
                  <!-- <h5>This file format can’t be sent.</h5> -->
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-danger"
                    style="
                      font-weight: 400;
                      color: #fff;
                      font-size: 14px;
                      padding: 5px 16px;
                      border-radius: 2px;
                    "
                    @click="showModal = false"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <div
      v-if="this.currentRoom.roomdisplay"
      style="
        display: flex;
        height: 65px;
        background: white;
        width: 100%;
        align-items: center;
        padding: 0 20px;
        border-bottom: 1px solid #eff1f2;
      "
    >
      <div
        class="profile"
        :style="
          this.currentRoom.roomdisplay.user.avatar != 'null'
            ? [
                {
                  'background-image':
                    'url(' + this.currentRoom.roomdisplay.user.avatar + ')',
                },
                styleObjectTitle,
              ]
            : [
                {
                  'background-image': 'url(' + getImgUrl() + ')',
                },
                styleObjectTitle,
              ]
        "
      ></div>
      <h2 style="font-weight: 500">
        {{
          this.currentRoom.roomdisplay.sessiontype == "GUEST"
            ? this.currentRoom.roomdisplay.guestUniqueName
            : this.currentRoom.roomdisplay.user.displayName
        }}
      </h2>
    </div>

    <div
      v-if="checkactive == null"
      class="chat-content tabto"
      :class="'active'"
    >
      <div
        class="scrolltopdirectchat messages custom-scroll"
        :class="activechatType == 1 ? 'active' : ''"
        id="chating"
        :style="{ height: '100vh' }"
      >
        <div class="contact-chat">
          <div class="rightchat animat-rate">
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
          </div>
        </div>
        <div class="call-list-center">
          <img src="../../assets/images/chat.png" alt="" />
          <div class="animated-bg"><i></i><i></i><i></i></div>
          <p style="left: 0; transform: none">Select a chat to start</p>
        </div>
      </div>
    </div>
    <div v-if="checkactive" class="chat-content tabto" :class="'active'">
      <!-- custom scroll to slow down -->
      <div
        class="scrolltopdirectchat messages"
        :class="activechatType == 1 ? 'active' : ''"
        id="chating"
        :style="[
          chatwallpaperIndex !== 0
            ? [
                { 'background-image': 'url(' + chatwallpaper + ')' },
                styleObject,
              ]
            : chatwallpapergrandiant !== ''
            ? [{ 'background-image': chatwallpapergrandiant }, styleObject]
            : '',
        ]"
      >
        <!-- <div>
          <h1>Hereeeeeeeeeeeee</h1>
          <ul>
            <li v-for="(item, index) in testdata" :key="index">
              <p>
                {{ item.name }} {{ item.image.thumnail }}
                {{ item.image.source }} {{ item.image.medium }} {{ item.type }}
                {{ item.uid }}
              </p>
            </li>
          </ul>
        </div>  -->

        <!-- <DirectChatHeader /> -->
        <DirectCustomChat />
        <!-- new message when scrolling top -->
        <!-- <div
          style="
            position: absolute;
            width: 100%;
            bottom: 0;
            left: 0;
            background: red;
            padding:16px;
            display:flex;
            justify-content:space-between
          "
        >
        <div>
          <span>New Message Naja</span> 
        </div>
         <div>
          <feather type="chevron-down"></feather>
        </div>
        </div> -->

        <!-- icon scroll down
        <div
          style="
            position: absolute;
            width: auto;
            bottom: 10px;
            right: 10px;
            background: red;
            padding:16px;
          "
        >
          <feather type="arrow-down"></feather>
        </div> -->
      </div>
      <div
        class="scrolltopgroupchat messages custom-scroll"
        :class="activechatType == 2 ? 'active' : ''"
        id="group_chat"
        :style="
          chatwallpaperIndex !== 0
            ? [
                { 'background-image': 'url(' + chatwallpaper + ')' },
                styleObject,
              ]
            : chatwallpapergrandiant !== ''
            ? [{ 'background-image': chatwallpapergrandiant }, styleObject]
            : ''
        "
      >
        <GroupChatHeader />
        <GroupCustomChat />
      </div>

      <div
        class="scrolltopgroupchat messages custom-scroll"
        :class="activechatType == 3 ? 'active' : ''"
        id="group_chat"
        :style="
          chatwallpaperIndex !== 0
            ? [
                { 'background-image': 'url(' + chatwallpaper + ')' },
                styleObject,
              ]
            : chatwallpapergrandiant !== ''
            ? [{ 'background-image': chatwallpapergrandiant }, styleObject]
            : ''
        "
      >
        <OfficialChatHeader />
        <OfficialCustomChat />
      </div>
      <div v-if="this.isblockroom" class="message-input-block" style="height:160px;display:flex;align-items:center;justify-content:center">
        You can't message this user because they either blocked you or deleted
        their account.
      </div>
      <div v-if="!this.isblockroom" class="message-input" style="padding: 0">
        <div class="wrap emojis-main" style="height: 48px; padding: 12px">
          <a
            title="Image"
            @click="$refs.file.click()"
            href="javascript:void(0)"
            style="margin-right:10px"
          >
            <feather type="image" size="24" stroke="#77767D"></feather>
          </a>
          <a @click="openEmogi()" href="javascript:void(0)">
            <feather type="smile" size="24" stroke="#77767D"></feather>
          </a>

          <!-- <feather type="send" size="24"></feather> -->
          <!-- <a
            title="Image"
            @click="$refs.file.click()"
            class="icon-btn btn-outline-primary button-effect toggle-emoji"
            href="javascript:void(0)"
          >
            <feather type="image" size="24" height="15"></feather>
          </a>
          <a
            class="icon-btn btn-outline-primary button-effect toggle-emoji"
            @click="openEmogi()"
            href="javascript:void(0)"
            ><feather type="smile" size="24" height="15"></feather
          ></a>
          <button
            class="submit icon-btn btn-primary mr-3"
            :class="text === '' ? 'disabled' : ''"
            id="send-msg"
            :disabled="text === ''"
            @click="handleAddChat()"
          >
            <feather type="send" size="15" height="15"></feather>
          </button> -->
        </div>
        <div class="wrap emojis-main" style="height: 112px">
          <!-- <div class="mr-3">
            
            <a
              title="Image"
              @click="$refs.file.click()"
              class="icon-btn btn-outline-primary button-effect toggle-emoji"
              href="javascript:void(0)"
              ><feather type="image" size="15" height="15"></feather
            ></a>
          </div> -->
          <input
            id="fileimage"
            type="file"
            ref="file"
            accept="image/png, image/jpeg"
            @change="onFileChange"
            hidden
            multiple
          />
          <!-- <a
            class="
              icon-btn
              btn-outline-primary
              button-effect
              mr-3
              toggle-sticker
              outside
            "
            @click="openSticker()"
            href="javascript:void(0)"
          >
            <svg
              id="Layer_1"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="2158px"
              height="2148px"
              viewBox="0 0 2158 2148"
              enable-background="new 0 0 2158 2148"
              space="preserve"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="none"
                stroke="#000000"
                stroke-width="60"
                stroke-miterlimit="10"
                d="M699,693                        c0,175.649,0,351.351,0,527c36.996,0,74.004,0,111,0c18.058,0,40.812-2.485,57,1c11.332,0.333,22.668,0.667,34,1                        c7.664,2.148,20.769,14.091,25,20c8.857,12.368,6,41.794,6,62c0,49.329,0,98.672,0,148c175.649,0,351.351,0,527,0                        c0-252.975,0-506.025,0-759C1205.692,693,952.308,693,699,693z"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M886,799c59.172-0.765,93.431,25.289,111,66c6.416,14.867,14.612,39.858,9,63                        c-2.391,9.857-5.076,20.138-9,29c-15.794,35.671-47.129,53.674-90,63c-20.979,4.563-42.463-4.543-55-10                        c-42.773-18.617-85.652-77.246-59-141c10.637-25.445,31.024-49,56-60c7.999-2.667,16.001-5.333,24-8                        C877.255,799.833,882.716,801.036,886,799z"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1258,799c59.172-0.765,93.431,25.289,111,66c6.416,14.867,14.612,39.858,9,63                        c-2.391,9.857-5.076,20.138-9,29c-15.794,35.671-47.129,53.674-90,63c-20.979,4.563-42.463-4.543-55-10                        c-42.773-18.617-85.652-77.246-59-141c10.637-25.445,31.024-49,56-60c7.999-2.667,16.001-5.333,24-8                        C1249.255,799.833,1254.716,801.036,1258,799z"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1345,1184c-0.723,18.71-11.658,29.82-20,41c-18.271,24.489-50.129,37.183-83,47                        c-7.333,1-14.667,2-22,3c-12.013,2.798-33.636,5.15-44,3c-11.332-0.333-22.668-0.667-34-1c-15.332-3-30.668-6-46-9                        c-44.066-14.426-80.944-31.937-110-61c-22.348-22.353-38.992-45.628-37-90c0.667,0,1.333,0,2,0c9.163,5.585,24.723,3.168,36,6                        c26.211,6.583,54.736,7.174,82,14c34.068,8.53,71.961,10.531,106,19c9.999,1.333,20.001,2.667,30,4c26.193,6.703,54.673,7.211,82,14                        C1304.894,1178.445,1325.573,1182.959,1345,1184z"
              ></path>
              <polygon
                fill-rule="evenodd"
                clip-rule="evenodd"
                points="668.333,1248.667 901.667,1482 941.667,1432 922.498,1237.846                         687,1210.667 "
              ></polygon></svg
          ></a> -->
          <!-- <div class="mr-3">
            <a
              class="icon-btn btn-outline-primary button-effect toggle-emoji"
              @click="openEmogi()"
              href="javascript:void(0)"
              ><feather type="smile" size="15" height="15"></feather
            ></a>
          </div> -->
          <!-- <div class="contact-poll">
            <b-dropdown
              size="lg"
              variant="link"
              toggle-class="text-decoration-none"
              no-caret
            >
              <template #button-content>
                <a
                  class="icon-btn btn-outline-primary mr-4 outside"
                  @click="openContactcontent()"
                  href="javascript:void(0)"
                  ><i class="fa fa-plus"></i
                ></a>
              </template>
              <b-dropdown-item href="javascript:void(0)"
                ><feather type="image"></feather>gallery</b-dropdown-item
              >
              <b-dropdown-item href="javascript:void(0)"
                ><feather type="camera"></feather>camera</b-dropdown-item
              >
              <b-dropdown-item
                href="javascript:void(0)"
                @click="showsnippetmodal()"
                ><a
                  ><feather type="code"></feather>Code Snippest</a
                ></b-dropdown-item
              >
              <b-dropdown-item href="javascript:void(0)"
                ><feather type="user"></feather>contact</b-dropdown-item
              >
              <b-dropdown-item href="javascript:void(0)"
                ><feather type="map-pin"></feather>location</b-dropdown-item
              >
              <b-dropdown-item href="javascript:void(0)"
                ><feather type="clipboard"></feather>document</b-dropdown-item
              >
              <b-dropdown-item
                href="javascript:void(0)"
                @click="showpollmodal()"
                ><feather type="bar-chart-2"></feather>poll</b-dropdown-item
              >
              <b-dropdown-item href="javascript:void(0)"
                ><feather type="paperclip"></feather>attach</b-dropdown-item
              >
            </b-dropdown>
          </div> -->

          <textarea
            class="setemoj"
            id="setemoj"
            v-model="text"
            @keydown.enter.exact.prevent
            v-on:keyup.enter="addChat"
            type="text"
            style="width: 100%; border: 0;border-top: 1px solid #eff1f2;"
            placeholder="Write your message..."
          />
          <!-- v-on:keyup.enter="addChat()" -->
          <!-- <a
            class="icon-btn btn-outline-primary button-effect mr-3 ml-3"
            href="javascript:void(0)"
            ><feather type="mic" size="15" height="15"></feather>
          </a> -->
          <!-- <div class="mr-3 ml-3">
            <button
              class="submit icon-btn btn-primary mr-3"
              :class="text === '' ? 'disabled' : ''"
              id="send-msg"
              :disabled="text === ''"
              @click="handleAddChat()"
            >
              <feather type="send" size="15" height="15"></feather>
            </button>
          </div> -->
          <div class="emojis-contain" :class="showemogi ? 'open' : ''">
            <div class="emojis-sub-contain custom-scroll">
              <ul>
                <li
                  v-for="(emogi, index) in emogi"
                  :key="index"
                  @click="addemogi(emogi.emoji)"
                >
                  {{ emogi.emoji }}
                </li>
              </ul>
            </div>
          </div>
          <Stickers />
        </div>
      </div>
    </div>
    <!-- <div class="call-content tabto" :class="activechat == 2 ? 'active' : ''">
      <a
        class="icon-btn btn-outline-primary button-effect mobile-back mb-3"
        @click="backtochat()"
        href="javascript:void(0)"
        ><i class="ti-angle-left"> </i
      ></a>
      <CallContent />
    </div> -->
    <div class="contact-content tabto" :class="iscontact ? 'active' : ''">
      <ContactContent />
    </div>

    <CodeSnippet ref="codesnippet" />
    <Poll ref="poll" />
  </div>
  <!-- Main Chat end -->
</template>

<script>
import { mapState } from "vuex";
import emogi from "../../data/emogi.json";
import Stickers from "./stickers.vue";
import DropDown from "./common/dropdown.vue";
import DirectChatHeader from "./chat/DirectChat/directchatheader.vue";
import DirectCustomChat from "./chat/DirectChat/directcustomchat.vue";
import CallContent from "./calls/callcontent.vue";
import ContactContent from "./contacts/contactcontent.vue";
import GroupChatHeader from "./chat/GroupChat/groupchatheader.vue";
import GroupCustomChat from "./chat/GroupChat/groupcustomchat.vue";
import CodeSnippet from "../messenger/modals/codesnippets.vue";
import Poll from "../messenger/modals/pollModal.vue";
import OfficialChatHeader from "./chat/OfficialChat/officialchatheader.vue";
import OfficialCustomChat from "./chat/OfficialChat/officialcustomchat.vue";
import { v4 as uuidv4 } from "uuid";
export default {
  components: {
    Stickers,
    DropDown,
    DirectChatHeader,
    DirectCustomChat,
    CallContent,
    ContactContent,
    GroupChatHeader,
    GroupCustomChat,
    CodeSnippet,
    Poll,
    OfficialChatHeader,
    OfficialCustomChat,
  },
  data() {
    return {
      // currentchat: [],
      text: "",
      emogi: emogi,
      emogiarray: [],
      testdata: [],
      blockroom: false,
      roomdisplay: null,
      showModal: false,
      errorMessage: "",
      styleObject: {
        "background-color": "transparent",
        "background-blend-mode": "unset",
      },
      styleObjectTitle: {
        "background-size": "cover",
        "background-position": "center",
        display: "block",
        "margin-right": "0.5rem",
      },
    };
  },
  watch: {
    chatwallpaperIndex() {
      this.$store.state.common.chatwallpaper =
        this.chatwallpaperIndex !== 0
          ? this.getImgUrl(
              this.allwallpaper.find((x) => x.id === this.chatwallpaperIndex)
                .img
            )
          : "";
    },
  },
  methods: {
    // async getrealmdb() {
    //   const val = await this.getUser;
    //   this.testdata = val.objects("USER");
    //   console.log(this.testdata.length);
    //   for (let i = 0; i < this.testdata.length; i++) {
    //     console.log(this.testdata[i].image.source);
    //   }
    // },
    // writerealmdb() {
    //   let ran = Math.random().toString(36).substr(2, 5);

    //   let ava = {
    //     thumnail: "1.jpg",
    //     source: "2.jpg",
    //     medium: "3.jpg",
    //   };

    //   this.addUser("nop", ava, "owner", ran);
    // },
    // removerealm() {
    //   this.ClearRealm();
    // },
    openSticker() {
      (this.$store.state.common.showemogi = false),
        (this.$store.state.common.showcontactcontent = false),
        (this.$store.state.common.showsticker =
          !this.$store.state.common.showsticker);
    },
    openEmogi() {
      (this.$store.state.common.showsticker = false),
        (this.$store.state.common.showcontactcontent = false),
        (this.$store.state.common.showemogi =
          !this.$store.state.common.showemogi);
    },
    openContactcontent() {
      (this.$store.state.common.showsticker = false),
        (this.$store.state.common.showemogi = false),
        (this.$store.state.common.showcontactcontent =
          !this.$store.state.common.showcontactcontent);
    },
    showsnippetmodal() {
      this.$refs.codesnippet.show();
    },
    showpollmodal() {
      this.$refs.poll.show();
    },
    backtochat() {
      document.querySelector(".sidebar-toggle").classList.remove("mobile-menu");
    },
    generatenanosec(){
      let millisectime = new Date().getTime()
      return millisectime * 1000000;
    },
    imageDimensions(file) {
      return new Promise((resolve, reject) => {
        const img = new Image();

        // the following handler will fire after a successful loading of the image
        img.onload = () => {
          const { naturalWidth: width, naturalHeight: height, src: src } = img;
          resolve({ width, height, src });
        };
        img.onerror = () => {
          reject("There was some problem with the image.");
        };

        img.src = URL.createObjectURL(file);
      });
    },

    async onFileChange(e) {
      let arrimg = [];
      const payload = {
        sessionId: this.sessionID,
        referenceKey: uuidv4(),
        contentType: "IMAGE",
        content: "",
        destructTime: 0,
        senderId: this.profile.id,
        oaId: this.profile.id,
        media: [],
      };
      if (e.target.files.length > 0) {
        for (let i = 0; i < e.target.files.length; i++) {
          if (e.target.files[i].size > 10 * 1024 * 1024) {
            this.showModal = true;
            document.getElementById("fileimage").value = "";
            this.errorMessage =
              "You can only send up to 10MB of file at a time.";
            return false;
          }
          if (e.target.files.length > 10) {
            this.showModal = true;
            document.getElementById("fileimage").value = "";
            this.errorMessage = "You can select no more than 10 items.";
            return false;
          }
          const dataimage = await this.imageDimensions(e.target.files[i]);
          payload.media.push({
            id: "",
            imageSource: dataimage.src,
            imageMedium: "",
            imageThumbnail: "",
            type: "",
            mediaRefKey: `${i}`,
            width: dataimage.width,
            height: dataimage.height,
            cancelMedia: false,
            createdTime: "",
            indexMedia: 0,
            timeStamp: 0,
          });
        }
        // console.log(payload);
        // payload.dummyfile = e.target.files
        this.addDataToRealm(payload, "addDummyMessage");
        this.setMessage(this.sessionID);
        setTimeout(() => {
          this.scrollbottom();
        }, 50);

        for (let i = 0; i < e.target.files.length; i++) {
          const formdata = new FormData();
          formdata.append("file", e.target.files[i]);
          formdata.append("sessionId", this.sessionID);
          formdata.append("mediaRefKey", uuidv4());
          const resimg = await this.$store.dispatch(
            "chat/uploadImage",
            formdata
          );
          if (resimg.data.code === "0000") {
            arrimg.push(resimg.data.data);
          }
        }
        payload.media = arrimg;
        const res = await this.$store.dispatch("chat/addChat", payload);
        // console.log(res);
        this.scrollbottom();
      }
      document.getElementById("fileimage").value = "";
      // if(resimg.data.code === '0000'){
      //   console.log(true);
      //   let arrimg = []
      //   arrimg.push(resimg.data.data)
      //   console.log(arrimg);
      //   const payload = {
      //       sessionId: this.sessionID,
      //       referenceKey: uuidv4(),
      //       contentType: "IMAGE",
      //       content: "",
      //       destructTime: 0,
      //       senderId: this.profile.id,
      //       oaId:this.profile.id,
      //       media:arrimg
      //     };
      //     // this.addDataToRealm(payload, "addDummyMessage");

      //     const res = await this.$store.dispatch("chat/addChat", payload);
      //     // console.log(res);
      //     this.scrollbottom()
      // }
    },

    async addChat(e) {
      if (e.keyCode == 13 && e.shiftKey == false) {
        if (this.text != "") {
          const payload = {
            sessionId: this.sessionID,
            referenceKey: uuidv4(),
            contentType: "TEXT",
            content: this.text,
            // this.text.slice(0, -1)
            messagetimestamp:this.generatenanosec(),
            destructTime: 0,
            senderId: this.profile.id,
            oaId: this.profile.id,
          };
          this.text = "";
          this.emogiarray = [];
          this.addDataToRealm(payload, "addDummyMessage");
          this.setMessage(this.sessionID);
          const res = await this.$store.dispatch("chat/addChat", payload);

          if (res.data.code == "0000") {
            this.addDataToRealm(res.data.data, "updateDummyMesaage");
          }
          this.scrollbottom();
          if (res.data.message != "success") {
            this.addDataToRealm(payload, "failedUpdateDummyMesaage");
            this.setMessage(this.sessionID);
          }

          // var container = this.$el.querySelector(".scrolltopdirectchat");
          // container.scrollTop = container.scrollHeight;
          // container.className += " custom-scroll";
          // setTimeout(function () {
          // container.scrollBy({ top: 1000, behavior: "smooth" });
          // container.scrollTop = container.scrollHeight;
          //   container.className = container.className.replace(
          //     " custom-scroll",
          //     ""
          //   );
          // }, 50);
          // setTimeout(function () {
          //   container.scrollBy({ top: 1000, behavior: "smooth" });
          // }, 1100);
          // }
          // else {
          //   this.$store.dispatch("groupchat/addChat", this.text);
          //   var containerfluid = this.$el.querySelector(".scrolltopgroupchat");
          //   setTimeout(function () {
          //     containerfluid.scrollBy({ top: 200, behavior: "smooth" });
          //   }, 310);
          //   setTimeout(function () {
          //     containerfluid.scrollBy({ top: 200, behavior: "smooth" });
          //   }, 1100);
          // }

          // this.text = "";
          // this.emogiarray = [];
          if (this.$store.state.common.showemogi === true) {
            this.$store.state.common.showemogi = false;
          }
        }
      }
    },
    async handleAddChat() {
      if (this.text != "") {
        const payload = {
          sessionId: this.sessionID,
          referenceKey: uuidv4(),
          contentType: "TEXT",
          content: this.text,
          destructTime: 0,
          senderId: this.profile.id,
          oaId: this.profile.id,
        };
        this.text = "";
        this.emogiarray = [];
        this.addDataToRealm(payload, "addDummyMessage");
        this.setMessage(this.sessionID);
        const res = await this.$store.dispatch("chat/addChat", payload);
        console.log(res);
        if (res.data.message != "success") {
          this.addDataToRealm(payload, "failedUpdateDummyMesaage");
          this.setMessage(this.sessionID);
        }
        this.scrollbottom();
        if (this.$store.state.common.showemogi === true) {
          this.$store.state.common.showemogi = false;
        }
      }
    },
    scrollbottom() {
      var container = this.$el.querySelector(".scrolltopdirectchat");
      console.log("scrol to bottom");
      container.scrollTop = container.scrollHeight;
    },
    getImgUrl() {
      return require("../../assets/images/avtar/defaultimageoa.png");
    },
    getErrorIcon() {
      return require("../../assets/images/erroricon.png");
    },
    addemogi(emogi) {
      if (this.text === "") {
        this.text = emogi;
        this.emogiarray.push(emogi);
      } else {
        this.emogiarray.push(emogi);
        this.text = this.emogiarray.join(" ");
      }
      // this.$store.state.common.showemogi = false;
    },
  },
  mounted() {
    this.$store.state.common.chatwallpaper =
      this.chatwallpaperIndex !== 0
        ? this.getImgUrl(
            this.allwallpaper.find((x) => x.id === this.chatwallpaperIndex).img
          )
        : "";
    this.$store.state.common.chatwallpapergrandiant = "";
    this.$store.state.common.togglerightside = true;

    var container = this.$el.querySelector(".scrolltopdirectchat");
    container.scrollTop = container.scrollHeight;
    // var containerfluid = this.$el.querySelector(".scrolltopgroupchat");
    // containerfluid.scrollTop = container.scrollHeight;
  },
  computed: {
    ...mapState({
      showsticker: (state) => state.common.showsticker,
      showemogi: (state) => state.common.showemogi,
      showcontactcontent: (state) => state.common.showcontactcontent,
      activechat: (state) => state.common.activechat,
      activechatType: (state) => state.common.activechatType,
      togglerightside: (state) => state.common.togglerightside,
      activerightsidebarmenu: (state) => state.common.activerightsidebarmenu,
      chatwallpaper: (state) => state.common.chatwallpaper,
      allwallpaper: (state) => state.common.allwallpaper,
      chatwallpapergrandiant: (state) => state.common.chatwallpapergrandiant,
      chatwallpaperIndex: (state) => state.common.chatwallpaperIndex,
      checkactive: (state) => state.chat.activeuser,
      iscontact: (state) => state.common.iscontact,
      activecontact: (state) => state.contact.activecontact,
      sessionID: (state) => state.chat.session,
      profile: (state) => state.auth.profile,
      isblockroom: (state) => state.common.isblockroom,

      currentRoom() {
        return (this.roomdisplay = this.$store.getters["room/currentRoom"]);
      },
    }),
  },
};
</script>

