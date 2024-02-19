<template>
  <div class="hello">
    <h1 class="text-3xl font-bold underline text-tahiti bg-silver">
      {{ msg }}
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/scss/tailwind";

.hello {
  font-size: 18px;
}
</style>
