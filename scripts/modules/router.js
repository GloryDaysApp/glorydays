const basicPage = (res, view, title) => {
    res.render(view, {
        title
    });
};

module.exports = { basicPage };