import App from './App.svelte';

let config = {
	target: document.body,
	props: {
		name: 'welcome'
	}
};

export default new App(config);
