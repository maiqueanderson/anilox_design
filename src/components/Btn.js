import { Button } from "react-bootstrap"
import './Btn.css'

const Btn = ({texto, onClick}) =>{
    return(
        <Button variant="dark" className="client_button" onClick={onClick}>
              {texto}
            </Button>
    )
}

export default Btn;
