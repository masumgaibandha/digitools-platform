
import Cards from "./Cards";


const ProductCards = ({cardsData, carts, setCarts, selectedTools, setSelectedTools}) => {
    
    
  return (
 
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-5">
      {
        cardsData.map(card=><Cards key={card.id} card={card} carts={carts} setCarts={setCarts}
        selectedTools={selectedTools}
        setSelectedTools={setSelectedTools}
        > </Cards> 
            
        )
      }
        </div> 
    
      
  );
};

export default ProductCards;
