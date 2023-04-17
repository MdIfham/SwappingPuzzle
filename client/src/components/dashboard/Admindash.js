import React, { useState } from 'react'
import './Admindash.css'
import Pushlvl from './Pushlvl'
import Performance from './Performance'


const Admindash = ({ user }) => {

    const [pageinfo, setPageinfo] = useState({
        push: false,
        info: false,
    })

    const pushlevel = () => {
        setPageinfo({
            push: true,
            info: false,
        })
    }

    const showData = () => {
        setPageinfo({
            push: false,
            info: true,
        })
    }

    return (
        <div className='marginl'>
            {(pageinfo.push === false && pageinfo.info === false) ? <><div style={{ textAlign: "center" }}><span className='admin_text'><span style={{ color: "#0099ff" }}>Welcome, </span> admin to the Swapping Puzzle's Database Panel.</span></div>
                <div className='admin_text2' style={{ textAlign: "center" }}> You can perform following operations on the database.</div>
                <div className>

                    <button
                        style={{
                            width: "150px",
                            borderRadius: "30px",
                            letterSpacing: "1.5px",
                            marginTop: "1rem"
                        }}
                        onClick={pushlevel}
                        className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                    >
                        Add Level
                    </button>
                    <br />
                    <button
                        style={{
                            width: "150px",
                            borderRadius: "30px",
                            letterSpacing: "1.5px",
                            textAlign: "center",
                            marginTop: "1rem"
                        }}
                        onClick={showData}
                        className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                    >
                        Leaderboard
                    </button>
                    <br />
                    {/* <button
                    style={{
                        width: "150px",
                        borderRadius: "30px",
                        letterSpacing: "1.5px",
                        marginTop: "1rem"
                    }}
                    className="btn btn-large waves-effect waves-light hoverable red accent-3">
                    Get_User
                   </button> */}

                </div></> : ""}
            {pageinfo.push === true && pageinfo.info === false ? <Pushlvl /> : ""}
            {pageinfo.push === false && pageinfo.info === true ? <Performance /> : ""}
        </div>
    )
}

export default Admindash