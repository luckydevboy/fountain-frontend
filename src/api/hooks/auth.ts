import { useMutation } from "@tanstack/react-query";

import { register } from "@/api/https";
import { User } from "@/interfaces";

export const useRegister = () => {
  return useMutation({
    mutationFn: (data: Partial<User>) => register(data),
  });
};
