

var y = function (product, classname) {   // funcao que pega os dados do JSONP 

    // cria elementos para mostrar os dados
	var coloca = document.createElement("li");
	coloca.className = classname;
    var element = document.createElement("div");             
	var clica = document.createElement("a");                
	var preco = document.createElement ("p");
	var parcelas = document.createElement ("p");
    var img = document.createElement("img");
	clica.href = "https:" + product.detailUrl;
    img.src = "https:" + product.imageName;
    img.alt = product.imageName;
    element.innerText = product.name;
	preco.innerText = "De" + " " + product.oldPrice + " " + "Por" + " " + product.price	;
	parcelas.innerText = "Ou " + product.productInfo.paymentConditions ;
	//cria filhos para mostrar dados de todos os produtos
	carousel.appendChild(element)
	clica.appendChild(element);
    clica.appendChild(img);
	clica.appendChild(preco);
	coloca.appendChild(clica);
	return coloca;
};
  
var X = function (recommendations) {
	
	var principal = document.getElementById("principal");
	var recomendacao = document.querySelector("#container .carousel__track");
	
	var clica = y(recommendations.data.reference.item, "");
	principal.appendChild(clica);
	
	recommendations.data.recommendation.forEach(function(element) {
		var clica = y(element, "carousel__slide");
		recomendacao.appendChild(clica);
	});
	
	recomendacao.querySelectorAll('.carousel__slide')[0].classList.add('current-slide');
	
	z();
   
};

var z = function() {
	

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');

const slideSize = slides[0].getBoundingClientRect(); // mede o tamanho da imagem dependendo do tamanho do browser
const slideWidth = slideSize.width;

//colocar os slides um do lado do outro 

//slides[0].style.left = slideWidth*0 + 'px';
//slides[1].style.left = slideWidth*1 + 'px';
//slides[2].style.left = slideWidth*2 + 'px';

const setSlidePosition = (slide, index) => {
	
	slide.style.left = slideWidth * index + 'px';
	
}

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
	
	track.style.transform = 'translateX(-' + targetSlide.style.left + ')'
	currentSlide.classList.remove('current-slide');
	targetSlide.classList.add('current-slide');
	
}

// quando clicar no botao da direita, mover os slides para a direita 

nextButton.addEventListener('click', e => {              //espera clique do mouse para rolar imagens para direita
	
	let currentSlide = track.querySelector('.current-slide');
	if(!currentSlide) {
		currentSlide = track.querySelectorAll('.carousel__slide')[0];  //caso nao haja currentSlide 
	}
	const nextSlide = currentSlide.nextElementSibling;
	

	if(nextSlide){moveToSlide(track, currentSlide, nextSlide);}        //impede que aconteca erro quando chegar no final dos elementos
	
	
});

prevButton.addEventListener('click', e => {
	
	let currentSlide = track.querySelector('.current-slide');
	if(!currentSlide) {
		currentSlide = track.querySelectorAll('.carousel__slide')[0];
	}
	const prevSlide = currentSlide.previousElementSibling;
	if(prevSlide){moveToSlide(track, currentSlide, prevSlide)}	
	
})
// quando clicar no botao da esquerda, mover os slides para a esquerda

}




