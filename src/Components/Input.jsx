import React from 'react'

const Input = ({label,name,placeholder}) => {
  return (
    <div className="flex flex-col group">
        <label className='mb-2 text-sm transition-colors group-focus-within:text-blue-700'>

        </label>
        <input placeholder={placeholder}  className='px-2 py-2 text-xl transition-shadow bg-transparent group-focus-within:ring accent-blue-600' ></input>

    </div>
  )
}

export default Input