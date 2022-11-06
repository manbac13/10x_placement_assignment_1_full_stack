import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = () => {
    const [data, setData] = useState({})
    const [cnfpassword, setcnfpassword] = useState("")
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
        console.log(data)
        if (data.password !== cnfpassword.cnfpassword) {
            alert("Passwords does not match")
        }
        if (!data.password || !cnfpassword.cnfpassword || !data.email) {
            alert("All the field are required")
        }

        axios.post("http://localhost:8080/register", data).then((res)=>{
            console.log(res.data)
        })
    }

    const moveToLogin= ()=>{
        navigate("/login")
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
                    <input placeholder="Confirm Password"
                        name="cnfpassord"
                        onChange={(e) => setcnfpassword({ ...cnfpassword, cnfpassword: e.target.value })}
                    />


                    <button>REGISTER</button>
                </form>
                <p>
                    Already have an Account?
                    <br></br>
                    <button onClick={moveToLogin}>Login</button>
                </p>
            </div>

        </>
    )
}

export default Register