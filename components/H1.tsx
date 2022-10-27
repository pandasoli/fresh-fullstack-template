import { JSX } from 'preact'

const H1 = (props: JSX.HTMLAttributes<HTMLHeadingElement>) =>
  <h1
    { ...props }
    class='text-3xl text-light-I font-code'
  />


export default H1
