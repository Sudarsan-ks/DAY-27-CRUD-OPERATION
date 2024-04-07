import errorimg from '../assets/error.avif'

export function Error() {
    return (
        <div className="error">
            <div className="errordiv">
                <img src={errorimg} alt="Error Fount 404" />
                <h1>ERROE FOUND</h1>
                <p>Please find the correct path</p>
            </div>
           
        </div>
    )
}