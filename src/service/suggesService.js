import * as request from "~/utils/httpRequest";
import queryString from "query-string";

export const suggested = async (page, perPage) => {
  try {
    console.log(page, perPage);
    const res = await request.get("users/suggested/", {
      params: {
        page,
        per_page: perPage,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
