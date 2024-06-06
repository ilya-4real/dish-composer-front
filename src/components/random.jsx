
const Random = () => {
    const onRandom = () => {
        console.log('random')
    }

    return ( 
        <div className="random-card">
            <img src="../public/surprise-box.png" alt="" width='300'/>
            <button className='active-btn' onClick={onRandom}>Generate</button>
        </div>
     );
}
 
export default Random;