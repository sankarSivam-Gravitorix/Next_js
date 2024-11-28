const FormButton = ({text,handleSubmit}) => {
  return (
    <div>
      <button
      onClick={handleSubmit}
        style={{
          padding: "10px",
          backgroundColor: "blueviolet",
          color: "white",
          width: "80px",
          height: "auto",
          borderRadius:'5px',
          marginTop:'5px',
          fontWeight:'bold',
          boxShadow:'2px 2px 2px 0.5px yellow',
          border:'none',
          
        }}
      >
        {text}
    
      </button>
    </div>
  );
};

export default FormButton;
