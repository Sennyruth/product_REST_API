import {Router} from 'express';
import {getAllProducts,getSpecificProduct,createProduct,updateProduct,deleteProduct} from "../controllers/products.controllers.js";

const router = Router();

router.get("/",getAllProducts)
router.post("/",createProduct)
router.get("/:id",getSpecificProduct)
router.patch("/:id",updateProduct)
router.delete("/:id",deleteProduct)

export default router;

