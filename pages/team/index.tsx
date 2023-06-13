import { UserInfoAction } from "../../components/Team/Team";
import { Grid, Container, Text } from "@mantine/core";
import useStyles from "../../components/Team/Team.styles";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React, { useEffect, useState, useCallback } from "react";

type StaffMember = {
  name: string;
  email: string;
  description: string;
  pfp: string;
  position: string;
}

const useMediaQuery = (width: any) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: { matches: any; }) => {
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
                key={staffMember.name.toLowerCase() + "Team"}
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
                key={staffMember.name.toLowerCase() + "Team"}
              />
            </Grid.Col>
          </React.Fragment>
        )
      ))}
      </Grid>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps<{
  staffMembers: StaffMember[]
}> = async () => {
  return {
      props: {
        staffMembers: [
            {
              name: "Ragnar",
              email: "ragnarlothbrokjr@proton.me",
              description: "Ragnar is the head developer of Valhalla Development. He is the one goat",
              pfp: "https://cdn.discordapp.com/avatars/151516555757223936/e4f075a62b5e2719c356ef1be855fa9f.webp?size=2048",
              position: "Head Developer"
            },
            {
              name: "zeen",
              email: "mrdennis1212@pm.me",
              description: "zeen is the other dude who bugs ragnar to do stuff",
              pfp: "https://cdn.discordapp.com/avatars/424868316398747648/b3b48b0676f3dc322f5b9bfd48e2ce8b.webp?size=2048",
              position: "Developer"
            },
            {
              name: "DanelSonic123",
              email: "danelsonic123@serverargentina.com",
              description: `"no about" - DanelSonic123 when asked for an 'About Me' description.`,
              pfp: "https://cdn.discordapp.com/avatars/1018927667174723615/438a4b6ac24a9ea966bf4ba8d47c6bc0.webp?size=2048",
              position: "System Administrator"
            },
            {
              name: "iMidnight",
              email: "mohaidarus@gmail.com",
              description: "Uhh I'm a developer and I like to code stuff i guess idk",
              pfp: "https://cdn.discordapp.com/avatars/427534456169955352/fa2b09ac444227fc4a68dbbf18bfb3f8.webp?size=2048",
              position: "Rookie Web Dev",
            }
          ]
      }
  }
}