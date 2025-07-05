// themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme:{
      textcolor : localStorage.getItem("theme") || '#00a80bcb',
      fontFamilyH1: "silkscreen-bold",
      fontFamilyH2: "silkscreen-regular",
      hovertheme:'#00a80b'
    },
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    }
  }
});

// Acción para cambiar el tema
export const { setTheme } = themeSlice.actions;

// Selector para obtener el estado actual del tema
export const selectCurrentTheme = (state) => state.theme.theme;
export const hovertheme = (state) => state.theme.hovertheme

// Export default del **reducer**, no del estado
export default themeSlice.reducer;

