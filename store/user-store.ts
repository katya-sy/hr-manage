import { User } from "@/types/user";
import { create } from "zustand";

interface UserState {
  user: User | object;
  isAuth: boolean;
  setUser: (user: object) => void;
  setIsAuth: (isAuth: boolean) => void;
}

export const useUserStore = create<UserState>()((set) => ({
  user: {},
  isAuth: false,
  setUser: (user) => {
    set({ user: user });
    localStorage.setItem("user", JSON.stringify(user));
  },
  setIsAuth: (isAuth) => set({ isAuth: isAuth }),
}));
