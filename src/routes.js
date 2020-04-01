import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/index';
import Footer from './footer/Footer';
import Nav from './nav/Nav';
import Word from '../src/toPDF/Word';
import Excel from '../src/toPDF/Excel';
import PowerPoint from '../src/toPDF/PowerPoint';
import Jpg from '../src/toPDF/Jpg';
import Compress from '../src/tools/Compress';
export default function Routes(){
    return (

        <BrowserRouter>
            <Nav/>
            <Switch>
                <Route path="/" exact component={Main}  />
                <Route path="/Toword" component={Word} />
                <Route path="/ToExcel" component={Excel} />
                <Route path="/ToPpt" component={PowerPoint} />
                <Route path="/ToJpg" component={Jpg}/>
                <Route path="/ToCompress" component={Compress} />
            </Switch>
            <Footer/>
        </BrowserRouter>

    )
}