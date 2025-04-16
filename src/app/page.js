import Image from "next/image";

export default function Home() {
  return (
    <div className="text-7xl p-35 flex gap-95">
      <div>
        <div className="typewriter">
          <h1 className="text-6xl font-bold">Hi, I'm Merve</h1>
          <div className="text-3xl mt-6">I'm a Front-end Developer</div>
        </div>

        <a
          href="/cv.pdf"
          download
          className="mt-32 ms-6 inline-block bg-sky-900 hover:bg-gray-700 text-white text-2xl font-semibold py-4 px-6 rounded-xl shadow-lg transition-all duration-300"
        >
          📄 Download Resume
        </a>
      </div>
      <div className="rounded-full border-8 border-gray-400 overflow-hidden w-[300px] h-[350px] shadow-lg">
        <Image
          src="/merve.jpg"
          alt="Merve"
          width={350}
          height={350}
          className="object-contain"
        />
      </div>
    </div>
  );
}
