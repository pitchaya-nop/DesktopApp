<template>
  <!--Direct Chat start -->
  <div class="contact-chat">
    <ul class="chatappend" style="position: relative">
      <div class="text-center loadchat" v-if="this.loading">
        <b-spinner
          label="Loading..."
          style="position: fixed; width: 4rem; height: 4rem"
        ></b-spinner>
      </div>

      <template v-if="currentChat.chat">
        <div v-for="(data, idx) in currentChat.chat" :key="idx">
          <div class="notice_date_block">
            <p class="notice_center" style="width:96px;margin:auto">
            {{data.field}}
            <!-- {{groupMessageTimeDisplay(data.field)}} -->
          </p>
          </div>
          
        <li
          :class="
            chat.senderid == userprofile.id ||
            chat.oaid !== '' ||
            checksender(chat.senderid, chat)
              ? 'sent'
              : 'replies'
          "
          v-for="(chat, index) in data.groupList"
          :key="index"
          :style="
            currentChat.unread &&
            chat.senderid != userprofile.id &&
            chat.createdtime == currentChat.unread &&
            chat.messageid == currentChat.firstunread
              ? 'width:100%'
              : 'width:80%'
          "
          
        >
        
       
          <p
            class="unreadmessage notice_center"
            
            v-if="
              currentChat.unread &&
              chat.createdtime == currentChat.unread &&
              chat.messageid == currentChat.firstunread &&
              chat.senderid != userprofile.id &&
              roomtype == 'user'
            "
          >
            Unread message below
          </p>
          <p
            class="unreadmessage notice_center"
            
            v-if="
              currentChat.unread &&
              chat.createdtime == currentChat.unread &&
              chat.messageid == currentChat.firstunread &&
              roomtype == 'official' &&
              checksender(chat.senderid) != true
            "
          >
            Unread message below
          </p>
          <!-- {
                        'background-image':
                          userprofile.avatars.source != 'null'
                            ? `url(${userprofile.avatars.source})`
                            : 'url(' + getImgUrl() + ')',
                      },
                      styleObject, -->
          <div class="media">
            <div
              class="profile mr-2"
              :style="
                chat.senderid == userprofile.id ||
                chat.oaid !== '' ||
                checksender(chat.senderid)
                  ? [
                      {
                        display: 'none',
                      },
                    ]
                  : [
                      {
                        'background-image':
                          chat.avatar != 'null'
                            ? `url(${chat.avatar})`
                            : 'url(' + getImgUrl() + ')',
                        border:
                          chat.avatar != 'null' ? 'none' : '1px solid #edeff0',
                      },
                      styleObject,
                    ]
              "
            ></div>
            <div class="media-body">
              <div class="contact-name">
                <!-- <h5>
                  {{
                    chat.senderid == userprofile.id ||
                    chat.oaid !== "" ||
                    checksender(chat.senderid)
                      ? ""
                      : chat.displayname
                  }}
                </h5> -->
                <!-- <h6>{{ chat.time }}</h6> -->
                <ul class="msg-box">
                  <!-- v-if="currentChat.chat.id == 0 && !chat.stickerpath" -->
                  <li class="msg-setting-main">
                    <!-- <DropDown v-if="chat.sender == 0 && !chat.lastmsg" /> -->
                    <!-- v-if="chat.contenttype == 'TEXT'" -->
                    <!-- <div style="height:200px">form</div> -->
                    <h5
                      v-if="chat.contenttype == 'TEXT'"
                      v-linkified="{ className: 'colorLink', target: '_blank' }"
                      style="
                        white-space: pre-wrap;
                        text-align: left;
                        word-break: break-all;
                      "
                    >{{ chat.content }}</h5>
                    <div
                      v-if="chat.contenttype == 'IMAGE'"
                      :style="
                        chat.senderid == userprofile.id ||
                        chat.oaid !== '' ||
                        checksender(chat.senderid)
                          ? `background:transparent;border-radius:6px 2px 6px 6px`
                          : `background:transparent;border-radius:2px 6px 6px 6px;`
                      "
                    >
                      <div
                        style="display: flex; flex-wrap: wrap; max-width: 268px"
                        :style="chat.media.length > 1 ? 'width:268px' : ''"
                      >
                        <div v-if="chat.media.length === 1">
                          <div
                            v-for="image in chat.media"
                            :key="image.mediaRefKey"
                            :style="'flex:0 0 100%'"
                          >
                            <div
                              v-bind:style="{
                                height: numcalcHeight(
                                  image.width,
                                  image.height
                                ),
                                'min-height': numcalcHeight(
                                  image.width,
                                  image.height
                                ),
                                width: checkwidth(image.width, image.height),
                                'max-width': '268px',
                                cursor: 'pointer',
                                'background-image': `url('${getDefaultimage()}')`,
                                'background-size': 'cover',
                                'background-position': 'center',
                                'border-radius':
                                  chat.senderid == userprofile.id ||
                                  chat.oaid !== '' ||
                                  checksender(chat.senderid)
                                    ? '6px 2px 6px 6px'
                                    : '2px 6px 6px 6px',
                              }"
                              @click="previewimage(image.imageSource)"
                            >
                              <img
                                :src="image.imageSource"
                                style="width: 100%; height: 100%"
                                :style="
                                  chat.senderid == userprofile.id ||
                                  chat.oaid !== '' ||
                                  checksender(chat.senderid)
                                    ? 'border-radius:6px 2px 6px 6px'
                                    : 'border-radius:2px 6px 6px 6px'
                                "
                              />
                            </div>
                          </div>
                        </div>

                        <div
                          v-if="chat.media.length > 1"
                          style="display: flex; flex-wrap: wrap"
                        >
                          <div
                            v-for="image in chat.media"
                            :key="image.mediaRefKey"
                            style="
                              flex: 1 1 50%;
                              height: 100px;
                              padding: 1px;
                              cursor: pointer;
                            "
                            :style="{
                              'background-image': `url('${getDefaultimage()}')`,
                              'background-size': 'cover',
                              'background-position': 'center',
                            }"
                            @click="previewimage(image.imageSource)"
                          >
                            <img
                              :src="image.imageSource"
                              style="
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                              "
                            />
                            <!-- :style="
                                  chat.senderid == userprofile.id ||
                                  chat.oaid !== '' ||
                                  checksender(chat.senderid)
                                    ? 'border-radius:6px 2px 6px 6px'
                                    : 'border-radius:2px 6px 6px 6px'
                                " -->
                          </div>
                        </div>
                      </div>
                      <!-- min-width:100px;
                                    min-height:100px;
                                    max-width:257px;
                                    max-height:346px;
                                    border-radius:6px 2px 6px 6px -->
                      <!-- <a @click="preview()"></a> -->
                      <!-- <img 
                      :src="chat.media[0].imageSource" 
                      style="
                      width:auto;height:auto; 
                      min-width:100px;
                      min-height:100px;
                      max-width:257px;
                      max-height:346px;
                      border-radius:6px 2px 6px 6px
                      " 
                      :style="(chat.senderid == userprofile.id) || checksender(chat.senderid)?'border-radius:6px 2px 6px 6px':'border-radius:2px 6px 6px 6px'"
                      /> -->
                    </div>

                    <div style="display: flex">
                      <div
                        v-if="
                          chat.status == 'READ' &&
                          (chat.senderid == userprofile.id ||
                            chat.oaid !== '' ||
                            checksender(chat.senderid))
                        "
                        class="badge sm"
                        style="display: block"
                      >
                        <img
                          :src="getReadicon()"
                          style="width: 11px; height: 8px"
                        />
                      </div>
                      <div
                        v-if="chat.status == 'READ'"
                        class="badge sm ml-2"
                        style="color: #8d92c4"
                      >
                        {{ infoTime(chat.createdtime) }}
                      </div>
                    </div>
                    <div style="display: flex">
                      <div
                        v-if="
                          chat.status == 'SENT' &&
                          (chat.senderid == userprofile.id ||
                            chat.oaid !== '' ||
                            checksender(chat.senderid))
                        "
                        class="badge sm"
                        style="display: block"
                      >
                        <img
                          :src="getUnreadicon()"
                          style="width: 11px; height: 8px"
                        />
                      </div>
                      <div
                        v-if="chat.status == 'SENT'"
                        class="badge sm ml-2"
                        style="color: #8d92c4"
                      >
                        {{ infoTime(chat.createdtime) }}
                      </div>
                    </div>
                    <div
                      v-if="
                        chat.status == 'WAITING' &&
                        (chat.senderid == userprofile.id ||
                          chat.oaid !== '' ||
                          checksender(chat.senderid))
                      "
                      class="badge sm"
                    >
                      <b-spinner
                        :variant="'secondary'"
                        style="width: 11px; height: 11px"
                      ></b-spinner>
                    </div>

                    <div
                      style="
                        display: flex;
                        flex-direction: row;
                        margin-right: 10px;
                      "
                      v-if="
                        chat.status == 'FAILED' &&
                        (chat.senderid == userprofile.id ||
                          chat.oaid !== '' ||
                          checksender(chat.senderid))
                      "
                    >
                      <a
                        @click="resendfailed(chat)"
                        style="
                          background: red;
                          border-radius: 50%;
                          width: 20px;
                          height: 20px;
                          color: white;
                          text-align: center;
                          font-weight: bold;
                        "
                      >
                        !
                      </a>
                    </div>

                    <!-- <DropDown v-if="chat.sender == 1" />
                    <DropDown v-if="chat.sender == 0 && chat.lastmsg" /> -->
                  </li>
                  <!-- <li class="msg-setting-main" v-if="!chat.lastmsg">
                    <h5 v-if="chat.text2">{{ chat.text2 }}</h5>

                    <div v-if="chat.document" class="document">
                      <i class="fa fa-file-excel-o font-primary"></i>
                      <div class="details">
                        <h5>Document.xlsx</h5>
                        <h6>25mb Seprate file</h6>
                      </div>
                      <div class="icon-btns">
                        <a
                          class="icon-btn btn-outline-light"
                          :href="chat.document"
                          :download="chat.document"
                          target="_blank"
                          ><feather type="download" size="15" height="15">
                          </feather
                        ></a>
                      </div>
                    </div>

                    <div
                      v-if="chat.read"
                      class="badge sm ml-2"
                      :class="chat.document ? 'badge-dark' : 'badge-success'"
                    >
                      {{ chat.read }}
                    </div>

                    <ul v-if="chat.gallery1" class="auto-gallery">
                      <li
                        :style="[
                          {
                            'background-image':
                              'url(' + getImgUrl(chat.gallery1) + ')',
                          },
                          styleObject,
                        ]"
                      ></li>
                      <li
                        :style="[
                          {
                            'background-image':
                              'url(' + getImgUrl(chat.gallery2) + ')',
                          },
                          styleObject,
                        ]"
                      ></li>
                      <li
                        :style="[
                          {
                            'background-image':
                              'url(' + getImgUrl(chat.gallery3) + ')',
                          },
                          styleObject,
                        ]"
                      ></li>
                    </ul>
                    <div v-if="chat.gallery1" class="refresh-block">
                      <div
                        class="badge badge-outline-primary refresh sm ml-2"
                        :class="refresh ? 'refreshed' : ''"
                      >
                        <i
                          ><feather
                            type="rotate-cw"
                            @click="refresh = !refresh"
                          ></feather
                        ></i>
                      </div>
                      <div class="badge badge-danger sm ml-2">F</div>
                    </div>

                    <DropDown />
                  </li> -->
                </ul>

                <!-- <ul class="msg-box" v-if="currentChat.chat.id !== 0">
                  <li class="msg-setting-main" v-if="chat.sender == 0">
                    <h5 v-if="chat.text">{{ chat.text }}</h5>
                    <DropDown />
                  </li>
                  <li
                    class="msg-setting-main"
                    v-if="chat.sender == 1 && chat.lastmsg"
                  >
                    <h5 v-if="chat.text">{{ chat.text }}</h5>
                    <div class="badge badge-success sm ml-2">R</div>
                    <DropDown />
                  </li>
                </ul>

                <ul class="msg-box" v-if="chat.stickerpath">
                  <li class="msg-setting-main">
                    <h5>
                      <img :src="getImgUrl(chat.stickerpath)" alt="" />
                    </h5>
                  </li>
                </ul> -->
              </div>
            </div>
          </div>
        </li>
        </div>
      </template>

      <!-- <li :class="typing ? 'sent last typing-': 'sent'" :style="typing? 'display: block': 'display: none'">
              <div class="media">
                 <div class="profile mr-4" :style="[{'background-image': 'url(' + getImgUrl(currentChat.img) + ')'},styleObject]"></div>
                 <div class="media-body">
                    <div class="contact-name">
                      <h5>{{ currentChat.name }}</h5>
                       <ul class="msg-box">
                          <li>
                             <h5>
                                <div class="type">
                                   <div class="typing-loader"></div>
                                </div>
                             </h5>
                          </li>
                       </ul>
                    </div>
                 </div>
              </div>
            </li> -->

      <div v-if="!currentChat.chat">
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
          <img src="../../../../assets/images/chat.png" alt="" />
          <div class="animated-bg"><i></i><i></i><i></i></div>
          <p>Select a chat to read messages</p>
        </div>
      </div>
    </ul>
  </div>

  <!--Direct Chat end -->
