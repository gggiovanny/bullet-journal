import Link from 'next/link';
import { FaBookmark } from 'react-icons/fa';

import { Button } from '@/components/Button';

import { appRoute } from './app/link';

export default function Home() {
  return (
    <main className="min-h-screen px-8 py-5">
      <div className="w-[222px] h-[213px]">
        <h1 className="font-title text-6xl text-text-color  leading-[normal]">
          my bullet journal
        </h1>
      </div>
      <div className="w-100 mt-10 flex flex-col gap-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="w-100"
            style={{
              height: '10px',
              backgroundImage:
                'radial-gradient(circle at center, var(--color-icon-color) 15%, rgba(255,255,255,0) 0%)',
              backgroundPosition: 'bottom',
              backgroundSize: '13px 13px',
              backgroundRepeat: 'repeat-x',
            }}
          />
        ))}
      </div>
      <Link href={appRoute}>
        <Button className="mt-8">
          <FaBookmark className="text-icon-color" />
          abrir
        </Button>
      </Link>
      <svg
        className="mt-9 absolute right-0"
        xmlns="http://www.w3.org/2000/svg"
        width="278"
        height="283"
        viewBox="0 0 278 283"
        fill="none"
      >
        <path
          d="M131.314 18.3346C105.839 6.17201 70.2329 0.214103 22.5625 0.00258001C18.0667 -0.0585002 13.6592 1.25246 9.92754 3.76065C6.86459 5.83096 4.35732 8.62221 2.62623 11.8889C0.895154 15.1556 -0.00668669 18.7976 3.73258e-05 22.4946V224.217C3.73258e-05 237.854 9.70191 248.141 22.5625 248.141C72.6724 248.141 122.937 252.822 153.044 281.279C153.456 281.67 153.974 281.932 154.533 282.031C155.092 282.131 155.668 282.063 156.19 281.838C156.711 281.613 157.154 281.239 157.465 280.764C157.776 280.288 157.94 279.732 157.938 279.164V41.4753C157.939 39.8716 157.596 38.2864 156.932 36.8267C156.267 35.367 155.298 34.067 154.088 33.0143C147.192 27.1187 139.531 22.1809 131.314 18.3346ZM328.51 3.73949C324.777 1.23755 320.369 -0.0660915 315.875 0.00258001C268.205 0.214103 232.598 6.14381 207.124 18.3346C198.907 22.1739 191.244 27.102 184.343 32.9861C183.136 34.0406 182.168 35.3412 181.505 36.8006C180.843 38.2599 180.5 39.8442 180.5 41.4471V279.15C180.5 279.696 180.661 280.23 180.962 280.684C181.264 281.139 181.694 281.494 182.197 281.706C182.7 281.918 183.254 281.976 183.79 281.874C184.326 281.771 184.82 281.513 185.21 281.131C203.309 263.152 235.073 248.12 315.903 248.127C321.887 248.127 327.626 245.75 331.857 241.518C336.089 237.287 338.466 231.548 338.466 225.564V22.5016C338.474 18.7973 337.57 15.148 335.834 11.8758C334.097 8.60361 331.582 5.80927 328.51 3.73949Z"
          fill="#FFDBC3"
        />
      </svg>
    </main>
  );
}
