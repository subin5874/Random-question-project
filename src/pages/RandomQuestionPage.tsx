import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './RandomQuestionPage.module.css';
import { Link } from 'react-router-dom';

function RandomQuestionPage() {
  const location = useLocation();
  const questionList = location.state || {};
  const [selectQuestion, setSelectQuestion] =
    useState('버튼을 클릭하여 질문에 답해보세요');

  const selectRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questionList.length);
    setSelectQuestion(questionList[randomIndex].content);
  };

  return (
    <div className={styles.main_container}>
      <header>
        <Link to="/" className={styles.back_btn}>
          &lt;돌아가기
        </Link>
        <h2 className={styles.main_title}>질문 돌림판</h2>
      </header>
      <article className={styles.randomQuestion_container}>
        <div className={styles.content_box}>
          <span className={styles.content_item}>{selectQuestion}</span>
        </div>
        <div className={styles.next_btn_box}>
          <button
            type="button"
            className={styles.next_btn}
            onClick={() => selectRandomQuestion()}
          >
            다음 질문
          </button>
        </div>
      </article>
    </div>
  );
}

export default RandomQuestionPage;
