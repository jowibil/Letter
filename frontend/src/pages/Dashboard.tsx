import { useNavigate } from "react-router-dom"


export default function Dashboard () {
const navigate = useNavigate();

const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
}
return (
    <div>
        <h1>Welcome to Dashboard</h1>

        <button onClick={handleLogout}>Logout</button>
    </div>
)    

} 