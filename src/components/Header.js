import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div>
            	<h1 className="text-xs-center"> {this.props.text} </h1>
            	<h4 className="text-xs-center"> {this.props.text2} </h4>
            </div>
        );
    }
}

export default Header;