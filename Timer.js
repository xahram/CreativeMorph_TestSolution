import React from 'react';

const Timer = () => {
    const styles = {
        color: "red"
    }
    const [timer, setTimer] = React.useState(60)
    setTimeout(() => {
        setTimer(timer - 1)
    }, 1000)
    return (
        <div style={timer < 16 ? styles : null}>Hey : {timer}</div>
    )
}
export default Timer;