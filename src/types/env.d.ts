// 当前运行环境名称
declare const __SERVER_NAME__: string;
declare const __DEV__: string;

declare enum ServerNameEnum {
  // 开发环境
  DEV = "development",
  // 测试环境
  TEST = "test",
  // 预生产环境
  PRE = "preview",
  // 生产环境
  prod = "production",
}
