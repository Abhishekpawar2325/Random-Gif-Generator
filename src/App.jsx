import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-full flex flex-col background">
      <h1 className="bg-white rounded-lg text-center ml-[25px] mr-[25px] mt-[40px] px-10 py-2 text-4xl font-bold">RANDOM GIFS</h1>
      <div className="flex flex-col items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}
