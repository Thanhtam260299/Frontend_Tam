import * as request from "~/utils/httpRequest";

export const profileService = async (profile) => {
  try {
    const res = await request.get(`users/@${profile}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
