import styles from './App.module.css';
import { buttonsData } from './data/calcData.js';

const buttons = [
  [7, 8, 9, 'C'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '='],
];

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.calculator}>
        <div className={styles.display}>
          <div className={styles['output-value']}>123453</div>
        </div>
        <div className={styles.buttons}>
          {buttons.flat().map((btn) => {
            return (
              <button
                key={buttonsData[btn].id}
                value={btn}
                data-id={buttonsData[btn].id}
                className={`${styles['calc-button']} ${styles[buttonsData[btn].className]}`}
              >
                {btn}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
