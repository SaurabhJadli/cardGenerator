import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon, DownloadIcon } from 'lucide-react'
import PersonalInfoForm from '../components/PersonalInfoForm'
import CardPreview from '../components/CardPreview'


const CardGen = () => {
  const [resumeData, setResumeData] = useState({
    _id: '',
    title: '',
    personal_info: {},
    template: "minimal-image",
    accent_color: "#448afb",
    public: false,
  })


  

  const downloadResume = () => {
    window.print();
  }

  return (
    <div >
      <div className='mt-5'>
        <Link to={'/'} className='inline-flex gap-2 items-center text-slate-500 hover:text-slate-700 transition-all'>
          <ArrowLeftIcon className='size-4' /> Back to Dashboard
        </Link>
      </div>

      <div className='max-w-7xl mx-auto px-4 pb-8'>
        <div className='grid lg:grid-cols-12 gap-8'>
          {/* Left Panel - Form */}
          <div className='relative lg:col-span-5 rounded-lg overflow-hidden'>
            <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6 pt-1'>              

              {/* Form Content */}
              <div className='space-y-6'> 
                  <PersonalInfoForm data={resumeData.personal_info} onChange={(data) => setResumeData(prev => ({ ...prev, personal_info: data }))}  />
              </div>
            </div>
          </div>

          {/* Right Panel - Preview */}
          <div className='lg:col-span-7 max-lg:mt-6'>
            <div className='relative w-full'>
              <div className='absolute bottom-3 left-0 right-0 flex items-center justify-end gap-2'>

                <button onClick={downloadResume} className='w-full text-center justify-center flex items-center gap-2 px-6 py-2 text-xs bg-gradient-to-br from-green-100 to-green-200 text-green-600 rounded-lg ring-green-300 hover:ring transition-colors'>
                  <DownloadIcon className='size-4' /> Download ID card
                </button>
              </div>
            </div>
            <CardPreview data={resumeData} accentColor={resumeData.accent_color} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default CardGen