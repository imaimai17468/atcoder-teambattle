import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { ExclamationTriangleIcon, PieChartIcon } from "@radix-ui/react-icons";

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
