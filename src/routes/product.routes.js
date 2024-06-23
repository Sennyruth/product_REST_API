import {Router} from 'express';
const router = Router();

router.get("/",(req,res)=>{
    res.send("getting all products")
})
router.post("/",(req,res)=>{
    res.send("creating all products")
})
router.get("/:id",(req,res)=>{
    res.send("getting a single product")
})
router.patch("/:id",(req,res)=>{
    res.send("updating all products")
})
router.delete("/:id",(req,res)=>{
    res.send("deleting all products")
})
export default router;

