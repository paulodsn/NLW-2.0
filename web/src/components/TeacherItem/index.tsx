import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/20542050?s=460&u=dd2cda94b9fd4c62cb15be6d7dc4e33d211bee33&v=4" alt="Paulo Sales"/>
                <div>
                    <strong>Paulo Sales</strong>
                    <span>Programmer</span>
                </div>
            </header>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br /><br />
                Magnam laborum optio voluptatem nesciunt possimus cupiditate, ullam magni culpa et totam placeat reiciendis. Iusto reiciendis perferendis ipsum excepturi laudantium! Minima, reprehenderit.
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>
                        R$ 80,00
                    </strong>
                </p>
                <button type="button">
                    <img src={ whatsappIcon } alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;