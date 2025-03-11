export default function Item({ prod }) {
  return (
    <div className="w-full flex flex-col gap-4 bg-old-lace text-leandro p-4">
      <h1 className="text-center font-switzer tracking-tight text-2xl font-semibold">
        {prod.name} Kunafas
      </h1>
      <div className="w-full relative">
        <img className="w-full" src={prod.item.src} alt="prod.name" />
        <h1 className="font-switzer text-xl absolute bottom-0 right-0 bg-old-lace text-leandro p-2 px-4 font-medium">
          {prod.item.itemName}
        </h1>
      </div>
    </div>
  );
}
