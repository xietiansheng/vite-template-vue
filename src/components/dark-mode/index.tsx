import { Component, h, ref } from "vue";
import { useCommonStore } from "@/store/common";
import { ElSwitch } from "element-plus";

export default {
  setup() {
    const commonStore = useCommonStore();
    const isDark = commonStore.styleMode === StyleModeEnum.DARK;
    const enable = ref(isDark);
    const render = () =>
      h(
        "div",
        {
          style: "display:flex;align-items:center;",
        },
        [
          h("span", { class: "mr-2" }, "黑夜模式"),
          h(ElSwitch, {
            modelValue: enable.value,
            class: "cursor-pointer",
            "onUpdate:modelValue": onChanged,
          }),
        ]
      );
    const onChanged = (value: string | boolean | number) => {
      enable.value = value as boolean;
      commonStore.changeStyleMode();
    };
    return render;
  },
} as Component;

export enum StyleModeEnum {
  DARK = "dark",
  LIGHT = "light",
}
