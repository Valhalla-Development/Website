import {
    useState, useRef, useCallback, MouseEvent,
} from 'react';
import { Paper } from '@mantine/core';
import useStyles from './ParallaxCard.styles';

type Props = {
    title: string;
    description: string;
    image: string;
}

export default function ParallaxCard({ title, description, image }: Props) {
    const [cardTransform, setCardTransform] = useState('');
    const [gradientAngle, setGradientAngle] = useState(325);
    const [shine, setShine] = useState({ x: 0, y: 0 });
    const [transitionStyle, setTransitionStyle] = useState('');

    const cardRef = useRef<HTMLDivElement | null>(null);
    const { classes } = useStyles();

    const handleMouseMoveCard = useCallback((e: MouseEvent<HTMLDivElement>) => {
        setTransitionStyle('');
        if (!cardRef.current) return;
        const rect = cardRef.current?.getBoundingClientRect();
        const x = (rect.width / 2 - (e.clientX - rect.left)) / -20;
        const y = (rect.height / 2 - (e.clientY - rect.top)) / -20;
        const angle = Math.atan2(y, x) * (180 / Math.PI);

        setCardTransform(`rotateY(${x}deg) rotateX(${y}deg)`);
        setGradientAngle(angle);
        setShine({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }, []);

    const handleMouseLeaveCard = useCallback(() => {
        setCardTransform('');
        setShine({ x: 0, y: 0 });
        setTransitionStyle('transform 0.5s ease, backgroundImage 0.5s ease');
    }, []);

    const cardStyles = {
        transform: cardTransform,
        transition: transitionStyle,
        backgroundImage: `radial-gradient(circle at ${shine.x}px ${shine.y}px, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 40%, transparent 70%)`,
    };

    return (
        <div className={classes.container}>
            <Paper
                className={classes.card}
                style={cardStyles}
                onMouseMove={handleMouseMoveCard}
                onMouseLeave={handleMouseLeaveCard}
                ref={cardRef}
            >
                <div className={classes.backgroundOverlay} style={{ background: `linear-gradient(${gradientAngle}deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(255, 255, 255, 0.7) 100%)` }}/>
                <img
                    className={classes.cardImage}
                    src={image}
                    alt={title}
                />
                <h3 className={classes.cardTitle}>{title}</h3>
                <hr className={classes.divider} style={{ background: `linear-gradient(90deg, rgba(255, 255, 255, 0.5) ${gradientAngle}%, rgba(255, 255, 255, 0) 100%)` }}/>
                <p className={classes.cardText}>{description}</p>
            </Paper>
        </div>
    );
}
