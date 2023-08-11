import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum NotificationStatus {
  ERROR = "error",
  SUCCESS = "success",
  PENDING = "pending",
}

export interface NotificationData {
  status: NotificationStatus;
  title: string;
  message: string;
}
export interface UIState {
  cartIsVisible: boolean;
  notification: NotificationData | null;
}

const initialState: UIState = {
  cartIsVisible: false,
  notification: null,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action: PayloadAction<NotificationData>) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiSliceActions = uiSlice.actions;
