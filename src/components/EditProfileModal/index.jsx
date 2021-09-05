import React from "react";

import { Modal, Button, Card } from "react-bootstrap";

import Multiselect from "multiselect-react-dropdown";

import { useFormik } from "formik";

import { useTranslation } from "react-i18next";

import { useSelector, useDispatch } from "react-redux";

import { firestore } from "../../firebaseConfig";
import constants, { newActivityList } from "../../utils/constants";
import { SaveChangesButton, DiscardChangesButton } from "../CustomButtons";

import { ReactComponent as Logo } from "../../images/logoGrayBg.svg";
import "./index.scss";

const EditProfileModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isEditProfileOpen = useSelector(
    (state) => state.popup.isEditProfileOpen
  );
  const { firestoreDoc, authCred } = useSelector((state) => state.user);
  const { district } = firestoreDoc;
  const { uid } = authCred;

  function toggleEditProfileModal() {
    dispatch({ type: "editProfile" });
  }

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
    if (values.interests.length === 0) {
      errors.interests = "Required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: firestoreDoc?.firstName || "",
      lastName: firestoreDoc?.lastName || "",
      district: firestoreDoc?.district || "",
      gender: firestoreDoc?.gender || "",
      age: firestoreDoc?.age || 15,
      education: firestoreDoc?.education || "",
      bio: firestoreDoc?.bio || "",
      interests: firestoreDoc?.interests || [],
      number: firestoreDoc?.number || "",
      address: firestoreDoc?.address || "",
      profileImageUrl: firestoreDoc?.profileImageUrl || "",
      backgroundImageUrl: firestoreDoc?.backgroundImageUrl || "",
    },
    validate,
    onSubmit: (values) => {
      firestore
        .collection("users")
        .doc(uid)
        .set(values, { merge: true })
        .then(toggleEditProfileModal);
    },
  });

  return (
    <Modal
      show={isEditProfileOpen}
      onHide={district && toggleEditProfileModal}
      id="edit-profile-modal"
    >
      <Modal.Header className="d-flex justify-content-between">
        <Logo />
        <h2 className="mx-auto">{t("edit_profile_title")}</h2>
        <Button
          type="button"
          data-toggle="modal"
          className="btn-close"
          aria-label="Close"
          onClick={district && toggleEditProfileModal}
        />
      </Modal.Header>

      <Modal.Body>
        <Card className="form-cards">
          <Card.Body>
            <form onSubmit={formik.handleSubmit} id="edit-profile-form">
              <div className="d-flex flex-column justify-content-between align-items-stretch">
                <input
                  className="p-2 flex-fill"
                  id="firstName"
                  name="firstName"
                  placeholder={t("edit_profile_name_pholder")}
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="error-msg">{formik.errors.firstName}</div>
                ) : null}
              </div>
              <div className="d-flex flex-column justify-content-between align-items-stretch">
                <input
                  className="p-2 flex-fill"
                  id="lastName"
                  name="lastName"
                  placeholder={t("edit_profile_last_name_pholder")}
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="error-msg">{formik.errors.lastName}</div>
                ) : null}
              </div>
              <div className="d-flex flex-column justify-content-between align-items-stretch">
                <select
                  className="p-2 flex-fill"
                  id="district"
                  name="district"
                  onChange={formik.handleChange}
                  value={formik.values.district}
                  onBlur={formik.handleBlur}
                >
                  <option disabled value="">
                    {t("edit_profile_district_pholder")}
                  </option>
                  {constants.districtList.map((districtInfo) => {
                    return (
                      <option key={districtInfo} value={districtInfo}>
                        {districtInfo}
                      </option>
                    );
                  })}
                </select>
                {formik.touched.district && formik.errors.district ? (
                  <div className="error-msg">{formik.errors.district}</div>
                ) : null}
              </div>

              <div className="gender-age-wrapper d-flex">
                <div className="d-flex flex-column">
                  <select
                    className="p-2"
                    name="gender"
                    onChange={formik.handleChange}
                    value={formik.values.gender}
                    onBlur={formik.handleBlur}
                  >
                    <option disabled value="">
                      {t("edit_profile_gender_pholder")}
                    </option>
                    <option defaultValue="Male">{t("male")}</option>
                    <option defaultValue="Female">{t("female")} </option>
                    <option defaultValue="Prefer not to say">
                      {t("prefernottosay")}
                    </option>
                  </select>

                  {formik.touched.gender && formik.errors.gender ? (
                    <div className="error-msg">{formik.errors.gender}</div>
                  ) : null}
                </div>
                <div className="d-flex flex-column">
                  <input
                    className="p-2"
                    id="age"
                    name="age"
                    type="number"
                    placeholder={t("edit_profile_age_pholder")}
                    min="15"
                    max="99"
                    onChange={formik.handleChange}
                    value={formik.values.age}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
              <div className="d-flex flex-column justify-content-between align-items-stretch">
                <select
                  className="p-2 flex-fill"
                  id="education"
                  name="education"
                  onChange={formik.handleChange}
                  value={formik.values.education}
                  onBlur={formik.handleBlur}
                >
                  <option disabled value="">
                    {t("edit_profile_education_pholder")}
                  </option>
                  {constants.educationList.map((education) => {
                    return (
                      <option key={education} value={education}>
                        {education}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="d-flex flex-column justify-content-between align-items-stretch">
                <textarea
                  className="p-2 flex-fill"
                  id="bio"
                  name="bio"
                  placeholder={t("edit_profile_bio_pholder")}
                  onChange={formik.handleChange}
                  value={formik.values.bio}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="d-flex flex-column justify-content-between align-items-stretch">
                <Multiselect
                  placeholder={t("edit_profile_interests_pholder")}
                  displayValue="content"
                  onRemove={(selectedOptions) => {
                    formik.values.interests = selectedOptions;
                  }}
                  onSelect={(selectedOptions) => {
                    formik.values.interests = selectedOptions;
                  }}
                  options={newActivityList}
                  selectedValues={formik.values.interests}
                />
                {formik.touched.interests && formik.errors.interests ? (
                  <div className="error-msg">{formik.errors.interests}</div>
                ) : null}
              </div>
              <div className="d-flex flex-column justify-content-between align-items-stretch">
                <input
                  className="p-2 flex-fill"
                  id="number"
                  name="number"
                  type="tel"
                  placeholder={t("edit_profile_phone_pholder")}
                  onChange={formik.handleChange}
                  value={formik.values.number}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="d-flex flex-column justify-content-between align-items-stretch">
                <input
                  className="p-2 flex-fill"
                  id="address"
                  name="address"
                  placeholder={t("edit_profile_adress_pholder")}
                  onChange={formik.handleChange}
                  value={formik.values.address}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="d-flex flex-column justify-content-between align-items-stretch">
                <input
                  className="p-2 flex-fill"
                  id="profileImageUrl"
                  name="profileImageUrl"
                  type="url"
                  placeholder={t("edit_profile_profile_image_pholder")}
                  onChange={formik.handleChange}
                  value={formik.values.profileImageUrl}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="d-flex flex-column justify-content-between align-items-stretch">
                <input
                  className="p-2 flex-fill"
                  id="backgroundImageUrl"
                  name="backgroundImageUrl"
                  type="url"
                  placeholder={t("edit_profile_background_image_pholder")}
                  onChange={formik.handleChange}
                  value={formik.values.backgroundImageUrl}
                  onBlur={formik.handleBlur}
                />
              </div>
            </form>
          </Card.Body>
        </Card>
      </Modal.Body>
      <Modal.Footer>
        {district && (
          <DiscardChangesButton onClick={toggleEditProfileModal}>
            {t("edit_profile_discard_button")}
          </DiscardChangesButton>
        )}
        <SaveChangesButton type="submit" form="edit-profile-form">
          {t("edit_profile_save_button")}
        </SaveChangesButton>
      </Modal.Footer>
    </Modal>
  );
};

export default EditProfileModal;
