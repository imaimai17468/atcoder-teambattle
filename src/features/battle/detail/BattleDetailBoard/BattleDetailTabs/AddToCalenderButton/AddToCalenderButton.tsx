import { CalendarIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

type AddToCalenderButtonProps = {
  title: string;
  start: Date;
  end: Date;
  details: string;
};

const createGoogleCalendarEventUrl = ({
  title,
  start,
  end,
  details,
}: AddToCalenderButtonProps) => {
  const baseUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE";
  const formattedTitle = encodeURIComponent(title);
  const formattedStart = start.toISOString().replace(/-|:|\.\d\d\d/g, "");
  const formattedEnd = end.toISOString().replace(/-|:|\.\d\d\d/g, "");
  const formattedDetails = encodeURIComponent(details);

  return `${baseUrl}&text=${formattedTitle}&dates=${formattedStart}/${formattedEnd}&details=${formattedDetails}&sf=true&output=xml`;
};

export const AddToCalenderButton: React.FC<AddToCalenderButtonProps> = ({
  title,
  start,
  end,
  details,
}: AddToCalenderButtonProps) => {
  const eventUrl = createGoogleCalendarEventUrl({ title, start, end, details });

  return (
    <a href={eventUrl} target="_blank" rel="noopener noreferrer">
      <Button size="icon" type="button">
        <CalendarIcon />
      </Button>
    </a>
  );
};
