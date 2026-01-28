import localFont from "next/font/local";

export const inter = localFont({
  src: [
    {
      path: "./fonts/Inter.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Inter-Italic.ttf",
      weight: "400",
      style: "italic",
    }
  ],
    variable: "--font-inter",
    display: "swap",
})

export const caladea = localFont({
  src: [
    {
      path: "./fonts/Caladea-Regular.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "./fonts/Caladea-Italic.ttf",
      weight: "400",
      style: "italic"
    },
    {
      path: "./fonts/Caladea-Bold.ttf",
      weight: "700",
      style: "bold"
    },
    {
      path: "./fonts/Caladea-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    }
  ],
  variable: "--font-caladea",
  display: "swap"
})

export const calistoga = localFont({
  src:[
    {
      path: "./fonts/Calistoga-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-calistoga",
  display: "swap"
})


