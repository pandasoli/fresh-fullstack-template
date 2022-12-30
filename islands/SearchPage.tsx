import { useEffect, useState } from 'preact/hooks'
import IconArrowLeft from 'https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/arrow-left.tsx'

import Textbox from '@islands/Textbox.tsx'
import Dropdown from '@islands/Dropdown.tsx'
import Post from '@components/Post.tsx'


type Props = {
  onSwitch?: (open: boolean) => void
}


const Page = (props: Props) => {
  const [ Open, SetOpen ] = useState(false)

  useEffect(() => {
    if (props.onSwitch)
      props.onSwitch(Open)
  }, [ Open ])


  return <>
    <div
      class='flex justify-center mx-3'
      onClick={ () => SetOpen(true) }
    >
      <Textbox placeholder='Search for a title...'/>
    </div>

    <div
      class={ `fixed inset-0 bg-white w-full h-full z-20 transition-transform translate-y-20 border border-light-II rounded-3xl ${Open ? '' : 'translate-y-full'}` }
    >
      <div
        class='flex flex-wrap justify-center p-6'
      >
        <label onClick={ () => SetOpen(false) }>
          <IconArrowLeft size={ 28 } class='pointer-events-none'/>
        </label>

        <Textbox
          placeholder='Search for a title...'
          right
        />

        <Dropdown
          items={[
            { label: 'Helth' },
            { label: 'General' },
            { label: 'Police' },
            { label: 'Sposts' },
            { label: 'Mondial' },
            { label: 'Climate' }
          ]}
          placeholder='Select some tags...'
          left
        />
      </div>

    </div>
  </>
}


export default Page
