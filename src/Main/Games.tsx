import sokobanPic from '../assets/sokoban.jpeg';
import reversiPic from '../assets/reversi.jpeg';
import lineup4Pic from '../assets/lineup4.png';
import battleshipPic from '../assets/battleship.png';
import snakePic from '../assets/snake.png';
import minesweeper from '../assets/minesweeper.png';
import slidingblock from '../assets/sliding-block.jpeg';
import tetris from '../assets/tetris.png';
import mastermind from '../assets/mastermind.jpeg';
import tictactoe from '../assets/tictactoe.jpeg';
import tangram from '../assets/tangram.png';
import maze from '../assets/maze.png';
import connector from '../assets/connector.png';

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
  },
  {
    title: 'Battleship',
    linkToGame: 'https://odin-battleship-five.vercel.app',
    linkToCode: 'https://github.com/obrona/odin-battleship',
    pic: battleshipPic,
  },
  {
    title: 'Snake',
    linkToGame: 'https://snake-neon-three-36.vercel.app',
    linkToCode: 'https://github.com/obrona/Snake',
    pic: snakePic,
  },
  {
    title: 'Minesweeper',
    linkToGame: 'https://minesweeper-three-woad.vercel.app/',
    linkToCode: 'https://github.com/obrona/Minesweeper',
    pic: minesweeper,
  },
  {
    title: 'Sliding Block',
    linkToGame: 'https://sliding-block.vercel.app/',
    linkToCode: 'https://github.com/obrona/Sliding-Block',
    pic: slidingblock,
  },
  {
    title: 'Tetris',
    linkToGame: 'https://tetris-two-iota.vercel.app/',
    linkToCode: 'https://github.com/obrona/Tetris',
    pic: tetris,
  },
  {
    title: 'Mastermind',
    linkToGame: 'https://mastermind-tan-beta.vercel.app/',
    linkToCode: 'https://github.com/obrona/Mastermind',
    pic: mastermind,
  },
  {
    title: 'Tic Tac Toe',
    linkToGame: 'https://tic-tac-toe-iota-umber-77.vercel.app/',
    linkToCode: 'https://github.com/obrona/TicTacToe',
    pic: tictactoe,
  },
  {
    title: 'Tangram',
    linkToGame: 'https://tangram-chi.vercel.app/',
    linkToCode: 'https://github.com/obrona/Tangram',
    pic: tangram,
  },
  {
    title: 'Maze Generator',
    linkToGame: 'https://maze-generator-blond.vercel.app/',
    linkToCode: 'https://github.com/obrona/MazeGenerator',
    pic: maze,
  },
  {
    title: 'Connector',
    linkToGame: 'https://connector-lake.vercel.app/',
    linkToCode: 'https://github.com/obrona/Connector',
    pic: connector,
  }
]

export function Games() {
  return (
    <div className='w-screen min-h-screen pt-24 pb-4 flex flex-col justify-center items-center'>
      <div className='grid grid-cols-[repeat(3,320px)] auto-rows-[400px] gap-y-8 gap-x-6'>
        {games.map(g => {
          return (
            <GameCard key={g.title} {...g} />
          )
        })}
      </div>
    </div>
  )
}