const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			events: [
				{
					title: "Halloween",
					date: "October 31",
					time: "8:00 pm",
					id: 1,
					group: 1
				},
				{
					title: "Thanksgiving",
					date: "November 26",
					time: "8:00 pm",
					id: 2,
					group: 1
				},
				{
					title: "Christmas",
					date: "December 25",
					time: "8:00 pm",
					id: 3,
					group: 1
				},
				{
					title: "Graduation",
					date: "December 18",
					time: "8:00 pm",
					id: 4,
					group: 2
				},
				{
					title: "New Years",
					date: "December 31",
					time: "11:00 pm",
					id: 5,
					group: 2
				}
			],
			groups: [
				{
					name: "Group 1",
					id: 1,
					roster: [1, 2, 3]
				},
				{
					name: "Group 2",
					id: 2,
					roster: [4, 5]
				}
			]
		},
		actions: {
			getEvents: () => {
				return getStore().events;
			},
			getGroup: id => {
				const events = getStore().events;

				events.forEach(element => {
					if (id == element.id) {
						return element;
					}
				});

				return "Not found";
			},
			getGroups: () => {
				return getStore().groups;
			}
		}
	};
};

export default getState;
