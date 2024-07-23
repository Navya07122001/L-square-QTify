import { Typography } from '@mui/material';
import React, { useState } from 'react';
import styles from './Section.module.css'
import CardStyle from '../CardStyle/CardStyle';
import Grid from '@mui/material/Grid';
import CarouselSection from '../CarouselSection/CarouselSection';
function Section({ title, albums }) {
    const [toggle, setToggle] = useState(true);
    const toggleButton = () => {
        setToggle((toggle) => !toggle);
    }


    return (
        <div>
            <div className={styles.frame}>
                <div className={styles.design}>
                    <p className={styles.text1}>{title}</p>
                    {toggle ? (<p className={styles.text} onClick={toggleButton} >Show All</p>
                    )
                        : (
                        <><p className={styles.text} onClick={toggleButton}>Collapse</p>                    
                </>
                        )}
                       
                </div>
                {
                            !toggle?(<Grid container spacing={4.5} sx={{ marginLeft: '10px', marginBottom: '25px',paddingLeft:'0px',paddingRight:'25px' }}>
                                {
                                    albums.map((eachalbum) => {
                                        return (
                                            <Grid item>
                                                <CardStyle eachalbum={eachalbum} name={title}  />
                                            </Grid>
            
                                        )
                                    }
                                    )
                                }
                            </Grid>):(<><CarouselSection albums={albums} name={title}/></>)
                          
                        }

<hr style={{ backgroundColor: '#34c94b', height: '1px', border: 'none' }} />
            </div>

        </div>
    );
}

export default Section;