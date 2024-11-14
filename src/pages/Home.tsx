import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const naviage = useNavigate();
  interface question {
    id: number;
    content: string;
  }

  const [inputText, setInputText] = useState<string>('');

  const [questionList, setQuestionList] = useState<question[]>(() => {
    const savedQuestionList = localStorage.getItem('questionsList');
    if (savedQuestionList) {
      return JSON.parse(savedQuestionList);
    }
    return [];
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText) {
      return;
    }
    const newQuestion = { id: questionList.length + 1, content: inputText };
    setQuestionList((prevQuestion) => [...prevQuestion, newQuestion]);
    setInputText('');
  };

  const handleDelete = (id: number): void => {
    setQuestionList((prevQuestionList) =>
      prevQuestionList.filter((question) => question.id !== id)
    );
  };

  const handleDeleteAll = () => {
    if (questionList.length > 0) {
      const isConfirmed = window.confirm('모든 질문을 삭제하나요?');
      if (isConfirmed) {
        setQuestionList([]);
      } else {
        return;
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    console.log(JSON.stringify(questionList));
    localStorage.setItem('questionsList', JSON.stringify(questionList));
  }, [questionList]);

  const navigateToRandomQuestionPage = () => {
    if (questionList.length >= 2) {
      naviage('/randomQuestion', { state: questionList });
    } else {
      window.alert('질문이 2개 이상이어야 합니다.');
    }
  };

  return (
    <div className={styles.main_container}>
      <header>
        <h2 className={styles.main_title}>질문 돌림판</h2>
      </header>
      <article className={styles.start_btn_container}>
        <button
          type="button"
          onClick={() => navigateToRandomQuestionPage()}
          className={styles.start_btn}
        >
          질문 돌림판 시작하기
        </button>
      </article>
      <article className={styles.question_container}>
        <section className={styles.question_form}>
          <form onSubmit={handleSubmit}>
            <div className={styles.add_question_box}>
              <input
                type="text"
                value={inputText}
                placeholder="질문을 작성하세요!"
                className={styles.input_question}
                onChange={handleInputChange}
              />
              <button type="submit" className={styles.add_question_btn}>
                추가
              </button>
            </div>
          </form>
        </section>
        <section className={styles.question_list_container}>
          <div className={styles.question_list_topbar}>
            <span className={styles.list_title}>질문 리스트</span>
            <button
              type="button"
              onClick={() => handleDeleteAll()}
              className={styles.delete_all_btn}
            >
              모두 삭제
            </button>
          </div>
          <table>
            <tbody>
              {questionList.map((data, i) => {
                return (
                  <tr key={i} className={styles.data_row}>
                    <td className={styles.data_question_cell}>
                      <span className={styles.question_item}>
                        {data.content}
                      </span>
                    </td>
                    <td className={styles.data_btn_cell}>
                      <button
                        type="button"
                        onClick={() => handleDelete(data.id)}
                        className={styles.delete_question_btn}
                      >
                        삭제
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </article>
    </div>
  );
}

export default Home;
