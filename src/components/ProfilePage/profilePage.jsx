import React from "react";
import PPMaleSVG from "../../images/ProfilePage/PPMaleSVG.svg";
import PPFemaleSVG from "../../images/ProfilePage/PPFemaleSVG.svg";
// import Button from "react-bootstrap/Button";

const ProfilePage = () => {
    return (
        <div>
            <section>
                <img
                    src={PPMaleSVG}
                    alt="profilephoto"
                    style={{ width: "100px", height: "100px;" }}
                />
            </section>
            <section>
                <button type="submit">Edit profile</button>
            </section>
            <section>
                <card>
                    <h3>General</h3>
                    <p>Last Name</p>
                    <p>Gender</p>
                    <p>Age</p>
                    <p>Education</p>
                    <p>District</p>
                </card>
                <card>
                    <h3>About You</h3>
                    <p>Bio</p>
                    <p>Interests</p>
                </card>
                <card>
                    <h3>Contact</h3>
                    <p>Email</p>
                    <p>Phone</p>
                    <p>Address</p>
                </card>
            </section>
        </div>
    );
};

export default ProfilePage;
