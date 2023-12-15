import "@/styles/global.css";
import { Metadata } from "next";
import Favicon from "public/favicon.png";

import { MainLayout } from "@/components/layout/MainLayout";
import { Toaster } from "@/components/ui/toaster";
import { SITE_NAME, SITE_DESCRIPTION } from "@/constants/metadata";

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s - ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  icons: [{ rel: "icon", url: Favicon.src }],
};

type HomeLayoutProps = {
  children?: React.ReactNode;
};

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <html lang="ja">
      <head />
      <body>
        <MainLayout>{children}</MainLayout>
        <Toaster />
      </body>
    </html>
  );
}
