import { Options } from '$fresh/plugins/twind.ts'
import { css } from 'twind/css'
import { apply } from 'twind'


export default {
  selfURL: import.meta.url,
  preflight(preflight) {
    delete preflight['img,video'];

    return css(preflight, {
      html: { scrollBehavior: 'smooth' },
      body: apply`flex flex-col items-center min-h-screen bg-light-I text-font-cl`,
      span: apply`text-font-soft`,
      a: apply`text-font-soft hover:underline cursor-pointer`
    })
  },
  theme: {
    fontFamily: {
      'fira-code': ['Fira Code', 'IMB', 'sans-serif']
    },
    extend: {
      colors: {
        'font-cl': '#24292f',
        'font-soft': '#6b7280',
        'font-disabled': '#9ca3af',

        'light-I': '#fff',
        'light-II': '#ddd',

        'green-I': '#22c55e',
        'green-II': '#86efac',
        'green-III': '#b1dca7',

        'blue-I': '#67b0cf',
        'blue-II': '#bfdbfe',
        'blue-III': '#a2d6ec',

        'yellow-I': '#ffed4e',
        'yellow-II': '#ffd80b',
        'yellow-III': '#fff962',

        'red-I': '#ff8b8b'
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
        bounce: 'bounce 1.5s',
        // slideup: 'slideup 1s ease-in-out',
        // wave: 'wave 1.2s linear infinite',
        pop: 'pop 2s'
      }
    },
    keyframes: {
      // slideup: {
      //   from: { opacity: 0, transform: 'translateY(25%)' },
      //   to: { opacity: 1, transform: 'none' }
      // },
      // wave: {
      //   '0%': { transform: 'scale(0)' },
      //   '50%': { transform: 'scale(1)' },
      //   '100%': { transform: 'scale(0)' }
      // },
      pop: {
        '0%': { opacity: 0, transition: 'opacity .25s' },
        '20%': { opacity: .70 },
        '90%': { opacity: 0 }
      },
      bounce: {
        '0%': {
          transform: 'translateY(-25%)',
          'animation-timing-function': 'cubic-bezier(.8, 0, 1, 1)'
        },
        '25%': {
          transform: 'none',
          'animation-timing-function': 'cubic-bezier(0, 0, .2, 1)'
        },

        '40%': {
          transform: 'translateY(-15%)',
          'animation-timing-function': 'cubic-bezier(.8, 0, 1, 1)'
        },
        '50%': {
          transform: 'none',
          'animation-timing-function': 'cubic-bezier(0, 0, .2, 1)'
        },

        '70%': {
          transform: 'translateY(-7%)',
          'animation-timing-function': 'cubic-bezier(.8, 0, 1, 1)'
        },
        '80%': {
          transform: 'none',
          'animation-timing-function': 'cubic-bezier(0, 0, .2, 1)'
        }
      }
    }
  },
  plugins: {
    'outline-solid': css({
      'outline': 'solid'
    })
  }
} as Options
