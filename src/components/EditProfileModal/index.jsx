import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useFormik } from "formik";

const EditProfileModal = () => {
  // const handleClose = setShow(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Modal onHide={() => {}}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>

      <form onSubmit={formik.handleSubmit}>
        <Modal.Body>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="First Name"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Last Name"
            onChange={formik.handleChange}
            value={formik.values.email}
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
              id="email"
              name="email"
              type="email"
              placeholder="Gender"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Age"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </section>
          <section>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Education"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </section>
          <section>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Bio"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </section>
          <section>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Interests"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </section>
          <section>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Number"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </section>
          <section>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Adress"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </section>
          <section>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Profile Image URL"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </section>
          <section>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Background Image URL"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </section>
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
