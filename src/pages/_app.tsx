import "@/styles/global.css";
import type { AppProps } from "next/app";
import { MainLayout } from "@/components/layout/MainLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
