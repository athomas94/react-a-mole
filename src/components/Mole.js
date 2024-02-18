import { useEffect } from 'react'
import moleImg from '../mole.png'

const Mole = (props) => {

    useEffect(() => {
        let time = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, time)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} src={moleImg} onClick={props.handleClick} />
        </div>
    )
}

export default Mole