import { create } from "zustand";

interface BearState {
    bears: number
    increase: () => void
    decrease: () => void
    removeAll: () => void
}

const useBearStore = create<BearState>()((set) => ({
    bears: 0,
    increase: () => set((state) => ({bears: state.bears + 1})),
    decrease: () => {set((state) => (state.bears > 0 ? {bears: state.bears - 1} : {}))},
    removeAll: () => set((state) => ({bears: 0}))
}))

export default useBearStore