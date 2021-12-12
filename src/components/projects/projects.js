import './projects.css';
import essay from '../../assets/images/essay-ss.png';
import plant from '../../assets/images/plant-shop.png';
import calculator from '../../assets/images/calculator.png';
import countries from '../../assets/images/countries.png';
import rps from '../../assets/images/rps.png';
import tictactoe from '../../assets/images/tictactoe.png';

function Projects() {
  return (
    <div className='flex flex-col my-10 m-auto w-4/5' id='projects'>
      <h1 className='font-bold text-xl my-4'>Projects</h1>
      <div className='card-container justify-center md:flex flex-wrap mt-10 w-full'>
        <div className='card md:w-1/3 lg:w-1/4 transform hover:scale-105 flex flex-col rounded-lg shadow-2xl mb-6 mx-2'>
          <img
            src={essay}
            alt='screenshot of essay site'
            className='card-img rounded-lg m-4'
          />

          <h2 className='title font-bold my-3'>Essay Site</h2>
          <p className='mx-2'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            reprehenderit voluptatum distinctio laudantium natus ut alias
            eveniet magni rem nulla deserunt.
          </p>
          <a
            className='projects-btn rounded-2xl mx-auto my-3 cursor-pointer bg-gray-50 p-2'
            href='https://github.com/hannahl87/essay-site'
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            More
          </a>
        </div>
        <div className='card md:w-1/3 lg:w-1/4 transform hover:scale-105 flex flex-col rounded-lg shadow-2xl mb-6 mx-2'>
          <img
            src={calculator}
            alt='screenshot of calculator'
            className='card-img rounded-lg m-4'
          />
          <h2 className='title font-bold my-3'>Calculator</h2>
          <p className='mx-2'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            reprehenderit voluptatum distinctio laudantium natus ut alias
            eveniet magni rem nulla deserunt.
          </p>
          <a
            className='projects-btn rounded-2xl mx-auto my-3 cursor-pointer bg-gray-50 p-2'
            href='https://github.com/hannahl87/calculator'
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            More
          </a>
        </div>
        <div className='card md:w-1/3 lg:w-1/4 transform hover:scale-105 flex flex-col rounded-lg shadow-2xl mb-6 mx-2'>
          <img
            src={plant}
            alt='screenshot of plant site'
            className='card-img rounded-lg m-4'
          />
          <h2 className='title font-bold my-3'>Plant Shop</h2>
          <p className='mx-2'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            reprehenderit voluptatum distinctio laudantium natus ut alias
            eveniet magni rem nulla deserunt.
          </p>
          <a
            className='projects-btn rounded-2xl mx-auto my-3 cursor-pointer bg-gray-50 p-2'
            href='https://github.com/hannahl87/theplantshop'
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            More
          </a>
        </div>
        <div className='card md:w-1/3 lg:w-1/4 transform hover:scale-105 flex flex-col rounded-lg shadow-2xl mb-6 mx-2'>
          <img
            src={countries}
            alt='screenshot of plant site'
            className='card-img rounded-lg m-4'
          />
          <h2 className='title font-bold my-3'>Countries</h2>
          <p className='mx-2'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            reprehenderit voluptatum distinctio laudantium natus ut alias
            eveniet magni rem nulla deserunt.
          </p>
          <a
            className='projects-btn rounded-2xl mx-auto my-3 cursor-pointer bg-gray-50 p-2'
            href='https://github.com/hannahl87/countries'
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            More
          </a>
        </div>
        <div className='card md:w-1/3 lg:w-1/4 transform hover:scale-105 flex flex-col rounded-lg shadow-2xl mb-6 mx-2'>
          <img
            src={rps}
            alt='screenshot of plant site'
            className='card-img rounded-lg m-4'
          />
          <h2 className='title font-bold my-3'>Rock Paper Scissors</h2>
          <p className='mx-2'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            reprehenderit voluptatum distinctio laudantium natus ut alias
            eveniet magni rem nulla deserunt.
          </p>
          <a
            className='projects-btn rounded-2xl mx-auto my-3 cursor-pointer bg-gray-50 p-2'
            href='https://github.com/hannahl87/rockpaperscissors'
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            More
          </a>
        </div>
        <div className='card md:w-1/3 lg:w-1/4 transform hover:scale-105 flex flex-col rounded-lg shadow-2xl mb-6 mx-2'>
          <img
            src={tictactoe}
            alt='screenshot of plant site'
            className='card-img rounded-lg m-4'
          />
          <h2 className='title font-bold my-3'>Tic Tac Toe</h2>
          <p className='mx-2'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            reprehenderit voluptatum distinctio laudantium natus ut alias
            eveniet magni rem nulla deserunt.
          </p>
          <a
            className='projects-btn rounded-2xl mx-auto my-3 cursor-pointer bg-gray-50 p-2'
            href='https://github.com/hannahl87/tictactoe'
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;