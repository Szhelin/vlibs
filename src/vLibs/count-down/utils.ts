import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import duration from "dayjs/plugin/duration";

// 设置中文语言
dayjs.locale("zh-cn");

// 扩展插件
dayjs.extend(duration);

export default dayjs;
