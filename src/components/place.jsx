import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const places = [
  {
    _id: 1,
    name: "Confucius Temple",
    img: "confucius",
    years: ["551BC", "384-1932", "Now"],
    cutoff: 8,
    periods: [
      {
        _id: 0,
        year: "551 BC",
        contents: [
          {
            imgs: ["1"],
            cutoff: 3,
            text: [
              "Confucius (551–479 BC)was a Chinese teacher, editor, politician, and philosopher of the Spring and Autumn period of Chinese history.",
              "The philosophy of Confucius, also known as Confucianism, emphasized personal and governmental morality, correctness of social relationships, justice and sincerity. His followers competed successfully with many other schools during the Hundred Schools of Thought era only to be suppressed in favor of the Legalists during the Qin Dynasty. Following the victory of Han over Chu after the collapse of Qin, Confucius's thoughts received official sanction and were further developed into a system known in the West as Neo-Confucianism, and later New Confucianism (Modern Neo-Confucianism). Confucius is traditionally credited with having authored or edited many of the Chinese classic texts including all of the Five Classics, but modern scholars are cautious of attributing specific assertions to Confucius himself. Aphorisms concerning his teachings were compiled in the Analects, but only many years after his death. Confucius's principles have commonality with Chinese tradition and belief. He championed strong family loyalty, ancestor veneration, and respect of elders by their children and of husbands by their wives, recommending family as a basis for ideal government. He espoused the well-known principle 'Do not do to others what you do not want done to yourself', the Golden Rule. He is also a traditional deity in Daoism.",
              "Throughout history, Confucius is widely considered as one of the most important and influential individuals in shaping the lives of humanity. His teaching and philosophy greatly impacted people around the world and still remain in today's society"
            ]
          }
        ]
      },
      {
        _id: 1,
        year: "384-1932",
        contents: [
          {
            imgs: ["2"],
            cutoff: 3,
            text: [
              "Temple of Confucius was firstly constructed in the national school in the 9th year of Taiyuan (CE 384). The place was later destroyed. In the 1st year of Jingyou during Song Dynasty (CE 1034), Confucius Temple was newly constructed on former site of imperial university, and was called Fuzimiao area along with Nanking Fuxue.",
              "The place became Nanjing Imperial University in 1365 in the early year of Ming Dynasty, and sixteen years later recovered to be the campus of Fuxue. During Qing Dynasty, there were two Xianxue (county schools of Shangyuan and Jiangning) in Fuzimiao area. In the end of Qing a primary school jointly sponsored by counties of Nanjing (Jiangning Fu) was established there.",
              "The current buildings date from the 19th century, in Qing Dynasty, with additions made since then. The temple lost all financial support by the state as a result of the revolution of 1911. During the late 1920s to 1931 and again in 1932 it was used as army barracks for troops the KMT regime and left in a dilapidated state. Some halls were used as picture gallery."
            ]
          }
        ]
      },
      {
        _id: 2,
        year: "Now",
        contents: [
          {
            imgs: ["3"],
            cutoff: 5,
            text: [
              "Temple is restored in 1985 and has become one of the most popular attractions in Nanjing. The area around Nanjing Confucius Temple consists of a series of tourist shops, snack bars, restaurants and tea cafes. They all appear to be in the architectural style of the Ming and Qing style. A variety of snacks encompassing eight of the most famous flavours are available for purchase at here. Everyone's individual tastes are well catered for. They are necessary parts of food culture in Nanjing."
            ]
          },
          {
            imgs: ["4", "5", "6"],
            cutoff: 5,
            text: [
              "Every year, there is a lattern show held in the Confucius Temple, which runs during the Spring Festival. The temple is usually crowded with people watching the show. Around lantern festival, Qinhuai River banks were decorated with almost 5000 dazzling lanterns, along with bustling dancing feast. The whole Confucian Temple was drenched in the multicolored lantern ocean during that time."
            ]
          }
        ]
      }
    ]
  },
  {
    _id: 2,
    year: "551 BC",
    img: "confucius",
    cutoff: 7,
    years: ["551", "1932", "Now"],
    periods: [
      {
        _id: 0,
        year: "551 BC",
        contents: [
          {
            imgs: ["2"],
            cutoff: 3,
            text: [
              "Confucius (551–479 BC)was a Chinese teacher, editor, politician, and philosopher of the Spring and Autumn period of Chinese history.",
              "The philosophy of Confucius, also known as Confucianism, emphasized personal and governmental morality, correctness of social relationships, justice and sincerity. His followers competed successfully with many other schools during the Hundred Schools of Thought era only to be suppressed in favor of the Legalists during the Qin Dynasty. Following the victory of Han over Chu after the collapse of Qin, Confucius's thoughts received official sanction and were further developed into a system known in the West as Neo-Confucianism, and later New Confucianism (Modern Neo-Confucianism). Confucius is traditionally credited with having authored or edited many of the Chinese classic texts including all of the Five Classics, but modern scholars are cautious of attributing specific assertions to Confucius himself. Aphorisms concerning his teachings were compiled in the Analects, but only many years after his death. Confucius's principles have commonality with Chinese tradition and belief. He championed strong family loyalty, ancestor veneration, and respect of elders by their children and of husbands by their wives, recommending family as a basis for ideal government. He espoused the well-known principle 'Do not do to others what you do not want done to yourself', the Golden Rule. He is also a traditional deity in Daoism.",
              "Throughout history, Confucius is widely considered as one of the most important and influential individuals in shaping the lives of humanity. His teaching and philosophy greatly impacted people around the world and still remain in today's society"
            ]
          }
        ]
      },
      {
        _id: 1,
        year: "384-1932",
        contents: [
          {
            imgs: ["3"],
            cutoff: 3,
            text: [
              "Temple of Confucius was firstly constructed in the national school in the 9th year of Taiyuan (CE 384). The place was later destroyed. In the 1st year of Jingyou during Song Dynasty (CE 1034), Confucius Temple was newly constructed on former site of imperial university, and was called Fuzimiao area along with Nanking Fuxue.",
              "The place became Nanjing Imperial University in 1365 in the early year of Ming Dynasty, and sixteen years later recovered to be the campus of Fuxue. During Qing Dynasty, there were two Xianxue (county schools of Shangyuan and Jiangning) in Fuzimiao area. In the end of Qing a primary school jointly sponsored by counties of Nanjing (Jiangning Fu) was established there.",
              "The current buildings date from the 19th century, in Qing Dynasty, with additions made since then. The temple lost all financial support by the state as a result of the revolution of 1911. During the late 1920s to 1931 and again in 1932 it was used as army barracks for troops the KMT regime and left in a dilapidated state. Some halls were used as picture gallery."
            ]
          }
        ]
      },
      {
        _id: 2,
        year: "Now",
        contents: [
          {
            imgs: ["4"],
            cutoff: 5,
            text: [
              "Temple is restored in 1985 and has become one of the most popular attractions in Nanjing. The area around Nanjing Confucius Temple consists of a series of tourist shops, snack bars, restaurants and tea cafes. They all appear to be in the architectural style of the Ming and Qing style. A variety of snacks encompassing eight of the most famous flavours are available for purchase at here. Everyone's individual tastes are well catered for. They are necessary parts of food culture in Nanjing."
            ]
          },
          {
            imgs: ["5", "6"],
            cutoff: 5,
            text: [
              "Every year, there is a lattern show held in the Confucius Temple, which runs during the Spring Festival. The temple is usually crowded with people watching the show. Around lantern festival, Qinhuai River banks were decorated with almost 5000 dazzling lanterns, along with bustling dancing feast. The whole Confucian Temple was drenched in the multicolored lantern ocean during that time."
            ]
          }
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

export function getContent(itemid, index) {
  var period = getPlacePeriod(itemid, index);
  return (
    <div className="period ">
      {period.contents.map(function(content, index) {
        var imageSize = content.cutoff;
        var textSize = 11 - content.cutoff;
        if (index % 2 == 0) {
          return (
            <div className="row" key={index}>
              <div className={`col-sm-${imageSize} img`}>
                <Carousel
                  showThumbs={false}
                  autoPlay={true}
                  infiniteLoop={true}
                >
                  {content.imgs.map(function(img, j) {
                    return (
                      <div>
                        <img
                          src={require(`../imgs/confucius/${img}.png`)}
                          key={j}
                        />
                      </div>
                    );
                  })}
                </Carousel>
              </div>
              <div className={`col-sm-${textSize} offset-sm-1 text`}>
                {content.text.map(function(txt, i) {
                  return (
                    <React.Fragment key={i}>
                      <p>{txt}</p>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          );
        } else {
          return (
            <div className="row" key={index}>
              <div className={`col-sm-${textSize} text`}>
                {content.text.map(function(txt, i) {
                  return (
                    <React.Fragment key={i}>
                      <p>{txt}</p>
                    </React.Fragment>
                  );
                })}
              </div>
              <div className={`col-sm-${imageSize} offset-sm-1  img`}>
                <Carousel
                  showThumbs={false}
                  autoPlay={true}
                  infiniteLoop={true}
                >
                  {content.imgs.map(function(img, j) {
                    return (
                      <div>
                        <img
                          src={require(`../imgs/confucius/${img}.png`)}
                          key={j}
                        />
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
