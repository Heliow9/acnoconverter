import React, { useState } from 'react';
import axios from 'axios';
import pdImage from '../assets/123.svg';
export default function Word() {

    const [Wordfile, setWordFile] = useState(null);
    const [Initial, setInitial] = useState(0);
    const [TotalValue, setTotalValue] = useState(0);
    const [percent, setPercent] = useState(0)
    const [onClick, setOnclick] = useState(false)


    function HandlerCad(e) {
        console.log(Wordfile);
        e.preventDefault();
        setOnclick(true)
        const BtnHiden = document.getElementById("donwLink");
        if (onClick === true && !BtnHiden) {
            alert('Aguarde a conclusão da conversão!');
        }

        else if (Wordfile === null) {
            alert('Você precisa selecionar um arquivo.');
            setOnclick(false);
        }
        else if (BtnHiden) {
            BtnHiden.remove();
            alert('Selecione novamente um arquivo!');
            setOnclick(false);


        }


        else {




            const data = new FormData();
            data.append('file', Wordfile);

            const options = {
                onUploadProgress: (progressEvent) => {
                    const { loaded, total } = progressEvent;
                    let percent = Math.floor((loaded * 100) / total);
                    setInitial(loaded);
                    setTotalValue(total);
                    setPercent(percent);
                    console.log(`${loaded}kb até ${total}kb | ${percent}%`);

                }
            }



            axios.post('https://acnoconverter.herokuapp.com/convertDeword', data, options).then(result => {
                if (result) {
                    console.log(result)
                    const archive = result.data;
                    if (archive) {
                        const divForm = document.getElementById('buttons');
                        const link = document.createElement("a");
                        link.download = true;
                        var button = document.createElement("button");
                        link.innerText = "Baixar Arquivo";
                        divForm.appendChild(link)
                        link.setAttribute("href", `${result.data}`);
                        link.setAttribute('id', 'donwLink')
                        console.log(divForm);


                    }
                }
            })
                .catch(error => {
                    console.error(error.message)
                });


        }

    }
    return (
        <div className="container">

            <div className="content">
                <h2>Conversor de WORD para PDF</h2>
                <p>Converta facilmente de WORD para PDF em segundos.</p>
                <div className="putPDF">
                    <div className="formPDF">
                        <form encType="multipart/form-data" onSubmit={HandlerCad} >
                            <input accept=".doc,.docx" className="fileinput" type="file" id="file" name="file" onChange={event => { setWordFile(event.target.files[0]) }}></input>
                            <label for="file" className="labelinput">
                                <div className="inputImage">
                                    <img src={pdImage} />
                                </div>
                            </label>
                            <div id="buttons" className="buttons">
                                <div className="progressValue">
                                    <p>{Initial} kb</p> <p>até {TotalValue}</p> <p>Porcentagem: {percent}%</p>
                                </div>
                                <button type="submit" className="btnConv">COMPRESS</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>



    )
}
