import { StyleModeEnum } from "@/components/dark-mode";

export const CommonUtil = {
  /**
   * 切换模式
   * @param mode
   */
  setStyleModeClass(mode: StyleModeEnum) {
    document.documentElement.classList.value = mode;
  },
};
