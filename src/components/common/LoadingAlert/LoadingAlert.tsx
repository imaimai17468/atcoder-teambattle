import { ExclamationTriangleIcon, PieChartIcon } from "@radix-ui/react-icons";

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export const LoadingAlert: React.FC = () => {
  return (
    <Alert>
      <ExclamationTriangleIcon />
      <AlertTitle>Loading</AlertTitle>
      <AlertDescription>
        <PieChartIcon className="animate-spin" />
      </AlertDescription>
    </Alert>
  );
};
