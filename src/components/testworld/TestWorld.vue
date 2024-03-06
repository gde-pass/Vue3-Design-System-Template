<template>
  <div class="hello">
    <h1 class="text-3xl font-bold underline text-tahiti bg-silver">
      {{ age }}
    </h1>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";

defineProps({
  age: {
    type: Number as PropType<number>,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/scss/tailwind";

.hello {
  font-size: 18px;
}
</style>
