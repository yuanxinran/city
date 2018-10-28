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
            imgAlign: "right",
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
    img: "president",
    cutoff: 7,
    years: ["Ming&Qing", "1910~1950", "Now"],
    periods: [
      {
        _id: 0,
        year: "Ming&Qing",
        contents: [
          {
            imgs: ["1"],
            cutoff: 4,
            text: [
              "In the Ming Dynasty, this house was to the west of the Ming Palace, built by a duke. In the Qing Dynasty, it became the Office of the Viceroy of Two Lower Yangtze Provinces, the chief government official in charge of what is today Jiangsu, Shanghai, Anhui and Jiangxi. When Qianlong visited the Lower Yangtze, he chose this office to be the detached palace together with the Imperial Silk House. Today, 'Daxinggong' (lit. the Great Detached Palace) Station of Nanjing Metro Line 2 is named after it.",
              "In 1853, Taiping Revolution forces led by Hong Xiuquan occupied Nanjing. The palace was expanded and converted into a luxurious palace for Hong, called the Palace of the Heavenly King, or the Celestial Palace.In 1864, Qing imperial forces re-took Nanjing. Commander Zeng Guofan ordered to destroy most of the palace by fire. He had a new palatial residence in 1870 and later imposing government buildings for the Qing Governor-General erected in the Neoclassical style, and in accordance with contemporary protocol."
            ]
          }
        ]
      },
      {
        _id: 1,
        year: "1910~1950",
        contents: [
          {
            imgs: ["2"],
            cutoff: 4,
            text: [
              "After the Xinhai Revolution in 1911, Sun Yat-sen was sworn in at the former Governor-General's palace, now the 'Provisional Presidential Palace', as the provisional President of the Republic of China. He kept offices here for a while.",
              "However, China soon fell into the post-revolution Warlord era, and the Palace was not officially used by the Republic of China until 1927, when the Northern Expedition of Kuomintang (KMT) captured Nanjing. As the Nationalist Government, they transformed the Presidential Palace and adjacent buildings into the Headquarters of the Nationalist Government of the Republic of China. Premier Chiang Kai-shek had his office in the palace."
            ]
          },
          {
            imgs: ["3"],
            cutoff: 4,
            imgAlign: "right",
            text: [
              "During the Second Sino-Japanese War (1937–1945), Chiang Kai-shek's government fled to Chungking, and the Headquarters was occupied by Wang Jingwei, who collaborated with the invading Japanese. Following the Japanese surrender in 1945, Chiang Kai-shek's Nationalist Government reoccupied the Headquarters—Presidential Palace for governing the Republic of China. In 1947, the Constitution of the Republic of China was promulgated. and the 'Headquarters of the Nationalist Government of the Republic of China' was renamed the 'Presidential Palace.",
              "n April 1949, near the end of the Chinese Civil War, the Communist forces captured Nanjing and the Presidential Palace. Chiang Kai-shek's government fled to Taipei, Taiwan and Mao Zedong declared the establishment of the People's Republic of China with capital in Beijing on 1 October 1949. The Presidential Palace building was then used for Jiangsu Provincial Government and functions of the Presidential Palace were moved to Presidential Office Building in Taipei."
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
            cutoff: 4,
            text: [
              "The Presidential Palace is composed of three areas: the Central Area, the West Area and the East Area. The Office of the President and its affiliated institutions are in the Central Area. In the West Area are the offices of the provisional president Sun Yat-sen, the secretariat, thechiefs of staff and Xiyuan Garden. In the East Area are thesite of the Executive Department, the stables and the East Garden."
            ]
          },
          {
            imgs: ["5", "8", "10"],
            cutoff: 4,
            text: [
              "Office of Provisional President",
              "Facing south, the Western-style yellow bungalow is in a typical Italian renaissance style, and it served as the office of the provisional president, Sun Yat-sen, from January to April,1912."
            ]
          },
          {
            imgs: ["6", "7", "11"],
            cutoff: 4,
            text: [
              "Xiyuan Garden",
              "It was a private garden of the Governor General of Jiangnan and Jiangxi Provinces in the Qing Dynasty (1644-1911), which was expanded during the Taiping Heavenly Kingdom (1851-1864). The ‘living room’ of Sun Yat-sen is in the garden."
            ]
          }
        ]
      }
    ]
  },
  {
    _id: 3,
    name: "Bao'en Temple",
    img: "baoen",
    years: ["1400s", "1850s", "Now"],
    cutoff: 6,
    periods: [
      {
        _id: 0,
        year: "1400",
        contents: [
          {
            imgs: ["1"],
            cutoff: 3,
            text: [
              "During the reign of Emperor Yongle of the Ming Dynasty a most grand and extraordinary building was created in Nanjing -- the Glazed Pagoda of Grand Bao'en Temple, once the most illustrious building in China's architectural history. It was considered one of the greatest wonders from the middle ancient times in the world.",

              "The Glazed Pagoda, an important part of the temple, was constructed under the direct instruction of Emperor Chengzu, whose name was Zhu Li, of the Ming Dynasty."
            ]
          },
          {
            imgs: ["2"],
            cutoff: 3,
            imgAlign: "right",
            text: [
              "More than one hundred thousand soldiers and laborers took part in the project. Construction lasted ten years, from 1412 to 1422. When construction was completed, the halls and chambers of the temple looked like the imperial palace. Sacrificial-offering ceremonies were conducted in Gongfei Hall (Tribute to the Imperial Concubine) by the Ministry of Protocol every year. At other times the hall was closed and nobody was allowed to enter it."
            ]
          }
        ]
      },
      {
        _id: 1,
        year: "1400",
        contents: [
          {
            imgs: ["6"],
            cutoff: 4,
            text: [
              " In the 1850s, the area surrounding the tower erupted in civil war as the Taiping Rebellion reached Nanjing and the rebels took over the city. They smashed the Buddhist images and destroyed the inner staircase to deny the Qing enemy an observation platform. American sailors reached the city in May 1854 and visited the hollowed tower. In 1856, the Taiping destroyed the tower either in order to prevent a hostile faction from using it to observe and shell the city[8] or from superstitious fear of its geomantic properties.[9] After this, the tower's remnants were salvaged for use in other buildings, while the site lay dormant until a recent surge to try to rebuild the landmark."
            ]
          }
        ]
      },
      {
        _id: 2,
        year: "1400",
        contents: [
          {
            imgs: ["5"],
            cutoff: 4,
            text: [
              "Discovery of Gautama Buddha’s skull",
              "Fast-forward to 2007, when archaeologists were first granted permission to excavate the temple ruins. A year into the process, an immense discovery was made: Amongst many treasured and holy relics, scientists unearthed an elaborate golden box that was said to contain a piece of the Gautama Buddha’s skull."
            ]
          },
          {
            imgs: ["4"],
            cutoff: 5,
            imgAlign: "right",
            text: [
              "The temple was reconstructed in 2010. The new tower was built with steel beams and offers great views of the city. Like the original, the pagoda has nine stories, each of which serve as viewing platforms accessible by an inner staircase or an elevator.",
              "From these vantage points, the city's many layers of history are visible. The City Wall, a circular fortification and defensive complex built in the Ming dynasty, can be seen snaking through the city alongside neighborhoods with Republican-era housing and modern skyscrapers. The Qinhuai and Yangtze Rivers, which have long nurtured Nanjing's trade and culture, can also be viewed. The temple area is near the Gate of China, which served as the former capital's southern gate and grand entrance of the City Wall."
            ]
          }
        ]
      }
    ]
  },
  {
    _id: 4,
    name: "Jiming Temple",
    img: "jiming",
    years: ["Ming Dynasty", "Now"],
    cutoff: -1,
    periods: [
      {
        _id: 0,
        year: "Ming",
        contents: [
          {
            imgs: ["9"],
            cutoff: 4,
            text: [
              "A temple has existed on this site since 300 A.D. Although the temple has changed names almost as many times as Nanjing has changed rulers, the name Ji Ming (Rooster Crowing) has stuck since its last name change in 1387 (during the early Ming Dynasty). Legend has it that when the emperor of the Southern Tang, and his concubines, hid themselves in the well, in order to escape the enemy, the stains of rouge were left on the wall of the well, and hence its name."
            ]
          }
        ]
      },
      {
        _id: 1,
        year: "Now",
        contents: [
          {
            imgs: ["7"],
            cutoff: 12,
            text: [
              "Jiming Temple has become one of the most famous tourist attractions in Nanjing. Within the temple are Guanyin Hall (观音殿), Huomeng Building (豁蒙楼), and the Medicine Buddha Pagoda (Chinese: 药师佛塔). The Rouge Well (胭脂井), got its name from a legend that the emperor of the Southern Tang Dynasty and his concubine hid themselves in the well to escape enemy pursuit. The stains of rouge were left on the well: hence the name of Rouge Well."
            ]
          },
          {
            imgs: ["3"],
            cutoff: 5,
            text: ["The place is famous for the cherry blossom in the spring. "]
          },
          {
            imgs: ["5"],
            cutoff: 5,
            imgAlign: "right",
            text: [
              "Jiming Temple has become one of the most popular places to go on the first day of the New Year. People go to the Jiming temple to offere their incence and worship to the buddha.  They ring the bell to pray for happiness and well-being in the new year. "
            ]
          }
        ]
      }
    ]
  },
  {
    _id: 5,
    name: "Xiaoling Mausoleum",
    img: "ming",
    years: ["1300s", "Now"],
    cutoff: -1,
    periods: [
      {
        _id: 0,
        year: "1300s",
        contents: [
          {
            imgs: ["1"],
            cutoff: 3,
            text: [
              "Xiaoling is the mausoleum of the first Ming Dynasty emperor Zhu Yuanzhang. It is one of the largest imperial mausoleums existing in China, as a historical monument put under state protection.",
              "Zhu titled his dynasty Ming, under the reigning title of Hong Wu. Construction of the Xiaoling mausoleum took five years. The year of 1381 during the Hong Wu reign saw its completion. The next year, Empress Ma, the consort of Zhu Yuanzhang was buried there. She was posthumously honored as Xiao Ci and for this the mausoleum was named Xiaoling. In the l6th year of the Hong Wu reign, adding to the structures of Xiaoling was a large temple hall built which had earned Li Xin, an official in charge of the construction work, a promotion.",
              "In the 25th year of the Hong Wu reign (1392), Zhu Biao, the crown prince was buried in the eastern area of the Xiaoling, known as Dongling, or Eastern Mausoleum. In the 31st year of Hong Wu (1398), Zhu Yuanzhang was buried in the Xiaoling. Such Xiaoling peripheral tomb projects lasted to the 3rd year of the Yongle reign (1405). A 'Tablet of the Divine Merit and Sage Virtue of Xiaoling of the Great Ming' was the final project. Xiaoling construction spanned thirty years."
            ]
          }
        ]
      },
      {
        _id: 1,
        year: "Now",
        contents: [
          {
            imgs: ["3"],
            cutoff: 4,
            text: [
              "Along with the Ming Tombs north of Beijing, the Ming Xiaoling Mausoleum of Nanjing was inscribed by UNESCO as part of the World Heritage Sites 'Imperial Tombs of the Ming and Qing Dynasties'"
            ]
          },
          {
            imgs: ["4"],
            cutoff: 4,
            imgAlign: "right",
            text: [
              "Great golden gate and Square city",
              "Da Jin Men and Sifangcheng. One enters the site through the monumental Great Golden Gates (Da Jin Men), and is soon faced by a giant stone tortoise (bixi), which resides in the Sifangcheng ('Square city') pavilion. The tortoise supports a splendid carved stone stele, crowned by intertwining hornless dragons. The well-preserved stele is known as the 'Shengong Shengde Stele', i.e., literally, 'The Stele of Godly Merit and Saintly Virtue'. The inscription of the stele, extolling the merits and virtues of the Hongwu Emperor Zhu Yuanzhang was written by his fourth son, the Yongle Emperor. The tortoise is 5.15 m long, 2.54 m wide and 2.8 m tall,[2] the stele stands 8.78 m tall (including the tortoise) and is one of the best-known examples of its genre."
            ]
          },
          {
            imgs: ["5"],
            cutoff: 12,
            text: [
              "The Sacred Way",
              "The Sacred Way is an 1800-metre-long road at the Nanjing city Government site. The winding Sacred Way (Shendao) starts near the Sifangcheng pavilion. It includes several sections: the Elephant Road and the Wengzhong Road. The Elephant Road is lined by 12 pairs of 6 kinds of animals (lions, xiezhi, camels, elephants, qilin, and horses), guarding the tomb. Beyond them is a column called huabiao in Chinese. One then continues along the Wengzhong Road. Four pairs of ministers and generals (or warrior guardian figures, wengzhong) of stone have been standing there for centuries to guard the journey to the after life."
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
  var item = getPlace(itemid);
  var period = getPlacePeriod(itemid, index);
  return (
    <div className="period ">
      {period.contents.map(function(content, index) {
        if (content.cutoff == 12) {
          return (
            <div className="row" key={index}>
              <div className={`col-sm-12 img`}>
                <Carousel
                  showThumbs={false}
                  // autoPlay={true}
                  infiniteLoop={true}
                >
                  {content.imgs.map(function(img, j) {
                    return (
                      <div>
                        <img
                          src={require(`../imgs/${item.img}/${img}.png`)}
                          key={j}
                        />
                      </div>
                    );
                  })}
                </Carousel>
              </div>
              <div className={`col-sm-12 text`} style={{ marginTop: "40px" }}>
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
        }
        var imageSize = content.cutoff;
        var textSize = 11 - content.cutoff;
        if (content.imgAlign != "right") {
          return (
            <div className="row" key={index}>
              <div className={`col-sm-${imageSize} img`}>
                <Carousel
                  showThumbs={false}
                  // autoPlay={true}
                  infiniteLoop={true}
                >
                  {content.imgs.map(function(img, j) {
                    return (
                      <div>
                        <img
                          src={require(`../imgs/${item.img}/${img}.png`)}
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
                  // autoPlay={true}
                  infiniteLoop={true}
                >
                  {content.imgs.map(function(img, j) {
                    return (
                      <div>
                        <img
                          src={require(`../imgs/${item.img}/${img}.png`)}
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
