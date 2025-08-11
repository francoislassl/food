import React from 'react';

const FoodLandingPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
      <header className="bg-green-600 p-6">
        <h1 className="text-3xl font-bold text-white">Delicious Food</h1>
        <nav className="mt-4">
          <ul className="flex space-x-4">
            <li><a href="#menu" className="text-white hover:underline">Menu</a></li>
            <li><a href="#about" className="text-white hover:underline">About Us</a></li>
            <li><a href="#contact" className="text-white hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://example.com/hero-image.jpg')" }}>
        <h2 className="text-4xl font-bold text-white">Taste the Best Food in Town</h2>
        <p className="mt-2 text-lg text-white">Fresh ingredients, made with love.</p>
        <a href="#menu" className="mt-4 px-6 py-2 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-200 transition duration-300">Explore Menu</a>
      </section>

      {/* Menu Section */}
      <section id="menu" className="p-8">
        <h3 className="text-2xl font-bold text-center">Our Menu</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {/* Sample Menu Items */}
          <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h4 className="font-bold">Pasta Primavera</h4>
            <p>Fresh vegetables and pasta in a light sauce.</p>
            <span className="font-bold text-green-600">$12.99</span>
          </div>
          <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h4 className="font-bold">Grilled Chicken Salad</h4>
            <p>Grilled chicken served on a bed of mixed greens.</p>
            <span className="font-bold text-green-600">$10.99</span>
          </div>
          <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h4 className="font-bold">Chocolate Cake</h4>
            <p>Rich and decadent chocolate cake.</p>
            <span className="font-bold text-green-600">$6.99</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 p-8">
        <h3 className="text-2xl font-bold text-center">About Us</h3>
        <p className="mt-4 text-center">We are passionate about food and dedicated to providing the best dining experience.</p>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="bg-green-600 p-6 text-white">
        <h3 className="text-lg font-bold">Get in Touch</h3>
        <p>Contact us at <a href="mailto:info@deliciousfood.com" className="underline">info@deliciousfood.com</a></p>
      </footer>
    </div>
  );
};

export default FoodLandingPage;