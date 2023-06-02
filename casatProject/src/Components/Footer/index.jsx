const Footer = () => {
  const year = new Date().getFullYear();

  return <footer className="footer">
    <p>Social Medias</p>
    {`Copyright © Casa T ${year}`}
    <p>GoFundMe</p>
    <p>Contacts</p>
    </footer>;
};

export default Footer;