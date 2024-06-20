const Unavailable = () => {
    return ( 
        <div className="flexbox">
        <div className="unavailable">
            <img src="/recipe_builder_qr.png" alt="QR code" />
            <div className="unav-descr">
                <center>THis applicaton is only available in telegram Web App. Scan QR code above or just find bot by <a href="https://t.me/RecipeBuilderBot">link</a></center>
            </div>
        </div>
        </div>
     );
}
 
export default Unavailable;