import Image from "next/image";

export default function WikipediaProfile() {
  return (
    <div className="w-60 flex items-center flex-col gap-1 border-1 border-zinc-400 border-solid p-2 float-right">
      <h2 className="bg-wikipedia-yellow font-bold text-center w-full">
        Guillermo Bernal
      </h2>
      <Image
        width={200}
        height={200}
        alt="Profile Picture"
        src={"/assets/images/cat_profile_picture.jpeg"}
      />
      <p>Guillermo Bernal in 1978</p>
      <p className="bg-wikipedia-yellow text-center  w-full">
        Información personal
      </p>
      <div>
        <p>Nacimiento</p>
        <p>
          11 de enero de 2002, <a href="">Zaragoza</a>, <a href="">Aragón</a>
          <img
            src="assets/images/wikipedia/Flag_of_Aragon.svg.webp"
            alt="Bandera de Aragón"
          />
          , <a href="">España</a>{" "}
          <img
            src="assets/images/wikipedia/Flag_of_Spain.svg.webp"
            alt="Bandera de Aragón"
          />
        </p>
      </div>
      <p className="bg-wikipedia-yellow text-center  w-full">Educación</p>
      <p className="bg-wikipedia-yellow text-center  w-full">Experiencia</p>
    </div>
  );
}
