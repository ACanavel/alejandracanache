const loadingProgress = document.getElementById("loading-progress");
        let progress = 0;

        function updateProgress() {
            loadingProgress.textContent = progress + "%";
            if (progress < 100) {
                progress++;
                setTimeout(updateProgress, 30); // Simulating progress increment
            } else {
                window.location.href = "portafolio.html";
            }
        }

        updateProgress();