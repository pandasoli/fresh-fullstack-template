import { Handlers, PageProps } from '$fresh/server.ts'
import axiod from 'axiod'

import Footer from '@components/Footer.tsx'
import SearchPage from '@islands/SearchPage.tsx'
import Post from '@components/Post.tsx'

import { type IPost } from '$types/Post.ts'


export const handler:  Handlers<IPost[] | null> = {
  async GET(_req, ctx) {
    const res = await axiod.get('http://localhost:8000/api/posts')
    return ctx.render(await res.data)
  }
}

const Page = ({ data }: PageProps<IPost[] | null>) => {
  if (!data)
    return <>{ JSON.stringify(data) }</>


  const Tags = () => {
    let res: string[] = []

    data.forEach(post => {
      res.push(post.tags[0])
    })

    res = res.filter((tag, idx) => res.indexOf(tag) === idx)

    return res
  }

  return <div>
    <section class='flex flex-col items-center mb-10 max-w-[100vw]'>
      <img
        class='max-h-[270px] max-w-[100vw]'
        src='/Deno Wallpaper.jpeg'
        alt='Hero image'
      />
    </section>

    <SearchPage/>

    <div
      class='flex flex-wrap justify-evenly'
    >
      {
        data.map(post =>
          <Post { ...post }/>
        )
      }
    </div>

    <Footer/>
  </div>
}


export default Page
