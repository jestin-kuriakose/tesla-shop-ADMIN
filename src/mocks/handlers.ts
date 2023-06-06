import { rest } from "msw"

export const handlers = [
    rest.post('http://localhost:3500/login', (req:any, res, ctx) => {
        req.json().then((data: any) => {
            if(data.email === "jestink@live.com" && data.password === "Password123") {
                return res(ctx.status(200), ctx.json( {  message: 'Login Successfull' }))
            }
            return res(ctx.status(403), ctx.json( {error: "error"}))
        })

    }),
    rest.post('http://localhost:3500/register', (req:any, res, ctx) => {
        req.json().then((data: any) => {
            if(data.email === "jestink@live.com") {
                return res(ctx.status(200), ctx.json( {  error: 'User Exist, use a different email' }))
            }
            return res(ctx.status(403), ctx.json( {message: "User created"}))
        })

    })
]