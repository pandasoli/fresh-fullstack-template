import { IPost } from '$types/Post.ts'


type Props = {
  onClick?: (post: IPost) => void
} & IPost


const Post = (props: Props) =>
  <a
    class='m-4 shadow-md rounded overflow-hidden hover:(shadow-lg scale-[1.02]) transition-all max-w-[360px] hover:no-underline cursor-pointer'
    href={ props.onClick !== undefined ? undefined : `/${props.title}` }
    onClick={ () => props.onClick && props.onClick(props) }
  >
    <img
      class='max-h-[208px] w-full'
      src={ props.thumb.url }
      alt='Post thumbnail'
    />

    <div class='p-4'>
      <h1 class='text-font-cl'>{ props.title }</h1>

      <div class='flex justify-between'>
        <span>{ props.date }</span>
        <span>{ props.tags[0] }</span>
      </div>
    </div>
  </a>


export default Post
