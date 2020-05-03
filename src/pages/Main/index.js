import React, { useState } from 'react';
import '../Main/styles.css';
import Lampada from '../../assets/lampada.svg';
import Seguranca from '../../assets/seguranca.svg';
import Like from '../../assets/like.svg'
import Qualidade from '../../assets/qualidade.svg'
import Cloud from '../../assets/cloud.svg'
import Knife from '../../assets/knife.svg'
export default function Main() {


    return (
        <div className="container">

            <div className="content-welcome">
                <div className="welcome">
                    <div className="card-welcome">
                        <img src={Lampada} />
                        <h4>Como converter?</h4>
                        <article>Arraste e solte o seu arquivo no conversor de PDF on-line. Arquivos de Word, Excel, PPT e imagens serão convertidos para PDF. Arquivos em PDF serão convertidos para o tipo de arquivo escolhido.</article>
                    </div>
                    <div className="card-welcome">
                        <img src={Seguranca} />
                        <h4>Não se preocupe com a segurança.</h4>
                        <article>Arraste e solte o seu arquivo no conversor de PDF on-line. Arquivos de Word, Excel, PPT e imagens serão convertidos para PDF. Arquivos em PDF serão convertidos para o tipo de arquivo escolhido.</article>
                    </div>
                    <div className="card-welcome">
                        <img src={Like} />
                        <h4>Utilize em todos os dispositivos.</h4>
                        <article>Arraste e solte o seu arquivo no conversor de PDF on-line. Arquivos de Word, Excel, PPT e imagens serão convertidos para PDF. Arquivos em PDF serão convertidos para o tipo de arquivo escolhido.</article>
                    </div>
                    <div className="card-welcome">
                        <img src={Qualidade} />
                        <h4>Ótima qualidade.</h4>
                        <article>Arraste e solte o seu arquivo no conversor de PDF on-line. Arquivos de Word, Excel, PPT e imagens serão convertidos para PDF. Arquivos em PDF serão convertidos para o tipo de arquivo escolhido.</article>
                    </div>
                    <div className="card-welcome">
                        <img src={Cloud} />
                        <h4>Acesse de qualquer lugar.</h4>
                        <article>Arraste e solte o seu arquivo no conversor de PDF on-line. Arquivos de Word, Excel, PPT e imagens serão convertidos para PDF. Arquivos em PDF serão convertidos para o tipo de arquivo escolhido.</article>
                    </div>
                    <div className="card-welcome">
                        <img src={Knife} />
                        <h4>Converta para PDF e outros tipos de arquivo.</h4>
                        <article>Você pode criar e converter PDFs em um único local. O nosso criador de PDF é compatível com: Excel, Word, PPT, JPG, PNG, BMP, TIFF e GIF</article>
                    </div>
                </div>

            </div>
        </div>



    )
}
