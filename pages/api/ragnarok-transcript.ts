import { writeFileSync } from 'fs';
import { join } from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import { load } from 'cheerio';

const key = process.env.TicketTranscriptKey;

async function authenticateRequest(req: NextApiRequest): Promise<boolean> {
    const secretKey = req.headers['x-secret-key'];
    return !!secretKey && secretKey === key;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    try {
        const authenticated = await authenticateRequest(req);
        if (!authenticated) {
            res.status(401).send(JSON.stringify({ error: 'Invalid or missing secret key' }, null, 2));
            return;
        }

        if (req.method === 'POST') {
            const transcript = req.body;
            const $ = load(transcript);
            const title = $('title').text();
            const filePath = join(process.cwd(), 'transcripts', `${title}.html`);

            writeFileSync(filePath, transcript);
            res.status(200).send(JSON.stringify({ message: 'Transcript saved successfully' }, null, 2));
        } else {
            res.status(405).send(JSON.stringify({ error: 'Method not allowed' }, null, 2));
        }
    } catch (error) {
        res.status(500).send(JSON.stringify({ error: 'Failed to process request' }, null, 2));
    }
}
