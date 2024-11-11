import React from 'react';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.main_container}>
      <header>
        <h2 className={styles.main_title}>질문 돌림판</h2>
      </header>
      <article className={styles.start_btn_container}>
        <button type="button" className={styles.start_btn}>
          질문 돌림판 시작하기
        </button>
      </article>
      <article className={styles.question_container}>
        <section className={styles.question_form}>
          <form>
            <div className={styles.add_question_box}>
              <input
                type="text"
                placeholder="질문을 작성하세요!"
                className={styles.input_question}
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
            <button type="button" className={styles.delete_all_btn}>
              모두 삭제
            </button>
          </div>
          <table>
            <tbody>
              <tr className={styles.data_row}>
                <td className={styles.data_question_cell}>
                  <span className={styles.question_item}>질문 1</span>
                </td>
                <td className={styles.data_btn_cell}>
                  <button type="button" className={styles.delete_question_btn}>
                    삭제
                  </button>
                </td>
              </tr>
              <tr className={styles.data_row}>
                <td className={styles.data_question_cell}>
                  <span className={styles.question_item}>질문 2</span>
                </td>
                <td className={styles.data_btn_cell}>
                  <button type="button" className={styles.delete_question_btn}>
                    삭제
                  </button>
                </td>
              </tr>
              <tr className={styles.data_row}>
                <td className={styles.data_question_cell}>
                  <span className={styles.question_item}>질문 3</span>
                </td>
                <td className={styles.data_btn_cell}>
                  <button type="button" className={styles.delete_question_btn}>
                    삭제
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </article>
    </div>
  );
}

export default Home;
