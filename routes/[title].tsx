import { PageProps, Handlers } from '$fresh/server.ts'
import axiod from 'axiod'

import Footer from '@components/Footer.tsx'

import { type IPost } from '$types/Post.ts'


export const handler:  Handlers<IPost | null> = {
  async GET(_req, ctx) {
    const res = await axiod.post(`http://localhost:8000/api/post`, { title: ctx.params.title })
    return ctx.render(await res.data)
  }
}

const Page = ({ data }: PageProps<IPost | null>) => {
  if (!data)
    return <span>Post don't found</span>

  return <>
    <div class='relative flex flex-col items-center my-4 h-[268px]'>
      <img
        class='h-full rounded'
        src={ data.thumb.url }
        alt='Thumbnail.'
      />
      <span>By: { data.thumb.author }</span>
    </div>

    <div
      class='max-w-screen-md px-4 pt-8 md:pt-16 mx-auto'
    >
      <div>
        <h1 class='text-5xl text-gray-900 font-bold'>{ data.title }</h1>

        <div class='flex flex-col items-start mt-8'>
          <span>{ data.date }</span>
          <a>{ data.author }</a>

          <div class='m-1 mt-3'>
            {
              data.tags.map(tag =>
                <span class='bg-light-II rounded-3xl px-4 py-1'>{ tag }</span>
              )
            }
          </div>
        </div>
      </div>

      <hr class='my-8'/>

      <div class='markdown-body'>
        <p class='mb-4'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quia id voluptatibus repellendus minus similique! Dolorum minus quis voluptatibus excepturi recusandae consequatur beatae facere ab! Id distinctio vitae incidunt aliquid.
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium error possimus quibusdam consequatur cupiditate sit eveniet modi voluptatem delectus sed sunt, pariatur porro saepe odio omnis, explicabo iure aut ullam!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae eaque necessitatibus soluta praesentium quo nesciunt repudiandae, cum deleniti mollitia tempore atque. Totam perferendis libero quidem iusto veritatis. Eligendi, explicabo repellendus.
        </p>
      </div>
    </div>

    <Footer/>
  </>
}


export default Page
