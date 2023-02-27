<template>
  <!-- Left-Sidebar Settings's Account start -->
    <div class="setting-block">
      <div class="block" :class="activesetting == 1 ? 'open': ''">                  
        <div class="media">
          <div class="media-body">
            <h3>Account</h3>
          </div>
          <div class="media-right"><a class="icon-btn btn-outline-light btn-sm pull-right previous" href="javascript:void(0)" @click="activeSettingmenu(0)"> <feather type="chevron-left" size="15" height="15"></feather></a></div>
        </div>
        <div class="theme-according" id="accordion">
          <div class="card">
            <b-card-header v-b-toggle.collapseTwo role="tab"><a>Security<i class="fa fa-angle-down"></i></a></b-card-header>
            <b-collapse id="collapseTwo" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <div class="media">
                  <div class="media-body">
                    <h5>Show Security notification</h5>
                  </div>
                  <div class="media-right"> 
                    <b-form-checkbox class="js-switch8" name="check-button" switch size="lg"></b-form-checkbox>
                  </div>
                </div>
                <p> <b>Note : </b>turn on this setting to recive notification when a contact's security code has been changes.</p>
              </b-card-body>
            </b-collapse>
          </div>
          <div class="card">
            <b-card-header v-b-toggle.collapseOne role="tab"><a>Privacy<i class="fa fa-angle-down"></i></a></b-card-header>
            <b-collapse id="collapseOne" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <ul class="privacy">
                  <li> 
                    <h5>Last seen</h5>
                    <b-form-checkbox class="js-switch10" name="check-button" switch size="lg" value="1" checked="1"></b-form-checkbox>
                    <p> <b>Note : </b>turn on this setting to whether your contact can see last seen or not.</p>
                  </li>
                  <li> 
                    <h5>Profile Photo</h5>
                    <b-form-checkbox class="js-switch11" name="check-button" switch size="lg"></b-form-checkbox>                    
                    <p>
                       turn on this setting to whether your contact can see your profile or not.</p>
                  </li>
                  <li> 
                    <h5>About</h5>
                    <b-form-checkbox class="js-switch12" name="check-button" switch size="lg"></b-form-checkbox>      
                    <p> <b>Note : </b>turn on this setting to whether your contact can see about status or not.</p>
                  </li>
                  <li> 
                    <h5>Status</h5>
                    <b-form-checkbox class="js-switch14" name="check-button" switch size="lg"></b-form-checkbox>                    
                    <p> <b>Note : </b>turn on this setting to whether your contact can see your status or not.                          </p>
                  </li>
                  <li> 
                    <h5>Read receipts</h5>
                    <b-form-checkbox class="js-switch16" name="check-button" switch size="lg"></b-form-checkbox>                    
                    <p> <b>Note : </b>If turn off this option you won't be able to see read recipts from contact. read receipts are always sent for group chats.                     </p>
                  </li>
                  <li> 
                    <h5>Groups</h5>
                    <b-form-checkbox class="js-switch13" name="check-button" switch size="lg" value="1" checked="1"></b-form-checkbox>                    
                    <p> <b>Note : </b>turn on this setting to whether your contact can add in groups or not.  </p>
                  </li>
                  <li> 
                    <h5>Screen Lock(Require Touch ID)</h5>
                    <b-form-checkbox class="js-switch17" name="check-button" switch size="lg"></b-form-checkbox>                    
                  </li>
                </ul>
              </b-card-body>
            </b-collapse>
          </div>
          <div class="card">
            <b-card-header v-b-toggle.collapseThree role="tab"><a>Two Step verification<i class="fa fa-angle-down"></i></a></b-card-header>
            <b-collapse id="collapseThree" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <div class="media">
                  <div class="media-body">
                    <h5>Enable</h5>
                  </div>
                  <div class="media-right"> 
                    <b-form-checkbox class="js-switch9" name="check-button" switch size="lg"></b-form-checkbox>                                        
                  </div>
                </div>
                <p> <b>Note : </b>For added security, enable two-step verifiation, which will require a PIN when registering your phone number with Chitchat again.</p>
              </b-card-body>
            </b-collapse>
          </div>
          <div class="card">
            <b-card-header v-b-toggle.collapseFour role="tab"><a>Change Number<i class="fa fa-angle-down"></i></a></b-card-header>
            <b-collapse id="collapseFour" accordion="my-accordion" role="tabpanel">
              <b-card-body class="change-number">
                <h5>Your old country code & phone number</h5>
                <div class="input-group">
                  <div class="input-group-prepend"><span class="input-group-text form-control m-0">+</span></div>
                  <input class="form-control country-code" type="number" placeholder="01"/>
                  <input class="form-control" type="number" placeholder="1234567895"/>
                </div>
                <h5>Your new country code & phone number</h5>
                <div class="input-group">
                  <div class="input-group-prepend"><span class="input-group-text form-control m-0">+</span></div>
                  <input class="form-control country-code" type="number" placeholder="01"/>
                  <input class="form-control" type="number" placeholder=""/>
                </div>
                <div class="text-right">  <a class="btn btn-outline-primary button-effect btn-sm" href="javascript:void(0)">confirm</a></div>
              </b-card-body>
            </b-collapse>
          </div>
          <div class="card">
            <b-card-header v-b-toggle.collapseFive role="tab"><a>Request account info<i class="fa fa-angle-down"></i></a></b-card-header>
            <b-collapse id="collapseFive" accordion="my-accordion" role="tabpanel">
              <b-card-body><a class="p-0 req-info" id="demo" :class="requestsend? 'disabled' : ''" v-on:click="deleterequest()" onclick="document.getElementById(&quot;demo&quot;).innerHTML = &quot;Request sent&quot;">Request Info                            </a>
                <p> <b>Note : </b>Create a report of your account information and settings, which you can access ot port to another app.</p>
              </b-card-body>
            </b-collapse>
          </div>
          <div class="card">
            <b-card-header v-b-toggle.collapseSix role="tab"><a>Delete My account<i class="fa fa-angle-down"></i></a></b-card-header>
            <b-collapse id="collapseSix" accordion="my-accordion" role="tabpanel">
              <b-card-body><a class="p-0 req-info font-danger" :class="deletedaccount? 'disabled' : ''" v-on:click="deleteaccount()">Delete Account                            </a>
                <p> <b>Note :</b>Deleting your account will delete your account info, profile photo, all groups & chat history.</p>
              </b-card-body>
            </b-collapse>
          </div>
        </div>
      </div>
      <div class="media">
        <div class="media-body">
          <h3>Account</h3>
          <h4>Update Your Account Details</h4>
        </div>
        <div class="media-right"> <a class="icon-btn btn-outline-light btn-sm pull-right next" href="javascript:void(0)" @click="activeSettingmenu(1)"> <feather type="chevron-right" size="15" height="15"></feather></a></div>
      </div>
    </div>
  <!-- Left-Sidebar Settings's Account end -->
</template>

<script>
import { mapState } from "vuex";

export default{
  data() {
    return {
      deletedaccount: false,
      requestsend: false,
    }
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
    deleteaccount() {
      this.deletedaccount = true
    },
    deleterequest() {
      this.requestsend = true
    }
  },
};
</script>