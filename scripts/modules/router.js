const basicPage = (res, view, title) => {
    res.render(view, {
<<<<<<< HEAD
<<<<<<< HEAD
      title
    })
  },
=======
        title
    });
};
>>>>>>> 0356dd4449fdde62dd7e7113b872a03e54da5ad9

=======
        title
    });
};
>>>>>>> afefe6636cc3203be64c136bc73bf075268a58a9
  pageWithData = (res, view, title, data) => {
    res.render(view, {
      title,
      data
    })
  };

module.exports = { basicPage, pageWithData };