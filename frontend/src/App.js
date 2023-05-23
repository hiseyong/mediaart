import { Menu } from "./components/Menu";
import { Main } from "./components/Main";
import { Memory } from "./components/Memory";
import { Sound } from "./components/Sound";
import { PhotoZone } from "./components/PhotoZone";
import { TreeAnimation } from "./components/tree/TreeAnimation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useClientWidthHeight } from "./hooks/useClientWidthHeight";
import { Footer } from "./components/Footer";
import { MemoryForm } from "./components/MemoryForm";
function App() {
  const clientRect = useClientWidthHeight();
  const canvasWidth = clientRect.innerWidth;
  const canvasHeight = clientRect.innerHeight;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/memory" element={<Memory/>}/>
          <Route path="/sound" element={<Sound/>}/>
          <Route path="/photozone" element={<PhotoZone/>}/>
          <Route path="/memoryform" element={<MemoryForm/>}/>
          <Route path="/treeanimation" element={<TreeAnimation  canvasWidth={canvasWidth} canvasHeight={canvasHeight}/>}/>
          <Route path="/" element={<Main/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
