import { JSX } from 'preact'

const H1 = (props: JSX.HTMLAttributes<HTMLHeadingElement>) =>
  <h1
    { ...props }
    class={ `text-3xl text-light-I mb-2 ${props.class}` }
  />


export default H1
