import React from 'react'

export default function Input({ value, onChange, placeholder }) {
  return (
    <div>
      <input 
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      />
    </div>
  )
}
