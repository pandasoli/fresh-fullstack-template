import { useState } from 'preact/hooks'
import IconDiscountCheck from 'https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/discount-check.tsx'


type IItem = {
  id?: string
  label: string
  default?: boolean
}

type Props = {
  items: IItem[]
  placeholder?: string

  left?: boolean
  right?: boolean
  top?: boolean
  bottom?: boolean

  onChoose?: (item: IItem[]) => void
}


const Dropdown = (props: Props) => {
  const [ SelectedItems, SetSelectedItems ] = useState<IItem[]>([])

  const Choose = (item: IItem) => {
    let isSelected = false

    const newItems = SelectedItems.filter($ => {
      if (item.id) {
        if (item.id === $.id) {
          isSelected = true
          return false
        }
      }
      else {
        if (item.label === $.label) {
          isSelected = true
          return false
        }
      }

      return true
    })

    if (!isSelected)
      SetSelectedItems(prev => [ ...prev, item ])
    else
      SetSelectedItems(newItems)

    if (props.onChoose)
      props.onChoose(SelectedItems)
  }


  return <div class='relative group'>
    <input
      type='text'
      value={ props?.placeholder ?? 'Select an option...' }
      readOnly
      class={
        'bg-white px-4 h-9 flex items-center box-content border border-light-II text-font-disabled focus-within:(outline-solid z-10) ' + (
          props.top
            ? 'rounded-b-md'
            :
          props.right
            ? 'rounded-l-md'
            :
          props.bottom
            ? 'rounded-t-md'
            :
          props.left
            ? 'rounded-r-md'
            : 'rounded-md'
        )
      }
    />

    <div class='absolute flex flex-col py-3 opacity-0 rounded-md w-full bg-white border transition-all group-hover:opacity-100 group-focus-within:opacity-100 overflow-hidden translate-y-2'>
      {
        props.items.map(item =>
          <label
            class='flex items-center px-4 py-1 hover:(bg-font-cl text-light-I) transition-colors cursor-pointer'
            onClick={ () => Choose(item) }
          >
            {
              SelectedItems.some($ => item.id ? item.id === $.id : item.label === $.label) &&
                <IconDiscountCheck class='mr-2' height='20' color='#3B82F6'/>
            }
            { item.label }
          </label>
        )
      }
    </div>
  </div>
}


export default Dropdown
