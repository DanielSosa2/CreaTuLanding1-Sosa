const ItemListContainer = ({ mensaje }) => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1 style={{ 
        lineHeight: "1.5", 
        maxWidth: "600px", 
        margin: "0 auto"
      }}>
        {mensaje}
      </h1>
    </div>
  );
};
export default ItemListContainer;