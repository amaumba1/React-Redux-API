import React, { Component } from 'react'; 
   

class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            query: ''
        }

        this.onChange = this.onChange.bind(this)
    }

    onChange() {
        //const { value } = event.target; 
        const value = event.target.value; 

        this.setState({
            query: value 
        })
    }

    render() {
        return (
            <div>
                {this.props.children}
                <input 
                    type='text'
                    value={this.state.query}
                    onChange={this.onChange}
                />
            </div>
        );
    }
}

export default Search; 