type Props = {
  children: React.ReactNode;
  aside?: React.ReactNode;
  backgroundColor: string;
};

export default function CategoryLayout({
  backgroundColor,
  children,
  aside,
}: Props) {
  return (
    <main
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: backgroundColor,
        transition: 'background-color 0.1s ease-in-out',
      }}
    >
      <div className="grid grid-flow-col grid-cols-8">
        <section className="col-span-7 h-full">{children}</section>
        <aside className="col-span-1">{aside}</aside>
      </div>
    </main>
  );
}
