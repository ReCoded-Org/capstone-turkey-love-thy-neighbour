import React from "react";

import { useTranslation } from "react-i18next";

import { Modal, Container, Card, CloseButton } from "react-bootstrap";

import { send } from "emailjs-com";

import { useDispatch, useSelector } from "react-redux";

import { v4 as uuidv4 } from "uuid";

import {
  createInterestString,
  getDefaultGenderImage,
} from "../../utils/helpers";

import { NeighborCardButton } from "../CustomButtons";

import firebaseApp, { firestore } from "../../firebaseConfig";

import "./index.scss";

function NeighborSummaryModal({
  selectedNeighbor,
  setSelectedNeighbor,
  senderEmail,
  senderFullName,
  setEmailAlertStatus,
}) {
  const dispatch = useDispatch();
  const isNeighborSummaryOpen = useSelector(
    (state) => state.popup.isNeighborSummaryOpen
  );
  const { firstName, lastName, email } = selectedNeighbor;
  const uid = useSelector((state) => state.user.authCred?.uid);

  const { t } = useTranslation();

  function sendEmail() {
    setEmailAlertStatus("empty");
    send("service_9rwjsp6", "template_qlu5ttf", {
      from_name: senderFullName,
      from_email: senderEmail,
      to_name: `${firstName} ${lastName}`,
      to_email: email,
    })
      .then(() => setEmailAlertStatus("success"))
      .catch(() => setEmailAlertStatus("danger"));
  }

  function handleInvitation() {
    dispatch({ type: "neighborSummary" });
    sendEmail();
    firestore // create invitation notification for the invited user
      .collection("users")
      .where("email", "==", email)
      .get()
      .then((querySnapshot) => {
        const { docs } = querySnapshot;
        const firstDoc = docs[0];
        const firstDocData = firstDoc.data();
        firstDocData.invitationNotifications.push({
          message: `How was your meeting with ${senderFullName}?`,
          id: uuidv4(),
        });
        firstDoc.ref.update(firstDocData);
      });
    firestore // create invitation notification for the inviter user
      .collection("users")
      .doc(uid)
      .update({
        // eslint-disable-next-line import/no-named-as-default-member
        invitationNotifications: firebaseApp.firestore.FieldValue.arrayUnion({
          message: `How was your meeting with ${firstName} ${lastName}?`,
          id: uuidv4(),
        }),
      });
  }

  return (
    Object.keys(selectedNeighbor).length !== 0 && (
      <Modal
        show={isNeighborSummaryOpen}
        onHide={() => {
          dispatch({ type: "neighborSummary" });
          setSelectedNeighbor({});
        }}
        id="neighbor-summary-modal"
      >
        <Container
          fluid
          style={
            selectedNeighbor?.backgroundImageUrl
              ? {
                  backgroundImage: `url(${selectedNeighbor.backgroundImageUrl})`,
                }
              : null
          }
        >
          <CloseButton onClick={() => dispatch({ type: "neighborSummary" })} />
          <Modal.Header className="d-flex flex-column flex-sm-row justify-content-center justify-content-sm-start justify-content-sm-start modal-header">
            <img
              className="profile-photo"
              alt="profile"
              style={
                selectedNeighbor.gender === "Prefer not to say" &&
                !selectedNeighbor.profileImageUrl
                  ? { width: "190px" }
                  : null
              }
              src={
                selectedNeighbor.profileImageUrl ||
                getDefaultGenderImage(selectedNeighbor.gender)
              }
            />
            <p className="text-center text-sm-start mb-0">{`${selectedNeighbor?.firstName} ${selectedNeighbor?.lastName}`}</p>
          </Modal.Header>

          <Modal.Body>
            <Card>
              <Card.Body>
                <Card.Title className="card-title">
                  {t("summodal_title")}
                </Card.Title>
                <ul className="d-flex flex-column justify-content-around  mb-0">
                  <li>
                    {t("profile_general_info_card_age")}{" "}
                    <span>
                      {selectedNeighbor?.age
                        ? selectedNeighbor?.age
                        : t("neighborssummod_age_tba")}
                    </span>
                  </li>
                  <li>
                    {t("profile_general_info_card_gender")}{" "}
                    <span>{selectedNeighbor?.gender}</span>
                  </li>
                  <li>
                    {t("profile_about_you_bio")}{" "}
                    <span>
                      {selectedNeighbor?.bio
                        ? selectedNeighbor?.bio
                        : t("neighborssummod_bio_tba")}
                    </span>
                  </li>
                  <li>
                    {t("profile_about_you_interests")}{" "}
                    <span>
                      {selectedNeighbor?.interests === undefined ||
                      selectedNeighbor?.interests.length === 0
                        ? t("neighborssummod_interests_tba")
                        : createInterestString(selectedNeighbor.interests)}
                    </span>
                  </li>
                  <li>
                    {t("profile_general_info_card_education")}{" "}
                    <span>
                      {selectedNeighbor?.education ||
                        t("neighborssummod_education_tba")}
                    </span>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer>
            <NeighborCardButton className="mx-auto" onClick={handleInvitation}>
              {t("neighborcards_button")}
            </NeighborCardButton>
          </Modal.Footer>
        </Container>
      </Modal>
    )
  );
}

export default NeighborSummaryModal;
