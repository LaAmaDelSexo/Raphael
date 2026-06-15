import news from '../../../../public/json/news.json' with {type:"json"}

interface News {
  ID: string;
  date: string;
  content: string
}
const newsFeed:News[] = news.feed;

export function FeedRandomizer() {
  const selection: number = Math.floor(Math.random()*newsFeed.length)
  const feed =  newsFeed[selection]
  return feed
}