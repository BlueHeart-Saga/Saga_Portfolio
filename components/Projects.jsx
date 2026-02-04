export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6">
      <h2 className="text-3xl font-semibold text-center mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-900 p-5 rounded-xl">
          <h3 className="text-xl font-semibold">
            Document Signing App
          </h3>
          <p className="text-gray-400 mt-2">
            Zoho-like document builder with click-to-sign
            functionality.
          </p>
        </div>

        <div className="bg-gray-900 p-5 rounded-xl">
          <h3 className="text-xl font-semibold">
            AI Document Generator
          </h3>
          <p className="text-gray-400 mt-2">
            AI-powered document creation using modern UI.
          </p>
        </div>

        <div className="bg-gray-900 p-5 rounded-xl">
          <h3 className="text-xl font-semibold">
            Auth System
          </h3>
          <p className="text-gray-400 mt-2">
            Secure login & registration system.
          </p>
        </div>
      </div>
    </section>
  )
}
