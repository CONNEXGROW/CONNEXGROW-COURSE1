document.addEventListener('DOMContentLoaded', function () {
  const courses = [
    {
      title: "Introduction to Programming",
      description: "Learn the basics of programming.",
      videoURL: " "
    }
  ];

  const coursesSection = document.getElementById('courses');
  courses.forEach(course => {
    const courseElement = document.createElement('div');
    courseElement.className = 'course';
    courseElement.innerHTML = `
      <h2>${course.title}</h2>
      <p>${course.description}</p>
      <button onclick="playVideo('${course.videoURL}')">Watch Video</button>
      <div id="video-${course.title.replace(/\s+/g, '')}" style="display:none;">
        <video controls width="100%">
          Your browser does not support the video tag.
        </video>
      </div>
    `;
    coursesSection.appendChild(courseElement);
  });
});

window.playVideo = function(videoURL) { // Ensure this function is in the global scope
  console.log('playVideo called with URL:', videoURL); // Debug line
  const videoContainers = document.querySelectorAll('div[id^="video-"]');
  videoContainers.forEach(container => {
    container.style.display = 'none'; // Hide all video containers
  });

  const videoElement = document.querySelector('video');
  if (videoElement) {
    console.log('Video element found, setting src.'); // Debug line
    videoElement.src = videoURL;
    videoElement.parentElement.style.display = 'block'; // Show the video container
  } else {
    console.log('No video element found.'); // Debug line
  }
}
