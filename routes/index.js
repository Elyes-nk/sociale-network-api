const express = require('express');
const router = express.Router();
const authRouter = require('./auth.route');
const usersRouter = require('./users.route');
const messagesRouter = require('./messages.route');
const discussionsRouter = require('./discussions.route');
const stacksRouter = require('./stacks.route');

//================== Routes ======================
router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/messages', messagesRouter);
router.use('/discussions', discussionsRouter);
router.use('/stacks', stacksRouter);
//================================================

module.exports = router;