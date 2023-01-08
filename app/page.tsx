import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="grid grid-cols-3 gap-x-2 gap-y-3 grid-flow-row-dense m-10">
      <div
        className="bg-[#1f2a3e] rounded-lg shadow-xl min-h-[500px] border border-[
#393c41]"
      />
      <div className="bg-[#1f2a3e] rounded-lg shadow-xl min-h-[500px] col-span-1/2" />
      <div className="bg-[#1f2a3e] rounded-lg shadow-xl min-h-[500px] row-span-2 col-span-2" />
      <div className="bg-[#1f2a3e] rounded-lg shadow-xl min-h-[500px]" />
      <div className="bg-[#1f2a3e] rounded-lg shadow-xl min-h-[500px]" />
      <div className="bg-[#1f2a3e] rounded-lg shadow-xl min-h-[500px]" />
      <div className="bg-[#1f2a3e] rounded-lg shadow-xl min-h-[500px]" />
      <div className="bg-[#1f2a3e] rounded-lg shadow-xl min-h-[500px]" />
      <div className="bg-[#1f2a3e] rounded-lg shadow-xl min-h-[500px]" />
      <div className="bg-[#1f2a3e] rounded-lg shadow-xl min-h-[500px]" />
    </main>
  );
}
