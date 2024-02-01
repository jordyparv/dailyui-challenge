'use client'
import Modal from '@/components/Modal'
import React from 'react'
import { useState, SyntheticEvent } from 'react'
export default function Page() {
    const [formValues, setFormValues] = useState({})
    const [showModal, setShowModal] = useState(false)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target
        setFormValues(prev => ({ ...prev, [name]: value, }))
    }
    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        setShowModal(true)
    }

    return (
        <>
            <div className='w-screen min-h-screen grid place-items-center'>
                <div className='w-80 border p-2 rounded-lg py-10'>
                    <form onSubmit={handleSubmit}>
                        <h3 className='my-2 text-2xl font-medium'>{formData.form.formName}</h3>
                        <div className='flex flex-col gap-2 px-2'>
                            {formData.form.formInputs.map((item, key) =>
                                <div className='flex flex-col gap-2' key={key}>
                                    <label className=''>
                                        {item.label}
                                    </label>
                                    <input className='rounded-lg border p-1 outline-none focus:shadow focus:ring' type={item.inputType} name={item.name}
                                        onChange={handleChange}
                                        required={item.required} />
                                </div>
                            )}
                            <button type='submit' className='bg-blue-600 uppercase font-medium hover:bg-blue-800 text-white p-1 rounded-lg w-full' >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <Modal show={showModal}>
                <div className='bg-gray-100 p-1 rounded-lg'>
                    <pre>
                        {JSON.stringify(formValues, null, 2)}
                    </pre>
                </div>
                <button className='bg-blue-600 text-white p-1 rounded-lg w-full' onClick={() => { setShowModal(false); setFormValues({}) }}>
                    Okay
                </button>
            </Modal>
        </>
    )
}


const formData = {
    form: {
        formName: "User Registration", formInputs: [{
            label: "Name",
            inputType: "text",
            name: "username",
            required: true
        }, {
            label: "Email",
            inputType: "email",
            name: "email",
            required: true
        }, {
            label: "Phone",
            inputType: "number",
            name: 'phone',
            required: true
        }]

    }
}