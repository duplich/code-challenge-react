'use client'
import React, { useEffect, useState } from 'react';
import { products } from '../utils/products';
import ProductsList from "@/app/Components/ProductsList";
import Table from "@/app/Components/Table";
import Image from "next/image";

export interface Product {
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
    }, 1000);

  }, []);

  return (
    <div className="App">
      {/* Table or component to display products will go here */}
      {loading && <p>Loading data...</p>}
      {!loading && data && (

        // {data.length > 0 && (
          <Table data={data} />
        // )}
      )}
    </div>
  );
};

export default App;
