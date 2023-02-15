import { Card } from './Card';
import image from '../../pictures/weeknd.png'
import { useEffect, useState } from 'react';

export const Main = function () {
    const [musicians, setMusicians] = useState([]);

    async function getNames() {
        let names = await getTopArtists();
        let arr = [];
        if (names === undefined)
            return;
        for(let i = 0; i < 10; i++){
            arr.push({key: i, name: names[i], pic: image});
        }
        return arr;
    }

    useEffect(() => {
        async function subFunc() {
            let arr = await getNames();
            setMusicians(arr);
        }
        subFunc();
    }, []);

    return (
        <>
    <main className = "content">
        <div className="header-background">
        <div className="header-billboard">
          <div className="header-info">
            <h1 className="billboard-title">Посмотри рейтинг музыки, составленный на основе того, 
              что ты слушаешь 
            </h1>
            <p className="dashboard-intro">
              Мы собрали на одной платформе все твои любимые 
              музыкальные сервисы — слушай, смотри, общайся. 
            </p>
            <p className = "dashboard-intro-2">
              Ниже в визуальной форме представлены тенденции и музыкальные 
                предпочтения глобального сообщества Last.fm, 
                обновляемые в режиме реального времени. Изучай. 
            </p>
          </div>
        </div>
      </div>
    </main>
    <div className = 'popular_musicians'>
    <h2 className = 'h2_popular_musicians'>Перспективные исполнители</h2>
    <div className = 'intro_popular'>
      <strong>Эти исполнители особенно популярны на Last.fm</strong>
      <br/>
      Щелкни по названию, чтобы узнать об этом исполнителе и о похожих музыкантах
    </div>
    <div className = 'round_musicians_list'>
      { musicians.map((a) => {
                    return <Card key={a.key} name={a.name} picture_link={a.pic}/>
                }) }
    </div>
  </div>
  </>
    )
}

async function getJson(url){
    try {
        const response = await fetch(url);
        if (response.status === 200) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(`response status: ${response.status}`);
        }
    } catch (err){
        console.error(err);
    }
}

export async function getTopArtists(){
    try{
        let data = await getJson(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=680220124a053662083b7a810df64bdb&format=json`),
            chart = [];
        for (let i = 0; i < 10; i++){
            chart.push(data.artists.artist[i].name);
        }
        return chart;
    } catch (err) {
        console.error(err);
    }
}
