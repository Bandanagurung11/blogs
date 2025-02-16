import React from 'react'
import { Card } from '../ui/card'
import { X } from 'lucide-react'
import { Button } from '../ui/button';

export default function SearchFunctionality() {
  return (
    <div>
        <Card className=" space-y-4 w-64 py-6 px-4 space-y-2 absolute top-full -left-8 mt-2 z-10" >
        <div className='flex justify-between items-center'>
            <p>What are You Looking For?</p>
            <X className='w-5 h-5' />
        </div>
        <div>
            <input className='shadow-2xl' type="text" placeholder='start typing' />
            <Button>Search</Button>
        </div>
        

    
    </Card>
    </div>
    
  );
}
