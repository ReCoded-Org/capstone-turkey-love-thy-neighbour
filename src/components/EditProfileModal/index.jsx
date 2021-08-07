import React from "react";
import { Modal, Button, Card } from "react-bootstrap";
import { useFormik } from "formik";
import "./index.scss";

const EditProfileModal = ({ handleClick, showModal }) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      age: "",
      education: "",
      bio: "",
      interests: "",
      number: "",
      address: "",
      profileImageUrl: "",
      backgroundImageUrl: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Modal show={showModal} onHide={handleClick}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>

      <form onSubmit={formik.handleSubmit}>
        <Modal.Body>
          <Card className="form-cards">
            <Card.Body>
              <Card.Text>
                <input
                  id="firstName"
                  name="firstName"
                  type="firstName"
                  placeholder="First Name"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                />
                <input
                  id="lastName"
                  name="lastName"
                  type="lastName"
                  placeholder="Last Name"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                />

                <section>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="District"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </section>

                <section>
                  <input
                    id="gender"
                    name="gender"
                    type="gender"
                    placeholder="Gender"
                    onChange={formik.handleChange}
                    value={formik.values.gender}
                  />
                  <input
                    id="age"
                    name="age"
                    type="age"
                    placeholder="Age"
                    onChange={formik.handleChange}
                    value={formik.values.age}
                  />
                </section>
                <section>
                  <input
                    id="education"
                    name="education"
                    type="education"
                    placeholder="Education"
                    onChange={formik.handleChange}
                    value={formik.values.education}
                  />
                </section>
                <section>
                  <input
                    id="bio"
                    name="bio"
                    type="bio"
                    placeholder="Bio"
                    onChange={formik.handleChange}
                    value={formik.values.bio}
                  />
                </section>
                <section>
                  <input
                    id="interests"
                    name="interests"
                    type="interests"
                    placeholder="Interests"
                    onChange={formik.handleChange}
                    value={formik.values.interests}
                  />
                </section>
                <section>
                  <input
                    id="number"
                    name="number"
                    type="number"
                    placeholder="Number"
                    onChange={formik.handleChange}
                    value={formik.values.number}
                  />
                </section>
                <section>
                  <input
                    id="address"
                    name="address"
                    type="address"
                    placeholder="Adress"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                  />
                </section>
                <section>
                  <input
                    id="profileImageUrl"
                    name="profileImageUrl"
                    type="profileImageUrl"
                    placeholder="Profile Image URL"
                    onChange={formik.handleChange}
                    value={formik.values.profileImageUrl}
                  />
                </section>
                <section>
                  <input
                    id="backgroundImageUrl"
                    name="backgroundImageUrl"
                    type="backgroundImageUrl"
                    placeholder="Background Image URL"
                    onChange={formik.handleChange}
                    value={formik.values.backgroundImageUrl}
                  />
                </section>
              </Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>

        <Modal.Footer>
          <Button>Discard Changes</Button>
          <Button>Save Changes</Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default EditProfileModal;
