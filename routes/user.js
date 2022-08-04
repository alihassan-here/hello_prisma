const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');


const { user } = new PrismaClient();
router.get('/', async (req, res) => {
    const users = await user.findMany({
        select: {
            username: true,
            posts: true
        }
    })
    res.json(users)
}
);

router.post('/', async (req, res) => {
    const { username } = req.body;

    const userExist = await user.findUnique({
        where: {
            username
        }
    });

    if (userExist) {
        return res.status(400).json({
            message: 'User already exist'
        })
    }


    const newUser = await user.create({
        data: {
            username
        }
    })
    res.json(newUser)
}
);

module.exports = router;