import { PlusIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()

  return (
    <div>

      <div className='flex gap-4'>
        <button onClick={()=> navigate(`/app/idgen`)} className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-purple-500 hover:shadow-lg transition-all duration-300 cursor-pointer'>
          <PlusIcon className='size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-purple-300 to-purple-500 text-white rounded-full' />
          <p className='text-sm group-hover:text-purple-600 transition-all duration-300'>Generate ID card</p>
        </button>
      </div>
    </div>
  )
}

export default Dashboard