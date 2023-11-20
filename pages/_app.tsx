import "@/styles/globals.css";
import "@/styles/animation.css";
import type { AppProps } from "next/app";
import { ArticleProvider } from "@/context/article-context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ArticleProvider>
      <Component {...pageProps} />
    </ArticleProvider>
  );
}

