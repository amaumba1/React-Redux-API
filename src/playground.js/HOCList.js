// The ArchiveableList component has two purposes. On the one hand, it is a pure presenter
// component that shows the items in a list. On the other hand, it is stateful container component
// that keeps track of the archived items. Therefore, you could split this two responsibilities up into
// representation and logic thus into presentational and container component. It would be the same
// refactoring you have done before with the CounterContainer and CounterPresenter components.
// However, another approach could be to transfer the logic, in this case the local state management,
// into a higher - order component.Higher - order components are reusable and thus the local state
// management could become reusable for many components but not only one.



import React from 'react'



function byArchived(archivedItems) {
    return function(item) {
        return !archivedItems.includes(item.id)
    }
}

function withArchive(Component) {
    class WithArchive extends React.Component {
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
                archivedItems: [...archivedItems, id]
            })
        }

        render() {
            const { list } = this.props
            const { archivedItems } = this.state


            const filteredList = list
                .filter(byArchived(archivedItems))

            return <Component 
                list={filteredList}
                onArchive={this.onArchive}
            />
        }
    }

    return WithArchive
}

function List({ list, onArchive }) {
    return (
        <div>
            <ul>
                {list.map(item =>
                    <li key={item.id}>
                        <span>
                            {item.name}
                        </span>
                        <span>
                            <button
                                type='button'
                                onClick={() => onArchive(item.id)}
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

const ListWithArchive = withArchive(List);

export default List

function App({ list }) {
    return <ListWithArchive list={list} /> 
}

