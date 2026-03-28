import { Mail, MapPin, GraduationCap, Phone, User, Cake, IdCardLanyard } from 'lucide-react'

const PersonalInfoForm = ({data, onChange}) => {

    const handleChange = (field, value)=> {
        onChange({...data, [field]: value})
    }

    const fields = [
        {key: 'full_name', label: 'Full Name', icon: User, type: 'text', required: true},
        {key: 'course', label: 'Course', icon: GraduationCap, type: 'text', required: true},
        {key: 'phone', label: 'Phone Number', icon: Phone, type: 'tel', required: true},
        {key: 'email', label: 'Email Address', icon: Mail, type: 'email', required: true},
        {key: 'DOB', label: 'DOB', icon: Cake, type: 'date', required: true},
        {key: 'roll_no', label: 'Roll no', icon: IdCardLanyard, type: 'number', required: true},
        {key: 'address', label: 'Address', icon: MapPin, type: 'text', required: true},
    ]

  return (
    <div>
      <h3 className='text-lg font-semibold text-gray-900'>Personal Information</h3>
      <div className='flex items-center gap-2'>
        <label>
            {data.image ? (
                <img src={typeof data.image === 'string' ? data.image : URL.createObjectURL(data.image)} alt='user-image' className='w-16 h-16 rounded-full object-cover mt-5 ring ring-slate-300 hover:opacity-80'/>
            ) : (
                <div className='inline-flex items-center gap-2 mt-5 text-slate-600 hover:text-slate-700 cursor-pointer'>
                    <User className='size-10 p-2.5 border rounded-full'/>
                    upload user image
                </div>
            )}
            <input type="file" accept='image/jpeg, image/png' className='hidden' onChange={(e)=>handleChange('image', e.target.files[0])}/>
        </label>  
      </div>

      {fields.map((field)=>{
        const Icon = field.icon;
        return (
            <div key={field.key} className='space-y-1 mt-5'>
                <label className='flex items-center gap-2 text-sm font-medium text-gray-600'>
                    <Icon className='size-4'/>
                    {field.label}
                    {field.required && <span className='text-red-500'>*</span>}
                </label>
                <input 
                type={field.type} 
                value={data[field.key] || ''} 
                onChange={(e)=>handleChange(field.key, e.target.value)} 
                className='mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm' 
                placeholder={`Enter your ${field.label.toLowerCase()}`} 
                required={field.required}/>
            </div>
      )
      })}

    </div>
  )
}

export default PersonalInfoForm
