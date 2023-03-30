import React from "react";
import ContactItem from "./ContactItem";
import {ContactFeildData,SocialMediaData} from "./ContactData";
import NavBar from "../navbar/NavBar";

const Contact = () => {
    return (
        <>
            <NavBar />
            <div className="contactStructureParent">
                <div className="contactStructure">

                    <div className="contactStructureDataItems">
                        {ContactFeildData.map((currData) => {
                            return (
                                <>
                                    <ContactItem
                                        icon={currData.icon}
                                        headerTxt={currData.headerTxt}
                                        messageTxt={currData.messageTxt}
                                        footerTxt={currData.footerTxt}

                                    />
                                </>
                            );
                        })}
                    </div>

                    <div className="socialMediaLinkStructure">
                        {SocialMediaData.map((currItm)=>{
                            return(
                                <>
                                    <a className="ContactSocialLink" href={currItm.link} rel="noreferrer" target='_blank'>{currItm.icon}</a>
                                </>
                            );
                        })}
                    </div>

                </div>

                <div className="contactFormStructureParent">
                    <h1 className="formHeading">Having Any Query? <br /> Drop a Message!</h1>
                    <form className="contactForm" action="https://formspree.io/f/mqkodypk" method="POST">
                        <label>Name</label>
                        <input 
                            type="text" 
                            name="userName" 
                            autoComplete="off"
                            style={{textTransform : 'capitalize'}}
                            required
                        />
                        <label>Email ID</label>
                        <input 
                            type="text" 
                            name="email" 
                            autoComplete="off" 
                            required
                        />
                        <label>Your Query</label>
                        <textarea 
                            className="contactTextareaFeild" 
                            name="query"
                            cols='60'
                            rows='4'
                            autoComplete="off"
                            required    
                        />
                        <input type='submit' value='Send' />
                    </form>
                </div>

            </div>
        </>
    );
}

export default Contact;