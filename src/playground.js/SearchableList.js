import React,  { Component } from 'react'
import Search from './Search';
import List from './List'; 

class SearchableList extends Component {
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
            const { list } = this.props
            const { query } = this.state 

        return (
            <div>
                <Search
                    query={query}
                    onChange={this.onChange}
                >Search List
                </Search>
                <List list={(list || []).filter(byQuery(query))} /> 
            </div>
        )
    }
}

const byQuery = (query) => (item) => 
    !query || item.name.toLowerCase().includes(query.toLowerCase()); 
    
export default SearchableList; 