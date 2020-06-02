const basicPage = (res, view, title) => {
    res.render(view, {
        title,
    });
};
pageWithData = (res, view, title, data) => {
    res.render(view, {
        title,
        data
    });
};

<<<<<<< HEAD
module.exports = { basicPage };
=======
module.exports = {basicPage, pageWithData};
>>>>>>> f592b169299a7b455faee5a045eef4051f563cb5
