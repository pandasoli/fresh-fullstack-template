import { AppProps } from '$fresh/server.ts'
import { Head } from '$fresh/runtime.ts'

import Header from '@components/Header.tsx'


const App = ({ Component }: AppProps) =>
  <>
    <Head>
      <link rel='stylesheet' href='/app.css'/>
      <link rel='stylesheet' href='/fonts/FiraCode/fira_code.css'/>

      <link rel='icon' href='/favicon.ico' sizes='32x32'/>
      <link rel='icon' href='/logo.svg' type='image/svg+xml'/>
    </Head>

    <style>
      {`
        .markdown-body {
          word-wrap: break-word;
          font-family: unset;
          font-size: 16px;
          line-height: 1.5;
        }

        ::-webkit-scrollbar {
          width: 14px;
          height: 14px;
          background-color: transparent;
        }

        ::-webkit-scrollbar-thumb {
          border-radius: 7px;
          background-color: #24292f;
          border: 4px solid transparent;
          background-clip: padding-box;
        }
      `}
    </style>

    <Header active=''/>

    <div class='flex flex-col flex-grow-1'>
      <Component/>
    </div>
  </>


export default App
