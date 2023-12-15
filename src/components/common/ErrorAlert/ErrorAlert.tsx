import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const ErrorAlert: React.FC = () => {
  return (
    <Alert variant="destructive">
      <ExclamationTriangleIcon />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Failed to fetch data</AlertDescription>
    </Alert>
  );
};
