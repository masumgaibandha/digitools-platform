
import Cards from "./Cards";


const ProductCards = ({cardsData}) => {
    
    
  return (
 
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-5">
      {
        cardsData.map(card=><Cards key={card.id} card={card}> </Cards> 
            
        )
      }
        </div> 
    
      
  );
};

export default ProductCards;
