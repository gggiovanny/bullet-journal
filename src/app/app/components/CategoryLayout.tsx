type Props = {
  title: string;
  children: React.ReactNode;
  aside?: React.ReactNode;
  backgroundColor: string;
  titleColor: string;
};

export default function CategoryLayout({
  title,
  backgroundColor,
  titleColor,
  children,
  aside,
}: Props) {
  return (
    <main
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="grid grid-flow-col grid-cols-8">
        <section className="col-span-7 h-full">
          <h1
            className="font-title text-9xl font-extrabold opacity-50 mt-[-40px] ml-[-10px]"
            style={{ color: titleColor }}
          >
            {title}
          </h1>
          {children}
        </section>
        <aside className="col-span-1">{aside}</aside>
      </div>
    </main>
  );
}
