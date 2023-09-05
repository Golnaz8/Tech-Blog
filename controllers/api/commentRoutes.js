const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// api/comments to creat comments
router.post('/', withAuth, async (req, res) => {
  try {
    console.log(`*******************************************************\n****************************************`)
    console.log(`HITTING COMMENT ROUTE`)
    console.log(req.body);
    console.log(`*******************************************************\n****************************************`)

    const newComment = await Comment.create({
      ...req.body,
      userId: req.session.user_id,
    });
    console.log(`*******************************************************\n****************************************`)
console.log(newComment)

    res.status(200).json(newComment);
  } catch (err) {
    console.log(`*******************************************************\n****************************************`)

    console.log(err);
    res.status(400).json(err);
  }
});

// api/comments/:id to delete a selected comment ut I do not use this router bacause it was not in acceptance criteria
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
