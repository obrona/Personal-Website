import { AccordionContent, AccordionPanel, AccordionTitle, ChevronDownIcon } from "flowbite-react";

export function Projects() {
  return (
    <div className='h-full w-full flex flex-col items-center'>
      <div className='mt-24 mb-16 w-full max-w-2xl border-0'>
        <AccordionPanel alwaysOpen isOpen arrowIcon={ChevronDownIcon}>
          <div className='overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700'>
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
              <ul className='list-disc space-y-1 pl-5 text-sm'>
                <li>
                  Architected a microservices platform of 6 independent Node.js/Express services (user, matching, question, collaboration, chat, submission) orchestrated with Docker Compose, backed by PostgreSQL and Redis.
                </li>
                <li>
                  Built a real-time collaborative code editor using Yjs CRDTs and the Monaco editor, enabling multiple users to edit code simultaneously with conflict-free synchronization.
                </li>
                <li>
                  Implemented a Redis-backed matching engine that pairs users in real time by topic and difficulty, plus live chat via Socket.IO.
                </li>
                <li>
                  Integrated the Judge0 API for in-browser code execution across languages and the Google Gemini API for AI-assisted hints/feedback.
                </li>
                <li>
                  Secured all services with JWT-based authentication and delivered automated test coverage using Vitest.
                </li>
                <li>
                  Built a modern UI for the frontend using React, styled with pure CSS.
                </li>
              </ul>
            </AccordionContent>
          </div>
        </AccordionPanel>

        <AccordionPanel alwaysOpen isOpen arrowIcon={ChevronDownIcon}>
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
              <ul className='list-disc pl-5 text-sm'>
                <li>
                  Built Doubt Drop, a React single-page study-productivity platform for students combining note-taking, real-time peer chat, a Pomodoro timer, and a shared calendar behind an authenticated multi-page router (React Router, Context API for global auth/session state).
                </li>
                <li>
                  Designed the full data layer on Firebase — Firestore collections for notes, calendar events, modules, and user profiles, plus Firebase Storage for user-uploaded profile images — with per-user query scoping so each account only reads and writes its own records.
                </li>
                <li>
                  Implemented a real-time, module-scoped group chat with Socket.IO, including live message streaming, per-user avatars rendered inline with messages, and session-persisted chat login.
                </li>
                <li>
                  Built the UI with Material UI (MUI v5) and a responsive masonry note grid, and wrote Jest / React Testing Library unit tests with mocked Firestore calls to cover note rendering, filtering, and deletion.
                </li>
              </ul>
            </AccordionContent>
          </div>
        </AccordionPanel>

        <AccordionPanel alwaysOpen isOpen arrowIcon={ChevronDownIcon}>
          <div className='mt-4 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700'>
            <AccordionTitle>
              <a
                href="https://github.com/obrona/Software-Transactional-Memory"
                target="_blank" 
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                Software Transactional Memory Engine
              </a>
            </AccordionTitle>
            <AccordionContent>
              <ul className='list-disc space-y-1 pl-5 text-sm'>
                <li>
                  Built a software transactional memory engine in C++20 that executes transactions from 32 concurrent threads with full serializability, using strict two-phase locking over per-address reader-writer locks with early lock release to minimize contention windows.
                </li>
                <li>
                  Designed a custom fair reader-writer lock supporting read/write/upgrade modes, FIFO wake ordering with reader batching, and O(1) max-priority waiter queries, built on std::atomic wait/notify.
                </li>
                <li>
                  Implemented wait-die deadlock prevention with timestamp reuse across retries, guaranteeing both deadlock-freedom and starvation-freedom (the oldest transaction can never abort).
                </li>
                <li>
                  Achieved near-linear scaling on disjoint workloads (932K → 3.6M txn/s from 1 to 8 threads on a 16-core machine) with no global lock on any execution path.
                </li>
              </ul>
            </AccordionContent>
          </div>
        </AccordionPanel>

        <AccordionPanel alwaysOpen isOpen arrowIcon={ChevronDownIcon}>
          <div className='mt-4 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700'>
            <AccordionTitle>
              <a
                href="https://github.com/obrona/order-book"
                target="_blank" 
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                Order Matching Engine
              </a>
            </AccordionTitle>
            <AccordionContent>
              <ul className='list-disc space-y-1 pl-5 text-sm'>
                <li>
                  Built a concurrent limit order book in C++20 where matching, resting, and cancellation on the hot path are lock-free: orders insert via CAS-splice into sorted intrusive linked lists, and quantity consumption/cancellation linearize on a single CAS of an atomic remaining-quantity counter, guaranteeing no fill is double-consumed or lost.
                </li>
                <li>
                  Designed a phase-separation scheme (adapted from the single-lane-bridge problem) that partitions operations so each list is either insert-only or consume-only at any moment, eliminating the concurrent insert/unlink race and removing the need for hazard pointers or reference counting.
                </li>
                <li>
                  Implemented safe memory reclamation via logical-then-physical deletion: dead nodes are queued on an intrusive lock-free stack and freed in batch by the last thread exiting a phase, ensuring exactly-once frees with no use-after-free.
                </li>
                <li>
                  Preserved price-time (FIFO) priority and best-price matching under full concurrency using sorted CAS-insertion with tie-breaking comparators.
                </li>
                <li>
                  Made concurrent cancellation idempotent via CAS-to-zero semantics, so duplicate cancels from the same user succeed at most once.
                </li>
              </ul>
            </AccordionContent>
          </div>
        </AccordionPanel>

        <AccordionPanel alwaysOpen isOpen arrowIcon={ChevronDownIcon}>
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
              <ul className='list-disc pl-5 text-sm'>
                <li>
                  Designed and implemented a distributed discrete-event simulator in C++17 modeling a multi-line metro network (trains, platforms, holding areas, and inter-station links) advancing in synchronized time ticks.
                </li>
                <li>
                  Parallelized the simulation with MPI, partitioning ~N platforms across P processes (round-robin load balancing) and exchanging train state each tick via non-blocking MPI_Isend/MPI_Irecv + MPI_Waitall, using a bijective sender/receiver→tag encoding to disambiguate concurrent messages.
                </li>
              </ul>
            </AccordionContent>
          </div>
        </AccordionPanel>

        <AccordionPanel alwaysOpen isOpen arrowIcon={ChevronDownIcon}>
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
              <ul className='list-disc pl-5 text-sm'>
                <li>
                  Built a CUDA program that scans FASTQ sequencing samples for viral DNA signatures with wildcard matching and computes Phred+33 quality-weighted match scores.
                </li>
                <li>
                  Designed a fused kernel that assigns each (sample, signature) pair a thread block on a 2-D grid, using strided scanning plus shared-memory tree reductions (min for leftmost match index, sum for score) to avoid a second kernel launch and global-memory round trip.
                </li>
              </ul>
            </AccordionContent>
          </div>
        </AccordionPanel>

        <AccordionPanel alwaysOpen isOpen arrowIcon={ChevronDownIcon}>
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
              <ul className='list-disc pl-5 text-sm'>
                <li>
                  Built a multithreaded 2D physics simulator resolving wall/particle collisions for 100K+ particles per timestep, using spatial binning with a staggered grid layout to eliminate cross-thread race conditions without locks.
                </li>
                <li>
                  Tuned parallel performance via guided scheduling for load balancing and restructured bin storage to reduce false sharing, cutting runtime significantly over a naive index-based approach.
                </li>
              </ul>
            </AccordionContent>
          </div>
        </AccordionPanel>

        

        <AccordionPanel alwaysOpen isOpen arrowIcon={ChevronDownIcon}>
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
              <ul className='list-disc pl-5 text-sm'>
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

        <AccordionPanel alwaysOpen isOpen arrowIcon={ChevronDownIcon}>
          <div className='mt-4 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700'>
            <AccordionTitle>
              <a
                href="https://github.com/obrona/codecrafters-grep"
                target="_blank" 
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                Grep Expression Evaluator
              </a>
            </AccordionTitle>
            <AccordionContent>
              <ul className='list-disc pl-5 text-sm'>
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

        <AccordionPanel alwaysOpen isOpen arrowIcon={ChevronDownIcon}>
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
              <ul className='list-disc pl-5 text-sm'>
                <li>
                  Programmed an event driven, asynchronous network transport protocol using Python sockets.
                </li>
              </ul>
            </AccordionContent>
          </div>
        </AccordionPanel>

        <AccordionPanel alwaysOpen isOpen arrowIcon={ChevronDownIcon}>
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
              <ul className='list-disc pl-5 text-sm'>
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

         <AccordionPanel alwaysOpen isOpen arrowIcon={ChevronDownIcon}>
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
              <ul className='list-disc pl-5 text-sm'>
                <li>
                  Built a ray tracer in C++ and OpenGL.
                </li>
                <li>
                  Utilised modern C++ style such as RAII and smart pointers.
                </li>
              </ul>
            </AccordionContent>
          </div>
        </AccordionPanel>
      </div>

      <button 
        className="fixed bottom-16 right-16 bg-blue-400 h-10 w-10 rounded-full text-white text-2xl"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        ↑
      </button>
    </div>
  )
}
