import React from 'react'
import { Edit, Trash2 } from 'lucide-react'
const Tasklists = ({ tasks, handleinput, handledelete, handleedit}) => {
    return (
        <div className='divide-y divide-gray-200'>
            {
                tasks.length === 0 ? (
                    <p className='text-2xl text-red-400'>Add Task</p>
                ) : (
                    <ul>
                        {
                            tasks.map((item, index) => (

                                <li key={index} className="flex justify-between items-center p-2 mb-1.5 border rounded-md">

                                    {/* <span className={item.isCompleted ? "line-through text-gray-400" : "flex items-center justify-center gap-1"}>{item.title}</span> */}
                                    <div className='flex gap-1.5'>
                                        <input onChange={() => handleinput(index)} checked={item.isCompleted} className="checkbox ml-6" type="checkbox" />
                                        <div className={item.isCompleted ? "line-through text-gray-400" : ""}>{item.title}</div>

                                    </div>
                                    <div className="flex space-x-2 transition-opacity">
                                        <button onClick={() => handleedit(item.id)} className="p-1 rounded-full hover:bg-gray-200 hover:cursor-pointer ">
                                            <Edit  className="h-4 w-4 text-gray-500 " />
                                        </button>
                                        <button onClick={() =>handledelete(item.id)} className="p-1 rounded-full hover:bg-gray-200 cursor-pointer ">
                                            <Trash2 className="h-4 w-4 text-red-500" />
                                        </button>
                                    </div>
                                </li>

                            ))
                        }
                    </ul>
                )
            }
        </div>
    )
}

export default Tasklists