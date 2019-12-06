import React, {useState} from 'react';
import './style.css';

import Card from '../../Utils/Card';
import Modal from "../../Utils/Modal";

const CreateResume = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredPhone, setEnteredPhone] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredSelfDesc, setEnteredSelfDesc] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    console.log(props);

    const onSubmit = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const onCloseModal = () => setIsModalOpen(false);

    console.log(isModalOpen);

    return (
        <section className="create-resume-form">
            {isModalOpen && <Modal onClose={onCloseModal}>可以關閉此視窗了！</Modal>}
            <h1>完成你的第一份履歷</h1>
            <Card>
                <form onSubmit={onSubmit}>
                    <div className="form-control">
                        <label htmlFor="title">Name</label>
                        <input type="text" id="title" value={enteredTitle}
                               onChange={event => setEnteredTitle(event.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="phone">Phone</label>
                        <input type="number" id="phone" value={enteredPhone}
                               onChange={event => setEnteredPhone(event.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" value={enteredEmail}
                               onChange={event => setEnteredEmail(event.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="self-desc">Describe yourself</label>
                        <input type="text" id="selfDesc" value={enteredSelfDesc} height={'3em'}
                               onChange={event => setEnteredSelfDesc(event.target.value)}
                        />
                    </div>
                    <div className="create-resume-form__actions">
                        <button type="submit">I'm done</button>
                        {/*{props.loading && <LoadingIndicator/>}*/}
                    </div>
                </form>
            </Card>
        </section>
    )
};

export default CreateResume;
