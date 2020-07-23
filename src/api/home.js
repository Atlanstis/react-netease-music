import request from "@/utils/request";

// 获取推荐页 banner 图
export const getBanner = () => {
  return request.get("/banner?type=0");
};
