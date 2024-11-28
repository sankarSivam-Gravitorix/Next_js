const FormInput = ({label,id,placeholder,handleOnChange,name,value,}) => {
  
  
    return ( 
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor={name} style={{ marginBottom: "5px" }}>
            {label}
          </label>
          <input
            id={name}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={handleOnChange}
           
            style={{
              borderRadius: "5px",
              padding: "10px",
              backgroundColor: "beige",
              marginBottom:'5px',
              border:'none',
              outline:'none'
            }}
          />
        </div>
     );
}
 
export default FormInput;