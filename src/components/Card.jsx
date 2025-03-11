export default function Card({ data }) {
  return (
    <div className="w-full text-leandro p-4 flex items-center justify-center flex-col gap-2 h-80">
      <h1 className="font-switzer text-3xl tracking-tight font-semibold">
        {data.name}
      </h1>
      <p className="font-switzer text-lg font-medium text-eden text-center w-[80%]">
        {data.text}
      </p>
    </div>
  );
}
