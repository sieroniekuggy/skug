export const createPost = (post, url) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();
		firestore
			.collection('posts')
			.doc(url)
			.set({
				...post,
				createdAt: new Date()
			})
			.then(() => {
				dispatch({ type: 'CREATE_POST', post });
			})
			.catch(err => {
				dispatch({ type: 'CREATE_POST_ERROR', err });
			});
	};
};
