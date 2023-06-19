import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

export function ColorSchemeToggle() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    return (
        <Group position="center">
            <ActionIcon
                onClick={() => toggleColorScheme()}
                size="xl"
                sx={(theme) => ({
                    backgroundColor: 'transparent',
                    color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
                    '&:hover': {
                        backgroundColor: 'transparent',
                    },
                })}
            >
                {colorScheme === 'dark' ? (
                    <IconSun size={20} stroke={1.5} />
                ) : (
                    <IconMoonStars size={20} stroke={1.5} />
                )}
            </ActionIcon>
        </Group>
    );
}
