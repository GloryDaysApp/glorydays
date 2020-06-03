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


module.exports = { basicPage, pageWithData };
