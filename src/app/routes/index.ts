import { Router } from "express";
import productsRoutes from "../modules/products/products.routes";

const router = Router();

const routes = [
    {
        path: '/products',
        router: productsRoutes
    }
]

routes.forEach((route) => {
    router.use(route.path, route.router);
})


export default router;