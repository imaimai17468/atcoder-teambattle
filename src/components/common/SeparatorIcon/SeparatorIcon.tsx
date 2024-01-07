type SeparatorIconProps = {
  icon: React.ReactNode;
  text: string;
};

export const SeparatorIcon: React.FC<SeparatorIconProps> = ({
  icon,
  text,
}: SeparatorIconProps) => {
  return (
    <div className="my-8 flex animate-bounce items-center justify-center gap-2">
      <div>{icon}</div>
      <p>{text}</p>
      <div>{icon}</div>
    </div>
  );
};
