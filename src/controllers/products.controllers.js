import pool from "../db.config.js";

export  const getAllProducts = async(req,res)=>{
    try {
        const result = await pool.query("SELECT * FROM products");
        res.status(200).json({success:true,data:result.rows});
        
    } catch (error) {
        res.status(500).json({success:false,message:error.message});
        
    }
};


export const getSpecificProduct = async(req,res)=>{
    const id = req.params.id;
    try {
        const result = await pool.query(`SELECT * FROM products WHERE id=$1`,[id]);
        if (result.rowCount === 0) {
            res.status(404).json({ success: false, message: "Product not found" });
        } else {
            res.status(200).json({ success: true, data: result.rows });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });  
    }
};


export const createProduct = async (req, res) => {
    try {
        const productThumbnail = req.body.productThumbnail;
    const productTitle = req.body.productTitle;
    const productDescription = req.body.productDescription;
    const productCost = req.body.productCost;
    const onOffer = req.body.onOffer;
         const insert = await pool.query (
        "INSERT INTO products (productThumbnail,productTitle,productDescription,productCost,onOffer) VALUES ($1,$2,$3,$4)",
    [productThumbnail,productTitle,productDescription,productCost,onOffer],
        );
        if (insert.rowCount === 1){res.status(201).json({ success: true, message: "Product created successfully" });
        }
    } catch (error) {
     res.status(500).json({ success: false, message: error.message });
     }
     };


     export const updateProduct = async (req, res) => {
        const {productThumbnail,productTitle,productDescription,productCost,onOffer} = req.body;
        const id = req.params.id;
        try {
          let updateOperation;
          if (productThumbnail) {
            updateOperation = await pool.query(
              "UPDATE products SET  = $1 WHERE id=$2",
              [, id],
            );
        }
        if (productTitle) {
          updateOperation = await pool.query(
            "UPDATE products SET productTitle = $1 WHERE id=$2",
            [productTitle, id],
          );
        }
        if (productDescription) {
          updateOperation = await pool.query(
            "UPDATE products SET productDescription = $1 WHERE id=$2",
            [productDescription, id],
          );
        }
        if (productCost) {
          updateOperation = await pool.query(
            "UPDATE products SET productCost = $1 WHERE id=$2",
            [productCost, id],
          );
        }
        if (onOffer) {
            updateOperation = await pool.query(
              "UPDATE products SET onOffer = $1 WHERE id=$2",
              [onOffer, id],
            );
          }
        if (updateOperation.rowCount === 1) {
            res
              .status(200)
              .json({ success: true, message: "product updated successfully" });
          } else {
            res.status(400).json({ success: false, message: "Invalid product" });
          }
        } catch (error) {
          res.status(500).json({ success: false, message: error.message });
        }
      };

        
export const deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
      const deleteOperation = await pool.query(" DELETE FROM products where id=$1", [
        id,
      ]);
      if (deleteOperation.rowCount === 1) {
        res.status(200)
          .json({ success: true, message: "product deleted successfully" });
      } else {
        res.status(400).json({ success: false, message: "Invalid product" });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };