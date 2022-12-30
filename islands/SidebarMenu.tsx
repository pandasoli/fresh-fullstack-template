import { JSX } from 'preact'


type IItem = {
  id?: string | number
  label: string
  icon: string | (() => JSX.Element)
}

type Props = {
  items: (IItem | '')[]
  onChoose?: (item_id: string | number) => void
}


const SidebarMenu = (props: Props) => {
  const Choose = (item: IItem) => {
    if (props.onChoose)
      props.onChoose(item?.id ?? item.label)
  }

  return <section
    class='fixed flex items-center h-full w-0 left-0 top-0 z-50'
  >
    <div class='group rounded shadow-md py-5 pl-5 transition-all translate-x-3 hover:(rounded-bl-none rounded-tl-none translate-0) bg-white'>
      {
        props.items.map(item => <>
            {
              item === ''
              ? <hr class='my-4 mr-5'/>
              :
              <div
                class='flex w-11 overflow-hidden group-hover:(w-auto min-w-[140px]) my-2 hover:opacity-70 transition-opacity cursor-pointer'
                onClick={ () => Choose(item) }
              >
                <div class='mr-5'>
                  {
                    typeof item.icon === 'string'
                      ? <img src={ item.icon } alt='Icon image'/>
                      : <item.icon/>
                  }
                </div>

                <label class='cursor-pointer'>{ item.label }</label>
              </div>
            }
          </>
        )
      }
    </div>
  </section>
}


export default SidebarMenu
