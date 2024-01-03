import "@/styles/global.css";
import { Metadata } from "next";

import { MainLayout } from "@/components/layout/MainLayout";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/utils/ThemeProvider";
import { SITE_NAME, SITE_DESCRIPTION } from "@/constants/metadata";

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s - ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
};

type HomeLayoutProps = {
  children?: React.ReactNode;
};

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <html lang="ja">
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <MainLayout>{children}</MainLayout>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
