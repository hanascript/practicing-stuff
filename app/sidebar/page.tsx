// Shadcd sidebar
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

import { ShadSide } from './_components/shad-side'
import { Button } from '@/components/ui/button'

export default function Sidebar() {
  return (
    <div className='h-screen w-screen'>
      <SidebarProvider defaultOpen={false}>
        <ShadSide />
        <div className='flex gap-4'>
          <Button size='icon' asChild>
            <SidebarTrigger />
          </Button>
          <div>This would be where you would render the children</div>
        </div>
      </SidebarProvider>
    </div>
  )
}
