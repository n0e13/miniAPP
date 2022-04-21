const bucket = require('../configs/firebase_config');
const { firebase: { FB_BUCKET } } = require('../configs/env_config');

const BUCKET = FB_BUCKET;

const uploadImage = (req, res, next) => {
    if (!req.file) return next();

    const img = req.file;

    const filename = Date.now() + '.' + img.originalname.split('.').pop();

    const file = bucket.file(filename);

    const stream = file.createWriteStream({
        metadata: {
            contentType: img.mimetype,
        }
    });

    stream.on('error', (e) => {
        console.error(e);
    });

    stream.on('finish', async () => {
        await file.makePublic();
        req.file.firebaseUrl = `http://storage.googleapis.com/${BUCKET}/${filename}`;
        next();
    });

    stream.end(img.buffer);
};

module.exports = uploadImage;