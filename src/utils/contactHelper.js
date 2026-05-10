const PHONE_NUMBER = "9721849254";

export const getWhatsAppLink = (type, name) => {
  let message = "";
  if (type === 'puppy') {
    message = `Hi, I want to know more about this puppy: ${name}.`;
  } else if (type === 'product') {
    message = `Hi, I want to inquire about this product: ${name}.`;
  } else {
    message = "Hi, I want to know more about your services.";
  }
  
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
};

export const getCallLink = () => {
  return `tel:${PHONE_NUMBER}`;
};
