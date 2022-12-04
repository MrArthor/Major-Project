const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Volunteer Page');
});

router.get('/:id/volunteer-study-portal', (req, res) => {
    const Title = 'Volunteer Study Portal';
    const CssLink = 'volunteer-study-portal';
    res.render('Volunteer/volunteer-study-portal', { Title, CssLink });

    // res.send('Volunteer Study Portal');
});

module.exports = router;