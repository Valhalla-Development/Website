import { UserInfoAction } from "../../components/Team/Team";
import { Grid, Skeleton, Container, Group, Text } from "@mantine/core";
import useStyles from "../../components/Team/Team.styles";

const child = <Skeleton height={140} radius="md" animate={false} />;

export default function Team() {
  const { classes, cx } = useStyles();
  return (
    <Container className={classes.container}>
      <Grid>
        <Grid.Col xs={4}>
          <UserInfoAction
            avatar={
              "https://cdn.discordapp.com/avatars/151516555757223936/e4f075a62b5e2719c356ef1be855fa9f.webp?size=2048"
            }
            email={"ragnarlothbrokjr@proton.me"}
            job={"Head Developer"}
            name={"Ragnar"}
            key={"ragnarTeam"}
          />
        </Grid.Col>
        <Grid.Col xs={8}>
          <Text className={classes.body} size="sm">
            Ragnar is the head developer of Valhalla Development. He is the one
            goat
          </Text>
        </Grid.Col>
        <Grid.Col xs={8}>
          <Text className={classes.body} size="sm">
            zeen is the other dude who bugs ragnar to do stuff
          </Text>
        </Grid.Col>
        <Grid.Col xs={4}>
          <UserInfoAction
            avatar={
              "https://cdn.discordapp.com/avatars/424868316398747648/b3b48b0676f3dc322f5b9bfd48e2ce8b.webp?size=2048"
            }
            email={"mrdennis1212@pm.me"}
            job={"Developer"}
            name={"zeen"}
            key={"zeenTeam"}
          />
        </Grid.Col>
        <Grid.Col xs={4}>
          <UserInfoAction
            avatar={
              "https://cdn.discordapp.com/avatars/1018927667174723615/9cbf220816cd2b4000249a099c1809ce.webp?size=2048"
            }
            email={"danelsonic123@serverargentina.com"}
            job={"System Administrator"}
            name={"DanelSonic123"}
            key={"DanelSonic123Team"}
          />
        </Grid.Col>
        <Grid.Col xs={8}>
          <Text className={classes.body} size="sm">
            That guy thats maintaining the servers
          </Text>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
