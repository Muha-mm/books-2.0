import  React from 'react'
import SvgComponent from './SvgComponent'
import c from './Preloader.module.css'

let Preloader = () =>{
    return <div className={c.preloader}>
        <SvgComponent/>
    </div>
}
export default Preloader