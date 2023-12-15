import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export const ErrorAlert: React.FC = () => {
  return (
    <Alert variant="destructive">
      <ExclamationTriangleIcon />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Failed to fetch data</AlertDescription>
    </Alert>
  );
};
