import { TwitterLogoIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

type TwitterShareButtonProps = {
  url: string;
  text: string;
};

export const TwitterShareButton: React.FC<TwitterShareButtonProps> = ({
  url,
  text,
}: TwitterShareButtonProps) => {
  const shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
  return (
    <a href={shareUrl} target="_blank" rel="noopener noreferrer">
      <Button type="button" rel="noopener noreferrer" size="icon">
        <TwitterLogoIcon />
      </Button>
    </a>
  );
};
