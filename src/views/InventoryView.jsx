import React, { useState } from 'react';
import ProductTable from '../components/ProductTable';

const InventoryView = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Perfil de Acero Inoxidable 304', quantity: 15, price: 120000 },
    { id: 2, name: 'Lámina Antideslizante', quantity: 8, price: 450000 },
  ]);

  const [form, setForm] = useState({ name: '', quantity: '', price: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!form.name || !form.quantity || !form.price) return alert('Complete todos los campos');

    const newProduct = {
      id: Date.now(),
      name: form.name,
      quantity: parseInt(form.quantity),
      price: parseFloat(form.price),
    };

    setProducts([...products, newProduct]);
    setForm({ name: '', quantity: '', price: '' });
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Módulo de Gestión de Inventario</h1>
      <form onSubmit={handleAddProduct} className="bg-white p-4 shadow-md rounded-lg mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Cantidad</label>
          <input type="number" name="quantity" value={form.quantity} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Precio ($)</label>
          <input type="number" name="price" value={form.price} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div className="md:col-span-3 flex justify-end">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Agregar Producto</button>
        </div>
      </form>
      <ProductTable products={products} onDeleteProduct={handleDeleteProduct} />
    </div>
  );
};

export default InventoryView;