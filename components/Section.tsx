import type { ComponentChildren } from 'preact'

type Props = {
  children: ComponentChildren
  kind: 'primary' | 'secondary'
}


const Section = (props: Props) =>
  <>
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 1440 400'
      class={ props.kind === 'primary' ? 'bg-dark-II' : 'bg-dark-I' }
    >
      <path
        d='M 0,400 C 0,400 0,200 0,200 C 128.03827751196172,212.57416267942585 256.07655502392345,225.14832535885168 338,213 C 419.92344497607655,200.85167464114832 455.73205741626793,163.98086124401917 530,145 C 604.2679425837321,126.01913875598083 716.9952153110047,124.92822966507177 823,157 C 929.0047846889953,189.07177033492823 1028.2870813397128,254.3062200956938 1130,267 C 1231.7129186602872,279.6937799043062 1335.8564593301435,239.8468899521531 1440,200 C 1440,200 1440,400 1440,400 Z'
        stroke='none'
        fill={ props.kind === 'primary' ? '#191f28' : '#1f2730' }
        stroke-width='0'
        fill-opacity='1'
        data-darkreader-inline-stroke=''
        data-darkreader-inline-fill=''
      />
    </svg>

    <section
      class={ 'flex flex-col items-center justify-center ' + (props.kind === 'primary' ? 'bg-dark-I' : 'bg-dark-II') + ' px-4 py-8' }
    >
      { props.children }
    </section>
  </>


export default Section
