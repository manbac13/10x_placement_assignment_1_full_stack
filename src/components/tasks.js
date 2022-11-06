import { useEffect, useState } from "react"
import axios from "axios"

const Task = () => {

    const [data, setData] = useState({})
    const [msg, setMsg] = useState("")
    const [display, setDisplay] = useState("none")
    const [getResp, setGetResp] = useState([])

    const handleClick = (e) => {
        e.preventDefault()


        const config = {
            headers: {
                token: localStorage.getItem("token")
            }
        }

        axios.post("http://localhost:8080/post", data, config).then((res) => {
            console.log(res.data)
            setMsg(res.data.message)
            setDisplay("block")
        })
    }


    

    const handleActivities = () => {
        /* const config = {
            headers: {
                token: localStorage.getItem("token")
            }
        }
        axios.post('http://localhost:8080/post/getAllPostByaUser', config).then((res) => {
            console.log(res.data)
        }) */

        fetch("http://localhost:8080/post/getAllPostByaUser",{
            method:"POST",
            headers:{
                token: localStorage.getItem("token")
            },

        }).then((res)=>res.json())
        .then(data=>console.log(data))
    }


    return (
        <>
            <div className="activity-main-div">
                <form onSubmit={handleClick} className="activity-form">
                    <input name="activity"
                        placeholder="activity"
                        onChange={(e) => setData({ ...data, activity: e.target.value })} />
                    <button className="activity-button">Add</button>
                    <p style={{ display: { display } }}>{msg}</p>
                </form>
                <button onClick={handleActivities}>Show All the Activities</button>

            </div>

        </>
    )
}

export default Task