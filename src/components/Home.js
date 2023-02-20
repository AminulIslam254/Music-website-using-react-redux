import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setProducts} from './redux/actions/ProductActions.js'

const Home = () => {

    const products=useSelector((state)=>state);
    console.log("products : "+products);
    const dispatch=useDispatch();

    const [musicData, setMusicData] = useState([]);


    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/charts/track',
        params: {locale: 'en-US', pageSize: '20', startFrom: '0'},
        headers: {
          'X-RapidAPI-Key': '4207619a63msh51012b55d8e5987p1ec80cjsne2c8759ceb36',
          'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
      };

    const handleData = async () => {
        await axios.request(options).then(function (response) {
            const {tracks}=(response.data);
            console.log(tracks);
            setMusicData(tracks);
        }).catch(function (error) {
            console.error(error);
        });
    }

    useEffect(() => {


        handleData();



    }, []);


    const handleClick=(e)=>{
        console.log(e.target);
        dispatch(setProducts(e.target));
    }



    return (
        <>

        {
            (musicData.length===0)?(
                    <></>
            ):(
                <>
                
                {
                    musicData.map((item,index)=>(
                        <div key={item.key} onClick={handleClick}>
                            <img src={item.images.coverart} alt="" />
                        </div>
                    ))
                }
                
                </>
            )
        }

        </>
    )
}

export default Home