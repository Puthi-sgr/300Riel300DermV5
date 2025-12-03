import axios from "axios";
import { FacebookPost, FacebookPostResponse } from "../dto/Facebook.dto";
const PAGE_ID = import.meta.env.VITE_PAGE_ID;
const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

export const fetchFacebookPosts = async (
  signal?: AbortSignal
): Promise<FacebookPost[]> => {
  try {
    const response = await axios.get<FacebookPostResponse>(
      `https://graph.facebook.com/${PAGE_ID}/posts?fields=id,message,created_time,full_picture,permalink_url&access_token=${ACCESS_TOKEN}`,
      { signal }
    );
    return response.data.data;
  } catch (error) {
    if (
      axios.isCancel?.(error) ||
      (error as any)?.code === "ERR_CANCELED" ||
      (error as any)?.name === "CanceledError"
    ) {
      return [];
    }
    console.error("Error fetching Facebook posts:", error);
    return [];
  }
};
