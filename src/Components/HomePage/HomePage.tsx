import React from 'react'
import Header from '../Header/Header';
import style from './HomePage.module.css';
import Card from '../Card/Card';
import Hero from '../Hero/Hero';
import NavBar from '../NavBar/NavBar';

const HomePage = (props:any) => {
    return (
      <React.Fragment>
        <section className={style.contentContainer}>
            <section className={style.heroContainer}>
                <Hero/>
            </section>
          
            <div className={style.grid}>
                    {props.news.map((item:any)=>
                      {
                      return(<Card key={item.id} title={item.title} date={item.event_date_utc} details={item.details} wikiLink= {item.links.wikipedia}></Card>)
                      })
                    }
                  </div>
            </section>
      </React.Fragment>
    )
}

export default HomePage
