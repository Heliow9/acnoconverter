import React from 'react'
import { Link } from 'react-router-dom';
import '../footer/footer.css';
import '../footer/app.min.css';


export default function Footer() {
    return (
        <div className="footerbar" id="footerbar">
            <div className="toPDF">
                <h3>CONVERTA PARA PDF</h3>
                <ul>
                    <Link to="/Toword"> <li><a className="icon-left img-word-to-pdf group-item"><p>Word Para PDF</p></a></li></Link>
                    <Link to="/ToExcel">  <li><a className="icon-left img-excel-to-pdf group-item"><p>Excel Para PDF</p></a></li></Link>
                    <Link to="/ToPpt"><li><a className="icon-left img-powerpoint-to-pdf group-item"><p>PowerPoint Para PDF</p></a></li></Link>
                    <Link to={"/ToJpg"}> <li><a href="#" className="icon-left img-jpg-to-pdf group-item"><p>JPG Para PDF</p></a></li></Link>
                </ul>
            </div>
            <div className="ToArchivement">
                <h3>CONVERTA DE PDF</h3>
                <ul>
                    <li><a href="#" className="icon-left img-pdf-to-word group-item"><p>PDF para WORD</p></a></li>
                    <li><a href="#" className="icon-left img-pdf-to-excel group-item"><p>PDF para Excel</p></a></li>
                    <li><a href="#" className="icon-left img-pdf-to-powerpoint group-item"><p>PDF para PowerPoint</p></a></li>
                    <li><a href="#" className="icon-left img-pdf-to-png group-item"><p>PDF para PNG</p></a></li>
                    <li><a href="#" className="icon-left img-pdf-to-jpg group-item"><p>PDF para JPG</p></a></li>

                </ul>
            </div>
            <div className="toCompress">
                <h3>Ferramentas de PDF</h3>
                <ul>
                 <Link to="ToCompress"><li><a href="#" className="icon-left img-pdf-compress group-item"><p>Comprimir</p></a></li></Link>
                </ul>
            </div>
        </div>
    )
}
