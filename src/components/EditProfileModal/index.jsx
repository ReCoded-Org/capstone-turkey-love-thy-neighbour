import React from "react";
import { Modal, Button, Card } from "react-bootstrap";
import { useFormik } from "formik";
import "./index.scss";
import helpers from "../../utils/helpers";
import Logo from "../../images/Logo.svg";

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
    if (!values.district) {
      errors.district = "Required";
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
      district: "",
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

  const toggle = () => {
    handleClick();
  };

  return (
    <Modal show={showModal} onHide={handleClick}>
      <Modal.Header>
        <Modal.Title className="d-flex justify-content-between align-items-center align-content-between">
          <img src={Logo} alt="logo" />
          <span>Edit Profile</span>
        </Modal.Title>
        <Button
          type="button"
          data-toggle="modal"
          className="btn-close"
          aria-label="Close"
          onClick={toggle}
        />
      </Modal.Header>

      <form onSubmit={formik.handleSubmit}>
        <Modal.Body>
          <Card className="form-cards">
            <Card.Body>
              <Card.Text>
                {/* TODO: Fix the overflow issue with the Last Name error message */}
                <section className="d-flex flex-row justify-content-between align-items-stretch">
                  {/* TODO: Change flex direction of the sections that has inputs and error messages inside to column */}
                  <input
                    className="edit-form-input p-2 flex-fill"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="error-msg">{formik.errors.firstName}</div>
                  ) : null}
                </section>
                <section className="d-flex flex-row justify-content-between align-items-stretch">
                  <input
                    className="edit-form-input p-2 flex-fill"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div className="error-msg">{formik.errors.lastName}</div>
                  ) : null}
                </section>
                <section className="d-flex flex-row justify-content-between align-items-stretch">
                  <select
                    className="edit-form-input p-2 flex-fill"
                    id="district"
                    name="district"
                    onChange={formik.handleChange}
                    value={formik.values.district}
                    onBlur={formik.handleBlur}
                  >
                    <option disabled value="">
                      Districts
                    </option>
                    {helpers.districtList.map((district) => {
                      return <option value={district}>{district}</option>;
                    })}
                  </select>
                  {formik.touched.district && formik.errors.district ? (
                    <div className="error-msg">{formik.errors.district}</div>
                  ) : null}
                </section>

                <section className="d-flex flex-row justify-content-between align-items-stretch">
                  <select
                    className="edit-form-input p-2 flex-fill"
                    name="gender"
                    onChange={formik.handleChange}
                    value={formik.values.gender}
                    onBlur={formik.handleBlur}
                  >
                    <option disabled value="">
                      Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female </option>
                    <option value="other">Prefer not to say</option>
                  </select>
                  {formik.touched.gender && formik.errors.gender ? (
                    <div className="error-msg">{formik.errors.gender}</div>
                  ) : null}
                  <input
                    className="edit-form-input p-2 flex-fill"
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
                <section className="d-flex flex-row justify-content-between align-items-stretch">
                  <select
                    className="edit-form-input p-2 flex-fill"
                    id="education"
                    name="education"
                    placeholder="Education"
                    onChange={formik.handleChange}
                    value={formik.values.education}
                    onBlur={formik.handleBlur}
                  >
                    <option disabled value="">
                      Education
                    </option>
                    {helpers.educationList.map((education) => {
                      return <option value={education}>{education}</option>;
                    })}
                  </select>
                  {formik.touched.education && formik.errors.education ? (
                    <div className="error-msg">{formik.errors.education}</div>
                  ) : null}
                </section>
                <section className="d-flex flex-row justify-content-between align-items-stretch">
                  <input
                    className="edit-form-input p-2 flex-fill"
                    id="bio"
                    name="bio"
                    placeholder="Bio"
                    onChange={formik.handleChange}
                    value={formik.values.bio}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.bio && formik.errors.bio ? (
                    <div className="error-msg">{formik.errors.bio}</div>
                  ) : null}
                </section>
                <section className="d-flex flex-row justify-content-between align-items-stretch">
                  <select
                    className="edit-form-input p-2 flex-fill"
                    id="interests"
                    name="interests"
                    placeholder="Interests"
                    onChange={formik.handleChange}
                    value={formik.values.interests}
                    onBlur={formik.handleBlur}
                  >
                    {/* TODO: Move the helper function inside utils/helpers */}
                    <option disabled value="">
                      Interests
                    </option>
                    {helpers.activityList.map((activity) => {
                      return <option value={activity}>{activity}</option>;
                    })}
                  </select>
                  {formik.touched.interests && formik.errors.interests ? (
                    <div className="error-msg">{formik.errors.interests}</div>
                  ) : null}
                </section>
                <section className="d-flex flex-row justify-content-between align-items-stretch">
                  <input
                    className="edit-form-input p-2 flex-fill"
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
                <section className="d-flex flex-row justify-content-between align-items-stretch">
                  <input
                    className="edit-form-input p-2 flex-fill"
                    id="address"
                    name="address"
                    placeholder="Address"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.address && formik.errors.address ? (
                    <div className="error-msg">{formik.errors.address}</div>
                  ) : null}
                </section>
                <section className="d-flex flex-row justify-content-between align-items-stretch">
                  <input
                    className="edit-form-input p-2 flex-fill"
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
                <section className="d-flex flex-row justify-content-between align-items-stretch">
                  <input
                    className="edit-form-input p-2 flex-fill"
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
          <Button className="edit-form-discard-button" onClick={toggle}>
            Discard Changes
          </Button>
          <Button type="submit" className="edit-form-button">
            Save Changes
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default EditProfileModal;
