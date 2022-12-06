<!--
@author: xietiansheng
-->
<template>
  <guide-header />
  <div class="container mx-auto">
    <article class="flex">
      <module-item title="SVG" sub-title="减少http请求，节省性能开销">
        <div class="flex">
          <svg-icon
            v-for="iconName in iconNames"
            :key="iconName"
            :name="iconName"
            :width="40"
            :height="40"
          />
        </div>
      </module-item>
      <module-item title="当前环境" sub-title="根据.env环境自动获取">
        <div>{{ serverName }}</div>
        <div>是否为生产环境：{{ !dev }}</div>
      </module-item>
      <module-item title="代码检查" sub-title="ESLint + Stylelint + Prettier">
        运行 + 提交代码时的代码风格检查
      </module-item>
    </article>

    <article class="flex">
      <module-item title="Husky + lint-staged" sub-title="Git 提交工作流集成">
      </module-item>
      <module-item title="Windi CSS" sub-title="下一代工具优先的 CSS 框架。">
      </module-item>
      <module-item title="in18国际化" sub-title="下一代工具优先的 CSS 框架。">
      </module-item>
    </article>
  </div>
</template>

<script lang="ts" setup>
import SvgIcon from "@/components/svg-icon/index.vue";
import ModuleItem from "./ModuleItem.vue";
import GuideHeader from "./GuideHeader.vue";

const icons = import.meta.glob("/src/assets/icons/**.svg", { eager: true });
const iconNames = Object.keys(icons)
  .filter((path: string) => !path.includes("dark"))
  .map((path: string) => {
    const fileName = path.split("/").pop() || "";
    const [svgName] = fileName.split(".");
    return svgName;
  });
const serverName = __SERVER_NAME__;
const dev = __DEV__;
</script>
<script lang="ts">
export default { name: "GuidePage" };
</script>

<style lang="scss" scoped>
.container {
  .logo {
    height: 160px;
    padding: 1.5em;
  }

  .plus {
    font-size: 50px;
  }

  .panda-wrap {
    width: 200px;
    height: 200px;
  }
}
</style>
