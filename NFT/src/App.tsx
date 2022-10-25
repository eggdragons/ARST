import { Link, useSearchParams } from "react-router-dom";
import { Change } from "./components/Change";
import { arrayBgItem, arrayColorItem } from "./utils";
const App: React.FC = () => {
  const [searchParams] = useSearchParams();

  const query1 = searchParams.get("query1");
  const query2 = searchParams.get("query2");
  const query3 = searchParams.get("query3");

  return (
    <Link to="scroll">
      <div style={Object.assign({ background: "black" }, singlePageStyles)}>
        <div style={relativeStyles}>
          <img
            className="d-block w-100"
            src={arrayBgItem[Number(query1)]}
            alt={"bg"}
            width="500px"
            height="500px"
          />
          <div style={absoluteStyles}>
            <Change
              shape={query3}
              styles={Object.assign(
                { fill: arrayColorItem[Number(query2)] },
                svgStyles
              )}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default App;

const centerStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const singlePageStyles: React.CSSProperties = Object.assign(centerStyles, {
  height: "100vh",
});

const svgStyles: React.CSSProperties = {
  width: "500px",
  height: "500px",
};

const relativeStyles: React.CSSProperties = Object.assign(centerStyles, {
  position: "relative",
});

const absoluteStyles: React.CSSProperties = {
  position: "absolute",
};
