import { Grid, Container, Text } from '@mantine/core';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React, { useEffect, useState, useCallback } from 'react';
import useStyles from '../../components/Team/Team.styles';
import { UserInfoAction } from '../../components/Team/Team';

type StaffMember = {
  name: string;
  email: string;
  description: string;
  pfp: string;
  position: string;
}

const useMediaQuery = (width: number) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e: { matches: boolean; }) => {
        if (e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false);
        }
    }, []);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`);
        media.addEventListener('change', updateTarget);

        // Check on mount (callback is not called until a change occurs)
        if (media.matches) {
            setTargetReached(true);
        }

        return () => media.removeEventListener('change', updateTarget);
    }, []);

    return targetReached;
};

export const getServerSideProps: GetServerSideProps<{
    staffMembers: StaffMember[]
}> = async () => ({
    props: {
        staffMembers: [
            {
                name: 'Ragnar',
                email: 'ragnarlothbrokjr@proton.me',
                description:
                    'As the founder of Valhalla Development, I believe in the power of community collaboration. I started this journey with a goal of uniting everyone to contribute to our projects. I\'m proud to lead a team that shares this vision, as we work together on innovative solutions.',
                pfp: 'https://avatars.githubusercontent.com/u/30740511',
                position: 'Founder | Head Developer',
            },
            {
                name: 'zeen',
                email: 'mrdennis1212@pm.me',
                description: 'zeen is the other dude who bugs ragnar to do stuff',
                pfp: 'https://avatars.githubusercontent.com/u/46864390',
                position: 'Developer',
            },
            {
                name: 'iMidnight',
                email: 'mohaidarus@gmail.com',
                description: 'Uhh I\'m a developer and I like to code stuff i guess idk',
                pfp: 'https://avatars.githubusercontent.com/u/68955155',
                position: 'Developer',
            },
            {
                name: 'DanelSonic123',
                email: 'danelsonic123@serverargentina.com',
                description: '"no about" - DanelSonic123 when asked for an \'About Me\' description.',
                pfp: 'https://avatars.githubusercontent.com/u/18649687',
                position: 'System Administrator',
            },
        ],
    },
});

export default function Team({ staffMembers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const isBreakpoint = !useMediaQuery(575);
    const { classes } = useStyles();

    return (
        <Container className={classes.container}>
            <Grid>
                {staffMembers.map((staffMember, index) => (
                    index % 2 === 1 && isBreakpoint ? (
                        <React.Fragment key={index}>
                            <Grid.Col xs={4}>
                                <UserInfoAction
                                    avatar={staffMember.pfp}
                                    email={staffMember.email}
                                    job={staffMember.position}
                                    name={staffMember.name}
                                    key={`${staffMember.name.toLowerCase()}Team`}
                                />
                            </Grid.Col>
                            <Grid.Col xs={8}>
                                <Text className={classes.body} size="sm">
                                    {staffMember.description}
                                </Text>
                            </Grid.Col>
                        </React.Fragment>
                    ) : (
                        <React.Fragment key={index}>
                            <Grid.Col xs={8}>
                                <Text className={classes.body} size="sm">
                                    {staffMember.description}
                                </Text>
                            </Grid.Col>
                            <Grid.Col xs={4}>
                                <UserInfoAction
                                    avatar={staffMember.pfp}
                                    email={staffMember.email}
                                    job={staffMember.position}
                                    name={staffMember.name}
                                    key={`${staffMember.name.toLowerCase()}Team`}
                                />
                            </Grid.Col>
                        </React.Fragment>
                    )
                ))}
            </Grid>
        </Container>
    );
}
