async function FallImage(){
    const images = [
        "Images/1.jpg",
        "Images/2.jpg",
        "Images/3.jpg",
        "Images/4.jpg",
        "Images/5.jpg",
        "Images/6.jpg",
        "Images/7.jpg",
        "Images/8.jpg",
        "Images/9.jpg",
        "Images/10.jpg",
        "Images/11.jpg",
        "Images/12.jpg",
        "Images/13.jpg",
        "Images/14.jpg",
        "Images/15.jpg",
        "Images/16.jpg",
        "Images/17.jpg",
        "Images/18.jpg",
        "Images/19.jpg"
    ];

    function createFallingImage() {
        const img = document.createElement("img");
        img.src = images[Math.floor(Math.random() * images.length)];
        img.classList.add("falling-image");

        // Set random starting horizontal position
        img.style.left = Math.random() * window.innerWidth + "px";

        // Set random animation duration (speed of fall)
        const duration = Math.random() * 5 + 5; // Duration between 5 and 10 seconds
        img.style.animation = `fall ${duration}s linear`;

        // Add the image to the body
        document.body.appendChild(img);

        // Remove the image once the animation is complete
        setTimeout(() => {
            img.remove();
        }, duration * 1000);
    }

    // Continuously create falling images at random intervals
    setInterval(createFallingImage, 350); // Create a new image every 500 milliseconds

}


const backgroundMusic = document.getElementById("player");

document.addEventListener("DOMContentLoaded", function() {
    const sentences = [
        "Чамд энэхүү захиа очих өдрийн мэндийг хүргэе.",
        "Анхны учрилаа бодохоор үнэхээр гайхам мөн сонирхолтой санагддаг шүү...",
        "Хэрвээ бид OpenMic дээр уулзаагүй мөн юм яриагүй байсан бол...",
        "Түүний дараа болсон бүх зүйлс, дурсамжууд хэзээ ч үүсэхгүй байсан гэж бодохоор...",
        "Бурханд үнэхээр талархмаар.",
        "Амьдралд минь өнгө нэмж мартагдхааргүй сайхан мөчүүдийг бэлэглэсэн чамдаа баярлалаа.",
        "Бид хамтдаа олон сайхан дурсамжуудыг бүтээсэн ч энэ зөвхөн эхлэл нь юм шүү.",
        "Denver - д дахин уулзахыг, өшөө олон гайхалтай дурсамжуудыг бүтээхийг тэсэн ядан хүлээж байна.",
        "Хайр тэвчээртэй энэрэнгүй билээ. Хайр атаархдаггүй. Хайр агсганаддаггүй, ихэрхдэггүй, зүй бус авирладаггүй, өөрийнхийг эрдэггүй, зэвүүрхдэггүй, өс хураадаггүй, зүй бус юманд баярладаггүй, харин үнэнд баярладаг, бүгдийг далдалдаг, бүгдэд итгэдэг, бүгдэд найддаг, бүгдийг тэсвэрлэдэг. Хайр хэзээ ч дуусдаггүй. 1Коринт 13:4-8",
    ];

    const textContainer = document.getElementById("textContainer");
    const startBtn = document.getElementById("startBtn");

    function playAudio() {
        var getaudio = $('#player')[0];
        getaudio.load();
        getaudio.play();
    }
    // Function to display each sentence character by character
    function displaySentence(sentence) {
        return new Promise((resolve) => {
            textContainer.textContent = ""; // Clear previous sentence
            let charIndex = 0;

            // Display characters one by one
            const interval = setInterval(() => {
                if (charIndex < sentence.length) {
                    textContainer.textContent += sentence[charIndex];
                    charIndex++;
                } else {
                    clearInterval(interval);
                    setTimeout(() => {
                        // Fade out the sentence after it's fully displayed
                        textContainer.classList.add("hidden");
                        setTimeout(() => {
                            resolve(); // Resolve promise after fade-out
                            //textContainer.textContent = "";
                        }, 3100); // Wait for the fade-out animation
                    }, 3100); // Wait 1 second before fading out
                }
            }, 105); // Character delay

        });
    }

    // Function to display sentences one by one
    async function displaySentences() {
        for (const sentence of sentences) {
            textContainer.classList.remove("hidden"); // Make the text visible
            await displaySentence(sentence);
            
        }
        await FallImage();
        textContainer.classList.remove("hidden");
        // Show the button again after all sentences are displayed
        //startBtn.classList.remove("invisible");
    }

    // Add click event listener to the button
    startBtn.addEventListener("click", function() {
        textContainer.innerHTML = ''; // Clear previous text
        textContainer.classList.remove("hidden"); // Ensure it's visible
        startBtn.classList.add("invisible"); // Hide the button when sentences start displaying
//        playAudio();
        backgroundMusic.play();
        displaySentences(); // Start displaying sentences
        bloomFlower();
        
    });
});


function bloomFlower() {
    if (document.body.classList.contains('not-loaded')) {
        document.body.classList.remove("not-loaded");
        //document.querySelector('.reloadBtn').textContent = 'Reload Page';
    } else {
      location.reload();
    }
}
