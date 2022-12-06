import { defineStore } from "pinia";
import { StyleModeEnum } from "@/components/dark-mode";
import { CommonUtil } from "@/utils/common";

export const useCommonStore = defineStore("common", {
  state: () => ({
    styleMode: StyleModeEnum.LIGHT,
  }),
  actions: {
    changeStyleMode() {
      this.styleMode =
        this.styleMode === StyleModeEnum.LIGHT
          ? StyleModeEnum.DARK
          : StyleModeEnum.LIGHT;
      CommonUtil.setStyleModeClass(this.styleMode);
    },
  },
  persist: {
    key: "common",
    storage: window.localStorage,
    paths: ["styleMode"],
  },
});
