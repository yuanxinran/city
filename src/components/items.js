const items = [
  {
    _id: 1,
    name: "Confucius Temple",
    img: "confucius",
    color: "#9DA8B5",
    imgu: require("../imgs/place/confucius.png"),
    imgc: require("../imgs/placec/confucius.png")
  },
  {
    _id: 2,
    name: "Presidential Palace",
    img: "palace",
    color: "#8F8F90",
    imgu: require("../imgs/place/palace.png"),
    imgc: require("../imgs/placec/palace.png")
  },
  {
    _id: 3,
    name: "Bao'en Temple",
    img: "baoen",
    color: "#C2C2C2",
    imgu: require("../imgs/place/baoen.png"),
    imgc: require("../imgs/placec/baoen.png")
  },
  {
    _id: 4,
    name: "Jiming Temple",
    img: "temple",
    color: "#A6BAD1",
    imgu: require("../imgs/place/temple.png"),
    imgc: require("../imgs/placec/temple.png")
  },
  {
    _id: 5,
    name: "Mingxiao Mausoleum",
    img: "elephant",
    color: "#A1B1C3",
    imgu: require("../imgs/place/elephant.png"),
    imgc: require("../imgs/placec/elephant.png")
  }
];

export function getItems() {
  return items;
}

export function getItem(n) {
  return items.find(m => m._id === parseInt(n));
}
