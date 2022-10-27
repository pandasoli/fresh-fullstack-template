import { Options } from '$fresh/plugins/twind.ts'
import { css } from 'twind/css'
import { apply } from 'twind'



export default {
  selfURL: import.meta.url,
  preflight(preflight) {
    delete preflight['img,video'];

    return css(preflight, {
      html: { scrollBehavior: 'smooth' },
      body: apply`flex flex-col items-center min-h-screen bg-dark-I font-code`
    })
  },
  theme: {
    fontFamily: {
      code: ['Fira Code', 'IMB', 'sans-serif']
    },
    extend: {
      colors: {
        'light-I':	'#c0cedd',
        'light-II':	'#99a0a8',
        'light-III':	'#c6c3c0',
        'dark-I':	'#191f28',
        'dark-II':	'#1f2730',
        'dark-III':	'#374656',
        'accent-I':	'#ecbd7c',
        'accent-II':	'#c69f68',
        'accent-III':	'#93764d',
        'color-I':	'#c68768',
        'color-II':	'#c66868',
        'color-III':	'#c66890',
        'color-IV':	'#6880c6',
        'color-V':	'#68aec6',
        'color-VI':	'#9fc76d'
      },
      opacity: {
        15: '.15'
      },
      spacing: {
        1.75: '0.4375rem',
        4.5: '1.125rem',
        5.5: '1.375rem',
        15: '3.75rem',
        18: '4.5rem',
        22: '5.5rem',
        72: '18rem',
        76: '19rem',
        88: '22rem',
        136: '34rem'
      },
      animation: {
        move: 'move 6s linear infinite'
      }
    }
  }
} as Options
