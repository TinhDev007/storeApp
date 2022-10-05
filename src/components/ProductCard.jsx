import { Card } from "react-bootstrap";

const ProductCard = ({ product }) => {
    console.log('ddd', product)
    return (
        <a href={product.VideoLink} target="_blank" rel="noreferrer" className="card-link">
            <Card>
                <div className="card-image">
                    <img src={`data:image/jpeg;base64, ${product.IconData}`} alt="" />
                </div>
                <Card.Body> 
                    <Card.Title>{product.Name}</Card.Title>
                    <Card.Text>
                        {product.itemcost}
                    </Card.Text>
                    <Card.Text>                        
                        {product.Description}
                    </Card.Text>
                    {product.SupportedVersion && (
                        <Card.Text style={{fontWeight: 'bold', fontSize: 14}}>                        
                            Version: {product.SupportedVersion}
                        </Card.Text>                  
                    )}                    
                </Card.Body>
            </Card>
        </a>        
    );
};

export default ProductCard;
