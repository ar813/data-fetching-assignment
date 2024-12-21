import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center px-[20px]">
      <div className="hover:scale-[1.05] transition bg-white p-[20px] rounded-lg shadow-lg hover:shadow-xl">
        <h1 className="font-bold text-[20px] capitalize">welcome to the data fetching application</h1>
        <p className="text-[gray] mt-[8px]">Select a method to fetch data!</p>
        <div className="flex flex-col items-center sm:justify-end sm:flex-row justify-center gap-[10px] mt-[20px]">
          <button className="w-full p-[5px] rounded-[8px] bg-[green] hover:bg-[darkgreen] text-[white] "><Link href={"/serverSide"}>Server Side</Link></button>
          <button className="w-full p-[5px] rounded-[8px] bg-[green] hover:bg-[darkgreen] text-[white] "><Link href={"/clientSide"}>Client Side</Link></button>
        </div>
      </div>
    </div>
  );
}
