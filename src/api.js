export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';

export const geoAPIOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9a314d7dd7mshb43224ebcf2b2e6p1e64acjsn9cc5faca7379',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};
export const reviewers = [
    {
      title: "John White",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      getImageSrc: () => require("./assets/john.jpg"),
      rating: 4,
    },
    {
      title: "Jacob Doe",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      getImageSrc: () => require("./assets/jacob.jpg"),
      rating: 5,
    },
    {
      title: "Shina Merci",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      getImageSrc: () => require("./assets/Shina.jpg"),
      rating: 4,
    },
    {
      title: "Greg Marcus",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      getImageSrc: () => require("./assets/Greg.jpg"),
      rating: 5,
    },
    {
      title: "Mitchell Pritchett",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      getImageSrc: () => require("./assets/Mitchell.jpg"),
      rating: 5,
    },
    {
      title: "Tony Blossom",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      getImageSrc: () => require("./assets/Tony.jpg"),
      rating: 5,
    },

  ];