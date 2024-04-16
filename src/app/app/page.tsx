'use client';

const bookmarks = [
  { text: 'personal', color: '#C6F0EE' },
  { text: 'por mes', color: '#CAF1BC' },
  { text: 'año en pixeles', color: '#F2D4B1' },
  { text: 'listas', color: '#F2B1B1' },
  { text: 'creativo', color: '#FBCAE1' },
];

export default function PageRoot() {
  return (
    <main className="min-h-screen flex flex-col">
      <h1 className="font-title text-9xl font-extrabold text-text-color-dim opacity-50 mt-[-40px] ml-[-10px]">
        crear
      </h1>

      <div className="grid grid-flow-col grid-cols-8 flex-grow">
        <section className="col-span-7 h-full">
          <div className="text-center font-italic italic text-text-color-alt font-normal h-full text-sm">
            <div className="w-56 mx-auto flex flex-col justify-center align-middle gap-3 h-full">
              <p className="underline">Agenda Vacía</p>
              <p>Navega por las pestañas para añadir páginas nuevas</p>
            </div>
          </div>
        </section>
        <aside className="col-span-1">
          <nav>
            <ul className="flex flex-col font-title text-sm font-normal">
              {bookmarks.map(({ text, color }, index) => (
                <li
                  key={index}
                  className="shadow-button-shadow rounded-l-2xl ml-auto pt-5 pb-5 pl-2 pr-3"
                  style={{
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    backgroundColor: color,
                    zIndex: 100 - index,
                  }}
                >
                  {text}
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </main>
  );
}
