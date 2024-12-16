import React, { useEffect, useState } from 'react';
import { products } from './utils/products';

interface Product {
  ProductID: string;
  Name: string;
  Category: string;
  Price: string;
  Stock: string;
  Rating: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Simulate loading data
    setTimeout(() => {
        setData(products as any);
        setLoading(false);
    }, 2000);
    
  }, []);

  return (
    <div className="App">
      <h1>Product Dashboard</h1>
      {/* Table or component to display products will go here */}
      {loading && <p>Loading data...</p>}
      {!loading && data && (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
};

export default App;
