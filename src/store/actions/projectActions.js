export const createProject = (project, url) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();
		firestore
			.collection('projects')
			.doc(url)
			.set({
				...project,
				createdAt: new Date()
			})
			.then(() => {
				dispatch({ type: 'CREATE_PROJECT', project });
			})
			.catch(err => {
				dispatch({ type: 'CREATE_PROJECT_ERROR', err });
			});
	};
};
