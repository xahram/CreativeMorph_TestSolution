import React from 'react';
import axios from 'axios'
const Tinder = () => {
    const [toggle, setToggle] = React.useState(false)
    const [image, setImage] = React.useState("")
    const onClickHandler = () => {
        setToggle(false)
    }
    React.useEffect(() => {
        if (!toggle) {
            axios.get("https://dog.ceo/api/breeds/image/random").then((res) => {
                setImage(res.data.message);
                setToggle(!toggle);
            }).catch()
        }


    }, [toggle])

    return (<>
        <img src={image} />
        <button >Yes</button>
        <button onClick={onClickHandler}>No</button>

    </>

    )
}
export default Tinder;