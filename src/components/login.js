import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [data, setData] = useState({})
    const navigate = useNavigate()
    const handleClick = (e) => {
        e.preventDefault()
        console.log(data)
        if (!data.password ||  !data.email) {
            alert("All the field are required")
        }

        axios.post("http://localhost:8080/login", data).then((res)=>{
            console.log(res.data)
            if(res.data.status === "Success"){
                localStorage.setItem("token", res.data.token)
            }
            if(res.data.token !== undefined){
                navigate("/tasks")
            }
        })
    }
    return (
        <>
            <div className="main-div">
                <form onSubmit={handleClick}>
                    <input placeholder="Username or Email"
                        name="email"
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                    />
                    <input placeholder="Password"
                        name="passord"
                        onChange={(e) => setData({ ...data, password: e.target.value })}
                    />

                    <button>LOGIN</button>
                </form>
            </div>

        </>
    )
}

export default Login