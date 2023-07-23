import classes from './Products.module.css';
import {ProductItem} from "./ProductItem.tsx";
import {IProduct} from "./types.ts";


const DuMMY_PRODUCTS: IProduct[] = [
    {
        id: 'p1',
        price: 6,
        title: 'My First book',
        description: 'The first book I ever wrote',
    },
    {
        id: 'p2',
        price: 5,
        title: 'My Second book',
        description: 'The second book I ever wrote'
    },
]


export const Products = () => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {DuMMY_PRODUCTS.map(product => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                    />
                ))}
            </ul>
        </section>
    );
};
