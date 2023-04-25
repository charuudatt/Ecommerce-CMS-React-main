import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../Footer/MainFooter';
import Header from '../Header/Header';
import Item from '../Item/Item';
import "./Main.css"
const Main = ()=> {
    const [Games, setgames] = useState([]);
    const [fangear, setfangear] = useState([]);
    useEffect(()=> {
        axios.get('http://localhost:1337/api/games?populate=*').then((response)=> {
            setgames(response.data.data)
        }).catch((err)=> {
          console.log(err)
        })

        axios.get('http://localhost:1337/api/fangears?populate=*').then((response)=> {
            setfangear(response.data.data)
        }).catch((err)=> {
          console.log(err)
        })
    }, [])
    return (
        <>
        <div className='container-main'>
            <Header/>
            <section>
                <h1>Fan Gears</h1>
                <div className='Games'>
                {Games.map((item, key)=> {
                    return <Item key ={key} title={item.attributes.title} description = {item.attributes.description} price={item.attributes.price} image={item.attributes.image}/>
                })}
                </div>
                <div className='FanGears'>
                <h1>Games </h1>
                {fangear.map((item, key)=> {
                    return <Item key ={key} title={item.attributes.title} description = {item.attributes.description} price={item.attributes.price} image={item.attributes.image}/>
                })}
                </div>
            </section>
           
        </div>
        <Footer/>
        </>
    )
}
export default Main