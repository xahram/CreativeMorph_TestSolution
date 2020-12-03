import React from 'react';

const Timer = () => {
    const styles = {
        color: "red"
    }
    const [timer, setTimer] = React.useState(30)
    React.useEffect(() => {
       const interval = setInterval(() => {
            setTimer(timer - 1)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [timer])
    return (
        <div style={timer < 16 ? styles : null}>Hey : {timer}</div>
    )
}
export default Timer;