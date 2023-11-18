import "@/styles/global.css";
import { MainLayout } from "@/components/layout/MainLayout";

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
