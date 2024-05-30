const Footer = () => {
  return (
    <footer className="mt-24 bg-slate-900 grid grid-cols-2 lg:grid-cols-4 p-6 lg:p-12 py-16 gap-12">
      <div>
        <h3 className="text-white font-bold text-sm">Shop</h3>
        <ul className="mt-6 space-y-4">
          <li className="text-white font-light text-sm">Bags</li>
          <li className="text-white font-light text-sm">Tees</li>
          <li className="text-white font-light text-sm">Objects</li>
          <li className="text-white font-light text-sm">Home Goods</li>
          <li className="text-white font-light text-sm">Accessories</li>
        </ul>
      </div>
      <div>
        <h3 className="text-white font-bold text-sm">Account</h3>
        <ul className="mt-6 space-y-4">
          <li className="text-white font-light text-sm">Manage Account</li>
          <li className="text-white font-light text-sm">Returns & Exchanges</li>
          <li className="text-white font-light text-sm">Redeem a Gift Card</li>
        </ul>
      </div>
      <div>
        <h3 className="text-white font-bold text-sm">Connect</h3>
        <ul className="mt-6 space-y-4">
          <li className="text-white font-light text-sm">Contact Us</li>
          <li className="text-white font-light text-sm">Facebook</li>
          <li className="text-white font-light text-sm">Instagram</li>
          <li className="text-white font-light text-sm">Pinterest</li>
        </ul>
      </div>
      <div>
        <h3 className="text-white font-bold text-sm">Company</h3>
        <ul className="mt-6 space-y-4">
          <li className="text-white font-light text-sm">Who we are</li>
          <li className="text-white font-light text-sm">Sustainability</li>
          <li className="text-white font-light text-sm">Press</li>
          <li className="text-white font-light text-sm">Careers</li>
          <li className="text-white font-light text-sm">Terms & Conditions</li>
          <li className="text-white font-light text-sm">Privacy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
