import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { NextPage } from "next";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const NotFoundPage: NextPage = () => {
  return (
    <Alert variant="destructive">
      <ExclamationTriangleIcon />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Failed to fetch data</AlertDescription>
    </Alert>
  );
};

export default NotFoundPage;
