'use client'

const Error = ({ error, reset }) => {
    console.log(error)
    return (
        <div>
            <h1>Error in Admin Page</h1>
            <button onClick={() => reset()}>Try reload admin page</button>
        </div>
    )
}

export default Error;