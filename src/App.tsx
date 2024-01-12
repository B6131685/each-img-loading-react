import { useState } from "react";
import "./App.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Img = ({ URL }: { URL: string }) => {
  const [complete, setComplete] = useState<boolean>(true);

  const handleEvent = () => {
    setComplete(false);
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "auto",
          minHeight: "200px",
          overflow: "hidden",
        }}
      >
        {complete ? (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Skeleton
              style={{
                backgroundColor: "red",
                height: "100px",
                width: "100px",
              }}
              circle={true}
            />
          </div>
        ) : null}
        <img
          loading="lazy"
          onLoad={handleEvent}
          style={{ width: "100%" }}
          src={URL}
          alt="sea"
        />
      </div>
    </>
  );
};

function App() {
  return (
    <>
      <div>
        <Img URL="https://images.unsplash.com/photo-1682687981674-0927add86f2b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Img URL="https://images.unsplash.com/photo-1682685797703-2bb22dbb885b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Img URL="https://images.unsplash.com/photo-1704714695191-a40c000ff64b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
      <div>
        <Img URL="https://images.unsplash.com/photo-1704235275952-d2389cf8c5c4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Img URL="https://images.unsplash.com/photo-1682687982093-4773cb0dbc2e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Img URL="https://images.unsplash.com/photo-1704636487563-8e7c4802680e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
      <div>
        <Img URL="https://images.unsplash.com/photo-1682685794690-dea7c8847a50?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Img URL="https://images.unsplash.com/photo-1704928340939-8a46728a9840?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Img URL="https://images.unsplash.com/photo-1704231208356-7dab9d91e60a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Img URL="https://images.unsplash.com/photo-1704740533983-d3f6a9d190bf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
    </>
  );
}

export default App;
