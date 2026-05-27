import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

export function Projects() {
  return (
    <div className='h-full w-full flex flex-col items-center'>
      <Accordion  collapseAll className='mt-24 mb-16 w-full max-w-2xl border-0'>
        <AccordionPanel>
          <div className='overflow-hidden rounded-lg border dark:border-gray-700'>
            <AccordionTitle>
              <a
                href="https://github.com/obrona/peerprep-g04"
                target="_blank" 
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                PeerPrep
              </a>
            </AccordionTitle>
            <AccordionContent>
              <ul className='list-disc space-y-1 pl-5'>
                <li>
                  Developed a website where users can match and code leetcode questions together
                </li>
                <li>
                  Tech stack
                  <ul className='mt-1 list-[circle] space-y-1 pl-5'>
                    <li>Frontend: React, JavaScript, HTML, CSS</li>
                    <li>Backend: JavaScript, Node, WebSocket, SocketIO, Redis, PostgreSQL</li>
                  </ul>
                </li>
              </ul>
            </AccordionContent>
          </div>
        </AccordionPanel>

        <AccordionPanel>
          <div className='mt-4 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700'>
            <AccordionTitle>
              <a
                href="https://github.com/obrona/Order-Matching-Engine"
                target="_blank" 
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                Order Matching Engine
              </a>
            </AccordionTitle>
            <AccordionContent>
              <ul className='list-disc space-y-1 pl-5'>
                <li>
                  Implemented an order matching engine that can run concurrently. Use C++ atomics to allow orders from the same side, e.g buy orders, to match with orders from the other side concurrently without locks. 
                </li>
                <li>
                  Uses synchronisation primitives such as mutexes and conditional variables to ensure only orders from a single side are processed together.
                </li>
              </ul>
            </AccordionContent>
          </div>
        </AccordionPanel>

        <AccordionPanel>
          <div className='mt-4 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700'>
            <AccordionTitle>
              <a
                href="https://github.com/obrona/Train-Network-Simulator"
                target="_blank" 
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                Train Network Simulator
              </a>
            </AccordionTitle>
            <AccordionContent>
              <ul className='list-disc pl-5'>
                <li>
                  Programmed a train network simulator in C++, and parallelized with OpenMPI, achieving a 2x speedup compared to a sequential program, when run with 8 CPU cores.
                </li>
              </ul>
            </AccordionContent>
          </div>
        </AccordionPanel>

        <AccordionPanel>
          <div className='mt-4 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700'>
            <AccordionTitle>
              <a
                href="https://github.com/obrona/Virus-Signature-Matcher"
                target="_blank" 
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                Virus Signature Matcher
              </a>
            </AccordionTitle>
            <AccordionContent>
              <ul className='list-disc pl-5'>
                <li>
                  Programmed a virus signature matcher in C++ and parallelized with CUDA, achieving sub 1.0s total execution time when run on NVIDIA H100-96 GPU on 1000 viruses and 1000 signatures, each with a length of 1000 characters, using a naive O(mn) sub-string matching algorithm.
                </li>
              </ul>
            </AccordionContent>
          </div>
        </AccordionPanel>

        <AccordionPanel>
          <div className='mt-4 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700'>
            <AccordionTitle>
              <a
                href="https://github.com/obrona/Particle-Collision-Simulator"
                target="_blank" 
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                Particle Collision Simulator
              </a>
            </AccordionTitle>
            <AccordionContent>
              <ul className='list-disc pl-5'>
                <li>
                  Programmed a particle collision simulator in C++ and parallelised with OpenMP, achieving close to 800% speedup when run on a 8 core CPU.
                </li>
              </ul>
            </AccordionContent>
          </div>
        </AccordionPanel>

        <AccordionPanel>
          <div className='mt-4 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700'>
            <AccordionTitle>
              <a
                href="https://github.com/obrona/Doubt-Drop-Note-Taking"
                target="_blank" 
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                Doubt Drop
              </a>
            </AccordionTitle>
            <AccordionContent>
              <ul className='list-disc pl-5'>
                <li>
                  Developed a website to help users take notes and manage their time using a pomodoro timer using React for frontend and Google Firebase as the backend
                </li>
                <li>
                  Developed a chat function in the website using Express + SocketIO and MongoDB as the database to facilitate communication between users. 
                </li>
                <li>
                  Obtained Apollo Achievement (Advanced) Level. 
                </li>
              </ul>
            </AccordionContent>
          </div>
        </AccordionPanel>

        <AccordionPanel>
          <div className='mt-4 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700'>
            <AccordionTitle>
              <a
                href="https://github.com/obrona/EduLog"
                target="_blank" 
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                EduLog
              </a>
            </AccordionTitle>
            <AccordionContent>
              <ul className='list-disc pl-5'>
                <li>
                  Built an app for freelance tuition teachers to manage students’ info and track lessons
                </li>
                <li>
                  Used JUnit Test framework for test coverage, Gradlew for build automation, Git for version control, JavaFX for UI, Github for issue tracking
                </li>
              </ul>
            </AccordionContent>
          </div>
        </AccordionPanel>

        <AccordionPanel>
          <div className='mt-4 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700'>
            <AccordionTitle>
              <a
                href="https://github.com/obrona/codecrafters-grep"
                target="_blank" 
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                Grep Expression Simulator
              </a>
            </AccordionTitle>
            <AccordionContent>
              <ul className='list-disc pl-5'>
                <li>
                  Develop a grep program that can handle match literal character, match digit, positive and negative character groups, start and end string anchor, match 1 or more, match 0 or more, wildcards and alternation.
                </li>
                <li>
                  Implemented a finite state automata in Java to determine whether the regex pattern exists in the string.
                </li>
                <li>
                  Use JUnit for testing, Gradlew for build automation.
                </li>
              </ul>
            </AccordionContent>
          </div>
        </AccordionPanel>

        <AccordionPanel>
          <div className='mt-4 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700'>
            <AccordionTitle>
              <a
                href="https://github.com/obrona/CS3103-assignment4"
                target="_blank" 
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                Adaptive Hybrid Transport Protocol
              </a>
            </AccordionTitle>
            <AccordionContent>
              <ul className='list-disc pl-5'>
                <li>
                  Programmed an event driven, asynchronous network transport protocol using Python sockets.
                </li>
              </ul>
            </AccordionContent>
          </div>
        </AccordionPanel>

        <AccordionPanel>
          <div className='mt-4 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700'>
            <AccordionTitle>
              <a
                href="https://github.com/obrona/CS3245-homework2"
                target="_blank" 
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                Boolean Retrieval Engine
              </a>
            </AccordionTitle>
            <AccordionContent>
              <ul className='list-disc pl-5'>
                <li>
                  Implemented a boolean retrieval engine in Python.
                </li>
                <li>
                  Used shunting yard algorithm to parse boolean expressions quickly.
                </li>
                <li>
                  Used SPIMI to build a document index for large corpora that cannot fit in memory.
                </li>
              </ul>
            </AccordionContent>
          </div>
        </AccordionPanel>

         <AccordionPanel>
          <div className='mt-4 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700'>
            <AccordionTitle>
              <a
                href="https://github.com/obrona/CS3241-assignment5"
                target="_blank" 
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                Ray Tracer
              </a>
            </AccordionTitle>
            <AccordionContent>
              <ul className='list-disc pl-5'>
                <li>
                  Built a ray tracer in C++ and OpenGL.
                </li>
                <li>
                  Used modern C++ style such as RAII for clean code.
                </li>
              </ul>
            </AccordionContent>
          </div>
        </AccordionPanel>
      </Accordion>

    </div>
  )
}
