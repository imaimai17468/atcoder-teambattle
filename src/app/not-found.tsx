import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function NotFoundPage() {
  return (
    <Alert>
      <ExclamationTriangleIcon />
      <AlertTitle>404 Not Found</AlertTitle>
      <AlertDescription>
        The requested page could not be found.
      </AlertDescription>
    </Alert>
  );
}
