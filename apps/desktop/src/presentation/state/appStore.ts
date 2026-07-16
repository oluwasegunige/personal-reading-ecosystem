import { create } from 'zustand';

/** Presentation-only UI state. Domain data is accessed through application workflows. */
interface AppState {
  readonly isSidebarCollapsed: boolean;
  toggleSidebar(): void;
}
export const useAppStore = create<AppState>((set) => ({
  isSidebarCollapsed: false,
  toggleSidebar: () => set((state) => ({ isSidebarCollapsed: !state.isSidebarCollapsed })),
}));
