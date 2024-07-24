import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import SongImg from "../../assets/song_card.png"
import styles from './CardStyle.module.css';
import Chip from '@mui/material/Chip';


function CardStyle({eachalbum,title}) {
  console.log(title)

  return (
    <div style={{height:'232px',width:'159px'}}>
      <Card sx={{ height: '205px', width: '159px', borderRadius: '15px' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height='170px'

            image={eachalbum.image}
            sx={{ borderRadius: '10px 10px 0px 0px' }}
            alt="green iguana"

          />
          <CardContent sx={{padding:'5px'}} >
            {title==="Songs"? <Chip label={eachalbum.likes+" Likes"} sx={{ backgroundColor: 'var(--color-black)', color: 'var(--color-white)',
               fontFamily: 'Poppins',
                margin:'1.5px',
                 height: '23px', width: '95px', left: '6px' ,fontWeight:'400',fontSize:'10px',lineHeight:'15px',gap:'1px'}} />:
                 <Chip label={eachalbum.follows+" Follows"} sx={{ backgroundColor: 'var(--color-black)', color: 'var(--color-white)',
                  fontFamily: 'Poppins',
                   margin:'1.5px',
                    height: '23px', width: '95px', left: '6px' ,fontWeight:'400',fontSize:'10px',lineHeight:'15px',gap:'1px'}} />
                 }
            

          </CardContent>
         
        </CardActionArea>
      </Card>
      <Typography sx={{fontFamily:'Poppins',fontWeight:'400',fontSize:'14px',lineHeight:'21px',width:'105px',height:'21px',marginTop:'6px'}}>
      {eachalbum.title}
      </Typography>
      
    </div>
  );
}

export default CardStyle;