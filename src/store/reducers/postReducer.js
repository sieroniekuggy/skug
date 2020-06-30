const initState = {};

const postReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE_POST':
			return state;
		case 'CREATE_POST_ERROR':
			return state;
		default:
			return state;
	}
};

export default postReducer;
