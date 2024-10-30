import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="header">
        <div>left</div>
        <div>
          <Link href={"/"} className="nexon text-2xl">webstoryboy</Link>
        </div>
        <div>right</div>
      </header>
    </>
  );
}
