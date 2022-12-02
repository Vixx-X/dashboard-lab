import create from 'zustand';
import _create from 'zustand/vanilla';

interface TrainingKPIState {
  data: TrainingKPIData[] | null;
  refeatcher: Function | null;
  update: Function;
}

export const _trainingStore = _create<TrainingKPIState>()((set, get) => ({
  data: null,
  refeatcher: null,
  update: (data: TrainingKPIData[], refeatcher?: Function) => {
    set(refeatcher === undefined ? { data } : { data, refeatcher });
  },
  refeatch: () => get().refeatcher?.(),
}));

// We also create a hook to get the vanilla auth store state inside react
export const trainingStore = create(_trainingStore);
export default trainingStore;
