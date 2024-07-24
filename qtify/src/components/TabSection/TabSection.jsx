import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styles from "./TabSection.module.css";
import { useState,useEffect } from 'react';


export default function TabSection({handleChange,value}) {

 
 
 

  return (
  
      <Box sx={{ width: '100%', marginBottom: "15px",padding:"0px" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          className={styles.tabitems}
          TabIndicatorProps={{ style: { backgroundColor:"var(--color-primary)" } }} // Ensure the indicator color is green
        >
          <Tab
            value="all"
            label="All"
            className={styles.tabitem}
            sx={{
              width: "auto",
              height: "24px",
              fontWeight: "600",
              fontSize: "16px",
              fontFamily:"Poppins",
              lineHeight: "24px",
              '&.Mui-selected': {
                color: 'white', // Color of the active tab text
              },
            }}
          />
          <Tab
            value="rock"
            label="Rock"
            className={styles.tabitem}
            sx={{
              width: "auto",
              height: "24px",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "24px",
              fontFamily:"Poppins",
              '&.Mui-selected': {
                color: 'white', // Color of the active tab text
              },
            }}
          />
          <Tab
            value="pop"
            label="Pop"
            className={styles.tabitem}
            sx={{
              width: "auto",
              height: "24px",
              fontWeight: "600",
              fontSize: "16px",
              fontFamily:"Poppins",
              lineHeight: "24px",
              '&.Mui-selected': {
                color: 'white', // Color of the active tab text
              },
            }}
          />
          <Tab
            value="jazz"
            label="Jazz"
            className={styles.tabitem}
            sx={{
              width: "auto",
              height: "24px",
              fontWeight: "600",
              fontFamily:"Poppins",              
              fontSize: "16px",             
              lineHeight: "24px",
              '&.Mui-selected': {
                color: 'white', // Color of the active tab text
              },
            }}
          />
          <Tab
            value="blues"
            label="Blues"
            className={styles.tabitem}
            sx={{
              width: "auto",
              height: "24px",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "24px",
              fontFamily:"Poppins",
              '&.Mui-selected': {
                color: 'white', // Color of the active tab text
              },
            }}
          />
        </Tabs>
      </Box>
  
  );
}
