<template>
  <div class="msg-dropdown-main">
    <div class="msg-setting"><i class="ti-more-alt" @click="show = !show"></i></div>
    <div class="msg-dropdown" v-bind:style="show? 'display:block;' : 'display:none'">
      <ul>
        <li>
          <a href="javascript:void(0)"><i class="fa fa-share"></i>forward</a>
        </li>
        <li>
          <a href="javascript:void(0)"><i class="fa fa-clone"></i>copy</a>
        </li>
        <li>
          <a href="javascript:void(0)"><i class="fa fa-star-o"></i>rating</a>
        </li>
        <li>
          <a href="javascript:void(0)"><i class="ti-trash"></i>delete</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>
