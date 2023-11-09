import { NextPage } from "next";
import { ErrorAlert } from "@/components/common/ErrorAlert";

export const NotFoundPage: NextPage = () => {
  return <ErrorAlert />;
};

export default NotFoundPage;
