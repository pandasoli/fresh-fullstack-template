import IconSearch from 'https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/search.tsx'


type Props = {
  placeholder?: string
  default?: string
  password?: boolean

  left?: boolean
  right?: boolean
  top?: boolean
  bottom?: boolean
}


const Input = (props: Props) =>
  <label
    class={
      `px-4 h-9 w-full md:w-88 flex items-center gap-1.5 box-content border border-light-II text-gray-400 focus-within:(outline-solid z-10) ` + (
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
          ? 'rounded-b-md'
          : 'rounded-md'
      )
    }
  >
    <input
      type={ props.password ? 'password' : 'text' }
      value={ props.default }
      placeholder={ props.placeholder }
      class='w-full bg-transparent placeholder:text-font-disabled text-font-cl outline-none'
    />

    <IconSearch/>
  </label>


export default Input