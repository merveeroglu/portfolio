import Image from "next/image";

export default function Pome() {
  return (
    <div className="px-6 md:px-24 py-12 flex flex-col md:flex-row items-center md:items-center justify-center gap-20 md:gap-36 min-h-[80vh]">
      {/* Yazı Alanı */}
      <div className="text-center md:text-left max-w-xl">
        <div className="typewriter">
          <h1 className="text-4xl md:text-6xl font-bold">Hi, I&apos;m Merve</h1>
          <div className="text-xl md:text-3xl mt-4 md:mt-6">I&apos;m a Front-end Developer</div>
        </div>

        <a
          href="/cv.pdf"
          download
          className="mt-10 inline-block bg-sky-900 hover:bg-gray-700 text-white text-lg md:text-2xl font-semibold py-3 px-5 md:py-4 md:px-6 rounded-xl shadow-lg transition-all duration-300"
        >
          📄 Download Resume
        </a>
      </div>

      {/* Profil Fotoğrafı */}
      <div className="w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full border-8 border-gray-400 overflow-hidden shadow-lg">
        <Image
          src="/merve.jpg"
          alt="Merve"
          width={300}
          height={300}
          className="object-cover object-top w-full h-full"
        />
      </div>
    </div>
  );
}
