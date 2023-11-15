// 11/15/2023 Solved!
const router = require('express').Router();
const User = require('../../models/User');

// GET a user
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    if (await userData == null) {
      return res.status(404).send("No user with this id!");
    }
    return res.json(userData);
  }
  catch (err) {
    return res.json(err);
  }
});


// UPDATE a user
router.put('/:id', async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (await userData[0] == 0) {
      console.log("user id not found for update");
      return res.status(404).send("No user with this id for update!");
    }
    return res.json(userData);

  }
  catch (err) {
    return res.json(err);
  }

});

// DELETE a user
router.delete('/:id', async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (await userData == 0) {
      return res.status(404).send("No user with this id for delete!");
    }
    return res.json(userData);
  } catch (err) {
    return res.json(err);
  }
});

module.exports = router;
