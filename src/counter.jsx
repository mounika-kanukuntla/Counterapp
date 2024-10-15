import React , {Component} from "react";
export default class Incre extends React.Component{  
        constructor(props){
        super(props)
        this.state={
          count:0
        }
    }
    inc = ()=>{
        this.setState({count: this.state.count+1})
    }
    dec = ()=>{
        this.setState({count:this.state.count-1})
    }
    res =()=>{
        this.setState({count:0})
    }
    render(){
        return(
            <>
            <div className="main">
                <div className="sec">
                    <h2>Counter Application</h2>
            <h1 className="zero">{this.state.count}</h1>
            <button onClick={this.inc} className="plus"><i class="fa-solid fa-plus"></i></button>
            <button onClick={this.dec} className="minus"><i class="fa-solid fa-minus"></i></button> <br />
            <button onClick={this.res} className="res"><i class="fa-solid fa-repeat"></i></button>
            </div>
            </div>
            </>
        )
    }
}