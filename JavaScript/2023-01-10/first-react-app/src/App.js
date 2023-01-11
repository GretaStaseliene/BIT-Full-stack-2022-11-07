import './App.css';
import Header from './components/header/Header';
import Headline from './components/headline/Headline';
import Subheadline from './components/subheadline/Subheadline';
import Footer from './components/footer/Footer';
import { useId } from 'react';

// Komponentas
function App() {

  const navLinks = [
    'Tour', 'Products', 'Features', 'Enterprise', 'Pricing', 'Cart'
  ];

  function Headlines() {
    const products = [];
    const id = useId();

    for(let i = 0; i < 4; i++) {
      products.push(<Subheadline key={id + i} />);
    }

    return products;
  }

  return (
    <>
      <Header nuorodos={navLinks} />
      <main>
        <Headline />
        <Headlines />
      </main>
      <Footer />
    </>
  );
}

export default App;
