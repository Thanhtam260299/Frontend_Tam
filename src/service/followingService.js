import * as request from "~/utils/httpRequest";

export const following = async (page) => {
  try {
    const res = await request.get("me/followings/", {
      params: {
        page,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
