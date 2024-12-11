import { create } from 'zustand';

interface CounterState {
  count: number; // 상태
  increment: () => void; // 증가 함수
  decrement: () => void; // 감소 함수
  reset: () => void; // 초기화 함수
}

const useCounterStore = create<CounterState>((set) => ({
  count: 0, // 초기 상태
  increment: () => set((state) => ({ count: state.count + 1 })), // count 증가
  decrement: () => set((state) => ({ count: state.count - 1 })), // count 감소
  reset: () => set({ count: 0 }), // count 초기화
}));

export default useCounterStore;