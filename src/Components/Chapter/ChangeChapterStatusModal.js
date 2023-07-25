import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Modal } from 'react-bootstrap';

const ChangeChapterStatusModal = ({ id, chapter, onSubmit, onClose }) => {
    console.log(chapter.id)
    const initialValues = {
        associate_chapter_fg: chapter.associate_chapter_fg || true,
        greek_letter_assigned_txt: chapter.greek_letter_assigned_txt || '',
        recharter_date: chapter.recharter_date || '',
    };

    const validationSchema = Yup.object().shape({
        associate_chapter_fg: Yup.boolean(),
        greek_letter_assigned_txt: Yup.string(),
        recharter_date: Yup.date(),
    });


    return (
        <Modal
            id={`chapterModal-${chapter.id}`}
            show={true}
            onHide={onClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Edit Status {chapter.chapter_school_txt}</Modal.Title>
            </Modal.Header>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched, setFieldValue, values }) => (
                    <Form>
                        <Modal.Body>
                            <div className="form-group">
                                <label htmlFor="associate_chapter_fg">Associate Chapter</label>
                                <Field
                                    type="checkbox"
                                    name="associate_chapter_fg"
                                    id="associate_chapter_fg"
                                    checked={values.associate_chapter_fg === true} 
                                    onChange={(e) => setFieldValue('associate_chapter_fg', e.target.checked ? true : false)} 
                                    className={`form-check-input ${touched.associate_chapter_fg && errors.associate_chapter_fg
                                        ? 'is-invalid'
                                        : ''
                                        }`}
                                />
                                {touched.associate_chapter_fg &&
                                    errors.associate_chapter_fg && (
                                        <div className="invalid-feedback">
                                            {errors.associate_chapter_fg}
                                        </div>
                                    )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="greek_letter_assigned_txt">Greek Letter Assigned</label>
                                <Field
                                    name="greek_letter_assigned_txt"
                                    id="greek_letter_assigned_txt"
                                    className={`form-control ${touched.greek_letter_assigned_txt && errors.greek_letter_assigned_txt
                                        ? 'is-invalid'
                                        : ''
                                        }`}
                                />
                                {touched.greek_letter_assigned_txt && errors.greek_letter_assigned_txt && (
                                    <div className="invalid-feedback">{errors.greek_letter_assigned_txt}</div>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="recharter_date">Recharter Date</label>
                                <Field
                                    name="recharter_date"
                                    id="recharter_date"
                                    type="date"
                                    className={`form-control ${touched.recharter_date && errors.recharter_date ? 'is-invalid' : ''
                                        }`}
                                />
                                {touched.recharter_date && errors.recharter_date && (
                                    <div className="invalid-feedback">{errors.recharter_date}</div>
                                )}
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <button type="button" className="btn btn-secondary" onClick={onClose}>
                                Cancel
                            </button>
                            <button type="submit" className="btn btn-primary">
                                Save changes
                            </button>
                        </Modal.Footer>
                    </Form>
                )}
            </Formik>
        </Modal>
    )
};

export default ChangeChapterStatusModal;
