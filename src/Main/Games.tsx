import sokobanPic from '../assets/sokoban.jpeg';
import reversiPic from '../assets/reversi.jpeg';
import lineup4Pic from '../assets/lineup4.png';

interface GameCardProps {
  title: string;
  linkToGame: string;
  linkToCode: string;
  pic: string;
}

function GameCard(props: GameCardProps) {
  const { title, linkToGame, linkToCode, pic } = props;

  return (
    <div className='p-4 rounded-md shadow-md flex flex-col items-center gap-3 hover:-translate-y-1'>
      <div className='flex justify-between items-center self-stretch'>
        <a 
          href={linkToGame}
          target="_blank" 
          rel="noreferrer"
          className='text-blue-500 underline text-lg'
        >
          {title}
        </a>

        <a
          href={linkToCode}
          target="_blank"
          rel="noreferrer"
          className='text-gray-400'
        >
          {'</>'}
        </a>
      </div>

      <img src={pic} className='w-auto aspect-square self-stretch' />
    </div>
  )
}

const games: GameCardProps[] = [
  {
    title: 'Sokoban',
    linkToGame: 'https://sokoban-beryl.vercel.app',
    linkToCode: 'https://github.com/obrona/Sokoban',
    pic: sokobanPic,
  },
  {
    title: 'Reversi',
    linkToGame: 'https://reversi-wheat.vercel.app',
    linkToCode: 'https://github.com/obrona/Reversi',
    pic: reversiPic,
  },
  {
    title: 'Line Up 4',
    linkToGame: 'https://line-up4.vercel.app',
    linkToCode: 'https://github.com/obrona/LineUp4',
    pic: lineup4Pic,
  }
]

export function Games() {
  return (
    <div className='w-screen min-h-screen pt-24 pb-4 flex flex-col justify-center items-center'>
      <div className='grid grid-cols-[repeat(2,320px)] auto-rows-[400px] gap-4'>
        {games.map(g => {
          return (
            <GameCard key={g.title} {...g} />
          )
        })}
      </div>
    </div>
  )
}