const Footer = () => {
  return (
    <footer className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-sm font-medium text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb Works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4  text-gray-800 text-sm font-medium">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Diversity & Belonging</p>
        <p>This is not a real site</p>
        <p>It&apos;s a pretty awesome clone</p>
        <p>Guest Referrals</p>
        <p>Airbnb.org</p>
      </div>
      <div className="space-y-4  text-gray-800 text-sm font-medium">
        <h5 className="font-bold">HOST</h5>
        <p>Host your home</p>
        <p>Site hosted on vercel</p>
        <p>Created by Rohit Ingole</p>
        <p>Completely Responsive</p>
        <p>Resource Center</p>
      </div>
      <div className="space-y-4  text-gray-800 text-sm font-medium">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Our COVID-19 Response</p>
        <p>Help Center</p>
        <p>Cancellation options</p>
        <p>neighbourhood Support</p>
        <p>Trust & Safety</p>
      </div>
    </footer>
  );
};

export default Footer;
