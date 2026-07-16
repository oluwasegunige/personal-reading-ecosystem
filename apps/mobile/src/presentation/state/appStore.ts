import { create } from 'zustand';
interface MobileUiState {
  readonly readerControlsVisible: boolean;
  setReaderControlsVisible(visible: boolean): void;
}
export const useMobileUiStore = create<MobileUiState>((set) => ({
  readerControlsVisible: false,
  setReaderControlsVisible: (visible) => set({ readerControlsVisible: visible }),
}));
