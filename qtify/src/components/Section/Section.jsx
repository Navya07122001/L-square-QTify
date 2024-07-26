import { Typography } from '@mui/material';
import React, { useState,useEffect } from 'react';
import styles from './Section.module.css'
import CardStyle from '../CardStyle/CardStyle';
import Grid from '@mui/material/Grid';
import CarouselSection from '../CarouselSection/CarouselSection';
import Tabs from '../TabSection/TabSection';
import { SongsData } from '../../api/api';
function Section({ title, albums }) {
    const [toggle, setToggle] = useState(true);
    const [data,setData]=useState([])
    const [value,setValue]=useState("all")
    const [filterdata,setfilterdata]=useState([]);

    const toggleButton = () => {
        setToggle((toggle) => !toggle);
    }
    const handleChange = (event,newValue) => {
        console.log(newValue)
        if(newValue=="all")
        {
            console.log(data)
            
            setfilterdata(data)
            return;
        }

        setValue(newValue);
        const filtereddata=data.filter((ele)=>ele.genre.key==newValue)
        console.log(filtereddata)
        setfilterdata(filtereddata)
    
      };
    const getSongs=async()=>{
        try{
        const data=await SongsData();
        setData(data)
        setfilterdata(data)
        }
        catch(e){
          return e;
        }
      }
    useEffect(()=>{
        getSongs();
    },[])
     return (
        <div>
            <div className={styles.frame}>
                <div className={styles.design}>
                    <p className={styles.text1}>{title}</p>
                    {title !== 'Songs' ? (
    toggle ? (
        <p className={styles.text} onClick={toggleButton}>Show All</p>
    ) : (
        <p className={styles.text} onClick={toggleButton}>Collapse</p>
    )
) : null}


                </div>
                {title != "Songs" ?
                    !toggle ? (<Grid container spacing={4.5} sx={{ marginLeft: '10px', marginBottom: '25px', paddingLeft: '0px', paddingRight: '25px' }}>
                        {
                            albums.map((eachalbum) => {
                                return (
                                    <Grid item>
                                        <CardStyle eachalbum={eachalbum} name={title} />
                                    </Grid>
                                )
                            }
                            )
                        }
                    </Grid>) : (<><CarouselSection albums={albums} name={title} /></>)

                    : (
                        <>
                            <Tabs handleChange={handleChange} value={value} />
                            <CarouselSection albums={filterdata} name={title}  />
                        </>
                    )}

                <hr style={{ backgroundColor: '#34c94b', height: '1px', border: 'none' }} />
            </div>

        </div>
    );
}

export default Section;