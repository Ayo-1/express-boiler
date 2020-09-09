let LocalStrategy = require('passport-local').Strategy;
let bcrypt = require('bcrypt');
let models = require("./models")
const validPassword = (user, password) => {
	return bcrypt.compareSync(password, user.password)
}
module.exports = (passport) => {

	passport.serializeUser((user, done) => {
		done(null, user.id)
	})
	passport.deserializeUser((id, done) => {
		models.user.findOne({
			where: {
				"id": id
			}
		}).then((user) => {
			if(!user){
				done(new Error("Wrong user id."))
			}
			console.log(user);
				done(null, user);
					})
			.catch(err => {
				if(err) {
					console.log(err);
				}
			})
	});
	passport.use(new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	},
	(req, email, password, done) => {
		return models.user.findOne({
			where: {
				'email': email
			}
		}).then(user => {
			if(!user) {
				console.log("Incorrect Login Details");
				req.flash({"message": "incorrect credentials"})
				return done(null, false)
			}
			else if(!user.password){
				console.log("Incorrect Login Details");
				req.flash({"message": "Incorrect Login Details"})
				return done(null, false)
			}
			else if(!validPassword(user, password)){
				console.log("Incorrect Login Details");
				req.flash({"message": "Incorrect Login"})
				return done(null, false)
			}

			return done(null, user)

		})
		.catch(err => {
			console.log(err.message)
		
		})
	}))
}