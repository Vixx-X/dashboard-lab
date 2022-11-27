import { Departament } from '@constants';
import create from 'zustand';
import _create from 'zustand/vanilla';

interface UserState {
  user: User | null;
  lang: string | null;
  unit: string | null;
  departaments: DepartamentEnum;
  refeatcher: Function | null;
}

export const _userStore = _create<UserState>()((set, get) => ({
  user: null,
  lang: '',
  unit: '',
  departaments: Departament.ALL,
  setLang: (lang: string) => set({ lang }),
  setUnit: (unit: string) => set({ unit }),
  toggleDepartment: (departament: DepartamentEnum) =>
    set((state) => ({
      departaments: state.departaments ^ departament,
    })),
  refeatcher: null,
  update: (user: User, refeatcher: Function) => set({ user, refeatcher }),
  refeatch: () => get().refeatcher?.(),
}));

// We also create a hook to get the vanilla auth store state inside react
export const userStore = create(_userStore);
export default userStore;
