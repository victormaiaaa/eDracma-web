/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Cart, CartTitle, CartVoid, Container, Content } from './styles';
import { Button, Input, ListProduct } from '../../components';
import productService from '../../services/productService';

const Vendas: React.FC = () => {
  const history = useHistory();
  const [fail, setFail] = useState(false);
  const [dataProducts, setDataProducts] = useState<
    {
      name: string;
      price: number;
      barcode: string;
    }[]
  >([]);
  const [productInput, setProductInput] = useState('');
  const [dataCart, setDataCart] = useState<any>([]);
  const [customer, setCustomer] = useState('');

  const getProducts = async () => {
    try {
      const response = await productService.getAllProducts();
      setDataProducts(response);
    } catch {
      alert('recarregue a pagina');
    }
  };

  const sell = async () => {
    console.log('product:', dataProducts, 'customer:', customer);
  };

  const setProductInCart = () => {
    const product = dataProducts.find(e => e.barcode === productInput);
    if (product) {
      dataCart.push(product);
      setProductInput('');
    } else {
      alert('Produto não encontrado');
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Content>
        <Input
          placeholder="Cod. de barras"
          label="Produto"
          value={productInput}
          onChange={e => setProductInput(e.target.value)}
          onKeyUp={(e: any) => {
            if (e.key === 'Enter') setProductInCart();
          }}
        />
        {dataCart.length > 0 ? (
          <Cart>
            <CartTitle>
              <b>Descrição:</b>
              <b>valor:</b>
            </CartTitle>
            {dataCart.map((e: any) => {
              return <ListProduct name={e.name} price={e.price} />;
            })}
          </Cart>
        ) : (
          <CartVoid>
            <b>Carrinho Vazio</b>
          </CartVoid>
        )}
        <Input
          placeholder="Nº do cartão"
          label="Aluno"
          value={customer}
          onChange={e => setCustomer(e.target.value)}
        />
        <Button type="submit" onClick={sell}>
          Vender
        </Button>
      </Content>
    </Container>
  );
};

export default Vendas;
