import React from "react";
import { Modal, Button, Card } from "react-bootstrap";
import { useFormik } from "formik";
import "./index.scss";

const EditProfileModal = ({ handleClick, showModal }) => {
  // TODO: We need to add the validation errors for other stuff.
  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "Required";
    }
    if (!values.lastName) {
      errors.lastName = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.gender) {
      errors.gender = "Required";
    }
    if (!values.age) {
      errors.age = "Required";
    }
    if (!values.education) {
      errors.education = "Required";
    }
    if (!values.bio) {
      errors.bio = "Required";
    }
    if (!values.number) {
      errors.number = "Required";
    }
    if (!values.address) {
      errors.address = "Required";
    }
    if (!values.interests) {
      errors.interests = "Required";
    }
    return errors;
  };
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
    validate,
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
                  onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="error-msg">{formik.errors.firstName}</div>
                ) : null}
                <input
                  id="lastName"
                  name="lastName"
                  type="lastName"
                  placeholder="Last Name"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="error-msg">{formik.errors.lastName}</div>
                ) : null}
                <section>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="District"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="error-msg">{formik.errors.email}</div>
                  ) : null}
                </section>

                <section>
                  <select
                    name="gender"
                    onChange={formik.handleChange}
                    value={formik.values.gender}
                    onBlur={formik.handleBlur}
                  >
                    <option value="male">Male </option>
                    <option value="female">Female </option>
                    <option value="other">Prefer not to say</option>
                  </select>
                  {formik.touched.gender && formik.errors.gender ? (
                    <div className="error-msg">{formik.errors.gender}</div>
                  ) : null}

                  <input
                    id="age"
                    name="age"
                    type="number"
                    placeholder="Age"
                    min="15"
                    max="99"
                    onChange={formik.handleChange}
                    value={formik.values.age}
                    onBlur={formik.handleBlur}
                  />

                  {formik.touched.age && formik.errors.age ? (
                    <div className="error-msg">{formik.errors.age}</div>
                  ) : null}
                </section>
                <section>
                  <input
                    id="education"
                    name="education"
                    type="education"
                    placeholder="Education"
                    onChange={formik.handleChange}
                    value={formik.values.education}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.education && formik.errors.education ? (
                    <div className="error-msg">{formik.errors.education}</div>
                  ) : null}
                </section>
                <section>
                  <input
                    id="bio"
                    name="bio"
                    type="bio"
                    placeholder="Bio"
                    onChange={formik.handleChange}
                    value={formik.values.bio}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.bio && formik.errors.bio ? (
                    <div className="error-msg">{formik.errors.bio}</div>
                  ) : null}
                </section>
                <section>
                  <input
                    id="interests"
                    name="interests"
                    type="interests"
                    placeholder="Interests"
                    onChange={formik.handleChange}
                    value={formik.values.interests}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.interests && formik.errors.interests ? (
                    <div className="error-msg">{formik.errors.interests}</div>
                  ) : null}
                </section>
                <section>
                  <input
                    id="number"
                    name="number"
                    type="tel"
                    placeholder="Number"
                    onChange={formik.handleChange}
                    value={formik.values.number}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.number && formik.errors.number ? (
                    <div className="error-msg">{formik.errors.number}</div>
                  ) : null}
                </section>
                <section>
                  <input
                    id="address"
                    name="address"
                    type="address"
                    placeholder="Address"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.address && formik.errors.address ? (
                    <div className="error-msg">{formik.errors.address}</div>
                  ) : null}
                </section>
                <section>
                  <input
                    id="profileImageUrl"
                    name="profileImageUrl"
                    type="url"
                    placeholder="Profile Image URL"
                    onChange={formik.handleChange}
                    value={formik.values.profileImageUrl}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.profileImageUrl &&
                  formik.errors.profileImageUrl ? (
                    <div className="error-msg">
                      {formik.errors.profileImageUrl}
                    </div>
                  ) : null}
                </section>
                <section>
                  <input
                    id="backgroundImageUrl"
                    name="backgroundImageUrl"
                    type="url"
                    placeholder="Background Image URL"
                    onChange={formik.handleChange}
                    value={formik.values.backgroundImageUrl}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.backgroundImageUrl &&
                  formik.errors.backgroundImageUrl ? (
                    <div className="error-msg">
                      {formik.errors.backgroundImageUrl}
                    </div>
                  ) : null}
                </section>
              </Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>

        <Modal.Footer>
          <Button>Discard Changes</Button>
          <Button type="submit">Save Changes</Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default EditProfileModal;
