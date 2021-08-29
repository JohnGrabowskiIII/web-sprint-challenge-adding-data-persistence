
const isPostResourceBodyValid = (req, res, next) => {

    const {body = ''} = req

    const {resource_name = ''} = body

    const isResourceNameValid = resource_name && typeof resource_name === 'string'

    if (isResourceNameValid) {
        next()
    } else {
        res.status(400).json({message: "Invalid post body"})
    }

}

module.exports = {
    isPostResourceBodyValid
}