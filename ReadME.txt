CHAPTER 1
yarn which is like npm but suposedly better
heroku which is a thing
relay which is for "data driven apps"
graphcool which has insanely cool api stuff and it looks sick

yarn run eject lets me see all the config files which include webpack
remember webpack is what bundles everything together into a single file
and translates through babel
MUST CHANGE CASHEDIRECTORY TO FALSE OR IT WILL BE FUCKED (in webpack.config.dev file)

go into start.js to alter things like auto console clearining and auto browser opening
just comment out whta you don't want

add "plugin" = ["react-relay"] to the bale part of the package.json dependancy file
and add a graphql section to the packagejson specfiying the url
THIS BIT IS VERY IMPORTANT AND MUST BE DONE EXACTLY AS IN THE CURRENT PACKAGE.JSON

added react-rotuer and using browser history isntead of hash history. unsure about difference

use ../dir to go up a directory when specifying a file

and material-ui for good ui whi has
special react-tap-event plugin for mobile not seeming slow. v important and necessary

HEROKU SETUP
heroku login
heroku appname must be completely entirely unique compared to everyone elses heroku apps
heroku create <appname> --buildpack https://github.com/mars/create-react-app-buildpack.git
gives https://tictacturingac.herokuapp.com and https://git.heroku.com/tictacturingac.git

then set the graph ql variable to work with heroku too by
heroku config:set GRAPHQL_ENDPOINT=<my graph ql relay url>
git clone <heroku git repo>, git add ., git commit, git push heroku master
may need to delete a package-lock file if using yarn instead of npm
heroku open will nav me to my fully functionoing publically available heroku app!!

no more need for localhost but it's causing routing issues as now the address is
tictacturingac.herokuapp.com/profile or whatever else goes at the end.
Needs a static.json in the root directory. Github mars create-react-app page has some info
on how to do clean urls and https calling. Don't understand but very small and simple
fix and only has to be done once and only because deploying somehwere with different url
in the middle

remember to git add., git commit -m "", git push heroku master to release new changes

END OF CHAPTER 1
**************************************************************************************
CHAPTER 2

PLANNING
which components will be containers? what parts need to be independant components?
which need access to remote data? which need to manage their own state?
which need to manage their own style?
containers - components - presentational (vague guideline not all will fit to just one)

containers - connected to store, pass data to children, relay, mutations, specifiyng queries
components - manage own state, not connected to store, pass props down to presentational
presentational - stateless, change state based on props
Helpful to draw out a nesting diagram - see saved image

STYLING
remember now to export default <classname> seems to work better

mostly setting up ui components

using prevState to toggle states based on previous setting
using <Link> wrapper from react-router to do navigation

yarn add styled-components for some prettier things
lets me keep my floating button floating

Many react tags that you make will be very similar to html but have Capital
<Header> is react class that we made but <header> is html

set up utils folder with a media file to respond to different size screen and
mobile users. use css from styled-components
when I call the ${media.handheld` from within my css styling is will only
apply that styling to screen that meet those requirements. It will overule
the standard css styling.

END OF CHAPTER 2
**************************************************************************************
CHAPTER 3

using konva as a canvas thing to make it look pretty. There's loads of ready built
libraries. should explore

NOTE USING WINDOW WHICH IS NOT ACCESSIBLE IN NATIVE. IT'S SOMETHING ELSE

setting up board size and even the rows and boxes to be dynamic instead of hardcoded

don't forget react likes dynamically created components to have keys

using onClick= (e) => { let i = event.target.i} since the target property lets
us access some props

don't forget we can use defaultProps

get and set functions are automatic sort of

END OF CHAPTER 3
**************************************************************************************
CHAPTER 4

Auth0 using Auth0-lock that is a manager that goes between and makes it easier
jwt.io gives a jwt debigger for decrypting what information is stored in a key
so we can investigate better

create auth file to store auth infomration in utils
loads of random stuff, check the documentation and follow it
tokens expiry must be multiplied by 1000 as it will have the last 3 digits taken
off it when it's sent

loads of setup but do it once and it's done ugh

setup of relational database on graphql and linking to aut0 through graphql gui
graphql query syntax is bit tough but loads of online docs at graphql.org,
facebooks relay getting started site and learnrelay.org (created by graph.cool)

build relay containers and put them aat the bottom of profile and tictactoe
faced extensive update issues and decided to stop hereeeee

