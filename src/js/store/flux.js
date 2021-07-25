const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			planets: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			setCharacters: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(resp => resp.json())
					.then(data => {
						setStore({ characters: data.results });
					});
			},
			setPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then(resp => resp.json())
					.then(data => {
						setStore({ characters: data.results });
					});
			},
			addFavorites: name => {
				setStore({ favorites: [...getStore().favorites, name] });
			}
		}
	};
};

export default getState;
