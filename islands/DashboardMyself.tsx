import Textbox from '@islands/Textbox.tsx'


const DashboardMySelf = () =>
  <div class='flex flex-col items-center flex-grow-1'>
    <h1 class='text-2xl'>Someone's name</h1>

    <div class='flex flex-col items-center flex-grow-1 pt-3'>
      <p>
        If you wanna change your information you only need to change these box's values.
      </p>

      <div class='flex flex-col justify-center flex-grow-1'>
        <div class='flex flex-col gap-3'>
          <Textbox placeholder='Change your name' default='Someone'/>
          <Textbox password placeholder='Change your password' default='Someone'/>
        </div>
      </div>
    </div>
  </div>


export default DashboardMySelf
