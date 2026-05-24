import { Saturn } from "../components/Saturn/Saturn";

export function Bio() {
  return (
    <div className="h-full w-full flex flex-col items-center">
      <div className="flex gap-4 items-center justify-center mt-32">
        <Saturn height='180px' width='180px' />
        <div>
          <div>Name: Tim</div>
          <div>Nationality: Singapore Citizen</div>
          <div>OS: Ubuntu</div>
          <div>Hobby: PC gaming</div>
        </div>
      </div>
    </div>
  )
}