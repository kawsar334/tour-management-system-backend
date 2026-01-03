

import { Router } from "express"
import { UserRoutes } from "../modules/user/user.route.js"
import { authRoute } from "../modules/auth/auth.route.js"
export const router = Router()

const moduleRoutes = [
    {
        path:"/users",
        route:UserRoutes
    },
    {
        path:"/auth",
        route:authRoute,
    }
    
]


moduleRoutes.forEach((route) => {
    router.use(route.path, route.route)
})