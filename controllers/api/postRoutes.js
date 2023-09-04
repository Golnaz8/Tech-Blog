const express = require('express');
const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      userId: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

//delete post
router.delete("/:id", async (req, res) => {
  try {
    const deletePostData = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json(deletePostData);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});


//update post
router.put("/:id", withAuth, async (req, res) => {
  try {
    const updateResult = await Post.update(
      req.body, 
      {
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json(updateResult);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
