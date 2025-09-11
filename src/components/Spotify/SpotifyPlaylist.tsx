import clsx from "clsx";
import Image from "next/image";

export function SpotifyHeaderPlaylist({
  src,
  alt,
  pretitle,
  title,
  description,
  author,
  authorImg,
  extraInfo,
  length,
  className,
}: {
  src: string;
  alt: string;
  pretitle: string;
  title: string;
  description: string;
  author: string;
  authorImg: string;
  extraInfo: string;
  length: string;
  className?: string;
}) {
  return (
    <div className={clsx("flex gap-4 p-5 pt-10 rounded-t-md", className)}>
      <Image
        height={128}
        width={128}
        src={src}
        alt={alt}
        className="rounded-md"
      />
      <div className="flex flex-col justify-end gap-1.5">
        <p className="text-[0.6rem]">{pretitle}</p>
        <p className="font-bold text-5xl">{title}</p>
        <p className="text-[0.6rem] opacity-70">{description}</p>
        <div className="flex gap-1 text-[0.6rem] items-center">
          <Image
            height={16}
            width={16}
            src={authorImg}
            alt={`${author}s profile pic`}
            className="rounded-full"
          />
          <p>{author}</p> · <p className=" opacity-70">{extraInfo}</p>
          <p className=" opacity-70">{length}</p>
        </div>
      </div>
    </div>
  );
}

export function SpotifyHeaderArtist() {
  return (
    <div>
      <div></div>
    </div>
  );
}

export function SpotifyHeaderList() {
  return (
    <div>
      <div></div>
    </div>
  );
}

export function SpotifyPlaylist({
  className,
  values,
}: {
  className?: string;
  values?: any[];
}) {
  console.log(values);

  return (
    <div className={clsx("relative p-5 bg-spotify-grey-800", className)}>
      <div className="absolute top-0 left-0 bg-gradient-to-b from-[#4c0505] to-[#121212] w-full h-[100px] z-[0]"></div>
      <div className="relative z-1">prueba</div>
      <div className="relative z-1 flex flex-col gap-2 h-full">
        <div className="flex opacity-70 text-[0.65rem]">
          <div className="w-1/20">#</div>
          <div className="w-9/20">Título</div>
          <div className="w-5/20">Reproducciones</div>
          <div className="w-5/20">Tiempo</div>
        </div>
        <hr className="opacity-70" />
        <div className="h-full flex flex-col gap-3">
          {values &&
            values.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-1/20 opacity-70">{index + 1}</div>
                <div className="w-9/20 flex items-center gap-2">
                  <Image
                    alt={`${item.name}'s picture`}
                    height={60}
                    width={60}
                    src={item.images[0].url}
                    className="rounded-sm"
                  />
                  {item.name}
                </div>
                <div className="w-5/20 opacity-70">1.000.000</div>
                <div className="w-5/20 opacity-70">3:26</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
