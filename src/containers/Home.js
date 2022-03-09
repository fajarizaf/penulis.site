import React, { Fragment } from 'react';
import CardBio from './element/CardBio';
import ListPost from './element/ListPost';

function Home() {

  return (
    <Fragment>
      <div className="main">
        <h1 className="font-1">Catatan Programming Bahasa Indonesia</h1>
        <h3 className="font-3">Hanya sebuah dokumentasi tertulis agar tidak lupa tentang hal yang sudah pernah di pelajari. dan berusaha membagikanya untuk para pembaca.</h3>
        <div className="divider"></div>
        <ListPost />
        <CardBio />
      </div>
    </Fragment>
  )
}

export default Home;
