// Simulated job data (replace with actual data from API)
const jobsData = [
  { title: 'Software Engineer', company: 'Tech Co.', location: 'Tokyo', description: "Tech Co., based in Tokyo, seeks a Software Engineer to contribute to cutting-edge projects in software development. The role involves designing, implementing, and maintaining software solutions to meet the company's technical requirements. Collaborating with cross-functional teams, the Software Engineer will participate in the full software development lifecycle, from initial concept to deployment. The ideal candidate possesses strong programming skills, a deep understanding of software engineering principles, and a passion for innovation in the tech industry." },
  { title: 'Marketing Manager', company: 'Marketing Agency', location: 'Osaka', description: "As a Marketing Manager at our Marketing Agency in Osaka, you'll lead strategic campaigns and initiatives to drive client success and brand recognition. Your role involves crafting innovative marketing strategies, overseeing the implementation of various marketing channels, and analyzing campaign performance to optimize results. You'll collaborate closely with clients to understand their goals and develop tailored marketing solutions that align with their objectives. With your creative flair and analytical skills, you'll play a key role in shaping brands' narratives and driving business growth in a dynamic and competitive market." },
  { title: 'Graphic Designer', company: 'Design Studio', location: 'Kyoto', description: "Join our team at Design Studio in Kyoto as a Graphic Designer, where you'll unleash your creativity to deliver visually captivating designs across various mediums. From branding and print materials to digital assets and user interfaces, you'll use your design expertise to convey messages effectively and leave a lasting impact on our clients and their audiences." },
  { title: 'Data Analyst', company: 'Analytics Solutions', location: 'Nagoya', description: "Become a vital part of Analytics Solutions in Nagoya as a Data Analyst, where you'll dive deep into data to uncover valuable insights and drive informed decision-making for our clients. Your role will involve gathering, analyzing, and interpreting data to provide actionable recommendations that optimize business processes and drive growth in a rapidly evolving market landscape." },
  { title: 'Project Manager', company: 'Consulting Firm', location: ' Fukuoka', description: "Take on the role of a Project Manager at our Consulting Firm in Fukuoka, where you'll lead multidisciplinary teams to deliver high-impact projects for our diverse client base. Your responsibilities will include planning, coordinating, and executing projects while ensuring alignment with client objectives and delivering exceptional results within budget and timeline constraints." },
  { title: 'UX/UI Designer', company: 'Digital Agency', location: 'Sapporo', description: "Join the team at our Digital Agency in Sapporo as a UX/UI Designer, where you'll combine your passion for user experience with your design skills to create intuitive and visually stunning digital interfaces. From wireframing and prototyping to usability testing and iterative design, you'll play a crucial role in crafting seamless user experiences that delight our clients and their customers." },
  // Add more job objects as needed
];

// Function to display job listings
function displayJobListings(jobs) {
  const jobListingsContainer = document.getElementById('job-listings');
  jobListingsContainer.innerHTML = ''; // Clear previous listings

  jobs.forEach(job => {
      const jobCard = document.createElement('div');
      jobCard.classList.add('job-card');
      jobCard.innerHTML = `
          <h3>${job.title}</h3>
          <p><strong>Company:</strong> ${job.company}</p>
          <p><strong>Location:</strong> ${job.location}</p>
          <p>${job.description}</p>
      `;
      jobListingsContainer.appendChild(jobCard);
  });
}

// Initial display of job listings
displayJobListings(jobsData);

// Function to filter job listings based on search input
function filterJobs(searchQuery) {
  const filteredJobs = jobsData.filter(job => {
      return job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchQuery.toLowerCase());
  });

  displayJobListings(filteredJobs);
}

// Event listener for search input
document.getElementById('searchInput').addEventListener('input', function() {
  const searchValue = this.value.trim();
  filterJobs(searchValue);
});


  //The modal
var modal = document.getElementById('myModal');

// Insert image inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

//<span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

var modal2 = document.getElementById('myModal2');

var img2 = document.getElementById('myImg2');
var modalImg2 = document.getElementById("img02");
var captionText2 = document.getElementById("caption2");
img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
}

var span2 = document.getElementsByClassName("close2")[0];

span2.onclick = function() {
  modal2.style.display = "none";
}
  
  // Called function to display job listings when the page loads
  window.onload = displayJobListings;
  
//translate

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}
