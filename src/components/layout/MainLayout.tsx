import { Header } from "@/components/screen/Header";
import { Footer } from "../screen/Footer";

type Props = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<Props> = ({ children }: Props) => {
  return (
    <main className="flex min-h-screen flex-col gap-4 text-gray-900">
      <Header />
      {children}
      <Footer />
    </main>
  );
};
