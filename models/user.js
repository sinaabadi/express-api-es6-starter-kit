module.exports = ({mongoose}) => {
  const {Schema} = mongoose
  const UserSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true}
  })

  return mongoose.model('User', UserSchema)
}