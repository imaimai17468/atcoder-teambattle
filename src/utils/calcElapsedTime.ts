// 2つのtimestampを受け取って、経過時間を返す関数
import dayjs from "dayjs";

export const calcElapsedTime = (start: number, end: number) => {
  const startTime = dayjs(start);
  const endTime = dayjs(end);
  const elapsedTime = endTime.diff(startTime, "second");

  const hour = String(Math.floor(elapsedTime / 3600)).padStart(2, "0");
  const minute = String(Math.floor((elapsedTime % 3600) / 60)).padStart(2, "0");
  const second = String(elapsedTime % 60).padStart(2, "0");

  return `${hour}:${minute}:${second}`;
};
