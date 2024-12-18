document.getElementById("image-upload").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const userImage = document.getElementById("user-image");
        userImage.src = e.target.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});

document.getElementById("download-btn").addEventListener("click", function() {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Get the background image and the user's image
    const background = document.getElementById("background");
    const userImage = document.getElementById("user-image");

    // Set canvas size to the background size
    canvas.width = background.width;
    canvas.height = background.height;

    // Draw the background on the canvas
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    // Draw the user's image on top of the background
    const imgX = 100; // Position of the user image (adjust as needed)
    const imgY = 100; // Position of the user image (adjust as needed)
    const imgWidth = 100; // Width of the user image (adjust as needed)
    const imgHeight = 100; // Height of the user image (adjust as needed)
    ctx.drawImage(userImage, imgX, imgY, imgWidth, imgHeight);

    // Convert canvas to a downloadable image
    const link = document.createElement("a");
    link.download = "elf-christmas-photo.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
});
