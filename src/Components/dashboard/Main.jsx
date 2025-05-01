import React, { useState, useEffect } from 'react'
import Greeting from './Greeting'
import CardSummary from './CardSummary'
import Addtask from './Addtask'
import Filtertask from './Filtertask'
import { toast } from 'react-toastify'
import { Circle, Edit, Trash2 } from 'lucide-react'
import { supabase } from '../../utils/supabaseClient'

const Main = () => {
    const [filter, setfilter] = useState("all");
    const [taskinput, settaskinput] = useState('');
    const [tasks, settasks] = useState([]);

    useEffect(() => {
        const fetchtasks = async () => {
            const { data, error } = await supabase.from("Tasks").select("*");

            if (error) {
                toast.error("Not Data Found in Database", error.message);
                return;
            }
            const formatted = data.map((task) => ({
                title: task.title,
                isCompleted: task.is_completed,
            }));
            settasks(formatted);
        }
        fetchtasks();
    }, [])

    const handleOnchange = (e) => {
        settaskinput(e.target.value);
    }

    const handleAdd = async (e) => {
        e.preventDefault();
        if (taskinput == "") { toast.error("Write any Task..."); return }
        try {
            const {
                data: { user }
            } = await supabase.auth.getUser();

            const { data, error } = await supabase.from("Tasks").insert([
                {
                    title: taskinput,
                    is_completed: false,
                    user_id: user.id,
                },
            ]);
            if (error) {
                console.log("error in inserting -> ", error.message);
                toast.error("error in ddatabse", error.message);
                return;
            }
            toast.success("Task Added Succesfully");
            settaskinput("");

        } catch (err) {
            console.log("Unexpected error0, ", err);
            toast.error("Unexpected")
        }
    }





    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') return task.isCompleted;
        if (filter === 'pending') return !task.isCompleted;
        return true;
    });

    const handleinput = (index) => {
        const updatetask = tasks.map((task, i) => {
            if (i === index) {
                return { ...task, isCompleted: !task.isCompleted }
            }
            return task;
        })
        settasks(updatetask);
    }

    const totaltasks = tasks.length;
    const completedTasks = tasks.filter((task) => task.isCompleted).length;
    const pendingTask = tasks.filter((task) => !task.isCompleted).length;

    return (

        <main className='flex flex-1 bg-gray-100 flex-col gap-4 p-4 md:gap-8 md:p-6 '>
            <Greeting />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <CardSummary title="Total tasks" color="bg-blue-400" value={tasks.length} />
                <CardSummary title="Completed" color="bg-green-400" value={completedTasks} />
                <CardSummary title="Pending" color="bg-orange-400" value={pendingTask} />
            </div>
            <Addtask onclick={handleAdd} onchange={handleOnchange} value={taskinput} />
            <div className='bg-white rounded-lg shadow'>
                <Filtertask className="hover:cursor-pointer" text="All" count={totaltasks} active={filter === 'all'} />
                <Filtertask className="hover:cursor-pointer" text="Completed" active={filter === 'completed'} count={completedTasks} onClick={() => setfilter('completed')} />
                <Filtertask className="hover:cursor-pointer" text="Pending" active={filter === 'pending'} count={pendingTask} onClick={() => setfilter('pending')} />
            </div>
            <div className='divide-y divide-gray-200'>
                {
                    filteredTasks.length === 0 ? (
                        <p className='text-2xl text-red-400'>Add Task</p>
                    ) : (
                        <ul>
                            {
                                filteredTasks.map((item, index) => (

                                    <li key={index} className="flex justify-between items-center p-2 mb-1.5 border rounded-md">

                                        {/* <span className={item.isCompleted ? "line-through text-gray-400" : "flex items-center justify-center gap-1"}><Circle className='w-[20px] h-[20px]' />{item.title}</span> */}
                                        <div className='flex gap-1.5'>
                                            <input onChange={() => handleinput(index)} checked={item.isCompleted} className="checkbox ml-6" type="checkbox" />
                                            <div className={item.isCompleted ? "line-through text-gray-400" : ""}>{item.title}</div>

                                        </div>
                                        <div className="flex space-x-2 transition-opacity">
                                            <button className="p-1 rounded-full hover:bg-gray-200 hover:cursor-pointer ">
                                                <Edit className="h-4 w-4 text-gray-500 " />
                                            </button>
                                            <button className="p-1 rounded-full hover:bg-gray-200 cursor-pointer ">
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
        </main>
    )
}

export default Main