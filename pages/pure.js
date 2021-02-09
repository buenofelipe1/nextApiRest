import React from 'react';
import styles from '../styles.module.css';


class pure extends React.Component{
    render(){
        return(
            React.createElement("div", {className:'Shopping-Lista'},
            React.createElement("h1", null, "Shopping Lista for ", this.props.name),
            React.createElement("ul", null),
            React.createElement("li", null, "Instagran"),
            React.createElement("li", null, "WhatsApp"),
            React.createElement("li", null, "Oculus"),
            )
        )
    }
} 
export default pure;