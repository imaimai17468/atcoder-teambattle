import { Button } from "@/components/ui/button";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

export const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className="mt-16 flex flex-col items-center justify-center gap-8 sm:flex-row">
      <Image
        src="/images/bg-image.png"
        width={500}
        height={500}
        alt="background-image"
        className="rounded-xl opacity-50 shadow-lg sm:h-1/3 sm:w-1/3"
      />
      <div className="flex flex-col gap-8 sm:w-1/2">
        <h1 className="text-3xl font-bold">コードで繋がれ、勝利を掴め！</h1>
        <div className="flex flex-col gap-2">
          <p>AtCoder Team Battleへようこそ!</p>
          <p>
            ここは、プログラミングスキルを競い合う仲間と共に、問題を解き明かし、技術を高めるための究極の場です。エキサイティングなチーム戦に参加し、コードの限界に挑戦しましょう。
          </p>
          <p>君たちの協力と才能が、今日の戦いを明日のスキルに変える。</p>
        </div>
        <Button
          className="mx-auto w-fit sm:mx-0"
          onClick={() => {
            router.push("/battle");
          }}
        >
          戦いに参加する
        </Button>
      </div>
    </div>
  );
};

export default Home;
