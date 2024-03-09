// import React from 'react';
import './App.css';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Layout from "./components/layout/layout.component";
import Home from "./components/home/home.component";
import ProductDetails from "./components/productdetails/productdetails.component";
// import Footer from './components/footer/footer.component';
import "./components/home/home.component.scss";

function ErrorHandler({error, resetErrorBoundary}: any) {
  return (
     <div role="alert">
        <p>An error occurred:</p>
        <pre>{error.message}</pre>
        <p>Something went wrong. Try clicking the refresh page button to reload the application.</p>
        <button className='btn' onClick={resetErrorBoundary}>
            Refresh Page
        </button>
     </div>
  )
}

function App() {
  // const navigate = useNavigate();
  const tempWindow: any = window;
  let href = tempWindow.href;
  return (
    <div className="App">
      <Router>
        <Layout>
          {/* <ErrorBoundary FallbackComponent={ErrorHandler} onReset={() => { navigate("/") }}> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
          {/* </ErrorBoundary> */}
        </Layout>
      </Router>
        
    </div>
  );
}

export default App;
