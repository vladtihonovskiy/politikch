import express from 'express';

import * as CustomRequest from '../controllers/customRequest';

const router = express.Router([]);

router.post('/getData', CustomRequest.fetch);

export default router;
