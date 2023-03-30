<template>
  <div class="h-full">
    <guide-page />
  </div>
</template>

<script setup lang="ts">
import GuidePage from "./view/guide/index.vue";
import { onMounted } from "vue";
import { CommonUtil } from "./utils/common";
import { useCommonStore } from "./store/common";

onMounted(() => {
  CommonUtil.setStyleModeClass(useCommonStore().styleMode);
});
</script>

<style scoped lang="scss"></style>
