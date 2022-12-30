import { useState } from 'preact/hooks'
import { JSXInternal } from 'https://esm.sh/v95/preact@10.11.0/src/jsx.d.ts'


type Props = {
  tags?: string[]
}


const TagsSelector = (props: Props) => {
  const [ Tags, SetTags ] = useState<string[]>(props?.tags ?? [])
  const [ Hovering, SetHovering ] = useState(false)
  const [ DidEnter, SetDidEnter ] = useState(false)

  const NewTag_KetUp = (e: JSXInternal.TargetedKeyboardEvent<HTMLInputElement>) => {
    if (e.key === ' ') {
      const item = e.currentTarget.value

      if (item.trim())
        SetTags(prev => [ ...prev, item ])

      e.currentTarget.value = ''
    }
    else if (e.key === 'Enter') {
      TypeDidEnter()
    }
  }

  const TypeDidEnter = () => {
    if (!DidEnter) {
      SetDidEnter(true)

      setTimeout(() => {
        SetDidEnter(false)
      }, 2000)
    }
  }

  const MouseEnter = () => {
    if (!Hovering) {
      SetHovering(true)

      setTimeout(() => {
        SetHovering(false)
      }, 2000)
    }
  }

  const removeTag = (idx: number) =>
    SetTags(prev => prev.filter(($, _) => _ != idx))


  return <div class='relative flex p-1 m-5 w-min rounded-md min-h-[24px]'>
    {
      Tags.map((tag, idx) =>
        <span
          class='bg-light-II hover:bg-red-I rounded-md px-2.5 py-0.5 pt-1 mx-1 select-none'
          onClick={ () => removeTag(idx) }
          onMouseEnter={ MouseEnter }
        >
          { tag }
        </span>
      )
    }

    <span class={ 'absolute whitespace-nowrap top-10 left-[50%] translate-x-[-50%] opacity-0 pointer-events-none ' + (Hovering || DidEnter ? 'animate-pop' : '') }>
      {
        Hovering
          ? 'Click to delete the tag'
          :
        DidEnter
          ? 'Press space to add the tag!'
          : ''
      }
    </span>

    <input type='text' placeholder='Type here' class='bg-transparent w-24 focus:outline-solid rounded px-2 py-0.5' onKeyUp={ NewTag_KetUp }/>
  </div>
}


export default TagsSelector
