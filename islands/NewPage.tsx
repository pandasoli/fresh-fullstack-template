import { PageProps, Handlers } from '$fresh/server.ts'
import { createRef } from 'preact'
import { useState } from 'preact/hooks'
import axiod from 'axiod'

import Footer from '@components/Footer.tsx'
import TagsSelector from '@islands/TagsSelector.tsx'

import { type IPost } from '$types/Post.ts'


const NewPage = () => {
  const [ Preview, SetPreview ] = useState<string | ArrayBuffer | null>('')

  const $File = createRef<HTMLInputElement>()


  const previewFile = (target?: HTMLInputElement | null) => {
    if (!target) return
    if (!target.files) return

    const reader = new FileReader()
    reader.readAsDataURL(target.files[0])

    reader.onloadend = () => {
      SetPreview(reader.result)
    }
  }


  return <>
    <div class='relative flex flex-col items-center my-4 h-[268px]'>
      <input
        type='file'
        class='hidden'
        ref={ $File }
        onInput={ () => previewFile($File.current) }
      />

      <img
        src={ Preview?.toString() || '/no-image.png' }
        alt='Thumbnail.'
        class='h-full rounded'
        onMouseDown={ () => $File.current?.click() }
      />

      <span>By: <input type='text' placeholder="Picture's author"/></span>
    </div>

    <div
      class='max-w-screen-md px-4 pt-8 md:pt-16 mx-auto'
    >
      <div>
        <input type='text' placeholder='Some title will be here' class='text-5xl text-gray-900 font-bold'/>

        <div class='flex flex-col items-start mt-8'>
          <input type='text' placeholder='Date'/>
          <input type='text' placeholder="Author's name"/>

          <TagsSelector/>
        </div>
      </div>

      <hr class='my-8'/>

      <div class='markdown-body'>
        {/* <tinymce-editor
          api-key='no-api-key'
          height='500'
          menubar='false'
          plugins='a11ychecker advlist advcode advtable autolink checklist export lists link image charmap preview anchor searchreplace visualblocks powerpaste fullscreen formatpainter insertdatetime media table help wordcount'
          toolbar='undo redo | casechange blocks | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist checklist outdent indent | removeformat | a11ycheck code table help'
          content_style={
            `body {
              font-family:Helvetica,Arial,sans-serif;
              font-size:14px;
            }`
          }
        >
          &lt;p&gt;Welcome to the TinyMCE Web Component example!&lt;/p&gt;

        </tinymce-editor> */}
      </div>
    </div>

    <Footer/>

    {/* <script src='https://cdn.jsdelivr.net/npm/@tinymce/tinymce-webcomponent@1/dist/tinymce-webcomponent.min.js'></script> */}
  </>
}


export default NewPage
