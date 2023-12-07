import Board from "../containers/Board";

export default function Home() {
  return (
    <main className=" grid place-items-center gap-2 h-screen bg-gradient-to-tr from-red-400 to-green-950 p-8">
      <Board />
    </main>
  );
}
