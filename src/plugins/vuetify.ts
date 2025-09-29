/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "@fontsource/jetbrains-mono";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme: {
        dark: false,
        colors: {
          background: "#F0EAD6",
          surface: "#D8C3A5",
          "surface-bright": "#FFFFFF",
          "surface-light": "#EEEEEE",
          "surface-variant": "#424242",
          "on-surface-variant": "#EEEEEE",
          primary: "#8E8D8A",
          "primary-darken-1": "#1F5592",
          secondary: "#E98074",
          "secondary-darken-1": "#018786",
          error: "#E85A4F",
          info: "#8E8D8A",
          success: "#A2D4AB",
          warning: "#E9C46A",
          "pink-start": "#f19488",
          "pink-end": "#e86fbf",
          "pink-fade": "#fac0e7",
          "blue-start": "#77e4c3",
          "blue-end": "#37bddd",
          "blue-fade": "#9de7f2",
          "yellow-start": "#f5ea7a",
          "yellow-end": "#e8c45c",
          "green-start": "#bfe47d",
          "green-end": "#5fc56d",
          "purple-start": "#baa0d6",
          "purple-end": "#836fde",
        },
        variables: {
          "border-color": "#000000",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 0.87,
          "medium-emphasis-opacity": 0.6,
          "disabled-opacity": 0.38,
          "idle-opacity": 0.04,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.12,
          "dragged-opacity": 0.08,
          "theme-kbd": "#212529",
          "theme-on-kbd": "#FFFFFF",
          "theme-code": "#F5F5F5",
          "theme-on-code": "#000000",
        },
      },
    },
  },
});
