import { Handlers } from '$fresh/server.ts'


export const handler: Handlers = {
  async POST(req, ctx) {
    const body = await req.json()
    const title = decodeURI(body.title)

    const Posts = [
      { thumb: { url: '/Deno Wallpaper.jpeg', author: 'Someone' }, author: 'Panda Soli', tags: ['General'], date: 'November 12, 2022', title: 'Lorem ipsum dolor, sit amet' },
      { thumb: { url: '/Deno Wallpaper.jpeg', author: 'Someone' }, author: 'Panda Soli', tags: ['Police'], date: 'November 12, 2022', title: 'consectetur adipisicing elit' },
      { thumb: { url: '/Deno Wallpaper.jpeg', author: 'Someone' }, author: 'Panda Soli', tags: ['Helth'], date: 'November 12, 2022', title: 'Amet magnam ad iusto ea. Sit' },
      { thumb: { url: '/Deno Wallpaper.jpeg', author: 'Someone' }, author: 'Panda Soli', tags: ['Sports'], date: 'November 12, 2022', title: 'quae qui nihil veritatis asperiores ex' },
      { thumb: { url: '/Deno Wallpaper.jpeg', author: 'Someone' }, author: 'Panda Soli', tags: ['Mondial'], date: 'November 12, 2022', title: 'numquam earum quaerat' },
      { thumb: { url: '/Deno Wallpaper.jpeg', author: 'Someone' }, author: 'Panda Soli', tags: ['Climate'], date: 'November 12, 2022', title: 'voluptates, dolor blanditiis' },
      { thumb: { url: '/Deno Wallpaper.jpeg', author: 'Someone' }, author: 'Panda Soli', tags: ['General'], date: 'November 12, 2022', title: ' reiciendis sequi debitis! Quae' }
    ]

    const Post = Posts.reduce((prev, curr): any => curr.title === title ? curr : prev, null)

    return new Response(JSON.stringify(Post))
  }
}
