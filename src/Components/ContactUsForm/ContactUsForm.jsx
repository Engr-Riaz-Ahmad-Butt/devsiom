import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactUsForm.css';
import { useTranslation } from 'react-i18next';

const ContactUsForm = () => {
    const { t } = useTranslation();

    return (
        <div className="form-container">
            <h2 className="lets-see-how">{t('contact_us_form_title')}</h2>
            <p className="have-any-question">{t('contact_us_form_subtitle')}</p>
            <div className="container mt-4">
                <form>
                    <div className="mb-3 d-flex justify-content-center">
                        <div className="col-md-6 col-sm-12">
                            <label className="form-label" htmlFor="formName">{t('form_label_name')}</label>
                            <input name="name" type="text" id="formName" className="form-control" style={{ height: '60px' }} />
                        </div>
                    </div>
                    <div className="mb-3 d-flex justify-content-center">
                        <div className="col-md-6">
                            <label className="form-label" htmlFor="formSubject">{t('form_label_subject')}</label>
                            <input name="subject" type="text" id="formSubject" className="form-control" style={{ height: '60px' }} />
                        </div>
                    </div>
                    <div className="mb-3 d-flex justify-content-center">
                        <div className="col-md-6">
                            <label className="form-label" htmlFor="formEmail">{t('form_label_email')}</label>
                            <input name="email" type="email" id="formEmail" className="form-control" style={{ height: '60px' }} />
                        </div>
                    </div>
                    <div className="mb-3 d-flex justify-content-center">
                        <div className="col-md-6">
                            <label className="form-label" htmlFor="formMessage">{t('form_label_message')}</label>
                            <textarea rows="3" name="message" id="formMessage" className="form-control"></textarea>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="col-md-6">
                            <button type="submit" className="btn btn-primary btn-lg w-100" style={{ backgroundColor: 'rgb(250, 114, 38)', color: 'white', height: '60px' }}>
                                {t('form_button_submit')}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUsForm;
