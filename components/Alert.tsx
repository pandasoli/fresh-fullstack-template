
type Props = {
  level: 'error' | 'warn'
  title?: string
  content: string
}


const Alert = (props: Props) =>
  <div
    class={
      (
        props.level === 'error' ? `
          bg-red-I
        ` : `
          bg-yellow-I
        `
      ) + 'rounded-md m-2 py-4 px-6 max-w-2xl animate-bounce'
    }
  >
    <h1 class='text-2xl text-center'>{ props.title ? props.title : (props.level === 'error' ? 'ERROR' : 'WARNING') }</h1>

    <p>{ props.content }</p>
  </div>


export default Alert
