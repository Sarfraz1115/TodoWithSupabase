import React from 'react'
import { ListTodo } from 'lucide-react'

const CardSummary = ({ title, value, color }) => {
    return (
        <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center space-x-3">
                <div className={`${color} rounded-full p-2 text-white`}>
                    <ListTodo className="h-5 w-5" />
                </div>
                <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
                    <p className="text-2xl font-bold">{value}</p>
                </div>
            </div>
        </div>
    )
}

export default CardSummary