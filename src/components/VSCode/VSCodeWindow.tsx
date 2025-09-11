import { ReactNode } from "react";

export default function VSCodeWindow({ lines }: { lines: ReactNode[] }) {
  return (
    <div className="flex flex-col">
      {lines.map((line, idx) => (
        <div className="flex items-center" key={idx}>
          <div className="flex justify-end text-right w-[20px] text-vscode-text-grey">
            {idx + 1}
          </div>
          {line}
        </div>
      ))}
    </div>
  );
}
