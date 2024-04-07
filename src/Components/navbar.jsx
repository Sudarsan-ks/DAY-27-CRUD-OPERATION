import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { ProductContext } from "../context";
import { useLocation } from "react-router-dom";

export function Navbar() {

    const navigate = useNavigate();
    const { setOnstyle, handlestyle } = useContext(ProductContext)
    const location = useLocation()

    return (
        <div className="navbar">
            <div className="home">
                <h4 style={location.pathname === '/' ? handlestyle : {}} onClick={() => {
                    setOnstyle(true)
                    navigate('/')
                }}  >HOME</h4>
            </div>
            <div className="add">
                <h4 style={location.pathname === '/add' ? handlestyle : {}} onClick={() => {
                    setOnstyle(true)
                    navigate('/add')
                }} >ADD DATA</h4>
            </div>
        </div>
    )
}
