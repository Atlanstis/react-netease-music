import request from "@/utils/request";

// 获取推荐页 banner 图
export const getBanner = () => {
  return request.get("/banner?type=0");
};

// 获取推荐页 推荐歌曲
export const getPersonalized = (params) =>
  request.get(`/personalized`, { params });
