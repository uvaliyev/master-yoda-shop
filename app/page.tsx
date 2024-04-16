import Image from "next/image";
import YoutubeEmbed from "./components/YoutubeEmbed";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto">
        <section className="flex">
          <aside className="w-2/5">
            <Image src="/hero1.svg" width='500' height='100' alt="Yoda" className="rounded" />
          </aside>
          <main className="w-3/5">
            <header>
              <h1 className="text-7xl font-bold">Как отличить хорошую сторону от плохой?</h1>
            </header>
            <div className="grid grid-cols-4 gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mr4">
                Продукты
              </button>
              <button className="bg-gray-200 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline ">
                О компании
              </button>
            </div>
          </main>
        </section>

        <header>
          <h1 className="text-center text-7xl font-bold">О моем магазине</h1>
        </header>
        <section className="flex">
          <main className="w-3/5">
            <header>
              <h1 className="text-right">
                Приветствую тебя, я есть Йода!

                Стать мне Верховным Палпатином и захватил я вселенную. Перед тобой сейчас - магазин мой, где каждый найти сможет планеты, корабли, и даже персонажи из далёкой-далёких галактик. Открой для себя возможность владеть кусочком вселенной! Хочешь купить Альдераан или Татуин? Или может тебе по душе придутся корабли как Звездный разрушитель? Встречать ты здесь сможешь и персонажей легендарных: Скайуокеров, Соло, воинов ситхов и джедаев.

                Выбирай смело, пусть Сила будет с тобой!</h1>
            </header>
          </main>
          <aside className="w-2/4">
            <Image src="/hero2.svg" width='400' height='100' alt="Yoda" className="rounded" />
          </aside>
        </section>
        <div className="App">
          <h1>это я</h1>
          <YoutubeEmbed embedId="WrsvL0ULzmc" />
        </div>
        <header>
          <h1 className="text-center text-7xl font-bold">Мои продукты</h1>
        </header>
        <section className="my-8">
          <div className="flex justify-around">
            <Link href="/spaceships">
              <div className="p-4">
                <Image src="/hero3.svg" width='300' height='100' alt="Spaceships" className="rounded" />
              </div>
            </Link>
            <Link href="/characters">
              <div className="p-4">
                <Image src="/hero4.svg" width='350' height='100' alt="Characters" className="rounded" />
              </div>
            </Link>
            <Link href="/planets">
              <div className="p-4">
                <Image src="/hero5.svg" width='300' height='100' alt="Planets" className="rounded" />
              </div>
            </Link>
          </div>

        </section>
        <header>
          <h1 className="text-center text-7xl font-bold">Мои партнеры</h1>
        </header>
        <section className="my-8">
          <div className="flex justify-around">
            <div className="p-4">
              <Image src="/p1.svg" width='100' height='250' alt="-" className="rounded" />

            </div>
            <div className="p-4">
              <Image src="/p2.svg" width='100' height='250' alt="-" className="rounded" />

            </div>
            <div className="p-4">
              <Image src="/p3.svg" width='100' height='250' alt="-" className="rounded" />

            </div>
            <div className="p-4">
              <Image src="/p4.svg" width='100' height='250' alt="-" className="rounded" />

            </div>

          </div>
        </section>

      </div>
    </main>
  );
}
