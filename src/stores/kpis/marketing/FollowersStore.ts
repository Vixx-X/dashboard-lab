import create from 'zustand';
import _create from 'zustand/vanilla';

interface FollowersKPIState {
  data: FollowersKPIData[] | null;
  refeatcher: Function | null;
  update: Function;
}

export const _followersStore = _create<FollowersKPIState>()((set, get) => ({
  data: null,
  refeatcher: null,
  update: (data: FollowersKPIData[], refeatcher?: Function) => {
    set(refeatcher === undefined ? { data } : { data, refeatcher });
  },
  refeatch: () => get().refeatcher?.(),
}));

// We also create a hook to get the vanilla auth store state inside react
export const followersStore = create(_followersStore);
export default followersStore;
