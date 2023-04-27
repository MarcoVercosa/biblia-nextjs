import type { NextApiRequest, NextApiResponse } from 'next'

const fs = require('fs');

export default function SiteMap(req: NextApiRequest, res: NextApiResponse) {
    const filePath = './public/siteMapFonteDeVida.xml';
    const fileContents = fs.readFileSync(filePath);
    res.setHeader('Content-Type', 'application.xml');
    res.setHeader('Content-Disposition', 'attachment; siteMapFonteDeVida.xml');
    res.status(200).send(fileContents)
}

