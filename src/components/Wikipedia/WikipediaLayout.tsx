import WikipediaProfile from "./WikipediaProfile";

export default function WikipediaLayout() {
  return (
    <div className="h-[80dvh] w-[70dvw] border-[#343434] border-1 rounded-lg p-[9px] font-wikipedia bg-white text-black">
      <div className="flex w-full  justify-between items-center">
        <h2 className="font-wikipedia-times">Guillermo Bernal</h2>
        <select>
          <option>Español</option>
          <option>Inglés</option>
          <option>Alemán</option>
        </select>
      </div>
      <hr />
      <div className="">
        <WikipediaProfile />
        <p>
          ¡Hola! Soy <b>Guillermo</b>, un desarrollador de 23 años viviendo en
          Zaragoza, España.
        </p>
        <p>
          Mis dos grandes pasiones son la programación y el arte. De esta
          combinación nacen las dos facetas que me definen: Por un lado, me
          encanta aprender cada día algo nuevo, aumentando mis conocimientos
          técnicos y escribiendo código más limpio y mantenible. Por el otro,
          disfruto un montón la parte creativa y de diseño, donde puedo expresar
          ideas, experimentar y darle vida a proyectos que impactan visualmente.
          Lo que más me gusta de la programación es que el único límite es la
          imaginación.
        </p>
        <h3 className="font-wikipedia-times">Tecnologías</h3>
        <hr />
        Empecé a estudiar...
        <h4>
          <b>Mi stack</b>
          <ul>
            <li>Next.js</li>
            <li>Tailwind</li>
            <li>React</li>
            <li>MongoDB</li>
            <li>SQL</li>
            <li>TypeScript</li>
          </ul>
        </h4>
      </div>
    </div>
  );
}
