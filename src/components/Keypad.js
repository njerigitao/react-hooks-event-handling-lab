// Code Keypad Component Here

function Keypad (){
    const handleChange = (event)=>{
        console.log('Entering password...');
    };
    return (
        <div>
         <Keypad input type="password" onChange={handleChange} />   
        </div>
    )
}

export default Keypad;