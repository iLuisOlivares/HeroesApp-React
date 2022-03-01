import React from "react";
import {  Route, Routes } from "react-router-dom";
import { DcScreen } from "../dc/DcScreen";
import { HeroScreen } from "../hero/HeroScreen";
import { MarvelScreen } from "../marvel/MarvelScreen";
import { Navbar } from "../navbar/NavBar";
import { SearchScreen } from "../search/SearchScreen";

export const DashBoardRoutes = () => {

    return (
        <>
          <Navbar></Navbar>
          <div className="container mt-5">
            <Routes>
              <Route path="/" element={<MarvelScreen />} />
              <Route path="dc" element={<DcScreen />} />
              <Route path="marvel" element={<MarvelScreen />} />
              <Route path="hero" element={<HeroScreen />} />
              <Route path="search" element={<SearchScreen />} />
            </Routes>
          </div>
        </>
      );
}


