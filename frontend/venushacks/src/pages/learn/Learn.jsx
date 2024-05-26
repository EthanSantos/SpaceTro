const Learn = () => {
    return (
        <div className='learn-screen'>
            <div className='learn-block'>
                <div className='module' onClick={handleModule}>
                    <img src="mercury.png" alt="planet" />
                    <p>Module 1</p>
                    <h3>Mercury</h3>
                </div>

                <div className='module' onClick={handleModule}>
                    <img src="venus.png" alt="planet" />
                    <p>Module 2</p>
                    <h3>Venus</h3>
                </div>

                <div className='module' onClick={handleModule}>
                    <img src="mars.png" alt="planet" />
                    <p>Module 3</p>
                    <h3>Mars</h3>
                </div>
            </div>
        </div>
    );
}
 
export default Learn;