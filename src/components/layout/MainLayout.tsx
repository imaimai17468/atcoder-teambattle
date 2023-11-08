import { Header } from "@/components/screen/Header";
import { Noto_Sans_JP } from "next/font/google";
import { Footer } from "../screen/Footer";
import { BgBlur } from "../common/BgBlur";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<Props> = ({ children }: Props) => {
  return (
    <main
      className={`flex min-h-screen flex-col gap-4 text-gray-900 ${notoSansJP.className}`}
    >
      <Header />
      {children}
      <BgBlur />
      <Footer />
    </main>
  );
};
