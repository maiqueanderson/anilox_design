import { Button } from "react-bootstrap"
import './Btn.css'

const Btn = ({texto, onClick, isActive}) =>{

    const buttonClass = isActive ? "client_button active" : "client_button";

    return(
        <Button variant="dark" className={buttonClass} onClick={onClick}  >
              {texto}
        </Button>
    )
}

export default Btn;
