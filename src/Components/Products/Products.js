import './Products.scss'

function Products () {
    return (
        <div className="products">
            {
                Array.from({ length: 30 }).map((item) => {
                    return <>
                    <div className="products__container">
                        These are products
                    </div>
                    </>
                })
            }
        </div>
    )
}

export default Products