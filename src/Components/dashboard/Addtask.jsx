import React from 'react'
import { Plus } from 'lucide-react'
const Addtask = ({onclick, onchange, value}) => {

    return (
        <div className="bg-white rounded-lg shadow p-4">
            <form className="flex gap-2">
                <input
                    onChange={onchange}
                    value={value}
                    type="text"
                    placeholder="Add a new task..."
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex items-center gap-1 hover:cursor-pointer"
                    onClick={onclick}
                >
                    <Plus className="h-4 w-4" />
                    Add
                </button>
            </form>
        </div>
    )
}

export default Addtask