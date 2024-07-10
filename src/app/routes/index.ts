import { Router } from "express";
import productsRoutes from "../modules/products/products.routes";
import bookingRoutes from "../modules/bookings/bookings.routes";

const router = Router();

const routes = [
    {
        path: '/products',
        router: productsRoutes
    },
    {
        path: '/bookings',
        router: bookingRoutes
    }
]

routes.forEach((route) => {
    router.use(route.path, route.router);
})


export default router;