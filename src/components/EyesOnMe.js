// Code EyesOnMe Component Here

export default function EyesOneMe(){
    function handelFocus(){
        console.log("Good!")
    }
    function handelBlur(){
        console.log('Hey! Eyes on me!')
    }
    return(
        <div>
            <button onFocus={handelFocus} onBlur={handelBlur}>Eyes on me</button>
        </div>
    )
}
