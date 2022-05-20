import React from 'react'

export const Plantilla = () => {


    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i] = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1] = "block";
        dots[slideIndex - 1].className += " active";
    }

    return (
        <div>
            <div className="slideshow-container">

                <div className="mySlides fade">
                    <div className="numbertext">1 / 3</div>
                    <img src="https://i.pinimg.com/originals/33/8a/55/338a55304e6dc72ef9258968ce045e8d.jpg"></img>
                    <div className="text">Caption Text Descripción de la Imagen hasta 512 caracteres</div>
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">2 / 3</div>
                    <img src="https://img.lovepik.com/photo/50017/2951.jpg_wh860.jpg" ></img>
                    <div className="text">Caption Two Descripción de la Imagen hasta 512 caracteres</div>
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">3 / 3</div>
                    <img src="https://ecologiahoy.net/wp-content/uploads/2020/02/paisajes-natutrales-ecologiaverde-1.jpg" ></img>
                    <div className="text">Caption Three Descripción de la Imagen hasta 512 caracteres</div>
                </div>

                <a className="prev" onclick={plusSlides(-1)}>❮</a>
                <a className="next" onclick={plusSlides(1)}>❯</a>

            </div>

                <div>
                    <span className="dot" onclick={currentSlide(1)}></span>
                    <span className="dot" onclick={currentSlide(2)}></span>
                    <span className="dot" onclick={currentSlide(3)}></span>
                </div>
        </div>
    )
}

export default Plantilla;