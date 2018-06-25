import React,  { Component } from 'react'
import Search from './Search';
import List from './List'; 

class SearchableList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            query: '',
            archiveItems: []
        }

        this.onChange = this.onChange.bind(this)
        this.onArchive = this.onArchive.bind(this)
    }

    onChange() {
        //const { value } = event.target; 
        const value = event.target.value;

        this.setState({
            query: value
        })
    }

    onArchive() {
        const { archiveItems } = this.state

        this.setState({
            archiveItems: [ ...archiveItems, id ]
        })
    }

        render() {

        const { list } = this.props
        const { query } = this.state 

        const filteredList = list 
            .filter(byQuery(query))
           
        return (
            <div>
                <Search
                    query={query}
                    onChange={this.onChange}
                >Search List
                </Search>
                <List list={filteredList}/> 
            </div>
        )
    }
}

const byQuery = (query) => (item) => 
    !query || item.name.toLowerCase().includes(query.toLowerCase()); 
 
export default SearchableList; 