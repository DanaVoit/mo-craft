import MultipleImageSlider from "./Slider";
import about from "../assets/img/about/about.webp";
import about2 from "../assets/img/about/about2.webp";
import about3 from "../assets/img/about/about3.webp";

const aboutImages = [about, about2, about3];

export default function About() {
  return (
    <div className="container about">
      <MultipleImageSlider images={aboutImages} />
      <div className="about-info">
        <h1 className="about-info-title">твій стиль - твої правила</h1>
        <div className="about-info-txt">
          <p>
            Зустрічайте{" "}
            <span className="about-info-txt about-info-txt--accent">
              M&O Craft
            </span>{" "}
            - там, де любов перетворюється на мистецтво.
          </p>
          <p>
            🌟 Ми, Микола та Оксана,{" "}
            <span className="about-info-txt about-info-txt--accent">
              засновники сімейної майстерні
            </span>
            , яка виросла з наших спільних мрій і прагнень. З кожним шматком
            шкіри, з кожним стібком нитки, ми вкладаємо частинку нашої душі, щоб
            створювати не просто речі, а спогади, які зігрівають серце.
          </p>
          🎁 Сьогодні{" "}
          <span className="about-info-txt about-info-txt--accent">
            M&O Craft
          </span>{" "}
          це не просто вироби з натуральної шкіри. Це - емоції, які ми даруємо
          кожному, хто цінує ручну роботу і тепло сімейних традицій. Від
          документоорганайзерів до ексклюзивних аксесуарів - кожна річ створена{" "}
          <span className="about-info-txt about-info-txt--accent">
            з любов’ю та турботою.
          </span>
          <p id="catalog">
            🌍 Живучи та працюючи у Польщі, ми, разом з нашим маленьким
            помічником, прагнемо дарувати гарні емоції всім, хто бажає отримати
            частинку{" "}
            <span className="about-info-txt about-info-txt--accent">
              нашого сімейного тепла.
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
