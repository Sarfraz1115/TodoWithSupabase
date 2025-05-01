import React from "react"

const Filtertask = ({ text, active, onClick, count }) => {

  
    return (
        <button
        className={`
          flex-1 py-3 px-4 text-center relative
          ${
            active
              ? "text-blue-600 font-medium"
              : "text-gray-500 hover:cursor-pointer "
          }
        `}
        onClick={onClick}
      >
        {text}
        <span className="ml-1 text-xs bg-gray-100  px-1.5 py-0.5 rounded-full">{count}</span>
        {active && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />}
      </button>
    )
}

export default Filtertask