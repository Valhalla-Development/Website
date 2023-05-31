import { useState } from 'react';
import { Header, Container, Anchor, Group, Burger, rem, Image, useMantineColorScheme, Tooltip,
    ActionIcon, ActionIconProps } from '@mantine/core';
import useStyles, { headerHeight } from "./Header.styles";
import { useDisclosure } from '@mantine/hooks';
import { IconBrandDiscord, IconBrandGithub } from '@tabler/icons-react';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

interface IconProps extends ActionIconProps {
  label: string;
  icon: React.ReactNode;
  href: string;
}

const Icon = ({ label, icon, href, ...others }: IconProps) => (
    <Tooltip label={label}>
      <ActionIcon variant="transparent" {...others}>
        <a href={href} target="_blank" rel="noreferrer">
          {icon}
        </a>
      </ActionIcon>
    </Tooltip>
);

interface LinkProps {
  label: string;
  link: string;
}

interface CustomHeaderProps {
  mainLinks: LinkProps[];
}

export function CustomHeader({ mainLinks }: CustomHeaderProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();
  const [active, setActive] = useState(0);
  const { colorScheme } = useMantineColorScheme();
  const iconColor = colorScheme === 'dark' ? 'white' : 'black';

  const mainItems = mainLinks.map((item, index) => (
      <Anchor<'a'>
          href={item.link}
          key={item.label}
          className={cx(classes.mainLink, { [classes.mainLinkActive]: index === active })}
          onClick={(event) => {
            event.preventDefault();
            setActive(index);
          }}
      >
        {item.label}
      </Anchor>
  ));

  return (
      <Header height={headerHeight} mb={120}>
        <Container className={classes.inner}>
          <Image src='./favicon.svg' width='28' />
          <div className={classes.links}>
            <Group spacing={10} position="right" className={classes.mainLinks}>
              {mainItems}
              <div className={classes.iconContainer}>
                <Icon label="Discord" href="https://discord.gg/Q3ZhdRJ" icon={<IconBrandDiscord size="1.8rem" stroke={1.2} color={iconColor} />} />
              </div>
              <div className={classes.iconContainer}>
                <Icon label="GitHub" href="https://github.com/Valhalla-Development" icon={<IconBrandGithub size="1.8rem" stroke={1.2} color={iconColor} />} />
              </div>
                <ColorSchemeToggle />
            </Group>
          </div>
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
        </Container>
      </Header>
  );
}
