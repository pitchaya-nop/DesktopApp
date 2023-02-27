<template>
  <b-modal
    content-class="modal-app notes-modal-main add-popup modal"
    class=""
    id="notesModal"
    ref="notesModal"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
    hide-footer
    hide-header
    hide-header-close
    centered
  >
    <div class="modal-header">
      <h2 class="modal-title"><i class="ti-bookmark-alt"></i>notes</h2>
      <button
        class="close"
        type="button"
        @click="hide()"
        data-dismiss="modal"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body custom-scroll">
      <div class="">
        <div class="card-header">
          <h2>Inline Editor</h2>
        </div>
        <div class="card-body">
          <div
            class="
              cke_editable cke_editable_inline cke_contents_ltr cke_show_borders
            "
            id="area1"
            contenteditable="true"
            tabindex="0"
            spellcheck="false"
            role="textbox"
            aria-label="Rich Text Editor, area1"
            title="Rich Text Editor, area1"
          >
            <h1>Your title</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
              vulputate urna, sed dignissim arcu. Aliquam at ligula imperdiet,
              faucibus ante a, interdum enim. Sed in mauris a lectus lobortis
              condimentum. Sed in nunc magna. Quisque massa urna, cursus vitae
              commodo eget, rhoncus nec erat. Sed sapien turpis, elementum sit
              amet elit vitae, elementum gravida eros. In ornare tempus nibh ut
              lobortis. Nam venenatis justo ex, vitae vulputate neque laoreet a.
            </p>
          </div>
        </div>
        <div class="card-footer">
          <button
            class="btn btn-danger button-effect btn-sm mr-3"
            type="button"
            @click="hide()"
          >
            Save
          </button>
          <button
            class="btn btn-primary button-effect btn-sm"
            type="button"
            data-dismiss="modal"
            @click="hide()"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  methods: {
    show() {
      this.$refs.notesModal.show();
    },
    hide() {
      this.$refs.notesModal.hide();
    },
  },
};
</script>
