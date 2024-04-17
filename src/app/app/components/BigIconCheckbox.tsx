type Props = {
  text: string;
  Icon: any;
};

export default function BigIconCheckbox({ text, Icon }: Props) {
  return (
    <div className="rounded-2.5xl shadow-button-shadow text-melon bg-background-color w-20 h-20 flex flex-col justify-center items-center pb-2 px-3 pt-2">
      <Icon size="40" />
      <span className="font-title font-extrabold text-xs text-center leading-[normal]">
        {text}
      </span>
    </div>
  );
}
