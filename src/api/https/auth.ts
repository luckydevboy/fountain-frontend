import { AxiosResponse } from "axios";

import { axios } from "../axiosInstance";
import { User } from "@/interfaces";

export const register = async (
  data: Partial<User>,
): Promise<AxiosResponse<{ jwt: string; user: User }>> => {
  return await axios.post("/api/auth/local/register", data);
};
