interface SkillsGridProp {
  title: string,
  skills: string[],
}

function SkillsGrid(props: SkillsGridProp) {
  const { title, skills } = props;
  return (
    <div className='w-128'>
      <h1>{title}</h1>
      <div className='mt-2 grid grid-cols-[repeat(4,128px)] auto-rows-[64px] gap-2'>
        {skills.map(skill => {
          return (
            <div
              key={skill}
              className='rounded-xl bg-gray-100 transition-transform duration-200 
                         hover:-translate-y-1 flex flex-col items-center justify-center'
            >
              <div>{skill}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}


export function Skills() {
  return (
    <div className='w-full flex flex-col gap-8 items-center pt-24'>
      <SkillsGrid 
        title='Languages'
        skills={['C++', 'Java', 'Python', 'JavaScript', 'TypeScript', 'Go', 'SQL', 'HTML', 'CSS']}
      />

      <SkillsGrid
        title='Web Development'
        skills={['React', 'Express', 'SocketIO', 'WebSocket', 'Redis', 'MaterialUI', 'TailwindCSS']}
      />

      <SkillsGrid
        title='Parallel Computing'
        skills={['OpenMP', 'CUDA', 'OpenMPI']}
      />

      <SkillsGrid
        title='Big Data'
        skills={['Hadoop', 'Spark']}
      />

      <SkillsGrid
        title='Developer Tools'
        skills={['Git', 'Docker']}
      />

      <SkillsGrid
        title='Graphics Programming'
        skills={['OpenGL']}
      />
    </div>
  )
}