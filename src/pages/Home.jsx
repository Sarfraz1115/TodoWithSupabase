import { Book, BookmarkCheck, Calendar, ListTodo } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'



const Home = () => {
    const Navigate = useNavigate();
    return (
        <div className='min-h-screen bg-gray-50'>
            <header className='bg-white shadow-sm '>
                <div className=' max-w-8xl flex justify-between h-14 items-center ml-8 mx-auto '>
                    <div className="flex items-center gap-2 ml-4">
                        <ListTodo />
                        <span className='text-xl font-bold text-gray-700'>TaskMaster</span>
                    </div>
                    <div className='flex items-center space-x-4 mr-9 p-3'>
                        <button
                            onClick={() => Navigate("/login")}
                            className=' px-4 py-2 text-sm font-medium text-gray-700 inline-block clear hover:bg-gray-100 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2'>Login</button>
                        <button
                            onClick={() => Navigate("/signup")}
                            className=' px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-50' >Signup</button>
                    </div>
                </div>
            </header>

            {/* main content  */}
            <main>
                <div className="hero-cotent max-w-8xl flex flex-col mx-auto items-center py-16 px-4 mt-5 sm:py-24 sm:px-6 lg:px-8">
                    <div className="hero text-center">
                        <h1 className='text-4xl text-gray-900 font-extrabold sm:text-5xl sm:tracking-tight'>Manage your tasks with ease</h1>
                        <p className="mt-7 max-w-xl mx-auto text-xl text-gray-500">
                            Stay organized and never miss a deadline with our simple and intuitive todo application.
                        </p>

                        <div className="btns mt-8 flex justify-center items-center gap-4">
                            <button
                                onClick={() => Navigate("/login")}
                                className='px-11 py-4 text-sm font-medium text-gray-700 inline-block clear hover:bg-gray-100 rounded-md cursor-pointer '>Login</button>
                            <button
                                onClick={() => Navigate("signup")}
                                className='px-11 py-4 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 cursor-pointer' >Sign up</button>
                        </div>
                    </div>

                </div>

            </main>
            <section className="flex items-center justify-center bg-muted/50">
                <div className="container py-12 md:py-20">
                    <div className="mx-auto max-w-md text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why choose TaskMaster?</h2>
                        <p className="mt-4 text-muted-foreground">
                            Our simple yet powerful features help you stay organized and productive.
                        </p>
                    </div>
                    <div className="mt-12 grid gap-8 md:grid-cols-3">
                        {[
                            {
                                icon: <Book />,
                                title: "Create Task",
                                description: "Easily create and organize your tasks in one place..",
                            },
                            {
                                icon: <Calendar />,
                                title: "Set Deadlines",
                                description: "Never miss a deadline with customizable notifications and reminders.",
                            },
                            {
                                icon: <BookmarkCheck />,
                                title: "Progress Tracking",
                                description: "Track your progress and stay motivated.",
                            },
                        ].map((feature, i) => (
                            <div key={i} className="rounded-lg border  p-6 shadow-sm">
                                {feature.icon}
                                <h3 className="text-xl font-bold ">{feature.title}</h3>
                                <p className="mt-2 ml-2 text-muted-foreground">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Home