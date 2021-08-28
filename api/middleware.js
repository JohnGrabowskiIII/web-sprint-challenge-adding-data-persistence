
const isPostResourceBodyValid = (req, res, next) => {

    const {body} = res

    const {resource_id, resource_name} = body

    const isResourceIdValid = resource_id && typeof resource_id === 'number'

    const isResourceNameValid = resource_name && typeof resource_name === 'string'

    const isValid = isResourceIdValid && isResourceNameValid

    if (isValid) {
        next()
    } else {
        res.status(400).json({message: "Invalid post body"})
    }

}

module.exports = {
    isPostResourceBodyValid
}