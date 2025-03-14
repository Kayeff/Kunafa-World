import story from "../assets/Our-story.png";

export default function About() {
  return (
    <main className="w-full min-h-screen bg-old-lace text-leandro">
      <div className="w-full p-10 flex items-center justify-center">
        <h1 className="font-kaushan-script font-medium tracking-tighter text-6xl">
          How it started !
        </h1>
      </div>
      <div className="w-full flex items-center justify-center">
        <img className="w-[50%]" src={story} alt="" />
      </div>
    </main>
  );
}
