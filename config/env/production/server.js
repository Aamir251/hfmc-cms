//change deployed url to heroku url

module.exports = ({ env }) => ({
    url: env('https://hfmc-cms.herokuapp.com'),
});
