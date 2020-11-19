const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			events: [
				{
					title: "Halloween",
					date: "October 31",
					time: "8:05 pm",
					id: 1,
					group: 1,
					content:
						"I think we all know how Halloween works. We will all gather at the local watering hole for some intense pre gaming. Afterwards, we will hit the town for some costume shenanigans!",
					content2: "can",
					content3: "you",
					content4: "dig it?"
				},
				{
					title: "Thanksgiving",
					date: "November 26",
					time: "9:00 pm",
					id: 2,
					group: 1,
					content: "Join us for a huge Thanksgiving dinner!"
				},
				{
					title: "Christmas",
					date: "December 25",
					time: "8:00 pm",
					id: 3,
					group: 1,
					content: "Ugly Sweater Christmas Party!"
				},
				{
					title: "Graduation",
					date: "December 18",
					time: "7:30 pm",
					id: 4,
					group: 2,
					content: "Celebrate four years of hard work!"
				},
				{
					title: "New Years",
					date: "December 31",
					time: "11:00 pm",
					id: 5,
					group: 2,
					content: "Ring in the new year!"
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

			getEvent: id => {
				const event = getStore().events;
				let temp = "not found";
				event.forEach(element => {
					if (id == element.id) {
						temp = element;
					}
				});
				return temp;
			},

			getGroup: id => {
				const group = getStore().groups;
				let temp = "not found";
				group.forEach(element => {
					if (id == element.id) {
						temp = element;
					}
				});
				return temp;
			},
			getDate: id => {
				const date = getStore().events;
				let temp = "not found";
				date.forEach(element => {
					if (id == element.id) {
						temp = element;
					}
				});
				return temp;
			},
			getTitle: id => {
				const title = getStore().events;
				let temp = "not found";
				title.forEach(element => {
					if (id == element.id) {
						temp = element;
					}
				});
				return temp;
			},
			getContent: id => {
				const content = getStore().events;
				let temp = "not found";
				content.forEach(element => {
					if (id == element.id) {
						temp = element;
					}
				});
				return temp;
			},
			getGroups: () => {
				return getStore().groups;
			}
		}
	};
};

export default getState;