</template>

<script>
import { mapState } from "vuex";
import DropDown from "../../common/dropdown.vue";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
// import { vLinkify as linkify } from  "v-linkify";
import linkify from "vue-linkify";

export default {
  directives: {
    linkify,
  },
  components: {
    DropDown,
  },
  data() {
    return {
      currentchat: [],
      refresh: false,
      styleObject: {
        "background-size": "cover",
        "background-position": "center",
        display: "block",
      },
      setLastMessageRef:null
    };
  },
 
  methods: {
    previewimage(image) {
      window.open(image, "_blank");
    },
    getImgUrl() {
      return require("../../../../assets/images/avtar/defaultimageoa.png");
    },
    getDefaultimage() {
      return require("../../../../assets/images/logo/waitimg.png");
    },
    getReadicon() {
      return require(`../../../../assets/images/readicon.png`);
    },
    getUnreadicon() {
      return require(`../../../../assets/images/unreadicon.png`);
    },
    async resendfailed(failedmessage) {
      if (failedmessage.contenttype == "TEXT") {
        const payload = {
          sessionId: failedmessage.sessionid,
          referenceKey: uuidv4(),
          contentType: "TEXT",
          content: failedmessage.content,
          destructTime: 0,
          senderId: this.userprofile.id,
          oaId: this.userprofile.id,
        };
        // this.addDataToRealm(payload, "addDummyMessage");
        this.setMessage(this.sessionID);
        const res = await this.$store.dispatch("chat/addChat", payload);
        console.log(res);
        if (res.data.message != "success") {
          this.addDataToRealm(payload, "failedUpdateDummyMesaage");
          this.setMessage(this.sessionID);
        }
      }
    },
    addMessage(e) {
      var preScrollHeight = e.target.scrollHeight;
      if (e.target.scrollTop <= 0) {
        this.$store.state.chat.messagelength += 5;
        this.setMessage(this.sessionroom);
        const contain = document.querySelector(".scrolltopdirectchat");
        setTimeout(() => {
          var postScrollHeight = contain.scrollHeight;
          var delta = postScrollHeight - preScrollHeight;
            contain.scrollBy(0, delta);
        }, 10);
      }
    },
    checksender(senderid, chat) {
      if (this.userprofile.adminuserids) {
        if (this.userprofile.adminuserids.indexOf(senderid) != -1) {
          return true;
        } else {
          return false;
        }
      }
    },
    numcalcHeight(widthimage, heightimage) {
      const calcheight = (heightimage * ((268 * 100) / widthimage)) / 100;
      return `${calcheight}px`;
    },
    checkwidth(imgwidth, imgheight) {
      if (imgwidth === imgheight && imgwidth < 268) {
        return "268px";
      } else {
        return `${imgwidth}px`;
      }
    },
    groupMessageTimeDisplay(time){
    var stillUtc = moment.utc(new Date(time)).toDate();
    // console.log(stillUtc);
    },
    infoTime(time) {
      
      var stillUtc = moment.utc(time).toDate();
    
      if (
        moment(stillUtc).local().format("DD/MM/YYYY") ==
        moment(new Date()).format("DD/MM/YYYY")
      ) {
        return moment(stillUtc).local().format("HH:mm");
      } else {
        return moment(stillUtc).local().format("DD/MM");
      }
    },
  },
  mounted() {
    
    document
      .querySelector(".scrolltopdirectchat")
      .addEventListener("scroll", this.addMessage, false);
  },
  beforeDestroy() {
    document
      .querySelector(".scrolltopdirectchat")
      .removeEventListener("scroll", this.addMessage, false);
  },
  destroyed() {
    document
      .querySelector(".scrolltopdirectchat")
      .removeEventListener("scroll", this.addMessage, false);
  },
  computed: {
    ...mapState({
      typing: (state) => state.chat.typing,
      sessionroom: (state) => state.chat.session,
      userprofile: (state) => state.auth.profile,
      roomtype: (state) => state.room.roomtype,
      loading: (state) => state.common.loadingchat,
      currentChat() {
        return (this.currentchat = this.$store.getters["chat/currentChat"]);
      },
    }),
  },
};
</script>


