import { NextPage } from "next";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const NotFoundPage: NextPage = () => {
  return (
    <Alert>
      <ExclamationTriangleIcon />
      <AlertTitle>404 Not Found</AlertTitle>
      <AlertDescription>
        The requested page could not be found.
      </AlertDescription>
    </Alert>
  );
};

export default NotFoundPage;
