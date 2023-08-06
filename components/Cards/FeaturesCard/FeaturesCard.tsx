import useStyles from './FeaturesCard.styles'

import { Text, Card, rem } from '@mantine/core'
import { TablerIconsProps } from '@tabler/icons-react'

type Props = {
    title: string
    description: string
    Icon: (props: TablerIconsProps) => JSX.Element
}

export default function FeaturesCard({ title, description, Icon }: Props) {
    const { classes, theme } = useStyles()

    return (
        <Card key={title} shadow="md" radius="md" className={classes.card} padding="xl">
            <Icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} />
            <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
                {title}
            </Text>
            <Text fz="sm" c="dimmed" mt="sm">
                {description}
            </Text>
        </Card>
    )
}
