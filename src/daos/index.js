import dotenv from 'dotenv';
dotenv.config();

// Variables
let ProductDao;
let CarritoDao;

// Evalúo db
switch (process.env.DATABASE) {
    case 'mongo':
        const { default: ProductDaoMongo } = await import('./productos/productoDaoMongo.js');
        const { default: CarritoDaoMongo } = await import('./carritos/carritoDaoMongo.js');
    
        ProductDao = new ProductDaoMongo;
        CarritoDao = new CarritoDaoMongo;
    
        break;

    default:
        console.log('db', process.env.DATABASE);
        break;
}

export { ProductDao, CarritoDao };