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
    <div>
      <div>
        <div>ventanas</div>
        <div>navegador</div>
      </div>
      <div>{children}</div>
    </div>
  );
}
