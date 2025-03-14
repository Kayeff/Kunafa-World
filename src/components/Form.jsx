export default function Form() {
  return (
    <form
      action=""
      className="w-[70%] flex items-center justify-center flex-col gap-8 border border-leandro/20 p-4"
    >
      <div className="w-full grid grid-cols-2 gap-3">
        <label className="font-switzer flex flex-col font-medium gap-0.5">
          Name{" "}
          <input
            className="outline-none border border-leandro/20 p-2 font-switzer"
            placeholder="Enter your full name"
            type="text"
          />
        </label>
        <label className="font-switzer flex flex-col font-medium gap-0.5">
          E-mail{" "}
          <input
            className="outline-none border border-leandro/20 p-2 font-switzer"
            placeholder="Enter your email"
            type="email"
          />
        </label>
        <label className="font-switzer flex flex-col font-medium gap-0.5 col-span-2">
          Phone{" "}
          <input
            className="outline-none border border-leandro/20 p-2 font-switzer"
            type="tel"
            pattern="[0-9]{10}"
            placeholder="+91"
          />
        </label>
        <label className="font-switzer flex flex-col font-medium gap-0.5 col-span-2">
          Your Message{" "}
          <textarea className="outline-none border border-leandro/20 p-2 font-switzer h-36" />
        </label>
      </div>
      <button className="font-switzer px-10 font-medium py-3 bg-leandro text-old-lace rounded-full cursor-pointer hover:bg-transparent hover:border-leandro border border-transparent hover:text-leandro duration-300 w-1/2">
        Send Message
      </button>
    </form>
  );
}
