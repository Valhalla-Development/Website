import { FC } from 'react';
import { Card } from '@mantine/core';
import Tilt from 'react-parallax-tilt';
import useStyles from './ParallaxCard.styles';

type Data = {
    title: string;
    description: string;
    image: string;
};

export const ParallaxCard: FC<Data> = ({ title, description, image }) => {
    const { classes } = useStyles();

    return (
        <div className={classes.cardWrapper}>
            <Tilt
                tiltMaxAngleY={14}
                tiltMaxAngleX={14}
                glareEnable={true}
                glareMaxOpacity={0.1}
                glareColor='#C0C0C0'
                glarePosition='all'
                glareReverse={true}
                scale={1.02}
            >
                <Card className={classes.cardContainer}>
                    <img src={image} alt={title} className={classes.cardImage} />
                    <h3 className={classes.cardTitle}>{title}</h3>
                    <hr className={classes.divider} />
                    <p className={classes.cardText}>{description}</p>
                </Card>
            </Tilt>
        </div>
    );
};
