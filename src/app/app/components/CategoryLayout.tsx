type Props = {
  title: string;
  children: React.ReactNode;
  aside?: React.ReactNode;
  backgroundColor: string;
};

export default function CategoryLayout({
  title,
  backgroundColor,
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
          <h1 className="font-title text-9xl font-extrabold text-text-color-dim opacity-50 mt-[-40px] ml-[-10px]">
            {title}
          </h1>
          {children}
        </section>
        <aside className="col-span-1">{aside}</aside>
      </div>
    </main>
  );
}
