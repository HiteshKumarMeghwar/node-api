const getAllProducts = async (req, res) => {
    res.status(200).json({msg: "Yes getAllProducts"});
}

const getAllProductTesting = async (req, res) => {
    res.status(200).json({msg: "Yes getAllProductsTesting"});
}

module.exports = {getAllProducts, getAllProductTesting};