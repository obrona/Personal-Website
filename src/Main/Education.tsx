import { Timeline, TimelineBody, TimelineContent, TimelineItem, TimelinePoint, TimelineTime, TimelineTitle } from "flowbite-react";

export function Education() {
  return (
    <div className='h-full w-98/100 flex flex-col items-center'>
      <Timeline className='mt-16'>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime>2023-2027</TimelineTime>
            <TimelineTitle className='text-gray-900 dark:text-gray-900'>National University of Singapore</TimelineTitle>
            <TimelineBody className='text-gray-600 dark:text-gray-600'>
              <ul className='list-disc space-y-1 pl-5'>
                <li>Bachelor in Computing (Computer Science) Honours</li>
                <li>2nd Major in Mathematics</li>
                <li>Academic Year 23/24 Sem 2 Dean's List</li>
                <li>
                  Focus Areas
                  <ul className='mt-1 list-[circle] space-y-1 pl-5'>
                    <li>Parallel Computing</li>
                    <li>Database Systems</li>
                    <li>Networking and Distributed Systems</li>
                  </ul>
                </li>
              </ul>
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime>2019-2020</TimelineTime>
            <TimelineTitle className='text-gray-900 dark:text-gray-900'>River Valley High School</TimelineTitle>
            <TimelineBody className='text-gray-600 dark:text-gray-600'>
              <ul className='list-disc space-y-1 pl-5'>
                <li>GCE A Levels</li>
                <li>Achieved 88.75 out of 90 rank points</li>
                <li>Obtained Distinction for MOE H3 Physics</li>
              </ul>
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  )
}
