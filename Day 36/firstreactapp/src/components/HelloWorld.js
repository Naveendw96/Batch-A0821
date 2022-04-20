// import './App.css';

// function name and the file name should be same

function HelloWorld(props) {
  return (
    <div style={{textAlign: "center",color:"blue", padding:"10%", backgroundColor:"beige" }} >
      {/* <h1>{props.name}</h1> 
      <p>{props.title}</p> */}
      <h3>{props.h.namer}</h3>
      <h3>{props.h.title}</h3>
      <h3>{props.hh}</h3>
    </div>
  );
}

export default HelloWorld;
