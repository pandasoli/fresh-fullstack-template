import { useState } from 'preact/hooks'
import IconAlignLeft from 'https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/align-left.tsx'
import IconUsers from 'https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/users.tsx'
import IconUser from 'https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/user.tsx'
import IconHeading from 'https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/heading.tsx'

import SidebarMenu from '@islands/SidebarMenu.tsx'
import DashBoardMyself from '@islands/DashboardMyself.tsx'
import DashBoardPosts from '@islands/DashBoardPosts.tsx'


const DashboardPage = () => {
  const [ ContentKind, SetContentKind ] = useState<string | number>(0)


  return <div class='flex flex-col flex-grow-1'>
    <SidebarMenu
      items={[
        {
          id: 0,
          label: 'Myself',
          icon: () => <IconUser/>
        },
        '',
        {
          id: 1,
          label: 'Posts',
          icon: () => <IconAlignLeft/>
        },
        {
          id: 2,
          label: 'Users',
          icon: () => <IconUsers/>
        },
        '',
        {
          id: 3,
          label: 'Header',
          icon: () => <IconHeading/>
        }
      ]}
      onChoose={ SetContentKind }
    />

    <div class='pl-24 flex flex-col flex-grow-1'>
      {
        ContentKind === 0
          ? <DashBoardMyself/>
          :
        ContentKind === 1
          ? <DashBoardPosts/>
          : 'Welcome to the Dashboard!'
      }
    </div>
  </div>
}


export default DashboardPage