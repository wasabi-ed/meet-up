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
					content2: "Bring your friends!",
					content3: "Best costume wins!",
					content4: "Don't forget to bring a bag of candy!"
				},
				{
					title: "Thanksgiving",
					date: "November 26",
					time: "9:00 pm",
					id: 2,
					group: 1,
					content: "Join us for a huge Thanksgiving dinner!",
					content2: "Bring your friends!",
					content3: "Best bring a side dish to share!",
					content4: "Free hayrides before dinner!"
				},
				{
					title: "Christmas",
					date: "December 25",
					time: "8:00 pm",
					id: 3,
					group: 1,
					content: "Ugly Sweater Christmas Party!",
					content2: "Ugliest sweater wins 5 Apple Pies!",
					content3: "BYOB",
					content4: "Bring your friends!"
				},
				{
					title: "Graduation",
					date: "December 18",
					time: "7:30 pm",
					id: 4,
					group: 2,
					content: "Celebrate four years of hard work!",
					content2: "Refreshments to follow!",
					content3: "Yearbook signing from 9-10 pm",
					content4: "Pick up your class rings!"
				},
				{
					title: "New Years",
					date: "December 31",
					time: "11:00 pm",
					id: 5,
					group: 2,
					content: "Ring in the new year!",
					content2: "Everyone bring a bottle of bubbly!",
					content3: "Professional photographer from 11 pm - 1 am",
					content4: "Live DJ Spinning the best of the last decade!"
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
