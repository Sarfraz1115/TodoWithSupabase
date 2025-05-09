import React, { useState, useEffect } from 'react'
import Greeting from './Greeting'
import CardSummary from './CardSummary'
import Addtask from './Addtask'
import Filtertask from './Filtertask'
import { toast } from 'react-toastify'
import { supabase } from '../../utils/supabaseClient'
import { data, useNavigate } from 'react-router-dom'
import Tasklists from './Tasklists'
import Profile from '../sidebarpages/Profile'

const Main = () => {
    const [filter, setfilter] = useState("all");
    const [taskinput, settaskinput] = useState('');
    const [tasks, settasks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                alert("Please Login to see your tasks");
                navigate("/login", { replace: true });
            }
        };
        checkAuth();
    }, [navigate])

    useEffect(() => {
        const fetchtasks = async () => {
            const { data, error } = await supabase.from("Tasks").select("*");

            if (error) {
                toast.error("Not Data Found in Database", error.message);
                return;
            }
            const formatted = data.map((task) => ({
                id: task.id,
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
            ]).select();
            if (error) {
                console.log("error in inserting -> ", error.message);
                toast.error("error in ddatabse", error.message);
                return;
            }
            if (data && data.length > 0) {
                settasks((prev) => [
                    {
                        id: data[0].id,
                        title: taskinput,
                        isCompleted: false,
                    },
                    ...prev
                ]);
                settaskinput("");
                toast.success("Task Added Successfully")
            }

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
    const handleDelete = async (taskId) => {
        try {
            const { data: { user } } = await supabase.auth.getUser();
            const { error } = await supabase.from("Tasks").delete().eq("id", taskId);

            if (error) {
                toast.error("Error in deleting task ", error.message);
                return;
            }
            settasks((prev) => prev.filter((task) => task.id !== taskId));
            toast.success("Task Deleted Successfully")

        } catch (err) {
            console.error("Unexpected error in handleDelete:", err);
            toast.error("Unexpected error occurred while deleting the task.");
        }
    };


    const taskEdit = async (taskId) => {
        const task = tasks.find((task) => task.id === taskId);
        if (!task) { toast.error("task not found"); return; }
        const taskalert = prompt("edit task", task.title);
        if (taskalert == null || taskalert === "") { toast.error("Please enter a valid task"); return; }
        try {
            const { error } = await supabase.from("Tasks").update({ title: taskalert }).eq("id", taskId);
            if (error) {
                toast.error("Error in updating task", error.message);
                return;
            }
            settasks((prev) => prev.map((task) => {
                if (task.id === taskId) {
                    return { ...task, title: taskalert };
                }
                return task;
            }));
            toast.success("Task Updated Successfully");
        } catch (error) {
            console.error("Unexpected error in taskEdit:", err);
            toast.error("Unexpected error occurred while editing the task.");
        }
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
                <Filtertask className="hover:cursor-pointer" text="All" count={totaltasks} active={filter === 'all'} onClick={() => setfilter('all')}  />
                <Filtertask className="hover:cursor-pointer" text="Completed" active={filter === 'completed'} count={completedTasks} onClick={() => setfilter('completed')} />
                <Filtertask className="hover:cursor-pointer" text="Pending" active={filter === 'pending'} count={pendingTask} onClick={() => setfilter('pending')} />
            </div>
            <Tasklists handledelete={(taskId) => handleDelete(taskId)} handleedit={(taskId) => taskEdit(taskId)} tasks={filteredTasks} handleinput={handleinput} />
        </main>
    )
}

export default Main