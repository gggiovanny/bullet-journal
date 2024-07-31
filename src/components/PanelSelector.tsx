type Props = {
  onValueChange: (value: string) => void;
  children: React.ReactNode;
};

export function PanelSelector({ onValueChange, children }: Props) {
  return <div className="p-4 grid gap-5 grid-cols-4">{children}</div>;
}
