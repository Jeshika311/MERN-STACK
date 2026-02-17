import React from 'react'

const ChildComponent = React.memo(
    (props) => {
        console.log("Child component go re-rendered again")
        return (
            <div>
                <button onClick={props.handleClick}>
                    {props.buttonName}
                </button>
            </div>
        )
    }
)

export default ChildComponent

// React.memo -> wrap -> component -> re-render tabhi hoga jab props change honge nahi toh re-render nahi hoga

// if we are sending a value , then react.memo save our code from re rendering
// if we are sending a function , then react.memo won't be able to save our code from re-rendering

// when a component is re render , then all its functions become re create and their reference becomes change.
// So, React.memo thinks that it is a different function and do not protect it from re-rendering