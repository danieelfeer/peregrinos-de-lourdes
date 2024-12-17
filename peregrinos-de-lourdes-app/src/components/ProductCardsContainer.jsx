import React from 'react';
import ProductCard from './ProductCard'; // Componente de card de produto

const ProductCardsContainer = () => {
  // Dados dos cards de produto
  const productData = [
    { image: '../../public/terco-com-nome .png', name: 'Terço Personalizado', description: 'Com nome', price: '30,00' },
    { image: '../../public/terco-sem-nome.png', name: 'Terço Personalizado', description: 'Sem nome', price: '25,00' }
    // Adicione mais produtos aqui se necessário
  ];

  return (
    <div className="flex overflow-x-auto py-9 space-x-4">
      {productData.map((product, index) => (
        <div className="flex-shrink-0 min-w-[300px]" key={index}>
          <ProductCard
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductCardsContainer;
