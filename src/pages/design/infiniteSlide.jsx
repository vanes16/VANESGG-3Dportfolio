import "../style/style.css";

const InfiniteSlide = () => {
  return (
    <div className="border-b border-white border-opacity-50">
      <div
        className="slider"
        style={{ "--width": "100px", "--height": "100px", "--quantity": "9" }}
      >
        <div className="list">
          <div className="item" style={{ "--position": 1 }}>
            <img src="/languages icon/c.svg" alt="" />
          </div>
          <div className="item" style={{ "--position": 2 }}>
            <img src="/languages icon/csharp.svg" alt="" />
          </div>
          <div className="item" style={{ "--position": 3 }}>
            <img src="/languages icon/cpp.svg" alt="" />
          </div>
          <div className="item" style={{ "--position": 4 }}>
            <img src="/languages icon/go.svg" alt="" />
          </div>
          <div className="item" style={{ "--position": 5 }}>
            <img src="/languages icon/java.svg" alt="" />
          </div>
          <div className="item" style={{ "--position": 6 }}>
            <img src="/languages icon/javascript.svg" alt="" />
          </div>
          <div className="item" style={{ "--position": 7 }}>
            <img src="/languages icon/kotlin.svg" alt="" />
          </div>
          <div className="item" style={{ "--position": 8 }}>
            <img src="/languages icon/php.png" alt="" />
          </div>
          <div className="item" style={{ "--position": 9 }}>
            <img src="/languages icon/python.svg" alt="" />
          </div>
        </div>
      </div>
      <div
        className="slider mt-4 mb-5"
        reverse="true"
        style={{ "--width": "100px", "--height": "100px", "--quantity": "8" }}
      >
        <div className="list">
          <div className="item" style={{ "--position": 1 }}>
            <img src="/others icon/android.svg" alt="" />
          </div>
          <div className="item" style={{ "--position": 2 }}>
            <img src="/others icon/django.svg" alt="" />
          </div>
          <div className="item" style={{ "--position": 3 }}>
            <img src="/others icon/flask.svg" alt="" />
          </div>
          <div className="item" style={{ "--position": 4 }}>
            <img src="/others icon/mysql.svg" alt="" />
          </div>
          <div className="item" style={{ "--position": 5 }}>
            <img src="/others icon/nodejs.svg" alt="" />
          </div>
          <div className="item" style={{ "--position": 6 }}>
            <img src="/others icon/react.svg" alt="" />
          </div>
          <div className="item" style={{ "--position": 7 }}>
            <img src="/others icon/spring.svg" alt="" />
          </div>
          <div className="item" style={{ "--position": 8 }}>
            <img src="/others icon/tensorflow.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfiniteSlide;
