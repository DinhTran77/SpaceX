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

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit dolor qui cupiditate ratione sapiente eius dolore iure nulla expedita magni. Illum nobis iure accusantium cumque rem? Saepe est ipsum veritatis dolorem, et sapiente in, accusantium, praesentium omnis nihil eligendi iste odio rerum ad suscipit repellat rem deserunt earum blanditiis repellendus odit nobis! Necessitatibus odit nam quae provident delectus eveniet dicta, aliquam fugit officiis inventore reiciendis eaque ipsam perspiciatis neque quia enim nostrum quos voluptate error possimus eligendi iure commodi perferendis mollitia. Vero numquam facere quaerat eum velit consectetur molestiae, pariatur repellat in sapiente. Quasi blanditiis adipisci officia voluptate, eaque placeat!</p>
            
              {/* <div className={style.grid}>
                      {props.news.map((item:any)=>
                        {
                        return(<Card key={item.id} title={item.title} date={item.event_date_utc} details={item.details} wikiLink= {item.links.wikipedia}></Card>)
                        })
                      }
              </div> */}

        </section>
      </React.Fragment>
    )
}

export default HomePage
