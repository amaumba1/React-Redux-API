const INTIAL_STATE = [

    {
        title: 'React',
        url: 'https://facebook.github.io/react/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 1
    }, {
        title: 'Redux',
        url: 'https://github.com/reactjs/redux',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 2
    }
];

function storyReducer( state = INTIAL_STATE, action ) {
    switch(action.type) {
        default: return state;
    }
}

export default storyReducer; 
