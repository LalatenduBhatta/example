import bcrypt from "bcrypt"

const saltRound = 10 //bcrypt encryption rounds

//create hash password

export const createHasedPassword = async (password) => {
    const hasedPass = await bcrypt.hash(password, saltRound)
    return hasedPass
}

//compare password

export const comparePassword = async (password, hashedPass) => {
    const isMatched = bcrypt.compare(password, hashedPass)
    return isMatched
}