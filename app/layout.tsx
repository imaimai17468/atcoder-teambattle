import "@/styles/global.css";
import { MainLayout } from "@/components/layout/MainLayout";
import { Metadata } from "next";
import Favicon from "public/favicon.png";
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

const HomeLayout: React.FC<HomeLayoutProps> = ({
  children,
}: HomeLayoutProps) => {
  return (
    <html lang="ja">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
};

export default HomeLayout;
