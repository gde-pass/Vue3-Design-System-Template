<template>
  <div>
    <h1 class="highlight">{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
// Can't use setup + style tag scoped until https://github.com/vuejs/vue-loader/issues/1915 is resolved
import { PropType, defineComponent } from "vue";

export default defineComponent({
  props: {
    msg: {
      type: String as PropType<string>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/scss/tailwind";

.highlight {
  color: theme("colors.bermuda");
}
</style>
