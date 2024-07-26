import React from 'react';
import styles from './AccordionStyle.module.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function AccordionStyle({ data }) {
    return (
        <div className={styles.layout}>
            <div className={styles.header}>FAQs</div>
            {
                data.map((ele, index) => {
                    const isLastIndex = index === data.length - 1;
                    return (
                        <Accordion
                            key={index}
                            sx={{ boxShadow: 'none', borderRadius: "10px", border: '1px solid white' }}
                            defaultExpanded={isLastIndex} 
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: 'var(--color-primary)', fontWeight: '900', fontSize: '40px' }} />}
                                aria-controls={`panel${index}-content`}
                                id={`panel${index}-header`}
                                sx={{ backgroundColor: 'black', color: 'white', borderRadius: '10px',height:'70px' }}
                            >
                                {ele.question}
                            </AccordionSummary>
                            <AccordionDetails sx={{ fontWeight: '500', fontSize: '18px' }}>
                                {ele.answer}
                            </AccordionDetails>
                        </Accordion>
                    );
                })
            }
        </div>
    );
}

export default AccordionStyle;
