import Image from "next/image";
import { Inter } from "@next/font/google";
import FancyGrid from "../components/grid01/FancyGrid";
import GridCards from "../components/grid01/GridCards";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <main className="grid grid-cols-3 gap-x-2 gap-y-3 grid-flow-row-dense m-10">
        <div
          className="bg-[#1f2a3e] rounded-lg shadow-xl min-h-[100px] border border-[
#393c41]"
        />
        <div className="bg-[#1f2a3e] rounded-lg shadow-xl min-h-[100px] col-span-1/2" />
        <div className="bg-[#1f2a3e] rounded-lg shadow-xl min-h-[100px] row-span-2 col-span-2" />
        <div className="bg-[#1f2a3e] rounded-lg shadow-xl min-h-[100px]" />
        <div className="bg-[#1f2a3e] rounded-lg shadow-xl min-h-[100px]" />
        <div className="bg-[#1f2a3e] rounded-lg shadow-xl min-h-[100px]" />
        <div className="bg-[#1f2a3e] rounded-lg shadow-xl min-h-[100px]" />
        <div className="bg-[#1f2a3e] rounded-lg shadow-xl min-h-[100px]" />
        <div className="bg-[#1f2a3e] rounded-lg shadow-xl min-h-[100px]" />
        <div className="bg-[#1f2a3e] rounded-lg shadow-xl min-h-[100px]" />
      </main>
      <FancyGrid />
      <GridCards />
    </div>
  );
}
