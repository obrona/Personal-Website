import { Timeline, TimelineBody, TimelineContent, TimelineItem, TimelinePoint, TimelineTime, TimelineTitle } from "flowbite-react";

export function Work() {
  return (
    <div className='h-full w-98/100 flex flex-col items-center'>
      <Timeline className='mt-24'>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime>May-Aug 2026</TimelineTime>
            <TimelineTitle className='text-gray-900 dark:text-gray-900'>UI/UX Intern for Generative AI Prototypes, HTX</TimelineTitle>
            <TimelineBody className='text-gray-600 dark:text-gray-600'>
              <ul className='list-disc space-y-1 pl-5'>
                <li>Worked on SIRIS, an RAG powered chatbot for the Police Coast Guard</li>
                <li>Developed a tutorial flow feature, improving user onboarding experience.</li>
                <li>Developed multi window view so that users can see different prodecures at once.</li>
                <li>Developed multi-step agentic document retrieval and procedure generation using Langraph.</li>
                <li>Developed a cross encoder stage in the document retrieval stage, improving accuracy.</li>
                <li>Leveraged on agentic coding tools like Claude Code, OpenCode to improve productivity.</li>
                <li>
                  Tech Stack: React, JavaScript, HTML, TailwindCSS (frontend); Python, FastAPI, SQLite, LangGraph, ChromaDB, vLLM (backend)
                </li>
              </ul>
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime>May-Aug 2025</TimelineTime>
            <TimelineTitle className='text-gray-900 dark:text-gray-900'>Software Engineer Intern, NUS AICET (Softmark)</TimelineTitle>
            <TimelineBody className='text-gray-600 dark:text-gray-600'>
              <ul className='list-disc space-y-1 pl-5'>
                <li>Interned with the Softmark team, developing features to help teachers mark scripts more efficiently</li>
                <li>Develop frontend components using React</li>
                <li>Developed backend features using Go and Postgres</li>
                <li>
                  Tech Stack: React, TypeScript, Redux, Recoil, HTML, CSS (frontend); Go, PostgreSQL (backend)
                </li>
              </ul>
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  )
}