import { Timeline, TimelineBody, TimelineContent, TimelineItem, TimelinePoint, TimelineTime, TimelineTitle } from "flowbite-react";

export function Education() {
  return (
    <div className='h-full w-full flex flex-col items-center'>
      <Timeline className='mt-24'>
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
                  Focus Areas: Parallel Computing (Dist), Database Systems (Dist), Networking and Distributed Systems (Merit)
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
