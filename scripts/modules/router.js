const basicPage = (res, view, title) => {
    res.render(view, {
<<<<<<< HEAD
      title
    })
  },
=======
        title
    });
};
>>>>>>> 0356dd4449fdde62dd7e7113b872a03e54da5ad9

  pageWithData = (res, view, title, data) => {
    res.render(view, {
      title,
      data
    })
  };

module.exports = { basicPage, pageWithData };