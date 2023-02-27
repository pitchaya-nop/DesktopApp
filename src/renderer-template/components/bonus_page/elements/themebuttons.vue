<template>
  <client-only>
    <section class="theme_btn_group">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div class="element-card">
              <div class="element-card-header heading">
                <h2>Theme Buttons</h2>
              </div>
              <div class="element-card-body typography">
                <div class="theme-btn-group fonts">
                  <div class="dot-btn dot-success grow"><a class="icon-btn btn-primary button-effect btn-sm" href="javascript:void(0)"><feather type="circle" size="15" height="15"></feather></a></div>
                  <div class="dot-btn dot-success grow"><a class="icon-btn btn-success button-effect btn-sm" href="javascript:void(0)"><feather type="users" size="15" height="15"></feather></a></div>
                </div>
                <div class="theme-btn-group fonts"><a class="icon-btn btn-primary button-effect btn-sm" href="javascript:void(0)"><feather type="circle" size="15" height="15"></feather></a><a class="icon-btn btn-success button-effect btn-sm" href="javascript:void(0)"><feather type="users" size="15" height="15"></feather></a><a class="icon-btn btn-success button-effect btn-sm" href="javascript:void(0)"><feather type="users" size="15" height="15"></feather></a></div>
                <div class="theme-btn-group fonts"><a class="icon-btn btn-primary button-effect" href="javascript:void(0)"><feather type="circle" size="15" height="15"></feather></a><a class="icon-btn btn-success button-effect" href="javascript:void(0)"><feather type="users" size="15" height="15"></feather></a></div>
                <div class="theme-btn-group fonts"><a class="icon-btn btn-primary button-effect" href="javascript:void(0)"><feather type="circle" size="15" height="15"></feather></a><a class="icon-btn btn-primary button-effect" href="javascript:void(0)"><feather type="circle" size="15" height="15"></feather></a><a class="icon-btn btn-success button-effect" href="javascript:void(0)"><feather type="users" size="15" height="15"></feather></a></div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="element-card">
              <div class="element-card-header heading">
                <h2>Theme Tab &amp; Content</h2>
              </div>
              <div class="element-card-body typography">
                <div class="theme-tab">
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item"><a class="nav-link" v-bind:class="active == 'home' ? 'active' : ''" @click="active = 'home'" id="home-tab" data-toggle="tab" href="javascript:void(0)" role="tab" aria-controls="home" aria-selected="true">Home</a></li>
                    <li class="nav-item"><a class="nav-link" v-bind:class="active == 'profile' ? 'active' : ''" @click="active = 'profile'" id="profile-tab" data-toggle="tab" href="javascript:void(0)" role="tab" aria-controls="profile" aria-selected="false">Profile</a></li>
                  </ul>
                  <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade button-effect" v-bind:class="active == 'home' ? 'show active' : ''" id="home1" role="tabpanel" aria-labelledby="home-tab">Home</div>
                    <div class="tab-pane button-effect fade" v-bind:class="active == 'profile' ? 'show active' : ''" id="profile" role="tabpanel" aria-labelledby="profile-tab">Profile </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  </client-only>    
</template>

<script>
export default{
  data() {
    return {
      active : 'home'
    }
  }

}
</script>