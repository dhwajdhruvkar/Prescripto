import jwt from 'jsonwebtoken'

// doctor authentication middleware
const authDoctor = async (req, res, next) => {
    try {

        // Accept token from Authorization header (Bearer ...) or custom 'dtoken'/'token' headers
        let token = req.headers['authorization'] || req.headers['dtoken'] || req.headers['token']
        if (!token) {
            return res.json({ success: false, message: 'Not Authorized. Login Again' })
        }

        if (typeof token === 'string' && token.startsWith('Bearer ')) {
            token = token.split(' ')[1]
        }

        const token_decode = jwt.verify(token, process.env.JWT_SECRET)

        // Ensure req.body exists (some requests like GET may not have a body)
        req.body = req.body || {}
        req.body.docId = token_decode.id
        next()

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export default authDoctor

{/* import jwt from 'jsonwebtoken'

// doctor authentication middleware
const authDoctor = async (req, res, next) => {
    try {

        const { dtoken } = req.headers
        if (!dtoken) {
            return res.json({ success: false, message: 'Not Authorized Login Again' })
        }
        const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET)
        req.body.docId = token_decode.id
        next()

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export default authDoctor */}