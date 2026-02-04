const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Next.js',
  'Tailwind',
  'Python',
]

export default function Skills() {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-semibold mb-8">Skills</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map(skill => (
          <span
            key={skill}
            className="px-4 py-2 bg-gray-800 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
