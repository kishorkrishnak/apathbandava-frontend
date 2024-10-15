import wp from "../assets/wp.svg";

const WhatsappChat = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=+919380770883&text=Hello"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-chat "
      style={{
        textDecoration: "none",
        color: "white",
        width: "fit-content",
      }}
    >
      <img height={200} width={200} src={wp} alt="wp"></img>
    </a>
  );
};

export default WhatsappChat;
