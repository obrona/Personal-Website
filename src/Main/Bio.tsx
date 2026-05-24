import { Saturn } from "../components/Saturn/Saturn";

export function Bio() {
  return (
    <div className="h-full w-full flex flex-col items-center">
      <div className="flex gap-4 items-center justify-center mt-32">
        <Saturn height='180px' width='180px' />
        <div>
          <div>Name: Tim</div>
          <div>Nationality: Singapore Citizen</div>
          <div>Email: tlim8772@gmail.com</div>
          <div>
            Github:&nbsp;
            <a 
              href="https://github.com/obrona" 
              target="_blank" 
              rel="noreferrer"
              className="text-blue-600 underline"
            >
                https://github.com/obrona
              </a>
          </div>
        </div>
      </div>
    </div>
  )
}