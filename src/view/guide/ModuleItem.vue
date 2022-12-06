<!--
@author: xietiansheng
-->
<template>
  <section class="flex-1">
    <div class="title">{{ title }}</div>
    <div class="sub-title text-info">{{ subTitle }}</div>
    <div>
      <slot />
    </div>
  </section>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    title: string;
    subTitle?: string;
  }>(),
  {
    subTitle: "",
  }
);
</script>

<style lang="scss" scoped>
.sub-title {
  font-size: 16px;
  margin: 0 0 10px 0;
}

.title {
  font-size: 30px;
  font-weight: bold;
  margin: 20px 0 10px 0;
}
</style>
