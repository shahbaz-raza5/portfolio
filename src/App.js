import React from "react";
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import Footer from "./components/Footer";
// import Home from ".pages/Home";
import Project from "./pages/Project";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Contact from "./pages/Contact";


const theme = extendTheme({
styles: {
global: {
"html, body": {
minHeight: "100vh",
},
},
},
});

const App = () => {
return (
<ChakraProvider theme={theme}>
    
<CSSReset />
<Router>
<Header />

<Routes>
<Route exact path="/" element={<Hero/>} />
<Route exact path="/projects" element={<Project/>} />
<Route exact path="/resume" element={<Resume/>} />
<Route exact path="/about" element={<About/>} />
<Route exact path="/contact" element={<Contact/>} />
</Routes>
{/* <Footer /> */}
</Router>
</ChakraProvider>
);
};

export default App;
