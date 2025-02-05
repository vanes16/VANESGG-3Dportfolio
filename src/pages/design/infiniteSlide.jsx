import "../style/style.css";

const InfiniteSlide = () => {
  return (
    <div>
      <div
        className="slider mt-10 "
        style={{ "--width": "100px", "--height": "100px", "--quantity": "9" }}
      >
        <div className="list">
          <div className="item" style={{ "--position": 1 }}>
            <img src="/languages icon/c.svg" alt="" />
          </div>
          <div className="item" style={{ "--position": 2 }}>
            <img src="/languages icon/c#.svg" alt="" />
          </div>
          <div className="item" style={{ "--position": 3 }}>
            <img src="/languages icon/c++.svg" alt="" />
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
        className="slider mt-4"
        reverse="true"
        style={{ "--width": "100px", "--height": "100px", "--quantity": "9" }}
      >
        <div className="list">
          <div className="item" style={{ "--position": 1 }}>
            <img src="/languages icon/c.svg" alt="" />
          </div>
          <div className="item" style={{ "--position": 2 }}>
            <img src="/languages icon/c#.svg" alt="" />
          </div>
          <div className="item" style={{ "--position": 3 }}>
            <img src="/languages icon/c++.svg" alt="" />
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
    </div>
  );
};
export default InfiniteSlide;
