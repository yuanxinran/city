const places = [
  {
    _id: 1,
    name: "Confucius Temple",
    img: "confucius",
    years: ["551 BC", ""],
    periods: [
      {
        _id: 1,
        year: "551 BC",
        imgs: ["1"],
        text: [
          "Confucius (551–479 BC)was a Chinese teacher, editor, politician, and philosopher of the Spring and Autumn period of Chinese history.",
          "The philosophy of Confucius, also known as Confucianism, emphasized personal and governmental morality, correctness of social relationships, justice and sincerity. His followers competed successfully with many other schools during the Hundred Schools of Thought era only to be suppressed in favor of the Legalists during the Qin Dynasty. Following the victory of Han over Chu after the collapse of Qin, Confucius's thoughts received official sanction and were further developed into a system known in the West as Neo-Confucianism, and later New Confucianism (Modern Neo-Confucianism). Confucius is traditionally credited with having authored or edited many of the Chinese classic texts including all of the Five Classics, but modern scholars are cautious of attributing specific assertions to Confucius himself. Aphorisms concerning his teachings were compiled in the Analects, but only many years after his death. Confucius's principles have commonality with Chinese tradition and belief. He championed strong family loyalty, ancestor veneration, and respect of elders by their children and of husbands by their wives, recommending family as a basis for ideal government. He espoused the well-known principle 'Do not do to others what you do not want done to yourself', the Golden Rule. He is also a traditional deity in Daoism.",
          "Throughout history, Confucius is widely considered as one of the most important and influential individuals in shaping the lives of humanity. His teaching and philosophy greatly impacted people around the world and still remain in today's society"
        ]
      }
    ]
  }
];

export function getPlace(n) {
  return places.find(m => m._id === parseInt(n));
}

export function getPlacePeriod(n, p) {
  let place = places.find(m => m._id === parseInt(n));
  let period = place.periods.find(m => m._id === parseInt(p));
  return period;
}
