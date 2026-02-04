export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24">
      <h1 className="text-4xl md:text-5xl font-bold">
        Hi, I’m <span className="text-blue-500">Saga</span> 👋
      </h1>
      <p className="mt-4 text-gray-400 max-w-xl">
        Frontend Developer specializing in Next.js & React,
        building modern, scalable web applications.
      </p>

      <div className="mt-8 space-x-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          className="px-6 py-3 border border-gray-600 rounded-lg"
        >
          Resume
        </a>
      </div>
    </section>
  )
}
