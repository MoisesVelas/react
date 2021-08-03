


import React from 'react'
import Boton from './boton'


class Boton2 extends React.Component{


    constructor (props){

        super(props)
    }


render(){


    return(

        <div>

        <span className="btn btn-danger">{this.props.texto}</span>


    </div>




    )
}



}

export default Boton2;