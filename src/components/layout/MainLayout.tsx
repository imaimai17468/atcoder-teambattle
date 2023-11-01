import Header from "../screen/Header";

type Props = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<Props> = ({ children }: Props) => {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      {children}
    </main>
  );
};
