import { useState } from "react";
import { stores } from "../stores";
import { twMerge } from "tailwind-merge";
import { RiPinDistanceFill } from "@remixicon/react";

export default function StoreLocator() {
  const [selectedState, setSelectedState] = useState(1);
  const selectedStore = stores.find((store) => store.id === selectedState);

  return (
    <main className="w-full min-h-screen bg-old-lace text-leandro flex items-center justify-start flex-col pb-10">
      <div className="w-full p-10 flex items-center justify-center">
        <h1 className="font-kaushan-script font-medium tracking-tighter text-6xl">
          Our Stores
        </h1>
      </div>
      <div className="w-full flex items-center justify-center flex-col gap-4 p-8">
        <div className="flex items-center justify-center gap-4 p-4">
          {stores.map((store) => (
            <button
              key={`state-${store.id}`}
              className={twMerge(
                "text-old-lace bg-leandro p-3 px-6 font-switzer duration-300 cursor-pointer text-lg font-medium",
                selectedState === store.id && "bg-orange-moyen text-leandro"
              )}
              onClick={() => setSelectedState(store.id)}
            >
              {store.state}
            </button>
          ))}
        </div>
        <div className="w-[80%] grid grid-cols-2 gap-5">
          {selectedStore.storeObj.map((obj) => (
            <div
              key={obj.name}
              className="p-7 w-full border border-leandro/20 flex flex-col gap-4 shadow-lg"
            >
              <div className="flex items-start justify-between">
                <h1 className="font-medium font-switzer text-2xl tracking-tight">
                  {obj.name}
                </h1>
                <h1 className="font-medium font-switzer text-xl tracking-tight whitespace-nowrap">
                  {obj.phone ? `+91 ${obj.phone}` : ""}
                </h1>
              </div>
              <div>
                <h1 className="font-medium font-switzer text-lg tracking-tight flex items-start justify-start gap-2">
                  <span>
                    <RiPinDistanceFill />
                  </span>
                  {obj.location}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
