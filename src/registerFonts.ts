import { Font } from "@react-pdf/renderer";

export function registerFonts() {
  Font.register({
    family: "Inter",
    fonts: [
      {
        src: "fonts/Inter/static/Inter-Thin.ttf",
        fontWeight: 100,
      },
      {
        src: "fonts/Inter/static/Inter-ExtraLight.ttf",
        fontWeight: 200,
      },
      {
        src: "fonts/Inter/static/Inter-Light.ttf",
        fontWeight: 300,
      },
      {
        src: "fonts/Inter/static/Inter-Regular.ttf",
        fontWeight: 400,
      },
      {
        src: "fonts/Inter/static/Inter-Medium.ttf",
        fontWeight: 500,
      },
      {
        src: "fonts/Inter/static/Inter-SemiBold.ttf",
        fontWeight: 600,
      },
      {
        src: "fonts/Inter/static/Inter-Bold.ttf",
        fontWeight: 700,
      },
      {
        src: "fonts/Inter/static/Inter-ExtraBold.ttf",
        fontWeight: 800,
      },
      {
        src: "fonts/Inter/static/Inter-Black.ttf",
        fontWeight: 900,
      },
    ],
  });
}
