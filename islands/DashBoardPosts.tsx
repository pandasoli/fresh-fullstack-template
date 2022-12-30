import { useEffect, useState } from 'preact/hooks'
import axiod from 'axiod'

import { type IPost } from '$types/Post.ts'
import Alert from '@components/Alert.tsx'
import Post from '@components/Post.tsx'
import DashboardEditPost from '@islands/DashboardEditPost.tsx'


const DashboardPosts = () => {
  const [ Status, SetStatus ] = useState<'loading' | 'error' | 'done'>('loading')
  const [ Posts, SetPosts ] = useState<IPost[]>([])
  const [ Error, SetError ] = useState('')
  const [ SelectedPost, SetSelectedPost ] = useState<IPost>()

  useEffect(() => {
    axiod.get('http://localhost:8000/api/posts')
    .then(res => {
      SetPosts(res.data)
      SetStatus('done')
    })
    .catch(err => {
      SetStatus('error')
      SetError(err)
    })

  }, [])


  return <div class='flex items-center justify-center flex-grow-1'>
    {
      Status === 'loading'
        ? <span>Loading...</span>
      : Status === 'error'
        ? <Alert level='error' title='Error on trying to load posts!' content={ Error }/>
      : ''
    }

    {
      Status === 'done' && (
        SelectedPost ? (
          <DashboardEditPost { ...SelectedPost }/>
        ) :
        <div class='pl-10 flex flex-wrap justify-evenly'>
          {
            Posts.map(post =>
              <Post { ...post } onClick={ () => SetSelectedPost(post) }/>
            )
          }
        </div>
      )
    }
  </div>
}


export default DashboardPosts
