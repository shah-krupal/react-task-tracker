const task = [
    {
        id: 1,
        text: 'Meeting',
        day: '14th Feb @ 6pm',
        remainder: true
    },
    {
        id: 2,
        text: 'Yt Video',
        day: '13th Feb @ 7am',
        remainder: true
    },
    {
        id: 3,
        text: 'VS CODE',
        day: '15th Feb @ 2pm',
        remainder: false
    }
]

const tasks = () => {
    return (
        <>
         {
             tasks.map((task)=>(<h3>{task.text}</h3>))
         }   
        </>
    )
}

export default tasks
