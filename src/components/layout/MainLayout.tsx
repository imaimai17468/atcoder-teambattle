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
    <div
      className={`flex min-h-screen flex-col gap-4 text-gray-900 ${notoSansJP.className}`}
    >
      <Header />
      <div className="flex min-h-screen flex-col items-center">
        <div className="w-4/5">{children}</div>
      </div>
      <BgBlur />
      <Footer />
    </div>
  );
};
