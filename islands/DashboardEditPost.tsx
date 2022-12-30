import TagsSelector from '@islands/TagsSelector.tsx'

import { type IPost } from '$types/Post.ts'



const DashboardEditPost = (props: IPost) => {

  return <div class='flex flex-col flex-grow-1'>
    <div class='relative flex flex-col items-center my-4 h-[268px]'>
      <img
        class='h-full rounded'
        src={ props.thumb.url }
        alt='Thumbnail.'
      />
      <span contentEditable>By: { props.thumb.author }</span>
    </div>

    <div
      class='max-w-screen-md px-4 pt-8 md:pt-16 mx-auto'
    >
      <div>
        <h1 class='text-5xl text-gray-900 font-bold' contentEditable>{ props.title }</h1>

        <div class='flex flex-col items-start mt-8'>
          <span contentEditable>{ props.date }</span>
          <span contentEditable>{ props.author }</span>
          <TagsSelector tags={ props.tags }/>
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
  </div>
}


export default DashboardEditPost
