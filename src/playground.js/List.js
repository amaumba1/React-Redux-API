import React, { Component } from 'react'

class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
            archivedItems: []
        }

        this.onArchive = this.onArchive.bind(this)
    }

    onArchive(id) {
        const { archivedItems } = this.state

        this.setState({
            archivedItems: [ ...archivedItems, id]
        })
    }

    render() {
        const { list } = this.props
        const { archivedItems } = this.state
    

        const filteredList = list
            .filter(byArchived(archivedItems))

        return (
            <div>
                <ul>
                    {filteredList.map(item => 
                        <li key={item.id}>
                            <span>
                                {item.name}
                            </span>
                            <span>
                                <button
                                    type='button'
                                    onClick={() => this.onArchive(item.id)}
                                >
                                    Archive
                                </button>
                            </span>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

const byArchived = (archiveItems) => (item) =>
    !archiveItems.includes(item.id); 

export default List