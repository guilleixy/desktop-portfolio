import Image from "next/image";

export default function ChromeWindow({
  children,
  favicon,
  title,
  url,
}: {
  children: React.ReactNode;
  favicon: string;
  title: string;
  url: string;
}) {
  return (
    <div className="h-[80dvh] w-[70dvw] border-[#343434] border-1  mt-10 ml-10 rounded-lg bg-chrome-dkr overflow-hidden pt-1">
      <div>
        <div className="flex bg-chrome-dk">
          <div className="w-[40px] bg-chrome-dkr rounded-br-2xl">
            <div></div>
          </div>
          <div className="bg-chrome-dkr">
            <div className="flex items-center gap-1 bg-chrome-dk rounded-t-2xl p-1 px-3 min-w-[200px]">
              <Image height={20} width={20} src={favicon} alt="favicon" />
              {title}
            </div>
          </div>

          <div className="w-full bg-chrome-dkr rounded-bl-2xl">
            <div></div>
          </div>
        </div>
        <div className="bg-chrome-dk rounded-t-lg px-2 py-1 flex items-center">
          <div>BOTONES</div>
          <div className="w-full bg-chrome-dkr rounded-full">{url}</div>
          <div>MAS BOTONES</div>
        </div>
      </div>
      <div className="h-full">{children}</div>
    </div>
  );
}
