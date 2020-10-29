

let imageItems = document.querySelectorAll('.item');
// var getFrameContainer = document.getElementById('frame');
// var getFrame = document.getElementById('iframetarget');
var getProductModal = document.getElementById('product_modal');
var getSelectedProduct = document.getElementById('selected_product');


for (image of imageItems) {
	image.addEventListener('click', function() {
		console.log('image clicked');
		console.log(this.id, typeof(this.id));
		//console.log(getFrame);
		// getFrame.src= 'slippers/slip.html';
		// getFrameContainer.style.display = 'block';
		//var imageId = this.id;
		var linkImage = document.getElementById(this.id);
		console.log(linkImage);
		getProductModal.style.display = 'block';
		getSelectedProduct.src = 'img/slip'+this.id+'.jpg';
		
    // document.getElementById('iframetarget').addEventListener("DOMContentLoaded", function() {
    //     console.log('yes');
    //     var bodyIframe = getFrame.document.getElementById('iframe_body');
    //     console.log(bodyIframe);
    //     var pictures = window.frame[iframetarget].document.querySelectorAll('.iframe_image');
    //     console.log(pictures);
    // });


		// 	var innerDoc = getFrame.contentDocument;
		// console.log(innerDoc);

		// var iframeImagesBody = innerDoc.getElementById('iframe_body');
		// console.log(iframeImagesBody);	
	})
}

document.write("\n \n  \n \n \n Hello king Wisest");
document.write("\n \n  \n \n \n Hello king Wisest");
document.write("\n \n  \n \n \n Hello king Wisest");
document.write("\n \n  \n \n \n Hello king Wisest");
document.write("\n \n  \n \n \n Hello king Wisest");
document.write("\n \n  \n \n \n Hello king Wisest");

