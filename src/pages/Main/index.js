import React, { useState } from 'react';

import axios from 'axios';
import pdImage from '../../assets/123.svg';
export default function Main() {

    const [file, setFile] = useState(null);
    console.log(file)

    function HandlerCad(e) {
        e.preventDefault();

        const data = new FormData();
        data.append('file', file);

        const options = {
            onuploadProgress: (progressEvent) => {
                const { loaded, total } = progressEvent;
                let percent = Math.floor((loaded * 100) / total);
                console.log(`${loaded}kb até ${total}kb | {${percent}%}`)
            }
        }

        axios.post('http://localhost:3333/convertToPDF', data, options).then(result => {
            if (result) {
                window.location = result.data;
            }
        })
            .catch(error => {
                console.error(error.message)
            });


    }


    return (
        <div className="container">
           
            <div className="content">
                <h2>Conversor PDF Online</h2>
                <p>Converta facilmente de e para PDF em segundos.</p>
                <div className="putPDF">
                    <div className="formPDF">
                        <form onSubmit={HandlerCad} encType="multipart/form-data" >
                            <input accept=".doc,.docx" className="fileinput" type="file" id="file" name="file" onChange={event => { setFile(event.target.files[0]) }}></input>
                            <label for="file" className="labelinput">
                                <div className="inputImage">
                                    <img src={pdImage} />
                                </div>
                            </label>
                            <button type="submit" className="btnConv">COMPRESS</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>



    )
}
