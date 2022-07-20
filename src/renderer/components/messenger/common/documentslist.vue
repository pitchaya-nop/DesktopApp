<template>
    <ul class="chat-main">
        <li v-for="(document, index) in documents" :key="document.id">
          <div class="chat-box">
            <div class="media">
              <div class="profile"><a class="icon-btn btn-xl pull-right rouded15" :class="document.btn_class" href="javascript:void(0)"><i :class="document.doc_type"></i></a></div>
              <div class="details">
                <h5>{{ document.filename }}</h5>
                <h6>{{ document.time }}</h6>
              </div>
              <div class="media-body"><a class="icon-btn btn-outline-light btn-sm pull-right" :href="document.doc" :download="document.doc" target="_blank"><feather type="download" size="15" height="15"></feather></a></div>
            </div>
          </div>
        </li>
    </ul>
</template>

<script>

import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      documents: (state) => state.sidebar.document,
    }),
  }
};

</script>