'use client';

import BookmarkNav from './components/BookmarkNav';

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
          <BookmarkNav />
        </aside>
      </div>
    </main>
  );
}
