import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col ${raleway.className}`}></main>
  );
}
