import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-gray-100 min-h-screen p-8'>
      <div className='bg-gray-900 text-white p-4 rounded-md font-mono text-sm mb-12 max-w-xl mx-auto'>
        <p>&gt; Hello</p>
        <p>&gt; My name is Rajiv</p>
        <p>
          &gt; This is my lifelog and digital playground{' '}
          <span className='animate-blink inline-block w-2 h-4 bg-white ml-1'></span>
        </p>
      </div>

      <div className='max-w-xl mx-auto'>
        <h2 className='text-2xl font-bold mb-6 text-gray-800'>Thoughts</h2>
        <ul className='space-y-2'>
          <li>
            <a
              href='#'
              className='bg-yellow-100 text-gray-800 px-2 py-1 rounded text-sm hover:bg-yellow-200'
            >
              The case against conversational interfaces (new)
            </a>
          </li>
          <li>
            <a
              href='#'
              className='bg-yellow-100 text-gray-800 px-2 py-1 rounded text-sm hover:bg-yellow-200'
            >
              Multi-layered calendars
            </a>
          </li>
          <li>
            <a
              href='#'
              className='bg-yellow-100 text-gray-800 px-2 py-1 rounded text-sm hover:bg-yellow-200'
            >
              The power of defaults
            </a>
          </li>
          <li>
            <a
              href='#'
              className='bg-yellow-100 text-gray-800 px-2 py-1 rounded text-sm hover:bg-yellow-200'
            >
              Banking on status
            </a>
          </li>
          <li>
            <a
              href='#'
              className='bg-yellow-100 text-gray-800 px-2 py-1 rounded text-sm hover:bg-yellow-200'
            >
              Chief Notion Officer
            </a>
          </li>
          <li>
            <a
              href='#'
              className='bg-yellow-100 text-gray-800 px-2 py-1 rounded text-sm hover:bg-yellow-200'
            >
              Is this real life?
            </a>
          </li>
          <li>
            <a
              href='#'
              className='bg-yellow-100 text-gray-800 px-2 py-1 rounded text-sm hover:bg-yellow-200'
            >
              A meta-layer for notes
            </a>
          </li>
          <li>
            <a
              href='#'
              className='bg-yellow-100 text-gray-800 px-2 py-1 rounded text-sm hover:bg-yellow-200'
            >
              Proof of X
            </a>
          </li>
          <li>
            <a
              href='#'
              className='bg-yellow-100 text-gray-800 px-2 py-1 rounded text-sm hover:bg-yellow-200'
            >
              Thoughts on e-commerce (Part 2)
            </a>
          </li>
          <li>
            <a
              href='#'
              className='bg-yellow-100 text-gray-800 px-2 py-1 rounded text-sm hover:bg-yellow-200'
            >
              Thoughts on e-commerce (Part 1)
            </a>
          </li>
          <li>
            <a
              href='#'
              className='bg-yellow-100 text-gray-800 px-2 py-1 rounded text-sm hover:bg-yellow-200'
            >
              AirPods as a platform
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
