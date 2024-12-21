import './Services.css';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../loader/Loader.jsx";

function Services() {
  const [travelPackages, setTravelPackages] = useState([]);
  const [loading, setLoading] = useState({});
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    contact: '',
    numOfPerson: '',
  });

  console.log(userDetails);

  const fetchPackages = async () => {
    const data = await fetch('http://localhost:3000/product/get/all');
    const packages = await data.json();
    setTravelPackages(packages.services);
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (pkg) => {
    if (!userDetails.name || !userDetails.email || !userDetails.contact) {
      toast.error('Please fill in all details before proceeding.');
      return;
    }

    setLoading((prev) => ({ ...prev, [pkg.id]: true }));

    try {
      const response = await fetch('http://localhost:3000/razorpay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: pkg.price * userDetails.numOfPerson * 100, currency: 'INR' }),
      });

      const orderData = await response.json();

      if (!orderData.success) {
        toast.error('Failed to create order. Please try again.');
        setLoading((prev) => ({ ...prev, [pkg.id]: false }));
        return;
      }

      const options = {
        key: import.meta.env.VITE_REACT_APP_RAZORPAY_ID,
        amount: orderData.order.amount,
        currency: orderData.order.currency,
        name: userDetails.name,
        description: `Payment for ${pkg.name}`,
        order_id: orderData.order.id,
        prefill: {
          name: userDetails.name,
          email: userDetails.email,
          contact: userDetails.contact,
        },
        handler: async (paymentResponse) => {
          try {
            const razorpaySignature = paymentResponse.razorpay_signature;
            if (!razorpaySignature) {
              console.error('Razorpay signature is missing');
              toast.error('Payment verification failed.');
              closeForm();
              return;
            }

            const verifyResponse = await fetch('http://localhost:3000/razorpay/verify-payment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'razorpay_signature': paymentResponse.razorpay_signature,
              },
              body: JSON.stringify({
                razorpay_payment_id: paymentResponse.razorpay_payment_id,
                orderId: orderData.order.id,
              }),
            });

            const verificationResult = await verifyResponse.json();
            if (verificationResult.success) {
              toast.success('Payment Successful!');
              closeForm();
              await fetch('http://localhost:3000/razorpay/mail', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  email: userDetails.email,
                  packageName: selectedPackage.name,
                  packagePrice: selectedPackage.price * userDetails.numOfPerson,
                  verificationRes: verificationResult.success,
                }),
              });
            } else {
              toast.error('Payment verification failed.');
              closeForm();
              await fetch('http://localhost:3000/razorpay/mail', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  email: userDetails.email,
                  packageName: selectedPackage.name,
                  packagePrice: selectedPackage.price * userDetails.numOfPerson,
                  verificationRes: verificationResult.success,
                }),
              });
            }
          } catch (error) {
            toast.error('Payment verification failed.');
          } finally {
            closeForm();
          }
        },
        theme: {
          color: '#3399cc',
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      toast.error('An error occurred while processing your payment. Please try again.');
    } finally {
      setLoading((prev) => ({ ...prev, [pkg.id]: false }));
    }
  };

  const openForm = (pkg) => {
    setSelectedPackage(pkg);
  };

  const closeForm = () => {
    setSelectedPackage(null);
    setUserDetails({ name: '', email: '', contact: '' });
  };

  return (
      <div className="services">
        <h1>Our Travel Packages</h1>
        <div className="packages">
          {travelPackages.length > 0 ? (
              travelPackages.map((pkg) => (
                  <div key={pkg.id} className="package-card">
                    <img
                        src={`http://localhost:3000${pkg.photoUrl}`}
                        alt={pkg.name}
                        className="package-image"
                    />
                    <h1 className='title'>{pkg.name}</h1>
                    <p className="description">{pkg.description}</p>
                    <p className="price">Price: {`${pkg.price} per person`}</p>
                    <div className='button-div'>
                      <button
                          onClick={() => openForm(pkg)}
                          disabled={loading[pkg.id]}
                          className="pay-button"
                      >
                        {loading[pkg.id] ? 'Processing...' : 'Book Now'}
                      </button>
                      <button onClick={() => toast.info(pkg.details)} className="info-button">
                        View Details
                      </button>
                    </div>
                  </div>
              ))
          ) : (
              <Loader/>
          )}
        </div>

        {selectedPackage && (
            <div className="form-modal">
              <div className="form-content">
                <h2>Enter Details for {selectedPackage.name}</h2>
                <form>
                  <input
                      type="text"
                      placeholder="Name"
                      value={userDetails.name}
                      onChange={(e) => setUserDetails({...userDetails, name: e.target.value})}
                  />
                  <input
                      type="email"
                      placeholder="Email"
                      value={userDetails.email}
                      onChange={(e) => setUserDetails({...userDetails, email: e.target.value})}
                  />
                  <input
                      type="tel"
                      placeholder="Contact Number"
                      value={userDetails.contact}
                      onChange={(e) => setUserDetails({...userDetails, contact: e.target.value})}
                  />
                  <input
                      placeholder="Number of person"
                      value={userDetails.numOfPerson}
                      onChange={(e) => setUserDetails({...userDetails, numOfPerson: e.target.value})}
                  />
                  <button type="button" onClick={() => handlePayment(selectedPackage)}>
                    Proceed to Pay
                  </button>
                  <button type="button" onClick={closeForm}>
                    Cancel
                  </button>
                </form>
              </div>
            </div>
        )}
        <ToastContainer/>
      </div>
  );
}

export default Services;
