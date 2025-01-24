import React from 'react'

const AcceptTask = ({data}) => {
    console.log(data)
    return (
        <div className='flex-shrink-0  p-5 h-full w-[330px] rounded-xl bg-orange-500 '>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm py-1 px-3 rounded font-semibold'>{data.category}</h3>
                <h4 className='text-sm font-semibold'>{data.taskDate}</h4>
            </div>
            <h1 className='text-xl mt-5 font-semibold '>{data.taskTitle}</h1>
            <p className='mt-2 text-base'>{data.taskDescription}</p>
            <div className='flex justify-between mt-4 '>
                <button className='bg-green-500 rounded py-1 px-2 text-sm'>mark as completed </button>
                <button className='bg-red-500 rounded py-1 px-2 text-sm'>mark as failed</button>
            </div>
        </div>
    )
}

export default AcceptTask
