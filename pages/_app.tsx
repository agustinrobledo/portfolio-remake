import "../styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";

const myFont = localFont({
  src: "./JuPlusLight.otf",
  variable: "--font-juplus",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={myFont.variable}>
      <Component {...pageProps} />
    </main>
  );
}
