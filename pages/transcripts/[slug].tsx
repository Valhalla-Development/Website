import React from 'react';
import fs from 'fs';
import path from 'path';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { Paper } from '@mantine/core';
import useStyles from './Transcripts.styles';

interface TranscriptProps {
    html: string;
}

export default function Transcript({ html }: TranscriptProps) {
    const { classes } = useStyles();

    return (
        <Paper className={classes.container}>
            <iframe srcDoc={html} className={classes.iframe} />
        </Paper>
    );
}

function getSlug(context: GetServerSidePropsContext) {
    if (!context.params || !context.params.slug) {
        return null;
    }

    const { slug } = context.params;

    return Array.isArray(slug) ? slug[0] : slug;
}

function getFilepath(slug: string) {
    return path.join(process.cwd(), 'transcripts', `${slug}.html`);
}

function getHtml(filepath: string) {
    if (!fs.existsSync(filepath)) {
        return null;
    }

    return fs.readFileSync(filepath, 'utf8');
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const slug = getSlug(context);

    if (!slug) {
        return { notFound: true };
    }

    const filepath = getFilepath(slug);
    const html = getHtml(filepath);

    if (!html) {
        return { notFound: true };
    }

    return { props: { html } };
};
