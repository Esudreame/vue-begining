<template>
  <div class="dialog" v-if="show" @click.stop=hideDialog>
    <div class="dialog_content"><slot></slot></div>
  </div>

</template>

<script>
export default {
  name: "MyModal",
  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dialogVisible: true
    }
  },

  methods: {
    hideDialog() {
      this.$emit('update:show', false)
    }
  },


}
</script>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.dialog_content {
  margin: auto;
  border-radius: 12px;
  min-width: 300px;
  min-height: 50px;
}
</style>