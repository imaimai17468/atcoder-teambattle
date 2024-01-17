"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-8">
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
  );
}
