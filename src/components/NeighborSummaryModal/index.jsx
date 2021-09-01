import { React } from "react";

import { useTranslation } from "react-i18next";

import { Modal, Container, Card } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";

import {
  createInterestString,
  getDefaultGenderImage,
} from "../../utils/helpers";

import { NeighborCardButton } from "../CustomButtons";

import "./index.scss";

const NeighborSummaryModal = ({ selectedNeighbor, setSelectedNeighbor }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isNeighborSummaryOpen = useSelector(
    (state) => state.popup.isNeighborSummaryOpen
  );

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
          <Modal.Header className="d-flex justify-content-start">
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
            <span>{`${selectedNeighbor?.firstName} ${selectedNeighbor?.lastName}`}</span>
          </Modal.Header>

          <Modal.Body>
            <Card className="info-cards white-card">
              <Card.Body>
                <Card.Title className="card-title">
                  {t("summodal_title")}
                </Card.Title>
                <ul className="d-flex flex-column justify-content-around  mb-0">
                  <li>
                    {t("profile_general_info_card_age")}{" "}
                    <span>
                      {selectedNeighbor?.age || "Age yet to be added."}
                    </span>
                  </li>
                  <li>
                    {t("profile_general_info_card_gender")}{" "}
                    <span>{selectedNeighbor?.gender}</span>
                  </li>
                  <li>
                    {t("profile_about_you_bio")}{" "}
                    <span>
                      {selectedNeighbor?.bio || "Bio yet to be added."}
                    </span>
                  </li>
                  <li>
                    {t("profile_about_you_interests")}{" "}
                    <span>
                      {selectedNeighbor?.interests ===
                        "Interests yet to be added." ||
                      selectedNeighbor?.interests === undefined
                        ? "Interests yet to be added."
                        : createInterestString(selectedNeighbor.interests)}
                    </span>
                  </li>
                  <li>
                    {t("profile_general_info_card_education")}{" "}
                    <span>
                      {selectedNeighbor?.education ||
                        "Education yet to be added."}
                    </span>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer>
            <NeighborCardButton className="mx-auto">
              {t("neighborcards_button")}
            </NeighborCardButton>
          </Modal.Footer>
        </Container>
      </Modal>
    )
  );
};

export default NeighborSummaryModal;
