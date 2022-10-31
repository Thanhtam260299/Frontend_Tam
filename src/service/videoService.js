import * as request from "~/utils/httpRequest";

export const videos = async (page) => {
  try {
    const res = await request.get("videos/", {
      params: {
        page,
        type: "for-you",
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
