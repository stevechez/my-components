import type { NextPage } from 'next'
import Blog1 from '../components/blog/Blog1'

const Blog: NextPage = () => {
  return (
    <>
      <h1 className="text-4xl mt-8 text-center font-black text-indigo-600">
        Blog
      </h1>
      <Blog1 />
    </>
  )
}

export default Blog
