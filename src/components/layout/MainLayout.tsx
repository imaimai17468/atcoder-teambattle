import { Noto_Sans_JP } from "next/font/google";

import { BgBlur } from "../common/BgBlur";
import { Footer } from "../common/Footer";
import { Header } from "../common/Header";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<Props> = ({ children }: Props) => {
  return (
    <div
      className={`flex min-h-screen flex-col gap-16 text-gray-900 dark:bg-gray-900 dark:text-gray-100 ${notoSansJP.className}`}
    >
      <Header />
      <div className="mx-auto min-h-screen w-11/12 md:w-4/5">{children}</div>
      <BgBlur />
      <Footer />
    </div>
  );
};
