import { Card } from "react-bootstrap";

const ProductCard = ({ product }) => {
    return (
        <a href={product.link} target="_blank" rel="noreferrer" className="card-link">
            <Card>
                <div className="card-image">
                    <img src={product.iconurl} alt="" />
                </div>
                <Card.Body>
                    <Card.Title>{product.itemname}</Card.Title>
                    <Card.Text>
                        {product.itemcost}
                    </Card.Text>
                    <Card.Text>                        
                        {product.itemdescription}
                    </Card.Text>
                    <Card.Text style={{fontWeight: 'bold', fontSize: 14}}>                        
                        Version: {product.itemversion}
                    </Card.Text>                  
                </Card.Body>
            </Card>
        </a>        
    );
};

export default ProductCard;
