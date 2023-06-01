const Footer = () => {
  const year = new Date().getFullYear();

  return <footer>{`Copyright © Casa T ${year}`}</footer>;
};

export default Footer;